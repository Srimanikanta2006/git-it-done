import type { ComponentType } from 'react'
import { Home } from './pages/Home'
import { Issues } from './pages/Issues'
import { PullRequests } from './pages/PullRequests'
import { FirstContribution } from './pages/FirstContribution'
import { Fork } from './pages/Fork'
import { Clone } from './pages/Clone'
import { CommitPush } from './pages/CommitPush'
import { CreatePr } from './pages/CreatePr'
import { Workflow } from './pages/Workflow'
import { ChallengeHub } from './pages/challenge/Hub'
import { ChallengeStart } from './pages/challenge/Start'
import { ChallengeTask } from './pages/challenge/Task'
import { ChallengeComplete } from './pages/challenge/Complete'
import { ChallengeSubmit } from './pages/challenge/Submit'
import { ChallengeVerify } from './pages/challenge/Verify'
import { ChallengeTroubleshooting } from './pages/challenge/Troubleshooting'
import { Resources } from './pages/Resources'

/** slug (as produced by router.slugFromHash) -> page component. '' is the guide home/overview. */
export const PAGES: Record<string, ComponentType> = {
  '': Home,
  issues: Issues,
  'pull-requests': PullRequests,
  'first-contribution': FirstContribution,
  fork: Fork,
  clone: Clone,
  'commit-push': CommitPush,
  'create-pr': CreatePr,
  workflow: Workflow,
  challenge: ChallengeHub,
  'challenge/start': ChallengeStart,
  'challenge/task': ChallengeTask,
  'challenge/complete': ChallengeComplete,
  'challenge/submit': ChallengeSubmit,
  'challenge/verify': ChallengeVerify,
  'challenge/troubleshooting': ChallengeTroubleshooting,
  resources: Resources,
}
