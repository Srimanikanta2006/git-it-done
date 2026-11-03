import { GROUPS, SECTIONS } from './sections'
import { guideHref } from './router'

export function Sidebar({ current, open }: { current: string; open: boolean }) {
  return (
    <nav className={'doc-side' + (open ? ' open' : '')} aria-label="Guide sections">
      {GROUPS.map((g) => (
        <div className="doc-side-group" key={g}>
          <h3>{g}</h3>
          <ul>
            {SECTIONS.filter((s) => s.group === g).map((s) => (
              <li key={s.slug}>
                <a className={s.slug === current ? 'on' : ''} href={guideHref(s.slug)} aria-current={s.slug === current ? 'page' : undefined}>
                  {s.short}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
