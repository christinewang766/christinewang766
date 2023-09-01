import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Img, BackButton, ButtonWrap } from './TurnipsElements'

const Turnips = () => {
  let navigate = useNavigate();

  return (
    <>
    <div id='turnips' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Img />
        <ButtonWrap>
          <BackButton onClick={() => navigate(-1)}>GO BACK</BackButton>
        </ButtonWrap>
    </div>
    </>
  )
}

export default Turnips
