import React,{Component} from "react";
import "./add-post.css";

class AddPost extends Component{
    constructor(props){
        super(props);
        this.state = {
            text : ""
        }
        this.changeText = this.changeText.bind(this);
        this.createPost = this.createPost.bind(this);
    }

    changeText(e) {
        const newText = e.target.value;
        this.setState(({text}) =>{
            return {
                text : newText
            }
        })
    }

    createPost(e){
        e.preventDefault();
        this.props.addPost(this.state.text);
        this.setState({
            text : ""
        })
    }

    render(){
        return (
        <form action="#" className= "bottom-panel d-flex" onSubmit= {this.createPost}>
            <input 
            type="text" 
            name= "text"
            placeholder= "О чём вы сейчас думаете"
            className= "form-control new-post-label"
            onChange = {this.changeText}
            value = {this.state.text}
            />
            <button type= "submit" 
            className="btn btn-outline-success"
            >Добавить</button>
        </form>
    )
        }
}

export default AddPost;