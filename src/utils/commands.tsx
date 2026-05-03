import React from 'react';
import { getCurrentDirectory, fileSystem } from './fileSystem';

export const executeCommand = (command: string): string | React.ReactNode => {
  const trimmedCommand = command.trim();
  const [cmd, ...args] = trimmedCommand.split(' ');

  switch (cmd.toLowerCase()) {
    case 'help':
      return `Available commands:

  help          Show this help message
  clear         Clear the terminal
  ls            List directory contents
  cat <file>    Display file contents
  whoami        Display user information
  pwd           Show current directory
  echo <text>   Display text
  
Try 'ls' to see available files and directories.
Use 'cat <filename>' to read file contents.`;

    case 'clear':
      return 'CLEAR_TERMINAL'; // Special flag for clearing

    case 'whoami':
      return 'visitor@portfolio - Welcome to my interactive terminal portfolio!\n\nYou are currently browsing my professional portfolio in terminal mode.\nFeel free to explore the file system to learn more about my work and experience.';

    case 'pwd':
      return '/home/portfolio';

    case 'ls':
      const currentDir = getCurrentDirectory();
      const items = Object.values(currentDir)
        .map(item => {
          const icon = item.type === 'directory' ? '📁' : '📄';
          const color = item.type === 'directory' ? 'text-[#C2D94C]' : 'text-[#B3B1AD]';
          return `<span class="${color}">${icon} ${item.name}</span>`;
        })
        .join('   ');
      return <div dangerouslySetInnerHTML={{ __html: items }} />;

    case 'cat':
      if (args.length === 0) {
        return <span className="text-[#F07178]">cat: missing file operand</span>;
      }
      
      const fileName = args[0];
      const file = fileSystem[fileName];
      
      if (!file) {
        return <span className="text-[#F07178]">cat: {fileName}: No such file or directory</span>;
      }
      
      if (file.type === 'directory') {
        return <span className="text-[#F07178]">cat: {fileName}: Is a directory</span>;
      }
      
      return file.content || 'File is empty';

    case 'echo':
      if (args.length === 0) {
        return '';
      }
      return args.join(' ');

    case 'date':
      return new Date().toString();

    case '':
      return ''; // Empty command

    default:
      return <span className="text-[#F07178]">bash: {cmd}: command not found</span>;
  }
};
