import { Elysia, NotFoundError, t } from 'elysia'
import semver from 'semver';

import { prisma } from '../../services/prisma';
import { authMiddleware } from '../../middlewares/auth.middleware'
import { ValidationError } from '../../errors/validation';
import { uploadFile } from '../../services/files';
import { readManifest } from '../../shared/read-manifest';


const MOD_FILE_SIZE_LIMIT = 80 * 1024 * 1024; // 80MB

export const router = new Elysia()
    .use(authMiddleware({ loggedOnly: true }))
    .post(
        '/api/mods/:mod_id/release',
        async ({ params: { mod_id }, body: { changelog, modFile }, user }) => {
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
          const file = await modFile.arrayBuffer()

          const { id: manifest_id, version, dependencies } = readManifest(file)

          if (manifest_id !== mod_id) {
            throw new ValidationError([{ field: 'modFile', message: "Mod file manifest.json id does not match mod id. (Should be '" + mod_id + "')" }])
          }

          if (!semver.valid(version)) {
            throw new ValidationError([{ field: 'version', message: "Invalid mod version provided in manifest.json." }])
          }

          const existingVersion = await prisma.modVersion.findFirst({
            where: {
              modId: mod.id,
              version,
            }
          });
          if (existingVersion) {
            throw new ValidationError([{ field: 'version', message: `Version ${version} already exists.` }])
          }
      
          const latestVersion = await prisma.modVersion.findFirst({
            where: {
              modId: mod.id,
              isLatest: true,
            }
          });
          if (latestVersion && !semver.gt(version, latestVersion.version)) {
            throw new ValidationError([{ field: 'version', message: `Version ${version} must be greater than latest version.` }])
          }

          const ext = modFile.name.split('.').pop();
          if (ext !== 'zip') {
            throw new ValidationError([{ field: 'modFile', message: "Mod file must be a zip file." }])
          }

          let filename = "";
          try {
            filename = await uploadFile(file, `${mod.slug}_${version}.${ext}`);
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
              dependencies,
              updatedAt: new Date(),
              lastReleasedAt: new Date(),
            }
          })

          return { released : true }
        }, {
            body: t.Object({
              changelog: t.String({ minLength: 1, maxLength: 200 }),
              modFile: t.File({ minSize: 1, maxSize: MOD_FILE_SIZE_LIMIT }),
            }),
            response: t.Object({
              released: t.Boolean(),
            })
        }
    )