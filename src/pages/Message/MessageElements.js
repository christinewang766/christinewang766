import styled from 'styled-components'
import {Link} from 'react-router-dom'
import clawCursor from "./clawCursor.png";
import Back from "./back.png";

export const Container = styled.div`
height: 880px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(
    108deg,
    #44624a 0%,
    #8ba888 100%
)
`
export const ButtonWrap = styled.div`
width: 60px;
height: 200px;
background: #8ba888;
display: flex;
align-items: center;
justify-content: center;
`

export const BackButton = styled(Link)`
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

export const FormWrap = styled.div`
height: 90%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 400px) {
    height: 80px;
}
`
export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px) {
    padding: 10px;
}
`
export const Form = styled.form`
background: #f1ebe1;
max-width: 500px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 50px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);
display: flex;
flex-direction: column;

@media screen and (max-width: 400px) {
    padding: 32px 32px;
    max-width: 300px;
}
`
export const FormH1 = styled.h1`
margin-bottom: 40px;
color: 	#44624a;
font-size: 20px;
font-weight: 1000;
text-align: center;
font-family: "Dantina";
`
export const BothNameWrap = styled.div`
display: grid;
grid-template-columns: auto auto;
align-items: center;
justify-content: center;
width:100%;
margin-left: 20px;
`
export const BottomWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 30px;
width:90%;

`
export const NameWrap = styled.div`
flex-direction: column;
`

export const LabelWrap = styled.div`
display: flex;
align-items: center;
`

export const FormLabel = styled.div`
margin-bottom: 8px;
font-size: 14px;
font-family: "Kano";
color: 	#44624a;
`
export const RequiredAster = styled.p`
font-size: 14px;
color: 	red;
`

export const NameInput = styled.input`
padding: 12px 12px;
margin-bottom: 25px; 
border: none;
border-radius: 4px;
background: #fff;
color: #000;
width: 70%;
&:hover{
    cursor: URL(${clawCursor}), auto;
}
`
export const Input = styled.input`
padding: 12px 12px;
margin-bottom: 25px; 
border: none;
border-radius: 4px;
background: #fff;
color: #000;
width: 90%;
&:hover{
    cursor: URL(${clawCursor}), auto;
}
`
export const MessageInput = styled.textarea`
padding: 12px 12px;
margin-bottom: 25px; 
border: none;
border-radius: 4px;
font-family: "Arial";
font-size: 13.5px;
background: #fff;
color: #000;
resize: none;
width: 90%;
height: 120px;
overflow-wrap: break-word;
&:hover{
    cursor: URL(${clawCursor}), auto;
}
`
export const FormButton = styled.button`
border-radius: 50px;
background:  ${({isVisible}) => (isVisible ? '#f1ebe1' : '#44624a')};
white-space: nowrap;
padding: 10px 22px;
color: 	#f1ebe1;
font-size: 16px;
font-weight: bold;
letter-spacing: 2px;
outline: none;
border: none;
transition: all 0.2s ease-in-out;
text-decoration: none;
width: 120px;
text-align: center;
font-family: "Lato";

&:hover{
    cursor: URL(${clawCursor}), auto;
}
}
`