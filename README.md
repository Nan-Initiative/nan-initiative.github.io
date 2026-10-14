# NaN Initiative website

The website of the NaN Initiative, a collection of projects that rethink the foundations of computing for AI: the nan programming language and the NaNOS kernel and operating system. It is published at https://nan-initiative.github.io.

## Installation

Requires Node 22 and pnpm 10. From the repository root:

```bash
pnpm install
```

## Usage

```bash
pnpm dev
```

Serves the site locally with live reload. `pnpm build` writes the static site to `dist/` and `pnpm preview` serves that build. Pushes to `main` are deployed to GitHub Pages.

## Commands

| Command        | Purpose                                  |
| -------------- | ---------------------------------------- |
| `pnpm dev`     | Serve the site locally with live reload  |
| `pnpm build`   | Type-check and build the site to `dist/` |
| `pnpm preview` | Serve the built site                     |
| `pnpm format`  | Format all files                         |
| `pnpm lint`    | Lint                                     |
| `pnpm test`    | Run all tests                            |
