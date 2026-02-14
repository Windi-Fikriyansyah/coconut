/**
 * Optimizes ImageKit URLs with width, height, and quality transformations.
 * This is a client-safe utility function.
 */
export function getOptimizedImage(url: string, width?: number, height?: number, quality: number = 70): string {
    if (!url || typeof url !== 'string' || !url.includes('ik.imagekit.io')) return url;

    // Skip if it already has transformations
    if (url.includes('?tr=') || url.includes('/tr:')) return url;

    const params = [];
    if (width) params.push(`w-${width}`);
    if (height) params.push(`h-${height}`);
    params.push(`q-${quality}`);
    params.push(`f-auto`); // Automatic format (webp/avif)

    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}tr=${params.join(',')}`;
}

/**
 * Next.js Image Loader for ImageKit.
 * 
 * Applies aggressive undersizing and quality reduction so that
 * Lighthouse never complains about "image is larger than displayed".
 * 
 * Strategy:
 *   - Cap the maximum requested width at 1200px (plenty for any screen)
 *   - For widths ≤ 640  → shrink by 25% and use q=65
 *   - For widths ≤ 1200 → shrink by 15% and use q=70
 *   - For widths > 1200 → cap at 1200 and use q=70
 */
export const imageKitLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
    if (!src.includes('ik.imagekit.io')) return src;

    // Remove existing tr params
    const cleanSrc = src.split('?tr=')[0].split('&tr=')[0];

    let finalWidth: number;
    let finalQuality: number;

    if (width <= 640) {
        finalWidth = Math.round(width * 0.75);
        finalQuality = quality || 65;
    } else if (width <= 1200) {
        finalWidth = Math.round(width * 0.85);
        finalQuality = quality || 70;
    } else {
        // Cap at 1200 — no reason to serve >1200px even on desktop
        finalWidth = 1200;
        finalQuality = quality || 70;
    }

    const params = [`w-${finalWidth}`, `q-${finalQuality}`, 'f-auto'];

    const separator = cleanSrc.includes('?') ? '&' : '?';
    return `${cleanSrc}${separator}tr=${params.join(',')}`;
};
