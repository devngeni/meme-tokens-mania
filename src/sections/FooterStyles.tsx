import { styled } from "styled-components";
import { BodyContainer } from "./Commons";

export const FooterContainer = styled(BodyContainer)`
  background: #000;
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
export const FooterText = styled.div``;
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
