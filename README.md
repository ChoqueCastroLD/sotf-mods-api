# sotf-mods.com API

## Setup
First create a .env (you can clone .env.example) and fill the variables
```env
PORT=
BASE_URL=
DATABASE_URL=
JWT_SECRET=
KELVINGPT_API=
KELVINGPT_API_AUTHORITY=
# Cloudflare R2 Configuration
# Account ID can be found in your R2 bucket settings
# Example: f2c7d00256306a6f5eb502e7460ce5cd
R2_ACCOUNT_ID=

# To get R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY:
# 1. Go to Cloudflare Dashboard > R2 > Manage R2 API Tokens
# 2. Click "Create API token"
# 3. Set permissions: Object Read & Write
# 4. Select your bucket (sotf-mods) or "All buckets"
# 5. Copy the Access Key ID and Secret Access Key (secret is only shown once!)
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=

# Your bucket name (e.g., sotf-mods)
R2_BUCKET_NAME=

# Public URL for accessing files - use your custom domain or R2 public URL
# Example with custom domain: https://r2.sotf-mods.com
# Example with R2 public URL: https://pub-<account-id>.r2.dev
FILE_DOWNLOAD_ENDPOINT=
FILE_PREVIEW_ENDPOINT=
```

To setup the project run:

```bash
bun install
bunx prisma generate
```

## Getting Started
To run the project run the following commands

```bash
bun run src/index.ts
```

## Development
To start the development server run:
```bash
bun run dev
```

## Caveats
If you are running on linux and issue an error with sharp you might solve it by running:
```bash
cd node_modules/sharp
bun install
```

Open http://localhost:3000/ with your browser to see the result.