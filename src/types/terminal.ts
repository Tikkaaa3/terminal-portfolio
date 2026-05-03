import type React from 'react';

export type CommandHistory = {
  command: string;
  output: string | React.ReactNode;
}

export type FileSystemNode = {
  type: 'file' | 'directory';
  name: string;
  content?: string;
  children?: { [key: string]: FileSystemNode };
}

export type FileSystem = {
  [key: string]: FileSystemNode;
}
