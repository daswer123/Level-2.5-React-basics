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
                {label: "Going to learning React", important: true, id : "fgdfgdg",liked : false,key: "xcvx"},
                {label: "Make my own project", important: false, id : "xzcgvvz",liked : false,key: "sfsf"},
                {label: "React is cool", important: false, id : "rte3543",liked : false,key: "retet"}
            ],
            searchText : "",
            filter : "all"   
        }
        this.deletePost = this.deletePost.bind(this);
        this.addPost = this.addPost.bind(this);
        // this.changeState = this.changeState.bind(this);
        this.onLike = this.onLike.bind(this);
        this.onFavirite = this.onFavirite.bind(this);
        this.setSearch = this.setSearch.bind(this);
        this.setFilterPost = this.setFilterPost.bind(this);
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
            id : nextId("post-"),
            key : nextId("post-key-"),
            liked : false
        };

        this.setState(({data}) =>{
            const newData = [...data,newPost];
            return{data : newData}
        })
    }

    // changeState(property,id){
    //     this.setState(({data}) =>{
    //         const    index = data.findIndex((post) => post.id == id),
    //                  old = data[index],
    //                  changedPost = {...old,property : !old.property },
    //                  newArr = [...data.slice(0,index),changedPost,...data.slice(index+1)];
    
    //         return{
    //             data: newArr
    //         }
    //         })
    // }

    onLike(id) {
        this.setState(({data}) =>{
        const    index = data.findIndex((post) => post.id == id),
                 old = data[index],
                 likedPost = {...old,liked : !old.liked },
                 newArr = [...data.slice(0,index),likedPost,...data.slice(index+1)];

        return{
            data: newArr
        }
        })
    }

    onFavirite(id) {
        this.setState(({data}) =>{
            const    index = data.findIndex((post) => post.id == id),
                     old = data[index],
                     favoritPost = {...old,important : !old.important },
                     newArr = [...data.slice(0,index),favoritPost,...data.slice(index+1)];
    
            return{
                data: newArr
            }
            })
    }

    setSearch(text){
        this.setState({searchText: text});
    }

    searchPost(data,searchText){
        if (searchText == 0){
            return data
        }
        return data.filter(post => {
            return post.label.indexOf(searchText) > -1
        })
    }

    filterPost(data,filter){
        if (filter == "like"){
            return data.filter(elem => elem.liked)
        } else{
            return data
        }
    }

    setFilterPost(filter){
        this.setState({filter : filter});
    }



    render(){
    const {data,searchText,filter} = this.state;
    const postAmount = data.length;
    const likedPost = data.filter(post => post.liked).length;
    const visiblePosts = this.filterPost(this.searchPost(data,searchText),filter);

    return (
        <main className="app">
            <Title postAmount = {postAmount} likedPost = {likedPost}/>
            <section className= "search-panel">
                <Search findPost = {this.setSearch}/>
                <Filter filter = {this.state.filter} filterPost = {this.setFilterPost}/>
            </section>
            <PostList posts = {visiblePosts} deletePost = {this.deletePost} onLike = {this.onLike} onFavirite = {this.onFavirite}/>
            <AddPost  addPost = {this.addPost}/>
        </main>
    )}
}
