import React, {Component} from 'react';
import GetInfo from "../../services/servisec"
import {ListGroupItem,ListGroup} from "reactstrap";
import styled from "styled-components";

const Term = styled.span`
    font-weight : bold;
`;

const RandomBlock = styled.section`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;

    h4 {
    margin-bottom: 20px;
    text-align: center;
    }
`;

export default class RandomChar extends Component {

    render() {
        return (
            <RandomBlock>
                <h4>Random Character: ${1}</h4>
                <ListGroup className = "list-group-flush">
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Gender </Term>
                            <span>${2}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Born </Term>
                        <span>${3}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Died </Term>
                        <span>${5}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Culture </Term>
                        <span>${4}</span>
                    </ListGroupItem>
                </ListGroup>
            </RandomBlock>
        );
    }
}
