# CLAUDE.md

## Project

FC26 Tournament Arena — a live tournament control-room web app for a private FC26 (FIFA) tournament on PS5 at King's House. Five teams exist; the board ships with four of them playing (Falcons sit out by default and can be restored from the team sheet). Operator-driven on iPhone/iPad beside the console while players watch.

## Working language

The user writes in Roman Urdu / Hinglish. Reply in the same register, short and direct — no long explanations.

## Source of truth

- `FC26 Tournament Arena.dc.html` — the authored design. All edits go here.
- `index.html` — compiled standalone build for hosting. Regenerate it from the design file after changes; never hand-edit it.
- `logos/*.png` — the five team crests (cropped from the client's crest sheet). Always use real crest images for a team, never text initials.
- `BRIEF.md` — the original brief. It governs rules and UX principles.

## Design rules

- Dark canvas `#06080c`, lime primary `#c8ff2e`, gold `#ffd54a` for trophies/prize; team accents: Eclipse `#f0b429`, Royals `#3f8cff`, Raptors `#a259ff`, Warriors `#ff4b4b`, Falcons `#54e04a`.
- Orbitron for display/numbers, Rajdhani for body. Skew language: `skewX(-7deg / -10deg / -14deg)` on chips and crest panels; images inside skewed panels are counter-skewed and scaled `118%`.
- Poster energy: paint-slash shapes, skewed nameplates, glow — but restrained. No AI-slop gradients, no emoji, no hand-drawn SVG illustration.
- **One VS treatment per view** — never duplicate VS labels.
- No instructional filler text ("tap to start", "teams will cycle…") — the UI explains itself.
- Never dim non-qualifying teams into unreadability; differentiate with edge glow, not opacity.

## Product rules

- Points: W 3, D 1, L 0. Ranking: points → goal difference → goals scored → head-to-head.
- Top 4 qualify: SF1 = Rank 1 v Rank 4, SF2 = Rank 2 v Rank 3, then the final. With 3 teams, a direct final (Rank 1 v 2). With 2 teams, no toss at all.
- League draws allowed; knockout draws require a penalty shootout **score** (not just a winner pick), shown as `(4-2 P)` everywhere.
- Toss runs once only. Scores derive from goal events — never store team scores separately, so Undo stays correct.
- Team removal only before the toss; minimum 2 teams.
- No dummy or seeded results — first load is always a clean board.

## Technical

- Everything client-side: `localStorage` key `fc26_arena_v1` through a try/catch-safe wrapper; JSON backup/restore; no backend.
- Sound is synthesized with Web Audio — no audio assets. The ⋯ menu toggles it; the choice persists.
- Opening toss settles into a RE-ROLL / ACCEPT MATCH 1 choice before locking — nothing generates until accepted.
- Preload all crests on mount, otherwise fast toss cycling paints a stale logo next to a new team name.
- Touch targets ≥ 44px (goal buttons 56px), respect `env(safe-area-inset-bottom)`, no horizontal overflow at iPhone widths, `auto-fit`/`minmax` grids instead of breakpoints.
- Print: the real UI prints in colour (`print-color-adjust:exact`). `[data-noprint]` hides only operator controls, `[data-printonly]` reveals the text appendix, `[data-printblock]` keeps cards whole, and `[data-printsheet]` un-fixes the team sheet for by-team prints.
- FC26 in-game picks entered on a match are learned into `picks` and offered back through a `<datalist>` on later matches.

## Repository

Deploy target: `Emadkhanqai/fc-garina` (branch `main`) — see `github.md`. Push `index.html` + `logos/` to the repo root.
