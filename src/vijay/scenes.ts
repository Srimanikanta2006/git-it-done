/* Scripted scenes for the branching cards. Pure data: a scene is a function of the step number only,
   so forward, back, replay and deep links always draw the same picture. */

export type Tone = 'main' | 'login' | 'dash'
export const TONE: Record<Tone, string> = {
  main: 'var(--lane-main)',
  login: 'var(--lane-feature)',
  dash: 'var(--lane-remote)',
}

export interface GCommit { id: string; lane: number; col: number; tone: Tone; parent?: string; delay?: number }
export interface GPill { name: string; at: string; tone: Tone }
export interface GScene {
  commits: GCommit[]
  /** Pills at the same commit stack upwards in array order. */
  pills: GPill[]
  /** Name of the pill whose tip carries the HEAD ring. */
  head?: string
  /** Commit that pulses (the shared commit). */
  pulse?: string
  caption: string
}
export interface GLayout { viewBox: string; lanes: number[]; x0: number; dx: number; fs: number }

const c = (id: string, lane: number, col: number, tone: Tone, parent?: string, delay = 0): GCommit => ({ id, lane, col, tone, parent, delay })

/* ---------- Card 2: main with three commits, two branches growing on their own ---------- */
export const BRANCH_LAYOUT: GLayout = { viewBox: '0 0 800 440', lanes: [360, 220, 80], x0: 70, dx: 110, fs: 25 }

const MAIN = [c('a1b2c3d', 0, 0, 'main'), c('b2c3d4e', 0, 1, 'main', 'a1b2c3d'), c('c3d4e5f', 0, 2, 'main', 'b2c3d4e')]
const L1 = c('4d5e6f7', 1, 3, 'login', 'c3d4e5f')
const D1 = c('9a8b7c6', 2, 3, 'dash', 'c3d4e5f')
const L2 = c('5e6f7a8', 1, 4, 'login', '4d5e6f7')
const L3 = c('6f7a8b9', 1, 5, 'login', '5e6f7a8', 0.35)
const D2 = c('8b7c6d5', 2, 4, 'dash', '9a8b7c6', 0.2)
const mainPill: GPill = { name: 'main', at: 'c3d4e5f', tone: 'main' }

export const BRANCH_SCENES: GScene[] = [
  { commits: [], pills: [], caption: 'Press Space to build the graph' },
  { commits: MAIN, pills: [mainPill], caption: 'main: the stable line of commits' },
  { commits: [...MAIN, L1], pills: [mainPill, { name: 'feature-login', at: L1.id, tone: 'login' }], pulse: 'c3d4e5f', caption: 'feature-login starts from a shared commit' },
  {
    commits: [...MAIN, L1, D1],
    pills: [mainPill, { name: 'feature-login', at: L1.id, tone: 'login' }, { name: 'feature-dashboard', at: D1.id, tone: 'dash' }],
    pulse: 'c3d4e5f', caption: 'feature-dashboard starts from the same commit',
  },
  {
    commits: [...MAIN, L1, D1, L2, L3, D2],
    pills: [mainPill, { name: 'feature-login', at: L3.id, tone: 'login' }, { name: 'feature-dashboard', at: D2.id, tone: 'dash' }],
    caption: 'Each branch grows on its own. main has not moved.',
  },
]

/* ---------- Card 4: the live demo, a fast-forward merge ---------- */
export const MERGE_LAYOUT: GLayout = { viewBox: '0 80 800 190', lanes: [195], x0: 170, dx: 460, fs: 28 }
const A = c('a1b2c3d', 0, 0, 'main')
const B = c('e5f6a7b', 0, 1, 'login', 'a1b2c3d')
const feature: GPill = { name: 'feature-login', at: B.id, tone: 'login' }

export const MERGE_SCENES: GScene[] = [
  { commits: [A, B], pills: [feature, { name: 'main', at: A.id, tone: 'main' }], head: 'feature-login', caption: 'You are on feature-login. main is one commit behind.' },
  { commits: [A, B], pills: [feature, { name: 'main', at: A.id, tone: 'main' }], head: 'main', caption: 'Now on main. It does not have the feature yet.' },
  { commits: [A, B], pills: [feature, { name: 'main', at: B.id, tone: 'main' }], head: 'main', pulse: B.id, caption: 'Merged feature-login INTO main. main moved forward.' },
]

/* ---------- Card 3: the branch selector ---------- */
export interface SwitchScene { branches: string[]; head: string; caption: string; badge?: string }
export const SWITCH_SCENES: SwitchScene[] = [
  { branches: ['main'], head: 'main', caption: 'You are on main.' },
  { branches: ['main', 'feature-login'], head: 'main', caption: 'Created, but you are still on main.' },
  { branches: ['main', 'feature-login'], head: 'feature-login', caption: 'Switched. New commits now go to feature-login.' },
  { branches: ['main'], head: 'main', caption: 'Fresh start: same goal, one command.' },
  { branches: ['main', 'feature-login'], head: 'feature-login', caption: 'Created and switched in one step.', badge: 'create + switch' },
]
