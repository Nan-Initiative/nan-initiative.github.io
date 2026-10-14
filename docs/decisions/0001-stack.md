# 0001. Stack

Status: accepted

## Context

The NaN Initiative is a collection of projects that rethink the foundations of computing for AI, starting with the nan programming language and the future NaNOS kernel and operating system. Its website is a landing page that presents the initiative and its projects. It is served from GitHub Pages under the Nan-Initiative organisation, so it must be static. The team chose React.

## Decision

- React with TypeScript for the pages.
- Vite to develop and to build the static site.
- pnpm as the package manager, on Node 22.
- ESLint for linting and Prettier for formatting.
- Vitest with Testing Library and jsdom for tests.
- A GitHub Actions workflow that checks, builds and deploys the site to GitHub Pages.

## Consequences

- The site is rendered in the browser: content is not in the served HTML, which costs some search indexing and first paint for a single landing page.
- Vite and Vitest share one configuration, so tests run against the same transforms as the build.
- TypeScript stays on 6.x until typescript-eslint supports later versions.
