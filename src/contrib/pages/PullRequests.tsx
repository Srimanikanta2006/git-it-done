import { Callout, Crumb, NextUp, PageHeader, Section, Shot } from '../ui'

export function PullRequests() {
  return (
    <div className="doc-content">
      <Crumb />
      <PageHeader
        eyebrow="Understand the process"
        title="Pull Requests: Why Do We Need Them?"
        lead="You found a bug in someone else's repository, and you know how to fix it. But you don't have write access. How do you submit your fix?"
      />

      <Section>
        <p>
          You do not have permission to push directly into most repositories you will contribute to &mdash; only the
          maintainers do. A <strong>pull request (PR)</strong> is how you propose changes anyway: you make your changes in
          your own copy, then ask the maintainers to review and merge them.
        </p>
        <p>
          A pull request proposes changes from one branch or repository into another, so that a maintainer can review the
          diff before it becomes part of the project.
        </p>
      </Section>

      <Section title="The basic lifecycle">
        <p>
          <strong>Your changes</strong> &rarr; <strong>Pull request</strong> &rarr; <strong>Maintainer review</strong> &rarr;{' '}
          <strong>Approved or changes requested</strong> &rarr; <strong>Merge</strong>
        </p>
      </Section>

      <Section title="What a real pull request contains">
        <ul>
          <li><strong>Title</strong> &mdash; a short summary of the change.</li>
          <li><strong>Description</strong> &mdash; what changed and why, often linking the issue it addresses.</li>
          <li><strong>Conversation</strong> &mdash; comments and review discussion.</li>
          <li><strong>Commits</strong> &mdash; every commit included in the proposed change.</li>
          <li><strong>Files changed</strong> &mdash; the full diff, file by file.</li>
          <li><strong>Base repository</strong> &mdash; where the change is proposed to land.</li>
          <li><strong>Head (source) repository</strong> &mdash; where the change is coming from, usually your fork.</li>
        </ul>
        <Shot src="pr-overview-real.png" alt="A GitHub pull request page showing its title, description, commits and files-changed tabs" />
      </Section>

      <Section title="Base vs. head, in plain words">
        <ul>
          <li><strong>Base repository</strong> &mdash; the destination. Usually the original project's <code>main</code> branch.</li>
          <li><strong>Head repository</strong> &mdash; the source. Usually your fork's branch.</li>
          <li><strong>Diff</strong> &mdash; the exact lines added and removed, shown side by side.</li>
        </ul>
      </Section>

      <Section title="What happens during review, and what merging means">
        <p>
          A maintainer reads your diff, may leave comments asking for changes, and eventually either approves and merges it,
          or asks for more work. Merging folds your commits into the base branch, permanently adding your change to the
          project's history.
        </p>
      </Section>

      <Callout tone="warn" title="Important distinction">
        Opening a pull request does <strong>not</strong> mean your contribution is automatically accepted. Maintainers decide
        whether and when to merge it. "Submitted" and "merged" are two different events &mdash; see{' '}
        <a className="inline" href="#/learn/challenge/verify">Verify Your Submission</a> for what to expect.
      </Callout>

      <NextUp />
    </div>
  )
}
