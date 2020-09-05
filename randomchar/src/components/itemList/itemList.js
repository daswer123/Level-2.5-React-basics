import React, {Component} from 'react';
import {ListGroup,ListGroupItem} from "reactstrap";
import Spinner from "../Spinner";
import ErrorMessage from "../errorMessage/index";
import styled from "styled-components";

const ListGroupItemMod  = styled(ListGroupItem)`
    cursor: pointer;
`;

const ListGroupMod = styled(ListGroup)`
     cursor: pointer;
`;


export default class ItemList extends Component {

    state = {
        charList : null
    }

    componentDidMount(){

        let {getData,page,pageSize} = this.props;
        if (!page || !pageSize){
            page = 1;
            pageSize = 5;
            console.log("Not ok")
        }

        console.log(this.props);
        // const charInfo = new GetInfo();
        getData(page,pageSize)
        .then(this.onCharListLoaded)
    }


    onCharListLoaded = (charList) =>{
        this.setState({charList});
    }

    renderItem = (arr) =>{
        return arr.map( (item,i) =>{
            return(
            <ListGroupItemMod key={i} onClick={() => this.props.ItemSelected(i)}>
                {this.props.renderLabel(item)}
            </ListGroupItemMod>
            )
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const {charList} = this.state;
        if (!charList){
            return <Spinner/>;
        }
        
        return (
            <ListGroupMod className="item-list">
                {this.renderItem(charList)}
            </ListGroupMod>
        );
    }
}