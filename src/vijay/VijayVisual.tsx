import type { VijayVisualId } from '../engine/types'
import { BranchSwitcher } from './BranchSwitcher'
import { GraphView } from './BranchGraph'
import { ProblemsPanel } from './ProblemsPanel'
import { BRANCH_LAYOUT, BRANCH_SCENES, MERGE_LAYOUT, MERGE_SCENES } from './scenes'
import './vijay.css'

/** The right-hand visual of a branching card, drawn from the step number alone. */
export function VijayVisual({ visual, applied, instant }: { visual: VijayVisualId; applied: number; instant: boolean }) {
  switch (visual) {
    case 'problems': return <ProblemsPanel applied={applied} instant={instant} />
    case 'branches': return <GraphView scene={BRANCH_SCENES[Math.min(applied, BRANCH_SCENES.length - 1)]} layout={BRANCH_LAYOUT} instant={instant} />
    case 'merge': return <GraphView scene={MERGE_SCENES[Math.min(applied, MERGE_SCENES.length - 1)]} layout={MERGE_LAYOUT} instant={instant} />
    case 'switcher': return <BranchSwitcher applied={applied} instant={instant} />
  }
}
