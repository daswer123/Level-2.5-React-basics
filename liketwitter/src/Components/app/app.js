import React from "react";
import Title from "../app-title";
import Search from "../app-search";
import Filter from "../filter";
import PostList from "../post-list";
import AddPost from   "../add-post";

import "./app.css";

const App = () =>{
    return (
        <main className="app">
            <Title/>
            <section className= "search-panel">
                <Search/>
                <Filter/>
            </section>
            <PostList/>
            <AddPost/>
        </main>
    )
}

export default App