/** Extracts the video ID from youtube.com/watch?v=… and youtu.be/… URLs. */
export function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, '');
    if (host === 'youtu.be') return u.pathname.slice(1).split('/')[0] || null;
    if (host === 'youtube.com' || host === 'm.youtube.com') return u.searchParams.get('v');
    return null;
  } catch {
    return null;
  }
}

export const youTubeEmbedUrl = (id: string) => `https://www.youtube-nocookie.com/embed/${id}`;
export const youTubeThumbUrl = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
