import { CodeBlock, Crumb, NextUp, PageHeader, Section } from '../ui'

const STEPS = [
  ['01', 'Find an Issue', 'issues'],
  ['02', 'Fork the Repository', 'fork'],
  ['03', 'Clone Your Fork', 'clone'],
  ['04', 'Make Changes', 'commit-push'],
  ['05', 'Commit Changes', 'commit-push'],
  ['06', 'Push to Your Fork', 'commit-push'],
  ['07', 'Open a Pull Request', 'create-pr'],
  ['08', 'Review & Merge', 'challenge/verify'],
] as const

export function Workflow() {
  return (
    <div className="doc-content">
      <Crumb />
      <PageHeader
        eyebrow="Quick reference"
        title="Complete Contribution Workflow"
        lead="One page to remember the whole process. For the full explanation of any step, open its linked page."
      />

      <Section title="The eight steps">
        <ol>
          {STEPS.map(([n, label, slug]) => (
            <li key={n}>
              <a className="inline" href={`#/learn/${slug}`}>{n}. {label}</a>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Command reference">
        <CodeBlock
          title="Clone your fork"
          commands={['git clone <your-fork-url>']}
        />
        <CodeBlock
          title="Enter the repository"
          commands={['cd <repository-name>']}
        />
        <CodeBlock
          title="Stage, commit and push"
          commands={[
            'git add .',
            'git commit -m "Describe your changes"',
            'git push origin main',
          ]}
        />
      </Section>

      <Section title="Quick definitions">
        <ul>
          <li><strong>Fork vs. clone</strong> &mdash; a fork is your copy on GitHub; a clone is that copy downloaded onto your computer.</li>
          <li><strong>Commit vs. push</strong> &mdash; a commit saves a snapshot locally; a push uploads your commits to GitHub.</li>
          <li><strong>Original repository vs. fork</strong> &mdash; the original belongs to the project; the fork belongs to you.</li>
          <li><strong>Base vs. head repository</strong> &mdash; base is where a pull request lands (the original); head is where it comes from (your fork).</li>
        </ul>
      </Section>

      <NextUp />
    </div>
  )
}
