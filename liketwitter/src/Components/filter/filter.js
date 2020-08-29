import React from "react";
import "./filter.css";

const Filter = () => {
    return(
    <p className= "btn-group filter d-flex">
        <button type= "button">Всё</button>
        <button type= "button">Понравилось</button>
    </p>
    )
}

export default Filter