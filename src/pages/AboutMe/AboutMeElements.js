import styled from 'styled-components'
import Popup from 'reactjs-popup';
import SnailPot from "./images/snailPot.png";
import Back from "./images/back.png";
import DogPot from "./images/dogPot.png";
import BunnyPot from "./images/bunnyPot.png";
import monet from "./images/monet.png";

export const BackButton = styled.button`
outline: none;
font-family: "Florentia";  
font-size: 25px;
font-weight: bold;
letter-spacing: 5px;
color: #44624a;
transform: rotate(-90deg);

border: none;
background: URL(${Back});
background-repeat: no-repeat;
background-size: auto 60px;
background-position: center;
padding: 10px 40px; 

display: block;
float: top;
`
export const ButtonWrap = styled.div`
width: 60px;
height: 200px;
background: #8ba888;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 20px 10px #f1ebe1;
float:left;
`

export const TitleWrap = styled.div`
width: 100px;
height: 400px;
background: #44624a;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 20px 10px lightblue;
float:left;
`

export const Title = styled.h1`
font-family: "Florentia";  
font-weight: bold;
writing-mode: vertical-rl;
transform: rotate(180deg);
text-orientation: sideways;
letter-spacing: 5px;
color: #fff;
`

export const AboutContainer = styled.div`
background: url(${monet});
background-repeat: no-repeat;
backgroundSize: fill;
background-position: center;

display: flex;
align-items: center;
justify-content: center;
color: #fff;
}
`

export const AboutWrapper = styled.div`
z-index: 1;
height: 800px;
max-width: 1100px;
`

export const TextWrapper = styled.div`
max-width: 540px;
background:	#f1ebe1;
align-items: center;
justify-content: center;
margin-top: 100px;

`

export const Heading = styled.h1`
padding: 20px;
padding-bottom: 0;
margin-bottom: 10px;
font-family:'Dantina';
font-weight: bold;
font-size: 30px;
color: #8ba888;
text-align: center;

@media screen and (max-width: 480px){
    font-size: 32px;
}
`

export const SubHead = styled.div`
padding: 20px;
padding-bottom: 0;
padding-top: 0px;
margin-bottom: 24px;
font-family:'Kano';
font-size: 20px;
color: #8ba888;
text-align: center;
}
`
export const AdjustBioContainer = styled.div`
background: #c0cfb2;
display: flex;
align-items: center;
justify-content: center;
color: #44624a;
`

export const AdjustBioWrap = styled.div`
height: 150px;
max-width: 1100px;
`
export const ABTitle = styled.h4`
font-family: Kano;
padding: 10px;
padding-bottom: 30;
text-align: center;
`
export const ABBtnWrap = styled.div`
height: 40px;
max-width: 1100px;
background: #000;
display: flex;
align-items: center;
justify-content: center;
`
export const ImgWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: none;
padding: 20px;
padding-bottom: 0;
`

export const Img = styled.img`
width: 125px;
height: auto;
display: block;
margin-left: auto;
margin-right: auto;
box-shadow: 10px 10px lightblue;

@media screen and (max-width: 800px) {
    margin-top: 0;
}
`
export const StyledPopup = styled(Popup)`
  &-overlay {
    background: rgba(241,235,225, 0.5);
  }

  &-arrow {
color: #44624a;
  stroke-width: 2px;
  stroke: #44624a;
  stroke-dasharray: 30px;
  stroke-dashoffset: -54px;
  }
  
  &-content {
  background: #f1ebe1;
  padding: 20px;
  width: 50%;
  border: 4px solid #44624a;
  font-family: "Kano";
  line-height: 1.5;
  }

  @media screen and (max-width: 700px){
    &-content {
        width: 100%;
        }
  }
`
export const ButtonLong = styled.button`
outline: none;
color: #fff;
font-weight: bold;
letter-spacing: 2px;
text-align: center;
margin: auto;
font-family: "Kano";
border: none;
display: block;
float: left;
background: URL(${SnailPot});
background-repeat: no-repeat;
background-size: 65px 65px;
background-position: center;
padding: 30px 20px; 
`
export const ButtonMedium = styled.button`
outline: none;
font-weight: bold;
color: #000;
letter-spacing: 2px;
text-align: center;
margin: auto;
font-family: "Kano";
border: none;
display: block;
float: left;
background: URL(${DogPot});
background-repeat: no-repeat;
background-size: 65px 65px;
background-position: center;
padding: 30px 20px; 
`
export const ButtonShort = styled.button`
outline: none;
color: #000;
font-weight: bold;
letter-spacing: 2px;
text-align: center;
margin: auto;
font-family: "Kano";
border: none;
display: block;
float: left;
background: URL(${BunnyPot});
background-repeat: no-repeat;
background-size: 65px 75px;
background-position: center;
padding: 30px 20px; 
`