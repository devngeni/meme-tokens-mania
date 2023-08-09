import { styled } from "styled-components";

export const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  background: transparent;
  z-index: 100;
`;
export const NavbarWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: transparent;
`;

export const NavbarLogo = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavbarTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavbarText = styled.div`
  font-family: "Chakra Petch", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
`;
