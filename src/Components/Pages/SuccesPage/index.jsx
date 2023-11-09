import React from 'react';
import styled from 'styled-components';
import { Icons, Text } from '../../Atoms';
import { Btn2 } from '../../Molecules/Btn2';
import { devices } from '../../../devices';

export const Suces = styled.div`
color:${props => props.color};
background-color:${props => props.bg};
font-size:${(props) => props.fontSize};
font-weight:${(props) => props.fontWeight};
margin:${(props) => props.margin};
padding:${(props) => props.padding};
display:${props => props.display};
flex-direction:${props => props.flexDirection};
justify-content:${props => props.justifyContent};
align-items:${props => props.alignItems};
width:${props => props.width};
height:${props => props.height}
gap:${props => props.gap};
float:${props => props.float};

@media screen and ${devices.mobile}{
    margin:${(props) => props.mobMargin}; 
    width:${props => props.mobWidth};

    font-size:${(props) => props.mobFontSize};
  
}
@media screen and ${devices.gsm}{
    width:${props => props.gsmWidth};
    margin:${(props) => props.gsmMargin};
}
`
export const SuccessPage = () => {
    return (

        <Suces display="flex"
            flexDirection="column"
            margin="60px 60px"
            mobMargin="35px 35px"
            gsmMargin="20px 20px"

        >

            <Suces margin="0 0 0 5px"  >
                <Icons name="icon-success" />
            </Suces>
            <Text type="p" className='bigLetter' text="Thanks for subscribing!" />
            <p className='info'>A confirmation email has been sent to <strong>ash@loremcompany.com</strong>. Please open it and click the button inside to confirm your subscription.</p>

            <Btn2 className="btn" />


        </Suces>
    )
}
