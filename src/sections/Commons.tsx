import { styled } from "styled-components";

export const BodyWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  opacity: 1;
  z-index: 1;
  background: url("/Illustration.svg");
  background-repeat: no-repeat;
  background-size: 100% 80%;
  background-position: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: url("Gradient.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
  }
`;
