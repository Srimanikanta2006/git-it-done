import { CONFIG, hasConfig } from '../config'
import { Callout, Crumb, NextUp, PageHeader, Pending, Section } from '../ui'

const USEFUL_LINKS = [
  ['Learn Git Branching (Interactive Sandbox Game)', 'https://learngitbranching.js.org/'],
  ['Oh Shit, Git!?! (Fix Common Git Messes in Plain English)', 'https://ohshitgit.com/'],
  ['Good First Issue (Curated Beginner Open Source Tasks)', 'https://goodfirstissue.dev/'],
  ['First Contributions (Hands-on Practice PRs)', 'https://firstcontributions.github.io/'],
  ['Pro Git Book (Free Official Book)', 'https://git-scm.com/book/en/v2'],
  ['GitHub Skills (Interactive In-Repo Courses)', 'https://skills.github.com/'],
  ['Mukti Community GitHub Organization', 'https://github.com/MuktiCommunity'],
  ['Mukti Community Telegram Channel', 'https://t.me/+wFGdHiypdQhkZWU9'],
  ['GitHub: Getting started', 'https://docs.github.com/en/get-started'],
  ['GitHub: About issues', 'https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues'],
  ['GitHub: About pull requests', 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests'],
  ['GitHub: Creating a repository', 'https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories'],
  ['GitHub: Fork a repository', 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo'],
]

export function Resources() {
  return (
    <div className="doc-content">
      <Crumb />
      <PageHeader
        eyebrow="Resources"
        title="Video Demonstration & Complete Documentation"
        lead="Come back here any time after the workshop. This page is the reusable version of everything covered live."
      />

      <Section title="Video tutorial">
        {hasConfig(CONFIG.videoUrl) ? (
          <div className="doc-shot">
            <iframe
              width="100%" height="420" style={{ borderRadius: '0.8rem', border: '1px solid var(--card-border)' }}
              src={CONFIG.videoUrl} title="Your First Open Source Contribution — Complete Beginner Guide" allowFullScreen
            />
          </div>
        ) : (
          <Callout tone="warn" title="Video coming soon">
            <Pending>Video URL</Pending> &mdash; "Your First Open Source Contribution &mdash; Complete Beginner Guide" will be
            embedded here once it's recorded and uploaded.
          </Callout>
        )}
        <p>Planned chapters:</p>
        <ol>
          <li>Finding an issue</li>
          <li>Forking a repository</li>
          <li>Cloning a fork</li>
          <li>Making changes in VS Code</li>
          <li>Committing and pushing</li>
          <li>Creating a pull request</li>
          <li>Checking the submission</li>
        </ol>
      </Section>

      <Section title="Written documentation">
        <p>Everything in this guide, start to finish:</p>
        <ul>
          <li><a className="inline" href="#/learn/issues">GitHub Issues</a></li>
          <li><a className="inline" href="#/learn/pull-requests">Pull Requests</a></li>
          <li><a className="inline" href="#/learn/first-contribution">Your First Open Source Contribution</a></li>
          <li><a className="inline" href="#/learn/fork">Step 1: Fork</a></li>
          <li><a className="inline" href="#/learn/clone">Step 2: Clone</a></li>
          <li><a className="inline" href="#/learn/commit-push">Step 3: Make Changes, Commit & Push</a></li>
          <li><a className="inline" href="#/learn/create-pr">Step 4: Create a Pull Request</a></li>
          <li><a className="inline" href="#/learn/workflow">Complete Contribution Workflow</a></li>
          <li><a className="inline" href="#/learn/challenge">MUKTI Challenge</a></li>
        </ul>
      </Section>

      <Section title="Useful links">
        <ul className="doc-links">
          {USEFUL_LINKS.map(([label, href]) => (
            <li key={href}><a href={href} target="_blank" rel="noreferrer">{label}</a></li>
          ))}
        </ul>
      </Section>

      <Section title="Downloadable guide">
        <p>
          A downloadable, printable PDF version of the MUKTI challenge steps is planned as an optional follow-up. It is out
          of scope for the initial launch of this guide so the web version ships first &mdash; <Pending>PDF export</Pending>.
        </p>
      </Section>

      <NextUp />
    </div>
  )
}
