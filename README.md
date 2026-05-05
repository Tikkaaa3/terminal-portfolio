# emretolgakaptan.dev — Interactive Terminal Portfolio

<p align="center">

![Astro](https://img.shields.io/badge/Astro-Framework-FF5D01?style=for-the-badge&logo=astro)
![React](https://img.shields.io/badge/React-UI-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Strong-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwindcss)

![AI Assisted](https://img.shields.io/badge/AI--Augmented-Workflow-purple?style=for-the-badge)
![Aider](https://img.shields.io/badge/Aider-Pair%20Programming-0EA5E9?style=for-the-badge)
![OpenRouter](https://img.shields.io/badge/OpenRouter-Model%20Routing-orange?style=for-the-badge)
![Graphify](https://img.shields.io/badge/Graphify-Architecture%20Graph-green?style=for-the-badge)

![Terminal UI](https://img.shields.io/badge/UX-Terminal%20Interface-black?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)

</p>

A browser-based terminal portfolio built with Astro + React. No generic templates—just a custom fake filesystem, CRT effects, and keyboard navigation.

Built using an **AI-augmented workflow** to accelerate development, leveraging agentic coding tools alongside traditional development practices.

## 🛠 Stack & Tooling

**Core Tech:**

- Astro
- React + TypeScript
- Tailwind CSS

**AI Orchestration:**

- **Aider:** Used as an autonomous pair-programmer directly in the terminal to scaffold features, manage file system logic, and execute rapid refactoring.
- **Graphify:** Generated a project dependency graph (`graphify-out/graph.json`) which was fed as read-only context to Aider, granting the agent full architectural awareness.
- **OpenRouter:** Managed model routing to leverage the most effective models during different stages of development.

## 🤖 Development Workflow & AI Integration

Rather than writing every line of boilerplate by hand, this project was built by treating AI as a collaborative agent. By integrating **Aider** into the git workflow (visible in the commit history!), I acted as the architectural director—prompting the agent with specific constraints, managing state logic for the terminal, and ensuring the Astro/React integration remained clean and performant.

This approach allowed me to focus on the UX (like the CRT scanlines and typing animations) while the agent handled the repetitive lifting.

## 🚀 Running Locally

```sh
npm install
npm run dev
```

## 📦 Build

```sh
npm run build
npm run preview
```

## 📂 Structure

```text
src/
  components/    # Terminal UI & React components
  pages/         # Astro entry points
  utils/         # Core logic: Commands & filesystem routing
  types/         # TypeScript definitions
public/          # Static assets (CV, favicons, etc.)
```

## ✨ Features

- `ls`, `cd`, `cat`, `pwd`, `clear`, `help` — usual shell commands with tab completion.
- `cv` — instantly downloads the resume PDF.
- Dynamic typing animation on long text outputs.
- Authentic CRT scanline overlay and phosphorescent green styling.
- Extensible fake filesystem (tweak `src/utils/fileSystem.ts` to add files or directories).
