import React from "react";
import {ListItem,Button} from "@material-ui/core";

const Category = ({label,color,id}) => {
    return (
        <ListItem style={{color : color}}>
            <Button>{label}</Button>
        </ListItem>
    )
}

export default Category