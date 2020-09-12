import React,{Component} from "react";
import {List,Button} from "@material-ui/core";
import {connect} from "react-redux";
import {categoryLoaded} from "../../actions/action";
import withTaskContext from "../hoc";
import Category from "../category"

class CategoryList extends Component{
    state = {
        activeCategory : "",
    }

    componentDidMount(){
        const {categoryLoaded,TodoInfo} = this.props;
        const Todo = new TodoInfo();
        Todo.getAllCategories()
        .then(result => categoryLoaded(result))
    }

    render() {
        const {categories} = this.props
        console.log(categories)
        return(
            <List>
                <Button color="primary">All task (don't work)</Button>
                {categories.map(category => {
                    return <Category label={category.name} color={category.color} key={category.id}/>
                })}
            </List>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories : state.categories,
    }
}

const mapDispatchToProps = {
    categoryLoaded,
}

export default withTaskContext()(connect(mapStateToProps,mapDispatchToProps)(CategoryList))