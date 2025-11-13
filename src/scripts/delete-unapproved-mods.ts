import { prisma } from '../services/prisma';

/**
 * Script to delete all mods with isApproved = false
 * Also deletes related data: downloads, images, reviews, versions, comments, favorites
 */
async function deleteUnapprovedMods() {
  console.log('🚀 Starting deletion of unapproved mods...\n');

  try {
    // First, get all unapproved mods to see what we're dealing with
    const unapprovedMods = await prisma.mod.findMany({
      where: {
        isApproved: false,
      },
      select: {
        id: true,
        name: true,
        slug: true,
        mod_id: true,
      },
    });

    const modCount = unapprovedMods.length;
    console.log(`📊 Found ${modCount} unapproved mod(s) to delete\n`);

    if (modCount === 0) {
      console.log('✅ No unapproved mods found. Nothing to delete.');
      return;
    }

    // Log the mods that will be deleted
    console.log('📝 Mods to be deleted:');
    unapprovedMods.forEach((mod, index) => {
      console.log(`   ${index + 1}. ${mod.name} (${mod.mod_id}) - ${mod.slug}`);
    });
    console.log('');

    // Get all mod IDs
    const modIds = unapprovedMods.map((mod) => mod.id);

    // Step 1: Delete ModDownloads (via ModVersions)
    console.log('🗑️  Step 1: Deleting downloads...');
    const versions = await prisma.modVersion.findMany({
      where: {
        modId: {
          in: modIds,
        },
      },
      select: {
        id: true,
      },
    });
    const versionIds = versions.map((v) => v.id);
    
    const downloadsDeleted = await prisma.modDownload.deleteMany({
      where: {
        modVersionId: {
          in: versionIds,
        },
      },
    });
    console.log(`   ✅ Deleted ${downloadsDeleted.count} download record(s)\n`);

    // Step 2: Delete ModVersions
    console.log('🗑️  Step 2: Deleting versions...');
    const versionsDeleted = await prisma.modVersion.deleteMany({
      where: {
        modId: {
          in: modIds,
        },
      },
    });
    console.log(`   ✅ Deleted ${versionsDeleted.count} version(s)\n`);

    // Step 3: Delete ModImages
    console.log('🗑️  Step 3: Deleting images...');
    const imagesDeleted = await prisma.modImage.deleteMany({
      where: {
        modId: {
          in: modIds,
        },
      },
    });
    console.log(`   ✅ Deleted ${imagesDeleted.count} image(s)\n`);

    // Step 4: Delete ModReviews
    console.log('🗑️  Step 4: Deleting reviews...');
    const reviewsDeleted = await prisma.modReview.deleteMany({
      where: {
        modId: {
          in: modIds,
        },
      },
    });
    console.log(`   ✅ Deleted ${reviewsDeleted.count} review(s)\n`);

    // Step 5: Delete Comments (including replies)
    console.log('🗑️  Step 5: Deleting comments...');
    const commentsDeleted = await prisma.comment.deleteMany({
      where: {
        modId: {
          in: modIds,
        },
      },
    });
    console.log(`   ✅ Deleted ${commentsDeleted.count} comment(s)\n`);

    // Step 6: Delete ModFavorites
    console.log('🗑️  Step 6: Deleting favorites...');
    const favoritesDeleted = await prisma.modFavorite.deleteMany({
      where: {
        modId: {
          in: modIds,
        },
      },
    });
    console.log(`   ✅ Deleted ${favoritesDeleted.count} favorite(s)\n`);

    // Step 7: Delete the Mods themselves
    console.log('🗑️  Step 7: Deleting mods...');
    const modsDeleted = await prisma.mod.deleteMany({
      where: {
        id: {
          in: modIds,
        },
      },
    });
    console.log(`   ✅ Deleted ${modsDeleted.count} mod(s)\n`);

    console.log('✨ Successfully deleted all unapproved mods and related data!');
    console.log(`\n📊 Summary:`);
    console.log(`   - Mods deleted: ${modsDeleted.count}`);
    console.log(`   - Versions deleted: ${versionsDeleted.count}`);
    console.log(`   - Downloads deleted: ${downloadsDeleted.count}`);
    console.log(`   - Images deleted: ${imagesDeleted.count}`);
    console.log(`   - Reviews deleted: ${reviewsDeleted.count}`);
    console.log(`   - Comments deleted: ${commentsDeleted.count}`);
    console.log(`   - Favorites deleted: ${favoritesDeleted.count}`);
  } catch (error) {
    console.error('❌ Error deleting unapproved mods:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
deleteUnapprovedMods()
  .then(() => {
    console.log('\n✅ Script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Script failed:', error);
    process.exit(1);
  });

