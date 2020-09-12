import React,{Component} from "react";
import TaskList from "../taskList";

class MainContent extends Component{


    render(){
        return (
            <>
             <h1>This is Main Content</h1>
             <TaskList/>
            </>
     )
    }

}

export default MainContent;