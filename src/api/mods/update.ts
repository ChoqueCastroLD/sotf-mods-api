import { Elysia, NotFoundError, t } from 'elysia'
import semver from 'semver';
import sharp from "sharp";

import { prisma } from '../../services/prisma';
import { authMiddleware } from '../../middlewares/auth.middleware'
import { validateModDescription, validateModName, validateModShortDescription } from '../../shared/validation';
import { ValidationError } from '../../errors/validation';
import { uploadFile } from '../../services/files';


const ALLOWED_RESOLUTIONS = [
  { width: 2560, height: 1440 },
  { width: 1080, height: 608 }
];

export const router = new Elysia()
    .use(authMiddleware({ loggedOnly: true }))
    .patch(
        '/api/mods/:mod_id/details',
        async ({ params: { mod_id }, body: { name, description, shortDescription, isNSFW, modThumbnail }, user }) => {
          const mod = await prisma.mod.findFirst({
            where: {
              mod_id
            }
          });
          if (!mod) {
            throw new NotFoundError();
          }
          if (mod.userId !== user?.id) {
            throw new ValidationError([{ field: 'user', message: "You are not the owner of this mod." }])
          }

          const errors = []

          if (name) errors.push(...validateModName(name));
          if (description) errors.push(...validateModDescription(description));
          if (shortDescription) errors.push(...validateModShortDescription(shortDescription));

          if (errors.length > 0) {
            throw new ValidationError(errors)
          }

          await prisma.mod.update({
            where: {
              id: mod.id,
            },
            data: {
              name,
              description,
              shortDescription,
              isNSFW: isNSFW ? isNSFW === 'true' : undefined,
            },
          })

          if (modThumbnail) {
            const ext = modThumbnail.name.split('.').pop()
            
            const image = await sharp(await modThumbnail.arrayBuffer()).metadata()
  
            if (!ALLOWED_RESOLUTIONS.find((res) => res.width === image.width && res.height === image.height)) {
              errors.push({ field: 'modThumbnail', message: "Invalid thumbnail resolution" })
            }

            const thumbnailFilename = await uploadFile(await modThumbnail.arrayBuffer(), `${mod.slug}_thumbnail.${ext}`);

            if (thumbnailFilename) {
              await prisma.modImage.deleteMany({
                where: {
                  modId: mod.id,
                  isThumbnail: true,
                }
              })
              await prisma.modImage.create({
                data: {
                  url: `${Bun.env.FILE_DOWNLOAD_ENDPOINT}/${thumbnailFilename}`,
                  isPrimary: false,
                  isThumbnail: true,
                  mod: {
                    connect: {
                      id: mod.id,
                    }
                  }
                }
              })
            }
          }

          return await prisma.mod.findFirst({ where: { id: mod.id } })
        }, {
            body: t.Object({
              name: t.Optional(t.String()),
              description: t.Optional(t.String()),
              shortDescription: t.Optional(t.String()),
              isNSFW: t.Optional(t.String()),
              modThumbnail: t.Optional(t.File({ type: 'image/png', minSize: 1, maxSize: 8 * 1024 * 1024 })),
            }),
        }
    )