import { ChallengeSteps, Crumb, NextUp, PageHeader, Section, Callout } from '../../ui'

export function ChallengeComplete() {
  return (
    <div className="doc-content">
      <Crumb />
      <PageHeader
        eyebrow="MUKTI challenge"
        title="Complete Your Task"
        lead="Fork, clone, edit your line in README.md, commit, and push directly to your fork."
      />
      <ChallengeSteps current="challenge/complete" />

      <Section title="Step-by-step instructions">
        <ol>
          <li>
            <strong>Fork the repository:</strong> Click the <strong>Fork</strong> button at the top right of the original repository.
          </li>
          <li>
            <strong>Clone your fork:</strong> Open your terminal and run:
            <pre><code>git clone YOUR_FORK_URL{'\n'}cd git-it-done</code></pre>
          </li>
          <li>
            <strong>Open README.md:</strong> Open <code>README.md</code> in VS Code (or your editor).
          </li>
          <li>
            <strong>Find your assigned number:</strong> Scroll to the <em>MUKTI Community Message</em> section and find your line (e.g. <code>12. 12</code>).
          </li>
          <li>
            <strong>Replace your number:</strong> Change only your number to your assigned word (e.g. <code>12. freedom</code>). Leave all other lines untouched!
          </li>
          <li>
            <strong>Save and commit:</strong> Run these exact commands:
            <pre><code>git add README.md{'\n'}git commit -m "Add MUKTI contribution #&lt;YOUR_ID&gt;"</code></pre>
          </li>
          <li>
            <strong>Push to your fork:</strong>
            <pre><code>git push origin main</code></pre>
          </li>
        </ol>
      </Section>

      <Callout tone="tip" title="Zero-Conflict Workflow: No git pull needed!">
        You are working directly on the <code>main</code> branch of your own fork. Because each participant modifies their own isolated line in <code>README.md</code>, you do <strong>not</strong> need to do <code>git pull</code> or resolve complex merge conflicts. Just commit, push, and open your Pull Request!
      </Callout>

      <NextUp />
    </div>
  )
}
