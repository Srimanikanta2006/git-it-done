import { ChallengeSteps, Crumb, NextUp, PageHeader, Section } from '../../ui'

export function ChallengeSubmit() {
  return (
    <div className="doc-content">
      <Crumb />
      <PageHeader eyebrow="MUKTI challenge" title="Submit Your Pull Request" lead="Open a pull request from your fork back to the original MUKTI repository." />
      <ChallengeSteps current="challenge/submit" />

      <Section title="Checklist before you click 'Create pull request'">
        <ul>
          <li>Base repository: the original MUKTI repository</li>
          <li>Base branch: <code>main</code></li>
          <li>Head repository: your fork</li>
          <li>Compare branch: <code>main</code></li>
          <li>A clear, specific title</li>
          <li>A short description of what you changed</li>
          <li><strong>Files changed</strong> shows only the file(s) you meant to edit</li>
        </ul>
      </Section>

      <Section>
        <p>
          For the full walkthrough with screenshots, see{' '}
          <a className="inline" href="#/learn/create-pr">Step 4: Create a Pull Request</a>.
        </p>
      </Section>

      <NextUp />
    </div>
  )
}
