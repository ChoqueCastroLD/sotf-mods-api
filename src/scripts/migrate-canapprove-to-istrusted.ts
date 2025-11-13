import { prisma } from '../services/prisma';

/**
 * Migration script to copy canApprove values to isTrusted
 * and then remove canApprove field
 * 
 * Usage: bun src/scripts/migrate-canapprove-to-istrusted.ts
 */

async function migrateCanApproveToIsTrusted() {
  console.log('🚀 Starting migration: canApprove -> isTrusted\n');

  try {
    // Step 1: Copy canApprove values to isTrusted
    console.log('📋 Step 1: Copying canApprove values to isTrusted...');
    
    const users = await prisma.user.findMany({
      select: {
        id: true,
        canApprove: true,
        isTrusted: true,
      },
    });

    console.log(`   Found ${users.length} user(s) to migrate\n`);

    let updatedCount = 0;
    for (const user of users) {
      // Copy canApprove value to isTrusted if they don't match
      if (user.canApprove !== user.isTrusted) {
        await prisma.user.update({
          where: { id: user.id },
          data: { isTrusted: user.canApprove },
        });
        updatedCount++;
        console.log(`   ✅ Updated user ${user.id}: isTrusted = ${user.canApprove}`);
      }
    }

    console.log(`\n   ✨ Updated ${updatedCount} user(s)\n`);

    // Step 2: Verify migration
    console.log('📋 Step 2: Verifying migration...');
    const verifyUsers = await prisma.user.findMany({
      where: {
        OR: [
          { canApprove: true, isTrusted: false },
          { canApprove: false, isTrusted: true },
        ],
      },
    });

    if (verifyUsers.length > 0) {
      console.warn(`   ⚠️  Warning: Found ${verifyUsers.length} user(s) with mismatched values:`);
      verifyUsers.forEach((user) => {
        console.warn(`      User ${user.id}: canApprove=${user.canApprove}, isTrusted=${user.isTrusted}`);
      });
    } else {
      console.log('   ✅ All users have matching values\n');
    }

    console.log('✨ Migration completed successfully!');
    console.log('\n📝 Next steps:');
    console.log('   1. Remove canApprove field from Prisma schema');
    console.log('   2. Run: bunx prisma db push');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    if (error instanceof Error) {
      console.error('   Error message:', error.message);
      console.error('   Stack:', error.stack);
    }
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the migration
migrateCanApproveToIsTrusted()
  .then(() => {
    console.log('\n✅ Script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Script failed:', error);
    process.exit(1);
  });

