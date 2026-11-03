import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

/* Card 1. Two separate scenes, one per problem. Nothing here shows Git behaviour:
   scene 1 is only about combining people's work, scene 2 is only about an unfinished feature reaching main. */

const ROWS = ['File A', 'File B', 'File C', 'File D']
const rowY = (i: number) => 100 + i * 62
const TAGS = [
  { label: 'Change 1', color: 'var(--lane-main)', row: 0, x: 250 },
  { label: 'Change 2', color: 'var(--lane-feature)', row: 2, x: 250 },
  { label: 'Change 3', color: 'var(--lane-remote)', row: 2, x: 410 },
]

function Caption({ title, text }: { title: string; text: string }) {
  return (
    <div className="vj-caption two" key={title}>
      {title && <b>{title}</b>}
      <span>{text}</span>
    </div>
  )
}

function Combine({ show, snap, reduce }: { show: boolean; snap: boolean; reduce: boolean }) {
  return (
    <svg className="graph" viewBox="0 0 800 370" role="img" aria-label="Three changes land on a project; two land in the same place">
      <rect x="20" y="20" width="760" height="330" rx="22" fill="var(--panel-2)" stroke="var(--panel-line)" strokeWidth="2" />
      <text x="50" y="66" className="art-mono" fontSize="25" fill="var(--term-dim)">Project</text>
      {ROWS.map((r, i) => (
        <g key={r}>
          <rect x="70" y={rowY(i)} width="640" height="48" rx="10" fill="var(--panel)" stroke="var(--panel-line)" strokeWidth="2" />
          <rect x="88" y={rowY(i) + 11} width="20" height="26" rx="4" fill="none" stroke="var(--term-dim)" strokeWidth="3" />
          <text x="128" y={rowY(i) + 33} className="art-mono" fontSize="25" fill="var(--term-text)">{r}</text>
        </g>
      ))}
      {show && TAGS.map((t, i) => (
        <motion.g
          key={t.label} transform={`translate(${t.x} ${rowY(t.row) + 6})`}
          initial={snap ? false : { opacity: 0, y: reduce ? 0 : -70 }} animate={{ opacity: 1, y: 0 }}
          transition={snap ? { duration: 0 } : { type: 'spring', stiffness: 200, damping: 18, delay: i * 0.35 }}
        >
          <rect width="150" height="36" rx="18" fill={t.color} />
          <text x="75" y="26" textAnchor="middle" className="g-pill" fontSize="25">{t.label}</text>
        </motion.g>
      ))}
      {show && (
        <motion.g
          initial={snap ? false : { opacity: 0 }} animate={{ opacity: 1 }}
          transition={snap ? { duration: 0 } : { delay: 1.3, duration: 0.4 }}
        >
          <rect x="236" y={rowY(2) - 2} width="338" height="52" rx="14" fill="none" stroke="var(--accent)" strokeWidth="4" strokeDasharray="10 8" className="pulse-soft" />
          <text x="590" y={rowY(2) + 33} className="art-mono" fontSize="25" fill="var(--accent)">overlap</text>
        </motion.g>
      )}
    </svg>
  )
}

const MX = [110, 270, 430]
const NEW_X = 590
const LY = 200

function Stable({ snap, reduce }: { snap: boolean; reduce: boolean }) {
  const t = (delay: number) => (snap ? { duration: 0 } : { duration: 0.4, delay })
  const popIn = (delay: number) => (snap ? { duration: 0 } : reduce ? { duration: 0.3, delay } : { type: 'spring' as const, stiffness: 420, damping: 15, delay })
  return (
    <svg className="graph" viewBox="0 0 800 330" role="img" aria-label="main was stable, then an unfinished feature was added to it and it became broken">
      {/* status badge: Stable flips to Broken once the unfinished commit is on main */}
      <motion.g initial={snap ? false : { opacity: 1 }} animate={{ opacity: 0 }} transition={t(1.6)}>
        <rect x="40" y="24" width="250" height="56" rx="28" fill="var(--lane-main)" />
        <path d="M70 52 L80 62 L98 42" fill="none" stroke="var(--panel)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <text x="116" y="62" className="g-pill" fontSize="28">Stable</text>
      </motion.g>
      <motion.g initial={snap ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={t(1.6)}>
        <rect x="40" y="24" width="250" height="56" rx="28" fill="var(--accent)" />
        <text x="76" y="62" className="g-pill" fontSize="28" fill="var(--accent-ink)" style={{ fill: 'var(--accent-ink)' }}>! Broken</text>
      </motion.g>

      <path d={`M${MX[0]} ${LY} L${MX[2]} ${LY}`} stroke="var(--lane-main)" strokeWidth="5" strokeLinecap="round" />
      <motion.path
        d={`M${MX[2]} ${LY} L${NEW_X} ${LY}`} fill="none" stroke="var(--lane-feature)" strokeWidth="5" strokeLinecap="round" strokeDasharray="4 12"
        initial={snap ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={t(0.3)}
      />
      {MX.map((x) => (
        <g key={x} transform={`translate(${x} ${LY})`}>
          <circle r="22" fill="none" stroke="var(--lane-main)" strokeWidth="3" />
          <circle r="14" fill="var(--lane-main)" />
        </g>
      ))}
      <g transform={`translate(${NEW_X} ${LY})`}>
        <motion.g initial={snap ? false : { scale: 0 }} animate={{ scale: 1 }} transition={popIn(0.5)}>
          <circle r="22" fill="none" stroke="var(--lane-feature)" strokeWidth="3" strokeDasharray="6 6" />
          <circle r="14" fill="var(--lane-feature)" opacity="0.55" />
        </motion.g>
        <motion.text
          y="64" textAnchor="middle" className="g-hash" fill="var(--lane-feature)"
          initial={snap ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={t(0.8)}
        >
          half-done feature
        </motion.text>
      </g>

      <motion.g
        initial={snap ? false : { x: MX[2], y: LY - 48 }} animate={{ x: NEW_X, y: LY - 48 }}
        transition={snap ? { duration: 0 } : { type: 'spring', stiffness: 120, damping: 20, delay: 1 }}
      >
        <rect x="-45" y="-17" width="90" height="34" rx="17" fill="var(--lane-main)" />
        <text textAnchor="middle" y="7" className="g-pill">main</text>
      </motion.g>
    </svg>
  )
}

export function ProblemsPanel({ applied, instant }: { applied: number; instant: boolean }) {
  const reduce = !!useReducedMotion()
  const second = applied >= 2
  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={second ? 's2' : 's1'} className="vj-scene"
          initial={instant ? false : { opacity: 0 }} animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: instant ? 0 : 0.25 } }}
          transition={{ duration: 0.3 }}
        >
          {second ? <Stable snap={instant} reduce={reduce} /> : <Combine show={applied >= 1} snap={instant} reduce={reduce} />}
        </motion.div>
      </AnimatePresence>
      {applied === 0 && <Caption title="" text="Press Space to begin" />}
      {applied === 1 && <Caption title="Problem 1: combining work" text="Overlapping changes need to be combined carefully." />}
      {applied >= 2 && <Caption title="Problem 2: protecting main" text="Unfinished work now affects everyone using main." />}
    </>
  )
}
