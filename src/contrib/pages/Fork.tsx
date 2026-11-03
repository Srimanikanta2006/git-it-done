import { Crumb, Expect, Mistakes, NextUp, PageHeader, Section, Shot } from '../ui'

export function Fork() {
  return (
    <div className="doc-content">
      <Crumb />
      <PageHeader
        eyebrow="Your first contribution &middot; Step 1"
        title="Fork the Repository"
        lead="A fork is your own personal, GitHub-side copy of a repository. You fork before you change anything, because you don't have write access to the original."
      />

      <Section title="What is forking, and why do we do it?">
        <p>
          The <strong>original repository</strong> belongs to the project (MUKTI, in this case). You almost certainly don't
          have permission to push changes to it directly. <strong>Forking</strong> creates a full copy of that repository
          under your own GitHub account, which you own completely and can change freely.
        </p>
        <p>
          Changes you make to your fork never touch the original repository automatically &mdash; the two are separate copies
          that happen to share history up to the moment you forked. The only way your changes reach the original is through
          a pull request, which you'll do in step 4.
        </p>
      </Section>

      <Section title="Steps">
        <ol>
          <li>Open the original repository on GitHub (the MUKTI challenge repository).</li>
          <li>Make sure you're signed in to GitHub.</li>
          <li>Click the <strong>Fork</strong> button in the top-right corner of the repository page.</li>
          <li>Select your own GitHub account as the destination.</li>
          <li>Click <strong>Create fork</strong>.</li>
          <li>GitHub takes you to the newly created repository &mdash; now under <code>github.com/&lt;your-username&gt;/...</code>.</li>
        </ol>
      </Section>

      <Section title="See it on GitHub">
        <Shot src="fork-button.png" alt="The Fork button in the top-right corner of a GitHub repository page" />
        <Shot src="fork-create.png" alt="The 'Create a new fork' screen, with the owner set to the signed-in account" />
        <Shot src="fork-result.png" alt="The resulting fork, showing '<your-username>/<repo>' and 'forked from <original>/<repo>'" />
      </Section>

      <Expect>
        You are looking at a repository under <strong>your own</strong> GitHub username, with a small "forked from" label
        pointing back at the original. That label is the only visible link between the two from now on.
      </Expect>

      <Mistakes
        items={[
          { title: 'Forking while signed out', fix: 'GitHub will ask you to sign in first. Sign in, then fork again.' },
          { title: 'Confusing the fork with the original', fix: 'Always check the URL and the "forked from" label. The fork lives under your username, not the project\'s.' },
          { title: 'Forking more than once by accident', fix: 'GitHub will just take you to your existing fork instead of creating a duplicate. That\'s fine.' },
        ]}
      />

      <NextUp />
    </div>
  )
}
