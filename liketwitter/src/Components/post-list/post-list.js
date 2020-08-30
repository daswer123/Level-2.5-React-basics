import React from "react";
import Post from "../post-list-item";

import "./post-list";

const PostList = ({posts,deletePost}) => {

    const elements = posts.map((item) =>{
        const {label,important,id} = item;
        if(!label){
            return;
        } else {
            return (
              <Post label = {label} important = {important} deletePost = { () => {deletePost(id)} }/>
        )
        }
    });
    
    return (
        <ul className= "app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;