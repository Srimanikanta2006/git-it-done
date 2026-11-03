import { Callout, Crumb, Expect, Mistakes, NextUp, PageHeader, Section, Shot } from '../ui'

export function CreatePr() {
  return (
    <div className="doc-content">
      <Crumb />
      <PageHeader
        eyebrow="Your first contribution &middot; Step 4"
        title="Create a Pull Request"
        lead="Your change is on your fork. Now you propose it to the original MUKTI repository."
      />

      <Section title="Steps">
        <ol>
          <li>Open your fork on GitHub.</li>
          <li>Go to the <strong>Pull requests</strong> tab, or use the "Compare & pull request" shortcut GitHub shows after a recent push.</li>
          <li>Click <strong>New pull request</strong>.</li>
          <li>Set the <strong>base repository</strong> to the original MUKTI repository.</li>
          <li>Set the <strong>head repository</strong> to your fork.</li>
          <li>Double-check both branch selections.</li>
          <li>Write a clear, specific title.</li>
          <li>Write a short description of what you changed and why.</li>
          <li>Click <strong>Create pull request</strong>.</li>
        </ol>
      </Section>

      <Section title="The exact configuration for this challenge">
        <ul>
          <li><strong>Base repository:</strong> the original MUKTI repository</li>
          <li><strong>Base branch:</strong> <code>main</code></li>
          <li><strong>Head repository:</strong> your fork</li>
          <li><strong>Compare branch:</strong> <code>main</code></li>
        </ul>
        <p>In other words: <strong>your fork &rarr; the original MUKTI repository</strong>, exactly the opposite direction of the clone you did in step 2.</p>
        <Shot src="pr-new-base-head.png" alt="The 'Open a pull request' screen with base set to the original repository and head set to the fork" />
      </Section>

      <Section title="Writing a good title and description">
        <ul>
          <li><strong>Title:</strong> short and specific, e.g. "Fix typo in README installation steps", not "Update".</li>
          <li><strong>Description:</strong> one or two sentences on what changed and why. Link the issue if there is one.</li>
        </ul>
      </Section>

      <Section title="Before you submit: check Files changed">
        <p>
          Open the <strong>Files changed</strong> tab and read the diff. Make sure only the files you intended to change are
          listed, and the change itself looks correct.
        </p>
        <Shot src="pr-files-changed.png" alt="The Files changed tab of a pull request, showing a small diff" />
      </Section>

      <Section title="What happens after you submit">
        <p>
          A maintainer reviews your pull request. They may approve and merge it, ask you to make changes, or leave
          questions as comments. Submitting and merging are two separate events &mdash; see{' '}
          <a className="inline" href="#/learn/challenge/verify">Verify Your Submission</a>.
        </p>
        <Shot src="pr-submitted.png" alt="A submitted pull request, open and awaiting review" />
      </Section>

      <Callout tone="warn" title="About 'Closes #123'">
        Writing <code>Closes #123</code> in a pull request description tells GitHub to automatically close issue #123 when the
        PR is merged &mdash; but only if issue #123 lives in the <strong>same repository</strong> the pull request targets (the
        base repository). It does not work across unrelated repositories.
      </Callout>

      <Expect>
        A new pull request appears on the original MUKTI repository's Pull requests tab, showing your fork as the source and
        your commit in its list of commits. It is now waiting for a maintainer to review it.
      </Expect>

      <Mistakes
        items={[
          { title: 'Base and head reversed', fix: 'Base should be the original repository, head should be your fork. GitHub shows both names above the diff — read them before submitting.' },
          { title: 'No "New pull request" option visible', fix: 'You are probably looking at the original repository instead of your fork, or you have no commits ahead of the base branch yet.' },
          { title: 'Wrong branch compared', fix: 'Both branches should be `main` for this challenge. Check the two branch dropdowns at the top of the compare screen.' },
          { title: 'Unexpected files in the PR', fix: 'You likely ran `git add .` after editing unrelated files. Remove them with `git restore --staged <file>` before committing next time.' },
        ]}
      />

      <NextUp />
    </div>
  )
}
