import type { Card } from '../engine/types'

const none = { type: 'none' } as const

/* Vijay's section: Branching and merging. Four cards, then a live VS Code demo (not a card).
   Every step uses op "none": the pictures are scripted in src/vijay/scenes.ts and never touch the shared repository state. */

/* The demo project is separate from this presentation. These rows are copied from the last card's drawer. */
const DEMO_SETUP = [
  'mkdir branching-demo && cd branching-demo',
  'git init -b main',
  "printf '# My First Git Project\\n\\nThis is my project.\\n' > README.md",
  'git add README.md',
  'git commit -m "Initial commit"',
]

export const vijayCards: Card[] = [
  {
    id: 'why-branch',
    rail: 'Why branch?',
    section: 'part2',
    kicker: 'BRANCHING · THE PROBLEM',
    title: 'One project. Multiple developers. How do we manage the work?',
    sentence: 'Two problems show up when many people share one project.',
    bullets: [
      'Many people change the same project, and their changes can overlap.',
      'main is the stable version. Unfinished work should not land in it.',
    ],
    view: 'vijay',
    visual: 'problems',
    lane: 'branch',
    into: 'split',
    steps: [
      { cmd: '', output: [], op: none, label: 'Problem 1: combining work' },
      { cmd: '', output: [], op: none, label: 'Problem 2: protecting main' },
    ],
    drawer: {
      happening: 'A project is shared by many people, and main is the version everyone trusts. Two things go wrong without a plan: changes from different people can overlap and are hard to combine, and half-finished work can reach the stable version.',
      talking: [
        'Problem 1 is about coordination: two people touch the same area, and bringing the two pieces of work together takes care. It may cause a conflict. Git does not silently overwrite anyone just because they share a branch.',
        'Problem 2 is the stronger hook for beginners: imagine the app is live and someone adds half a feature to the stable version.',
        'Ask the room: has a group project ever broken the night before the deadline?',
        'Keep the two pictures separate in your words too: first combining work, then protecting main.',
        'Transition: "What if everyone worked on their own line, away from main? That is a branch."',
      ],
    },
  },
  {
    id: 'branch-idea',
    rail: 'Branches',
    section: 'part2',
    kicker: 'BRANCHING · THE IDEA',
    title: 'Separate your work. Keep main stable.',
    sentence: 'A branch is an independent line of development.',
    bullets: [
      'main stays the stable branch.',
      'Commits on a branch do not change main.',
      'When the work is ready, merge it back into main.',
    ],
    note: 'Branches don’t eliminate merge conflicts. Conflicts can still happen when changes are brought together.',
    view: 'vijay',
    visual: 'branches',
    lane: 'branch',
    steps: [
      { cmd: '', output: [], op: none, label: 'main has three commits' },
      { cmd: '', output: [], op: none, label: 'feature-login branches from main' },
      { cmd: '', output: [], op: none, label: 'feature-dashboard branches from main' },
      { cmd: '', output: [], op: none, label: 'Branches progress independently' },
    ],
    drawer: {
      commands: ['git branch', 'git log --oneline --graph --all'],
      happening: 'A branch is a movable label that points at a commit. Creating one copies nothing, so it is instant and cheap. Commits you make while on a branch move only that branch’s label forward, so main stays exactly where it was until you merge.',
      talking: [
        'Point at the glowing commit: both feature branches start from the same earlier commit.',
        'Each branch grows on its own. Watch main: it does not move.',
        'Say it out loud: branches do not remove conflicts. If two branches change the same lines, Git can still ask you to sort it out when they are merged.',
        'Revision: main = stable line, feature branch = a safe place to work.',
        'Transition: "Let us see the commands that make one."',
      ],
    },
  },
  {
    id: 'branch-create',
    rail: 'Create & switch',
    section: 'part2',
    kicker: 'COMMAND · BRANCH AND CHECKOUT',
    title: 'Create a branch. Switch to it. Start working.',
    sentence: 'Creating a branch and switching to it are two actions. One command does both.',
    bullets: [
      'git branch feature-login: creates the branch, you stay where you are.',
      'git checkout feature-login: switches to it.',
      'git checkout -b feature-login: creates it and switches in one go.',
    ],
    tryIt: 'git checkout -b feature-login',
    view: 'terminal',
    visual: 'switcher',
    lane: 'branch',
    steps: [
      { cmd: 'git branch feature-login', output: [], op: none, label: 'Create' },
      { cmd: 'git checkout feature-login', output: ["Switched to branch 'feature-login'"], op: none, label: 'Switch' },
      { cmd: '', output: [], op: none, fresh: true, label: 'Fresh start' },
      { cmd: 'git checkout -b feature-login', output: ["Switched to a new branch 'feature-login'"], op: none, label: 'Create and switch' },
    ],
    drawer: {
      commands: ['git branch', 'git branch feature-login', 'git checkout feature-login', 'git checkout -b feature-login', 'git switch -c feature-login'],
      mistakes: [
        { title: '"fatal: a branch named \'feature-login\' already exists"', fix: 'You cannot create the same branch twice. Use git checkout feature-login to move onto the existing one.' },
        { title: 'Creating a branch but forgetting to switch', fix: 'git branch only creates it. Commits still land on the branch you are on. The prompt or git branch shows where you are.' },
        { title: 'Switching with unsaved changes', fix: 'Git carries uncommitted edits along, or refuses if they would be overwritten. Commit your work first to stay safe.' },
        { title: 'Typos in the branch name', fix: 'Run git branch to see the exact names.' },
      ],
      happening: 'git branch makes a new label. git checkout moves HEAD onto a label. HEAD is Git’s way of remembering which branch you are standing on, and your next commit goes there. git checkout -b does both in one go, so it is the one we use most.',
      talking: [
        'Step 3 is a fresh start on purpose: you cannot create a branch that already exists, so we reset to main and show the one-command version.',
        'HEAD in simple words: "the branch you are on right now".',
        'git branch with no name lists your branches; the current one has a star.',
        'Newer Git also has git switch -c feature-login. It does the same as git checkout -b. Mention it once, then stay with checkout.',
        'Transition: "Now let us do some work on this branch and bring it back."',
      ],
    },
  },
  {
    id: 'branch-merge',
    rail: 'Merge',
    section: 'part2',
    kicker: 'COMMAND · MERGE',
    title: 'Feature complete? Bring it back into main.',
    sentence: 'Switch to the branch that should receive the work, then merge.',
    bullets: [
      'git checkout main: switch to the branch that receives the work.',
      'git merge feature-login: merges feature-login INTO the branch you are on.',
      'feature-login still exists afterwards.',
    ],
    note: 'If both branches have moved forward independently, Git may need a merge commit instead.',
    view: 'terminal',
    visual: 'merge',
    lane: 'main',
    into: 'converge',
    steps: [
      { cmd: 'git checkout main', output: ["Switched to branch 'main'"], op: none, label: 'Switch to main' },
      {
        cmd: 'git merge feature-login',
        output: ['Updating a1b2c3d..e5f6a7b', 'Fast-forward', ' README.md | 1 +', ' 1 file changed, 1 insertion(+)'],
        op: none, label: 'Merge feature-login into main',
      },
    ],
    drawer: {
      commands: [
        ...DEMO_SETUP,
        'git checkout -b feature-login',
        'echo "- Added login feature" >> README.md',
        'git add README.md',
        'git commit -m "Add login feature"',
        'git checkout main',
        'git merge feature-login',
        'git log --oneline',
      ],
      mistakes: [
        { title: 'Merging while on the wrong branch', fix: 'git merge always merges INTO the branch you are on. Run git branch first and check the star is on main.' },
        { title: 'Typing git merge main instead of the feature name', fix: 'The name after merge is the branch you want to bring in: git merge feature-login.' },
        { title: 'Expecting the branch to disappear', fix: 'Merging does not delete anything. When you are finished with it, git branch -d feature-login removes the label (optional).' },
        { title: '"CONFLICT" message', fix: 'Both branches changed the same lines. Git stops and asks you to choose. We skip this today.' },
      ],
      happening: 'Checking out main only moves you there; nothing is merged yet. git merge feature-login then brings the feature’s commits into main. Because main had no new commits of its own, Git simply moves main forward to the feature commit. That is called a fast-forward. If both branches had moved on, Git would make a new merge commit that joins them.',
      talking: [
        'Say it as a sentence: "merge feature-login into where I am".',
        'Why switch first: merge changes the branch you are standing on, so stand on main.',
        'Fast-forward in simple words: main just catches up.',
        'The feature branch stays. Deleting a branch is a separate, optional step.',
        'Revision: checkout -b to start, add and commit to save work, checkout main, merge to bring it back.',
        'Live demo (about 5 to 7 minutes), in a separate small folder with its own README.md, not the presentation project:',
        '1. Show you are on main. 2. git checkout -b feature-login. 3. Add a line to README.md in VS Code and save. 4. git add README.md, then git commit. 5. git checkout main and reopen README.md: the new line is gone. 6. git merge feature-login. 7. Reopen README.md: the line is back. 8. git log --oneline.',
        'Hashes on screen will differ from the card. Start with a clean main and no extra commits, or Git will make a merge commit instead of a fast-forward.',
        'The first five rows of the copy-paste commands create the demo project. The default branch name must be main (git init -b main).',
      ],
    },
  },
]
