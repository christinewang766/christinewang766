import styled from "styled-components";
import { Link } from "react-scroll";
import FrogPot from "../images/frogPot.png";
import PigPot from "../images/pigPot.png";

export const FrontContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const FrontBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const FrontContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padidng: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FrontH1 = styled.h1`
  color: #fff;
  font-size: 95px;
  text-align: center;
  font-family: "Playfair Display";
  text-shadow: #c0cfb2 1px 0 10px;

  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: typing 4s steps(21, end) forwards, blink 0.8s infinite;
  border-right: 0.12em solid #44624a;
  animation-delay: 1s;
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink {
    from {
      border-color: transparent;
    }
    to {
      border-color: #44624a;
    }
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
`;

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
`;
export const FrontBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled(Link)`
  white-space: nowrap;
  font-size: 16px;
  outline: none;
  font-family: "Lato";
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: URL(${FrogPot});
  background-repeat: no-repeat;
  background-size: 200px 150px;
  background-position: center;
  white-space: nowrap;
  padding: 70px 60px;
  color: #fff;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: URL(${PigPot});
    background-repeat: no-repeat;
    background-size: 200px 150px;
    background-position: center;
  }
`;
