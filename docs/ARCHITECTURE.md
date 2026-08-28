# Architecture notes

## Design choice

The prototype is a deliberately small vanilla web application. It has three files because that makes it easy to open, audit, and change in Codex without first learning a toolchain.

```
index.html  → views and stable UI element IDs
levels.js   → content definitions (no logic)
game.js     → state machine, board mechanics, rendering and interactions
styles.css  → visual treatment and responsive rules
```

## Runtime model

`state` is stored under `puzzle-empire-v2` in browser `localStorage`. It holds currency, life timing, unlocked level, star results, and renovation unlocks. `current` is the active level brief and `board` is the current 8×8 grid. Each cell currently has `{ gem, special }`, leaving an intentional place to add blockers, terrain, locked pieces, and richer specials.

`state.town` holds the unlocked friend/pet IDs and a plot-index-to-decoration-ID map. Town content is defined at the top of `game.js` as `TOWN_DECOR`, `TOWN_FRIENDS`, and `TOWN_PETS`; each record has an unlock level. This keeps the personal town fully local and content-driven for the prototype.

## Match loop

1. The player selects two adjacent cells.
2. The game swaps them and scans horizontal and vertical runs of three or more.
3. Invalid swaps reverse. Valid matches are removed and remaining gems drop.
4. Fresh gems fill from above; scans repeat for cascades.
5. Collection progress and Royal Power update. A win or out-of-moves result ends the level.

## Challenge rotation

Each level has a `type`: `match`, `cards`, `jigsaw`, or `word`. The main board renderer dispatches to that challenge. The non-match modes are compact self-contained interactions: six supply pairs in memory, a 3×3 town-scene sliding puzzle, or a letter-order word puzzle with a town clue. This deliberately makes a single campaign feel less repetitive while keeping each mode easy to understand on a phone.

## Recommended production evolution

Move `LEVELS` to JSON and validate it with a lightweight level editor. Split game state from rendering. Add deterministic seeded boards and automated solvability checks. Add an API-backed profile only after anonymous retention data shows the core loop is worth scaling. Use original raster/vector art from `assets/` and cache it locally.

