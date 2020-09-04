import React, {Component} from 'react';
import {ListGroup,ListGroupItem} from "reactstrap";
import Spinner from "../Spinner";
import ErrorMessage from "../errorMessage/index";
import GetInfo from "../../services/servisec";
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
        const charInfo = new GetInfo();
        charInfo.getAllcharacter(4,8)
        .then(this.onCharListLoaded)
    }


    onCharListLoaded = (charList) =>{
        this.setState({charList});
    }

    renderItem = (arr) =>{
        return arr.map( (item,i) =>{
            return(
            <ListGroupItemMod key={i} onClick={() => this.props.charSelected(i)}>
                {item.name}
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