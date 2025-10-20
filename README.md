# HomeOS — Privacy-First Operating System with Admin Management

HomeOS is a local-first operating system with optional admin oversight for enterprise or support use cases. All user data remains on-device. Admin actions require explicit enrollment, multi-party approval (where configured), and are fully auditable.

## Features

- Fully local encrypted storage (messages, calls, apps, accounts)
- P2P end-to-end encrypted messaging and voice/video calls
- Home Store for local APK management
- SIM/phone number integration (opt-in identity)
- Developer Mode (explicitly enabled in Settings)
- Metadata ping to admin panel (opt-in, default 5 minutes, encrypted)
- Admin Panel with RBAC, MFA, and audit logs
- Secure password reset (user-requested or enterprise-enrolled)
- Account suspension/ban with moderation workflow
- Device lockdown (requires consent or enterprise policy)
- Enrollment management (explicit opt-in)
- No backdoors. No covert access. No telemetry without consent.

## Admin Workflows

- **Password Reset**: Initiated by user or admin; requires approval and encrypted token delivery.
- **Suspension/Ban**: Requires documented reason, evidence, and audit entry.
- **Lockdown**: Only executes with user consent, enterprise policy, or recovery quorum.
- **Updates**: Manual by default; forced only for enrolled devices with policy.
- **Recovery**: Via user-held tokens or Shamir key shares—never universal backdoors.

## Privacy Guarantees

- Admins see only minimal, hashed metadata (if opted in).
- Admins cannot access messages, files, or decryption keys.
- All admin commands are signed, timestamped, and verified locally.
- Users can disable metadata ping or revoke enrollment at any time.

## Deployment

- Admin panel: Deployable on Render (Node.js + Next.js)
- Device OS: Buildable for Android/Linux targets via scripts

See `/docs` for architecture, threat model, and compliance notes.
