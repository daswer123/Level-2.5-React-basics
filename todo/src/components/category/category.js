import React from "react";
import {connect} from "react-redux";
import {ListItem,Button} from "@material-ui/core";
import {selectedCategory} from "../../actions/action";
import "./category.css"

const Category = ({label,color,name,selectedCategory,children,id}) => {
    console.log(id)
    return (
        <ListItem className="catogory-item">
            <span className="color-circle" style={{backgroundColor : color}}/>
            <Button  
            style={{fontWeight : "bold"}}
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