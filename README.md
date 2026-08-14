# FC26 Tournament Arena

A single-page, mobile-first web app to run a private FC26 (FIFA) tournament on match night — live esports control room, not an admin dashboard.

**Live file:** `index.html` — open it directly, or serve the repo root on any static host.

Event: FC26 Tournament · King's House · PS5 · prize configurable (default Rs. 5,000).

## Features

- **Opening toss** — one-time dramatic draw (fast → slow → fast → slow → lock) that decides Match 1; teams stay hidden as `? ? ?` until the roulette starts. Skipped automatically for 2-team tournaments.
- **Automatic fixtures** — full round robin, toss pair forced to Match 1, no team plays back-to-back where avoidable. Multi-round schedules via a "minimum matches per team" setting.
- **Live match + Record Goal** — big per-player GOAL buttons with in-match tallies, Undo Last Goal, and per-match FC26 in-game team picks (e.g. FRANCE vs ARGENTINA) recorded and shown everywhere.
- **Automatic progression** — league → semi-finals (Rank 1 v 4, Rank 2 v 3) → final → champion. 3 teams collapse to a direct final. Knockout draws require a penalty shootout score.
- **Live league table** — P W D L GF GA GD PTS, ranked by points → GD → goals → head-to-head; top 4 highlighted, champion marked in gold.
- **Top scorers** — live individual goal leaderboard for every player.
- **Fixtures queue** — all matches always visible (including unplayed knockout slots), winner/loser highlighting, and a ▶ button to promote any upcoming fixture to play next.
- **Final chance %** — every team card carries a live "FINAL CHANCE" reading: the odds of that team reaching the final, from a 3,000-run Monte Carlo simulation of every remaining fixture (form-weighted, live score included), recomputed on every goal.
- **Team sheets** — tap a team for stats, player goals and a match-by-match history.
- **Grand Stage** — trophy podium that becomes the champion coronation, plus an auto-opening celebration modal with confetti.
- **Sound** — all cues synthesized in-browser (no audio files): toss ticks, goal horn, full-time whistle, champion fanfare. Toggle in the header.
- **Team management** — swap players between teams by tap or drag, rename players (goals follow the name), remove/restore teams before the toss.
- **Persistence** — everything survives refresh via `localStorage`, plus JSON backup/restore and a two-tap reset.
- **Print summary** — print by fixtures (whole tournament) or by team (detailed per-team report).

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The app — self-contained, no build step, no backend. |
| `logos/*.png` | The five team crests. |
| `FC26 Tournament Arena.dc.html` | Authored design source. |
| `BRIEF.md` | Original product brief. |
| `design_handoff_fc26_tournament_arena/` | Full developer handoff (spec, tokens, behavior) for rebuilding this in a real codebase. |

## Deploy

Static hosting — no server needed. Upload `index.html` and the `logos/` folder to the web root. For GitHub Pages: Settings → Pages → Deploy from branch → `main` / root.

## Tech

HTML, CSS and vanilla-style JavaScript logic, Web Audio for sound, Canvas for confetti, `localStorage` for state. No dependencies beyond Google Fonts (Orbitron, Rajdhani).
