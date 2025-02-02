import { Elysia, t } from "elysia";
import semver from "semver";

import { loggedOnly } from "../../middlewares/auth.middleware";
import { ValidationError } from "../../errors/validation";
import { readManifest } from "../../shared/read-manifest";

const BUILDS_FILE_SIZE_LIMIT = 2 * 1024 * 1024; // 2MB

export const router = () =>
  new Elysia().use(loggedOnly()).post(
    "/api/builds/upload",
    async ({ body: { buildFile } }) => {
      const buildFileBuffer = await buildFile.arrayBuffer();

      if (buildFileBuffer.byteLength / 1024 > BUILDS_FILE_SIZE_LIMIT) {
        throw new ValidationError([
          {
            field: "buildFile",

            message: "Build file size exceeds the limit of 2MB.",
          },
        ]);
      }

      const ext = buildFile.name.split(".").pop();
      if (ext !== "json") {
        throw new ValidationError([
          { field: "buildFile", message: "Build file must be a json file." },
        ]);
      }

      const contents = JSON.parse(new TextDecoder().decode(buildFileBuffer));

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
        buildFile: t.File({ minSize: 1, maxSize: BUILDS_FILE_SIZE_LIMIT }),
      }),
    }
  );
