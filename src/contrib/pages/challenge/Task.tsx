import { CONFIG, hasConfig } from '../../config'
import { Callout, ChallengeSteps, Crumb, NextUp, PageHeader, Pending, Section } from '../../ui'

export function ChallengeTask() {
  return (
    <div className="doc-content">
      <Crumb />
      <PageHeader eyebrow="MUKTI challenge" title="Find Your Assigned Task" lead="Work out exactly what you're being asked to change before you touch any code." />
      <ChallengeSteps current="challenge/task" />

      <Section title="How tasks are assigned">
        {hasConfig(CONFIG.assignmentMechanism) ? (
          <p>{CONFIG.assignmentMechanism}</p>
        ) : (
          <Callout tone="warn" title="Not finalised yet">
            The exact way tasks are assigned across 150&ndash;200 participants hasn't been decided yet (a shared issue list, a
            label per participant, a generated file per person, or something else). <Pending>Final assignment mechanism</Pending>{' '}
            will be announced during the workshop and added here. The steps below apply regardless of the method chosen.
          </Callout>
        )}
      </Section>

      <Section title="Understanding your task, once you have it">
        <ol>
          <li>Open the issue or instructions you've been pointed to.</li>
          <li>Read the full description, not just the title.</li>
          <li>Identify the exact file (or files) you need to change.</li>
          <li>Identify what the result should look like once you're done.</li>
          <li>If anything is unclear, ask a volunteer or comment on the issue &mdash; don't guess.</li>
        </ol>
      </Section>

      <Section title="Where to ask for help">
        <p>
          Ask a volunteer in the room, or leave a comment on your assigned issue. Don't spend more than a couple of minutes
          stuck before asking &mdash; the workshop moves fast.
        </p>
      </Section>

      <NextUp />
    </div>
  )
}
