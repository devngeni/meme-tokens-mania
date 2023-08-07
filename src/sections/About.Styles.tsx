import { styled } from "styled-components";
import { LandingButton } from "./Landing.Styles";
import { BodyContainer } from "./Commons";

export const AboutContainer = styled(BodyContainer)``;
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
  font-family: "PT Sans", sans-serif, sans-serif "Space Grotesk", sans-serif;
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
`;
export const FindContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 2rem;
`;
