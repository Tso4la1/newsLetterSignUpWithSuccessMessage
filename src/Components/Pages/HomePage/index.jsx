import React from 'react'
import styled from "styled-components";
import { SubscribeGrid, RightGrid } from '../../Organisms';
import { devices } from '../../../devices';

export const MainCardWrapper = styled.div`
background-color:hsl(0, 0%, 100%);
height:80vh;
width:55%;
border:none;
border-radius:25px;
Display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
gap:22%;
cursor:pointer;

@media screen and ${devices.mobile}{
    height:800px;
    flex-direction:column-reverse;
    border-radius:0px;
    gap:0px;
}

@media screen and ${devices.gsm}{
    height:850px;
    width:100%;
    overflow-x: auto;
}

`

export const HomePage = () => {
    return (
        <MainCardWrapper>
            <SubscribeGrid />
            <RightGrid />
        </MainCardWrapper>
    )
}
