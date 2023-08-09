import { styled } from "styled-components";
import { LandingTitle } from "./Landing.Styles";
import { BodyContainer } from "./Commons";

export const HowContainer = styled(BodyContainer)`
  position: relative;
  z-index: 1;
  padding: 2% 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;
`;
export const HowWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 3;
`;
export const HowTitle = styled(LandingTitle)`
  display: flex;
  text-align: center;
`;
export const HowSubtitle = styled.h2`
  font-family: "Optien", sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: normal;
  color: #e701f7;
`;
export const HowText = styled.div`
  font-family: "Chakra Petch", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #a6a6a6;
`;
export const HowTextWrapper = styled.div``;
export const HowImageWrapper = styled.div``;
export const HowCard = styled.div`
  border: 1px solid #080426;
  background-image: linear-gradient(to top, #232323, rgba(0, 0, 0, 0));
  backdrop-filter: blur(40px);
  width: 50%;
  height: 30vh;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  background: url("Gradient.svg");
  padding: 2%;
`;
