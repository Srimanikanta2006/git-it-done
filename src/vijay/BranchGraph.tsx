import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { TONE, type GLayout, type GScene } from './scenes'

/* Same drawing language as components/Graph.tsx (rings, dots, pills, HEAD ring, springs),
   but driven by a scripted scene so it can show several lanes and fast-forward. */
export function BranchGraph({ scene, layout, instant }: { scene: GScene; layout: GLayout; instant: boolean }) {
  const reduce = useReducedMotion()
  const snap = instant
  const { x0, dx, lanes, fs } = layout
  const pillW = (t: string) => t.length * fs * 0.6 + 30
  const pillH = fs * 1.36
  const at = (id: string) => {
    const k = scene.commits.find((m) => m.id === id)
    return k ? { x: x0 + k.col * dx, y: lanes[k.lane] } : null
  }
  const spring = { type: 'spring' as const, stiffness: 420, damping: 15 }
  const pop = reduce
    ? { initial: snap ? false : { opacity: 0 }, animate: { opacity: 1 } }
    : { initial: snap ? false : { scale: 0 }, animate: { scale: 1 } }

  const edges = scene.commits.flatMap((k) => {
    const to = at(k.id)
    const from = k.parent ? at(k.parent) : null
    if (!to || !from) return []
    const mx = (from.x + to.x) / 2
    const d = from.y !== to.y
      ? `M${from.x} ${from.y} C${mx} ${from.y} ${mx} ${to.y} ${to.x} ${to.y}`
      : `M${from.x} ${from.y} L${to.x} ${to.y}`
    return [{ key: k.parent + '>' + k.id, d, color: TONE[k.tone], delay: k.delay ?? 0 }]
  })

  const seen: Record<string, number> = {}
  const pills = scene.pills.flatMap((p) => {
    const pos = at(p.at)
    if (!pos) return []
    const k = (seen[p.at] = (seen[p.at] ?? -1) + 1)
    return [{ ...p, x: pos.x, y: pos.y - fs * 1.9 - k * fs * 1.5, head: scene.head === p.name }]
  })
  const headPill = pills.find((p) => p.head)
  const head = headPill ? at(headPill.at) : null
  const hold = snap ? 0 : 0.25

  return (
    <svg className="graph" viewBox={layout.viewBox} role="img" aria-label="Branch graph">
      {edges.map((e) => (
        <motion.path
          key={e.key} d={e.d} fill="none" stroke={e.color} strokeWidth="5" strokeLinecap="round"
          initial={snap ? false : reduce ? { opacity: 0 } : { pathLength: 0 }}
          animate={reduce ? { opacity: 1 } : { pathLength: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: snap ? 0 : e.delay }}
        />
      ))}

      {scene.commits.map((k) => {
        const p = at(k.id)!
        const col = TONE[k.tone]
        return (
          <g key={k.id} transform={`translate(${p.x} ${p.y})`}>
            {scene.pulse === k.id && <circle r="22" fill="none" stroke={col} strokeWidth="3" className="pulse" />}
            <motion.g {...pop} transition={reduce ? { duration: 0.3 } : { ...spring, delay: snap ? 0 : hold + (k.delay ?? 0) }}>
              <circle r="22" fill="none" stroke={col} strokeWidth="3" />
              <circle r="14" fill={col} />
            </motion.g>
            <motion.text
              y={fs * 2.3} textAnchor="middle" className="g-hash" fill="var(--term-text)" style={{ fontSize: fs }}
              initial={snap ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: snap ? 0 : hold + 0.15 + (k.delay ?? 0) }}
            >
              {k.id}
            </motion.text>
          </g>
        )
      })}

      <AnimatePresence>
        {pills.map((p) => (
          <motion.g
            key={p.name}
            initial={snap ? false : { x: p.x, y: p.y, opacity: 0 }}
            animate={{ x: p.x, y: p.y, opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: snap ? 0 : 0.4 } }}
            transition={snap ? { duration: 0 } : { type: 'spring', stiffness: 160, damping: 22, delay: hold + 0.2 + (p.at === scene.pulse ? 0.3 : 0) }}
          >
            <rect x={-pillW(p.name) / 2} y={-pillH / 2} width={pillW(p.name)} height={pillH} rx={pillH / 2} fill={TONE[p.tone]}
              stroke={p.head ? 'var(--head)' : 'none'} strokeWidth="3" />
            <text textAnchor="middle" y={fs * 0.28} className="g-pill" style={{ fontSize: fs }}>{p.name}</text>
          </motion.g>
        ))}
      </AnimatePresence>

      {head && (
        <motion.g
          initial={snap ? false : { x: head.x, y: head.y }}
          animate={{ x: head.x, y: head.y }}
          transition={snap ? { duration: 0 } : { type: 'spring', stiffness: 140, damping: 18, delay: hold + 0.1 }}
        >
          <circle r="31" fill="none" stroke="var(--head)" strokeWidth="3" strokeDasharray="7 7" className="head-ring" />
        </motion.g>
      )}
    </svg>
  )
}

/** Graph plus its one-line caption (re-fades whenever the caption changes). */
export function GraphView({ scene, layout, instant }: { scene: GScene; layout: GLayout; instant: boolean }) {
  return (
    <>
      <BranchGraph scene={scene} layout={layout} instant={instant} />
      <div className="vj-caption" key={scene.caption}>{scene.caption}</div>
    </>
  )
}
