import { Elysia, t } from "elysia";
import semver from "semver";

import { loggedOnly } from "../../middlewares/auth.middleware";
import { ValidationError } from "../../errors/validation";
import { readManifest } from "../../shared/read-manifest";
import { downloadFile } from "../../services/files";

const MOD_FILE_SIZE_LIMIT = 200 * 1024 * 1024; // 200MB

export const router = () =>
  new Elysia().use(loggedOnly()).post(
    "/api/mods/upload",
    async ({ body: { modFileKey } }) => {
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

      if (file.byteLength / 1024 > MOD_FILE_SIZE_LIMIT) {
        throw new ValidationError([
          {
            field: "modFile",
            message: "Mod file size exceeds the limit of 200MB.",
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
