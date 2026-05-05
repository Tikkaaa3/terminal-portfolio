import type { FileSystem } from "../types/terminal";

export const fileSystem: FileSystem = {
  about: {
    type: "file",
    name: "about",
    content:
      "ABOUT ME\n========\n\nBackend-focused Software Developer with experience in Go and TypeScript. Built REST APIs, authentication systems (JWT, Argon2), and relational database-driven applications. Familiar with Docker-based development environments and scalable backend architecture. Seeking a Backend Internship in Poland.\n\nLANGUAGES:\n- Turkish (Native)\n- English (B2)\n- Polish (A1)\n\nCheck out the `skills` and `projects` directories for more details.",
  },
  contact: {
    type: "file",
    name: "contact",
    content:
      "CONTACT\n=======\n\nEmail: <a href='mailto:tikkaaa3@gmail.com' class='text-[#39BAE6] hover:underline' target='_blank'>tikkaaa3@gmail.com</a>\nPhone: +48 452 014 231\nLinkedIn: <a href='https://linkedin.com/in/emre-t-kaptan' class='text-[#39BAE6] hover:underline' target='_blank'>linkedin.com/in/emre-t-kaptan</a>\nGitHub: <a href='https://github.com/Tikkaaa3' class='text-[#39BAE6] hover:underline' target='_blank'>github.com/Tikkaaa3</a>\n\nSeeking Engineering Internships in Poland",
  },
  edu: {
    type: "file",
    name: "edu",
    content:
      "EDUCATION\n=========\n\n• WSB Merito University, Wroclaw - Software Development & IT (Oct 2023 - Feb 2027)\n  Coursework: Cloud Computing (AWS, Azure), Python, Linux Administration\n\n• Boot.dev - Software Engineering Curriculum (2026)\n  Coursework: Data Structures, Backend Development, SQL, Web Servers\n\n• IBM (Coursera) - Full-Stack Developer Certificate (2023)\n  Coursework: Cloud Native Development, CI/CD, React, Django, APIs",
  },
  certs: {
    type: "file",
    name: "certs",
    content:
      "CERTIFICATIONS\n==============\n\n• IBM Full-Stack Developer Certificate (2023)\n  - Cloud Native Development\n  - CI/CD Pipelines\n  - React & Django\n  - RESTful APIs\n\n• Boot.dev Software Engineering Curriculum (2026)\n  - Data Structures & Algorithms\n  - Backend Development\n  - SQL & Database Design\n  - Web Servers",
  },
  projects: {
    type: "directory",
    name: "projects",
    children: {
      tlearn: {
        type: "file",
        name: "tlearn",
        content:
          "PROJECT: t-learn (Educational Platform)\n========================================\n\nGitHub: <a href='https://github.com/Tikkaaa3/t-learn' class='text-[#39BAE6] hover:underline' target='_blank'>github.com/Tikkaaa3/t-learn</a>\n\nTechnologies:\n- Go\n- React\n- PostgreSQL\n- Docker\n\nKey Features:\n• Built a full-stack educational platform using Go backend and PostgreSQL database\n• Designed REST API for lesson management and user progress tracking\n• Implemented relational database schema for multi-user state persistence\n• Developed authentication and session handling for user login flow\n• Containerized application using Docker for reproducible environments",
      },
      homed: {
        type: "file",
        name: "homed",
        content:
          "PROJECT: homed (Household Management API)\n==========================================\n\nGitHub: <a href='https://github.com/Tikkaaa3/homed' class='text-[#39BAE6] hover:underline' target='_blank'>github.com/Tikkaaa3/homed</a>\n\nTechnologies:\n- Node.js\n- TypeScript\n- PostgreSQL\n- Prisma\n\nKey Features:\n• Developed backend API for multi-user household management system\n• Implemented JWT-based authentication and role-based access control\n• Designed relational database schema using Prisma ORM\n• Built REST API endpoints for tasks, inventory, and user management\n• Implemented recipe suggestion logic based on available ingredients",
      },
    },
  },
  skills: {
    type: "directory",
    name: "skills",
    children: {
      backend: {
        type: "file",
        name: "backend",
        content:
          "BACKEND & LOGIC\n===============\n\nLanguages:\n- Go, JavaScript, TypeScript, Python, SQL\n\nFrameworks:\n- Node.js (Express)\n- Django\n\nDatabases & Storage:\n- PostgreSQL, MongoDB\n- Prisma ORM\n\nArchitecture:\n- RESTful API Design\n- Auth (JWT, Argon2)\n- Jest / Unit Testing",
      },
      frontend: {
        type: "file",
        name: "frontend",
        content:
          "FRONTEND & UI\n=============\n\nLanguages:\n- JavaScript, TypeScript, HTML/CSS\n\nLibraries & Frameworks:\n- React.js\n- Tailwind CSS\n- Next.js\n\nDesign Concepts:\n- Responsive Web Design\n- Mobile-First Approach\n- Component Architecture",
      },
      tools: {
        type: "file",
        name: "tools",
        content:
          "TOOLS & DEVOPS\n==============\n\nCloud:\n- AWS (S3), Microsoft Azure\n\nWorkflow:\n- Docker (Containerization)\n- Git (Version Control)\n- Linux (CLI & Scripting)\n- Postman / Bruno",
      },
    },
  },
  blog: {
    type: "directory",
    name: "blog",
    children: {
      "hello-world": {
        type: "file",
        name: "hello-world",
        content:
          'Hello, World! (Again)\n====================\n\nDate: May 2026\n\nWelcome to the corner of the internet where I document my journey through the ever-changing world of software development. I decided to add a blog to my portfolio because, let’s be real, code snippets only tell half the story.\n\nWhat to expect here:\n\n• Project Deep Dives\n  - Breaking down how I built the things you see in my portfolio\n  - Documenting the "why" behind the tech stack\n\n• Learning in Public\n  - Notes on new frameworks or languages I’m currently tackling\n  - Mistakes I made so you don\'t have to\n\n• Tech Life & Hot Takes\n  - My thoughts on the latest industry trends\n  - The occasional rant about CSS centering\n\nBehind every clean UI or optimized API is a mountain of discarded ideas, three-hour debugging sessions over a missing semicolon, and at least four cups of coffee.\n\nLessons Learned So Far:\n- Documentation is a love letter to your future self\n- It’s okay to not know everything on day one\n- Community feedback is the fastest way to grow\n\nThanks for stopping by. Stick around if you like reading about tech, triumphs, and the occasional "it worked on my machine" mystery!',
      },
      "ai-agent-setup": {
        type: "file",
        name: "ai-agent-setup",
        content:
          "My First AI Agent Setup: Building a CLI-First Workflow\n======================================================\n\nDate: May 2026\n\nRecently, I have been thinking about how to use AI tools realistically, looking past the hype. As a Software Engineering student, using AI to build a whole project from scratch felt like cheating. From my perspective, it was too early to rely on them; I needed to learn how to program, solve problems, and read documentation first so I could use coding agents properly.\n\nNow, in my third year of studies, I feel I can finally use them in areas I understand well enough to debug and grasp what is really going on. So, I set out to find an AI coding agent that was actually suitable for me.\n\n### A Suitable Coding Agent\n\"Suitable\" is a subjective word, so I need to explain my requirements and reasoning. First and foremost, I am a terminal enjoyer. I use Arch (btw), Hyprland, Neovim, and Yazi, so I live in the terminal most of the time. I specifically wanted a CLI or TUI-based agent, which immediately narrowed down my options.\n\nI tried Opencode, a TUI-based agent that offered to use Zen (a routing service similar to OpenRouter with fewer options, though I didn't know about OpenRouter at the time). Unfortunately, using AI APIs without configuration or restrictions burns through tokens quickly and, eventually, costs too much money.\n\nI explored two other main ideas:\n• Subscriptions: Buy a monthly subscription for Claude Code or Codex (a fixed price feels safer) and use their CLI versions. However, I don't really like OpenAI, and I had heard that Claude Code's rate limits were somewhat low—manageable with tweaks, but still a limitation.\n• Bring Your Own API: Find a free, open-source coding agent and plug in whatever API I wanted.\n\nThe standout recommendation for the second route was Aider: a Python-based, git-integrated CLI coding agent. I decided to test it out, but then came the next question: which API should I use?\n\n### Which API(s) to Select\nUsing first-party APIs directly from Anthropic or OpenAI is cheaper, but the model options are limited, which is bad for my Aider setup. Aider utilizes three different roles:\n• Main model: The architect and planner.\n• Editor model: The coder that changes files based on the main model's plan.\n• Weak model: Used for simple tasks like generating git commit messages.\n\nBecause of this, I wanted a routing service. I ultimately chose OpenRouter. Even though they take a small percentage fee for token usage, it offers a massive variety of newer models and provides a detailed dashboard for logging and usage tracking.\n\nInitially, I chose Sonnet 4.6 for the main model, Kimi k2.6 as the editor, and DeepSeek v4 Flash as the weak model. I soon realized that with my inexperienced prompting, this still used more tokens than anticipated, and Kimi k2.6 proved to be really indecisive as an editor. After some research, I learned that Kimi's indecisiveness stems from its swarm architecture. While that makes it a great architect, it makes for a poor editor.\n\nI swapped Kimi k2.6 to my main model to make the setup cheaper. For the editor, I switched to Qwen 3.6 Plus—cheaper than Kimi, but still highly capable of understanding and executing correct changes. I briefly considered using DeepSeek v4 Pro or Flash as the editor, assuming the editor role didn't require as much \"thinking.\" However, DeepSeek is very verbose, and the capability gap between Kimi and DeepSeek was too wide. Even if Kimi solved a problem perfectly, DeepSeek might fail to implement that solution correctly. Qwen bridged that gap much better.\n\nFor the weak model (which only handles git commits), DeepSeek v4 Flash remained completely fine.\n\n### Aider Setup Modifications\nWith the models selected, I wanted to make the setup easier to use, stricter, and more intelligent.\n\nFirst, I realized I was frequently tinkering with model routes to solve token issues, server downtime, or just personal preference. I created a bash script to quickly change model routes in the Aider config. It works like this: `aider-model weak <api route>` This easily updates the weak, editor, or main model paths on the fly.\n\nNext, I integrated a knowledge graph builder called Graphify. It uses tree-sitter static analysis combined with LLM-driven semantic extraction to create an interactive graph, explaining both what the code does and why it was designed that way. I used a .graphifyignore file to filter out unnecessary files from being generated in the graphify-out directory.\n\nI also incorporated Firecrawl, a web scraper optimized for AI agents. It extracts clean, LLM-readable outputs from websites. I installed it and created a firecrawl.md file to instruct Aider on how to use it when searching the web.\n\nEventually, I realized this setup required creating multiple specific files for every single project. Doing this manually without forgetting a step was tedious. To fix this, I wrote a project initialization bash script called dev-init. When run, it automatically detects the project's tech stack (Node, Cargo, Go modules, etc.), installs Graphify, generates the correct .graphifyignore file, and sets everything up. It also automatically generates AGENTS.md (to teach Aider how to use Graphify), firecrawl.md, and CONVENTIONS.md (to enforce rules like \"be decisive\").\n\n### How Did It Go?\nAfter using this setup to build my first project, I found that it works incredibly well. Thanks to my optimizations, it uses far fewer tokens. However, I still feel I have a lot to learn—especially regarding how to write better prompts, how to break down requests into small, precise chunks, and deciding exactly which files to add as read-only versus which to discard from the context window.\n\n### Summary & What's Next\nI really enjoyed the thought and testing process behind building this setup. I plan to keep improving it as I use it in my daily workflow. I am still a bit reluctant to use it for every project, but let's see how it goes...",
      },
    },
  },
};

// Current directory path (e.g., ['projects'] or [])
let currentPath: string[] = [];

export const getCurrentPath = (): string[] => {
  return [...currentPath];
};

export const setCurrentPath = (path: string[]): void => {
  currentPath = [...path];
};

export const getCurrentDirectory = (): FileSystem => {
  let current: any = fileSystem;

  for (const dir of currentPath) {
    if (
      current[dir] &&
      current[dir].type === "directory" &&
      current[dir].children
    ) {
      current = current[dir].children;
    } else {
      return fileSystem; // Fallback to root if path is invalid
    }
  }

  return current;
};

export const navigateToDirectory = (
  dirName: string,
): { success: boolean; message?: string } => {
  // Remove trailing slash if present
  const cleanDirName = dirName.endsWith("/") ? dirName.slice(0, -1) : dirName;

  if (cleanDirName === "..") {
    if (currentPath.length > 0) {
      currentPath.pop();
      return { success: true };
    }
    return { success: true }; // Already at root
  }

  if (cleanDirName === "/" || cleanDirName === "~" || cleanDirName === "") {
    currentPath = [];
    return { success: true };
  }

  const currentDir = getCurrentDirectory();
  const target = currentDir[cleanDirName];

  if (!target) {
    return {
      success: false,
      message: `cd: ${cleanDirName}: No such file or directory`,
    };
  }

  if (target.type !== "directory") {
    return { success: false, message: `cd: ${cleanDirName}: Not a directory` };
  }

  currentPath.push(cleanDirName);
  return { success: true };
};

export const getFileFromPath = (fileName: string): FileSystemNode | null => {
  const currentDir = getCurrentDirectory();
  return currentDir[fileName] || null;
};

// Resolve a path like "projects/t-learn.txt" or just "file.txt"
export const resolveFilePath = (
  path: string,
): { node: FileSystemNode | null; error?: string } => {
  // Handle empty path
  if (!path) {
    return { node: null, error: "No path provided" };
  }

  // Split path by /
  const parts = path.split("/").filter((p) => p.length > 0);

  if (parts.length === 0) {
    return { node: null, error: "Invalid path" };
  }

  // Start from current directory
  let current: any = getCurrentDirectory();

  // Navigate through the path
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    const isLast = i === parts.length - 1;

    if (!current[part]) {
      return { node: null, error: `${path}: No such file or directory` };
    }

    if (isLast) {
      // This is the target file/directory
      return { node: current[part] };
    } else {
      // This should be a directory we're navigating through
      if (current[part].type !== "directory") {
        return { node: null, error: `${part}: Not a directory` };
      }
      current = current[part].children || {};
    }
  }

  return { node: null, error: "Invalid path" };
};

export const getCurrentPathString = (): string => {
  if (currentPath.length === 0) {
    return "/home/portfolio";
  }
  return "/home/portfolio/" + currentPath.join("/");
};
