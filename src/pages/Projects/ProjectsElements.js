import styled from 'styled-components'
import TextBox from './media/textBox.png'
import TV from './media/tv.png'
import clawCursor from './media/clawCursor.png'
import HeartsDoodle from './media/hearts.png'
import Back from './media/background.png'

export const BackButton = styled.button`
outline: none;
font-family: "Florentia";  
font-size: 25px;
white-space: nowrap;
font-weight: bold;
letter-spacing: 5px;
color: #44624a;

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
width: 200px;
height: 60px;
background: #44624a;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 20px 10px #f1ebe1;


@media screen and (max-width: 400px) {
  width: 30px;
height: 100px;
}
`
export const HeaderWrap = styled.div`
display: grid;
grid-template-columns: auto auto auto;
align-items: center;
justify-content: center;
gap: 250px;
`

export const Container = styled.div`
width:100%;
height: auto;
display: flex;
align-items: center;
justify-content: center;
background:#8ba888;
`
export const ProjectWrap = styled.div`
width: 90%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #8ba888;

`
export const Header = styled.h1`
font-size: 8rem;
font-family: "PLayfair Display";
letter-spacing: 2px;
color:#fff;
padding: 15px;
`
export const Project1Wrap = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
padding-bottom: 20px;
`
export const Hearts = styled.div`
width: 170px;
height: 170px;
background: URL(${HeartsDoodle});
background-repeat: no-repeat;
background-size: 100%;
background-position: center;
margin-top: -16%;
margin-left: 50%;
`
export const Hearts2 = styled.div`
width: 170px;
height: 170px;
margin-top: 750px;
background: URL(${HeartsDoodle});
background-repeat: no-repeat;
background-size: 100%;
background-position: center;
position: absolute;
right: 0;
`
export const GridWrap = styled.div`
background: #8ba888;
width: 100%;
display: grid;
grid-template-columns: auto auto;
align-items: center;
justify-content: center;
gap: 40px;
`
export const TextBoxWrap = styled.div`
width: 630px;
height: 850px;
background: URL(${TextBox});
background-repeat: no-repeat;
background-size: 100%;
background-position: center;
padding-right: 50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const TextWrap = styled.div`
background: #fff;
box-shadow: 1px 1px 3px #8ba888;
display: flex;
width: 460px;
margin-left: 50px;
margin-top: -5px;
padding-left: 20px;
flex-direction: column;
justify-content: center;
`
export const Title1 = styled.h2`
padding: 20px;
padding-bottom: 25px;
color: #44624a;
text-decoration: #44624a wavy underline;
text-underline-offset: 35px;
font-size: 20px;
letter-spacing: 4px;
font-family: "Dantina";
`
export const Title2 = styled.h2`
padding: 20px;
padding-bottom: 25px;
color: #44624a;
text-decoration: #44624a wavy underline;
text-underline-offset: 35px;
font-size: 25px;
letter-spacing: 4px;
font-family: "Dantina";
`
export const GitWrap = styled.div`
display: flex;
align-items: center;
`
export const GitLink = styled.a`
font-family: "Lato";
font-weight: 1000;
font-style: italic;
font-size: 17px;
padding: 12px;
padding-right: 30px;
padding-bottom: 0;
color: #8ba888;
`
export const Topic = styled.p`
font-family: "Lato";
font-weight: 1000;
font-size: 20px;
padding-left: 20px;
padding-top: 10px;
color: #8ba888;
`
export const Description = styled.ul`
padding: 30px;
padding-top: 20px;
padding-bottom: 10px;
`
export const ListItem = styled.li`
margin-bottom: 15px;
font-family: "Lato";
font-size: 18px;
line-height: 26px;
color: 	#44624a;
`
export const DemoWrap = styled.div`
width: 700px;
margin-bottom:80px;
height: 550px;
background: URL(${TV});
background-repeat: no-repeat;
background-size: 100%;
background-position: center;
`
export const VidWrap = styled.div`
margin-left: 38px;
margin-top: 153px;
width: 500px;
height: 334px;
background: rgba(140,140,140,0.5);
`
export const DemoVid = styled.video`
width:100%;

&:hover {
    cursor: URL(${clawCursor}),auto;
}
`

