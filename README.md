# Aura VPN

Aura VPN is a cross-platform mobile app prototype built with Expo and React Native. It explores a privacy-focused VPN experience, including onboarding, a connection dashboard, server selection, network analytics, security settings, and subscription screens.

> **Prototype notice:** This repository currently contains a front-end prototype, not a working VPN service. The connection flow is simulated in the app; server information, IP addresses, network metrics, account details, and analytics are sample UI data. Authentication, social sign-in, payments, and VPN tunnel establishment are not connected to backend services. Do not rely on this app to protect network traffic or treat its in-app security and privacy claims as verified service guarantees.

## App screens

- **Welcome and account screens** — onboarding, sign-in, and sign-up interfaces.
- **Connect** — a connection dashboard with a simulated connect/disconnect state and session timer.
- **Servers** — a server directory screen with search and category-filter controls.
- **Analytics** — a network diagnostics dashboard with sample throughput and traffic data.
- **Settings** — account, subscription, and tunnel-security controls presented as UI.
- **Subscription and profile** — plan selection and profile interfaces.

## Technology

- Expo SDK 57
- React Native 0.86 and React 19
- TypeScript with strict checking
- Expo Router for file-based navigation
- NativeWind for styling
- `@expo/ui` for selected native interface components

## Getting started

### Requirements

- [Bun](https://bun.sh/) for installing dependencies and running package scripts. The repository includes `bun.lock`.
- For Android development, the Android SDK and an emulator or connected device.
- For iOS development, macOS and Xcode.

### Install and run

```bash
bun install
bun run start
```

Use the Expo CLI prompts to open the app on a device or emulator. You can also start a platform-specific development command:

```bash
bun run android
bun run ios
bun run web
```

The Android and iOS commands use `expo run:*` and require the corresponding native development toolchain. iOS builds require macOS.

## Quality checks

```bash
bun run lint
bunx tsc --noEmit
```

There is currently no test script configured in `package.json`.

## Project structure

```text
src/
  app/
    (public)/           Welcome, sign-in, and sign-up routes
    (app)/
      (tabs)/           Connect, servers, analytics, and settings tabs
      (modal)/          Profile and subscription routes
  components/           Shared UI, server, and onboarding components
  context/              Billing selection context
  data/                 Local subscription plan data
  lib/                  Shared utilities
assets/                 App icons, images, and flags
```

Routes are managed by Expo Router. The root layout and app configuration are in `src/app/_layout.tsx` and `app.json`.

## Development notes

- The subscription plans and several dashboard values are hard-coded for presentation.
- The sign-in screen navigates to the app without validating credentials. Sign-up, social sign-in, and payment actions are not implemented.
- No VPN protocol client, tunnel service, server API, or authentication backend is configured in this repository.
- Security-related copy in the prototype is illustrative. Verify all product, infrastructure, and privacy claims before using them in a production app.
