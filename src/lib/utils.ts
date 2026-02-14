/**
 * Optimizes ImageKit URLs with width, height, and quality transformations.
 * This is a client-safe utility function.
 */
export function getOptimizedImage(url: string, width?: number, height?: number, quality: number = 80): string {
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
