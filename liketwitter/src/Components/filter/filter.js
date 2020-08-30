import React from "react";
import "./filter.css";

const Filter = () => {
    return(
    <p className= "btn-group filter d-flex">
        <button className= "filter-btn btn btn-primary" type= "button">Всё</button>
        <button className= "filter-btn btn btn-outline-primary" type= "button">Понравилось</button>
    </p>
    )
}

export default Filter