import { ChallengeSteps, Crumb, NextUp, PageHeader, Section } from '../../ui'
import { guideHref } from '../../router'

const TILES = [
  ['1', 'Fork the repository', 'fork'],
  ['2', 'Clone your fork', 'clone'],
  ['3', 'Edit, commit & push', 'commit-push'],
] as const

export function ChallengeComplete() {
  return (
    <div className="doc-content">
      <Crumb />
      <PageHeader eyebrow="MUKTI challenge" title="Complete Your Task" lead="This is the same beginner workflow you just saw demonstrated: fork, clone, edit, stage, commit, push." />
      <ChallengeSteps current="challenge/complete" />

      <Section title="Follow the exact beginner workflow">
        <p>Each of these has its own full page with screenshots and commands &mdash; open them in order:</p>
        <ol className="doc-tiles">
          {TILES.map(([n, title, slug]) => (
            <li key={slug}>
              <a href={guideHref(slug)}>
                <span className="tn">{n}</span>
                <span className="tt">{title}</span>
              </a>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Reminder">
        <p>
          You are working directly on the <code>main</code> branch of <strong>your own fork</strong>. That's a deliberate
          simplification for this challenge &mdash; no extra branch commands are needed.
        </p>
      </Section>

      <NextUp />
    </div>
  )
}
