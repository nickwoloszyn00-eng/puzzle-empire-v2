/*
 * Google Sign-In configuration — safe to commit because a Google OAuth client ID is public.
 *
 * 1. Replace the empty string with your Google OAuth 2.0 WEB client ID.
 * 2. Register this site's production URL in Google Cloud Console > Credentials >
 *    Authorized JavaScript origins.
 * 3. Implement POST /api/auth/google on your server to verify the returned ID token.
 *
 * Do NOT put a client secret in this file.
 */
window.PUZZLE_EMPIRE_AUTH = {
  googleClientId: '',
  profileApiUrl: '/api/auth/google'
};

