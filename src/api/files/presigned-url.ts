import { Elysia, t } from "elysia";
import { loggedOnly } from "../../middlewares/auth.middleware";
import { generatePresignedUploadUrl, getContentType } from "../../services/files";
import { ValidationError } from "../../errors/validation";

export const router = () =>
  new Elysia()
    .use(loggedOnly())
    .post(
      "/api/files/presigned-url",
      async ({ body: { filename, contentType, expiresIn } }) => {
        if (!filename) {
          throw new ValidationError([
            { field: "filename", message: "Filename is required." },
          ]);
        }

        // Validate filename doesn't contain path traversal
        if (filename.includes("..") || filename.includes("/") || filename.includes("\\")) {
          throw new ValidationError([
            { field: "filename", message: "Invalid filename." },
          ]);
        }

        // If contentType is not provided, try to infer it from filename
        const finalContentType = contentType || getContentType(filename);

        try {
          const { uploadUrl, fileKey } = await generatePresignedUploadUrl(
            filename,
            finalContentType,
            expiresIn || 3600
          );

          return {
            status: true,
            data: {
              uploadUrl,
              fileKey,
            },
          };
        } catch (error) {
          console.error("Error generating presigned URL:", error);
          throw new ValidationError([
            {
              field: "filename",
              message: "Failed to generate upload URL.",
            },
          ]);
        }
      },
      {
        body: t.Object({
          filename: t.String(),
          contentType: t.Optional(t.String()),
          expiresIn: t.Optional(t.Number()),
        }),
      }
    );

