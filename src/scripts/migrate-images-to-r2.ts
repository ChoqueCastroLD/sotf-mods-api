/**
 * Script to migrate images and files from simplefile server (or any external source) to Cloudflare R2
 * Processes images and files in batches of 30
 * 
 * Tables and fields processed:
 * 1. User (user)
 *    - imageUrl (profile picture)
 * 2. Mod (mod)
 *    - imageUrl (mod thumbnail)
 * 3. ModImage (mod_image)
 *    - url (mod gallery images)
 * 4. ModVersion (mod_version)
 *    - downloadUrl (mod version files)
 * 
 * Usage: bun src/scripts/migrate-images-to-r2.ts [simplefile-domain]
 * Example: bun src/scripts/migrate-images-to-r2.ts https://simplefile.example.com
 * 
 * Or set environment variable: SIMPLEFILE_SERVER_DOMAIN=https://simplefile.example.com
 * 
 * Optional flags:
 * --start <offset> - Start processing from this offset
 * --end <offset> - Stop processing at this offset
 */

import { prisma } from '../services/prisma';
import { uploadFile } from '../services/files';

// Parse command line arguments
const args = process.argv.slice(2);
let simplefileDomain = Bun.env.SIMPLEFILE_SERVER_DOMAIN || "";
let startOffset: number | undefined = undefined;
let endOffset: number | undefined = undefined;

// Parse arguments
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--start" && args[i + 1]) {
    startOffset = parseInt(args[i + 1], 10);
    i++;
  } else if (args[i] === "--end" && args[i + 1]) {
    endOffset = parseInt(args[i + 1], 10);
    i++;
  } else if (!simplefileDomain && !args[i].startsWith("--")) {
    simplefileDomain = args[i];
  }
}

// R2 custom domain (from env, fallback to FILE_DOWNLOAD_ENDPOINT)
const R2_CUSTOM_DOMAIN = Bun.env.R2_CUSTOM_DOMAIN || Bun.env.FILE_DOWNLOAD_ENDPOINT || "";

if (!R2_CUSTOM_DOMAIN) {
  console.error("❌ Error: R2_CUSTOM_DOMAIN or FILE_DOWNLOAD_ENDPOINT environment variable is required");
  process.exit(1);
}

// Normalize R2 domain (remove trailing slash and protocol variations)
const normalizedR2Domain = R2_CUSTOM_DOMAIN.replace(/\/$/, "");

// Normalize simplefile domain (remove trailing slash)
const normalizedSimplefileDomain = simplefileDomain ? simplefileDomain.replace(/\/$/, "") : "";

/**
 * Check if URL is from simplefile server
 */
function isSimplefileUrl(url: string | null | undefined): boolean {
  if (!url || !normalizedSimplefileDomain) return false;
  try {
    const urlObj = new URL(url);
    return urlObj.origin === normalizedSimplefileDomain || url.includes(normalizedSimplefileDomain);
  } catch {
    return url.includes(normalizedSimplefileDomain);
  }
}

/**
 * Check if URL is already using R2 custom domain
 * Handles variations like https://r2.sotf-mods.com, https://r2.sotf-mods.com/, etc.
 */
function isR2Url(url: string): boolean {
  if (!normalizedR2Domain || !url) return false;
  // Check if URL starts with the normalized R2 domain (with or without trailing slash)
  return url.startsWith(normalizedR2Domain) || url.startsWith(normalizedR2Domain + "/");
}

/**
 * Check if URL or filename has duplicate extensions (e.g., .zip.zip, .jpg.jpg)
 * Returns the corrected string if duplicates are found, null otherwise
 */
function fixDuplicateExtensions(urlOrFilename: string): string | null {
  if (!urlOrFilename) return null;
  
  // Common extensions to check
  const extensions = ['zip', 'jpg', 'jpeg', 'png', 'gif', 'webp', 'pdf', 'exe', 'dll'];
  
  for (const ext of extensions) {
    // Pattern matches .ext.ext at the end or followed by /, ?, #, or end of string
    const duplicatePattern = new RegExp(`\\.${ext}\\.${ext}(/|$|\\?|#)`, 'i');
    if (duplicatePattern.test(urlOrFilename)) {
      // Remove one duplicate extension
      const corrected = urlOrFilename.replace(new RegExp(`\\.${ext}\\.${ext}`, 'i'), `.${ext}`);
      return corrected;
    }
  }
  
  return null;
}

/**
 * Check if URL is from R2 public endpoint (needs to be updated to custom domain)
 */
function isR2PublicEndpointUrl(url: string): boolean {
  const r2PublicPattern = `https://pub-${Bun.env.R2_ACCOUNT_ID}.r2.dev`;
  return url.startsWith(r2PublicPattern);
}

/**
 * Convert R2 public endpoint URL to custom domain URL
 */
function convertR2UrlToCustomDomain(url: string): string {
  const r2PublicPattern = `https://pub-${Bun.env.R2_ACCOUNT_ID}.r2.dev`;
  if (!url.startsWith(r2PublicPattern)) {
    return url; // Not an R2 public endpoint URL
  }
  
  // Extract fileKey
  let fileKey = url.replace(r2PublicPattern, '').replace(/^\//, '').replace(/^download\//, '');
  
  // Use normalized custom domain
  return `${normalizedR2Domain}/${fileKey}`;
}

/**
 * Download image from URL
 */
async function downloadImage(url: string): Promise<Buffer | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.warn(`⚠️  Failed to download ${url}: ${response.statusText}`);
      return null;
    }
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  } catch (error) {
    console.error(`❌ Error downloading ${url}:`, error);
    return null;
  }
}

/**
 * Extract filename from URL
 */
function getFilenameFromUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const filename = pathname.split("/").pop() || "image";
    return filename.includes(".") ? filename : `${filename}.jpg`;
  } catch {
    const filename = url.split("/").pop() || "image";
    return filename.includes(".") ? filename : `${filename}.jpg`;
  }
}

/**
 * Upload file to R2 and return R2 public URL
 */
async function uploadToR2AndGetPublicUrl(
  imageBuffer: Buffer,
  filename: string
): Promise<string> {
  // Upload to R2 and get the key
  const fileKey = await uploadFile(new Uint8Array(imageBuffer).buffer, filename);
  
  // Return full URL using normalized custom domain
  return `${normalizedR2Domain}/${fileKey}`;
}

/**
 * Get content folder based on table and field name
 */
function getContentFolder(table: string, field: string): string {
  const mapping: Record<string, Record<string, string>> = {
    user: {
      imageUrl: "profile_pictures",
    },
    mod: {
      imageUrl: "mods",
    },
    mod_image: {
      url: "mods",
    },
    mod_version: {
      downloadUrl: "mods",
    },
  };
  return mapping[table]?.[field] || "general";
}

/**
 * Process User images
 */
async function migrateUserImages(batchSize: number = 30) {
  console.log("\n👤 Processing User images...");
  
  let offset = startOffset !== undefined ? startOffset : 0;
  let hasMore = true;
  let processed = 0;
  let migrated = 0;
  let skipped = 0;
  let errors = 0;

  while (hasMore) {
    // Stop if we've reached the end offset
    if (endOffset !== undefined && offset >= endOffset) {
      hasMore = false;
      break;
    }
    
    const users = await prisma.user.findMany({
      where: {
        AND: [
          {
            imageUrl: {
              not: "",
            },
          },
          {
            NOT: {
              imageUrl: {
                contains: normalizedR2Domain,
              },
            },
          },
        ],
      },
      take: batchSize,
      skip: offset,
      select: {
        id: true,
        imageUrl: true,
      },
    });

    if (users.length === 0) {
      hasMore = false;
      break;
    }

    // Process in parallel batches of 30
    for (let i = 0; i < users.length; i += 30) {
      const batch = users.slice(i, i + 30);
      
      await Promise.all(batch.map(async (user) => {
        processed++;
        if (!user.imageUrl || user.imageUrl === "") {
          skipped++;
          return;
        }

        // If it's already using R2 custom domain, skip
        if (isR2Url(user.imageUrl)) {
          skipped++;
          return;
        }

        // If it's R2 public endpoint, convert to custom domain
        if (isR2PublicEndpointUrl(user.imageUrl)) {
          try {
            const newUrl = convertR2UrlToCustomDomain(user.imageUrl);
            await prisma.user.update({
              where: { id: user.id },
              data: { imageUrl: newUrl },
            });
            
            globalMigratedCount++;
            console.log(`URL actual: ${user.imageUrl}`);
            console.log(`URL nueva:  ${newUrl}`);
            console.log("");
            console.log("");
            console.log("");
            console.log(`Progreso: ${globalMigratedCount}/${globalTotalCount}`);
            migrated++;
            return;
          } catch (error) {
            console.error(`  ❌ Error updating image for user ${user.id}:`, error);
            errors++;
            return;
          }
        }

        // If simplefile domain is specified and URL is not from simplefile, skip
        if (normalizedSimplefileDomain && !isSimplefileUrl(user.imageUrl)) {
          skipped++;
          return;
        }

        try {
          const imageBuffer = await downloadImage(user.imageUrl);

          if (!imageBuffer) {
            errors++;
            return;
          }

          const filename = getFilenameFromUrl(user.imageUrl);
          const newUrl = await uploadToR2AndGetPublicUrl(imageBuffer, filename);

          await prisma.user.update({
            where: { id: user.id },
            data: { imageUrl: newUrl },
          });

          globalMigratedCount++;
          console.log(`URL actual: ${user.imageUrl}`);
          console.log(`URL nueva:  ${newUrl}`);
          console.log("");
          console.log("");
          console.log("");
          console.log(`Progreso: ${globalMigratedCount}/${globalTotalCount}`);
          migrated++;
        } catch (error) {
          console.error(`  ❌ Error migrating image for user ${user.id}:`, error);
          errors++;
        }
      }));
    }

    offset += batchSize;
    if (users.length < batchSize) {
      hasMore = false;
    }
  }

  return { processed, migrated, skipped, errors };
}

/**
 * Process Mod images
 */
async function migrateModImages(batchSize: number = 30) {
  console.log("\n📦 Processing Mod images...");
  
  let offset = startOffset !== undefined ? startOffset : 0;
  let hasMore = true;
  let processed = 0;
  let migrated = 0;
  let skipped = 0;
  let errors = 0;

  while (hasMore) {
    // Stop if we've reached the end offset
    if (endOffset !== undefined && offset >= endOffset) {
      hasMore = false;
      break;
    }
    
    const mods = await prisma.mod.findMany({
      where: {
        AND: [
          {
            imageUrl: {
              not: null,
            },
          },
          {
            NOT: {
              imageUrl: {
                contains: normalizedR2Domain,
              },
            },
          },
        ],
      },
      take: batchSize,
      skip: offset,
      select: {
        id: true,
        imageUrl: true,
      },
    });

    if (mods.length === 0) {
      hasMore = false;
      break;
    }

    // Process in parallel batches of 30
    for (let i = 0; i < mods.length; i += 30) {
      const batch = mods.slice(i, i + 30);
      
      await Promise.all(batch.map(async (mod) => {
        processed++;
        if (!mod.imageUrl) {
          skipped++;
          return;
        }

        // If it's already using R2 custom domain, skip
        if (isR2Url(mod.imageUrl)) {
          skipped++;
          return;
        }

        // If it's R2 public endpoint, convert to custom domain
        if (isR2PublicEndpointUrl(mod.imageUrl)) {
          try {
            const newUrl = convertR2UrlToCustomDomain(mod.imageUrl);
            await prisma.mod.update({
              where: { id: mod.id },
              data: { imageUrl: newUrl },
            });
            
            globalMigratedCount++;
            console.log(`URL actual: ${mod.imageUrl}`);
            console.log(`URL nueva:  ${newUrl}`);
            console.log("");
            console.log("");
            console.log("");
            console.log(`Progreso: ${globalMigratedCount}/${globalTotalCount}`);
            migrated++;
            return;
          } catch (error) {
            console.error(`  ❌ Error updating image for mod ${mod.id}:`, error);
            errors++;
            return;
          }
        }

        // If simplefile domain is specified and URL is not from simplefile, skip
        if (normalizedSimplefileDomain && !isSimplefileUrl(mod.imageUrl)) {
          skipped++;
          return;
        }

        try {
          const imageBuffer = await downloadImage(mod.imageUrl);

          if (!imageBuffer) {
            errors++;
            return;
          }

          const filename = getFilenameFromUrl(mod.imageUrl);
          const newUrl = await uploadToR2AndGetPublicUrl(imageBuffer, filename);

          await prisma.mod.update({
            where: { id: mod.id },
            data: { imageUrl: newUrl },
          });

          globalMigratedCount++;
          console.log(`URL actual: ${mod.imageUrl}`);
          console.log(`URL nueva:  ${newUrl}`);
          console.log("");
          console.log("");
          console.log("");
          console.log(`Progreso: ${globalMigratedCount}/${globalTotalCount}`);
          migrated++;
        } catch (error) {
          console.error(`  ❌ Error migrating image for mod ${mod.id}:`, error);
          errors++;
        }
      }));
    }

    offset += batchSize;
    if (mods.length < batchSize) {
      hasMore = false;
    }
  }

  return { processed, migrated, skipped, errors };
}

/**
 * Process ModImage images
 */
async function migrateModImageImages(batchSize: number = 30) {
  console.log("\n🖼️  Processing ModImage images...");
  
  let offset = startOffset !== undefined ? startOffset : 0;
  let hasMore = true;
  let processed = 0;
  let migrated = 0;
  let skipped = 0;
  let errors = 0;

  while (hasMore) {
    // Stop if we've reached the end offset
    if (endOffset !== undefined && offset >= endOffset) {
      hasMore = false;
      break;
    }
    
    const modImages = await prisma.modImage.findMany({
      where: {
        AND: [
          {
            NOT: {
              url: {
                contains: normalizedR2Domain,
              },
            },
          },
        ],
      },
      take: batchSize,
      skip: offset,
      select: {
        id: true,
        url: true,
      },
    });

    if (modImages.length === 0) {
      hasMore = false;
      break;
    }

    // Process in parallel batches of 30
    for (let i = 0; i < modImages.length; i += 30) {
      const batch = modImages.slice(i, i + 30);
      
      await Promise.all(batch.map(async (modImage) => {
        processed++;
        if (!modImage.url || modImage.url === "") {
          skipped++;
          return;
        }

        // If it's already using R2 custom domain, skip
        if (isR2Url(modImage.url)) {
          skipped++;
          return;
        }

        // If it's R2 public endpoint, convert to custom domain
        if (isR2PublicEndpointUrl(modImage.url)) {
          try {
            const newUrl = convertR2UrlToCustomDomain(modImage.url);
            await prisma.modImage.update({
              where: { id: modImage.id },
              data: { url: newUrl },
            });
            
            globalMigratedCount++;
            console.log(`URL actual: ${modImage.url}`);
            console.log(`URL nueva:  ${newUrl}`);
            console.log("");
            console.log("");
            console.log("");
            console.log(`Progreso: ${globalMigratedCount}/${globalTotalCount}`);
            migrated++;
            return;
          } catch (error) {
            console.error(`  ❌ Error updating image for modImage ${modImage.id}:`, error);
            errors++;
            return;
          }
        }

        // If simplefile domain is specified and URL is not from simplefile, skip
        if (normalizedSimplefileDomain && !isSimplefileUrl(modImage.url)) {
          skipped++;
          return;
        }

        try {
          const imageBuffer = await downloadImage(modImage.url);

          if (!imageBuffer) {
            errors++;
            return;
          }

          const filename = getFilenameFromUrl(modImage.url);
          const newUrl = await uploadToR2AndGetPublicUrl(imageBuffer, filename);

          await prisma.modImage.update({
            where: { id: modImage.id },
            data: { url: newUrl },
          });

          globalMigratedCount++;
          console.log(`URL actual: ${modImage.url}`);
          console.log(`URL nueva:  ${newUrl}`);
          console.log("");
          console.log("");
          console.log("");
          console.log(`Progreso: ${globalMigratedCount}/${globalTotalCount}`);
          migrated++;
        } catch (error) {
          console.error(`  ❌ Error migrating image for modImage ${modImage.id}:`, error);
          errors++;
        }
      }));
    }

    offset += batchSize;
    if (modImages.length < batchSize) {
      hasMore = false;
    }
  }

  return { processed, migrated, skipped, errors };
}

/**
 * Process ModVersion download files
 */
async function migrateModVersionFiles(batchSize: number = 30) {
  console.log("\n📦 Processing ModVersion download files...");
  
  let offset = startOffset !== undefined ? startOffset : 0;
  let hasMore = true;
  let processed = 0;
  let migrated = 0;
  let skipped = 0;
  let errors = 0;

  while (hasMore) {
    // Stop if we've reached the end offset
    if (endOffset !== undefined && offset >= endOffset) {
      hasMore = false;
      break;
    }
    
    const modVersions = await prisma.modVersion.findMany({
      where: {
        OR: [
          // URLs that are not from R2
          {
            NOT: {
              downloadUrl: {
                contains: normalizedR2Domain,
              },
            },
          },
          // URLs from R2 that have duplicate extensions (e.g., .zip.zip)
          {
            AND: [
              {
                downloadUrl: {
                  contains: normalizedR2Domain,
                },
              },
              {
                OR: [
                  { downloadUrl: { contains: ".zip.zip" } },
                  { downloadUrl: { contains: ".jpg.jpg" } },
                  { downloadUrl: { contains: ".jpeg.jpeg" } },
                  { downloadUrl: { contains: ".png.png" } },
                  { downloadUrl: { contains: ".gif.gif" } },
                  { downloadUrl: { contains: ".webp.webp" } },
                  { downloadUrl: { contains: ".pdf.pdf" } },
                  { downloadUrl: { contains: ".exe.exe" } },
                  { downloadUrl: { contains: ".dll.dll" } },
                ],
              },
            ],
          },
        ],
      },
      take: batchSize,
      skip: offset,
      select: {
        id: true,
        downloadUrl: true,
        filename: true,
        extension: true,
      },
    });

    if (modVersions.length === 0) {
      hasMore = false;
      break;
    }

    // Process in parallel batches of 30
    for (let i = 0; i < modVersions.length; i += 30) {
      const batch = modVersions.slice(i, i + 30);
      
      await Promise.all(batch.map(async (modVersion) => {
        processed++;
        if (!modVersion.downloadUrl || modVersion.downloadUrl === "") {
          skipped++;
          return;
        }

        // If it's already using R2 custom domain, check for duplicate extensions
        if (isR2Url(modVersion.downloadUrl)) {
          const correctedUrl = fixDuplicateExtensions(modVersion.downloadUrl);
          if (correctedUrl && correctedUrl !== modVersion.downloadUrl) {
            // Download the file from the URL with duplicate extension and re-upload with correct name
            try {
              const fileBuffer = await downloadImage(modVersion.downloadUrl);

              if (!fileBuffer) {
                errors++;
                return;
              }

              // Extract correct filename from corrected URL
              const correctFilename = getFilenameFromUrl(correctedUrl);
              
              // Upload to R2 with correct filename
              const newUrl = await uploadToR2AndGetPublicUrl(fileBuffer, correctFilename);

              await prisma.modVersion.update({
                where: { id: modVersion.id },
                data: { downloadUrl: newUrl },
              });
              
              globalMigratedCount++;
              console.log(`URL actual: ${modVersion.downloadUrl}`);
              console.log(`URL nueva:  ${newUrl}`);
              console.log("");
              console.log("");
              console.log("");
              console.log(`Progreso: ${globalMigratedCount}/${globalTotalCount}`);
              migrated++;
              return;
            } catch (error) {
              console.error(`  ❌ Error fixing duplicate extension for modVersion ${modVersion.id}:`, error);
              errors++;
              return;
            }
          }
          skipped++;
          return;
        }

        // If it's R2 public endpoint, convert to custom domain
        if (isR2PublicEndpointUrl(modVersion.downloadUrl)) {
          try {
            const newUrl = convertR2UrlToCustomDomain(modVersion.downloadUrl);
            await prisma.modVersion.update({
              where: { id: modVersion.id },
              data: { downloadUrl: newUrl },
            });
            
            globalMigratedCount++;
            console.log(`URL actual: ${modVersion.downloadUrl}`);
            console.log(`URL nueva:  ${newUrl}`);
            console.log("");
            console.log("");
            console.log("");
            console.log(`Progreso: ${globalMigratedCount}/${globalTotalCount}`);
            migrated++;
            return;
          } catch (error) {
            console.error(`  ❌ Error updating downloadUrl for modVersion ${modVersion.id}:`, error);
            errors++;
            return;
          }
        }

        // If simplefile domain is specified and URL is not from simplefile, skip
        if (normalizedSimplefileDomain && !isSimplefileUrl(modVersion.downloadUrl)) {
          skipped++;
          return;
        }

        try {
          // Download the file
          const fileBuffer = await downloadImage(modVersion.downloadUrl);

          if (!fileBuffer) {
            errors++;
            return;
          }

          // Use filename from database if available, otherwise extract from URL
          let filename: string;
          if (modVersion.filename && modVersion.extension) {
            // First, check and fix any duplicate extensions in the stored filename
            let cleanFilename = modVersion.filename;
            const duplicateFixed = fixDuplicateExtensions(cleanFilename);
            if (duplicateFixed) {
              cleanFilename = duplicateFixed;
            }
            
            // Check if filename already ends with the extension to avoid duplicates
            const extensionLower = modVersion.extension.toLowerCase();
            const filenameLower = cleanFilename.toLowerCase();
            if (filenameLower.endsWith(`.${extensionLower}`)) {
              filename = cleanFilename; // Already has extension
            } else {
              filename = `${cleanFilename}.${modVersion.extension}`;
            }
          } else if (modVersion.filename) {
            filename = modVersion.filename;
            // Check and fix duplicate extensions
            const duplicateFixed = fixDuplicateExtensions(filename);
            if (duplicateFixed) {
              filename = duplicateFixed;
            }
          } else {
            // Extract from URL - the filename from URL already includes extension
            filename = getFilenameFromUrl(modVersion.downloadUrl);
            // Check and fix duplicate extensions
            const duplicateFixed = fixDuplicateExtensions(filename);
            if (duplicateFixed) {
              filename = duplicateFixed;
            }
          }

          const newUrl = await uploadToR2AndGetPublicUrl(fileBuffer, filename);

          await prisma.modVersion.update({
            where: { id: modVersion.id },
            data: { downloadUrl: newUrl },
          });

          globalMigratedCount++;
          console.log(`URL actual: ${modVersion.downloadUrl}`);
          console.log(`URL nueva:  ${newUrl}`);
          console.log("");
          console.log("");
          console.log("");
          console.log(`Progreso: ${globalMigratedCount}/${globalTotalCount}`);
          migrated++;
        } catch (error) {
          console.error(`  ❌ Error migrating downloadUrl for modVersion ${modVersion.id}:`, error);
          errors++;
        }
      }));
    }

    offset += batchSize;
    if (modVersions.length < batchSize) {
      hasMore = false;
    }
  }

  return { processed, migrated, skipped, errors };
}

// Global counter for progress tracking
let globalMigratedCount = 0;
let globalTotalCount = 0;

/**
 * Count total images and files to migrate (excluding already migrated ones)
 * Note: This is an approximate count. The actual filtering happens in the migration functions.
 */
async function countTotalImages(): Promise<number> {
  let total = 0;
  
  // Count User images (approximate - will filter during migration)
  // User.imageUrl is String (not nullable), so filter empty strings
  total += await prisma.user.count({
    where: {
      imageUrl: {
        not: "",
      },
    },
  });
  
  // Count Mod images (approximate - will filter during migration)
  total += await prisma.mod.count({
    where: {
      imageUrl: { not: null },
    },
  });
  
  // Count ModImage images (approximate - will filter during migration)
  total += await prisma.modImage.count();
  
  // Count ModVersion download files (approximate - will filter during migration)
  // Simplified count - actual filtering happens in migration function
  total += await prisma.modVersion.count();
  
  return total;
}

/**
 * Main migration function
 */
async function main() {
  console.log("🚀 Starting image and file migration to Cloudflare R2");
  if (normalizedSimplefileDomain) {
    console.log(`📡 Simplefile Server Domain: ${normalizedSimplefileDomain}`);
  } else {
    console.log(`📡 Migrating all non-R2 images and files to R2`);
  }
  console.log(`🌐 R2 Custom Domain: ${normalizedR2Domain}`);
  console.log(`ℹ️  Images and files already using ${normalizedR2Domain} will be skipped`);
  if (startOffset !== undefined || endOffset !== undefined) {
    console.log(`📍 Offset range: ${startOffset ?? 0} - ${endOffset ?? "∞"}`);
  }
  console.log("=".repeat(60));
  
  if (startOffset === undefined && endOffset === undefined) {
    console.log("\n📊 Counting total images and files to migrate...");
    globalTotalCount = await countTotalImages();
    console.log(`📈 Total images and files found: ${globalTotalCount}`);
  } else {
    console.log("\n📊 Counting images and files in specified range...");
    // Calculate approximate total in the range
    const rangeTotal = endOffset !== undefined 
      ? endOffset - (startOffset ?? 0)
      : await countTotalImages() - (startOffset ?? 0);
    globalTotalCount = Math.max(0, rangeTotal);
    console.log(`📈 Estimated images and files in range: ${globalTotalCount}`);
  }
  console.log("=".repeat(60));

  const batchSize = 30;
  const results: Record<string, { processed: number; migrated: number; skipped: number; errors: number }> = {};

  try {
    results.user = await migrateUserImages(batchSize);
    results.mod = await migrateModImages(batchSize);
    results.modImage = await migrateModImageImages(batchSize);
    results.modVersion = await migrateModVersionFiles(batchSize);

    console.log("\n" + "=".repeat(60));
    console.log("📊 Migration Summary:");
    console.log("=".repeat(60));

    let totalProcessed = 0;
    let totalMigrated = 0;
    let totalSkipped = 0;
    let totalErrors = 0;

    for (const [table, stats] of Object.entries(results)) {
      console.log(`\n${table}:`);
      console.log(`  Processed: ${stats.processed}`);
      console.log(`  Migrated:  ${stats.migrated}`);
      console.log(`  Skipped:   ${stats.skipped}`);
      console.log(`  Errors:    ${stats.errors}`);
      
      totalProcessed += stats.processed;
      totalMigrated += stats.migrated;
      totalSkipped += stats.skipped;
      totalErrors += stats.errors;
    }

    console.log("\n" + "=".repeat(60));
    console.log("📈 Totals:");
    console.log(`  Processed: ${totalProcessed}`);
    console.log(`  Migrated:  ${totalMigrated}`);
    console.log(`  Skipped:   ${totalSkipped}`);
    console.log(`  Errors:    ${totalErrors}`);
    console.log("=".repeat(60));

    if (totalErrors > 0) {
      console.log("\n⚠️  Some images failed to migrate. Check the errors above.");
    } else {
      console.log("\n✅ Migration completed successfully!");
    }
  } catch (error) {
    console.error("\n❌ Fatal error during migration:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run migration
main()
  .then(() => {
    console.log('\n✅ Script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Script failed:', error);
    process.exit(1);
  });
