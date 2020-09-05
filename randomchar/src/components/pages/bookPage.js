import React,{Component} from "react";
import ItemList from '../itemList';
import {Container} from "reactstrap";
import ErrorMessage from '../errorMessage';
import {withRouter} from "react-router-dom";

import GetInfo from "../../services/servisec";
class BookPage extends Component {

    GetInfo = new GetInfo();
    state = {
        selectedItem : null,
        error : false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem : id
        })
    }

    componentDidCatch(){
        this.setState({error : true})
    }



    render(){ 

        
        if (this.state.error){
            return (<ErrorMessage/>);
        }

        return (
            <ItemList
                        getData = {this.GetInfo.getAllBooks} 
                        page = {1} 
                        pageSize = {5} 
                        ItemSelected={(itemId) => {
                            this.props.history.push(""+(itemId+1))
                        }}
                        renderLabel = {(item) => `${item.name}`}/>
        )
    }
}

export default withRouter(BookPage);