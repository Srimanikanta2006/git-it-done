import { CONFIG } from '../../config'
import { ChallengeSteps, Crumb, ConfigLink, Mistakes, NextUp, PageHeader, Section } from '../../ui'

export function ChallengeStart() {
  return (
    <div className="doc-content">
      <Crumb />
      <PageHeader eyebrow="MUKTI challenge" title="Start Here" lead="Make sure these are ready before you begin. It only takes a few minutes." />
      <ChallengeSteps current="challenge/start" />

      <Section title="You will need">
        <ul>
          <li>A free <strong>GitHub account</strong>. Create one at <a className="inline" href="https://github.com/join" target="_blank" rel="noreferrer">github.com/join</a> if you don't have one.</li>
          <li><strong>Git</strong> installed on your computer. Check with <code>git --version</code> in a terminal.</li>
          <li><strong>VS Code</strong> (or any text editor) installed. Download from <a className="inline" href="https://code.visualstudio.com" target="_blank" rel="noreferrer">code.visualstudio.com</a> if needed.</li>
          <li>Access to the MUKTI challenge repository: <ConfigLink href={CONFIG.muktiRepoUrl} label="Open the repository" pendingLabel="MUKTI repository URL to be announced" />.</li>
        </ul>
      </Section>

      <Section title="Quick check">
        <p>Open a terminal and run:</p>
        <ul>
          <li><code>git --version</code> &mdash; should print a version number, not "command not found".</li>
          <li><code>code --version</code> &mdash; should print a version number. If not, see the "code . unavailable" fix in Troubleshooting.</li>
        </ul>
      </Section>

      <Section title="No VS Code installed?">
        <p>
          You don't strictly need VS Code: any text editor works for editing a file, and Git runs independently of it. But
          VS Code is free, works on every platform, and is what this guide's screenshots use, so it's the easiest path if
          you have time to install it. If you're stuck, ask a volunteer &mdash; don't spend the whole workshop on installation.
        </p>
      </Section>

      <Mistakes
        items={[
          { title: '"git: command not found"', fix: 'Git isn\'t installed yet. Install it from git-scm.com (Windows/macOS) or your package manager (Linux), then open a fresh terminal.' },
          { title: 'No GitHub account yet', fix: 'Create one at github.com/join before you continue — you need it to fork and push.' },
        ]}
      />

      <NextUp />
    </div>
  )
}
