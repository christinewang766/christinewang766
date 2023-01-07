import styled from 'styled-components'
import clawCursor from './clawCursor.png'

export const WorkContainer = styled.div`
background: #c0cfb2;
display: flex;
height: 800px;
align-items: center;
justify-content: center;
flex-direction: column;

@media screen and (max-width: 768px) {
    padding: 100px 0;
}
`

export const WorkWrapper = styled.div`
width: 600px;
height: 400px;
background: #fff;

@media screen and (max-width: 650px) {
    width: 450px;
    height: 500px;
}

@media screen and (max-width: 400px) {
    width: 100%;
}
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 10px;
`
export const ImgWrap = styled.div`
position: relative;
`
export const Img = styled.img`
width: 15%;
transform: rotate(45deg);
position: absolute;
        top: 16px;
        right: 0px;
`

export const Heading = styled.h1`
font-size: 8rem;
color: #fff;
font-family: "Playfair Display";
padding-bottom: 20px;
margin-top: -90px;

@media screen and (max-width: 500px) {
    font-size: 4.5rem;
}
`

export const TitleWrap = styled.div`
display: flex;
align-items: center;
`

export const TitleJob = styled.h2`
font-family: "Lato";
padding: 12px;
color: 	#44624a;
`
export const Location = styled.h4`
font-family: "Lato";
color: #8ba888;
`

export const Date = styled.h4`
padding: 20px;
padding-bottom: 0;
color: #8ba888;
font-family: "Lato";
font-style: italic;
letter-spacing: 2px;

`
export const Description = styled.ul`

@media screen and (max-width: 400px) {
    width: 100%;
}
`
export const DescriptionWrap = styled.div`
width: 530px;
display: flex;
align-items: center;
justify-content: center;
padding: 20px;

@media screen and (max-width: 650px) {
    width: 400px;
}

@media screen and (max-width: 400px) {
    width: 100%;
}
`
export const ListItem = styled.li`
list-style: circle solid;
list-style-position: inside;
margin-bottom: 15px; 
font-family: "Lato";
// color: 	#44624a;
color: red; //TODO
`

export const Divider = styled.div`
    width:15px;
    height:auto;
    display:inline-block;
`

export const Button1 = styled.button`
font-weight: bold;
letter-spacing: 2px;
text-align: center;
font-family: "Lato";
border: none;
padding: 10px;
color: ${({ isOneSelected }) => (isOneSelected ? '#fff' : '	#000')};
box-shadow: ${({ isOneSelected }) => (isOneSelected ? '10px 10px 0 #f1ebe1' : '10px 10px 0 #aaaaaa')};
background: ${({ isOneSelected }) => (isOneSelected ? '#44624a' : '	#f1ebe1')};

&:hover{
    cursor: URL(${clawCursor}), auto;
}
`
export const Button2 = styled.button`
font-weight: bold;
letter-spacing: 2px;
text-align: center;
font-family: "Lato";
border: none;
padding: 10px;
color: ${({ isTwoSelected }) => (isTwoSelected ? '#fff' : '	#000')};
box-shadow: ${({ isTwoSelected }) => (isTwoSelected ? '10px 10px 0 #f1ebe1' : '10px 10px 0 #aaaaaa')};
background: ${({ isTwoSelected }) => (isTwoSelected ? '#44624a' : '	#f1ebe1')};

&:hover{
    cursor: URL(${clawCursor}), auto;
}
`
export const Button3 = styled.button`
font-weight: bold;
letter-spacing: 2px;
text-align: center;
font-family: "Lato";
border: none;
padding: 10px;
color: ${({ isThreeSelected }) => (isThreeSelected ? '#fff' : '	#000')};
box-shadow: ${({ isThreeSelected }) => (isThreeSelected ? '10px 10px 0 #f1ebe1' : '10px 10px 0 #aaaaaa')};
background: ${({ isThreeSelected }) => (isThreeSelected ? '#44624a' : '	#f1ebe1')};

&:hover{
    cursor: URL(${clawCursor}), auto;
}
`

export const Button4 = styled.button`
font-weight: bold;
letter-spacing: 2px;
text-align: center;
font-family: "Lato";
border: none;
padding: 10px;
color: ${({ isFourSelected }) => (isFourSelected ? '#fff' : '	#000')};
box-shadow: ${({ isFourSelected }) => (isFourSelected ? '10px 10px 0 #f1ebe1' : '10px 10px 0 #aaaaaa')};
background: ${({ isFourSelected }) => (isFourSelected ? '#44624a' : '	#f1ebe1')};

&:hover{
    cursor: URL(${clawCursor}), auto;
}
`

export const BlockTabs = styled.div`
bottom:50px;
right:50px;
display: block;
`
export const Line = styled.div`
border-top: 2px solid #000;
margin-left: 5px;
margin-right: 5px;
`
export const ContentTabs = styled.div`
flex-grow : 1;
`
export const Content1 = styled.div`
padding: 20px;
width: 100%;
height: 100%;
display: ${({ isOneSelected }) => (isOneSelected ? 'block' : 'none')};
`
export const Content2 = styled.div`
padding: 20px;
width: 100%;
height: 100%;
display: ${({ isTwoSelected }) => (isTwoSelected ? 'block' : 'none')};
`
export const Content3 = styled.div`
padding: 20px;
width: 100%;
height: 100%;
display: ${({ isThreeSelected }) => (isThreeSelected ? 'block' : 'none')};
`
export const Content4 = styled.div`
padding: 20px;
width: 100%;
height: 100%;
display: ${({ isFourSelected }) => (isFourSelected ? 'block' : 'none')};
`