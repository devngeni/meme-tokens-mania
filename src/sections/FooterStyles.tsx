import { styled } from "styled-components";
import { BodyContainer } from "./Commons";

export const FooterContainer = styled(BodyContainer)`
width: 100%;
height: 100%;
opacity: 1;
position: relative;
z-index: 1;
&:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url("/city.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.5;
  z-index: -1;
}
`;
export const FooterWrapper = styled.div`
  width: 80%;
  height: 100%;
  align-items: start;
  display: flex;
  flex-direction: column;
  padding: 2% 0 1% 0;
  gap: 2rem;
  @media screen and (max-width: 1300px) {
    padding: 5% 0 1% 0;
    width: 90%;
  }
`;
export const FooterTitle = styled.h1`
  font-family: "Chakra Petch", sans-serif;
  font-size: clamp(0.8rem, calc(0.8rem + ((1vw - 0.1375rem) * 0.381)), 1.2rem);
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
export const FooterSubtitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  gap: 2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
export const FooterText = styled.div`
cursor: pointer;
`;
export const FooterTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;
export const FooterImg = styled.div``;
