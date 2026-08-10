# FC26 Tournament Arena — Design & Build Brief for Claude

## Objective

Design and implement a **premium, mobile-first FC26 local tournament web app** for a private 5-team tournament.

This is not a generic admin dashboard. It should feel like a **live esports tournament control room / match-night arena** with strong gaming personality, energy, animation, progression, and clear operator flow.

The application will mainly be used on:

- **iPhone 17 Pro Max**
- **11-inch iPad**
- Desktop only as a secondary target

The page will later be hosted on normal shared/domain hosting, so the final deliverable should be a **single self-contained HTML file** with CSS and JavaScript where practical.

---

# Tournament Information

## Event

- Tournament: **FC26**
- Date: **15 August**
- Venue: **King's House**
- Platform: **PS5**
- Winning Prize: **Rs. 5,000**
- Biryani will also be available
- Entry fee/payment information is not required in the control-room UI unless you find a tasteful secondary place for it

---

# Teams

There are 5 teams and 2 players per team.

### Team Eclipse
- Emad
- Haris
- Visual identity: Gold / black
- Crest concept: Crown + EH shield

### Team Royals
- Roshan
- Ibtesam
- Visual identity: Electric blue
- Crest concept: Crowned lion

### Team Raptors
- Rafay
- Abdullah
- Visual identity: Purple / silver
- Crest concept: Raptor / R3 identity

### Team Warriors
- Sami
- Danish
- Visual identity: Red / black
- Crest concept: Spartan / warrior helmet

### Team Falcons
- Ali
- Abdur Rehman
- Visual identity: Neon green / black
- Crest concept: Falcon / eagle

Use **actual team crest images**, not text initials, wherever a team is visually represented.

---

# Tournament Format

The tournament begins with a league phase.

## League

- 5 teams
- Every team plays every other team once
- Therefore:
  - 4 league matches per team
  - 10 total league matches
- Every team is guaranteed at least 3 games, and in this format gets 4

## Points

- Win = 3 points
- Draw = 1 point
- Loss = 0 points

## Ranking priority

1. Points
2. Goal Difference
3. Goals Scored
4. Head-to-head if practical
5. Additional playoff/penalty resolution only if still required

## Qualification

Top 4 teams qualify for the semi-finals.

### Semi-Final 1
League Rank #1 vs League Rank #4

### Semi-Final 2
League Rank #2 vs League Rank #3

### Final
Winner of Semi-Final 1 vs Winner of Semi-Final 2

Total tournament matches:

- 10 League
- 2 Semi-Finals
- 1 Final
- **13 total matches**

No quarter-finals.

---

# Critical App Flow

## 1. Opening Toss

This is one of the most important interactions in the whole experience.

It should feel dramatic, energetic and fun.

### Requirements

- Toss can run **only once**
- It randomly chooses the first 2 teams that will play
- The two team candidates must be shown visually using their **real logos**
- During the animation, teams visibly change in both slots
- Animation pacing should feel like:

**fast → slow → fast → slow → final lock**

This should generate suspense.

The user should visually feel that different teams are almost being paired and then replaced.

### Final result

When the animation stops:

- 2 teams are permanently selected for Match 1
- A strong locked matchup state is shown
- Match 1 immediately becomes the **Current Match**
- Remaining league fixtures are generated automatically

Do not show duplicate "VS" labels.

One strong visual VS treatment is enough.

### Main CTA

The **START SHOWDOWN** button should be a centerpiece.

It should be visually exceptional:

- neon lime / energy effect
- animated light sweep
- sparks / glow
- premium gaming typography
- strong tap feedback
- meaningful state transitions:
  - Random Draw
  - Showdown Running
  - Match Locked

Do not place explanatory paragraphs such as:

> Tap the button to start the showdown.

or:

> Teams will cycle fast → slow → fast → slow...

The UI itself should communicate this.

---

# 2. Automatic Fixture Generation

After the opening toss, the app automatically creates the rest of the league schedule.

Important:

- The opening selected pair must be Match 1
- Try to avoid making the same team play immediately back-to-back where possible
- All league fixtures should be visible in the tournament queue
- Before the toss, queue rows may appear as tasteful placeholders
- After the toss they should reveal/animate into real fixtures

---

# 3. Current Match — Core Operator Experience

The current match is the most important operational section.

It must clearly display:

- Competition stage
- Match number
- Both actual team logos
- Both team names
- Large score
- LIVE badge when active

Example:

**League · Match 6**

Team Eclipse 2 — 1 Team Raptors

---

# 4. Record Goal

This must be extremely obvious.

Do not hide scoring behind tiny controls.

Inside the Current Match section create a dedicated:

## RECORD GOAL

area.

For each participating team show:

- Team logo
- Team name
- Both players

Each player gets a dedicated large touch-friendly goal button.

Example:

### Team Eclipse

`+  Emad      GOAL`

`+  Haris     GOAL`

### Team Raptors

`+  Rafay     GOAL`

`+  Abdullah  GOAL`

When a player button is tapped:

- Team score increments
- Individual player goal count increments
- Goal is added to match event log
- Goal animation / toast should appear
- State immediately saves to localStorage

Include:

- **Undo Last Goal**

This must correctly reverse:
- team score
- individual player goal stat
- match event

---

# 5. End Game

A clear primary action must exist:

## END GAME → NEXT MATCH

When pressed:

- Current match result is locked
- Win / Draw / Loss is automatically determined
- Points and league stats update
- Match becomes completed
- Next fixture automatically becomes Current Match
- Screen should smoothly transition / scroll to the new current match if appropriate

For knockout matches:

- Draw cannot be accepted
- Require a winner before completion
- A simple penalty resolution method is acceptable

---

# 6. Next Match Card

This is mandatory.

Immediately below the Current Match, always show:

## NEXT MATCH

with:

- next competition stage
- next match number
- both actual team logos
- both team names

The user should never need to search the fixture list to understand who plays next.

At the final match, the card can instead state that this is the final game.

---

# 7. League Table

Show a live league table containing:

- Position
- Team crest
- Team
- Played
- Wins
- Draws
- Losses
- GF
- GA
- GD
- Points

Top 4 teams should have a subtle qualification treatment.

Avoid cheap bright-table styling.

Keep it premium and readable.

---

# 8. Team Cards

Create a polished **card-based team section**.

Important:

- 5 cards
- Actual logos
- Logos should be large and center aligned
- Team title
- Player names
- Team-specific accent glow
- Premium dark esports card styling

On iPhone:

- Prefer compact 2-column card layout where practical
- Fifth card may span the row if that improves composition

Do **not** display helper text like:

> Tap for league details

The card itself should still be tappable without explaining it.

---

# 9. Team Details Modal

Tapping any team card opens a premium bottom-sheet/modal.

The modal must show the team's complete league information.

## Header

- Large real team logo
- Team name
- Both players
- Current league position

## Summary stats

- Played
- Wins
- Draws
- Losses
- GF
- GA
- GD
- Points

## Player goals

Show both players and their total goals.

## Match-by-match league history

Every league match for the selected team should show:

- Match number
- Team logo
- Team name
- Opponent logo
- Opponent name
- Score
- Result:
  - W
  - D
  - L
- LIVE if currently playing
- Upcoming if not yet played

The modal must feel excellent on iPhone and behave like a native mobile bottom sheet.

---

# 10. Top Scorers

Show a live individual goals leaderboard.

Track all 10 players.

Example fields:

- Rank
- Player
- Goals

Optional:
- team crest / team name if it does not clutter the interface

---

# 11. Knockout Generation

Once all 10 league matches are complete:

Automatically create:

### SF1
Rank #1 vs Rank #4

### SF2
Rank #2 vs Rank #3

After both semi-finals:

Automatically create:

### Final
Winner SF1 vs Winner SF2

Once final ends:

Show champion celebration.

---

# 12. Champion State

When the final ends:

- Champion team shown prominently
- Actual crest
- Players
- Trophy
- Confetti / celebration animation
- Winning prize mention can appear tastefully

Avoid cheesy full-screen obstruction.

Make it premium.

---

# 13. Hero / Landing Section

The top area should look like an esports event landing screen, not an admin dashboard.

Display:

- FC26
- TOURNAMENT
- 15 August
- King's House
- PS5

Important event stats:

- 5 Teams
- 10 Players
- 13 Matches
- Rs. 5,000
- Biryani

Use compact premium stat tiles.

Avoid giant walls of text.

A short supporting sentence is enough.

---

# 14. Road to Glory

Create a polished progression visual.

Something like:

**01 League → 02 Semi-Finals → 03 Final**

With subtext:

- League — Top 4 qualify
- Semi-Finals — 4 teams
- Final — 2 teams

A trophy should visually anchor this component.

Ensure mobile alignment is perfect.

No text collision.

---

# 15. Header

Keep the header clean.

Show:

- compact FC26 brand mark
- "FC26 Tournament Arena"

Do not place large Backup / Restore / Print / Reset buttons in the header.

Use one compact **ellipsis (…) menu**.

Inside a menu/bottom sheet put:

- Backup
- Restore
- Print
- Reset

Print and Reset can use icons.

The header should not dominate the screen.

---

# 16. Persistence

No backend/database is required.

Use browser:

## localStorage

Everything must survive refresh:

- toss result
- generated fixtures
- current match
- match scores
- individual scorers
- completed matches
- standings
- semi-final generation
- final generation
- champion

Use a safe storage wrapper so the app does not crash if localStorage is unavailable in a restricted file preview.

---

# 17. Backup and Restore

Allow the user to export the tournament state as JSON.

Allow importing/restoring a JSON backup.

This protects the tournament if browser storage is accidentally lost.

---

# 18. Print Summary

At any point the user can print tournament summary.

Print layout should include:

- Event
- Teams
- League table
- Completed match results
- Player scorers
- Semi-finals
- Final
- Champion if completed

Interactive controls should be hidden in print mode.

Do not display footer text such as:

> FC26 Tournament Arena · Local browser save + printable summary

That line must not exist.

---

# Responsive Design Requirements

## iPhone 17 Pro Max

This is the highest priority.

Requirements:

- No horizontal overflow
- No card collisions
- No text clipping
- Large touch targets
- Native-feeling bottom sheets
- Current match fits naturally within mobile width
- Tables may scroll horizontally only if absolutely necessary
- Team logos stay crisp and large
- Opening toss cards never collide with the VS area
- Buttons should not feel desktop-sized
- Respect safe areas

## 11-inch iPad

Support:

- Portrait
- Landscape

Landscape should intelligently use two-column layouts where appropriate.

For example:

- Opening Toss + Live Match may sit side by side
- League Table + Top Scorers may sit side by side
- Teams can display more columns

Do not simply stretch the phone design.

---

# Visual Language

## Direction

High-end esports + FC gaming presentation.

Think:

- black / near-black canvas
- neon lime primary accent
- electric team-specific colors
- subtle gold for trophies
- stadium / arena energy
- glow
- smoke
- particles
- restrained gradients
- strong hierarchy

Avoid:

- generic Bootstrap dashboard
- boring admin UI
- oversized borders everywhere
- childish gradients
- cheap gaming clichés
- random icon spam

---

# Typography

Use strong gaming/display typography for:

- FC26
- headings
- match labels
- major CTA
- standings position / key values

Use a highly readable condensed/sans font for:

- body copy
- player names
- stats

Recommended direction:

- Orbitron
- Rajdhani

or a visually better pairing if you can improve on them.

Typography must remain readable on iPhone.

---

# Motion / Interaction

Animations should create tournament energy without slowing down operation.

Use:

- opening-toss roulette motion
- glow/pulse
- subtle button sweep
- goal flash
- toast notification
- fixture reveal
- card press response
- modal slide-up
- champion confetti

Avoid excessive constant motion.

The page still needs to function as an operator tool during live games.

---

# Important UX Principles

1. **Current Match is the operational priority**
2. **Record Goal must never be hard to find**
3. **Next Match must always be obvious**
4. **Actual team logos everywhere**
5. **No duplicate VS labels**
6. **No collision at iPhone width**
7. **No instructional clutter when UI can explain itself**
8. **One tap should perform common actions**
9. **End Game should naturally advance the tournament**
10. **Design should feel exciting enough for players watching the screen**

---

# Technical Requirements

Use:

- HTML5
- CSS
- Vanilla JavaScript unless a framework clearly improves a single-file deployment
- localStorage
- JSON export/import
- responsive CSS
- CSS animations / JS orchestration

Avoid unnecessary dependencies.

The final file should be deployable as:

`index.html`

on normal hosting.

---

# Data Model Expectations

Maintain structured objects for:

## Team
- id
- name
- players
- crest/logo
- accent color

## Fixture
- id
- stage
- match number
- team A
- team B
- goals A
- goals B
- completed
- goal events

## Goal event
- player
- timestamp
- team

## Tournament state
- toss completed
- opening pair
- fixtures
- current fixture index
- individual player goals
- champion
- persisted timestamp

---

# Initial Production State

Do NOT ship with dummy or mocked tournament results.

Initial load should show:

- all 5 teams
- zero stats
- no completed fixtures
- no scorer goals
- opening toss ready
- placeholders for future schedule if visually useful
- current match waiting for toss

Dummy data may only be used during your own design testing and must be removed before final delivery.

---

# Deliverable

Produce a polished, production-ready single HTML page.

Before presenting it:

1. Test mobile layout at iPhone 17 Pro Max width.
2. Test iPad 11-inch portrait.
3. Test iPad landscape.
4. Test toss.
5. Test all 10 league games.
6. Test goal scoring and undo.
7. Verify player scorer totals.
8. Verify standings.
9. Verify automatic SF1/SF2 generation.
10. Verify final generation.
11. Verify champion state.
12. Refresh and confirm localStorage restoration.
13. Export JSON, reset, import JSON and confirm restoration.
14. Verify Print view.
15. Confirm no dummy data remains.
16. Confirm no duplicate VS labels.
17. Confirm Next Match always follows Current Match.

## Final design standard

Do not merely make this "functional."

Make it feel like a **real FC26 tournament night product** that players would be excited to see running on an iPhone or iPad beside the PS5.
