import React,{Component} from "react";
import "./filter.css";

class Filter extends Component{
    constructor(props){
        super(props);
        this.state = {
            filter : this.props.filter
        }
        this.buttons = [
            {name : "all", label: "Все"},
            {name : "like", label: "Понравившиеся"}
        ]
    }

    render(){  
        const buttons = this.buttons.map(({name,label}) =>{
            return (<button 
                 key={name}
                 className= {this.props.filter == name ? "filter-btn btn btn-primary" : "filter-btn btn btn-outline-primary"}
                 type= "button"
                 onClick = {() => this.props.filterPost(name)}
                   >{label}</button>)
        }); //filter-btn btn btn-primary
    return ( 
        <div className="btn-group">
            {buttons}
        </div>
        )
}
}

export default Filter