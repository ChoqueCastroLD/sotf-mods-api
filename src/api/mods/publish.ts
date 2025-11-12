import { Elysia, t } from "elysia";
import slugify from "slugify";
import semver from "semver";

import { prisma } from "../../services/prisma";
import { loggedOnly } from "../../middlewares/auth.middleware";
import {
  validateModDescription,
  validateModName,
  validateModShortDescription,
} from "../../shared/validation";
import { ValidationError } from "../../errors/validation";
import { downloadFile } from "../../services/files";
import { readManifest } from "../../shared/read-manifest";

const MOD_FILE_SIZE_LIMIT = 200 * 1024 * 1024; // 200MB

export const router = () =>
  new Elysia().use(loggedOnly()).post(
    "/api/mods/publish",
    async ({
      body: {
        name,
        shortDescription,
        description,
        isNSFW,
        category_id,
        modFileKey,
        thumbnailKey,
        imageKeys,
      },
      user,
    }) => {
      if (!Array.isArray(imageKeys) && imageKeys) {
        imageKeys = [imageKeys];
      }

      const errors = [];

      errors.push(...validateModName(name));
      errors.push(...validateModDescription(description));
      errors.push(...validateModShortDescription(shortDescription));

      if (errors.length > 0) {
        throw new ValidationError(errors);
      }

      if (!modFileKey) {
        throw new ValidationError([
          { field: "modFileKey", message: "Mod file key is required." },
        ]);
      }

      if (!thumbnailKey) {
        throw new ValidationError([
          { field: "thumbnailKey", message: "Thumbnail key is required." },
        ]);
      }

      // Download mod file from R2 to validate
      let modFileBuffer: ArrayBuffer;
      try {
        modFileBuffer = await downloadFile(modFileKey);
      } catch (error) {
        throw new ValidationError([
          {
            field: "modFileKey",
            message: "Failed to download mod file from R2.",
          },
        ]);
      }

      if (modFileBuffer.byteLength / 1024 > MOD_FILE_SIZE_LIMIT) {
        throw new ValidationError([
          {
            field: "modFile",
            message: "Mod file size exceeds the limit of 200MB.",
          },
        ]);
      }

      // Extract extension from file key
      const ext = modFileKey.split(".").pop();
      if (ext !== "zip") {
        throw new ValidationError([
          { field: "modFile", message: "Mod file must be a zip file." },
        ]);
      }

      const {
        id: mod_id,
        version,
        dependencies,
        type,
      } = readManifest(modFileBuffer);

      if (mod_id.includes(" ")) {
        throw new ValidationError([
          {
            field: "modFile",
            message: "Mod id cannot contain spaces in manifest.json",
          },
        ]);
      }

      if (type !== "Mod" && type !== "Library") {
        throw new ValidationError([
          {
            field: "modFile",
            message:
              "Invalid mod type provided in manifest.json, must be Mod or Library",
          },
        ]);
      }

      if (!semver.valid(version)) {
        throw new ValidationError([
          {
            field: "modFile",
            message: "Invalid mod version provided in manifest.json",
          },
        ]);
      }

      const slug = slugify(name, { lower: true });

      const [existingName, existingSlug, existingModId] = await Promise.all([
        prisma.mod.findFirst({ select: { id: true }, where: { name } }),
        prisma.mod.findFirst({ select: { id: true }, where: { slug } }),
        prisma.mod.findFirst({ select: { id: true }, where: { mod_id } }),
      ]);

      if (existingName || existingSlug || existingModId) {
        throw new ValidationError([
          {
            field: "name",
            message:
              "Mod already exists. Try a different mod name and manifest.json",
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

      const mod = await prisma.mod.create({
        data: {
          mod_id,
          name,
          slug,
          shortDescription,
          description,
          dependencies,
          type,
          isNSFW: isNSFW === "true",
          isApproved: false,
          isFeatured: false,
          categoryId: parseInt(category_id),
          userId: user?.id,
          latestVersion: version,
          imageUrl: `${Bun.env.FILE_DOWNLOAD_ENDPOINT}/${thumbnailFilename}`,
          images: {
            createMany: {
              data: uploadedImages.filter((image) => !!image),
            },
          },
        },
      });

      // Use the provided mod file key directly
      const filename = modFileKey;

      await prisma.modVersion.create({
        data: {
          version,
          changelog: "First release",
          downloadUrl: `${Bun.env.FILE_DOWNLOAD_ENDPOINT}/${filename}`,
          isLatest: true,
          filename,

          extension: ext,
          modId: mod.id,
        },
      });

      return { status: true, data: mod };
    },
    {
      body: t.Object({
        name: t.String(),
        shortDescription: t.String(),
        description: t.String(),
        isNSFW: t.String(),
        category_id: t.String(),
        modFileKey: t.String(),
        thumbnailKey: t.String(),
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
