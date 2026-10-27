/** Normalize Astro `base` so it always ends with `/` (e.g. `/D-E/`). */
function baseUrl(): string {
	const base = import.meta.env.BASE_URL || '/';
	return base.endsWith('/') ? base : `${base}/`;
}

/** Prefix a site-root path with Astro `base` (e.g. `/D-E`). */
export function withBase(path: string): string {
	const base = baseUrl();
	if (path === '/' || path === '') return base;
	return `${base}${path.replace(/^\//, '')}`;
}

/** Strip `base` from a pathname for active-nav comparisons. */
export function withoutBase(pathname: string): string {
	const base = baseUrl().replace(/\/$/, '');
	const raw = pathname.replace(/\/$/, '') || '/';
	if (base && (raw === base || raw.startsWith(`${base}/`))) {
		return raw.slice(base.length) || '/';
	}
	return raw;
}
