import React from "react";
import {Star, Bin,Like} from "../svg-icons/icons";
import "./post-list-item.css";



const Post = () =>{
    return (
        <li className="app-list-item d-flex justify-content-between">
            <p className= "app-list-item-label">Новость Новостей у новости</p>
            <p className= "d-flex justify-content-center align-items-center">
                <button className="btn-bin btn-sm" type= "button"><Bin/></button>
                <button className="btn-star btn-sm" type= "button"><Star/></button>
                <Like/>
            </p>
        </li>
    )
}

export default Post;