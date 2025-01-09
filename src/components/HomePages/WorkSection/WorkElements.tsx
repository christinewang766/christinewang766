import styled from "styled-components";
import clawCursor from "./clawCursor.png";

export const WorkContainer = styled.div`
  background: #c0cfb2;
  display: flex;
  height: 800px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: auto;
  }
`;

export const WorkWrapper = styled.div`
  width: 600px;
  height: 400px;
  background: #fff;

  @media screen and (max-width: 650px) {
    width: 450px;
    height: 500px;
  }

  @media screen and (max-width: 460px) {
    width: 100%;
    height: 100%;
  }
`;

export const Img = styled.img`
  width: 15%;
  transform: rotate(45deg);
  position: absolute;
  top: 16px;
  right: 0px;
`;

export const Heading = styled.h1`
  font-size: 8rem;
  color: #fff;
  font-family: "Playfair Display";
  padding-bottom: 20px;
  margin-top: -90px;

  @media screen and (max-width: 500px) {
    font-size: 4.5rem;
  }
`;

export const Date = styled.h4`
  padding: 20px;
  padding-bottom: 0;
  color: #8ba888;
  font-family: "Lato";
  font-style: italic;
  letter-spacing: 2px;
`;

export const Description = styled.ul`
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const DescriptionWrap = styled.div`
  width: 530px;
  display: flex;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: 650px) {
    width: 400px;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const ListItem = styled.li`
  list-style: circle solid;
  list-style-position: inside;
  margin-bottom: 15px;
  font-family: "Lato";
  color: #44624a;
`;

export const Divider = styled.div`
  width: 15px;
  height: auto;
  display: inline-block;
`;

export const Button = styled.button`
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  font-family: "Lato";
  border: none;
  padding: 10px;

  &:hover {
    cursor: URL(${clawCursor}), auto;
  }
`;
