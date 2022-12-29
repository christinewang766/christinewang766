import styled from 'styled-components'
import {Link} from 'react-scroll'
import FrogPot from "../images/frogPot.png";
import PigPot from "../images/pigPot.png";

export const Button = styled(Link)`
white-space: nowrap;
padding: ${({big}) => (big ? '14 px 48px' : '12px 30px')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
font-family: "Kano";
border: none;
display: flex;
justify-content: center;
align-items: center;
background: URL(${FrogPot});
background-repeat: no-repeat;
background-size: 200px 150px;
background-position: center;
white-space: nowrap;
padding: 70px 60px; 
color: #fff;

&:hover {
    transition: all 0.2s ease-in-out;
    background: URL(${PigPot});
    background-repeat: no-repeat;
background-size: 200px 150px;
background-position: center;
}
`