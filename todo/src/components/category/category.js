import React from "react";
import {connect} from "react-redux";
import {ListItem,Button} from "@material-ui/core";
import {selectedCategory} from "../../actions/action";

const Category = ({label,color,name,selectedCategory,children}) => {
    return (
        <ListItem>
            <Button  
            style={{color : color}}
            onClick={() => selectedCategory(label) }
            >{name}</Button>
            {children}
        </ListItem>
    )
}

const mapStateToProps = (state) =>{
    return {}
}

const mapDispatchToProps = {
    selectedCategory,
}

export default connect(mapStateToProps,mapDispatchToProps)(Category)