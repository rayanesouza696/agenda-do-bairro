export function getFestivalImageUrl(photoId: string): string {
  return `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/pexels-image?id=${photoId}`;
}
