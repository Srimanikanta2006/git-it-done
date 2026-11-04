import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { TONE, type GLayout, type GScene } from './scenes'

/* The one Git-graph visual used by all five branching cards: rings, dots, curved branch lines,
   colored pills, hashes under each commit. Scripted by scene + layout, so forward, back and
   deep links always draw the same picture. */
export function BranchGraph({ scene, layout, instant }: { scene: GScene; layout: GLayout; instant: boolean }) {
  const reduce = useReducedMotion()
  const snap = instant
  const { x0, dx, lanes, fs } = layout
  const pillW = (t: string) => t.length * fs * 0.62 + 32
  const pillH = fs * 1.4
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
    return [{ key: k.parent + '>' + k.id, d, color: TONE[k.tone], delay: k.delay ?? 0, ghost: !!k.ghost }]
  })

  const seen: Record<string, number> = {}
  const pills = scene.pills.flatMap((p) => {
    const pos = at(p.at)
    if (!pos) return []
    const k = (seen[p.at] = (seen[p.at] ?? -1) + 1)
    const h = p.owner ? pillH * 1.74 : pillH
    return [{ ...p, x: pos.x, y: pos.y - fs * 1.9 - k * fs * 1.5, w: pillW(p.name), h, head: scene.head === p.name }]
  })
  const headPill = pills.find((p) => p.head)
  const hold = snap ? 0 : 0.25

  return (
    <svg className="graph" viewBox={layout.viewBox} role="img" aria-label="Branch graph">
      {edges.map((e) => (
        <motion.path
          key={e.key} d={e.d} fill="none" stroke={e.color} strokeWidth="5" strokeLinecap="round"
          strokeDasharray={e.ghost ? '3 10' : undefined} opacity={e.ghost ? 0.6 : 1}
          initial={snap ? false : reduce ? { opacity: 0 } : { pathLength: 0 }}
          animate={reduce ? { opacity: e.ghost ? 0.6 : 1 } : { pathLength: 1 }}
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
              <circle r="22" fill="none" stroke={col} strokeWidth="3" strokeDasharray={k.ghost ? '5 5' : undefined} />
              <circle r="14" fill={col} opacity={k.ghost ? 0.35 : 1} />
            </motion.g>
            <motion.text
              y={fs * 2.3} textAnchor="middle" className={'g-hash' + (k.ghost ? ' ghost' : '')}
              fill={k.ghost ? 'var(--term-dim)' : 'var(--term-text)'} style={{ fontSize: k.ghost ? fs * 0.85 : fs, fontStyle: k.ghost ? 'italic' : 'normal' }}
              initial={snap ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: snap ? 0 : hold + 0.15 + (k.delay ?? 0) }}
            >
              {k.ghost ? 'staged' : k.id}
            </motion.text>
          </g>
        )
      })}

      <AnimatePresence>
        {scene.fileTag && (
          <motion.g
            key="file-tag"
            initial={snap ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, x: x0 + scene.fileTag.col * dx, y: lanes[scene.fileTag.lane] - fs * 4.6 }}
            exit={{ opacity: 0, transition: { duration: snap ? 0 : 0.25 } }}
            transition={snap ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 24 }}
          >
            <rect x={-pillW(scene.fileTag.label) / 2} y={-pillH / 2} width={pillW(scene.fileTag.label)} height={pillH} rx={pillH / 2}
              fill="none" stroke="var(--term-dim)" strokeWidth="2.5" strokeDasharray="5 5" />
            <text textAnchor="middle" y={fs * 0.28} className="g-hash" fill="var(--term-dim)" style={{ fontSize: fs * 0.82 }}>{scene.fileTag.label}</text>
          </motion.g>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {pills.map((p) => {
          const commitDelay = scene.commits.find((c) => c.id === p.at)?.delay ?? 0
          return (
            <motion.g
              key={p.name}
              initial={snap ? false : { x: p.x, y: p.y, opacity: 0 }}
              animate={{ x: p.x, y: p.y, opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: snap ? 0 : 0.4 } }}
              transition={snap ? { duration: 0 } : { type: 'spring', stiffness: 160, damping: 22, delay: hold + 0.15 + commitDelay + (p.at === scene.pulse ? 0.3 : 0) }}
            >
              <rect x={-p.w / 2} y={-p.h / 2} width={p.w} height={p.h} rx={p.owner ? pillH / 2 : p.h / 2} fill={TONE[p.tone]}
                stroke={p.head ? 'var(--head)' : 'none'} strokeWidth="3" />
              <text textAnchor="middle" y={p.owner ? -p.h * 0.5 + pillH * 0.62 : fs * 0.28} className="g-pill" style={{ fontSize: fs }}>{p.name}</text>
              {p.owner && (
                <text textAnchor="middle" y={p.h * 0.5 - pillH * 0.3} className="g-owner" style={{ fontSize: fs * 0.62 }}>{p.owner}</text>
              )}
            </motion.g>
          )
        })}
      </AnimatePresence>

      {headPill && (
        <motion.g
          key="head-tag"
          initial={snap ? false : { x: headPill.x, y: headPill.y, opacity: 0 }}
          animate={{ x: headPill.x - headPill.w / 2 - fs * 2.3, y: headPill.y, opacity: 1 }}
          transition={snap ? { duration: 0 } : { type: 'spring', stiffness: 220, damping: 22 }}
        >
          <rect x={-fs * 2} y={-pillH / 2} width={fs * 4} height={pillH} rx={pillH / 2}
            fill="var(--panel-2)" stroke="var(--head)" strokeWidth="2.5" strokeDasharray="6 5" />
          <text textAnchor="middle" y={fs * 0.28} className="g-head-tag" style={{ fontSize: fs * 0.82 }}>HEAD</text>
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
