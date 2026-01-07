use leptos::prelude::*;
use terminal_portfolio::app::App;

pub fn main() {
    // This tells Rust: "Find the <body> tag and attach the App component to it"
    console_error_panic_hook::set_once();
    mount_to_body(App);
}
