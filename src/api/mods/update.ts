import { Elysia, NotFoundError, t } from "elysia";

import { prisma } from "../../services/prisma";
import { loggedOnly } from "../../middlewares/auth.middleware";
import {
  validateModDescription,
  validateModName,
  validateModShortDescription,
} from "../../shared/validation";
import { ValidationError } from "../../errors/validation";
import { uploadFile } from "../../services/files";

export const router = () =>
  new Elysia().use(loggedOnly()).patch(
    "/api/mods/:mod_id/details",
    async ({
      params: { mod_id },
      body: { name, description, shortDescription, isNSFW, thumbnail, images, modSide, isMultiplayerCompatible, requiresAllPlayers },
      user,
    }) => {
      if (!Array.isArray(images) && images) {
        images = [images];
      }
      const mod = await prisma.mod.findFirst({
        where: {
          mod_id,
        },
      });
      if (!mod) {
        throw new NotFoundError();
      }
      if (mod.userId !== user?.id) {
        throw new ValidationError([
          { field: "user", message: "You are not the owner of this mod." },
        ]);
      }

      const errors = [];

      if (name) errors.push(...validateModName(name));
      if (description) errors.push(...validateModDescription(description));
      if (shortDescription)
        errors.push(...validateModShortDescription(shortDescription));

      if (errors.length > 0) {
        throw new ValidationError(errors);
      }

      await prisma.mod.update({
        where: {
          id: mod.id,
        },
        data: {
          name,
          description,
          shortDescription,
          isNSFW: isNSFW ? isNSFW === "true" : undefined,
          modSide: modSide !== undefined ? (modSide === "" ? null : modSide) : undefined,
          isMultiplayerCompatible: isMultiplayerCompatible !== undefined ? (isMultiplayerCompatible === "true" || isMultiplayerCompatible === true) : undefined,
          requiresAllPlayers: requiresAllPlayers !== undefined ? (requiresAllPlayers === "true" || requiresAllPlayers === true) : undefined,
        },
      });

      if (thumbnail) {
        const ext = thumbnail.name.split(".").pop();

        const modThumbnailBuffer = await thumbnail.arrayBuffer();

        const thumbnailFilename = await uploadFile(
          modThumbnailBuffer,
          `${mod.slug}_thumbnail.${ext}`
        );

        if (thumbnailFilename) {
          await prisma.mod.update({
            where: {
              id: mod.id,
            },
            data: {
              imageUrl: `${Bun.env.FILE_DOWNLOAD_ENDPOINT}/${thumbnailFilename}`,
            },
          });
        }
      }

      if (images !== undefined) {
        await prisma.modImage.deleteMany({
          where: {
            modId: mod.id,
          },
        });
        const uploadedImages = await Promise.all(
          images.map(async (image) => {
            const ext = image.name.split(".").pop();
            const filename = await uploadFile(
              await image.arrayBuffer(),
              `${mod.slug}_${ext}`
            );
            if (!filename) throw filename;
            return {
              url: `${Bun.env.FILE_DOWNLOAD_ENDPOINT}/${filename}`,
              isPrimary: false,
              isThumbnail: false,
              modId: mod.id,
            };
          })
        );
        await prisma.modImage.createMany({
          data: uploadedImages.filter((image) => !!image),
        });
      }

      const updatedMod = await prisma.mod.findFirst({ where: { id: mod.id } });
      return { status: true, data: updatedMod };
    },
    {
      body: t.Object({
        name: t.Optional(t.String()),
        description: t.Optional(t.String()),
        shortDescription: t.Optional(t.String()),
        isNSFW: t.Optional(t.String()),
        modSide: t.Optional(t.Union([t.Literal("client"), t.Literal("server"), t.Literal("both"), t.Literal("")])),
        isMultiplayerCompatible: t.Optional(t.Union([t.Boolean(), t.String()])),
        requiresAllPlayers: t.Optional(t.Union([t.Boolean(), t.String()])),
        thumbnail: t.Optional(
          t.File({
            type: ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/gif"],
            minSize: 1,
            maxSize: 8 * 1024 * 1024,
          })
        ),
        images: t.Optional(
          t.Union([
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
            ),
            t.File({
              type: ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/gif"],
              minSize: 1,
              maxSize: 8 * 1024 * 1024,
            })
          ])
        ),
      }),
    }
  );
