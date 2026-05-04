# emretolgakaptan.dev — Interactive Terminal Portfolio

A browser-based terminal portfolio built with Astro + React. No generic templates—just a fake filesystem, CRT effects, and keyboard navigation.

## Stack

- Astro
- React + TypeScript
- Tailwind CSS

## Running Locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Structure

```
src/
  components/    # Terminal UI
  pages/         # Astro entry
  utils/         # Commands & filesystem
  types/         # Types
public/          # Static assets (CV, favicons, etc.)
```

## Features

- `ls`, `cd`, `cat`, `pwd`, `clear`, `help` — usual shell stuff
- `cv` — downloads the resume PDF
- Tab completion for filenames
- Typing animation on long outputs
- CRT scanline overlay

The filesystem and commands live in `src/utils/`. Tweak `fileSystem.ts` to add files or directories.
