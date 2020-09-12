import React,{Component} from "react";
import TaskList from "../taskList";
import {connect} from "react-redux";
import AddNewTask from "../addNewTask";

class MainContent extends Component{

    state = {
        createPost : false
    }

    componentDidMount(){
    }

    onTaskCreate = () => {
        this.setState({
            createPost : !this.state.createPost
        })
    }

    render(){

        const {categories,activeCategory} = this.props;

        if (categories.length === 0){
            return <h2>Загрузка</h2>
        }

        const createPost = () => {
            if (this.state.createPost){
                return <AddNewTask onTaskCreate={this.onTaskCreate}/>
            }
            return <button type="button" onClick={() => this.onTaskCreate()}>Добавить новое дело</button>
        }

        const allCategories = () =>{
            return (
                categories.map(category => {
                    return returnTaskList(category)
                })
            )
        }

        if (activeCategory){
            const category = categories.find(category => category.label === activeCategory);
            return (
                <>
                    {returnTaskList(category)}
                    {createPost()}
                </>
                )
        }

        return (
            <>
             <h1>This is Main Content</h1>
             {allCategories()}
            </>
     )
    }

}

const returnTaskList = (category) => {
    return <TaskList 
        name={category.name} 
        label={category.label}
        key={`${category.label}-${category.id}`}
        color={category.color}/>
}


const mapStateToProps = (state) => {
    return {
        categories : state.categories,
        activeCategory : state.activeCategory
    }
}

export default connect(mapStateToProps)(MainContent);