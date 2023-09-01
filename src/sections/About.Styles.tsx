import { styled } from "styled-components";
import { LandingButton } from "./Landing.Styles";
import { BodyContainer } from "./Commons";

export const AboutContainer = styled(BodyContainer)`
position: relative;
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
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 100%;
    flex-direction: column;
    gap: 1rem;
    padding: 5% 0;
  }
`;
export const AboutTitle = styled.h1`
  font-family: "Optien", sans-serif;
  font-size: clamp(2rem, calc(2rem + ((1vw - 0.1375rem) * 4.2857)), 6.5rem);
  font-weight: 900;
  line-height: 1.2;
  span {
    background: linear-gradient(17deg, #ffd2ed 1.45%, #01baef 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const AboutSubtitle = styled.h2`
  font-family: "PT Sans", sans-serif, sans-serif "Space Grotesk", sans-serif;
  font-size: clamp(0.9rem, calc(0.9rem + ((1vw - 0.1375rem) * 0.2857)), 1.2rem);
  font-weight: 400;
  line-height: normal;
  @media screen and (max-width: 768px) {
    color: #c1c1c1;
    span {
      color: #fff;
    }
  }
`;
export const AboutButton = styled(LandingButton)``;
export const AboutTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 50%;
  @media screen and (max-width: 1300px) {
    gap: 1rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;
export const AboutImageWrapper = styled.div`
  width: 50%;
  height: 60%;
  background: url("/donald.gif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 1300px) {
    width: 50%;
    height: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 30vh;
  }
`;
export const FindWrapper = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    gap: 1rem;
    padding: 5% 0;
  }
`;
export const LogoWrapper = styled.div`
  background: linear-gradient(
    66deg,
    #080426 5.46%,
    #110f7a 42.18%,
    #f820fe 100%
  );
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  @media screen and (max-width: 1300px) {
    width: 70px;
    height: 70px;
    svg {
      width: 30px;
      height: 30px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
export const FindContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 2rem;
  position: relative;
  @media screen and (max-width: 1300px) {
    width: 50%;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    gap: 1rem;
  }
`;
