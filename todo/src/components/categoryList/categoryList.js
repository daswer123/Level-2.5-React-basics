import React,{Component} from "react";
import {List,Button} from "@material-ui/core";
import {connect} from "react-redux";
import {categoryLoaded,selectedCategory} from "../../actions/action";
import withTaskContext from "../hoc";
import Category from "../category"
import AddNewCategory from "../addNewCategory"

class CategoryList extends Component{
    state = {
        activeCategory : "",
        createNewCategory : false
    }

    componentDidMount(){
        console.log(AddNewCategory)
        const {categoryLoaded,TodoInfo} = this.props;
        const Todo = new TodoInfo();
        Todo.getAllCategories()
        .then(result => categoryLoaded(result))
    }

    onCreateNewCategory(){
        this.setState({
            createNewCategory : !this.state.createNewCategory
        })
    }

    render() {
        const {categories,selectedCategory,activeCategory} = this.props

        const Button = () => {
            return <button type="button">Добавить новую папку</button>
        }

        const addCategoryBtn = this.state.createNewCategory ? 
        <AddNewCategory
         onCreateNewCategory={() => this.onCreateNewCategory()}
         /> 
         : 
         <button 
        type="button"
        onClick={() => this.onCreateNewCategory()}
        >Добавить новую папку</button>

        return(
            <List>
                <Button color="primary" onClick={() => selectedCategory("")}>Все задачи</Button>
                {categories.map(category => {

                    if (category.label == activeCategory){
                        return (
                            <Category {...category} key={`${category.label}-${category.id}`}>
                                <button 
                                key={`${category}-btn ${category}-${category.id}-btn`} type="button"
                                >Удалить</button>
                            </Category>
                        )
                    }
                    return <Category {...category} key={`${category.label}-${category.id}`}/>
                })}
             {addCategoryBtn}
            </List>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories : state.categories,
        activeCategory : state.activeCategory
    }
}

const mapDispatchToProps = {
    categoryLoaded,
    selectedCategory
}

export default withTaskContext()(connect(mapStateToProps,mapDispatchToProps)(CategoryList))