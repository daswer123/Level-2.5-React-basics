import React, {Component} from 'react';
// import './charDetails.css';
import {ListGroup,ListGroupItem} from "reactstrap"
import styled from "styled-components";
import Spinner from "../Spinner";

const Section = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    width: 50%;
    margin: 0 auto;

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


const Field = ({name,label,item}) => {
    return (
        <ListGroupItem className="d-flex justify-content-between">
            <span style= {{fontWeight : "bold"}}>{name} </span>
            <span>{item[label]}</span>
        </ListGroupItem>
    )
}

export {Field};

export default class ItemDetails extends Component {

    state = {
        item: null
    }

    updateItem = () => {
        // const {itemId} = this.props
        const {itemId, getData} = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
        .then(item => {
            this.setState({
                item,
            })
        })
    }

    componentDidMount(){
        this.updateItem();
    }

    componentDidUpdate(prevProps){
        if (prevProps.itemId !== this.props.itemId){
            this.updateItem(this.props.itemId);
        }

    }

    render() {

        const {item} = this.state;
        // const {itemId} = this.props;

          if (!item){
            return (
                <Section className="rounded">
                    <Spinner/>
                </Section>
            ) 
        }
        
        const {name} = item;
        return (
            <Section className="rounded">
               <h4>You select : {name}</h4>
                <ListGroup className = "list-group-flush">
                            {
                            React.Children.map(this.props.children, (child) =>{
                              return React.cloneElement(child,{item})
                            })}
                </ListGroup>
            </Section>
        );
    }
}
