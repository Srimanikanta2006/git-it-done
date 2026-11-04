import { motion } from 'framer-motion'
import type { Card, CmdText } from '../engine/types'
import { INSTALL, OPEN_TERMINAL, OS_LIST, useOS } from '../os'
import { Cmd, CopyButton } from './Copy'
import { missing, useUserDetails } from '../userDetails'
import { resolveCard } from '../osCards'

export function Drawer({ card, open, onClose }: { card: Card; open: boolean; onClose: () => void }) {
  const { os } = useOS()
  const { details } = useUserDetails()
  const d = resolveCard(card, os).drawer
  const resolve = (c: CmdText) => (typeof c === 'string' ? c : c.byOS[os])
  const osLabel = OS_LIST.find((o) => o.id === os)!.label
  return (
    <motion.aside
      className="drawer"
      aria-hidden={!open}
      initial={false}
      animate={open ? { x: 0, visibility: 'visible' } : { x: '104%', transitionEnd: { visibility: 'hidden' } }}
      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
    >
      <div className="drawer-head">
        <div className="kicker">GUIDELINES &middot; {card.kicker}</div>
        <button className="x-btn" onClick={onClose} aria-label="Close guidelines">Close</button>
      </div>

      <section>
        <h3>In plain English</h3>
        <p>{d.happening}</p>
      </section>

      {!!d.talking?.length && (
        <section>
          <h3>Key Guidelines &amp; Insights</h3>
          <ul className="talking">
            {d.talking.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </section>
      )}

      {(d.install || d.commands?.length) && (
        <section>
          <h3>Your terminal ({osLabel})</h3>
          <p>Open it: <strong>{OPEN_TERMINAL[os]}</strong></p>
          {d.install && INSTALL[os].map((i) => (
            <div key={i.cmd}>
              <p className="muted">{i.text}</p>
              <div className="cmd-row"><code><Cmd text={i.cmd} /></code><CopyButton text={i.cmd} /></div>
            </div>
          ))}
        </section>
      )}

      {!!d.clicks?.length && (
        <section>
          <h3>Step by step ({osLabel})</h3>
          <ol className="clicks">
            {d.clicks.map((t) => <li key={t}>{t}</li>)}
          </ol>
        </section>
      )}

      {!!d.commands?.length && (
        <section>
          <h3>Commands to try</h3>
          {d.commands.some((c) => missing(resolve(c), details)) && <p className="drawer-banner">Add your details once (press U) and every command fills in for you.</p>}
          {d.commands.map((c, i) => {
            const text = resolve(c)
            return <div className="cmd-row" key={i + text}><code><Cmd text={text} /></code><CopyButton text={text} /></div>
          })}
        </section>
      )}

      {!!d.mistakes?.length && (
        <section>
          <h3>Common mistakes</h3>
          {d.mistakes.map((m) => (
            <div className="mistake" key={m.title}>
              <strong>{m.title}</strong>
              <p>{m.fix}</p>
            </div>
          ))}
        </section>
      )}

      {d.sections?.map((s) => (
        <section key={s.title}>
          <h3>{s.title}</h3>
          {s.ordered
            ? <ol className="clicks">{s.items.map((i) => <li key={i}>{i}</li>)}</ol>
            : <ul className="talking">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>}
        </section>
      ))}
    </motion.aside>
  )
}
