import { Elysia, NotFoundError, t } from 'elysia'
import semver from 'semver';

import { prisma } from '../../services/prisma';
import { authMiddleware } from '../../middlewares/auth.middleware'
import { ValidationError } from '../../errors/validation';
import { uploadFile } from '../../services/files';


const MOD_FILE_SIZE_LIMIT = 10 * 1024 * 1024; // 10MB

export const router = new Elysia()
    .use(authMiddleware({ loggedOnly: true }))
    .post(
        '/api/mods/:user_slug/:mod_slug/release',
        async ({ params: { user_slug, mod_slug }, body: { version, changelog, modFile }, user }) => {
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
            throw new ValidationError([{ field: 'user', message: "You are not the owner of this mod." }])
          }
          if (!semver.valid(version)) {
            throw new ValidationError([{ field: 'version', message: "Invalid mod version provided." }])
          }

          const existingVersion = await prisma.modVersion.findFirst({
            where: {
              modId: mod.id,
              version,
            }
          });
          if (existingVersion) {
            throw new ValidationError([{ field: 'version', message: "Version already exists." }])
          }
      
          const latestVersion = await prisma.modVersion.findFirst({
            where: {
              modId: mod.id,
              isLatest: true,
            }
          });
            if (latestVersion && !semver.gt(version, latestVersion.version)) {
              throw new ValidationError([{ field: 'version', message: "Version must be greater than latest version." }])
            }

            const ext = modFile.name.split('.').pop();
            if (ext !== 'zip' && ext !== 'dll') {
              throw new ValidationError([{ field: 'modFile', message: "Mod file must be a zip or dll file." }])
            }

            let filename = "";
            try {
              filename = await uploadFile(await modFile.arrayBuffer(), `${mod.slug}_${version}.${ext}`);
              if (!filename) throw filename;
            } catch (error) {
              console.error(error);
              throw new Error("An error occurred during file upload.");
            }

            await prisma.modVersion.updateMany({
              where: {
                modId: mod.id,
              },
              data: {
                isLatest: false,
              }
            })
        
            await prisma.modVersion.create({
              data: {
                version,
                changelog,
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
        
            await prisma.mod.update({
              where: {
                id: mod.id,
              },
              data: {
                updatedAt: new Date(),
              }
            })

            return { released : true }
        }, {
            body: t.Object({
              version: t.String(),
              changelog: t.String({ minLength: 1, maxLength: 200 }),
              modFile: t.File({ minSize: 1, maxSize: MOD_FILE_SIZE_LIMIT }),
            }),
            response: t.Object({
              released: t.Boolean(),
            })
        }
    )