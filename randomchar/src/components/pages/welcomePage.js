import React from "react";
import styled from "styled-components";

const Section = styled.section`
    background-color : white;
    text-align : center;
    padding-top : 20px;
    padding-bottom : 20px;
    margin-top: 10px;
`;

const WelcomePage = () =>{
        return (
            <Section className="list-group rounded">
                <h2>Make your choice</h2>
            </Section>
        )
    }

export default WelcomePage