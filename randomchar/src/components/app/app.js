import React,{Component} from 'react';
import {Col, Row, Container,Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharPage,{BookPage,HousePage,WelcomePage} from "../pages/";
import {BookInfo,CharInfo,HouseInfo} from "../innerItem/";
import ErrorMessage from '../errorMessage';
import {BrowserRouter as Router, Route} from "react-router-dom";
import GetInfo from "../../services/servisec";
import "./app.css";

export default class App extends Component{
    GetInfo = new GetInfo();

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
        <Router>
            <section className= "app"> 
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
                    <Route path="/" exact component={WelcomePage}/>
                    <Route path="/characters/" exact component={CharPage}/>
                    <Route path="/houses/" exact component={HousePage}/>
                    <Route path="/books/" exact component={BookPage}/>
                </Container>
                <Route path='/books/:id' render={({match}) =>{ 
                    const {id} = match.params;
                    return <BookInfo itemId = {id}/>
                }}/>
                <Route path='/houses/:id' render={({match}) =>{ 
                    const {id} = match.params;
                    return <HouseInfo itemId = {id}/>
                }}/>
                <Route path='/characters/:id' render={({match}) =>{ 
                    const {id} = match.params;
                    return <CharInfo itemId = {id}/>
                }}/>
            </section>
        </Router>
    )
};
}