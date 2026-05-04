import React from 'react';
import { getCurrentDirectory, navigateToDirectory, getFileFromPath, getCurrentPathString, resolveFilePath } from './fileSystem';

export const executeCommand = (command: string): string | React.ReactNode => {
  const trimmedCommand = command.trim();
  const [cmd, ...args] = trimmedCommand.split(' ');

  switch (cmd.toLowerCase()) {
    case 'help':
      return 'TOGGLE_HELP';

    case 'clear':
      return 'CLEAR_TERMINAL'; // Special flag for clearing

    case 'whoami':
      return 'visitor@portfolio - Welcome to my interactive terminal portfolio!\n\nYou are currently browsing my professional portfolio in terminal mode.\nFeel free to explore the file system to learn more about my work and experience.';

    case 'pwd':
      return getCurrentPathString();

    case 'cd':
      if (args.length === 0) {
        // cd with no args goes to home
        const result = navigateToDirectory('~');
        return result.success ? '' : result.message || '';
      }
      
      const dirName = args[0];
      const result = navigateToDirectory(dirName);
      
      if (!result.success) {
        return <span className="text-[#F07178]">{result.message}</span>;
      }
      
      return ''; // Success, no output

    case 'ls':
      let targetDir;
      
      if (args.length === 0) {
        // ls with no args - list current directory
        targetDir = getCurrentDirectory();
      } else {
        // ls <directory> - list specific directory
        let dirName = args[0];
        
        // Remove trailing slash if present
        dirName = dirName.endsWith('/') ? dirName.slice(0, -1) : dirName;
        
        const target = getFileFromPath(dirName);
        
        if (!target) {
          return <span className="text-[#F07178]">ls: cannot access '{dirName}': No such file or directory</span>;
        }
        
        if (target.type !== 'directory') {
          return <span className="text-[#F07178]">ls: {dirName}: Not a directory</span>;
        }
        
        targetDir = target.children || {};
      }
      
      const items = Object.values(targetDir)
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
      
      const filePath = args[0];
      
      // Check if path contains / (e.g., projects/t-learn.txt)
      let file;
      if (filePath.includes('/')) {
        const result = resolveFilePath(filePath);
        if (result.error) {
          return <span className="text-[#F07178]">cat: {result.error}</span>;
        }
        file = result.node;
      } else {
        // Simple filename in current directory
        file = getFileFromPath(filePath);
        if (!file) {
          return <span className="text-[#F07178]">cat: {filePath}: No such file or directory</span>;
        }
      }
      
      if (!file) {
        return <span className="text-[#F07178]">cat: {filePath}: No such file or directory</span>;
      }
      
      if (file.type === 'directory') {
        return <span className="text-[#F07178]">cat: {filePath}: Is a directory</span>;
      }
      
      // Render content with HTML if it contains HTML tags
      const content = file.content || 'File is empty';
      if (content.includes('<a ')) {
        return <div dangerouslySetInnerHTML={{ __html: content }} />;
      }
      
      return content;

    case 'cv':
    case 'resume':
      // Trigger CV download
      return 'DOWNLOAD_CV';

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
