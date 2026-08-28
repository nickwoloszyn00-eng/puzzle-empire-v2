# Playing Puzzle Empire on Android

## Immediate route: installable web app

The game has an Android-ready web manifest, home-screen icon, install button, and offline cache. Upload the contents of this project folder to an HTTPS static host, then open its URL in Chrome on the Android device. Tap **Install** in the game header or use Chrome’s **Install app** menu item.

The install button only appears when Chrome recognizes the page as installable. The requirements are HTTPS, the supplied manifest and service worker being reachable, and visiting the page normally (not as a local file).

## APK / Google Play route

To publish an actual APK/AAB, wrap this PWA in an Android container such as Capacitor or Trusted Web Activity. That needs Android Studio/JDK/SDK, an Android package ID, signing key, and Google Play Console account. Those build tools are not installed in this workspace, so no signed Android package was produced here.

For Google Sign-In in the installed Android app, create the corresponding Android OAuth client using the app package ID and signing certificate SHA-1 in addition to the web-client setup used by the PWA.

