import { useSyncExternalStore } from 'react'

/** The guide lives entirely under the #/learn hash prefix, so it can share one static index.html
 *  with the presentation deck (GitHub Pages friendly: refresh and direct links always work). */
export const GUIDE_PREFIX = '#/learn'

export const isGuideHash = (hash: string = window.location.hash) => hash === GUIDE_PREFIX || hash.startsWith(GUIDE_PREFIX + '/')

/** '' = guide home. 'fork' = a top-level page. 'challenge/start' = a nested challenge page. */
export function slugFromHash(hash: string = window.location.hash): string {
  if (!isGuideHash(hash)) return ''
  return hash.slice(GUIDE_PREFIX.length).replace(/^\/+/, '').replace(/\/+$/, '')
}

export const guideHref = (slug = '') => (slug ? `${GUIDE_PREFIX}/${slug}` : GUIDE_PREFIX)

function subscribe(cb: () => void) {
  window.addEventListener('hashchange', cb)
  return () => window.removeEventListener('hashchange', cb)
}

/** Current guide slug, kept in sync with hashchange (covers links, back/forward and direct loads). */
export function useGuideSlug(): string {
  return useSyncExternalStore(subscribe, () => slugFromHash(), () => slugFromHash())
}

export const isInGuide = () => isGuideHash()
export function useInGuide(): boolean {
  return useSyncExternalStore(subscribe, isInGuide, isInGuide)
}
