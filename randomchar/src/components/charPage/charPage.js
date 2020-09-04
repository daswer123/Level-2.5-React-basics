import React,{Component} from "react";
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';

export default class CharPage extends Component {

    state = {
        selectedChar : 25,
        error : false
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar : id
        })
    }

    componentDidCatch(){
        this.setState({error : true})
    }


    render(){

        if (this.state.error){
            return (<ErrorMessage/>);
        }
        return(  
            <Row>
                <Col md='6'>
                    <ItemList charSelected={this.onCharSelected}/>
                </Col>
                <Col md='6'>
                    <CharDetails itemId = {this.state.selectedChar + 25}/>
                </Col>
            </Row>
        )
    }
}
