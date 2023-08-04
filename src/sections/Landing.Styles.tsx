import { styled } from "styled-components";

export const LandingContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background: url('/ORB.svg');
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: url('Gradient.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
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
  line-height: 1.2;
  width: 100%;
  span {
    color: #e701f7;
  }
`;
export const LandingSubtitle = styled.h2`
  font-family: "Quicksand", sans-serif;
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
  font-family: "Quicksand", sans-serif;
  font-size: 1.2rem;
`;
export const LandingImage = styled.div`
  width: 70%;
  height: 100%;
  background: url("/Card.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
`;

export const TextWrapper = styled.div`
  text-align: center;
  width: 50%;
  line-height: 1.2;
  position: relative;
  z-index: 2;
  opacity: 1;
  &::before {
    position: absolute;
    background: url("/city.png");
    background-size: cover;
    background-position: center;
    border-radius: 30px;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.8;
  }
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
  font-size: 6.5rem;
`;
