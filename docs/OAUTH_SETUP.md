# Google and Facebook account connection

The prototype deliberately does not contain OAuth client IDs, secrets, or a fake sign-in. Real social sign-in requires a production web host and a small backend because an identity token must be verified server-side before profile data can be linked safely.

## Google Sign-In included in this project

`game.js` uses the Google Identity Services popup/One Tap flow once `googleClientId` is set in `auth-config.js`. This flow uses an **Authorized JavaScript origin** (such as `https://play.puzzleempire.com`) rather than a browser redirect URI. It then sends the returned identity token to `POST /api/auth/google` for server verification.

For the current browser project, create a Google OAuth **Web application** client. Add your exact production website origin in Google Cloud Console. `http://localhost` can be added for local development, but a `file:///` page cannot be used as an OAuth origin.

## Required decisions and credentials

1. Choose the production domain and privacy/support URLs.
2. Create a Google OAuth web client and add only the exact approved JavaScript origins.
3. Create a Meta/Facebook app, enable Facebook Login, complete its app-review/data-use requirements, and add the matching redirect URL.
4. Choose an authentication backend/provider (for example, Firebase Auth, Auth0, Supabase Auth, or a custom backend).
5. Store provider secrets only in server environment variables—never in `game.js`, HTML, or a browser bundle.

## Suggested data model

After verified sign-in, associate a server-side player ID with: display name, avatar choice, selected badge border, campaign stars/unlocks, town decorations, friends, pets, and updated timestamp. Merge anonymous/local progress only after asking the player which save to keep.

## Front-end handoff

Google is already wired in through `googleSignIn()` and `googleCredential()` in `game.js`. Put the public client ID in `auth-config.js`, then implement the server endpoint to verify the token and return a player profile. Do not request friend lists, posting permissions, or profile fields beyond what is needed to create the game account.

