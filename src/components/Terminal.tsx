import React, { useState, useRef, useEffect } from 'react';
import { CommandHistory } from '../types/terminal';
import { executeCommand } from '../utils/commands';

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: '',
      output: (
        <div className="mb-4">
          <div className="text-[#FFB454] text-lg font-semibold mb-2">
            ╭─────────────────────────────────────────────╮
          </div>
          <div className="text-[#FFB454] text-lg font-semibold mb-2">
            │  Welcome to my Interactive Portfolio!       │
          </div>
          <div className="text-[#FFB454] text-lg font-semibold mb-4">
            ╰─────────────────────────────────────────────╯
          </div>
          <div className="text-[#B3B1AD] mb-2">
            Type <span className="text-[#C2D94C] font-semibold">help</span> to see available commands.
          </div>
          <div className="text-[#B3B1AD]">
            Try <span className="text-[#C2D94C] font-semibold">ls</span> to explore the file system!
          </div>
        </div>
      )
    }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on mount and when clicked
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = currentInput.trim();
      const output = executeCommand(command);
      
      if (output === 'CLEAR_TERMINAL') {
        setHistory([]);
      } else {
        setHistory(prev => [...prev, { command, output }]);
      }
      
      setCurrentInput('');
    }
  };

  const renderPrompt = () => (
    <span>
      <span className="text-[#FFB454]">visitor@portfolio</span>
      <span className="text-[#B3B1AD]">:</span>
      <span className="text-[#C2D94C]">~</span>
      <span className="text-[#B3B1AD]">$ </span>
    </span>
  );

  return (
    <div 
      ref={terminalRef}
      className="h-screen w-full bg-[#0A0E14] text-[#B3B1AD] font-mono p-6 overflow-y-auto cursor-text"
      onClick={handleTerminalClick}
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {/* Hide scrollbar for webkit browsers */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      {/* Command History */}
      {history.map((entry, index) => (
        <div key={index} className="mb-2">
          {entry.command && (
            <div className="flex">
              {renderPrompt()}
              <span>{entry.command}</span>
            </div>
          )}
          {entry.output && (
            <div className="whitespace-pre-wrap break-words mb-2">
              {entry.output}
            </div>
          )}
        </div>
      ))}

      {/* Current Input Line */}
      <div className="flex">
        {renderPrompt()}
        <div className="flex-1 relative">
          <span>{currentInput}</span>
          {showCursor && (
            <span className="bg-[#B3B1AD] text-[#0A0E14] ml-0">█</span>
          )}
        </div>
      </div>

      {/* Hidden Input Field */}
      <input
        ref={inputRef}
        type="text"
        value={currentInput}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="absolute opacity-0 pointer-events-none"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />
    </div>
  );
};

export default Terminal;
