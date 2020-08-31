import React from "react";
import "./app-title.css";

const Title= ({postAmount,likedPost,}) => {
    return (
    <section className= "app-header d-flex">
        <h1>Danil</h1>
    <span>{likedPost} Записи понравилось из {postAmount}</span>
    </section>)
    
}

export default Title;