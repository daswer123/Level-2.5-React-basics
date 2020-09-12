import React,{Component} from "react";
import {List} from "@material-ui/core";
import {connect} from "react-redux";
import {postsLoaded} from "../../actions/action";
import withTaskContext from "../hoc";
import Task from "../task"


class TaskList extends Component{

    componentDidMount(){
        let {TodoInfo,postsLoaded} = this.props;
        TodoInfo = new TodoInfo();
        TodoInfo.getAllPosts()
        .then(result => postsLoaded(result))
    }


    render(){
        const {posts,name,label,color} = this.props;
        return(
            <>
                <h3 style={{color : color}}>{name}</h3>
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
        posts : state.posts
    }
}

const mapDispatchToProps = {
    postsLoaded,
}

export default withTaskContext()(connect(mapStateToProps,mapDispatchToProps)(TaskList));