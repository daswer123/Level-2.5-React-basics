import React,{Component} from "react";
import Title from "../app-title";
import Search from "../app-search";
import Filter from "../filter";
import PostList from "../post-list";
import AddPost from   "../add-post";

import nextId from "react-id-generator";

import "./app.css";

export default class App extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            data : [
               {label: "Going to learning React", important: true, liked: true, id : "fgdfgdg"},
                {label: "Make my own project", important: false, id : "xzcgvvz"},
                {label: "React is cool", important: false, id : "rte3543"}
            ]   
        }
        this.deletePost = this.deletePost.bind(this);
        this.addPost = this.addPost.bind(this);
    }


    deletePost(id){
        this.setState(({data}) => {
            console.log(id);
            let newData = data.filter(elem => elem.id != id)
            return ({data : newData})
        });
    }

    addPost(text){
        const newPost = {
            label : text,
            important: false,
            id : nextId("post-")
        };

        this.setState(() =>{
        })
        this.setState(({data}) =>{
            const newData = [...data,newPost];
            return{data : newData}
        })
    }

    render(){
    return (
        <main className="app">
            <Title/>
            <section className= "search-panel">
                <Search/>
                <Filter/>
            </section>
            <PostList posts = {this.state.data} deletePost = {this.deletePost}/>
            <AddPost  addPost = {this.addPost}/>
        </main>
    )}
}
