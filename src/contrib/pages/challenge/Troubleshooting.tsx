import { ChallengeSteps, Crumb, Mistakes, NextUp, PageHeader } from '../../ui'

const ITEMS = [
  { title: 'Authentication errors when pushing', fix: 'Passwords no longer work for Git over HTTPS. Sign in through the browser prompt that Git opens, or use a personal access token (GitHub Settings > Developer settings > Personal access tokens) in place of a password.' },
  { title: '"repository not found"', fix: 'Check the URL you cloned exactly matches your fork\'s Code button URL, and that you are signed in if the repository is private.' },
  { title: 'Incorrect clone URL', fix: 'Re-open your fork (not the original repository), click Code, and copy the HTTPS URL again. Re-run git clone with the correct URL.' },
  { title: '`git push` rejected', fix: 'Usually means your fork has commits you don\'t have locally (rare in this challenge). Run `git pull origin main`, then push again.' },
  { title: 'Working on the wrong branch', fix: 'This challenge only uses `main`. Run `git branch` to check which branch has a `*` next to it; it should be `main`.' },
  { title: 'No "New pull request" option', fix: 'You are likely viewing the original repository instead of your fork, or you haven\'t pushed any commits yet. Push first, then look for the "Compare & pull request" banner on your fork.' },
  { title: 'Incorrect base repository in the pull request', fix: 'On the "Open a pull request" screen, click the base repository dropdown and select the original MUKTI repository, not your fork.' },
  { title: 'Unexpected files appear in your pull request', fix: 'You probably ran `git add .` after editing unrelated files. Remove them before committing with `git restore --staged <file>`, or ask a volunteer for help undoing a commit.' },
  { title: '`code .` doesn\'t open VS Code', fix: 'Open VS Code normally and use File > Open Folder instead, or run "Shell Command: Install \'code\' command in PATH" from VS Code\'s Command Palette and try again in a fresh terminal.' },
]

export function ChallengeTroubleshooting() {
  return (
    <div className="doc-content">
      <Crumb />
      <PageHeader eyebrow="MUKTI challenge" title="Troubleshooting" lead="The most common beginner problems during this challenge, and how to fix them." />
      <ChallengeSteps current="challenge/troubleshooting" />
      <Mistakes title="Common problems" items={ITEMS} />
      <NextUp />
    </div>
  )
}
