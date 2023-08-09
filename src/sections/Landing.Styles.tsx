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
export const LanndingWrapper = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  background-size: cover;
  position: relative;
  z-index: 1;
  opacity: 1;
`;
export const LandingTitle = styled.h1`
  font-family: "Optien", sans-serif;
  font-size: 6.5rem;
  font-weight: 900;
  line-height: 1.0;
  width: 100%;
  span {
    color: #e701f7;
  }
`;
export const LandingSubtitle = styled.h2`
  font-family: "PT Sans", sans-serif, sans-serif "Space Grotesk", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: normal;
  width: 100%;
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
`;
export const LandingImage = styled.div`
  width: 50%;
  height: 100%;
  background: url("/Card.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
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
`;

export const StyledText = styled.p`
  &:nth-child(1) {
    margin-right: 5%;
  }
  &:nth-child(2) {
    margin-right: -16%;
    color: #e701f7;
  }
  &:nth-child(3) {
    margin-right: -39%;
  }
  font-family: "Optien", sans-serif;
  font-size: 5.5rem;
`;
