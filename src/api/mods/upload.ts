import { Elysia, NotFoundError, t } from 'elysia'
import slugify from "slugify";
import semver from 'semver';
import sharp from "sharp";

import { prisma } from '../../services/prisma';
import { authMiddleware } from '../../middlewares/auth.middleware'
import { validateModDescription, validateModName, validateModShortDescription } from '../../shared/validation';
import { ValidationError } from '../../errors/validation';
import { uploadFile } from '../../services/files';


const MOD_FILE_SIZE_LIMIT = 10 * 1024 * 1024; // 10MB
const ALLOWED_RESOLUTIONS = [
  { width: 2560, height: 1440 },
  { width: 1080, height: 608 }
];

export const router = new Elysia()
    .use(authMiddleware({ loggedOnly: true }))
    .post(
        '/api/mods/upload',
        async ({ body: { name, shortDescription, description, version, isNSFW, category_id, modFile, modThumbnail }, user }) => {
          const errors = []

          errors.push(...validateModName(name))
          errors.push(...validateModDescription(description))
          errors.push(...validateModShortDescription(shortDescription))
          if (!semver.valid(version)) {
            errors.push({ field: 'version', message: "Invalid mod version provided." })
          }

          if (errors.length > 0) {
            throw new ValidationError("Validation error", errors)
          }

          const image = await sharp(await modThumbnail.arrayBuffer()).metadata()

          if (!ALLOWED_RESOLUTIONS.find((res) => res.width === image.width && res.height === image.height)) {
            throw new ValidationError("Validation error", [{ field: 'modThumbnail', message: "Invalid thumbnail resolution" }])
          }
          
          const file = await modFile.arrayBuffer()

          if ((file.byteLength / 1024) > MOD_FILE_SIZE_LIMIT) {
            throw new ValidationError("Validation error", [{ field: 'modFile', message: "Mod file size exceeds the limit of 10MB." }])
          }

          const slug = slugify(name, { lower: true });
          const existingMod = await prisma.mod.findFirst({
            where: {
              OR: [
                { name },
                { slug },
              ]
            }
          });
          if (existingMod) {
            throw new ValidationError("Validation error", [{ field: 'name', message: "Mod already exists." }])
          }

          const mod = await prisma.mod.create({
            data: {
              name,
              slug,
              shortDescription,
              description,
              isNSFW: isNSFW ?? false,
              isApproved: false,
              isFeatured: false,
              categoryId: category_id ?? 1,
              userId: user?.id,
            }
          })

          let thumbnailFilename;
          try {
            const ext = modThumbnail.name.split('.').pop()
            thumbnailFilename = await uploadFile(await modThumbnail.arrayBuffer(), `${slug}_thumbnail.${ext}`)
            if (!thumbnailFilename) throw thumbnailFilename;
          } catch (error) {
            console.error("Error uploading thumbnail:", error)
            throw new ValidationError("Validation error", [{ field: 'modThumbnail', message: "An error occurred during thumbnail upload." }])
          }

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
          });

          const ext = modFile.name.split('.').pop()
          if (ext !== 'zip' && ext !== 'dll') {
            throw new ValidationError("Validation error", [{ field: 'modFile', message: "Mod file must be a zip or dll file." }])
          }

          let filename;
          try {
            filename = await uploadFile(await modFile.arrayBuffer(), `${slug}_${version}.${ext}`)
            if (!filename) throw filename;
          } catch (error) {
            console.error("Error uploading file:", error)
            throw new ValidationError("Validation error", [{ field: 'modFile', message: "An error occurred during file upload." }])
          }

          await prisma.modVersion.create({
            data: {
              version,
              changelog: "First release",
              downloadUrl: `${Bun.env.FILE_DOWNLOAD_ENDPOINT}/${filename}`,
              isLatest: true,
              filename,
              extension: ext,
              mod: {
                connect: {
                  id: mod.id,
                }
              }
            }
          })

          return mod
        }, {
            body: t.Object({
                name: t.String(),
                shortDescription: t.String(),
                description: t.String(),
                version: t.String(),
                isNSFW: t.Optional(t.Boolean()),
                category_id: t.Optional(t.Number()),
                modFile: t.File({ minSize: 1, maxSize: MOD_FILE_SIZE_LIMIT }),
                modThumbnail: t.File({ type: 'image/png', minSize: 1, maxSize: 8 * 1024 * 1024 }),
            }),
        }
    )