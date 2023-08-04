import { styled } from "styled-components";
import { LandingTitle } from "./Landing.Styles";

export const HowContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3;
`;
export const HowWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const HowTitle = styled(LandingTitle)`
  display: flex;
  text-align: center;
`;
export const HowSubtitle = styled.h2`
  font-family: "Optien", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: normal;
  color: #e701f7;
`;
export const HowText = styled.div`
  font-family: "Quicksand", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
`;
export const HowTextWrapper = styled.div``;
export const HowImageWrapper = styled.div``;
export const HowCard = styled.div`
  background: transparent;
  backdrop-filter: blur(40px);
  width: 50%;
  height: 30vh;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  background: url("Gradient.svg");
`;
