Deployment checklist and notes

What I changed

- Bumped `next` from `15.5.4` to `^15.5.5` in `package.json`. npm resolved this to `15.5.7` when installing. This addresses the reported CVE (Next.js 15.5.4 had a security vulnerability).
- Aligned TypeScript React types to React 19 by updating `@types/react` and `@types/react-dom` to `^19`.
- Added a minimal `engines.node` (>=18) and `packageManager` (`pnpm@8.8.1`) to `package.json` to make deployment environments (e.g. Vercel) pick a compatible Node and package manager.

What I ran to verify

- Installed dependencies (I used `npm install --legacy-peer-deps` in this environment because `pnpm` was not available here):

  npm install --legacy-peer-deps

- Ran an automatic audit and then an explicit build:

  npm audit
  npm run build

Results

- After bumping `next`, `npm install` reported: "found 0 vulnerabilities".
- `npm run build` completed successfully and produced a production build (Next.js reported `15.5.7` installed and compiled successfully).

Notes & recommendations

- Preferred package manager: the repository has a `pnpm-lock.yaml` so CI/deployment should install using `pnpm` (I added `packageManager: pnpm@8.8.1` to `package.json`). On your machine or CI, enable Corepack and run `pnpm install`.

- If your deployment provider (Vercel, Netlify, etc.) flagged the vulnerable Next.js version, re-deploy after pushing these changes. The build here resolved Next to `15.5.7`, which is a patched release.

- Avoid using `"latest"` in `dependencies` for long-lived projects because it makes reproducible builds harder. Consider pinning or using semver ranges for packages such as `@vercel/analytics` and `framer-motion`.

- If you maintain CI (GitHub Actions, etc.), add a step to run `npm audit` or `pnpm audit` as part of PR checks.

Commands to deploy locally

# install deps (recommended with pnpm):
pnpm install

# or fallback with npm (may create package-lock.json):
npm install --legacy-peer-deps

# build:
npm run build

# run production server locally:
npm run start

If you want, I can:
- Replace `"latest"` entries with pinned versions and run another install/audit to make the dependency tree fully deterministic.
- Update CI (GitHub Actions) to run `pnpm install` and `pnpm audit` on PRs. A GitHub Actions workflow has been added at `.github/workflows/ci.yml` which:
  - Enables Corepack and prepares `pnpm@8.8.1`.
  - Installs dependencies using `pnpm install --frozen-lockfile`.
  - Runs `pnpm audit --audit-level=high` (this will fail the job if high/critical vulnerabilities are found).
  - Runs TypeScript typecheck (`pnpm exec tsc --noEmit`), lint (`pnpm run lint`) and `pnpm build`.

Vercel deployment notes

- On Vercel, set the Framework Preset to "Next.js". Vercel respects the `engines.node` field and will use Node >=18; you can also set the Node version in Project Settings to `18.x`.
- Set the Install Command to:

  pnpm install --frozen-lockfile

- Set the Build Command to:

  pnpm build

- Set the Output Directory to the default (Vercel auto-detects Next.js output). Ensure any required environment variables (analytics keys, API keys) are configured in Vercel's Project Settings.

Tell me if you'd like me to also:
- Add Dependabot or Renovate configuration to keep dependencies up-to-date.
- Replace `latest` dependencies with pinned versions and re-run audits.