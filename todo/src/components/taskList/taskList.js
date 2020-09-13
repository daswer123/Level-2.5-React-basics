import React,{Component} from "react";
import {List} from "@material-ui/core";
import {connect} from "react-redux";
import {postsLoaded,ChangeCategoryName} from "../../actions/action";
import withTaskContext from "../hoc";
import Task from "../task"


class TaskList extends Component{

    state = {
        categoryEdit : false,
        newCategoryName : ""
    }

    componentDidMount(){
        let {TodoInfo,postsLoaded} = this.props;
        TodoInfo = new TodoInfo();
        TodoInfo.getAllPosts()
        .then(result => postsLoaded(result))
    }


    onCategoryEdit(){
        this.setState({
            categoryEdit: !this.state.categoryEdit
        })
    }

    onCategoryCreateName(e){
        console.log(e.target.value)
        this.setState({
            newCategoryName: e.target.value
        })
    }

    OnChangeCategoryName(){
        let {TodoInfo} = this.props;
        TodoInfo = new TodoInfo();
        const {newCategoryName} = this.state

        if (newCategoryName === ""){
            alert("Пожалуйста введите имя");
            return
        }

        const {color,label,id} = this.props

        const data = {color,label,id, name : newCategoryName}

        this.onCategoryEdit()
        this.props.ChangeCategoryName(data)
        TodoInfo.changeCategoryName(id,JSON.stringify(data))
    }


    render(){
        const {posts,name,label,color,editable} = this.props;

        let Header = editable ? 
        <header>
             <h3 style={{color : color}}>{name}</h3> 
             <button onClick={() => this.onCategoryEdit()} type="button">Edit</button>
        </header>
        : 
        <h3 style={{color : color}}>{name}</h3> 

        if (this.state.categoryEdit){
            Header = 
            <>
            <input type="text" defaultValue={name} onInput={(e) => this.onCategoryCreateName(e)}/>
            <button type="button" onClick={() => this.OnChangeCategoryName()}>Изменить</button>
            </>
        }


        return(
            <>
                {Header}
                <List>
                    {
                    posts.filter(post => post.category == label)
                    .map(post =>{
                       return <Task
                        {...post}
                        id={post.id}
                        key={`post-${post.category}-${post.id}`}
                        />
                    })}
                </List>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts,
        categories : state.categories
    }
}

const mapDispatchToProps = {
    postsLoaded,
    ChangeCategoryName
}

export default withTaskContext()(connect(mapStateToProps,mapDispatchToProps)(TaskList));