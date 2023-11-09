import React from 'react'
import styled, { css } from "styled-components";
import { Images } from '../../Atoms';
import illustration from '../../../assets/illustration-sign-up-desktop.svg';
import { devices } from "../../../devices"
import illustrationMobile from '../../../assets/illustration-sign-up-mobile.svg';

export const SectionWrapper = styled.div`
height: 76vh;
width:30%;
border:none;
display:flex;
justify-content:right;


${props => props.primary && css`
color:hsl(235, 18%, 26%);
width:45%;
flex-direction:column;
align-items:center;

@media screen and ${devices.mobile}{
    align-items:start;
    margin-left:45px;
}
@media screen and ${devices.gsm}{
    margin-left:0px;
    
}
` }

@media screen and ${devices.mobile}{
    width:100%;
    height: 55vh;
}
@media screen and ${devices.gsm}{
    height:55vh;
}
`


export const RightGrid = () => {
    return (
        <SectionWrapper>
            <Images className="desktop" src={illustration} alt="illustration-sign-up-desktop" height="100%" />
            <Images className="mobile" src={illustrationMobile} alt="illustration-sign-up-mobile" />
        </SectionWrapper>
    )
}
