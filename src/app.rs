use crate::terminal::Terminal;
use leptos::prelude::*;
use leptos_meta::{provide_meta_context, MetaTags, Stylesheet, Title};
use leptos_router::{
    components::{Route, Router, Routes},
    StaticSegment,
};

// DELETE the 'shell' function entirely. It is not used in CSR.

#[component]
pub fn App() -> impl IntoView {
    provide_meta_context();

    view! {
        // We still keep this to inject styles, but Trunk handles the heavy lifting
        <Title text="tikka"/>
        <Terminal/>

    }
}
