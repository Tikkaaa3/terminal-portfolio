import { ReactNode } from 'react';

export interface CommandHistory {
  command: string;
  output: string | ReactNode;
}

export interface FileSystemNode {
  type: 'file' | 'directory';
  name: string;
  content?: string;
  children?: { [key: string]: FileSystemNode };
}

export interface FileSystem {
  [key: string]: FileSystemNode;
}
