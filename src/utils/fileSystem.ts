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
      "CONTACT\n=======\n\nEmail: <a href='mailto:tikkaaa3@gmail.com' class='text-[#39BAE6] hover:underline' target='_blank'>tikkaaa3@gmail.com</a>\nPhone: +48 452 014 231\nLinkedIn: <a href='https://linkedin.com/in/emre-t-kaptan' class='text-[#39BAE6] hover:underline' target='_blank'>linkedin.com/in/emre-t-kaptan</a>\nGitHub: <a href='https://github.com/Tikkaaa3' class='text-[#39BAE6] hover:underline' target='_blank'>github.com/Tikkaaa3</a>\n\nSeeking a Backend Internship in Poland.",
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
      "CERTIFICATIONS\n==============\n\n• IBM Full-Stack Developer Certificate (2023)\n  - Cloud Native Development\n  - CI/CD Pipelines\n  - React & Django\n  - RESTful APIs\n\n• Boot.dev Software Engineering Curriculum (2026)\n  - Data Structures & Algorithms\n  - Backend Development\n  - SQL & Database Design\n  - Web Servers\n\n• Cloud Computing Coursework\n  - AWS (S3, EC2)\n  - Microsoft Azure\n  - Container Orchestration",
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
      languages: {
        type: "file",
        name: "languages",
        content:
          "PROGRAMMING LANGUAGES\n=====================\n\n- Go\n- TypeScript\n- JavaScript\n- Python\n- SQL",
      },
      backend: {
        type: "file",
        name: "backend",
        content:
          "BACKEND & DATABASES\n===================\n\nFrameworks:\n- Node.js (Express)\n- Django\n\nDatabases & ORMs:\n- PostgreSQL\n- MongoDB\n- Prisma ORM\n\nArchitecture & Auth:\n- REST API Design\n- Authentication (JWT, Argon2)\n\nTesting:\n- Jest\n- Go testing",
      },
      frontend: {
        type: "file",
        name: "frontend",
        content:
          "FRONTEND & CLOUD\n================\n\nFrontend:\n- React\n- TypeScript\n- Tailwind CSS\n\nCloud Platforms:\n- AWS (S3)\n- Microsoft Azure\n\nTools:\n- Docker\n- Git\n- Linux",
      },
    },
  },
  blog: {
    type: "directory",
    name: "blog",
    children: {
      "rest-apis": {
        type: "file",
        name: "rest-apis",
        content:
          "Building Scalable REST APIs with Go\n====================================\n\nDate: March 2026\n\nIn this article, I share my experience building production-ready REST APIs using Go and PostgreSQL.\n\nKey Takeaways:\n\n• Designing Clean API Architecture\n  - Separation of concerns with handlers, services, and repositories\n  - Middleware pattern for authentication and logging\n  - Error handling best practices\n\n• Database Design & Performance\n  - Proper indexing strategies for PostgreSQL\n  - Connection pooling optimization\n  - Using prepared statements to prevent SQL injection\n\n• Authentication & Security\n  - Implementing JWT-based authentication\n  - Password hashing with Argon2\n  - Rate limiting to prevent abuse\n\n• Testing Strategy\n  - Unit tests for business logic\n  - Integration tests with test databases\n  - Table-driven tests in Go\n\nReal-world Example:\nIn my t-learn project, I implemented these patterns to handle user authentication, lesson management, and progress tracking. The API serves thousands of requests while maintaining sub-100ms response times.\n\nLessons Learned:\n- Always validate input at the API boundary\n- Use database transactions for complex operations\n- Monitor API performance from day one\n- Document your endpoints (OpenAPI/Swagger)",
      },
      docker: {
        type: "file",
        name: "docker",
        content:
          "Dockerizing Full-Stack Applications\n====================================\n\nDate: February 2026\n\nDocker has become essential for modern development. Here's how I containerize full-stack applications for consistent deployment.\n\nCore Concepts:\n\n• Multi-Stage Builds\n  - Separate build and runtime stages\n  - Reduce image size by 70%+\n  - Include only production dependencies\n\n• Docker Compose for Local Development\n  - Orchestrate frontend, backend, and database\n  - Volume mounting for hot-reload during development\n  - Environment variable management\n\n• Production Best Practices\n  - Use specific version tags (not 'latest')\n  - Run containers as non-root users\n  - Implement health checks\n  - Optimize layer caching\n\nExample from My Projects:\n\nIn the homed project, I used Docker Compose to run:\n- Node.js backend (TypeScript)\n- PostgreSQL database\n- Prisma migrations\n\nBenefits:\n✓ Consistent environment across team members\n✓ Easy onboarding (docker-compose up)\n✓ Production parity\n✓ Simple CI/CD integration\n\nPractical Tips:\n- Use .dockerignore to exclude node_modules\n- Keep Dockerfiles simple and readable\n- Monitor container resource usage\n- Regularly update base images for security",
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
