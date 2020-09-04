import React, {Component} from 'react';
import GetInfo from "../../services/servisec"
import {ListGroupItem,ListGroup} from "reactstrap";
import styled from "styled-components";

import Spinner from "../Spinner";
import ErrorMessage from "../errorMessage/index";

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

        componentDidMount(){
            this.updateChar();
            this.timer = setInterval(this.updateChar,3000);
        }

        componentWillUnmount(){
            clearInterval(this.timer);
        }

        componentDidUpdate(){
            
        }


    
        GetInfo = new GetInfo();
        state = {
            char : {},
            loading : true,
        }

    onCharLoaded = (char) =>{
        this.setState({
            char,
            loading : false
        });
    }

    onErrorMessage = (err) =>{
        this.setState({
            loading : false,
            error : true
        });
    }


    updateChar = () =>{
        const id = Math.floor(Math.random()*200 + 25);
        this.GetInfo.getOneCharacter(id)
        .then(this.onCharLoaded)
        .catch(this.onErrorMessage);
    }


    render(){
        const {char,loading,error} = this.state;
        const errMesage = error ? <ErrorMessage/> : null; 
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ?  <View char= {char}/> : null;


        
        return (
            <RandomBlock>
               {errMesage}
               {spinner}
               {content}
            </RandomBlock>
        );
    }
}

const View = ({char}) =>{
    const {name,gender,born,died,culture} = char;
    return (
        <>
                <h4>Random Character: {name}</h4>
                <ListGroup className = "list-group-flush">
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Gender </Term>
                            <span>{gender}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Born </Term>
                        <span>{born}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Died </Term>
                        <span>{died}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Culture </Term>
                        <span>{culture}</span>
                    </ListGroupItem>
                </ListGroup>
            </>
    )
}