import React, {Component} from 'react';
import {ListGroup,ListGroupItem} from "reactstrap";
import styled from "styled-components";

const ListGroupItemMod  = styled(ListGroupItem)`
    cursor: pointer;
`;

const ListGroupMod = styled(ListGroup)`
     cursor: pointer;
`;


export default class ItemList extends Component {

    render() {
        return (
            <ListGroupMod className="item-list">
                <ListGroupItemMod>
                    John Snow
                </ListGroupItemMod>
                <ListGroupItemMod>
                    Brandon Stark
                </ListGroupItemMod>
                <ListGroupItemMod>
                    Geremy
                </ListGroupItemMod>
            </ListGroupMod>
        );
    }
}