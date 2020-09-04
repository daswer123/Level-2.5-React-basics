import React, {Component} from 'react';
// import './charDetails.css';
import GetInfo from "../../services/servisec";
import {ListGroup,ListGroupItem} from "reactstrap"
import styled from "styled-components";

const Section = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;

    h4  {
        margin-bottom: 20px;
        text-align: center;
    }
`;


// Класс на потом
// .select-error {
//     color: #fff;
//     text-align: center;
//     font-size: 26px;
// }



export default class CharDetails extends Component {

    state = {
        char: null
    }

    updateChar = (charId) => {
        const {itemId} = this.props
        const char = new GetInfo();

        char.getOneCharacter(itemId)
        .then(char => {
            this.setState({
                char,
            })
        })
    }

    componentDidUpdate(prevProps){
        if (prevProps.itemId !== this.props.itemId){
            this.updateChar(this.props.itemId);
        }

    }

    render() {

        const {char} = this.state;
        // const {itemId} = this.props;

          if (!char){
            return (
                <span style={{color:"red"}}>Select your Champions!</span>
            ) 
        }
        
        

        return (
            <Section className="rounded">
               {View(char)}
            </Section>
        );
    }
}

const View = (char) =>{
    const {name,gender,born,died,culture} = char;
    return(
        <>
        <h4>Random Character: {name}</h4>
                <ListGroup className = "list-group-flush">
                    <ListGroupItem className="d-flex justify-content-between">
                        <span>Gender </span>
                            <span>{gender}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span>Born </span>
                        <span>{born}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span>Died </span>
                        <span>{died}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span>Culture </span>
                        <span>{culture}</span>
                    </ListGroupItem>
                </ListGroup>
        </>
    )
}