<div align="center">

# 🚀 Git It Done

**An interactive, full-screen presentation for teaching Git & GitHub — built for workshops, optimized for learning.**

[![Deploy to GitHub Pages](https://github.com/themdmohsin/git-it-done/actions/workflows/deploy.yml/badge.svg)](https://github.com/themdmohsin/git-it-done/actions/workflows/deploy.yml)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-Private-red)

<br/>

*Animated terminal simulations · Live Git graph visualizations · OS-aware commands · Contribution guide built in*

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Scripts](#-scripts)
- [Keyboard Controls](#-keyboard-controls)
- [Project Structure](#-project-structure)
- [Architecture](#-architecture)
- [Presentation Storyline](#-presentation-storyline)
- [Open Source Contribution Guide](#-open-source-contribution-guide)
- [Customization](#-customization)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

---

## 🎯 Overview

**Git It Done** is an interactive teaching presentation designed for a **Git & GitHub workshop**. It replaces boring slide decks with animated, full-screen teaching cards that include live terminal simulations, commit graph visualizations, and a complete contribution guide.

The presentation is structured as a **four-stage event**:

| Stage | Presenter | Content |
|-------|-----------|---------|
| 1. Theory | Mohsin | Git concepts — from the messy-folder problem through `git push` |
| 2. Workshop | Mohsin | Hands-on setup — install Git, configure identity, first commands |
| 3. Theory | Vijay | Branching, merging, and open source contribution |
| 4. Workshop | Vijay | MUKTI Challenge — fork a repo, make changes, open a PR |

Designed for **1920×1080 TV displays**. Fonts are bundled so it works **fully offline**.

---

## ✨ Features

### 🎴 Interactive Presentation Cards
- **34+ cards** with smooth keyboard/click navigation
- **Stack-based transitions** — slide, drop, zoom, peel, split, converge, and launch animations powered by Framer Motion
- **Deep linking** — every card has its own URL (`#/messy`, `#/push`, etc.); loading any URL rebuilds the correct state
- **Rail navigation** — bottom progress bar; click any node to jump directly

### 💻 Animated Terminal
- Realistic **typing effect** for Git commands
- OS-aware output (Windows/Git Bash, macOS, Linux)
- Auto-detects user's OS; manual override available

### 📊 Git State Engine
- Pure **reducer-based architecture** replaying `init`, `commit`, `branch`, `merge`, `push` operations
- Live **SVG commit graph** visualization showing branches, commits, and HEAD
- Full **back navigation and replay** — state is always consistent

### 👤 Personalized Experience
- Collects user's name, email, and GitHub username
- **Auto-fills** into displayed Git commands via `{{token}}` templates
- Stored in `localStorage` — persists across sessions

### 📖 Built-in Contribution Guide
- Separate **scrollable documentation site** at `#/learn`
- **17 pages** covering Issues, PRs, Fork → Clone → Commit → Push → PR workflow
- **MUKTI Challenge** section with step-by-step tasks
- Own sidebar navigation, responsive CSS, hash-based routing

### 📋 Details Drawer
- Every card has a slide-out drawer with:
  - **Copy-paste commands** (one-click clipboard)
  - **Common mistakes & fixes**
  - **"What's happening"** explanations
  - **Speaker talking points**

---

## 🛠 Tech Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Language** | TypeScript 5.5 (strict) | Type-safe development |
| **UI Framework** | React 18 | Component-based UI |
| **Build Tool** | Vite 5 | Dev server with HMR + production bundling |
| **Animation** | Framer Motion 11 | Card transitions, layout animations |
| **Heading Font** | Space Grotesk | Clean, modern headings (bundled via `@fontsource`) |
| **Code Font** | JetBrains Mono | Terminal and code blocks (bundled via `@fontsource`) |
| **E2E Testing** | Puppeteer Core | Headless Chrome testing |
| **Deployment** | GitHub Pages | Static site hosting via GitHub Actions |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 20
- **npm** (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/themdmohsin/git-it-done.git
cd git-it-done

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/git-it-done/`.

### Screenshot Asset

Drop your messy-folder screenshot at `public/messy-folder.png`. Until the file exists, a drawn stand-in file explorer illustration is shown; the image replaces it automatically once added.

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with Hot Module Replacement |
| `npm run build` | TypeScript type-check (`tsc -b`) + Vite production build → `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Run E2E tests with headless Chrome against the production build |

---

## ⌨ Keyboard Controls

| Key | Action |
|-----|--------|
| <kbd>→</kbd> / <kbd>Space</kbd> | Advance one step — types the command, reveals the next part, or moves to the next card. Pressing during an animation only finishes that animation. |
| <kbd>←</kbd> | Go back one step. Motion plays in reverse and rebuilds the stack. |
| <kbd>D</kbd> | Toggle the details drawer |
| <kbd>O</kbd> | Open the OS picker (<kbd>Esc</kbd> closes) |
| <kbd>R</kbd> | Replay the current card (for stack cards, replays the motion into the card) |

> **Nothing ever auto-advances.** Click a rail node to jump to any card. Every card has its own URL.

---

## 📁 Project Structure

```
git-it-done/
├── index.html                         # SPA entry point
├── package.json                       # Dependencies & scripts
├── tsconfig.json                      # TypeScript config (strict, ES2020, react-jsx)
├── vite.config.ts                     # Vite config (base: /git-it-done/, React plugin)
├── .github/workflows/deploy.yml       # CI/CD: GitHub Actions → GitHub Pages
│
├── public/                            # Static assets (copied as-is to dist/)
│   ├── messy-folder.png               # Screenshot for the opening card
│   └── img/
│       ├── linus-torvalds.jpg         # Photo for Linus Torvalds card
│       ├── linux-repo.png             # Screenshot of Linux repo on GitHub
│       └── contrib/                   # Screenshots for the contribution guide
│
├── scripts/
│   ├── check.mjs                      # E2E test suite (~350 lines, Puppeteer)
│   ├── details.test.mjs               # Unit tests for userDetails.ts
│   └── shots/                         # Screenshots captured during E2E tests
│
└── src/
    ├── main.tsx                       # React entry (renders Root)
    ├── Root.tsx                        # Top-level router: deck vs. guide
    ├── App.tsx                         # Presentation deck: keyboard nav, state, transitions
    ├── cards.ts                        # All Mohsin's card content/data
    ├── os.ts                           # OS detection, terminal prompts, install instructions
    ├── userDetails.ts                  # User details store (name, email, GitHub username)
    ├── theme.css                       # CSS variables: colors, fonts, scale unit
    ├── styles.css                      # All layout styles
    │
    ├── engine/                        # Pure logic layer (no React)
    │   ├── types.ts                   #   TypeScript types (Card, Step, RepoState, GraphOp…)
    │   ├── reducer.ts                 #   Git state reducer (init → commit → push)
    │   ├── stack.ts                   #   Stack animation planner (frame transitions)
    │   └── replay.ts                  #   Re-exports from reducer
    │
    ├── components/                    # React UI components
    │   ├── Card.tsx                   #   Main card renderer (switches on card.view)
    │   ├── Art.tsx                    #   SVG illustrations for story cards
    │   ├── Terminal.tsx               #   Animated terminal with typing effect
    │   ├── Graph.tsx                  #   Git commit graph (SVG)
    │   ├── Rail.tsx                   #   Bottom navigation rail (card progress)
    │   ├── Drawer.tsx                 #   Slide-out details drawer
    │   ├── Panels.tsx                 #   File strip & areas diagram
    │   ├── Copy.tsx                   #   Copy-to-clipboard command chips
    │   ├── OSPicker.tsx               #   OS selection overlay
    │   ├── DetailsModal.tsx           #   User details input modal
    │   └── Transitions.tsx            #   Card-to-card transition animations
    │
    ├── vijay/                         # Vijay's branching & merging section
    │   ├── cards.ts                   #   Card data for branching + open source cards (5 branching cards)
    │   ├── scenes.ts                  #   Scripted graph scenes, shared by all 5 branching cards
    │   ├── VijayVisual.tsx            #   Visual dispatcher for branching visuals
    │   ├── BranchGraph.tsx            #   The one Git-graph SVG used by all 5 branching cards
    │   └── vijay.css                  #   Vijay section styles
    │
    └── contrib/                       # Scrollable contribution guide (separate app)
        ├── App.tsx                    #   Guide app shell (sidebar + topbar)
        ├── config.ts                  #   MUKTI repo URL, demo issue URL (TODOs)
        ├── router.ts                  #   Hash-based router under #/learn
        ├── sections.ts                #   Section metadata & navigation
        ├── pageRegistry.tsx           #   Slug → component mapping (17 pages)
        ├── Sidebar.tsx                #   Guide sidebar navigation
        ├── TopBar.tsx                 #   Guide top bar
        ├── ui.tsx                     #   Shared UI components
        ├── contrib.css                #   Guide-specific styles
        └── pages/                     #   Individual guide pages
            ├── Home.tsx               #     Overview / landing
            ├── Issues.tsx             #     GitHub Issues explained
            ├── PullRequests.tsx       #     Pull Requests explained
            ├── FirstContribution.tsx   #     First contribution walkthrough
            ├── Fork.tsx               #     Step 1: Fork
            ├── Clone.tsx              #     Step 2: Clone
            ├── CommitPush.tsx         #     Step 3: Edit, Commit, Push
            ├── CreatePr.tsx           #     Step 4: Create a PR
            ├── Workflow.tsx           #     Complete workflow reference
            ├── Resources.tsx          #     Videos & resources
            └── challenge/             #     MUKTI Challenge sub-pages
                ├── Hub.tsx            #       Challenge overview
                ├── Start.tsx          #       Start here
                ├── Task.tsx           #       Find your task
                ├── Complete.tsx        #       Complete the task
                ├── Submit.tsx         #       Submit your PR
                ├── Verify.tsx         #       Verify submission
                └── Troubleshooting.tsx #      Common issues
```

---

## 🏗 Architecture

### High-Level Flow

```
index.html → main.tsx → Root.tsx ─┬─ App.tsx (presentation deck)
                                  └─ ContribApp (contribution guide)
```

`Root.tsx` acts as a router: if the URL hash starts with `#/learn`, it renders the contribution guide; otherwise, it renders the presentation deck.

### Git State Engine

The presentation simulates a real Git repository using a **pure reducer pattern**:

```
User presses → / Space
        ↓
    App.tsx reads the next Step
        ↓
    Step contains a GraphOp (init, commit, branch, merge, push…)
        ↓
    reducer.ts applies the op to RepoState
        ↓
    Graph.tsx renders the updated commit graph as SVG
```

- **`RepoState`** tracks: initialized flag, commits, branches, HEAD, remote status, pushed branches
- **`GraphOp`** is a discriminated union: `init | commit | createBranch | switchBranch | merge | deleteBranch | addRemote | push | none`
- Navigating backward **replays all ops from the start** up to the target step, ensuring state is always consistent
- Deep-linking works the same way — loading `#/push` replays every op from `init` through `push`

### Stack Transition System

Cards can be grouped into **stack scenes** — layered arrangements where cards peek out behind each other:

```
StackScene {
  layers: ["card-a", "card-b", "card-c"]   // back to front
  front: "card-c"                           // the visible card
  zoomed: true                              // pull back to show the stack
  enter: "rise"                             // how the front card arrives
  leave: "fly"                              // how the front card departs
}
```

The pure planner in `engine/stack.ts` computes **transition frames** between any two scenes. Playing frames in reverse gives the exact reverse motion — enabling seamless back navigation.

### Data-Driven Cards

All presentation content lives in `src/cards.ts` and `src/vijay/cards.ts` as plain TypeScript objects. The rendering engine reads the `view` field to decide which component to use:

| View | Component | Description |
|------|-----------|-------------|
| `messy` | Messy folder illustration | Opening hook |
| `hero` | Large centered text | Emphasis cards |
| `story` | Art + text | Narrative cards with SVG illustrations |
| `terminal` | Animated terminal | Git command demonstrations |
| `areas` | Three-area diagram | Working dir → staging → repo |
| `remote` | Remote diagram | Local ↔ GitHub relationship |
| `compare` | Side-by-side | Comparison views |
| `oschoice` | Operating system tiles | First workshop card (`os`) |
| `vijay` | Branching visuals | One shared Git-graph component across all 5 branching cards |
| `fullshot` | Full screenshot | Large image cards |
| `stub` | Placeholder | Cards pending content |
| `challenge` | Challenge view | MUKTI Challenge card |

---

## 🎬 Presentation Storyline

### Section A — Hook
`messy` → `git-answer`
> *"Your files look like this? Git fixes that."*

### Section B — Zoom Out
`open-source`
> The stack pulls back and cards come in front, one after another — revealing the bigger picture of open source.

### Section C — Peel Back (Story)
`mukti` → `personal-software` → `linux` → `linus` → `vc-problem` → `vc-idea` → `git-born` → `recap`
> Each press peels away the front card, telling the story from MUKTI to Linus Torvalds to the birth of Git.

### Section D — Dive into Git
`git-vs-github` → `three-areas` → `init` → `status` → `add` → `commit` → `log` → `github` → `push`
> Hands-on Git commands with animated terminal and live commit graph. The repository state is **one continuing repo** from `init` onwards.

### Section E - Workshop Setup (replaces the old single `setup` card)
Content comes from the volunteer handbook. Each card has its own route:

| Card | Route | Notes |
| --- | --- | --- |
| os | `#/os` | three big operating system tiles on the card, auto-detected; O still opens the popup |
| vscode | `#/vscode` | Step 1 of 6, terminal panel (no commit graph) |
| git-install | `#/git-install` | Step 2 of 6 |
| github-account | `#/github-account` | Step 3 of 6, illustration only |
| gh-install | `#/gh-install` | Step 4 of 6, part 1 |
| gh-login | `#/gh-login` | Step 4 of 6, part 2 (browser sign-in, token backup in the drawer) |
| identity | `#/identity` | Step 5 of 6, four copy chips filled from Your details (U) |
| codespaces | `#/codespaces` | Plan B, illustration only |
| ready | `#/ready` | "Back to git init" button jumps to `#/init` |

`#/setup` still works: it redirects to `#/os` (`ROUTE_ALIASES` in `src/cards.ts`). The text, terminal steps and drawer of vscode, git-install and gh-install change with the chosen system (Windows, macOS, Linux); the choice is saved. These cards never change the repository state (every step uses `op: none`), so going back to `push` or loading `#/init`, `#/push` or `#/ready` directly still rebuilds the right graph. Vijay's branching cards follow `ready`.

Files: `src/workshop.ts` (structure, routes, terminal steps), `src/workshopContent.ts` (handbook wording, per-system text, drawers), `src/osCards.ts` (picks the per-system version of a card).

Checks: `npm run check` includes a workshop fit check (nine cards x three systems x 1920x1080 and 1280x720, card and drawer). `ONLY=fit npm run check` runs just the workshop checks; screenshots go to `scripts/shots/workshop/`.

### Section F — Branching & Open Source (Vijay)
Branching theory → merging → open source contribution → MUKTI Challenge handoff to the contribution guide.

---

## 📚 Open Source Contribution Guide

Accessed at `#/learn`, this is a **separate scrollable documentation site** built within the same app. It has its own:
- Sidebar navigation
- Responsive CSS (`contrib.css`)
- Hash-based routing (`#/learn/fork`, `#/learn/clone`, etc.)

### Pages

| Section | Pages |
|---------|-------|
| **Concepts** | Home, GitHub Issues, Pull Requests |
| **Tutorial** | First Contribution, Fork, Clone, Commit & Push, Create a PR |
| **Reference** | Complete Workflow |
| **MUKTI Challenge** | Hub, Start, Find Task, Complete Task, Submit PR, Verify, Troubleshooting |
| **Extras** | Resources (videos & links) |

> **Note:** `src/contrib/config.ts` contains placeholder values for the MUKTI repo URL, demo issue URL, assignment mechanism, and video URL. These need to be filled in before the challenge goes live.

---

## 🎨 Customization

### Colors

All colors are CSS custom properties in [`src/theme.css`](file:///home/Vijay/Desktop/git-it-done/src/theme.css):

| Variable | Default | Purpose |
|----------|---------|---------|
| `--page` | `#dfe3c0` | Main background (poster color) |
| `--ink` | `#1d2314` | Primary text |
| `--accent` | `#e8553d` | Coral — highlights, buttons, kickers |
| `--panel` | `#141810` | Dark terminal background |
| `--lane-main` | `#c9e265` | Main branch color in graphs |
| `--lane-feature` | `#ff7a59` | Feature branch color |
| `--lane-remote` | `#7fd6e0` | Remote branch color |

### Scale Unit

`--u` is the scale unit (~1vw on a 16:9 screen) that all sizes derive from:
```css
--u: min(1vw, 1.7778vh);
```
On screens narrower than 900px, it doubles to `2vw` for readability.

### Adding a New Card

Add an object to the array in [`src/cards.ts`](file:///home/Vijay/Desktop/git-it-done/src/cards.ts). The `id` becomes the URL hash:

```ts
{
  id: 'stash',
  rail: 'Stash',
  section: 'git',
  kicker: 'COMMAND · STASH',
  title: 'Park your work',
  sentence: 'Stash saves unfinished changes for later.',
  bullets: ['...'],
  tryIt: 'git stash',
  view: 'terminal',
  lane: 'main',
  into: 'drop',
  steps: [
    {
      cmd: 'git stash',
      output: ['Saved working directory'],
      op: { type: 'none' }
    }
  ],
  drawer: {
    commands: ['git stash'],
    mistakes: [{ title: '...', fix: '...' }],
    happening: '...'
  },
}
```

---

## 🧪 Testing

### E2E Tests (`scripts/check.mjs`)

Runs a comprehensive suite using **Puppeteer** (headless Chrome):

| Test | What it checks |
|------|----------------|
| **Full forward pass** | Press <kbd>Space</kbd> through every card and step |
| **Full backward pass** | Press <kbd>←</kbd> all the way back to the start |
| **Direct hash loads** | Load every card URL directly; verify state rebuilds correctly |
| **Boundary transitions** | Test critical transitions (e.g., `github` → `push`) |
| **Responsive layout** | Verify layout at 4 screen sizes |
| **Screenshots** | Capture screenshots to `scripts/shots/` for visual review |

### Unit Tests (`scripts/details.test.mjs`)

Tests the user details system: `fill()`, `missing()`, `validate()`, `saveDetails()`, email/GitHub username validation, and shell escaping.

### Running Tests

```bash
# Build first, then run E2E tests
npm run build
npm run check
```

---

## 🚢 Deployment

### GitHub Pages (Automated)

The project deploys automatically via **GitHub Actions** on every push to `master`:

```
Push to master → npm ci → npm run build → Upload dist/ → Deploy to GitHub Pages
```

Configuration: [`.github/workflows/deploy.yml`](file:///home/Vijay/Desktop/git-it-done/.github/workflows/deploy.yml)

### Manual Deployment

```bash
# Build for production
npm run build

# The dist/ folder contains the complete static site
# Deploy it to any static hosting service
```

The Vite config sets `base: '/git-it-done/'`, so the app expects to be served from that path. Update [`vite.config.ts`](file:///home/Vijay/Desktop/git-it-done/vite.config.ts) if deploying to a different base path.

---

## 🤝 Contributing

### Adding Content

1. **New presentation card** — Add an object to `src/cards.ts` or `src/vijay/cards.ts`
2. **New guide page** — Create a component in `src/contrib/pages/`, register it in `pageRegistry.tsx`, and add metadata to `sections.ts`
3. **New illustration** — Add an SVG to `Art.tsx` and reference it via the `art` field on a story card

### Development Workflow

```bash
npm run dev          # Start dev server with HMR
# Make changes...
npm run build        # Type-check + build
npm run check        # Run E2E tests
```

### Pending TODOs

- [ ] Fill in MUKTI config values in `src/contrib/config.ts` (repo URL, demo issue, video URL)
- [ ] Add contribution guide screenshots to `public/img/contrib/`
- [ ] Fill in contact links on the `mukti` card in `src/cards.ts`
- [ ] Fill in MUKTI challenge links in `src/vijay/cards.ts`

---

<div align="center">

**Built with ❤️ for the Git & GitHub workshop**

*Mohsin · Vijay*

</div>
