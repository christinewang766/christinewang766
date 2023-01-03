import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Img, BackButton, ButtonWrap } from './TurnipsElements'

const Turnips = () => {
  let navigate = useNavigate();

  return (
    <>
    <Container id='turnips'>
        <Img />
        <ButtonWrap>
          <BackButton onClick={() => navigate(-1)}>GO BACK</BackButton>
        </ButtonWrap>
    </Container>
    </>
  )
}

export default Turnips
