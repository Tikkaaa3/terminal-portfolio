// src/terminal.rs
use leptos::prelude::*;
//FIX: socials part is not working, elements are inside the string.
//TODO: adjust the colors to be cool but not tiring.
//TODO: press jk to move.
//TODO: add bottom line to give constant feedback of which key is pressed.
//TODO: write more detailed information about yourself change the half mock data.

#[component]
pub fn Terminal() -> impl IntoView {
    view! {
// 1. OUTER WALLPAPER (Centers the window)
<div class="h-screen w-screen bg-black flex items-center justify-center">
    
    // 2. WINDOW FRAME (The "Physical" Terminal Window)
<div class="w-[95vw] h-[90vh] bg-neutral-900 rounded-xl shadow-2xl border border-gray-900 flex flex-col overflow-hidden">
        
        // 3. TITLE BAR (Like Ghostty/Alacritty)
        <div class="bg-cool-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-800 shrink-0">
            // Title
            <div class="text-gray-400 text-xl font-mono select-none">"press j/k to move"</div>
        </div>

        // 4. SCROLLABLE CONTENT AREA
        <div class="flex-1 overflow-y-auto p-4 font-mono text-2xl scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            
            // --- BLOCK 1: NEOFETCH ---
            <div class="mb-8">
                <div class="pb-2">
                    <span class="text-blue-700">"tikka@Portfolio "</span>
                    <span class="text-rose-600">"~ "</span>
                    <span class="text-blue-700">"$ "</span>
                    <span class="text-rose-600">"fastfetch"</span>
                </div>

                <div class="flex flex-row items-start gap-8">
                    <span class="text-blue-700">
                        <pre>
{r#"                    -`                     
                   .o+`                    
                  `ooo/                    
                 `+oooo:                   
                `+oooooo:                  
                -+oooooo+:                 
              `/:-:++oooo+:                
             `/++++/+++++++:               
            `/++++++++++++++:              
           `/+++ooooooooooooo/`            
          ./ooosssso++osssssso+`           
         .oossssso-````/ossssss+`          
        -osssssso.      :ssssssso.         
       :osssssss/        osssso+++.        
      /ossssssss/        +ssssooo/-        
    `/ossssso+/:-        -:/+osssso+-      
   `+sso+:-`                 `.-/+oso:     
  `++:.                           `-/+/    
  .`                                 `/    
                             "#}
                                </pre>
                            </span>
                            <span class="text-white">
                                <pre>
{r#"tikka@PhoneMicrowave
--------------------
User: Emre Tolga Kaptan
OS: Arch (btw)
Host: Leptos/Axum (SSR)
Kernel: Linux 6.18.2-arch2-1
Uptime: 4 hours, 31 mins
Packages: 808 (pacman)
Shell: bash
WM: Hyprland (Wayland)
Terminal: ghostty
Editor: neovim
Terminal multiplexer: zellij
Fav Langs: rust, go
Fav Animal: cat"#}
                                </pre>
                            </span>
                        </div>
                    </div>

                    // --- BLOCK 2: BAT ME.MD ---
                    <div class="mb-8">
                        <div class="pb-2">
                            <span class="text-blue-700">"tikka@Portfolio "</span>
                            <span class="text-rose-600">"~ "</span>
                            <span class="text-blue-700">"$ "</span>
                            <span class="text-rose-600">"bat me.md"</span>
                        </div>

                        <div class="flex flex-row items-start gap-4">
                            // Line Numbers (Darker, non-selectable)
                            <span class="text-rose-600 select-none text-right border-r border-gray-800 pr-4">
                                <pre>
{r#" 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15"#}
                                </pre>
                            </span>
                            
                            // Content
                            <span class="text-white">
                                <pre>
{r#"Hi I'm Emre; living in Wroclaw, Poland.
This website is written in rust, leptos. (bc why not?)

I am a Full-stack web developer leaning towards backend.
I mostly use go, node-express for backend and react for frontend.
I am interested in Distributed Systems and Cloud Native tech.

Here are my socials:
  - <a href="[https://github.com](https://github.com)" class="text-blue-400 hover:underline">github</a>
  - <a href="[https://linkedin.com](https://linkedin.com)" class="text-blue-400 hover:underline">linkedin</a>
  - <a href="mailto:email@example.com" class="text-blue-400 hover:underline">e-mail</a>
  - <a href="/cv.pdf" class="text-blue-400 hover:underline">cv</a>"#}
                                </pre>
                            </span>
                        </div>
                    </div>

                    // --- BLOCK 3: ACTIVE PROMPT (Blinking Cursor) ---
                    <div>
                         <span class="text-blue-700">"tikka@PhoneMicrowave "</span>
                         <span class="text-rose-600">"~ "</span>
                         <span class="text-blue-700">"$ "</span>
                         <span class="animate-pulse bg-gray-500 text-black px-1">"_"</span>
                    </div>

                </div>
            </div>
        </div>
    }
}
