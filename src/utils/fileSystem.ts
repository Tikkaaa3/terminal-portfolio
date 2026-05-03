import type { FileSystem } from '../types/terminal';

export const fileSystem: FileSystem = {
  'about.txt': {
    type: 'file',
    name: 'about.txt',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  'contact.txt': {
    type: 'file',
    name: 'contact.txt',
    content: 'Contact Information:\n\nEmail: lorem.ipsum@example.com\nLinkedIn: linkedin.com/in/lorem-ipsum\nGitHub: github.com/lorem-ipsum\nTwitter: @lorem_ipsum\n\nFeel free to reach out for collaborations or opportunities!'
  },
  'resume.txt': {
    type: 'file',
    name: 'resume.txt',
    content: 'RESUME\n========\n\nJohn Doe\nSoftware Developer\n\nEXPERIENCE:\n- Senior Developer at Lorem Corp (2020-Present)\n- Full Stack Engineer at Ipsum Inc (2018-2020)\n- Junior Developer at Dolor Ltd (2016-2018)\n\nEDUCATION:\n- B.S. Computer Science, Lorem University (2016)\n\nSKILLS:\n- JavaScript, TypeScript, Python, Java\n- React, Vue, Node.js, Express\n- PostgreSQL, MongoDB, Redis'
  },
  'projects': {
    type: 'directory',
    name: 'projects',
    children: {
      'web-portfolio.txt': {
        type: 'file',
        name: 'web-portfolio.txt',
        content: 'PROJECT: Interactive Terminal Portfolio\n\nDescription:\nA unique portfolio website that simulates a terminal interface, built with Astro and React. Features include file system navigation, command execution, and responsive design.\n\nTechnologies:\n- Astro\n- React\n- TypeScript\n- Tailwind CSS\n\nKey Features:\n- Terminal-style interface\n- Command-line navigation\n- Mock file system\n- Responsive design'
      },
      'ecommerce-app.txt': {
        type: 'file',
        name: 'ecommerce-app.txt',
        content: 'PROJECT: E-Commerce Platform\n\nDescription:\nFull-featured e-commerce application with user authentication, payment processing, and admin dashboard.\n\nTechnologies:\n- React\n- Node.js\n- Express\n- PostgreSQL\n- Stripe API\n\nKey Features:\n- User authentication\n- Shopping cart functionality\n- Payment processing\n- Order management\n- Admin dashboard'
      },
      'task-manager.txt': {
        type: 'file',
        name: 'task-manager.txt',
        content: 'PROJECT: Collaborative Task Manager\n\nDescription:\nReal-time task management application for teams with live updates and file sharing capabilities.\n\nTechnologies:\n- Vue.js\n- Socket.io\n- Node.js\n- MongoDB\n\nKey Features:\n- Real-time collaboration\n- Task assignments\n- File sharing\n- Progress tracking\n- Team notifications'
      },
      'README.md': {
        type: 'file',
        name: 'README.md',
        content: '# Projects Directory\n\nThis directory contains detailed information about various projects I\'ve worked on.\n\n## Available Projects:\n- **web-portfolio.txt** - This interactive terminal portfolio\n- **ecommerce-app.txt** - Full-stack e-commerce platform\n- **task-manager.txt** - Real-time collaborative task manager\n\nUse `cat <filename>` to view detailed project information.'
      }
    }
  },
  'skills': {
    type: 'directory',
    name: 'skills',
    children: {
      'frontend.txt': {
        type: 'file',
        name: 'frontend.txt',
        content: 'FRONTEND TECHNOLOGIES\n====================\n\nFrameworks & Libraries:\n- React (Advanced)\n- Vue.js (Intermediate)\n- Angular (Intermediate)\n- Astro (Intermediate)\n- Svelte (Beginner)\n\nLanguages:\n- JavaScript (Advanced)\n- TypeScript (Advanced)\n- HTML5 (Advanced)\n- CSS3 (Advanced)\n\nStyling:\n- Tailwind CSS\n- Sass/SCSS\n- Styled Components\n- CSS Modules\n- Bootstrap\n\nTools:\n- Webpack\n- Vite\n- Parcel\n- ESLint\n- Prettier'
      },
      'backend.txt': {
        type: 'file',
        name: 'backend.txt',
        content: 'BACKEND TECHNOLOGIES\n===================\n\nLanguages:\n- Node.js (Advanced)\n- Python (Intermediate)\n- Java (Intermediate)\n- Go (Beginner)\n\nFrameworks:\n- Express.js\n- Fastify\n- NestJS\n- Django\n- Flask\n- Spring Boot\n\nDatabases:\n- PostgreSQL\n- MongoDB\n- MySQL\n- Redis\n- SQLite\n\nCloud & DevOps:\n- AWS (EC2, S3, Lambda)\n- Docker\n- Kubernetes\n- CI/CD\n- GitHub Actions\n- Nginx'
      },
      'tools.txt': {
        type: 'file',
        name: 'tools.txt',
        content: 'DEVELOPMENT TOOLS\n=================\n\nIDE & Editors:\n- Visual Studio Code\n- WebStorm\n- Vim/Neovim\n\nVersion Control:\n- Git\n- GitHub\n- GitLab\n- Bitbucket\n\nTesting:\n- Jest\n- Cypress\n- Playwright\n- Vitest\n- Mocha\n\nDesign:\n- Figma\n- Adobe XD\n- Sketch\n\nProject Management:\n- Jira\n- Trello\n- Notion\n- Linear'
      }
    }
  }
};

export const getCurrentDirectory = (): FileSystem => {
  // For now, always return root directory
  // This can be enhanced later to support navigation
  return fileSystem;
};
