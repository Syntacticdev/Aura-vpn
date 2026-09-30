# Aura VPN

Aura VPN is a privacy-first mobile app prototype built with Expo and React Native. The current build focuses on a polished product UI and simulated user flow for a premium VPN experience, including onboarding, connection controls, server browsing, diagnostics, security settings, and subscription selection.

> **Prototype notice:** This repository is a front-end prototype and is not a production VPN client. Connection state, server metadata, IP addresses, diagnostics, and billing flows are mocked for presentation and demonstration only. No real VPN tunnel, authentication backend, payment processing, or network enforcement is implemented.

## Latest updates

This version adds a more complete end-to-end mock experience across the main product surfaces:

- A branded onboarding flow for welcome, sign-in, and sign-up screens.
- A simulated VPN connect/disconnect experience with animated state transitions and session timer logic.
- A server marketplace with search, category tabs, and server cards for different connection profiles.
- A live-style analytics dashboard featuring throughput, traffic, and tunnel integrity status panels.
- A settings screen with account details, tunnel security toggles, and profile-style subscription management.
- Billing and plan selection flows powered by a local billing context and subscription data model.
- Supporting UI components for headers, cards, badges, and network status indicators.

## App experience

### Public onboarding flow
- Welcome screen with brand copy and CTAs
- Sign-in and sign-up screens with email/password form UX
- OAuth-style Apple and Google buttons for visual parity with a premium app shell

### App dashboard
- Quick connect area with simulated connection state and protected/unprotected IP information
- Session timer and live tunnel status messaging
- Performance quick stats for latency, upload, download, and protocol state

### Server selection
- Search field for country, city, or IP targeting
- Featured tabs such as Recommended, Favourite, and Ultra-Fast
- Server cards designed to match a VPN product dashboard aesthetic

### Analytics and security panels
- Throughput and usage summaries
- Tunnel visibility and IP masking representations
- Integrity checks for DNS, IPv6, and WebRTC protection

### Account and subscription screens
- Billing period selector
- Subscription plan cards with feature details and pricing labels
- Payment CTA flows and success-state presentation
- Security settings with toggles for always-on protections and auto-connect behaviors

## Tech stack

- Expo SDK 57
- React Native 0.86
- React 19
- TypeScript
- Expo Router for file-based navigation
- NativeWind for styling
- `@expo/ui` for compound UI primitives
- `lucide-react-native` for app icons

## Getting started

### Requirements

- [Bun](https://bun.sh/) for package installation and local scripts
- Android SDK and emulator/device for Android runs
- macOS + Xcode for iOS simulator builds

### Install and run

```bash
bun install
bun run start
```

Then choose a target from the Expo CLI or run one of the platform-specific commands:

```bash
bun run android
bun run ios
bun run web
```

## Quality checks

```bash
bun run lint
bunx tsc --noEmit
```

There is currently no automated test suite configured in this project.

## Project structure

```text
src/
  app/
    (public)/            Public onboarding routes
    (app)/
      (tabs)/            Connect, servers, analytics, and settings tabs
      (modal)/           Subscription and success modal flows
  components/
    public/              Onboarding visuals
    server/              Server UI cards
    ui/                  Reusable app UI primitives
  context/
    BillingContext.tsx   Billing plan selection state
  data/
    subscription.ts      Local plan definitions
  lib/
    utils.ts            Shared helpers
assets/
  images/               App branding and icon assets
```

The application layout and route configuration are managed in `src/app/_layout.tsx` and app configuration in `app.json`.

## Development notes

- The app currently uses local mock data for plans, server cards, telemetry values, and account records.
- Screens are intentionally designed as a product prototype rather than a connected live service.
- Authentication, payments, and actual VPN traffic routing are not connected to backend systems.
- Product claims, security language, and network metrics should be treated as illustrative UI copy until real infrastructure is implemented and verified.
