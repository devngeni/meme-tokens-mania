import { styled } from "styled-components";
import { BodyContainer } from "./Commons";

export const LandingContainer = styled(BodyContainer)`
  height: auto;
  flex-direction: column;
  position: relative;
  background: url("Gradient.svg");
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  opacity: 1;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: url("/Orb.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left;
    width: 100%;
    height: 100%;
    opacity: 0.1;
  }
`;
export const LandingWrapper = styled.div`
  width: 80%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  background-size: cover;
  position: relative;
  z-index: 1;
  opacity: 1;
  @media screen and (max-width: 1300px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
export const LandingTitle = styled.h1`
  font-family: "Optien", sans-serif;
  font-size: clamp(2rem, calc(2rem + ((1vw - 0.1375rem) * 4.2857)), 6.5rem);
  font-weight: 900;
  line-height: 1;
  width: 100%;
  span {
    background: linear-gradient(17deg, #ffd2ed 1.45%, #01baef 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const LandingSubtitle = styled.h2`
  font-family: "PT Sans", sans-serif, sans-serif "Space Grotesk", sans-serif;
  font-size: clamp(0.9rem, calc(0.9rem + ((1vw - 0.1375rem) * 0.2857)), 1.2rem);
  font-weight: 400;
  line-height: 1.5;
  width: 100%;
  @media screen and (max-width: 768px) {
    color: #c1c1c1;
  }
`;
export const LandingButton = styled.button`
  background: radial-gradient(
      105.88% 119.25% at 143.13% 83.12%,
      #1a52e2 0%,
      rgba(26, 82, 226, 0) 100%
    ),
    radial-gradient(
      228.64% 159.06% at 23.75% -42.81%,
      #f920ff 7.21%,
      rgba(0, 0, 0, 0) 92.56%
    ),
    linear-gradient(
      182deg,
      rgba(6, 19, 74, 0.03) 0%,
      rgba(6, 19, 74, 0.06) 100%
    );
  backdrop-filter: blur(3.250000238418579px);
  width: 300px;
  height: 60px;
  border-radius: 30px;
  border: none;
  color: #fff;
  font-family: "PT Sans", sans-serif, sans-serif "Space Grotesk", sans-serif;
  font-size: 1.2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const LandingImage = styled.div`
  width: 100%;
  height: 60%;
  background: url("/Musk4.png");
  border-radius: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 30vh;
    background-position: center;
    background-size: cover;
  }
`;

export const TextWrapper = styled.div`
  text-align: center;
  width: 100%;
  line-height: 1.2;
  position: relative;
  z-index: 2;
  opacity: 1;
  background: #000;
  border-radius: 0 160px;
  padding: 5%;
  max-width: 400px;

  & > div {
    margin-left: 0;
    transition: margin-left 0.2s ease-in-out;
  }

  & > div:nth-child(2) {
    margin-left: 40px;
  }

  & > div:nth-child(3) {
    margin-left: 80px;
  }

  @media (max-width: 600px) {
    & > div:nth-child(2) {
      margin-left: 20px;
    }

    & > div:nth-child(3) {
      margin-left: 40px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 17%;
  }
`;

export const StyledText = styled.p`
  &:nth-child(1) {
    margin-right: 5%;
  }
  &:nth-child(2) {
    background: linear-gradient(17deg, #ffd2ed 1.45%, #01baef 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &:nth-child(3) {
    margin-right: -39%;
  }
  font-family: "Optien", sans-serif;
  font-size: clamp(2rem, calc(2rem + ((1vw - 0.1375rem) * 3.3333)), 5.5rem);
  @media screen and (max-width: 768px) {
    &:nth-child(1) {
      margin-right: 0;
    }
    &:nth-child(2) {
      margin-right: 0;
    }
    &:nth-child(3) {
      margin-right: 0;
    }
  }
`;
