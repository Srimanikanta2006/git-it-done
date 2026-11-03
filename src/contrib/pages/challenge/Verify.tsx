import { Callout, ChallengeSteps, Crumb, NextUp, PageHeader, Section } from '../../ui'

export function ChallengeVerify() {
  return (
    <div className="doc-content">
      <Crumb />
      <PageHeader eyebrow="MUKTI challenge" title="Verify Your Submission" lead="Confirm your pull request actually reached the original repository and is waiting for review." />
      <ChallengeSteps current="challenge/verify" />

      <Section title="How to check">
        <ol>
          <li>Open the original MUKTI repository (not your fork).</li>
          <li>Go to its <strong>Pull requests</strong> tab.</li>
          <li>Find your pull request in the list &mdash; it will show your username as the author.</li>
          <li>Open it and confirm the <strong>Files changed</strong> tab shows your change.</li>
        </ol>
      </Section>

      <Callout tone="warn" title="Submitted is not the same as merged">
        If your pull request appears in the list with an open, unmerged status, your submission is complete and successful.
        A maintainer still needs to review it before it is merged into the project. Don't worry if it isn't merged by the
        end of the workshop &mdash; that's normal.
      </Callout>

      <NextUp />
    </div>
  )
}
