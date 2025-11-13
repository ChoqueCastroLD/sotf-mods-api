/**
 * Script to configure CORS on Cloudflare R2 bucket
 * 
 * Based on: https://kian.org.uk/configuring-cors-on-cloudflare-r2/
 * 
 * This script sends a PUT request to configure CORS on your R2 bucket.
 * CORS is required for presigned URLs to work from the browser.
 * 
 * Usage: bun src/scripts/configure-r2-cors.ts
 */

import { S3Client, PutBucketCorsCommand } from "@aws-sdk/client-s3";

const accountId = Bun.env.R2_ACCOUNT_ID;
const accessKeyId = Bun.env.R2_ACCESS_KEY_ID;
const secretAccessKey = Bun.env.R2_SECRET_ACCESS_KEY;
const bucketName = Bun.env.R2_BUCKET_NAME;

if (!accountId || !accessKeyId || !secretAccessKey || !bucketName) {
  console.error("❌ Missing required environment variables:");
  console.error("   R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME");
  process.exit(1);
}

const s3Client = new S3Client({
  region: "auto",
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

// CORS configuration
// This allows PUT requests from your frontend origins for presigned URL uploads
const corsConfig = {
  CORSRules: [
    {
      AllowedOrigins: [
        "http://localhost:4000",
        "https://sotf-mods.com",
        "https://api.sotf-mods.com",
      ],
      AllowedMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"],
      AllowedHeaders: [
        "Content-Type",
        "Content-Length",
        "Authorization",
        "x-amz-date",
        "x-amz-content-sha256",
        "x-amz-security-token",
      ],
      ExposeHeaders: ["ETag", "Content-Length", "Content-Type"],
      MaxAgeSeconds: 3600,
    },
  ],
};

async function configureCORS() {
  console.log("🚀 Configuring CORS for R2 bucket:", bucketName);
  console.log("\n📋 CORS Configuration:");
  console.log("   Allowed Origins:", corsConfig.CORSRules[0].AllowedOrigins.join(", "));
  console.log("   Allowed Methods:", corsConfig.CORSRules[0].AllowedMethods.join(", "));
  console.log("   Allowed Headers:", corsConfig.CORSRules[0].AllowedHeaders.join(", "));
  console.log("");

  try {
    const command = new PutBucketCorsCommand({
      Bucket: bucketName,
      CORSConfiguration: corsConfig,
    });

    await s3Client.send(command);
    console.log("✅ CORS configuration applied successfully!");
    console.log("\n💡 Note: CORS configuration affects:");
    console.log("   - S3 API operations (presigned URLs)");
    console.log("   - Public bucket access");
    console.log("   - Custom domain access");
    console.log("\n⚠️  Important: Presigned URLs MUST use the original R2 endpoint:");
    console.log(`   https://${bucketName}.${accountId}.r2.cloudflarestorage.com`);
    console.log("   Custom domains don't work with presigned URLs!");
  } catch (error) {
    console.error("❌ Failed to configure CORS:", error);
    if (error instanceof Error) {
      console.error("   Error message:", error.message);
    }
    process.exit(1);
  }
}

configureCORS()
  .then(() => {
    console.log("\n✅ Script completed successfully");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n❌ Script failed:", error);
    process.exit(1);
  });

