import { styled } from "styled-components";

export const BodyWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  opacity: 1;
  z-index: 1;
  overflow-y: hidden;
  scrollbar-width: none;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: url("Gradient.svg");
    background-repeat: no-repeat;
    background-size: 00%;
    background-position: bottom;
    width: 100%;
    height: 100%;
  }
`;

export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("Gradient.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
