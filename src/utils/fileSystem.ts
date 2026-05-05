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
          "My First AI Agent Setup: Building a CLI-First Workflow\n\n <a href='https://medium.com/@tikkaaa3/my-first-ai-agent-setup-building-a-cli-first-workflow-d52b78af61a2' class='text-[#39BAE6] hover:underline' target='_blank'>Medium link</a>",
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
