/** One row per guide page. The array order IS the prev/next order (same idiom as src/cards.ts). */
export interface SectionMeta {
  slug: string
  title: string
  /** Short label for the sidebar. */
  short: string
  /** Sidebar group heading. */
  group: string
}

export const SECTIONS: SectionMeta[] = [
  { slug: 'issues', title: 'GitHub Issues: Finding Something to Contribute', short: 'Finding an issue', group: 'Understand the process' },
  { slug: 'pull-requests', title: 'Pull Requests: Why Do We Need Them?', short: 'Why pull requests', group: 'Understand the process' },

  { slug: 'first-contribution', title: 'Your First Open Source Contribution', short: "Let's contribute to MUKTI", group: 'Your first contribution' },
  { slug: 'fork', title: 'Step 1: Fork the Repository', short: '1. Fork', group: 'Your first contribution' },
  { slug: 'clone', title: 'Step 2: Clone Your Fork', short: '2. Clone', group: 'Your first contribution' },
  { slug: 'commit-push', title: 'Step 3: Make Changes, Commit & Push', short: '3. Edit, commit, push', group: 'Your first contribution' },
  { slug: 'create-pr', title: 'Step 4: Create a Pull Request', short: '4. Open a pull request', group: 'Your first contribution' },

  { slug: 'workflow', title: 'Complete Contribution Workflow', short: 'Quick reference', group: 'Quick reference' },

  { slug: 'challenge', title: 'MUKTI Challenge: Your Turn!', short: 'Challenge overview', group: 'MUKTI challenge' },
  { slug: 'challenge/start', title: 'Start Here', short: 'Start here', group: 'MUKTI challenge' },
  { slug: 'challenge/task', title: 'Find Your Assigned Task', short: 'Find your task', group: 'MUKTI challenge' },
  { slug: 'challenge/complete', title: 'Complete Your Task', short: 'Complete the task', group: 'MUKTI challenge' },
  { slug: 'challenge/submit', title: 'Submit Your Pull Request', short: 'Submit your PR', group: 'MUKTI challenge' },
  { slug: 'challenge/verify', title: 'Verify Your Submission', short: 'Verify your submission', group: 'MUKTI challenge' },
  { slug: 'challenge/troubleshooting', title: 'Troubleshooting', short: 'Troubleshooting', group: 'MUKTI challenge' },

  { slug: 'resources', title: 'Video Demonstration & Complete Documentation', short: 'Video & resources', group: 'Resources' },
]

export const GROUPS = Array.from(new Set(SECTIONS.map((s) => s.group)))

export const sectionOf = (slug: string) => SECTIONS.find((s) => s.slug === slug)

export function neighbours(slug: string): { prev?: SectionMeta; next?: SectionMeta } {
  const i = SECTIONS.findIndex((s) => s.slug === slug)
  if (i < 0) return {}
  return { prev: SECTIONS[i - 1], next: SECTIONS[i + 1] }
}

/** The three shortcuts that must stay reachable from every guide page. */
export const QUICK_LINKS = [
  { slug: 'challenge/start', label: 'Start Challenge' },
  { slug: 'workflow', label: 'Complete Workflow' },
  { slug: 'challenge/troubleshooting', label: 'Troubleshooting' },
]
