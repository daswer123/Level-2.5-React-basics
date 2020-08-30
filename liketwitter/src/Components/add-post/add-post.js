import React from "react";
import "./add-post.css";

const AddPost = ({addPost}) => {
    return (
        <form className= "bottom-panel d-flex">
            <input 
            type="text" 
            placeholder= "О чём вы сейчас думаете"
            className= "form-control new-post-label"
            />
            <button type= "button" onClick={() => addPost("Hello")}
            className="btn btn-outline-success"
            >Добавить</button>
        </form>
    )
}

export default AddPost;