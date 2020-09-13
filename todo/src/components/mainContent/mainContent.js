import React,{Component} from "react";
import TaskList from "../taskList";
import {connect} from "react-redux";
import AddNewTask from "../addNewTask";
import {selectedCategory} from "../../actions/action"

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


    returnTaskList(category,editable = false){
        
        if (typeof(category) === "undefined"){
            return <p>No content here</p>
        }

    
        console.log(category)
        return <TaskList 
            id = {category.id}
            name={category.name} 
            label={category.label}
            key={`${category.label}-${category.id}`}
            color={category.color}
            editable={editable}/>
            
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
                    return this.returnTaskList(category)
                })
            )
        }

        if (activeCategory){
            const category = categories.find(category => category.label === activeCategory);
            return (
                <>
                    {this.returnTaskList(category,true)}
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


const mapStateToProps = (state) => {
    return {
        categories : state.categories,
        activeCategory : state.activeCategory
    }
}

const mapDispathToProps = {
    selectedCategory,
}

export default connect(mapStateToProps,mapDispathToProps)(MainContent);