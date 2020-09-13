import React,{Component} from "react";
import {List,Button} from "@material-ui/core";
import {connect} from "react-redux";
import {categoryLoaded,selectedCategory,CategoryDelete} from "../../actions/action";
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

    deleteAllCategoryPosts(label){
        const {posts,TodoInfo} = this.props
        const Todo = new TodoInfo();

        posts.forEach(post => {
            if (post.category == label){
                Todo.deleteTask(post.id)
            }
        });
    }

    onDeleteCategory(label,id){
        const {CategoryDelete,TodoInfo,selectedCategory} = this.props
        const Todo = new TodoInfo();

        CategoryDelete(label);
        this.deleteAllCategoryPosts(label)
        selectedCategory("");
        Todo.deleteCategory(id);
    }

    render() {
        const {categories,selectedCategory,activeCategory} = this.props

        const addCategoryBtn = () => {
            if (this.state.createNewCategory){
                return <AddNewCategory onCreateNewCategory={() => this.onCreateNewCategory()}/>
            } 
            return <button 
            type="button"
            onClick={() => this.onCreateNewCategory()}
            >Добавить новую папку</button>
        }

        return(
            <>
            <Button color="primary" onClick={() => selectedCategory("")}>Все задачи</Button>
            <List>
                {categories.map(category => {

                    if (typeof(category) === "undefind"){
                        return <h2>Errorka</h2>
                    }

                    if (category.label == activeCategory){
                        return (
                            <Category {...category} key={`${category.label}-${category.id}`}>
                                <button 
                                key={`${category}-btn ${category}-${category.id}-btn`} type="button"
                                onClick={() => this.onDeleteCategory(category.label,category.id)}
                                >Удалить</button>
                            </Category>
                        )
                    }
                    return <Category {...category} key={`${category.label}-${category.id}`}/>
                })}
             {addCategoryBtn()}
            </List>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories : state.categories,
        activeCategory : state.activeCategory,
        posts : state.posts
    }
}

const mapDispatchToProps = {
    categoryLoaded,
    selectedCategory,
    CategoryDelete
}

export default withTaskContext()(connect(mapStateToProps,mapDispatchToProps)(CategoryList))