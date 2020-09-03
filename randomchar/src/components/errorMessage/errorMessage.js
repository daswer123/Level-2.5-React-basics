import React from "react";
import styled from "styled-components";

import errorImg from "./errorImg.gif";


const Error = styled.span`
    width: 100%;
    font-size : 40px;
    color : red;
    text-align : center;
`; 

const ErrorGif = styled.img`
    width: 100%;
`;

const ErrorMessage = () =>{
    return (
        <>
        <Error>Something get wrong</Error>
        <ErrorGif src={errorImg} alt = "error"/>
        </>
    )
}

export default ErrorMessage;