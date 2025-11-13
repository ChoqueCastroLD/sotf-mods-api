import { Elysia, NotFoundError, t } from 'elysia'
import semver from 'semver';

import { prisma } from '../../services/prisma';
import { loggedOnly } from '../../middlewares/auth.middleware'
import { ValidationError } from '../../errors/validation';
import { uploadFile } from '../../services/files';
import { readManifest } from '../../shared/read-manifest';


const MOD_FILE_SIZE_LIMIT = 200 * 1024 * 1024; // 200MB default
const MOD_FILE_SIZE_LIMIT_APPROVER = 500 * 1024 * 1024; // 500MB for approvers

// Get file size limit based on user permissions
function getModFileSizeLimit(user: any): number {
  return user?.isTrusted ? MOD_FILE_SIZE_LIMIT_APPROVER : MOD_FILE_SIZE_LIMIT;
}

export const router = () => new Elysia()
    .use(loggedOnly())
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

          const { id: manifest_id, version, dependencies, type } = readManifest(file)

          if (manifest_id.includes(" ")) {
            throw new ValidationError([{ field: 'modFile', message: "Mod id cannot contain spaces in manifest.json" }])
          }

          if (type !== "Mod" && type !== "Library") {
            throw new ValidationError([{ field: 'modFile', message: "Invalid mod type provided in manifest.json, must be Mod or Library" }])
          }

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

          // Check file size limit based on user permissions
          const fileSizeLimit = getModFileSizeLimit(user);
          const fileSizeLimitMB = fileSizeLimit / (1024 * 1024);
          
          if (file.byteLength > fileSizeLimit) {
            throw new ValidationError([
              {
                field: "modFile",
                message: `Mod file size exceeds the limit of ${fileSizeLimitMB}MB.`,
              },
            ]);
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
      
          const [updatedMod, _] = await Promise.all([
            prisma.mod.update({
              where: {
                id: mod.id,
              },
              data: {
                dependencies,
                type,
                latestVersion: version,
                updatedAt: new Date(),
                lastReleasedAt: new Date(),
              }
            }),
            prisma.modVersion.create({
              data: {
                version,
                changelog,
                downloadUrl: `${Bun.env.FILE_DOWNLOAD_ENDPOINT}/${filename}`,
                isLatest: true,
                filename,
                extension: ext,
                modId: mod.id
              }
            })
          ]);

          return { status: true, data: updatedMod }
        }, {
            body: t.Object({
              changelog: t.String({ minLength: 1, maxLength: 2000 }),
              modFile: t.File({ minSize: 1, maxSize: MOD_FILE_SIZE_LIMIT_APPROVER }), // Use max limit, validation happens in handler
            }),
        }
    )