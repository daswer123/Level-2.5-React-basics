import React from "react";
import Post from "../post-list-item";

import "./post-list";

const PostList = ({posts,deletePost,onLike,onFavirite}) => {

    const elements = posts.map((item) =>{
        const {label,important,id,liked} = item;
        if(!label)
        {
            return;
        } else {
            return (
              <Post 
              label = {label} 
              important = {important} 
              liked = {liked}
              deletePost = { () => {deletePost(id)}}
              onLike = {() =>{onLike(id)}}
              onFavirite = {() =>{onFavirite(id)}}
              />
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