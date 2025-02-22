import React, { useState } from 'react'
import { MdOutlineWavingHand } from 'react-icons/md'
import { TbPig } from 'react-icons/tb'

import { FrontContainer, FrontBackground, FrontContent, FrontH1, FrontP, FrontBtnWrapper, Button } from './FrontHomeElements'


const FrontHome = () => {
    const [hover, setHover] = useState(false)

    const PreloadIcons = () => (
        <div style={{ visibility: 'hidden', position: 'absolute', height: 0, overflow: 'hidden' }}>
            <TbPig />
            <MdOutlineWavingHand />
        </div>
    );


    return (
        <>
            <PreloadIcons />
            <FrontContainer id="home">
                <FrontBackground />
                <FrontContent>
                    <FrontH1>Christine's Portfolio</FrontH1>
                    <FrontP>Welcome to my website!</FrontP>
                    <FrontP>Try not to get lost in here...👀</FrontP>
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
        </>
    )
}

export default FrontHome
