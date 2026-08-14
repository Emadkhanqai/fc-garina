# Handoff: FC26 Tournament Arena

## Overview

A premium, mobile-first web app to run a private 5-team FC26 (FIFA) tournament on match night — a live esports "control room" rather than an admin dashboard. One operator drives it beside the PS5 while players watch: opening toss, live scoring per player, automatic league table + knockout generation, and a champion celebration.

Event context: FC26 Tournament · King's House · PS5 · configurable prize (default Rs. 5,000).

## About the Design Files

The files in this bundle are **design references created in HTML** — a working prototype that shows the intended look, motion and behavior. They are **not production code to copy directly**.

The task is to **recreate these designs in the target codebase's existing environment** (React, Vue, SwiftUI, native, etc.) using its established patterns, component library and state conventions. If no environment exists yet, pick the most appropriate framework for the project and implement the designs there.

`FC26 Tournament Arena.dc.html` is the authored source (a streaming design component: an inline-styled template plus a logic class). `index.html` is a compiled, self-contained build of the same design that runs from any static host — use it to click through the real behavior.

## Fidelity

**High-fidelity.** Final colors, typography, spacing, motion and interaction states. Recreate pixel-perfectly using the codebase's own libraries, substituting equivalent primitives where they exist. All hex values, sizes and timings below are exact.

---

## Screens / Views

The app is a **single scrolling page** plus five overlays (modals/bottom sheets). Content max-width `820px`, centered, horizontal padding `14px`, bottom padding `60px`. Page background `#06080c` with a fixed, non-repeating lime glow layer pinned to the viewport:

```
background-image:
  radial-gradient(50% 34% at 10% 4%, rgba(200,255,46,.05), transparent 65%),
  radial-gradient(44% 30% at 92% 12%, rgba(200,255,46,.04), transparent 65%);
background-repeat: no-repeat; background-attachment: fixed; background-size: 100% 100vh;
```

Section order top to bottom: Header → Hero → Meet the Teams → Opening Toss → Live Match (+ Record Goal) → Next Match → League Table + Top Scorers → Fixtures → Grand Stage.

### 1. Header

- **Purpose**: brand mark + global actions, deliberately small.
- **Layout**: flex row, space-between, padding `14px 2px 10px`.
- Left: `34×34` rounded-`8px` tile, `linear-gradient(135deg,#c8ff2e,#7ac800)`, text "26" Orbitron 900 `11px` `#0a0f05`; then "FC26 TOURNAMENT ARENA" Orbitron 700 `13px`, letter-spacing `2px`, `#e9edf2`.
- Right: a single **⋯** button (bg `rgba(255,255,255,.06)`, border `1px rgba(255,255,255,.12)`, radius `8px`, padding `4px 12px`, font-size `20px`, `#e9edf2`) that opens the utility sheet.
- No Backup/Print/Reset/Sound buttons in the header — everything lives behind ⋯.

### 2. Hero

- **Purpose**: make the page feel like an event landing screen.
- **Layout**: rounded `20px`, border `1px rgba(200,255,46,.25)`, padding `32px 18px 22px`, centered text, `overflow:hidden`, background `radial-gradient(120% 140% at 50% -20%, #18220a 0%, #0a0f12 55%, #06080c 100%)`.
- Decorative layers (absolute, `pointer-events:none`): vertical scanlines `repeating-linear-gradient(90deg, rgba(200,255,46,.04) 0 1px, transparent 1px 60px)`, two corner glows, and two skewed clip-path "paint slash" shapes (top-left rotated `-18deg`, bottom-right rotated `-14deg`) in `rgba(200,255,46,.14–.16)`.
- Kicker: "PLAY. COMPETE. WIN." Orbitron 700 `12px`, letter-spacing `6px`, `#c8ff2e`, flanked by 26px `2px` gradient rules.
- Wordmark: `clamp(48px,13vw,88px)` Orbitron 900, line-height `.95` — "FC" in `#f2f6fa`, "26" filled with `linear-gradient(180deg,#e8ffa0,#c8ff2e 50%,#6fa800)` via background-clip, glow `text-shadow: 0 0 44px rgba(200,255,46,.4)`; whole block `filter: drop-shadow(0 4px 0 rgba(0,0,0,.55))`.
- "TOURNAMENT": Orbitron 900 `clamp(16px,4.4vw,24px)`, letter-spacing `8px`, `#0a0f05` on `linear-gradient(100deg,#e9edf2,#c9d4de)`, padding `5px 18px 4px 22px`, `transform: skewX(-10deg)`, `box-shadow: 4px 4px 0 rgba(200,255,46,.55)`.
- Meta row: date (auto-formatted current date, e.g. "10 AUGUST") ◆ "KING'S HOUSE" ◆ "PS5" — Rajdhani 700 `15px`, letter-spacing `2px`, `#9fb0c0`, diamonds `#c8ff2e`.
- Stat tiles: `grid-template-columns: repeat(auto-fit, minmax(96px,1fr))`, gap `8px`. Each: bg `rgba(255,255,255,.04)`, border `1px rgba(255,255,255,.09)`, radius `12px`, padding `10px 6px`; value Orbitron 700 `20px` (`#c8ff2e`, prize in `#ffd54a`), label `12px` 600 letter-spacing `2px` `#9fb0c0`. Values are **live**: team count, player count, total match count, prize.

### 3. Meet the Teams

- **Purpose**: show the five squads; each card opens a team sheet.
- Section header: `14×14` lime square `skewX(-14deg)` + "MEET THE TEAMS" Orbitron 700 `13px` letter-spacing `5px`.
- Grid: `repeat(auto-fit, minmax(150px,1fr))`, gap `10px`.
- Card: `#0a0d12`, border `1px` team-color @40% alpha, radius `18px`, padding `0`, flex column, `overflow:hidden`, press state `transform: scale(.97)`.
  - Crest image: full width, `aspect-ratio: 1.1`, `object-fit: cover`; a gradient scrim over it `linear-gradient(180deg, transparent 45%, rgba(10,13,18,.55) 78%, #0a0d12 100%)`; a `3px` top streak `linear-gradient(90deg, transparent, <teamColor>, transparent)`.
  - Nameplate (short name): Orbitron 900 `12px`, letter-spacing `1.5px`, `#0a0f05` on solid team color, padding `4px 12px 3px`, `skewX(-10deg)`, `margin-top:-12px`, glow `0 0 18px` team color @35%.
  - Players line: Rajdhani 700 `15px` `#e9edf2`.
  - Points chip: `X PTS`, Orbitron 700 `10.5px`, `#c8ff2e` on `rgba(200,255,46,.09)`, border `1px rgba(200,255,46,.3)`, radius `999px`, padding `3px 10px`.
  - Tagline: 700 `10.5px` italic, letter-spacing `1.5px`, team color at `.85` opacity.
  - **Final chance meter**: divider `1px rgba(255,255,255,.07)` above a row with label "FINAL CHANCE" (700 `9.5px`, letter-spacing `1.5px`, `#5b6b7a`) and the value right-aligned (Orbitron 900 `14px`, `#c8ff2e`, glow `0 0 14px` at 40%; `#ffd54a` once the team is in the final, `#5b6b7a` at 0%). Below it a `5px` track (`rgba(255,255,255,.07)`, radius `3px`) whose fill is `linear-gradient(90deg, <teamColor>, #c8ff2e)` (gold end-stop when locked at 100%), `transition: width .45s ease`, minimum visible width `4%` for any non-zero value.
- No helper text like "tap for details" — the card is tappable on its own.

### 4. Opening Toss

- **Purpose**: the dramatic moment that decides Match 1. Runs **once only**.
- Panel: radius `20px`, border `1px rgba(200,255,46,.2)`, background `linear-gradient(180deg,#0d1118,#070a0e)`, padding `24px 14px 26px`, centered.
- Behind: two side washes that **track the current candidates** — `radial-gradient(60% 90% at 0% 50%, <teamA tint>, transparent 60%)` and the mirror at `100% 50%` (tint = team color @13%), `transition: background .3s`; plus a center light seam (1px vertical lime gradient).
- Title chip: "OPENING TOSS" Orbitron 900 `12px` letter-spacing `4px`, `#0a0f05` on `linear-gradient(135deg,#d6ff5c,#8fce00)`, `skewX(-10deg)`.
- Sub-line (state-driven): `RANDOM DRAW — WHO PLAYS FIRST` / `DRAWING THE OPENING FIXTURE` / `MATCH 1 IS SET` / `TWO TEAMS — STRAIGHT TO BATTLE`.
- Two candidate panels: `flex:1; max-width:185px`, `transform: skewX(-7deg)`, radius `16px`, border `2px` team color, glow `0 0 34px` team color @45%; the crest inside is counter-skewed (`width:118%; margin-left:-9%; transform: skewX(7deg)`) so it fills the parallelogram squarely.
- **Before the toss** both panels are mystery: `repeating-linear-gradient(-45deg, rgba(200,255,46,.05) 0 10px, transparent 10px 22px)` with a pulsing `?` (Orbitron 900 `56px`, `rgba(200,255,46,.5)`, `pulse 2s infinite`), names read `? ? ?`, borders/washes neutral lime.
- Center **VS**: Orbitron 900 `34px` italic, gold-free lime gradient text (`#f4ffd0 → #c8ff2e 60% → #6fa800`), `filter: drop-shadow(0 0 14px rgba(200,255,46,.55)) drop-shadow(0 3px 0 rgba(0,0,0,.6))`. **Only one VS treatment exists on the page** — never duplicate it.
- CTA: full width (max `400px`), padding `19px 20px`, `clip-path: polygon(4% 0,100% 0,96% 100%,0 100%)` (chamfered slab), background `linear-gradient(180deg,#d6ff5c,#a4e000 60%,#78b400)`, Orbitron 900 `19px` letter-spacing `3px` `#0a0f05`. Contains a `40%`-wide white sweep bar animating `sweep 2.6s ease-in-out infinite`, and the button itself pulses `glowpulse 2.2s`. Press: `scale(.96)`. Label is **START SHOWDOWN**, or **START TOURNAMENT** when only two teams are active.
- Running state replaces the CTA with "SHOWDOWN RUNNING" (Orbitron 700 `15px`, letter-spacing `4px`, `#c8ff2e`, `pulse 1s`); locked state shows "MATCH 1 LOCKED" in a lime outlined chip with `pop .5s`.
- No instructional paragraphs anywhere in this section.

### 5. Live Match (Current Match)

- **Purpose**: the operational heart — always the first incomplete fixture.
- Card: radius `20px`, border `1px rgba(200,255,46,.3)`, background `linear-gradient(180deg,#0c1014,#070a0e)`, `overflow:hidden`; behind it, both teams' color washes bleed in from the left/right edges (`radial-gradient(55% 75% at 0%/100% 30%, <tint>, transparent 55%)`).
- Top row: the stage chip alone, centered — `LEAGUE · MATCH 6` (Orbitron 900 `11px`, `#0a0f05` on lime gradient, `skewX(-10deg)`).
- Teams: same skewed crest panels as the toss (`max-width:170px`, radius `14px`, `2px` team border, `0 0 28px` glow) with skewed team-color nameplates below.
- Center column between them: first the **LIVE** badge (7px `#ff3b3b` dot pulsing `1.2s`, text 700 `11px` `#ff6b6b`, bg `rgba(255,59,59,.14)`, border `1px rgba(255,59,59,.5)`, radius `999px`, `margin-bottom:10px`), then the scoreboard plate: bg `rgba(0,0,0,.55)`, border `1px rgba(200,255,46,.35)`, radius `16px`, padding `10px 16px`, `box-shadow: 0 6px 30px rgba(0,0,0,.5), inset 0 -2px 0 rgba(200,255,46,.25)`. Digits Orbitron 900 `52px` `#fff`, each glowing in its own team's color; separator `:` Orbitron 900 `20px` italic `#c8ff2e`.
- Under each nameplate: an **FC26 in-game team input** (which real-world national/club team that player picked, e.g. FRANCE). Dashed bottom border in team color, transparent-dark bg, centered uppercase Rajdhani 700 `13px` in team color, placeholder `FC26 TEAM?`, max 16 chars. Both inputs are bound to a shared `<datalist>` of previously used picks, so earlier entries type-ahead on later matches.

### 6. Record Goal (inside Live Match)

- **Purpose**: one tap to score. Must never be hard to find.
- Band: `border-top: 1px rgba(200,255,46,.15)`, bg `rgba(0,0,0,.3)`, padding `16px 14px 18px`.
- Header: "RECORD GOAL" Orbitron 900 `13px`, letter-spacing `5px`, `#c8ff2e`, `text-shadow: 0 0 16px rgba(200,255,46,.5)`, flanked by 26px lime rules.
- Two team panels: `grid-template-columns: repeat(auto-fit, minmax(230px,1fr))`, gap `12px`. Panel bg `linear-gradient(180deg,<team tint 10%>, rgba(255,255,255,.02) 60%)`, border `1px` team color @45%, radius `16px`, `3px` top streak in team color. **No repeated team logo/name header inside the panel** — the color coding ties it to the team above.
- Player buttons (one per player, 2 per team): `min-height 56px`, radius `12px`, border `1px` team color, bg `linear-gradient(90deg,<team tint>, rgba(0,0,0,.25) 55%)`, `box-shadow: inset 3px 0 0 <teamColor>`; left group = `26×26` solid team-color chip with `+` (Orbitron 900 `16px` `#0a0f05`) and the player name Rajdhani 700 `18px` (ellipsis on overflow); right = the in-match tally alone, Orbitron 900 `22px`, `min-width:22px`, team color with `0 0 14px` glow once it is above zero, `rgba(255,255,255,.22)` and unglowed at zero. No "GOAL" word — the `+` chip carries the affordance. Press: `scale(.96)` + `0 0 22px` team glow.
- Action row: **UNDO LAST GOAL** (`flex:1`, min-height `50px`, neutral outline) and **END GAME → NEXT MATCH** (`flex:2`, lime gradient, Orbitron 900 `14px`, glow `0 0 22px rgba(200,255,46,.35)`; label becomes **END FINAL** on the final).

### 7. Next Match

- **Purpose**: the operator should never search the fixture list.
- Card: radius `16px`, border `1px rgba(200,255,46,.18)`, background `linear-gradient(90deg, rgba(200,255,46,.05), #0a0d12 30%, #0a0d12 70%, rgba(200,255,46,.05))`, padding `14px 16px`.
- Row 1: skewed lime "NEXT MATCH" chip + `LEAGUE · MATCH 7` (700 `12px` `#8a99a8`).
- Row 2: `46×46` crest (radius `12px`, `1px` team border, `0 0 14px` glow) · team name Orbitron 700 `13px` · small VS diamond (`30×30`, `rotate(45deg)`, border `1px rgba(200,255,46,.5)`, bg `rgba(200,255,46,.06)`, inner text counter-rotated Orbitron 900 `10px` `#c8ff2e`) · opponent name right-aligned · opponent crest.
- On the final, the card is replaced by a gold notice: "THIS IS THE FINAL GAME" (Orbitron 700 `13px`, letter-spacing `4px`, `#ffd54a`, bg `rgba(255,213,74,.06)`, border `1px rgba(255,213,74,.4)`).

### 8. League Table + Top Scorers

Two panels in `grid-template-columns: repeat(auto-fit, minmax(320px,1fr))`, gap `16px`, `align-items:start`. Both use container `#0a0d12`, border `1px rgba(255,255,255,.1)`, radius `16px`, `overflow:hidden`. Headers use the skewed lime square + Orbitron 700 `13px` letter-spacing `5px`.

**League table** — `display:grid` rows, `grid-template-columns: 26px 1fr 24px 24px 24px 24px 28px 28px 30px 34px`, gap `2px`, padding `9px 12px`, row divider `1px rgba(255,255,255,.05)`.
- Columns in order: `#`, TEAM, P, W, D, L, GF, GA, GD, PTS.
- Header labels 700 `11px` letter-spacing `1px` `#5b6b7a`.
- Cells 600 `13px` `#9fb0c0`; PTS Orbitron 700 `13px` `#e9edf2`; position Orbitron 700 `12px`.
- Team cell: `26×26` crest radius `7px` + short name 700 `13px`, ellipsis on overflow.
- Top-4 rows: `background: linear-gradient(90deg, rgba(200,255,46,.07), transparent 40%)`, position number `#c8ff2e`. Non-qualifiers are **not** dimmed — full-strength text (`#9fb0c0`), only the edge glow differs.
- Champion row (after the final): gold tint `linear-gradient(90deg, rgba(255,213,74,.14), transparent 55%)`, position `#ffd54a`, and a `✦` appended to the team name.
- Footer note: "TOP 4 QUALIFY FOR SEMI-FINALS" 600 `11px` `#5b6b7a`.

**Top scorers** — one row per player (all 10), padding `9px 14px`: rank Orbitron 700 `12px` (leader `#ffd54a`, else `#5b6b7a`), `26×26` team crest, name 700 `14px`, goals Orbitron 700 `15px` (`#c8ff2e` when > 0, `#43515f` when 0). Sorted by goals desc, then name.

### 9. Fixtures

- **Purpose**: full tournament queue, always showing every slot (league + semis + final).
- Header: skewed lime square + "FIXTURES".
- Rows: `display:flex; flex-wrap:wrap`, gap `10px`, radius `14px`, padding `10px 12px`, `animation: pop .4s ease`.
  - Left block (`46px`, centered): match number Orbitron 700 `13px`, stage tag below (`LGE` / `SF` / `FINAL`) `10px` 700 `#5b6b7a`.
  - Real fixtures: `30×30` crest, team short name 700 `14px` (ellipsis), score/`vs` Orbitron 700 `13px`, opponent name right-aligned, opponent crest.
  - **Result highlighting** on completed rows: winner name `#c8ff2e` with a `▸`/`◂` pointing at the score, loser `#5b6b7a`, draw both `#9fb0c0`. Penalty results append ` (4-2 P)` to the score.
  - Current match row: bg `rgba(200,255,46,.06)`, border `1px rgba(200,255,46,.4)`, number `#c8ff2e`.
  - Upcoming rows carry a round **play button** (`34×34`, radius `50%`, bg `rgba(200,255,46,.08)`, border `1px rgba(200,255,46,.4)`, CSS triangle `border-left: 10px solid #c8ff2e`) that promotes the fixture to be played next.
  - If either side recorded an FC26 pick, a full-width sub-line shows `FRANCE vs ARGENTINA` (700 `11.5px`, letter-spacing `2px`, `#8a99a8`).
  - Placeholder rows (before the draw, or for ungenerated knockouts): centered label 700 `13px` letter-spacing `3px` `#43515f` — `AWAITING DRAW`, `RANK 1 VS RANK 4`, `RANK 2 VS RANK 3`, `SF1 WINNER VS SF2 WINNER`. Semi placeholders use lime tint (`rgba(200,255,46,.04)` / border `rgba(200,255,46,.22)`), the final placeholder gold (`rgba(255,213,74,.05)` / border `rgba(255,213,74,.3)`).

### 10. Grand Stage (bottom)

- **Purpose**: the trophy moment; permanent record of the champion.
- Panel: radius `24px`, border `1px rgba(255,213,74,.35)`, background `radial-gradient(120% 160% at 50% -30%, #241d08 0%, #0c0a05 55%, #06080c 100%)`, padding `34px 16px 30px`, plus a faint conic light-shaft overlay.
- Title "GRAND STAGE": Orbitron 900 `clamp(20px,5.5vw,30px)`, letter-spacing `8px`, gold gradient text (`#fff3c4 → #ffd54a 55% → #b98a00`), glow `0 0 34px rgba(255,213,74,.25)`.
- **Empty state**: `150×150` dashed gold placeholder with a rotated `?` diamond, a pulsing status line (`THE THRONE AWAITS` → `SEMI-FINALS IN PROGRESS` → `THE FINAL DECIDES IT ALL`), and a three-block gold podium silhouette (center block `78×44` labelled `1`).
- **Champion state**: rotating ray-burst behind everything (`repeating-conic-gradient(rgba(255,213,74,.13) 0deg 7deg, transparent 7deg 22deg)`, `520px` circle, radial mask, `spinslow 26s linear infinite`); floating gold trophy built from borders (`trophyfloat 3.4s`); "✦ CHAMPIONS OF FC26 ✦"; crest in a `6px` conic gold ring (`conic-gradient(from 0deg,#ffd54a,#8a6400,#ffe9a0,#8a6400,#ffd54a)`) with `0 0 60px rgba(255,213,74,.45)`; team name Orbitron 900 `clamp(26px,7vw,38px)` in a shimmering gold gradient (`shimmer 3.5s linear infinite`, `background-size:200% auto`); players Rajdhani 700 `19px`; result line e.g. `DEFEATED FALCONS 3 - 2 IN THE FINAL` (700 `13px` `#8a7a45`); prize medallion `RS. 5,000 WINNERS` (Orbitron 900 `14px` `#241d08` on `linear-gradient(180deg,#ffe9a0,#ffd54a 60%,#c99a00)`, radius `999px`, glow `0 0 34px`); confetti canvas.

---

## Overlays

All bottom sheets: fixed to bottom, max-width `560px` centered, bg `#0d1118`, `border-radius: 20px 20px 0 0`, `border-top: 1px rgba(255,255,255,.15)`, padding `18px 18px calc(18px + env(safe-area-inset-bottom))`, `animation: slideup .25s ease`, a `40×4` grab handle on top, and a `rgba(0,0,0,.6)` backdrop that closes on tap. `max-height: 82vh; overflow-y:auto` where content can grow.

### A. Utility sheet (⋯)
Stacked buttons, each `min-height:52px`, radius `12px`. First a **SOUND** row — neutral shell, label left, state right as an Orbitron 900 `12px` pill reading `ON` (`#c8ff2e` on `rgba(200,255,46,.05)`, border `rgba(200,255,46,.3)`) or `OFF` (`#8a99a8` on `rgba(255,255,255,.04)`, border `rgba(255,255,255,.12)`) — then **EDIT TEAM MEMBERS** (lime outline), **TOURNAMENT SETTINGS**, **BACKUP — EXPORT JSON**, **RESTORE — IMPORT JSON**, **PRINT SUMMARY**, **RESET TOURNAMENT** (red: border `rgba(255,80,80,.4)`, bg `rgba(255,80,80,.08)`, text `#ff7b7b`; requires a second tap — label changes to "TAP AGAIN TO CONFIRM RESET").

### B. Team Members sheet
- Title "TEAM MEMBERS" + hint line; a mode toggle pill switches between **swap mode** (default) and **rename mode**.
- One row per team: `42×42` crest, team name in team color, and a **✕ REMOVE / + RESTORE** button (red/lime outline).
- Swap mode: each player is a chip (`min-height:46px`, radius `10px`, `⇅` glyph + name) that is both tappable and `draggable`. Tap one (selected: bg `rgba(200,255,46,.14)`, border `#c8ff2e`, glow), tap another to swap the two players — across teams or within one. Drag-and-drop does the same.
- Rename mode: two text inputs per team (max 20 chars). Renaming carries that player's existing goal events to the new name. Clearing a name removes the player everywhere.
- Removed team rows collapse to "TEAM REMOVED FROM TOURNAMENT".

### C. Tournament Settings sheet
- **WINNING PRIZE (RS)** — number input, gold styling. Drives the hero tile, champion medallion and print header.
- **MINIMUM LEAGUE MATCHES PER TEAM** — number input `0–20`, lime styling, with a live hint explaining the resulting schedule (e.g. "currently 2× round robin, 8 league matches per team").
- DONE button (lime gradient).

### D. Print sheet
- **BY FIXTURES — FULL TOURNAMENT** (lime outline) → prints league table, every fixture/result (with picks and penalty scores), top scorers, and the Grand Stage champion block.
- **OR BY TEAM** → one button per active team (crest + name + "PRINT") → prints that team's players, league position and stats, player goals, and a match-by-match list with score, W/D/L/LIVE/Upcoming, penalty score, FC26 picks and per-match scorers.

### E. Penalty Shootout modal
Centered dialog (`max-width:420px`, radius `20px`, border `1px rgba(200,255,46,.3)`, `pop .3s`). Title "PENALTY SHOOTOUT", instruction line, then one row per team: crest, name, `−` / count (Orbitron 900 `24px` in team color) / `+` steppers (`42×42`). **CONFIRM SHOOTOUT** (lime gradient) refuses a level score with a red toast.

### F. Team sheet (tap a team card)
- Header block: team-tinted radial background, `3px` team-color top streak, `104×104` crest (radius `22px`, `2px` border, `0 0 40px` glow), skewed team-color nameplate, players `16px`, tagline, and an "Nth IN LEAGUE" lime chip.
- Three big stat tiles: **PLAYED**, **GOAL DIFF** (green `#54e04a` if positive, red `#ff6b6b` if negative), **POINTS** (`#c8ff2e`) — Orbitron 900 `22px` values, `11px` letter-spaced labels.
- A single strip below: `3W  1D  0L  7 GF / 3 GA` (wins green, losses red).
- Player goal tiles: big team-color count Orbitron 900 `24px`, name, "GOALS" label.
- "LEAGUE MATCHES" list: each row has an `inset 3px 0 0` result-colored rail, match number, **own crest + own name on the left**, score (own goals first; an en-dash before kick-off), opponent name + crest on the right, and a W/D/L/LIVE/UP badge (`44px`, tinted background). FC26 picks appear as a full-width sub-line.

### G. Champion celebration modal
Auto-opens ~600ms after the final is completed. Centered (`min(92vw,480px)`, `max-height:88vh`, radius `24px`, gold border, `pop .5s`) with the same content as the Grand Stage champion state plus its own confetti canvas and a `36×36` round **✕** close button (top-right). Backdrop `rgba(0,0,0,.82)`. Closing leaves the Grand Stage section intact.

### H. Toast
Fixed bottom-center (`bottom: calc(28px + env(safe-area-inset-bottom))`), bg `#0d1118`, `1px` colored border, radius `999px`, padding `12px 26px`, Orbitron 700 `14px` letter-spacing `2px`, colored glow, `animation: toastin .25s ease`, auto-dismiss after `2300ms`. Used for: `GOAL — EMAD`, `GOAL REMOVED — EMAD`, `FULL TIME`, `MATCH 1 LOCKED`, `SEMI-FINALS SET`, `THE FINAL IS SET`, `PLAYERS SWAPPED`, `NOW THE CURRENT MATCH`, `MOVED TO NEXT MATCH`, `BACKUP EXPORTED`, `TOURNAMENT RESTORED`, `INVALID BACKUP FILE`, `TOURNAMENT RESET`, `SHOOTOUT CANNOT BE LEVEL`, `RESET TOURNAMENT TO REMOVE TEAMS`, `AT LEAST 2 TEAMS NEEDED`.

---

## Interactions & Behavior

### Opening toss (once only)
1. Tap START SHOWDOWN → `rolling` state; both slots begin cycling random valid pairs (never the same team twice).
2. Cadence is authored as a delay list so it reads **fast → slow → fast → slow → lock**: 11 ticks @95ms, 5 @185ms, 8 @88ms, 4 @240ms, then 320/430/570/760ms, then lock ~420ms later. Each tick plays a click and re-tints the stage.
3. On lock: `tossDone = true`, the pair becomes Match 1, all league fixtures generate, `MATCH 1 LOCKED` shows for 3s, then the toss panel is replaced by the Live Match.
4. **Two-team tournaments skip the roulette entirely** — the button reads START TOURNAMENT, both crests are shown from the start, and tapping locks the fixture immediately.
5. All crests are preloaded on mount (`new Image()`), otherwise fast cycling can paint a stale bitmap next to a new team name.

### Fixture generation
- Round robin over all active teams; `minMatches` setting multiplies the round-robin (`rounds = ceil(minMatches / (n-1))`, clamped 1–6).
- The toss pair is forced to be Match 1; the rest are ordered greedily so **no team plays back-to-back** where possible.
- Match numbers are always contiguous `1..n`, renumbered after any reorder.

### Scoring
- Tapping a player's GOAL button appends `{player, team, ts}` to the fixture's event list → team score and player total derive from events (never stored separately), goal sound + toast fire, state saves immediately.
- **UNDO LAST GOAL** pops the last event, which reverses the team score, the player's total and the match event in one step.

### Ending a match
- **END GAME → NEXT MATCH** locks the result; W/D/L, points, GF/GA/GD all recompute from events.
- League draws are allowed. **Knockout draws are not** — the penalty modal opens and a shootout score must be entered; the winner is the higher shootout score and `(4-2 P)` is shown wherever that match appears.
- The next incomplete fixture automatically becomes the Live Match.

### Progression
- When every league match is done: **4+ teams** → SF1 (rank 1 v 4) and SF2 (rank 2 v 3) generate; **3 teams** → a direct final (rank 1 v 2).
- When both semis are done → the final generates from the two winners.
- When the final is done → champion is set, fanfare plays, the celebration modal opens, confetti runs on both canvases.

### Final chance simulation
Each team card shows the probability that team reaches the final, derived (never stored) on every render:
- **0% before the toss.** The tournament hasn't started — no draw, no fixtures — so every active team reads a flat `0%`, matching every other zeroed stat on a fresh board (PTS, GD, etc).
- **Exact 2÷n right after the toss.** The instant Match 1 locks and until the first goal is recorded anywhere, every active team is genuinely symmetric (identical strength, identical fixtures remaining), so the odds are the closed-form `2 / activeTeamCount` for every team — not simulated, so there's no run-to-run noise to explain away (5 teams → 40% flat; 4 → 50%; 3 → 66.67%; 2 → 100%, matching the no-toss short-circuit).
- **6,000 Monte Carlo runs** once the first goal exists anywhere in the tournament. Each run simulates every remaining league fixture, ranks the table with the real tiebreakers (points → GD → goals), seeds SF1 (1 v 4) / SF2 (2 v 3), and plays both semis; a team is counted when it appears in the final. With 3 active teams the top two go straight to the final; with 2, both sit at 100%.
- **Goal model.** Poisson draws with `λ = 1.45 · (strᴀ/strʙ)^1.25`, clamped `0.35–3.2`. Strength comes from completed results only — `1 + 0.10·(pts/game − 1.2) + 0.11·(GD/game)`, shrunk by `p/(p+2)` so one lopsided result can't dominate, clamped `0.68–1.45`. Teams with no games sit at `1`.
- **Live matches count.** Goals already recorded in the in-progress fixture are carried into the simulation and only the remainder is simulated (λ scaled `0.55`), so the meters move on every tap of a GOAL button and reverse on Undo.
- **Known outcomes short-circuit.** Once the final exists its two teams read `100%` and everyone else `0%`; completed semis contribute their real winners.
- Results are memoised against a signature of active teams, round count and every fixture's score/done/penalty state, so re-renders (toss roulette, sheets opening) never re-run the simulation.

### Reordering the queue
Tapping ▶ on an upcoming fixture promotes it: if the current match already has goals it slots in immediately **after** the live match; if the live match hasn't started, the promoted fixture **becomes** the live match. Everything renumbers.

### Roster edits
Swaps move players (and their goal history) between teams. Renames rewrite the player's name inside existing goal events. Team removal is only allowed **before** the toss (otherwise a red toast explains why) and never below 2 teams.

### Data management
- JSON **export** downloads `fc26-tournament-backup.json`; **import** validates `app === 'fc26-arena'` and an array of fixtures, else shows an error toast.
- **Reset** clears storage and returns to the pre-toss state (two-tap confirm).
- **Print** renders the real UI, in colour (`print-color-adjust: exact`, canvas stays `#06080c`, `@page` margin `10mm`), but only the record sections: **league table, top scorers and fixtures**, stacked full-width in that order (`[data-printstack]` collapses the two-column grid to `1fr`). Everything else carries `[data-noprint]` — hero, Meet the Teams, opening toss, the live match card and its Record Goal band, Next Match, Grand Stage, the header ⋯, fixture ▶ buttons, every overlay backdrop/sheet and the toast — leaving the compact brand row as the report's title. `[data-printblock]` sets `break-inside: avoid` on each fixture row and panel. The by-fixtures report has **no text appendix**; the dark-styled text summary (`[data-printonly="1"]`) is emitted only by the by-team print, after the sheet.
- **Print by team** additionally opens that team's sheet and prints it as the report: `[data-printsheet]` un-fixes the bottom sheet (`position: static`, no max-height), `body:has([data-printsheet]) [data-printmain]` hides the main page, and the container flips to flex so the sheet leads and the text summary follows (`order: 2`). The sheet closes again once `window.print()` returns.

### Sound (Web Audio, no asset files)
Oscillator-based cues: `tick` (1500Hz square 45ms), `click` (750Hz triangle), `lock` (170Hz saw + 85Hz sine + 1046Hz square), `goal` (523/659/784/1046 arpeggio + 65Hz thump), `undo` (320→210Hz), `whistle` (2300Hz double + 2700Hz long), `fanfare` (7-note gold run doubled an octave down). The context is created on first user gesture; a header toggle mutes everything and the state persists. Volume is a tweakable prop.

### Animations
`sweep` (CTA light bar 2.6s), `glowpulse` (CTA 2.2s), `pulse` (LIVE dot, mystery `?`, running label), `pop` (fixture reveal, modals, locked state), `slideup` (sheets .25s), `toastin` (.25s), `shimmer` (champion name 3.5s), `spinslow` (ray-burst 26s), `trophyfloat` (3.4s), plus canvas confetti (130 particles, 7s, colors `#c8ff2e #ffd54a #3f8cff #ff4b4b #a259ff #ffffff`).

### Responsive
- Every grid is `auto-fit`/`minmax`, so phone → tablet → desktop reflows without breakpoints; the league table + top scorers sit side-by-side from `~680px`, teams grow from 2 to 5 columns.
- Safe areas respected via `env(safe-area-inset-bottom)`; all touch targets ≥ 44px (goal buttons 56px).
- No horizontal overflow at iPhone widths; long team names use `text-overflow: ellipsis`.

---

## State Management

Single state object, persisted to `localStorage` under `fc26_arena_v1` through a **safe wrapper** (try/catch on get/set/remove so restricted previews can't crash the app).

Persisted:
- `tossDone: boolean`
- `fixtures: Fixture[]`
- `champion: number | null` (team index)
- `sound: boolean`
- `rosters: { [teamId]: [string, string] }` (overrides default players)
- `removed: { [teamId]: true }`
- `prize: number`
- `minMatches: number`
- `picks: string[]` (uppercased FC26 in-game team picks, most recent first, capped at 30 — harvested from both sides when a match is completed)
- `ts: number`

Ephemeral (not persisted): `rolling`, `lockShow`, `slotA`, `slotB`, `menuOpen`, `rosterOpen`, `rosterEdit`, `swapSel`, `settingsOpen`, `printOpen`, `printMode`, `printTeam`, `modalTeam`, `champModal`, `penaltyFor`, `penA`, `penB`, `toast`, `resetArmed`.

Derived on every render (never stored): scores, standings, player goal totals, current/next fixture, queue rows, scorer table, stat-tile counts.

### Types

```ts
type Team = {
  id: string; name: string; short: string;
  players: [string, string];
  logo: string;      // image path
  color: string;     // accent hex
  tagline: string;
};

type GoalEvent = { player: string; team: number; ts: number };

type Fixture = {
  id: string;                                  // 'L1'…'L10', 'SF1', 'SF2', 'F'
  stage: 'LEAGUE' | 'SEMI-FINAL' | 'FINAL';
  num: number;                                 // 1-based, contiguous
  a: number; b: number;                        // team indices
  events: GoalEvent[];                         // score derives from this
  done: boolean;
  pen: number | null;                          // shootout winner index
  penA?: number; penB?: number;                // shootout score
  pickA?: string; pickB?: string;              // FC26 in-game team picks
};
```

### Ranking rules
Points (W 3 / D 1 / L 0) → goal difference → goals scored → head-to-head result → stable team order. Top 4 qualify.

No backend, no database, no network calls.

---

## Design Tokens

**Colors**
| Token | Value |
| --- | --- |
| Canvas | `#06080c` |
| Panel | `#0a0d12` |
| Panel raised | `#0d1118` |
| Primary accent (lime) | `#c8ff2e` |
| Lime light / dark | `#d6ff5c` / `#8fce00`, deep `#6fa800` |
| Gold (trophy/prize) | `#ffd54a` (light `#ffe9a0`, dark `#b98a00`) |
| Text primary | `#e9edf2` |
| Text secondary | `#9fb0c0` |
| Text muted | `#8a99a8` |
| Text faint | `#5b6b7a` / `#43515f` |
| Live red | `#ff3b3b` (text `#ff6b6b`) |
| Positive | `#54e04a` |
| Team Eclipse | `#f0b429` |
| Team Royals | `#3f8cff` |
| Team Raptors | `#a259ff` |
| Team Warriors | `#ff4b4b` |
| Team Falcons | `#54e04a` |

Team colors are used at derived alphas: border `.40–.45`, glow `.35–.50`, tint `.10–.16`.

**Typography** — Orbitron 500/700/900 (display: wordmark, headings, numbers, chips, CTAs) and Rajdhani 500/600/700 (body: player names, stats, hints), both from Google Fonts. Sizes in use: `10px, 10.5px, 11px, 12px, 13px, 14px, 15px, 16px, 17px, 18px, 19px, 20px, 22px, 24px, 26px, 28px, 34px, 52px, clamp(20–30px), clamp(26–38px), clamp(48–88px)`. Letter-spacing `1px → 8px` on display text.

**Spacing** — `2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 34px`.

**Radius** — `6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 30, 32, 999px (pill), 50% (circle)`.

**Shadows / glows** — `0 0 12–60px <teamColor @35–50%>`; scoreboard `0 6px 30px rgba(0,0,0,.5), inset 0 -2px 0 rgba(200,255,46,.25)`; CTA `0 0 16–44px rgba(200,255,46,.5–.95)`; gold `0 0 34–110px rgba(255,213,74,.45–.5)`; result rails `inset 3px 0 0 <color>`.

**Skew language** — display chips and crest panels use `skewX(-7deg)` / `skewX(-10deg)` / `skewX(-14deg)`; images inside skewed panels are counter-skewed and over-scaled `118%` to stay square.

---

## Assets

- `logos/eclipse.png`, `logos/royals.png`, `logos/raptors.png`, `logos/warriors.png`, `logos/falcons.png` — the five team crests, cropped from an AI-generated crest sheet supplied by the client. Two are `768×512`, three are `512×512`; all are displayed with `object-fit: cover`, so any square-ish source works.
- No icon library and no SVG illustration: the trophy, podium, VS diamond, play triangle and ray-burst are all built from CSS borders/gradients. Reproduce them with the codebase's own primitives or icon set as appropriate.
- Fonts: Google Fonts `Orbitron` (500,700,900) and `Rajdhani` (500,600,700).
- Sound is synthesized at runtime — no audio files to ship.

## Files

| File | What it is |
| --- | --- |
| `FC26 Tournament Arena.dc.html` | Authored source of the design (inline-styled template + logic class). The reference for structure, styling and behavior. |
| `index.html` | Compiled standalone build of the same design — open it in a browser to click through the real interactions. Loads crests from `logos/`. |
| `logos/*.png` | The five team crests. |
| `FC26_Tournament_Arena_Claude_Prompt.md` | The original client brief this design was built from (requirements, tournament rules, UX principles). |

## Testing notes

The prototype was run through an automated end-to-end pass (58/59 checks) covering: fresh state, toss + fixture generation, goal recording and undo, fixture promotion, standings and tiebreakers, automatic semi-final seeding (1v4 / 2v3), penalty shootout scoring, automatic final generation, champion state, `localStorage` restoration after refresh, two-team mode, custom prize, and multi-round `minMatches` schedules. Worth re-covering in whatever test framework the target codebase uses.
