import React from "react";
import Sidebar from "../sidebar";
import {Grid,Container} from "@material-ui/core"
import MainContent from "../mainContent"

const App = () =>{
    return (
        <Container>
        <Grid container className="app">
            <Grid item xs={4}>
                <Sidebar/>
            </Grid>
            <Grid item xs={8}>
                <MainContent/>
            </Grid>
        </Grid>
        </Container>
    )
}


export default (App);