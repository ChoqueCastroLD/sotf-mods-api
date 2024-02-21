import { Elysia, t } from 'elysia'
import slugify from "slugify";
import semver from 'semver';
import sizeOf from "image-size";

import { prisma } from '../../services/prisma';
import { authMiddleware } from '../../middlewares/auth.middleware'
import { validateModDescription, validateModName, validateModShortDescription } from '../../shared/validation';
import { ValidationError } from '../../errors/validation';
import { uploadFile } from '../../services/files';
import { readManifest } from '../../shared/read-manifest';


const MOD_FILE_SIZE_LIMIT = 80 * 1024 * 1024; // 80MB
const ALLOWED_RESOLUTIONS = [
  { width: 2560, height: 1440 },
  { width: 1080, height: 608 }
];

export const router = new Elysia()
  .use(authMiddleware({ loggedOnly: true }))
  .post(
    '/api/mods/publish',
    async ({ body: { name, shortDescription, description, isNSFW, category_id, modFile, modThumbnail }, user }) => {
      console.log('api mods publish called');

      console.log('\n!!!!!!!!!!!!! 1 PRISMA NAME ', await prisma.mod.findFirst({ select: { id: true }, where: { name } }), ' !!!!!!!!!!!!!\n\n');

      // return await prisma.$transaction(async (tx) => {
      const errors = []
      console.log("0");
      console.log("a");
      console.log("b");
      console.log("c");


      errors.push(...validateModName(name))
      errors.push(...validateModDescription(description))
      errors.push(...validateModShortDescription(shortDescription))

      console.log('\n!!!!!!!!!!!!! 2 PRISMA NAME ', await prisma.mod.findFirst({ select: { id: true }, where: { name } }), ' !!!!!!!!!!!!!\n\n');
      if (errors.length > 0) {
        throw new ValidationError(errors)
      }

      console.log('\n!!!!!!!!!!!!! 3 PRISMA NAME ', await prisma.mod.findFirst({ select: { id: true }, where: { name } }), ' !!!!!!!!!!!!!\n\n');
      console.log("1");

      console.log('\n!!!!!!!!!!!!! 3.A PRISMA NAME ', await prisma.mod.findFirst({ select: { id: true }, where: { name } }), ' !!!!!!!!!!!!!\n\n');
      const modThumbnailBuffer = await modThumbnail.arrayBuffer();
      console.log('\n!!!!!!!!!!!!! 3.A.1 PRISMA NAME ', await prisma.mod.findFirst({ select: { id: true }, where: { name } }), ' !!!!!!!!!!!!!\n\n');
      const dimensions = sizeOf(new Uint8Array(modThumbnailBuffer));
      console.log('\n!!!!!!!!!!!!! 3.A.2 PRISMA NAME ', await prisma.mod.findFirst({ select: { id: true }, where: { name } }), ' !!!!!!!!!!!!!\n\n');
      console.log('metadata found', { dimensions });
      console.log('\n!!!!!!!!!!!!! 3.B PRISMA NAME ', await prisma.mod.findFirst({ select: { id: true }, where: { name } }), ' !!!!!!!!!!!!!\n\n');
      console.log("2");

      if (!ALLOWED_RESOLUTIONS.find((res) => res.width === dimensions.width && res.height === dimensions.height)) {
        throw new ValidationError([{ field: 'modThumbnail', message: "Invalid thumbnail resolution" }])
      }
      console.log('\n!!!!!!!!!!!!! 3.C PRISMA NAME ', await prisma.mod.findFirst({ select: { id: true }, where: { name } }), ' !!!!!!!!!!!!!\n\n');
      console.log("3");

      const file = await modFile.arrayBuffer();

      console.log('\n!!!!!!!!!!!!! 4 PRISMA NAME ', await prisma.mod.findFirst({ select: { id: true }, where: { name } }), ' !!!!!!!!!!!!!\n\n');
      if ((file.byteLength / 1024) > MOD_FILE_SIZE_LIMIT) {
        throw new ValidationError([{ field: 'modFile', message: "Mod file size exceeds the limit of 10MB." }])
      }
      console.log("4");

      const ext = modFile.name.split('.').pop()
      if (ext !== 'zip') {
        throw new ValidationError([{ field: 'modFile', message: "Mod file must be a zip file." }])
      }

      console.log('\n!!!!!!!!!!!!! 5 PRISMA NAME ', await prisma.mod.findFirst({ select: { id: true }, where: { name } }), ' !!!!!!!!!!!!!\n\n');
      console.log("5");
      const { id: mod_id, version, dependencies, type } = readManifest(file);
      console.log("5");

      console.log('\n!!!!!!!!!!!!! 6 PRISMA NAME ', await prisma.mod.findFirst({ select: { id: true }, where: { name } }), ' !!!!!!!!!!!!!\n\n');
      if (type !== "Mod" && type !== "Library") {
        throw new ValidationError([{ field: 'modFile', message: "Invalid mod type provided in manifest.json, must be Mod or Library" }])
      }

      if (!semver.valid(version)) {
        throw new ValidationError([{ field: 'modFile', message: "Invalid mod version provided in manifest.json" }])
      }

      console.log("6");

      console.log('\n!!!!!!!!!!!!! 7 PRISMA NAME ', await prisma.mod.findFirst({ select: { id: true }, where: { name } }), ' !!!!!!!!!!!!!\n\n');
      const slug = slugify(name, { lower: true });
      console.log('\n!!!!!!!!!!!!! 8 PRISMA NAME ', await prisma.mod.findFirst({ select: { id: true }, where: { name } }), ' !!!!!!!!!!!!!\n\n');
      console.log("-xxxx --7");
      console.log("xxxxx name", name);
      console.log("slug", slug);
      console.log("mod_id", mod_id);
      console.log("OR", [
        { name },
        { slug },
        { mod_id },
      ])

      try {
        console.log("7.a", {
          where: {
            OR: [
              { name },
              { slug },
              { mod_id },
            ]
          }
        });
        const existingName = await prisma.mod.findFirst({ select: { id: true }, where: { name } });
        console.log({ existingName });

        if (existingName) {
          throw new ValidationError([{ field: 'name', message: "Mod already exists. Try a different mod name and manifest.json" }]);
        }

        const existingSlug = await prisma.mod.findFirst({ select: { id: true }, where: { slug } });
        console.log({ existingSlug });
        if (existingSlug) {
          throw new ValidationError([{ field: 'name', message: "Similar mod already exists. Try a different mod name and manifest.json" }]);
        }

        const existingModId = await prisma.mod.findFirst({ select: { id: true }, where: { mod_id } });
        console.log({ existingModId });
        if (existingModId) {
          throw new ValidationError([{ field: 'name', message: "Mod already exists. Try a different mod name and manifest.json" }]);
        }
        console.log("7.d");
      } catch (error) {
        console.log("7.e");
        console.error(error);
        console.log("7.f");
        throw error;
      }

      console.log("9");
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
        }
      })


      let thumbnailFilename;
      try {
        const ext = modThumbnail.name.split('.').pop()
        thumbnailFilename = await uploadFile(await modThumbnail.arrayBuffer(), `${slug}_thumbnail.${ext}`)
        if (!thumbnailFilename) throw thumbnailFilename;
      } catch (error) {
        console.error("Error uploading thumbnail:", error)
        throw new ValidationError([{ field: 'modThumbnail', message: "An error occurred during thumbnail upload." }])
      }

      await prisma.modImage.create({
        data: {
          url: `${Bun.env.FILE_DOWNLOAD_ENDPOINT}/${thumbnailFilename}`,
          isPrimary: false,
          isThumbnail: true,
          modId: mod.id
        }
      });

      let filename;
      try {
        filename = await uploadFile(await modFile.arrayBuffer(), `${slug}_${version}.${ext}`)
        if (!filename) throw filename;
      } catch (error) {
        console.error("Error uploading file:", error)
        throw new ValidationError([{ field: 'modFile', message: "An error occurred during file upload." }])
      }

      await prisma.modVersion.create({
        data: {
          version,
          changelog: "First release",
          downloadUrl: `${Bun.env.FILE_DOWNLOAD_ENDPOINT}/${filename}`,
          isLatest: true,
          filename,
          extension: ext,
          modId: mod.id
        }
      })

      return mod
      // })
    }, {
    body: t.Object({
      name: t.String(),
      shortDescription: t.String(),
      description: t.String(),
      isNSFW: t.String(),
      category_id: t.String(),
      modFile: t.File({ minSize: 1, maxSize: MOD_FILE_SIZE_LIMIT }),
      modThumbnail: t.File({ type: 'image/png', minSize: 1, maxSize: 8 * 1024 * 1024 }),
    }),
  }
  )
