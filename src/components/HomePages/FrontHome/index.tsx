import React, { useState } from 'react'
import { MdOutlineWavingHand } from 'react-icons/md'
import { TbPig } from 'react-icons/tb'

import { FrontContainer, FrontBackground, FrontContent, FrontH1, FrontP, FrontBtnWrapper, Button } from './FrontHomeElements'


const FrontHome = () => {
    const [hover, setHover] = useState(false)

    function preloadImage(url: string) {
        var img = new Image();
        img.src = url;
    }

    preloadImage('./images/mainpagebackground.gif');
    preloadImage('../images/pigPot.png');

    return (
        <FrontContainer id="home">
            <FrontBackground />
            <FrontContent>
                <FrontH1>Christine's Portfolio</FrontH1>
                <FrontP>Welcome to my website</FrontP>
                <FrontBtnWrapper>
                    <Button to="contact"
                        onMouseEnter={() => { setHover(!hover) }}
                        onMouseLeave={() => { setHover(!hover) }}
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-80}
                    >Say hi<br></br>to Turnips
                        {hover ? <TbPig style={{ marginLeft: '8px', fontSize: '20px' }} /> : <MdOutlineWavingHand style={{ marginLeft: '8px', fontSize: '20px' }} />}
                    </Button>
                </FrontBtnWrapper>
            </FrontContent>
        </FrontContainer>
    )
}

export default FrontHome
