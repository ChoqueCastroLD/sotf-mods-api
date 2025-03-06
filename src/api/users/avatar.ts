import { Elysia, t } from 'elysia'

import { prisma } from "../../services/prisma";
import { loggedOnly } from '../../middlewares/auth.middleware'
import { uploadFile } from '../../services/files';
import { ValidationError } from "../../errors/validation";


export const router = () => new Elysia()
    .use(loggedOnly())
    .post(
        '/api/users/avatar',
        async ({ user, body: { avatar } }) => {
            const avatarBuffer = await avatar.arrayBuffer();
            let avatarFilename;
            try {
              const ext = avatar.name.split(".").pop();
              avatarFilename = await uploadFile(
                avatarBuffer,
                `${user.id}_avatar.${ext}`
              );
              if (!avatarFilename) throw avatarFilename;
            } catch (error) {
              console.error("Error uploading avatar:", error);
              throw new ValidationError([
                {
                  field: "avatar",
                  message: "An error occurred during avatar upload.",
                },
              ]);
            }
            const updatedUser = await prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    imageUrl: `${Bun.env.FILE_DOWNLOAD_ENDPOINT}/${avatarFilename}`,
                }
            });
            return { status: true, data: { imageUrl: updatedUser.imageUrl } };
        }, {
            response: t.Object({
                status: t.Boolean(),
                data: t.Object({
                    imageUrl: t.String(),
                }),
            }),
            body: t.Object({
              avatar: t.File({
                type: ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/gif"],
                minSize: 1,
                maxSize: 8 * 1024 * 1024,
              }),
            }),
        }
    )