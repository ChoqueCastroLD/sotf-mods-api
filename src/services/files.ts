import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Initialize S3 client for Cloudflare R2
const s3Client = new S3Client({
    region: "auto",
    endpoint: `https://${Bun.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: Bun.env.R2_ACCESS_KEY_ID || "",
        secretAccessKey: Bun.env.R2_SECRET_ACCESS_KEY || "",
    },
});

const bucket = Bun.env.R2_BUCKET_NAME || "";

if (!bucket) {
    console.warn("R2_BUCKET_NAME environment variable is not set");
}

/**
 * Generate a presigned URL for direct upload to R2
 * @param filename - The filename to use for the upload
 * @param contentType - The content type of the file
 * @param expiresIn - URL expiration time in seconds (default: 1 hour)
 * @returns Object with uploadUrl and fileKey
 */
export async function generatePresignedUploadUrl(
    filename: string,
    contentType: string,
    expiresIn: number = 3600
): Promise<{ uploadUrl: string; fileKey: string }> {
    if (!bucket) {
        throw new Error("R2_BUCKET_NAME environment variable is not set");
    }

    const timestamp = new Date().getTime();
    const fileKey = `${timestamp}_${filename}`;

    const command = new PutObjectCommand({
        Bucket: bucket,
        Key: fileKey,
        ContentType: contentType,
    });

    const uploadUrl = await getSignedUrl(s3Client, command, { expiresIn });

    return {
        uploadUrl,
        fileKey,
    };
}

/**
 * Legacy function - kept for backward compatibility but now just returns the key
 * Files should be uploaded directly to R2 using presigned URLs
 */
export async function uploadFile(fileBuffer: ArrayBuffer, filename: string): Promise<string> {
    console.log('Uploading file to R2:', filename);
    
    const timestamp = new Date().getTime();
    const key = `${timestamp}_${filename}`;

    if (!bucket) {
        throw new Error("R2_BUCKET_NAME environment variable is not set");
    }

    try {
        const command = new PutObjectCommand({
            Bucket: bucket,
            Key: key,
            Body: Buffer.from(fileBuffer),
            ContentType: getContentType(filename),
        });

        await s3Client.send(command);
        console.log('File uploaded successfully to R2:', key);

        return key;
    } catch (error) {
        console.error('Error uploading file to R2:', error);
        throw error;
    }
}

/**
 * Download a file from R2
 * @param fileKey - The key of the file to download
 * @returns The file buffer
 */
export async function downloadFile(fileKey: string): Promise<ArrayBuffer> {
    if (!bucket) {
        throw new Error("R2_BUCKET_NAME environment variable is not set");
    }

    try {
        const command = new GetObjectCommand({
            Bucket: bucket,
            Key: fileKey,
        });

        const response = await s3Client.send(command);
        
        if (!response.Body) {
            throw new Error("File not found in R2");
        }

        // Convert stream to ArrayBuffer
        const chunks: Uint8Array[] = [];
        // @ts-ignore - Body can be a stream
        for await (const chunk of response.Body) {
            chunks.push(chunk);
        }
        
        const buffer = Buffer.concat(chunks);
        return buffer.buffer;
    } catch (error) {
        console.error('Error downloading file from R2:', error);
        throw error;
    }
}

export function getContentType(filename: string): string {
    const ext = filename.split('.').pop()?.toLowerCase();
    const contentTypes: Record<string, string> = {
        'zip': 'application/zip',
        'json': 'application/json',
        'png': 'image/png',
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'webp': 'image/webp',
        'gif': 'image/gif',
    };
    return contentTypes[ext || ''] || 'application/octet-stream';
}
