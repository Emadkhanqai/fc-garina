# FC26 Tournament Arena

A single-page, mobile-first web app to run a private FC26 (FIFA) tournament on match night — live esports control room, not an admin dashboard.

**Live file:** `index.html` — open it directly, or serve the repo root on any static host.

Event: FC26 Tournament · King's House · PS5 · prize configurable (default Rs. 5,000).

## Features

- **Opening toss** — dramatic draw (fast → slow → fast → slow → settle) for Match 1; teams stay hidden as `? ? ?` until the roulette starts. Once it settles you choose RE-ROLL (run it again) or ACCEPT to lock it in — nothing is generated until you accept. Skipped automatically for 2-team tournaments, where the single possible pairing locks immediately.
- **Automatic fixtures** — full round robin, toss pair forced to Match 1, no team plays back-to-back where avoidable. Multi-round schedules via a "minimum matches per team" setting.
- **Live match + Record Goal** — big per-player scoring buttons with the in-match tally on the right, Undo Last Goal, and per-match FC26 in-game team picks (e.g. FRANCE vs ARGENTINA) recorded and shown everywhere. A default list of common national/club teams (Argentina, Barcelona, Real Madrid, PSG, France, Spain, Bayern, Manchester City, England) is suggested from the first match via a custom dropdown (not the native `<datalist>`, which iOS Safari barely supports); picks actually used move to the top and are remembered for later matches too.
- **Automatic progression** — league → semi-finals (Rank 1 v 4, Rank 2 v 3) → final → champion. 3 teams collapse to a direct final. Knockout draws require a penalty shootout score.
- **Live league table** — P W D L GF GA GD PTS, ranked by points → GD → goals → head-to-head; top 4 highlighted, champion marked in gold.
- **Top scorers** — live individual goal leaderboard for every player.
- **Fixtures queue** — all matches always visible (including unplayed knockout slots), winner/loser highlighting, and a ▶ button to promote any upcoming fixture to play next — disabled the moment the current match has a goal on the board, so the queue can't be reshuffled mid-match.
- **Final chance %** — every team card carries a live "FINAL CHANCE" reading: the odds of that team reaching the final. Reads 0% before the opening toss (the tournament hasn't started); the moment Match 1 locks it becomes exact (2÷active teams, identical for everyone since nothing has happened yet) and then a 6,000-run Monte Carlo simulation of every remaining fixture (form-weighted, live score included) once results start coming in, recomputed on every goal.
- **Team sheets** — tap a team for stats, player goals and a match-by-match history.
- **Grand Stage** — trophy podium that becomes the champion coronation — champion crest, name and prize, plus a FINAL STANDINGS strip showing 2nd place and the semi-final loser(s) as 3rd — with an auto-opening celebration modal (same standings) and confetti.
- **Sound** — all cues synthesized in-browser (no audio files): toss ticks, a rising showdown power-up sweep, goal horn, full-time whistle, champion fanfare. Toggle lives in the ⋯ menu and persists.
- **Team management** — swap players between teams by tap or drag, rename players (goals follow the name), remove/restore teams before the toss. In rename mode, remove a player from their slot with one tap; the slot becomes an "+ ADD PLAYER" placeholder you tap to type a new name straight in. Empty slots read clearly in swap mode too, so you can drag or tap a player straight into one.
- **Persistence** — everything survives refresh via `localStorage`, plus JSON backup/restore and a two-tap reset.
- **Print summary** — by fixtures prints the real UI, in colour, of exactly the three record sections stacked full-width: league table, then top scorers, then the full fixtures queue — nothing else. By team prints that team's sheet plus its match-by-match text report.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The app — self-contained, no build step, no backend. |
| `logos/*.png` | The five team crests. |
| `FC26 Tournament Arena.dc.html` | Authored design source — all edits go here; `index.html` is regenerated from it. |
| `BRIEF.md` | Original product brief. |

## Deploy

Static hosting — no server needed. Upload `index.html` and the `logos/` folder to the web root. For GitHub Pages: Settings → Pages → Deploy from branch → `main` / root.

## Tech

HTML, CSS and vanilla-style JavaScript logic, Web Audio for sound, Canvas for confetti, `localStorage` for state. No dependencies beyond Google Fonts (Orbitron, Rajdhani).
