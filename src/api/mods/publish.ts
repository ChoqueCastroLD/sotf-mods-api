import { Elysia, t } from 'elysia'
import slugify from "slugify";
import semver from 'semver';
import sharp from "sharp";

import { prisma } from '../../services/prisma';
import { authMiddleware } from '../../middlewares/auth.middleware'
import { validateModDescription, validateModName, validateModShortDescription } from '../../shared/validation';
import { ValidationError } from '../../errors/validation';
import { uploadFile } from '../../services/files';
import { readManifest } from '../../shared/read-manifest';


const MOD_FILE_SIZE_LIMIT = 80 * 1024 * 1024; // 80MB
const ALLOWED_RESOLUTIONS = [
  { width: 2560, height: 1440 },
  { width: 1080, height: 608 }
];

export const router = new Elysia()
    .use(authMiddleware({ loggedOnly: true }))
    .post(
        '/api/mods/publish',
        async ({ body: { name, shortDescription, description, isNSFW, category_id, modFile, modThumbnail }, user }) => {
          const errors = []

          errors.push(...validateModName(name))
          errors.push(...validateModDescription(description))
          errors.push(...validateModShortDescription(shortDescription))

          if (errors.length > 0) {
            throw new ValidationError(errors)
          }

          const image = await sharp(await modThumbnail.arrayBuffer()).metadata()

          if (!ALLOWED_RESOLUTIONS.find((res) => res.width === image.width && res.height === image.height)) {
            throw new ValidationError([{ field: 'modThumbnail', message: "Invalid thumbnail resolution" }])
          }
          
          const file = await modFile.arrayBuffer()

          if ((file.byteLength / 1024) > MOD_FILE_SIZE_LIMIT) {
            throw new ValidationError([{ field: 'modFile', message: "Mod file size exceeds the limit of 10MB." }])
          }

          const ext = modFile.name.split('.').pop()
          if (ext !== 'zip') {
            throw new ValidationError([{ field: 'modFile', message: "Mod file must be a zip file." }])
          }

          const { id: mod_id, version } = readManifest(file);

          if (!semver.valid(version)) {
            throw new ValidationError([{ field: 'modFile', message: "Invalid mod version provided in manifest.json" }])
          }

          const slug = slugify(name, { lower: true });
          const existingMod = await prisma.mod.findFirst({
            where: {
              OR: [
                { name },
                { slug },
                { mod_id },
              ]
            }
          });
          if (existingMod) {
            throw new ValidationError([{ field: 'name', message: "Mod already exists. Try a different mod name or manifest.json" }])
          }

          const mod = await prisma.mod.create({
            data: {
              mod_id,
              name,
              slug,
              shortDescription,
              description,
              isNSFW: isNSFW === "true",
              isApproved: false,
              isFeatured: false,
              categoryId: parseInt(category_id),
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
            throw new ValidationError([{ field: 'modThumbnail', message: "An error occurred during thumbnail upload." }])
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

          let filename;
          try {
            filename = await uploadFile(await modFile.arrayBuffer(), `${slug}_${version}.${ext}`)
            if (!filename) throw filename;
          } catch (error) {
            console.error("Error uploading file:", error)
            throw new ValidationError([{ field: 'modFile', message: "An error occurred during file upload." }])
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
                isNSFW: t.String(),
                category_id: t.String(),
                modFile: t.File({ minSize: 1, maxSize: MOD_FILE_SIZE_LIMIT }),
                modThumbnail: t.File({ type: 'image/png', minSize: 1, maxSize: 8 * 1024 * 1024 }),
            }),
        }
    )