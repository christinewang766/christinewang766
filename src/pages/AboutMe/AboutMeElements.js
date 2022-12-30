import styled from 'styled-components'
import Popup from 'reactjs-popup';
import SnailPot from "./images/snailPot.png";
import Back from "./images/back.png";
import DogPot from "./images/dogPot.png";
import BunnyPot from "./images/bunnyPot.png";
import monet from "./images/monet.png";
import clawCursor from "./images/clawCursor.png";

export const BackButton = styled.button`
outline: none;
font-family: "Florentia";  
font-size: 25px;
white-space: nowrap;
font-weight: bold;
letter-spacing: 5px;
color: #44624a;
transform: rotate(-90deg);

border: none;
background: URL(${Back});
background-repeat: no-repeat;
background-size: auto 60px;
background-position: center;
padding: 10px 15px; 

&:hover{
  cursor: URL(${clawCursor}), auto;
}
`
export const ButtonWrap = styled.div`
width: 60px;
height: 200px;
background: #8ba888;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 20px 10px #f1ebe1;

@media screen and (max-width: 400px) {
  width: 30px;
height: 100px;
}
`
export const ButtonNativeWrap = styled.div`
background: #8ba888;
display:flex;
align-items: center;
justify-content:center;
width: 100px;
margin-left: auto;
margin-right: auto;
margin-bottom: 20px;
margin-top:-10px;

&:hover {
  cursor: URL(${clawCursor}), auto;
}
`

export const TitleWrap = styled.div`
width: 100px;
height: 400px;
background: #44624a;
display: flex;
align-items: center;
justify-content: center;
white-space: nowrap;

@media screen and (max-width: 400px) {
  width: 50px;
  height: 200px;
  }

  @media screen and (max-width: 540px) {
    width: 40px;
    padding:6px;
    }
`

export const Title = styled.h1`
font-family: "Florentia";  
font-weight: bold;
writing-mode: vertical-rl;
transform: rotate(180deg);
text-orientation: sideways;
letter-spacing: 5px;
color: #fff;

@media screen and (max-width: 400px) {
  font-size: 20px;
  }
  @media screen and (max-width: 540px) {
    font-size: 25px;
    }
`

export const AboutContainer = styled.div`
background: url(${monet});
background-repeat: no-repeat;
backgroundSize: fill;
background-position: center;

display: flex;
align-items: center;
justify-content: center;

width:100%;
height:100%;
`

export const AboutWrapper = styled.div`
z-index: 1;
height: 800px;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 400px) {
  height:900px;
  }
`

export const TextWrapper = styled.div`
background:	#f1ebe1;
justify-content: center;

  @media screen and (max-width: 540px) {
    width: 250px;
    }
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
@media screen and (max-width: 400px) {
  font-size: 25px;
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
display: block;
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
box-shadow: 10px 10px #c0cfb2;

@media screen and (max-width: 800px) {
    margin-top: 0;
}

transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.04);
    transition: all 0.2s ease-in-out;
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
  width: 60%;
  border: 4px solid #44624a;
  font-family: "Kano";
  line-height: 1.5;
  }

  @media screen and (max-width: 700px){
    &-content {
        width: 100%;
        }
  }

  @media screen and (max-width: 380px) {
    &-content {
      width: 90%;
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
export const EducationWrap = styled.div`
height: auto;
padding:15px;
width: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background:#f1ebe1;
z-value: 5;

  @media screen and (max-width: 540px) {
    width: 250px;
    }
`

export const Education = styled.h2`
font-family: "Kano";  
font-weight: bold;
letter-spacing: 5px;
color: 	#44624a;
padding-bottom: 10px;
z-value: 8;
`
export const EducationDate = styled.p`
font-family: "Florentia"; 
font-size: 15px;
letter-spacing: 5px;
font-style: italic;
color: 	#8ba888;
padding-bottom: 10px;
z-value: 7;
`
export const EducationDetails = styled.h4`
font-family: "Kano";  
font-weight: bold;
letter-spacing: 3px;
text-align: center;
color: #44624a;
z-value: 6;
`

export const UBCImg = styled.img`
max-width: 15%;
z-value: -2;
`
export const UBCImgWrap = styled.div`
z-value: -3;
display: flex;
align-items: center;
justify-content: center;
`