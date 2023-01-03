import styled from 'styled-components'
import {Link} from 'react-router-dom'
import CatPot from "../images/catPot.png";
import AoxPot from "../images/aoxPot.png";

export const Button = styled(Link)`
white-space: nowrap;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
font-family: "Lato";
border: none;
display: flex;
justify-content: center;
align-items: center;
background: URL(${CatPot});
background-repeat: no-repeat;
background-size: 150px 150px;
background-position: center;
white-space: nowrap;
padding: 60px 50px; 
color: ${({lightText}) => (lightText ? '#fff' : '#000')};

&:hover {
    transition: all 0.2s ease-in-out;
    background: URL(${AoxPot});
    color: ${({lightText}) => (lightText ? '#000' : '#fff')};
    background-repeat: no-repeat;
background-size: 150px 150px;
background-position: center;
}
`