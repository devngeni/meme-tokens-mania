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
`;
export const FooterTitle = styled.h1`
  font-family: "PT Sans", sans-serif;
  font-size: 1.2rem;
`;
export const FooterSubtitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  gap: 2rem;
`;
export const FooterText = styled.div``;
export const FooterTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
export const FooterImg = styled.div``;
