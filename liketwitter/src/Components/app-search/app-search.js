import React,{Component} from "react";
import "./app-search.css";

class Search extends Component{

    constructor(props){
        super(props);
        this.state ={
            searchText : ""
        };
        this.setSearchText = this.setSearchText.bind(this);
    }

    setSearchText(event){
        const text =  event.target.value;
        this.setState({
            searchText : text
        })
        this.props.findPost(text);
    }

    render() {
    return ( 
    <input 
        type="text" 
        placeholder="Поиск по записям"
        className= "form-control search-input"
        onChange = {this.setSearchText}
        value={this.state.searchText}
        ></input>
        )   
    }
}

export default Search;