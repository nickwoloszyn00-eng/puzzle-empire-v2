# Puzzle Empire V2

A self-contained, locally playable match-3/kingdom-building game prototype. No package manager, build step, account, or server is required.

## Run it

Open `index.html` in a current desktop browser. For the most reliable local-storage behavior, serve this folder with any simple static-file server, but opening the file directly also works in modern browsers.

## Android play now

This project is an installable Progressive Web App (PWA). Put this folder on any HTTPS static host, open the site in Chrome on an Android phone, then choose **Install** in the game header (or Chrome menu → **Install app**). It launches full-screen and caches the game for offline play after the first visit. A `file:///` launch on the phone cannot install or use Google Sign-In.

## Included in this prototype

- A 30-node Evergreen Trail level map with locks, completion stars, and a clear next-level path.
- Four rotating town-themed challenge modes: supply-gathering match-3, memory cards, restoration jigsaw, and town-word puzzles.
- Match-3 uses town supplies (seeds, lumber, berries, flowers, lanterns, etc.), rather than generic candy pieces.
- Thirty level briefs with individual names, target gem, target quantity, and move budget.
- Three stars based on remaining moves, persistent unlocked-level/stars/coins progress, and a level-complete flow.
- Characters and companion dialogue: Luma the mage, Rook the fox, and Pip the monarch.
- Kingdom renovation progression at levels 3, 8, 15, 23, and 30.
- A personal interactive town: unlock five roaming NPCs, five pets, and seven decorations across the campaign.
- A persistent 7×6 placement grid. Select owned decor from the Town Chest and click a plot to place it; click a filled plot to pack it away. Click a resident or pet for their dialogue.
- A player profile badge in the top bar, with a chosen display name/avatar and red, green, blue, or pink starter border. Gold, violet, and rainbow borders unlock at levels 10, 20, and 30.
- Account-connection UI for Google and Facebook, with a documented production OAuth integration path.
- Five regenerating lives (one every three minutes in this prototype).
- Hammer and color-wand boosters plus a charged Royal Burst board clear.
- Responsive layout for desktop and narrow mobile screens.

## Project layout

```
index.html       Application shell and accessible screen structure
styles.css       Responsive visual system and component styling
levels.js        30 designed level briefs and content data
game.js          State, match-3 logic, UI rendering, persistence
assets/          Replacement-ready art/audio placeholder directory
docs/            Architecture and product/monetization notes
```

## Fast places to modify

- Add/change levels in `levels.js`; each entry is title, target gem index, target count, and move count.
- The campaign rotates `match`, `cards`, `jigsaw`, and `word` level types. Set a level’s `type` in `levels.js` to control its puzzle mode.
- Change economy starting amounts and life cadence in `game.js` (`load` and `replenish`).
- Swap emoji placeholder art for original licensed assets in `index.html` and `game.js`.
- Update `TOWN_DECOR`, `TOWN_FRIENDS`, and `TOWN_PETS` in `game.js` to add town content and its level-unlock milestones.
- Test a fresh player state from browser developer tools with `localStorage.removeItem('puzzle-empire-v2')`.

## Content/IP note

The game uses original names, UI copy, and placeholder emoji art. Its broad match-3 genre conventions are intentional, but production should use independently designed characters, worlds, board UI, level content, visual effects, sound, and marketing material; do not use Candy Crush assets or trade dress.

## Account connection

The profile is currently stored only in the browser, so it works without a server. Google Identity Services is wired into the profile screen but intentionally needs a public client ID in `auth-config.js` and a server endpoint to verify/save identity tokens. Facebook remains a setup placeholder. See `docs/OAUTH_SETUP.md` for the production requirements.

