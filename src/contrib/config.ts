/**
 * Configuration for the MUKTI Open Source Challenge.
 * Every page reads from here, so changing values here propagates across the entire guide.
 */
export const CONFIG = {
  /** The MUKTI challenge repository participants fork. */
  muktiRepoUrl: 'https://github.com/Srimanikanta2006/git-it-done',
  /** Vijay's live demonstration issue (the one he forks and fixes on the projector). */
  demoIssueUrl: 'https://github.com/Srimanikanta2006/git-it-done/issues/1',
  /** How participants find out which issue/task is theirs. */
  assignmentMechanism: 'Each participant is assigned a specific GitHub Issue (e.g. "MUKTI Contribution #1 🚀") containing their Participant ID and a single word to contribute to the line-by-line community message in README.md.',
  /** Recorded walkthrough, added after the workshop. */
  videoUrl: '',
} as const

export const hasConfig = (v: string) => v.trim().length > 0
