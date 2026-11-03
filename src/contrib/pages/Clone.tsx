import { Callout, CodeBlock, Crumb, Expect, Mistakes, NextUp, PageHeader, Section, Shot } from '../ui'

export function Clone() {
  return (
    <div className="doc-content">
      <Crumb />
      <PageHeader
        eyebrow="Your first contribution &middot; Step 2"
        title="Clone Your Fork"
        lead="Forking made a copy on GitHub. Cloning brings that copy down onto your own computer, so you can actually edit files."
      />

      <Section title="What does cloning mean?">
        <p>
          <strong>Cloning</strong> downloads a full copy of a repository (all its history, not just the latest files) onto
          your computer. This downloaded copy is your <strong>local repository</strong>. Git keeps track of which remote
          repository it came from, under the nickname <code>origin</code>.
        </p>
        <Callout tone="note" title="Clone your fork, not the original">
          Always copy the clone URL from <strong>your fork</strong>, not the original repository. If you clone the original,
          you will have no way to push your changes anywhere &mdash; you don't have write access to it.
        </Callout>
      </Section>

      <Section title="Steps">
        <ol>
          <li>Open your fork on GitHub (not the original repository).</li>
          <li>Click the green <strong>Code</strong> button.</li>
          <li>Copy the HTTPS URL shown.</li>
          <li>Open a terminal.</li>
          <li>Run the commands below, using your copied URL.</li>
          <li>Open the folder in VS Code.</li>
        </ol>
        <Shot src="code-button-https.png" alt="The green Code button open, showing the HTTPS clone URL with a copy icon" />
      </Section>

      <Section title="Commands">
        <CodeBlock
          title="Terminal"
          commands={[
            'git clone <your-fork-url>',
            'cd <repository-name>',
            'code .',
          ]}
        />
        <Shot src="clone-terminal.png" alt="A terminal showing the output of a successful git clone command" />
      </Section>

      <Section title="If `code .` doesn't work">
        <p>
          <code>code .</code> opens the current folder in VS Code, but it needs VS Code's command-line launcher to be
          installed and on your PATH. If you see "command not found":
        </p>
        <ul>
          <li>Open VS Code normally, then use <strong>File &gt; Open Folder&hellip;</strong> and pick the cloned folder.</li>
          <li>
            Or, in VS Code, open the Command Palette (<code>Ctrl/Cmd+Shift+P</code>), run "Shell Command: Install 'code'
            command in PATH", then try <code>code .</code> again in a fresh terminal.
          </li>
        </ul>
        <Shot src="vscode-opened.png" alt="VS Code open with the cloned repository's file explorer visible" />
      </Section>

      <Expect>
        A new folder exists on your computer with the project's files in it, and VS Code shows that folder in its file
        explorer. Running <code>git remote -v</code> inside it should list <code>origin</code> pointing at your fork's URL.
      </Expect>

      <Mistakes
        items={[
          { title: 'Cloning the original repository by mistake', fix: 'Delete the folder and re-clone using the URL from your fork\'s Code button, not the original project\'s.' },
          { title: '"repository not found"', fix: 'Double-check you copied the exact URL, and that you are signed in if the repository is private.' },
          { title: '`cd` into the wrong folder name', fix: 'The folder name matches the repository name exactly. Run `ls` (or `dir` on Windows) to see what was created.' },
        ]}
      />

      <NextUp />
    </div>
  )
}
