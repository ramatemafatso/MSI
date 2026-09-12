export function apiBase(): string {
  const configured = (import.meta.env.VITE_API_BASE || '').trim().replace(/\/$/, '');
  if (configured) return configured;
  if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
    return `${window.location.origin}`;
  }
  return 'http://localhost:8000';
}

export function apiUrl(path: string): string {
  return `${apiBase()}${path.startsWith('/') ? path : `/${path}`}`;
}
