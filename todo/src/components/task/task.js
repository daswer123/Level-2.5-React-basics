import React from "react";
import {ListItem} from "@material-ui/core";


const Task = ({label,category,id}) => {
    return (
        <ListItem>
            {label}
        </ListItem>
    )
}
export default Task;
