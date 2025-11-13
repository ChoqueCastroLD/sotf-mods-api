import { Elysia, t } from "elysia";

import { loggedOnly } from "../../middlewares/auth.middleware";
import { ValidationError } from "../../errors/validation";
import { downloadFile } from "../../services/files";

const BUILDS_FILE_SIZE_LIMIT = 100 * 1024 * 1024; // 100MB

export const router = () =>
  new Elysia().use(loggedOnly()).post(
    "/api/builds/upload",
    async ({ body: { buildFileKey } }) => {
      if (!buildFileKey) {
        throw new ValidationError([
          { field: "buildFileKey", message: "Build file key is required." },
        ]);
      }

      // Download file from R2
      let buildFileBuffer: ArrayBuffer;
      try {
        buildFileBuffer = await downloadFile(buildFileKey);
      } catch (error) {
        throw new ValidationError([
          {
            field: "buildFileKey",
            message: "Failed to download build file from R2.",
          },
        ]);
      }

      if (buildFileBuffer.byteLength / 1024 > BUILDS_FILE_SIZE_LIMIT) {
        throw new ValidationError([
          {
            field: "buildFile",
            message: "Build file size exceeds the limit of 100MB.",
          },
        ]);
      }

      const ext = buildFileKey.split(".").pop();
      if (ext !== "json") {
        throw new ValidationError([
          { field: "buildFile", message: "Build file must be a json file." },
        ]);
      }

      const contents = JSON.parse(new TextDecoder().decode(buildFileBuffer));

      if (!contents.Guid || !contents.Name || !contents.Description) {
        throw new ValidationError([
          { field: "buildFile", message: "Build file is invalid." },
        ]);
      }

      return {
        status: true,
        data: {
          mod_id: contents.Guid.toString(),
          name: contents.Name.toString(),
          shortDescription: contents.Description.toString(),
          buildShareVersion: JSON.parse(contents.Data).Version.toString(),
          numberOfElements: contents.NumberOfElements,
          contents,
        },
      };
    },
    {
      body: t.Object({
        buildFileKey: t.String(),
      }),
    }
  );
