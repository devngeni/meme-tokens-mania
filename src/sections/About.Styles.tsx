import { styled } from "styled-components";
import { LandingButton } from "./Landing.Styles";

export const AboutContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AboutWrapper = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 1;
`;
export const AboutTitle = styled.h1`
  font-family: "Optien", sans-serif;
  font-size: 6.5rem;
  font-weight: 900;
  line-height: 1.2;
  span {
    color: #e701f7;
  }
`;
export const AboutSubtitle = styled.h2`
  font-family: "Quicksand", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: normal;
`;
export const AboutButton = styled(LandingButton)``;
export const AboutTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 50%;
`;
export const AboutImageWrapper = styled.div`
  width: 50%;
  height: 60%;
  background: url("/imagine.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  position: relative;
  z-index: 1;
`;

export const FindWrapper = styled.div`
width: 80%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;
`;
