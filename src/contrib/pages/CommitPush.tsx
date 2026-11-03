import { Callout, CodeBlock, Crumb, Expect, Mistakes, NextUp, PageHeader, Section, Shot } from '../ui'

export function CommitPush() {
  return (
    <div className="doc-content">
      <Crumb />
      <PageHeader
        eyebrow="Your first contribution &middot; Step 3"
        title="Make Changes, Commit & Push"
        lead="Three parts: edit the file, save a snapshot of your work, then upload that snapshot to your fork on GitHub."
      />

      <Callout tone="warn" title="Beginner workshop simplification">
        For this challenge, you will work directly on the <code>main</code> branch of <strong>your own fork</strong>. In normal
        projects, contributors usually create a separate feature branch first &mdash; we're skipping that here on purpose,
        since branching was already covered in the previous part of this workshop.
        <br />
        <strong>Working on `main` of your fork is not the same as pushing directly to the original MUKTI repository.</strong>{' '}
        Your fork is still a separate, personal copy.
      </Callout>

      <Section title="A. Make changes">
        <ol>
          <li>Open the cloned project in VS Code (see the previous step if you haven't already).</li>
          <li>Find the file named in your assigned task.</li>
          <li>Read the task instructions carefully before editing anything.</li>
          <li>Make exactly the change that's asked for.</li>
          <li>Save the file (<code>Ctrl/Cmd+S</code>).</li>
          <li>Re-read the file to check it looks the way you expect.</li>
        </ol>
        <Shot src="edit-diff.png" alt="VS Code showing an edited file with the change highlighted in the gutter" />
      </Section>

      <Section title="B. Stage and commit">
        <p>
          <strong>Staging</strong> is choosing exactly which changes go into your next snapshot. <code>git add</code> moves a
          file's current changes onto that "ready to save" shelf. <code>git commit</code> then saves everything on the shelf
          as one labelled snapshot in your project's history, with a message describing what and why.
        </p>
        <CodeBlock
          title="Terminal"
          commands={[
            'git add .',
            'git commit -m "Complete assigned contribution"',
          ]}
        />
        <Shot src="commit-terminal.png" alt="A terminal showing git add followed by a successful git commit" />
        <Callout tone="tip" title="In real projects">
          <code>git add .</code> stages every changed file in the folder. That's fine for this small challenge, but on a
          real project it's often safer to stage only the files you meant to change, e.g. <code>git add path/to/file.txt</code>,
          so you don't accidentally commit something unrelated.
        </Callout>
      </Section>

      <Section title="C. Push">
        <p>
          <strong>Pushing</strong> uploads your local commits to a remote repository. <code>origin</code> is the nickname Git
          gave your fork when you cloned it. <code>main</code> is the branch you're uploading.
        </p>
        <CodeBlock title="Terminal" commands={['git push origin main']} />
        <p>To confirm your changes reached GitHub, refresh your fork's page in the browser and open the changed file.</p>
        <Shot src="push-terminal.png" alt="A terminal showing a successful git push to origin main" />
        <Shot src="fork-after-push.png" alt="The fork on GitHub showing the newly pushed commit" />
      </Section>

      <Expect>
        Your fork on GitHub (not the original repository) shows your new commit, and the file you edited shows your change
        when viewed on GitHub.
      </Expect>

      <Mistakes
        items={[
          { title: '"nothing to commit"', fix: 'The file wasn\'t saved, or you forgot `git add`. Run `git status` to see what Git currently sees.' },
          { title: '`git push` is rejected', fix: 'Usually means someone (or an earlier action) added commits to your fork that you don\'t have locally. Run `git pull origin main` first, then push again.' },
          { title: '"Authentication failed" on push', fix: 'GitHub no longer accepts passwords over HTTPS. Sign in through the browser prompt, or use a personal access token.' },
          { title: 'Pushed, but the change isn\'t on GitHub', fix: 'Check you pushed to `origin` (your fork), not somewhere else, and that you\'re looking at your fork\'s page, not the original repository.' },
        ]}
      />

      <NextUp />
    </div>
  )
}
