import React from "react";


const ColorItem = ({color,onActiveColor,className}) => {
    return (
        <button className={className} onClick={() => onActiveColor(color)} type="button" style={{backgroundColor : color}}></button>
    )
}

export default ColorItem