// src/terminal.rs
use leptos::ev;
use leptos::html;
use leptos::prelude::*;
#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;
#[cfg(target_arch = "wasm32")]
use wasm_bindgen::JsCast;

//TODO: add flexibility for phones, tablets etc.
//TODO: add scrollbar color
//FIX: change the app icon

#[component]
pub fn Terminal() -> impl IntoView {
    // 1. REFS: Handles for the elements we want to touch
    let scroll_container: NodeRef<html::Div> = NodeRef::new();
    let github_link: NodeRef<html::A> = NodeRef::new();
    let linkedin_link: NodeRef<html::A> = NodeRef::new();
    let mail_link: NodeRef<html::A> = NodeRef::new();
    let cv_link: NodeRef<html::A> = NodeRef::new();

    let dotfiles_link: NodeRef<html::A> = NodeRef::new();
    let catt_link: NodeRef<html::A> = NodeRef::new();
    let house_backend_link: NodeRef<html::A> = NodeRef::new();
    let terminal_ed_link: NodeRef<html::A> = NodeRef::new();

    // 2. STATE: Simple buffer for keys
    let (buffer, set_buffer) = signal("".to_string());
    #[allow(unused_variables)]
    let timer_handle = StoredValue::new(None::<i32>);

    Effect::new(move |_| {
        let handle = window_event_listener(ev::keydown, move |ev: web_sys::KeyboardEvent| {
            let key = ev.key();
            #[cfg(target_arch = "wasm32")]
            {
                // 1. Clear previous timer
                if let Some(handle) = timer_handle.get_value() {
                    window().clear_timeout_with_handle(handle);
                }

                // 2. Create the Closure (Only exists in WASM)
                let closure = Closure::wrap(Box::new(move || {
                    set_buffer.set("".to_string());
                }) as Box<dyn FnMut()>);

                // 3. Set Timeout
                let new_handle = window()
                    .set_timeout_with_callback_and_timeout_and_arguments_0(
                        closure.as_ref().unchecked_ref(),
                        1000,
                    )
                    .unwrap_or(0);

                closure.forget();
                timer_handle.set_value(Some(new_handle));
            }

            // SIMPLIFIED BUFFER LOGIC
            set_buffer.update(|b| {
                b.push_str(&key);
                // Keep only the last 2 keys (we only care about "ln", "gh", etc.)
                if b.len() > 2 {
                    *b = b.chars().skip(1).collect();
                }
            });

            let cmd = buffer.get(); // e.g., "gh"

            // 3. ACTION: Check buffer -> Click existing link
            if cmd.ends_with("gh") {
                // "Go Github": Rust clicks the link for you!
                if let Some(a) = github_link.get() {
                    a.click();
                }
                set_buffer.set("".to_string());
            } else if cmd.ends_with("ln") {
                if let Some(a) = linkedin_link.get() {
                    a.click();
                }
                set_buffer.set("".to_string());
            } else if cmd.ends_with("em") {
                if let Some(a) = mail_link.get() {
                    a.click();
                }
                set_buffer.set("".to_string());
            } else if cmd.ends_with("cv") {
                if let Some(a) = cv_link.get() {
                    a.click();
                }
                set_buffer.set("".to_string());
            } else if cmd.ends_with("p1") {
                if let Some(a) = dotfiles_link.get() {
                    a.click();
                }
                set_buffer.set("".to_string());
            } else if cmd.ends_with("p2") {
                if let Some(a) = catt_link.get() {
                    a.click();
                }
                set_buffer.set("".to_string());
            } else if cmd.ends_with("p3") {
                if let Some(a) = house_backend_link.get() {
                    a.click();
                }
                set_buffer.set("".to_string());
            } else if cmd.ends_with("p4") {
                if let Some(a) = terminal_ed_link.get() {
                    a.click();
                }
                set_buffer.set("".to_string());
            }

            // Scrolling logic (unchanged)
            if let Some(div) = scroll_container.get() {
                match key.as_str() {
                    "j" => {
                        let _ = div.scroll_by_with_x_and_y(0.0, 50.0);
                    }
                    "k" => {
                        let _ = div.scroll_by_with_x_and_y(0.0, -50.0);
                    }
                    // "g" => { if cmd.ends_with("gg") { div.set_scroll_top(0); set_buffer.set("".to_string()); } }
                    // "G" => { div.set_scroll_top(div.scroll_height()); }
                    _ => {}
                }
            }
        });
        on_cleanup(move || handle.remove());
    });
    view! {
    // 1. OUTER WALLPAPER (Centers the window)
    <div class="h-screen w-screen bg-tailwind-wall flex items-center justify-center">

        // 2. WINDOW FRAME (The "Physical" Terminal Window)
    <div class="w-[70vw] h-[80vh] bg-tailwind-term rounded-xl shadow-2xl border border-gray-900 flex flex-col overflow-hidden">

            // 3. TITLE BAR (Like Ghostty/Alacritty)
            <div class="bg-cool-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-800 shrink-0">
                // Title
                <div class="text-tailwind-text text-xl font-mono select-none">"press j/k to move"</div>
            </div>

            // 4. SCROLLABLE CONTENT AREA
            <div node_ref=scroll_container class="flex-1 overflow-y-auto p-4 font-mono text-2xl scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">

                // --- BLOCK 1: NEOFETCH ---
                <div class="mb-8">
                    <div class="pb-2">
                        <span class="text-tailwind-accent">"tikka@Portfolio "</span>
                        <span class="text-tailwind-pink">"~ "</span>
                        <span class="text-tailwind-accent">"$ "</span>
                        <span class="text-tailwind-pink">"fastfetch"</span>
                    </div>

                    <div class="flex flex-row items-start gap-8">
                        <span class="text-tailwind-accent">
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
About: Emre Tolga Kaptan
Location: Wroclaw, Poland
OS: Arch (btw)
Host: Leptos/Axum (SSR)
Shell: Bash
WM: Hyprland (Wayland)
Terminal: Ghostty
Editor: Neovim
Tmux: Zellij (no pun intended)
Cloud: Docker, AWS, Azure
Stack: Rust, Go, TypeScript, Node.js, React
Cats: Love them!"#}
                                    </pre>
                                </span>
                            </div>
                        </div>

                        // --- BLOCK 2: BAT ME.MD ---
                        <div class="mb-8">
                            <div class="pb-2">
                                <span class="text-tailwind-accent">"tikka@Portfolio "</span>
                                <span class="text-tailwind-pink">"~ "</span>
                                <span class="text-tailwind-accent">"$ "</span>
                                <span class="text-tailwind-pink">"bat me.md"</span>
                            </div>

                            <div class="flex flex-row items-start gap-4">
                                // Line Numbers (Darker, non-selectable)
                                <span class="text-tailwind-pink select-none text-right border-r border-gray-800 pr-4">
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
                                <span class="text-tailwind-text whitespace-pre-wrap">
                                    "Hi, I'm Emre. Software Engineering student in Wroclaw, PL.\n"
                                    "This website is written in rust, leptos. (bc why not?)\n\n"
                                    "I am a Full-stack web developer focused on backend.\n"
                                    "I mostly use go, node-express for backend and react for frontend.\n"
                                    "I live in the terminal. I love building things that work smoothly under the hood whether that's APIs, DB structures, or CLI tools. My focus is always on understanding system internals and optimizing performance.\n\n"
                                    "Here are my socials:\n"
                                    "  - " <a node_ref=github_link href="https://github.com/Tikkaaa3" target="_blank" class="text-tailwind-accent hover:underline">"github (gh)"</a> "\n"
                                    "  - " <a node_ref=linkedin_link href="https://www.linkedin.com/in/emre-t-kaptan/" target="_blank" class="text-tailwind-accent hover:underline">"linkedin (ln)"</a> "\n"
                                    "  - " <a node_ref=mail_link href="mailto:tikkaaa3@gmail.com" class="text-tailwind-accent hover:underline">"e-mail (em)"</a> "\n"
                                    "  - " <a node_ref=cv_link href="../public/cv.pdf" download="cv.pdf" class="text-tailwind-accent hover:underline">"cv (cv)"</a>
                                </span>
                            </div>
                        </div>

                        // --- BLOCK 3: BAT PROJECTS.MD ---
                        <div class="mb-8">
                            <div class="pb-2">
                                <span class="text-tailwind-accent">"tikka@Portfolio "</span>
                                <span class="text-tailwind-pink">"~ "</span>
                                <span class="text-tailwind-accent">"$ "</span>
                                <span class="text-tailwind-pink">"bat projects.md"</span>
                            </div>

                            <div class="flex flex-row items-start gap-4">
                                // Line Numbers (Darker, non-selectable)
                                <span class="text-tailwind-pink select-none text-right border-r border-gray-800 pr-4">
                                    <pre>
    {r#" 1
 2
 3
 4
 5
 6
 7
"#}
                                    </pre>
                                </span>

                                // Content
                                <span class="text-tailwind-text whitespace-pre-wrap">
                                    "My projects:\n"
                                    "  * " <a node_ref=dotfiles_link href="https://github.com/Tikkaaa3/dotfiles" target="_blank" class="text-tailwind-accent hover:underline">"Dotfiles (p1)"</a> "\n"
                                    "  * " <a node_ref=catt_link href="https://github.com/Tikkaaa3/catt" target="_blank" class="text-tailwind-accent hover:underline">"Catt (p2)"</a> "\n"
                                    "  * " <a node_ref=house_backend_link href="https://github.com/Tikkaaa3/HouseAppBackend" target="_blank" class="text-tailwind-accent hover:underline">"House Applicaton Backend (p3)"</a> "\n"
                                    "  * " <a node_ref=terminal_ed_link href="https://github.com/Tikkaaa3/t-ed" target="_blank" class="text-tailwind-accent hover:underline">"Terminal Education Website (p4)"</a> "\n"
                                </span>
                            </div>
                        </div>

                        // --- BLOCK 4: ACTIVE PROMPT (Blinking Cursor) ---
                        <div>
                             <span class="text-tailwind-accent">"tikka@PhoneMicrowave "</span>
                             <span class="text-tailwind-pink">"~ "</span>
                             <span class="text-tailwind-accent">"$ "</span>
                             <span class="animate-pulse bg-gray-500 text-black px-0.5">"_"</span>
                        </div>

                    </div>

                        <div class="bg-gray-900 px-4 py-1 border-t border-gray-800 flex justify-between items-center text-xs font-mono text-gray-500 select-none shrink-0">
                        // Left side: Mode
                        <div class="font-bold text-xl text-tailwind-accent">"NORMAL"</div>

                        // Right side: Info + Key Buffer
                        <div class="flex gap-4 text-xl">
                            <span>"utf-8"</span>
                            <span>"rust"</span>
                            <span class="text-tailwind-pink font-bold">
                                // This reads your signal and shows the last keys typed
                                "CMD: " {move || buffer.get()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        }
}
