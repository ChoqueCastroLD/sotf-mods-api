/**
 * Open Graph image of a mod or build page: the generated 1200 x 630 card when the worker already
 * rendered it, else the thumbnail (or first gallery image) with its own size. NSFW pages carry none.
 */
interface SizedImage {
  url: string;
  width: number | null;
  height: number | null;
}

export interface OgImageSource {
  nsfw: boolean;
  ogImage: { url: string } | null;
  thumbnail: SizedImage | null;
  gallery: readonly SizedImage[];
}

export interface OgImageProps {
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export function entityOg(entity: OgImageSource): OgImageProps {
  if (entity.nsfw) return {};
  if (entity.ogImage) return { image: entity.ogImage.url, imageWidth: 1200, imageHeight: 630 };
  const fallback = entity.thumbnail ?? entity.gallery[0];
  if (!fallback) return {};
  return {
    image: fallback.url,
    ...(fallback.width && fallback.height ? { imageWidth: fallback.width, imageHeight: fallback.height } : {}),
  };
}
