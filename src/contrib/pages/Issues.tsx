import { Callout, Crumb, Mistakes, NextUp, PageHeader, Section, Shot } from '../ui'

export function Issues() {
  return (
    <div className="doc-content">
      <Crumb />
      <PageHeader
        eyebrow="Understand the process"
        title="GitHub Issues: Finding Something to Contribute"
        lead="Before you can contribute, you need something to contribute to. Issues are how open-source projects keep track of work that needs doing."
      />

      <Section title="What is a GitHub Issue?">
        <p>
          An issue is a single, trackable unit of work on a GitHub repository: a bug report, a requested feature, a piece of
          documentation that needs writing, or any other task. Every issue has a title, a description, a number, and a
          conversation thread underneath it where contributors and maintainers discuss it.
        </p>
      </Section>

      <Section title="Why do projects use issues?">
        <p>
          A large project can have hundreds of people wanting to help, and dozens of things that need fixing. Issues give
          everyone a shared, visible list: maintainers can describe what needs to happen, and contributors can see what is
          available before writing a single line of code.
        </p>
      </Section>

      <Section title="Common types of issues">
        <ul>
          <li><strong>Bugs</strong> &mdash; something is broken and needs fixing.</li>
          <li><strong>Improvements</strong> &mdash; something works, but could be better (faster, clearer, more consistent).</li>
          <li><strong>Feature requests</strong> &mdash; something new that does not exist yet.</li>
        </ul>
      </Section>

      <Section title="Understanding labels">
        <p>Maintainers attach labels to issues to help contributors filter and prioritise. The most common ones you will see:</p>
        <ul>
          <li><code>good first issue</code> &mdash; suggested as a reasonable starting point for new contributors.</li>
          <li><code>help wanted</code> &mdash; the maintainers would like outside help on this one.</li>
          <li><code>bug</code> &mdash; confirms the issue is a defect, not a feature request.</li>
          <li><code>enhancement</code> &mdash; a proposed improvement to existing functionality.</li>
        </ul>
        <Callout tone="warn" title="Beginner note">
          A <code>good first issue</code> label does not guarantee the task is easy. It only means a maintainer judged it to be
          a reasonable place to start. Always read the full description before deciding.
        </Callout>
      </Section>

      <Section title="How to read an issue">
        <ol>
          <li>Read the title and description fully before doing anything else.</li>
          <li>Look for an "expected outcome": what should be true once the issue is resolved?</li>
          <li>Scroll through the comments. Maintainers often clarify requirements there.</li>
          <li>Check whether anyone has already commented "I'll take this" or been assigned.</li>
        </ol>
        <Shot
          src="issue-labels.png"
          alt="A GitHub issue showing its title, description, labels and assignee"
          caption="Example: an open issue with labels and an assignee"
        />
      </Section>

      <Section title="Before you start work">
        <ul>
          <li>Check existing discussions on the issue before you start, in case someone already tried something that didn't work.</li>
          <li>If requirements are unclear, ask the maintainers in a comment &mdash; don't guess.</li>
          <li>Do not start work on an issue already assigned to someone else without checking with them or a maintainer first.</li>
        </ul>
        <Shot
          src="issue-comments.png"
          alt="Comment thread under a GitHub issue showing a clarifying question from a contributor"
        />
      </Section>

      <Mistakes
        items={[
          { title: 'Picking an issue without reading it fully', fix: 'Read the whole description and the comments. Half the detail is usually below the fold.' },
          { title: 'Starting work on an already-assigned issue', fix: 'Check the "Assignees" panel on the right of the issue page, and read the comments for "I\'m working on this".' },
          { title: 'Guessing at unclear requirements', fix: 'Ask in a comment on the issue. Maintainers would rather answer a question than reject a mismatched pull request.' },
        ]}
      />

      <Callout tone="tip" title="Using the MUKTI repository">
        When you look for your own practice issue, use the real MUKTI repository rather than an imagined one &mdash; see
        "Your First Open Source Contribution" for the exact link.
      </Callout>

      <NextUp />
    </div>
  )
}
