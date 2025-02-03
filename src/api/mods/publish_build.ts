import { Elysia, t } from "elysia";
import slugify from "slugify";

import { prisma } from "../../services/prisma";
import { loggedOnly } from "../../middlewares/auth.middleware";
import {
  validateModDescription,
  validateModName,
  validateModShortDescription,
} from "../../shared/validation";
import { ValidationError } from "../../errors/validation";
import { uploadFile } from "../../services/files";

const BUILDS_FILE_SIZE_LIMIT = 100 * 1024 * 1024; // 100MB

export const router = () =>
  new Elysia().use(loggedOnly()).post(
    "/api/builds/publish",
    async ({
      body: { description, category_id, buildFile, thumbnail, images },
      user,
    }) => {
      const thumbnailBuffer = await thumbnail.arrayBuffer();

      const buildFileBuffer = await buildFile.arrayBuffer();

      const ext = buildFile.name.split(".").pop();
      if (ext !== "json") {
        throw new ValidationError([
          { field: "modFile", message: "Mod file must be a json file." },
        ]);
      }

      const contents = JSON.parse(new TextDecoder().decode(buildFileBuffer));

      if (!contents.Guid || !contents.Name || !contents.Description) {
        throw new ValidationError([
          { field: "buildFile", message: "Build file is invalid." },
        ]);
      }

      const errors = [];

      errors.push(...validateModName(contents.Name));
      errors.push(...validateModDescription(description));
      errors.push(...validateModShortDescription(contents.Description));

      if (errors.length > 0) {
        throw new ValidationError(errors);
      }

      if (buildFileBuffer.byteLength / 1024 > BUILDS_FILE_SIZE_LIMIT) {
        throw new ValidationError([
          {
            field: "buildFile",
            message: "Build file size exceeds the limit of 100MB.",
          },
        ]);
      }


      const slug = slugify(contents.Name, { lower: true });

      const [existingName, existingSlug, existingModId] = await Promise.all([
        prisma.mod.findFirst({
          select: { id: true },
          where: { name: contents.Name.toString() },
        }),
        prisma.mod.findFirst({ select: { id: true }, where: { slug } }),
        prisma.mod.findFirst({
          select: { id: true },
          where: { mod_id: contents.Guid.toString() },
        }),
      ]);

      if (existingName || existingSlug || existingModId) {
        throw new ValidationError([
          {
            field: "name",
            message: "Build already exists. Try a different name or build Guid",
          },
        ]);
      }

      let thumbnailFilename;
      try {
        const ext = thumbnail.name.split(".").pop();
        thumbnailFilename = await uploadFile(
          thumbnailBuffer,
          `${slug}_thumbnail.${ext}`
        );
        if (!thumbnailFilename) throw thumbnailFilename;
      } catch (error) {
        console.error("Error uploading thumbnail:", error);
        throw new ValidationError([
          {
            field: "thumbnail",
            message: "An error occurred during thumbnail upload.",
          },
        ]);
      }

      const uploadedImages = await Promise.all(
        images?.map(async (image) => {
          try {
            const ext = image.name.split(".").pop();
            const filename = await uploadFile(
              await image.arrayBuffer(),
              `${slug}_${ext}`
            );

            if (!filename) throw filename;
            return {
              url: `${Bun.env.FILE_DOWNLOAD_ENDPOINT}/${filename}`,
              isPrimary: false,
              isThumbnail: false,
            };
          } catch (error) {
            console.log("Error uploading image:", error);
            return undefined;
          }
        }) || []
      );

      const version = Bun.randomUUIDv7();

      const build = await prisma.mod.create({
        data: {
          mod_id: contents.Guid.toString(),
          name: contents.Name.toString(),
          slug,
          shortDescription: contents.Description.toString(),
          description,
          dependencies: "",
          type: "Build",
          isNSFW: false,
          isApproved: true,
          isFeatured: false,
          categoryId: parseInt(category_id),
          userId: user?.id,
          buildGuid: contents.Guid.toString(),
          buildShareVersion: JSON.parse(contents.Data).Version.toString(),
          numberOfElements: contents.NumberOfElements,
          latestVersion: version,
          imageUrl: `${Bun.env.FILE_DOWNLOAD_ENDPOINT}/${thumbnailFilename}`,
          images: {
            createMany: {
              data: uploadedImages.filter((image) => !!image),
            },
          },
        },
      });

      let filename;
      try {
        filename = await uploadFile(
          buildFileBuffer,
          `${slug}_${version}.${ext}`
        );
        if (!filename) throw filename;
      } catch (error) {
        console.error("Error uploading file:", error);
        throw new ValidationError([
          {
            field: "buildFile",
            message: "An error occurred during file upload.",
          },
        ]);
      }

      await prisma.modVersion.create({
        data: {
          version,
          changelog: "First release",
          downloadUrl: `${Bun.env.FILE_DOWNLOAD_ENDPOINT}/${filename}`,
          isLatest: true,
          filename,

          extension: ext,
          modId: build.id,
        },
      });

      return { status: true, data: build };
    },

    {
      body: t.Object({
        description: t.String(),
        category_id: t.String(),
        buildFile: t.File({ minSize: 1, maxSize: BUILDS_FILE_SIZE_LIMIT }),
        thumbnail: t.File({
          type: ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/gif"],
          minSize: 1,
          maxSize: 8 * 1024 * 1024,
        }),
        images: t.Optional(
          t.Array(
            t.File({
              type: ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/gif"],
              minSize: 1,
              maxSize: 8 * 1024 * 1024,
            }),
            {
              minItems: 1,
              maxItems: 5,
            }
          )
        ),
      }),
    }
  );
