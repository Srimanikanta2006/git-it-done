import { QUICK_LINKS } from './sections'
import { guideHref } from './router'

export function TopBar({ onBurger }: { onBurger: () => void }) {
  return (
    <header className="doc-top">
      <button className="doc-burger" onClick={onBurger} aria-label="Toggle section list">Sections</button>
      <a className="doc-brand" href={guideHref()}>
        <b>Git It Done</b> Open Source Guide
      </a>
      <div className="doc-top-spacer" />
      <div className="doc-quick">
        {QUICK_LINKS.map((q) => <a key={q.slug} href={guideHref(q.slug)}>{q.label}</a>)}
      </div>
      <a className="doc-back" href="#/oss-intro">&larr; Back to presentation</a>
    </header>
  )
}
