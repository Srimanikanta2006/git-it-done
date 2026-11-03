import type { Card, OS } from './engine/types'

/** The card as it should be shown on the chosen operating system. Cards without `os` come back unchanged. */
export function resolveCard(card: Card, os: OS): Card {
  const part = card.os?.[os]
  if (!part) return card
  return {
    ...card,
    sentence: part.sentence ?? card.sentence,
    bullets: part.bullets ?? card.bullets,
    tryIt: part.tryIt ?? card.tryIt,
    note: part.note ?? card.note,
    steps: part.steps ?? card.steps,
    drawer: { ...card.drawer, ...part.drawer },
  }
}
