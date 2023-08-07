import Logo from "../../public/Logo";
import {
  NavbarContainer,
  NavbarLogo,
  NavbarWrapper,
  NavbarTextWrapper,
  NavbarText,
} from "./NavbarStyles";

export default function Navbar() {
  const footerData = [
    {
      text: "about",
      link: "#aboutus",
    },
    {
      text: "tokenomics",
      link: "#tokenomics",
    },
    {
      text: "roadmap",
      link: "#roadmap",
    },
    {
      text: "how to buy",
      link: "#howtobuy",
    },
    {
      text: "contact",
      link: "#contact",
    },
  ];
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarLogo>
        <Logo /></NavbarLogo>
      <NavbarTextWrapper>
        {footerData.map((item, index) => (
          <NavbarText key={index}>{item.text}</NavbarText>
        ))}
      </NavbarTextWrapper>
      </NavbarWrapper>
    </NavbarContainer>
  );
}