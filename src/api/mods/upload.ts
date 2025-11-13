import { Elysia, t } from "elysia";
import semver from "semver";

import { loggedOnly } from "../../middlewares/auth.middleware";
import { ValidationError } from "../../errors/validation";
import { readManifest } from "../../shared/read-manifest";
import { downloadFile } from "../../services/files";

const MOD_FILE_SIZE_LIMIT = 200 * 1024 * 1024; // 200MB default
const MOD_FILE_SIZE_LIMIT_APPROVER = 500 * 1024 * 1024; // 500MB for approvers

// Get file size limit based on user permissions
function getModFileSizeLimit(user: any): number {
  console.log('getModFileSizeLimit', user);
  return user?.isTrusted ? MOD_FILE_SIZE_LIMIT_APPROVER : MOD_FILE_SIZE_LIMIT;
}

export const router = () =>
  new Elysia().use(loggedOnly()).post(
    "/api/mods/upload",
    async ({ body: { modFileKey }, user }) => {
      if (!modFileKey) {
        throw new ValidationError([
          { field: "modFileKey", message: "Mod file key is required." },
        ]);
      }

      // Download file from R2
      let file: ArrayBuffer;
      try {
        file = await downloadFile(modFileKey);
      } catch (error) {
        throw new ValidationError([
          {
            field: "modFileKey",
            message: "Failed to download mod file from R2.",
          },
        ]);
      }

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

      const ext = modFileKey.split(".").pop();
      if (ext !== "zip") {
        throw new ValidationError([
          { field: "modFile", message: "Mod file must be a zip file." },
        ]);
      }

      const manifest = readManifest(file);

      if (!semver.valid(manifest.version)) {
        throw new ValidationError([
          { field: "modFile", message: "Invalid mod version provided." },
        ]);
      }

      if (manifest.type !== "Mod" && manifest.type !== "Library") {
        throw new ValidationError([
          {
            field: "modFile",
            message:
              "Invalid mod type provided in manifest.json, must be Mod or Library",
          },
        ]);
      }

      return {
        status: true,
        data: {
          name: manifest?.id ?? "",
          version: manifest.version,
          description: manifest?.description ?? "",
          dependencies: manifest.dependencies?.split(","),
          type: manifest?.type,
        },
      };
    },
    {
      body: t.Object({
        modFileKey: t.String(),
      }),
    }
  );
