import styled from 'styled-components'
import {MdOutlineWavingHand} from 'react-icons/md'
import {TbPig} from 'react-icons/tb'

export const FrontContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;
`

export const FrontBackground = styled.div`
position: absolute;
top: 0;
right:0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`
export const VideoBackground = styled.video`
width:100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
`
export const FrontContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padidng: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`

export const FrontH1 = styled.h1`
color: #fff;
font-size: 95px;
text-align: center;
font-family: "Playfair Display";
text-shadow: #c0cfb2 1px 0 10px;

overflow: hidden;
white-space: nowrap;
  width: 0;
  animation: typing 4s steps(21, end) forwards, blink .8s infinite;
  border-right: .12em solid #44624a;
animation-delay: 1s;
@keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink {
    from { border-color: transparent }
    to { border-color: #44624a; }
  }


  @media screen and (max-width: 1150px) {
    font-size: 60px;
  }

  @media screen and (max-width: 700px) {
    font-size: 30px;
  }

  @media screen and (max-width: 400px) {
    font-size: 25px;
  }
`

export const FrontP = styled.p`
margin-top: 10px;
color: #44624a;
font-size: 30px;
text-align: center;
max-width: 600px;
font-family: "Lato";
font-style: italic;

@media screen and (max-width: 768px) {
    font-size: 24px;
}
@media screen and (max-width: 480px) {
    font-size: 18px;
}
`
export const FrontBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`
export const PigIcon = styled(TbPig)`
margin-left: 8px;
font-size: 20px;
`
export const WaveIcon = styled(MdOutlineWavingHand)`
margin-left: 8px;
font-size: 20px;
`