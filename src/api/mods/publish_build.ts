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
import { downloadFile } from "../../services/files";

const BUILDS_FILE_SIZE_LIMIT = 100 * 1024 * 1024; // 100MB

export const router = () =>
  new Elysia().use(loggedOnly()).post(
    "/api/builds/publish",
    async ({
      body: { name, shortDescription, description, category_id, buildFileKey, thumbnailKey, imageKeys, modSide, isMultiplayerCompatible, requiresAllPlayers },
      user,
    }) => {
      if (!Array.isArray(imageKeys) && imageKeys) {
        imageKeys = [imageKeys];
      }

      if (!buildFileKey) {
        throw new ValidationError([
          { field: "buildFileKey", message: "Build file key is required." },
        ]);
      }

      if (!thumbnailKey) {
        throw new ValidationError([
          { field: "thumbnailKey", message: "Thumbnail key is required." },
        ]);
      }

      // Download build file from R2 to validate
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

      const ext = buildFileKey.split(".").pop();
      if (ext !== "json") {
        throw new ValidationError([
          { field: "buildFile", message: "Build file must be a json file." },
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

      const contents = JSON.parse(new TextDecoder().decode(buildFileBuffer));

      if (!contents.Guid || !contents.Name || !contents.Description) {
        throw new ValidationError([
          { field: "buildFile", message: "Build file is invalid." },
        ]);
      }

      const errors = [];

      errors.push(...validateModName(name));
      errors.push(...validateModShortDescription(shortDescription));
      errors.push(...validateModDescription(description));

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

      // Use the provided thumbnail key directly
      const thumbnailFilename = thumbnailKey;

      // Use the provided image keys directly
      const uploadedImages = (imageKeys || []).map((imageKey: string) => ({
        url: `${Bun.env.FILE_DOWNLOAD_ENDPOINT}/${imageKey}`,
        isPrimary: false,
        isThumbnail: false,
      }));

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
          modSide: modSide || null,
          isNSFW: false,
          isApproved: true,
          isFeatured: false,
          isMultiplayerCompatible: isMultiplayerCompatible === "true" || isMultiplayerCompatible === true,
          requiresAllPlayers: requiresAllPlayers === "true" || requiresAllPlayers === true,
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

      // Use the provided build file key directly
      const filename = buildFileKey;

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
        name: t.String(),
        shortDescription: t.String(),
        description: t.String(),
        category_id: t.String(),
        buildFileKey: t.String(),
        thumbnailKey: t.String(),
        modSide: t.Optional(t.Union([t.Literal("client"), t.Literal("server"), t.Literal("both")])),
        isMultiplayerCompatible: t.Optional(t.Union([t.Boolean(), t.String()])),
        requiresAllPlayers: t.Optional(t.Union([t.Boolean(), t.String()])),
        imageKeys: t.Optional(
          t.Union([
            t.Array(t.String(), {
              minItems: 1,
              maxItems: 5,
            }),
            t.String(),
          ])
        ),
      }),
    }
  );
