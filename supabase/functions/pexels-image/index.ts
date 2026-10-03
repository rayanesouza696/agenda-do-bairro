const corsHeaders = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey' };
const allowedPhotoIds = new Set(['7991226','2977514','11157601','39662988','8629103','20095784','9788573','6899243','8522710','37588429','37788460','34195321','5643190']);
Deno.serve(async (request: Request) => {
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders });
  try {
    if (request.method !== 'GET') return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    const photoId = new URL(request.url).searchParams.get('id');
    if (!photoId || !allowedPhotoIds.has(photoId)) return new Response('Image not found', { status: 404, headers: corsHeaders });
    const imageResponse = await fetch(`https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=1200`, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!imageResponse.ok) return new Response('Unable to load image', { status: 502, headers: corsHeaders });
    const headers = new Headers(corsHeaders); headers.set('Content-Type', imageResponse.headers.get('Content-Type') ?? 'image/jpeg'); headers.set('Cache-Control', 'public, max-age=86400, s-maxage=604800');
    return new Response(imageResponse.body, { status: 200, headers });
  } catch { return new Response('Unable to load image', { status: 500, headers: corsHeaders }); }
});
