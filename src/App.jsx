import React from "react";
import styled from "styled-components";
import { HomePage } from "./Components/Pages/HomePage";

export const BodyWrapper = styled.div`
display: flex;
flex-direction:row;
justify-content: center;
align-items:center;
width:100%;
height:100vh;
background-color:transparent;
`

function App() {
  return (
    <BodyWrapper>
      <HomePage />
    </BodyWrapper>
  )
    ;
}

export default App;
