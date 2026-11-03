import { useSyncExternalStore } from 'react'
import App from './App'
import { ContribApp } from './contrib/App'
import { isInGuide } from './contrib/router'

function subscribe(cb: () => void) {
  window.addEventListener('hashchange', cb)
  return () => window.removeEventListener('hashchange', cb)
}

/**
 * The only top-level architectural seam the new guide needed: one hash-prefix switch between the
 * existing full-viewport presentation deck and the new scrollable documentation site. Both read
 * `window.location.hash` directly, so direct loads, refreshes and browser back/forward all work
 * the same way the presentation deck's own hash navigation already did.
 */
export default function Root() {
  const guide = useSyncExternalStore(subscribe, isInGuide, isInGuide)
  return guide ? <ContribApp /> : <App />
}
