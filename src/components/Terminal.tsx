import React, { useState, useRef, useEffect } from "react";
import type { CommandHistory } from "../types/terminal";
import { executeCommand } from "../utils/commands.tsx";
import { getCurrentPath, getCurrentDirectory } from "../utils/fileSystem";

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "",
      output: (
        <div className="mb-4">
          <div className="text-[#FFB454] text-lg md:text-xl font-bold mb-1">
            ╭────────────────────────────────────────────────────╮
          </div>
          <div className="text-[#FFB454] text-lg md:text-xl font-bold mb-1">
            │  Emre Tolga Kaptan - Backend Developer           │
          </div>
          <div className="text-[#FFB454] text-lg md:text-xl font-bold mb-4">
            ╰────────────────────────────────────────────────────╯
          </div>

          <div className="text-[#B3B1AD] text-xs md:text-sm mb-2">
            📂 Type <span className="text-[#C2D94C] font-semibold">help</span> to toggle help panel
          </div>
          <div className="text-[#B3B1AD] text-xs md:text-sm mb-2">
            📁 Type <span className="text-[#C2D94C] font-semibold">ls</span> to explore files
          </div>
          <div className="text-[#B3B1AD] text-xs md:text-sm">
            📄 Type <span className="text-[#C2D94C] font-semibold">cv</span> to download resume
          </div>
        </div>
      ),
    },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [, setCurrentPath] = useState<string[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [showHelp, setShowHelp] = useState(true);
  const [srAnnouncement, setSrAnnouncement] = useState<string>('');

  const announceToScreenReader = (message: string) => {
    setSrAnnouncement(message);
    // Clear after a short delay to avoid clutter
    setTimeout(() => setSrAnnouncement(''), 1000);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
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

  const handleTerminalClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.focus();
      // Position cursor at end of input
      const length = currentInput.length;
      inputRef.current.setSelectionRange(length, length);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(e.target.value);
  };

  const handleTabCompletion = () => {
    const parts = currentInput.trim().split(' ');
    const command = parts[0];
    const currentArg = parts[parts.length - 1] || '';

    // Only autocomplete for commands that take file/directory arguments
    if (['cat', 'cd', 'ls'].includes(command)) {
      const currentDir = getCurrentDirectory();
      const matches = Object.keys(currentDir).filter(name => 
        name.startsWith(currentArg)
      );

      if (matches.length === 1) {
        // Single match - complete it
        const completed = matches[0];
        const newInput = parts.slice(0, -1).concat(completed).join(' ');
        setCurrentInput(command === 'cat' || command === 'ls' ? newInput + ' ' : newInput);
      } else if (matches.length > 1) {
        // Multiple matches - show them
        const matchList = matches.join('   ');
        const path = getCurrentPath();
        const promptPath = path.length === 0 ? '~' : `~/${path.join('/')}`;
        setHistory(prev => [...prev, { 
          command: currentInput, 
          output: matchList, 
          promptPath 
        }]);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      handleTabCompletion();
      return;
    }
    
    if (e.key === "Enter") {
      e.preventDefault();
      const command = currentInput.trim();

      // Capture the current path BEFORE executing the command
      const path = getCurrentPath();
      const promptPath = path.length === 0 ? "~" : `~/${path.join("/")}`;

      const output = executeCommand(command);

      if (output === "CLEAR_TERMINAL") {
        setHistory([]);
      } else if (output === "TOGGLE_HELP") {
        const newHelpState = !showHelp;
        setShowHelp(newHelpState);
        const helpMessage = newHelpState ? "Help panel: ON" : "Help panel: OFF";
        setHistory((prev) => [
          ...prev,
          { command, output: helpMessage, promptPath },
        ]);
      } else if (output === "DOWNLOAD_CV") {
        // Trigger CV download
        const link = document.createElement("a");
        link.href = "/cv.pdf"; // You'll need to add this file to public folder
        link.download = "Emre_Tolga_Kaptan_CV.pdf";
        link.click();
        setHistory((prev) => [
          ...prev,
          { command, output: "Downloading CV...", promptPath },
        ]);
      } else {
        setHistory((prev) => [...prev, { command, output, promptPath }]);
        // Announce command result to screen readers
        if (typeof output === 'string') {
          announceToScreenReader(`Command ${command} executed. Output: ${output.substring(0, 100)}...`);
        }
      }

      // Add command to history (if not empty)
      if (command) {
        setCommandHistory((prev) => [...prev, command]);
        setHistoryIndex(-1); // Reset history index
      }

      // Update current path state to trigger re-render of prompt
      setCurrentPath(getCurrentPath());

      setCurrentInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;

      const newIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(newIndex);
      setCurrentInput(commandHistory[newIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;

      const newIndex = historyIndex + 1;

      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setCurrentInput("");
      } else {
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    }
  };

  const renderPrompt = () => {
    const path = getCurrentPath();
    const promptPath = path.length === 0 ? "~" : `~/${path.join("/")}`;

    return (
      <span>
        <span className="text-[#FFB454]">visitor@portfolio</span>
        <span className="text-[#B3B1AD]">:</span>
        <span className="text-[#C2D94C]">{promptPath}</span>
        <span className="text-[#B3B1AD]">$ </span>
      </span>
    );
  };

  return (
    <div className="relative h-screen w-full bg-[#0A0E14]">
      {/* Help Panel */}
      {showHelp && (
        <div className="fixed top-4 right-4 bg-[#0F1419] border-2 border-[#FFB454] rounded-lg p-4 md:p-6 shadow-2xl z-50 w-80 md:w-96 max-w-[90vw]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[#FFB454] font-bold text-xl">📚 Quick Help</h3>
            <button
              onClick={() => setShowHelp(false)}
              className="text-[#F07178] hover:text-[#FF3333] font-bold text-xl"
            >
              ✕
            </button>
          </div>
          <div className="text-[#B3B1AD] space-y-3">
            <div className="text-base">
              <span className="text-[#C2D94C] font-semibold">help</span> -
              Toggle ON/OFF help panel
            </div>
            <div className="text-base">
              <span className="text-[#C2D94C] font-semibold">ls [dir]</span> -
              List files & directories
            </div>
            <div className="text-base">
              <span className="text-[#C2D94C] font-semibold">
                cd &lt;dir&gt;
              </span>{" "}
              - Change directory
            </div>
            <div className="text-base">
              <span className="text-[#C2D94C] font-semibold">
                cat &lt;file&gt;
              </span>{" "}
              - View file contents
            </div>
            <div className="text-base">
              <span className="text-[#C2D94C] font-semibold">cv</span> -
              Download resume PDF
            </div>
            <div className="text-base">
              <span className="text-[#C2D94C] font-semibold">clear</span> -
              Clear terminal
            </div>
            <div className="text-base">
              <span className="text-[#C2D94C] font-semibold">pwd</span> - Show
              current path
            </div>
            <div className="pt-3 border-t-2 border-[#2D3640] mt-3">
              <div className="text-[#39BAE6] font-semibold mb-2 text-lg">
                🚀 Quick Start:
              </div>
              <div className="ml-3 text-base space-y-1">
                <div>
                  1. Try{" "}
                  <span className="text-[#C2D94C] font-semibold">
                    cat about
                  </span>
                </div>
                <div>
                  2. Try{" "}
                  <span className="text-[#C2D94C] font-semibold">
                    ls projects
                  </span>
                </div>
                <div>
                  3. Try{" "}
                  <span className="text-[#C2D94C] font-semibold">
                    cat contact
                  </span>
                </div>
                <div>
                  4. Use{" "}
                  <span className="text-[#C2D94C] font-semibold">↑/↓</span> for
                  command history
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        ref={terminalRef}
        className="h-screen w-full text-[#B3B1AD] font-mono p-3 md:p-6 overflow-y-auto cursor-text text-sm md:text-base"
        onClick={handleTerminalClick}
        role="application"
        aria-label="Interactive terminal portfolio"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {/* Hide scrollbar for webkit browsers */}
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
          input {
            background: transparent !important;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            -webkit-appearance: none !important;
            -moz-appearance: none !important;
            appearance: none !important;
          }
          input:focus {
            outline: none !important;
            box-shadow: none !important;
          }
        `}</style>

        {/* Screen Reader Announcements */}
        <div 
          aria-live="polite" 
          aria-atomic="true"
          className="sr-only"
        >
          {srAnnouncement}
        </div>

        {/* Command History */}
        {history.map((entry, index) => (
          <div key={index} className="mb-2">
            {entry.command && (
              <div className="flex">
                <span>
                  <span className="text-[#FFB454]">visitor@portfolio</span>
                  <span className="text-[#B3B1AD]">:</span>
                  <span className="text-[#C2D94C]">
                    {entry.promptPath || "~"}
                  </span>
                  <span className="text-[#B3B1AD]">$ </span>
                </span>
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
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-[#B3B1AD] font-mono caret-transparent w-full"
              style={{
                fontSize: 'inherit',
                fontFamily: 'inherit',
                lineHeight: 'inherit',
                padding: 0,
                margin: 0,
              }}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              aria-label="Terminal command input"
            />
            {showCursor && (
              <span 
                className="bg-[#B3B1AD] text-[#0A0E14] absolute pointer-events-none"
                style={{
                  left: `${currentInput.length}ch`,
                  top: 0,
                }}
                aria-hidden="true"
              >
                █
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
