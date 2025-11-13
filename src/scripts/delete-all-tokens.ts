import { prisma } from '../services/prisma';

/**
 * Script to delete all records from the Token table
 * This will force all users to log in again
 */
async function deleteAllTokens() {
  console.log('🚀 Starting deletion of all tokens...\n');

  try {
    // First, count how many tokens exist
    const tokenCount = await prisma.token.count();
    console.log(`📊 Found ${tokenCount} token(s) to delete\n`);

    if (tokenCount === 0) {
      console.log('✅ No tokens found. Nothing to delete.');
      return;
    }

    // Get some info about the tokens before deleting
    const tokensInfo = await prisma.token.findMany({
      select: {
        id: true,
        userId: true,
        expiresAt: true,
        createdAt: true,
      },
      take: 10, // Just show first 10 as sample
    });

    console.log('📝 Sample tokens to be deleted (showing first 10):');
    tokensInfo.forEach((token, index) => {
      const expired = token.expiresAt < new Date() ? ' (expired)' : '';
      console.log(`   ${index + 1}. Token ID: ${token.id}, User ID: ${token.userId || 'null'}, Expires: ${token.expiresAt.toISOString()}${expired}`);
    });
    if (tokenCount > 10) {
      console.log(`   ... and ${tokenCount - 10} more token(s)\n`);
    } else {
      console.log('');
    }

    // Delete all tokens
    console.log('🗑️  Deleting all tokens...');
    const deleted = await prisma.token.deleteMany({});
    console.log(`   ✅ Deleted ${deleted.count} token(s)\n`);

    console.log('✨ Successfully deleted all tokens!');
    console.log(`\n📊 Summary:`);
    console.log(`   - Tokens deleted: ${deleted.count}`);
    console.log(`   - All users will need to log in again`);
  } catch (error) {
    console.error('❌ Error deleting tokens:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
deleteAllTokens()
  .then(() => {
    console.log('\n✅ Script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Script failed:', error);
    process.exit(1);
  });

