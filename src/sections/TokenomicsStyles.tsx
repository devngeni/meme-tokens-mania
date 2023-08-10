import { styled } from "styled-components";
import { LandingTitle } from "./Landing.Styles";
import { BodyContainer } from "./Commons";

export const TokenomicsContainer = styled(BodyContainer)`
  height: 100vh;
  @media screen and (max-width: 1300px) {
    height: 100%;
  }
`;
export const TokenomicsWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media screen and (max-width: 1300px) {
    width: 90%;
    gap: 1rem;
    padding: 5% 0;
  }
`;
export const TokenomicsTitle = styled(LandingTitle)`
  display: flex;
  width: 100%;
  text-align: center;
`;
export const TokenomicsSubtitle = styled.h2``;
export const TokenomicsText = styled.div``;
export const TokenomicsTextWrapper = styled.div``;
export const TokenomicsImg = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 20vh;
  }
`;
