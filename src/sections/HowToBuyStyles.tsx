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
  @media screen and (max-width: 1300px) {
    height: 100%;
  }
  @media screen and (max-width: 768px) {
  text-align: center;
  }
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
  font-size: clamp(1.2rem, calc(1.2rem + ((1vw - 0.1375rem) * 0.5714)), 1.8rem);
  font-weight: 400;
  line-height: normal;
  background: linear-gradient(17deg, #ffd2ed 1.45%, #01baef 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const HowText = styled.div`
  font-family: "Chakra Petch", sans-serif;
  font-size: clamp(0.9rem, calc(0.9rem + ((1vw - 0.1375rem) * 0.2857)), 1.2rem);
  font-weight: 400;
  line-height: 1.5;
  color: #a6a6a6;
`;
export const HowTextWrapper = styled.div`
display: flex;
flex-direction: column;
text-align: start;
@media screen and (max-width: 768px) {
  text-align: center;
}
`;
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
  gap: 2rem;
  justify-content: start;
  background: url("Gradient.svg");
  align-items: center;
  padding: 2%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;
