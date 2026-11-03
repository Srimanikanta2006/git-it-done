import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'framer-motion'
import { SWITCH_SCENES, TONE } from './scenes'

/* Branch selector for the create/switch card: the HEAD tag sits on the branch you are on. */
export function BranchSwitcher({ applied, instant }: { applied: number; instant: boolean }) {
  const reduce = useReducedMotion()
  const s = SWITCH_SCENES[Math.min(applied, SWITCH_SCENES.length - 1)]
  const move = instant || reduce ? { duration: 0 } : { type: 'spring' as const, stiffness: 260, damping: 26 }
  return (
    <>
      <LayoutGroup>
        <div className="vj-switch" role="list" aria-label="Branches">
          <AnimatePresence initial={false}>
            {s.branches.map((b) => {
              const on = s.head === b
              return (
                <motion.div
                  key={b} className="vj-row" role="listitem" layout="position"
                  initial={instant ? false : { opacity: 0, x: reduce ? 0 : -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, transition: { duration: instant ? 0 : 0.25 } }}
                  transition={move}
                >
                  <span className="vj-slot">
                    {on && <motion.span layoutId="vj-head" className="vj-head" transition={move}>HEAD</motion.span>}
                  </span>
                  <span className={'vj-pill' + (on ? ' on' : '')} style={{ background: b === 'main' ? TONE.main : TONE.login }}>{b}</span>
                  {on && s.badge && (
                    <motion.span
                      className="vj-badge"
                      initial={instant ? false : { opacity: 0, scale: reduce ? 1 : 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={instant ? { duration: 0 } : { delay: 0.35, type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      {s.badge}
                    </motion.span>
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </LayoutGroup>
      <div className="vj-caption" key={s.caption}>{s.caption}</div>
    </>
  )
}
