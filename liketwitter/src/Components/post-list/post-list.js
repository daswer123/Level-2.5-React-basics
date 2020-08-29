import React from "react";
import Post from "../post-list-item";

import "./post-list";

const PostList = () => {
    return (
        <ul className= "app-list list-group">
            <Post/>
            <Post/>
            <Post/>
        </ul>
    )
}

export default PostList;