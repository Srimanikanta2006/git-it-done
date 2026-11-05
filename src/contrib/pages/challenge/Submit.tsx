import { ChallengeSteps, Crumb, NextUp, PageHeader, Section, Callout } from '../../ui'

export function ChallengeSubmit() {
  return (
    <div className="doc-content">
      <Crumb />
      <PageHeader
        eyebrow="MUKTI challenge"
        title="Submit Your Pull Request"
        lead="Open a pull request from your fork back to the original repository."
      />
      <ChallengeSteps current="challenge/submit" />

      <Section title="How to submit your PR">
        <ol>
          <li>Open your fork on GitHub in your web browser.</li>
          <li>Click the green <strong>Compare &amp; pull request</strong> button (or go to <em>Contribute &rarr; Open pull request</em>).</li>
          <li>Confirm:
            <ul>
              <li><strong>Base repository:</strong> the original repository</li>
              <li><strong>Base branch:</strong> <code>main</code></li>
              <li><strong>Head repository:</strong> your fork</li>
              <li><strong>Compare branch:</strong> <code>main</code></li>
            </ul>
          </li>
          <li>Set the title: <code>Add MUKTI contribution #&lt;YOUR_ID&gt;</code></li>
          <li>Check the <strong>Files changed</strong> tab: it should show only 1 changed line in <code>README.md</code>.</li>
          <li>Click <strong>Create pull request</strong>!</li>
        </ol>
      </Section>

      <Callout tone="tip" title="Automatic Conflict-Free Merging">
        Because you only modified your individual assigned line, the pull request will show a green checkmark (<em>Able to merge</em>) and can be merged automatically without any merge conflicts!
      </Callout>

      <NextUp />
    </div>
  )
}
