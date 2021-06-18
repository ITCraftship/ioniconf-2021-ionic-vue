## Quick Start

```
npm i
npm run serve
```

## Run with Server-Side-Rendering

```
npm i
npm run serve:ssr
```

## Run with Live Reload

Add the following config to `capacitor.config.json`:

```
  "server": {
    "url": "{enter your LAN IP and port}",
    "cleartext": true
  }
```

Run:

```
npx cap copy
ionic cap run ios -l --external # for iOS
ionic cap run android -l --external # for iOS
```

In a separate terminal:
```
npx cap open android # for Android
npx cap open ios # for Android
```

Start the app in XCode or Android Studio.