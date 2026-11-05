import { Callout, ChallengeSteps, Crumb, NextUp, PageHeader, Section } from '../../ui'

export function ChallengeTask() {
  return (
    <div className="doc-content">
      <Crumb />
      <PageHeader
        eyebrow="MUKTI challenge"
        title="Find Your Assigned Task"
        lead="Work out your assigned number and word before you touch any code."
      />
      <ChallengeSteps current="challenge/task" />

      <Section title="How tasks are assigned">
        <p>
          Each participant is assigned a numbered <strong>GitHub Issue</strong> in the repository:
        </p>
        <p>
          <code>MUKTI Contribution #&#123;PARTICIPANT_ID&#125; 🚀</code>
        </p>
        <Callout tone="tip" title="Check your assigned issue">
          Open your assigned issue on GitHub to see your <strong>Participant ID</strong> (e.g. <code>#12</code>) and your{' '}
          <strong>Assigned Word</strong> (e.g. <code>freedom</code>). You will contribute that single word to our collective community message.
        </Callout>
      </Section>

      <Section title="Your exact mission">
        <ol>
          <li>Open your assigned issue and note down your number and word.</li>
          <li>The only file you will modify is <code>README.md</code>.</li>
          <li>Find the line matching your number under the <strong>MUKTI Community Message</strong> section.</li>
          <li>Replace <strong>only your number</strong> with your assigned word.</li>
          <li>Do not touch any other lines, numbers, or files.</li>
        </ol>
      </Section>

      <Section title="Expected Result">
        <p><strong>Before:</strong></p>
        <pre><code>12. 12</code></pre>
        <p><strong>After:</strong></p>
        <pre><code>12. freedom</code></pre>
        <p>
          <em>Notice: Because every participant edits their own distinct line, you do not need to worry about complex merge conflicts or running <code>git pull</code>!</em>
        </p>
      </Section>

      <Section title="Where to ask for help">
        <p>
          If you are unsure of your number or word, ask a volunteer in the room or leave a comment on your assigned issue.
        </p>
      </Section>

      <NextUp />
    </div>
  )
}
