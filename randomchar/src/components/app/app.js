import React,{Component} from 'react';
import {Col, Row, Container,Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component{

    // constructor(props){
    //     super(props);
    // }

    state = {
        randomCharShowed : true,
        selectedChar : null
    }

    onRandomShowed = () => {
        const{randomCharShowed} = this.state;
        this.setState({
            randomCharShowed : !randomCharShowed
        });
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar : id
        })
    }

    render(){

        const {randomCharShowed} = this.state;
        const RandomCharShow = randomCharShowed ? <RandomChar/> : null;

        return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {RandomCharShow}
                    </Col>
                </Row>
                <Button onClick={this.onRandomShowed} color="info">Toggle RandomChar</Button>
                <Row>
                    <Col md='6'>
                        <ItemList charSelected={this.onCharSelected}/>
                    </Col>
                    <Col md='6'>
                        <CharDetails itemId = {this.state.selectedChar + 25}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
        };
}