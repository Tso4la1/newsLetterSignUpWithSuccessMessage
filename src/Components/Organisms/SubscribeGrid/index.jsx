import React, { useState } from 'react';
import { SectionWrapper } from '../RightGrid';
import styled from "styled-components";
import { Text, Icons } from '../../Atoms';
import { Form } from '../../Molecules/Form';
import { devices } from '../../../devices';


export const TextWrapper = styled.div`
font-size:${(props) => props.fontSize};
font-weight:${(props) => props.fontWeight};
margin:${(props) => props.margin};
padding:${(props) => props.padding};
display:${props => props.display};
flex-direction:${props => props.flexDirection};
justify-content:${props => props.justifyContent};
align-items:${props => props.alignItems};
width:${props => props.width};
gap:${props => props.gap};

@media screen and ${devices.mobile}{
    margin:${(props) => props.mobMargin}; 
    display:${props => props.mobDisplay};
    justify-content:${props => props.mobJustifyContent};
    align-items:${props => props.mobAlignItems};
    flex-direction:${props => props.mobFlexDirection};
    font-size:${(props) => props.mobFontSize};
    padding:${(props) => props.mobPadding};

}
@media screen and ${devices.gsm}{
    margin:${(props) => props.gsmMargin}; 
    display:${props => props.gsmDisplay};
    justify-content:${props => props.gsmJustifyContent};
    align-items:${props => props.gsmAlignItems};
    flex-direction:${props => props.gsmFlexDirection};
    font-size:${(props) => props.gsmFontSize};
    padding:${(props) => props.gsmPadding};
    font-weight:${(props) => props.gsmFontWeight};
}
`
const list = [
    {
        id: 1,
        title: "Product discovery and building what matters",
    },
    {
        id: 2,
        title: "Measuring to ensure updates are a success"
    },
    {
        id: 3,
        title: "And much more!"
    }
]

export const SubscribeGrid = () => {
    const [inputText, setInputText] = useState({ email: "" });
    const [errors, setErrors] = useState({});
    return (
        <SectionWrapper primary>
            <TextWrapper fontSize="45px" mobFontSize="35px"
                gsmFontSize="30px" fontWeight="700"
                gsmMargin="-20px 0 21px 10px" mobMargin="45px 0 5px 0" margin="60px 0 5px 0">
                <Text type="p" text="Stay Updated!" />
            </TextWrapper>

            <TextWrapper padding="0 25px" gsmMargin="0 0 0 10px" margin="15px 0 15px 3px" mobPadding="0 0" gsmFontSize="16px" gsmFontWeight="400" mobMargin="0 0 15px 0" fontSize="12.5px" fontWeight="700">
                <Text type="p" text="Join 60,000+ product managers receiving monthly updates on:" />
            </TextWrapper>

            {list.map((items) =>

            (
                <TextWrapper gsmMargin="10px 0 0 10px" width="85%" fontSize="12.5px"
                    gsmFontSize="16px" margin="5px 0 0 5px" mobMargin="5px 0 0 0" fontWeight="700"
                    gsmFontWeight="400"
                    display="flex" key={items.id} >
                    <TextWrapper gsmMargin="0 15px 0 0" margin="0 20px 0 0">
                        <Icons name="icon-list" />
                    </TextWrapper>
                    <Text type="p" text={items.title} />

                </TextWrapper>
            )
            )}
            <TextWrapper gsmMargin="25px 0 0 10px" width="85%" margin="30px 0 0 0" fontSize="11px" fontWeight="700" >
                <Form errors={errors} setErrors={setErrors} isInputText={inputText} setInputText={setInputText} />
            </TextWrapper>

        </SectionWrapper>


    )
}

