import styled from 'styled-components'
import TextBox from './media/textBox.png'
import TV from './media/tv.png'
import clawCursor from './media/clawCursor.png'
import HeartsDoodle from './media/hearts.png'
import Back from './media/background.png'
import Home from './media/home.png'

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
@media screen and (max-width: 560px){
  font-size: 15px;
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

@media screen and (max-width: 560px){
  width: 150px;
  height: 50px;
   }
`
export const HeaderWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 250px;

@media screen and (max-width: 1000px){
gap: 0;
flex-direction: column;
}
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
@media screen and (max-width: 560px){
  font-size:3rem;
   }
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
background-pos  ition: center;
margin-top: -16%;
margin-left: 50%;
@media screen and (max-width: 720px){
  width: 80px;
height: 80px;
   }
   @media screen and (max-width: 500px){
    width: 0;
  height: 0;
     }
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

@media screen and (max-width: 720px){
  width: 100px;
height: 100px;
   }
   @media screen and (max-width: 500px){
    width: 0;
  height: 0;
     }
`

export const GridWrap = styled.div`
background: #8ba888;
width: 100%;
display: grid;
grid-template-columns: auto auto;
align-items: center;
justify-content: center;
gap: 40px;

@media screen and (max-width: 1400px){
grid-template-columns: auto;
gap:0;
}
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

@media screen and (max-width: 1000px){
  width: 60%;
  height:100%;
  }
  @media screen and (max-width: 720px){
    width:100%;
    height:735px;
     }
     @media screen and (max-width: 560px){
      width:70%;
      height:400px;
       }
       @media screen and (max-width: 400px){
        width: 90%;
      height: 400px;
         }
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

@media screen and (max-width: 1000px){
  width: 80%;
  height:100%;
  }
  @media screen and (max-width: 720px){
    height:600px;
     }
     @media screen and (max-width: 560px){
      height:300px;
       }
       @media screen and (max-width: 400px){
      height: 250px;
         }
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

@media screen and (max-width: 1000px){
  font-size: 15px;
  padding:10px;
  padding-bottom: 0px;
text-underline-offset: 5px;
  }
  
  @media screen and (max-width: 560px){
    font-size: 9px;
  padding:0px;
text-underline-offset: 2px;
     }
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

@media screen and (max-width: 1000px){
  font-size: 15px;
  padding:10px;
  padding:10px;
  padding-bottom: 25px;
  }

  @media screen and (max-width: 560px){
    font-size: 9px;
  padding:0px;
text-underline-offset: 2px;
     }
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
@media screen and (max-width: 1000px){
  font-size: 15px;
  }
  @media screen and (max-width: 560px){
    font-size: 7px;
  padding: 0px;
     }
`
export const Topic = styled.p`
font-family: "Lato";
font-weight: 1000;
font-size: 20px;
padding-left: 20px;
padding-top: 10px;
color: #8ba888;
@media screen and (max-width: 1000px){
  font-size: 15px;
  padding-left: 10px;
  }
  @media screen and (max-width: 560px){
    font-size: 7px;
  padding: 0px;
     }
`
export const Description = styled.ul`
padding: 30px;
padding-top: 20px;
padding-bottom: 10px;
@media screen and (max-width: 1000px){
  padding-top: 10px;
  padding-bottom: 0;
  }
  @media screen and (max-width: 560px){
  padding: 0px;
  padding-top: 5px;
     }
`
export const ListItem = styled.li`
margin-bottom: 15px;
font-family: "Lato";
font-size: 18px;
line-height: 26px;
color: 	#44624a;

@media screen and (max-width: 1000px){
  font-size: 14px;
  margin-bottom: 10px;
  }
  @media screen and (max-width: 560px){
    font-size: 7px;
  padding: 0px;
  line-height: 10px;
     }
`
export const DemoWrap = styled.div`
width: 700px;
margin-bottom:80px;
height: 550px;
background: URL(${TV});
background-repeat: no-repeat;
background-size: 100%;
background-position: center;

@media screen and (max-width: 720px){
 width: 500px;
 margin-bottom: 0px;
  }
  @media screen and (max-width: 560px){
    width: 300px;
    margin-top:-90px;
     }
     @media screen and (max-width: 400px){
      margin-top:-140px;
         }
`
export const VidWrap = styled.div`
margin-left: 38px;
margin-top: 153px;
width: 500px;
height: 334px;

@media screen and (max-width: 720px){
  width: 355px;
  margin-left: 28px;
margin-top: 188px;
   }
   @media screen and (max-width: 560px){
    width: 215px;
  margin-left: 17px;
margin-top: 222px;
     }
`
export const DemoVid = styled.video`
width:100%;

&:hover {
    cursor: URL(${clawCursor}),auto;
}
`
export const HomeImg = styled.div`
width:100%;
height:100%;
background: URL(${Home});
background-size: auto 100%;
background-position: center;
background-repeat: no-repeat;
`

