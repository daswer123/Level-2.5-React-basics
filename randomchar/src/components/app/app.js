import React,{Component} from 'react';
import {Col, Row, Container,Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharPage from "../charPage";
import ErrorMessage from '../errorMessage';


export default class App extends Component{

    // constructor(props){
    //     super(props);
    // }

    state = {
        randomCharShowed : true,
        error : false
    }

    onRandomShowed = () => {
        const{randomCharShowed} = this.state;
        this.setState({
            randomCharShowed : !randomCharShowed
        });
    }


    // componentDidCatch(){
    //     alert("Trevoga");
    //     this.setState({error : true})
    // }

    render(){

        if (this.state.error){
            return (
                <ErrorMessage/>
            )
        }

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
                <CharPage/>
            </Container>
        </>
    );
        };
}