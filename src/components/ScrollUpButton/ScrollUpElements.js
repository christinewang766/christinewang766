import styled from 'styled-components';
import Cheerio from "./cheerio.png"

export const Heading = styled.h1`
   text-align: center;
   color: green;
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
  
export const ButtonWrap = styled.div`

`

export const Button = styled.div`
   position: fixed; 
   left: 50%;
   bottom: 40px;
   height: 20px;
   z-index: 1;
   width: 55px;
   height: 55px;
   color:#fff;
   
   background: URL(${Cheerio});
   background-repeat: no-repeat;
   background-size: 55px 55px;
   background-position: center;


`