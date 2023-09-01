import React, {useState} from 'react'
import {MdOutlineWavingHand} from 'react-icons/md'
import {TbPig} from 'react-icons/tb'
import Video from './videos/video.mp4'

import { FrontContainer, FrontBackground, FrontContent, FrontH1, FrontP, FrontBtnWrapper, Button } from './FrontHomeElements'

const FrontHome = () => {
    const [hover, setHover] = useState(false)

  return (
    <FrontContainer id="home">
        <FrontBackground>
            <video style={{width:'100%', height: '100%', objectFit: 'cover'}} autoPlay loop muted src={Video} />
        </FrontBackground>
        <FrontContent>
            <FrontH1>Christine's Portfolio</FrontH1>
            <FrontP>Welcome to my website</FrontP>
            <FrontBtnWrapper>
                <Button to="contact" 
                onMouseEnter={()=>{setHover(!hover)}} 
                onMouseLeave={()=>{setHover(!hover)}}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                >Say hi<br></br>to Turnips
                {hover ? <TbPig style={{marginLeft: '8px', fontSize: '20px'}} /> : <MdOutlineWavingHand style={{marginLeft: '8px', fontSize: '20px'}} />}
                </Button>
            </FrontBtnWrapper>
        </FrontContent>
    </FrontContainer>
  )
}

export default FrontHome
