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
        '/api/mods/:user_slug/:mod_slug/details',
        async ({ params: { user_slug, mod_slug }, body: { name, description, shortDescription, isNSFW, modThumbnail }, user }) => {
          const mod = await prisma.mod.findFirst({
            where: {
              slug: mod_slug,
              user: {
                slug: user_slug,
              }
            }
          });
          if (!mod) {
            throw new NotFoundError();
          }
          if (mod.userId !== user?.id) {
            throw new ValidationError("Validation error", [{ field: 'user', message: "You are not the owner of this mod." }])
          }

          const errors = []

          if (name) errors.push(...validateModName(name));
          if (description) errors.push(...validateModDescription(description));
          if (shortDescription) errors.push(...validateModShortDescription(shortDescription));

          if (errors.length > 0) {
            throw new ValidationError("Validation error", errors)
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

            const timestamp = new Date().getTime();
            const thumbnailName = await uploadFile(await modThumbnail.arrayBuffer(), `${timestamp}_${mod.slug}_thumbnail.${ext}`);
            if (thumbnailName) {
              await prisma.modImage.create({
                data: {
                  url: `${Bun.env.BASE_URL}/images/${thumbnailName}`,
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