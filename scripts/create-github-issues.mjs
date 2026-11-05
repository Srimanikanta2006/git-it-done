/**
 * Automatically creates all 100 MUKTI challenge issues on GitHub using the GitHub CLI (`gh`).
 * Usage: node scripts/create-github-issues.mjs [--dry-run]
 */
import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const dryRun = process.argv.includes('--dry-run');
const issues = JSON.parse(readFileSync('scripts/challenge-issues.json', 'utf8'));

console.log(`Preparing to create ${issues.length} issues on GitHub...`);

for (const issue of issues) {
  if (dryRun) {
    console.log(`[DRY RUN] Would create: "${issue.title}" with word: "${issue.word}"`);
    continue;
  }

  try {
    console.log(`Creating #${issue.id}: ${issue.title} (Word: ${issue.word})...`);
    execSync(`gh issue create --title "${issue.title}" --body "${issue.body.replace(/"/g, '\\"')}" --label "good first issue,mukti-challenge"`, {
      stdio: 'inherit'
    });
  } catch (err) {
    console.error(`Failed to create issue #${issue.id}:`, err.message);
  }
}

console.log('Done!');
