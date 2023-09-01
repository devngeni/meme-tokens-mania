import Link from "next/link";
import Logo from "../../public/Logo";
import {
  FooterContainer,
  FooterImg,
  FooterSubtitle,
  FooterText,
  FooterTextWrapper,
  FooterTitle,
  FooterWrapper
} from "./FooterStyles";

export default function Footer() {
  const footerData = [
    {
      text: "about",
      link: "#aboutus"
    },
    {
      text: "tokenomics",
      link: "#tokenomics"
    },
    {
      text: "roadmap",
      link: "#roadmap"
    },
    {
      text: "how to buy",
      link: "#howtobuy"
    },
    {
      text: "contact",
      link: "#contact"
    }
  ];
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterImg>
          <Logo />
        </FooterImg>
        <FooterTextWrapper>
          <FooterTitle>
            Copyright &#xa9; {new Date().getFullYear()} $XTrump. All rights
            reserved.
          </FooterTitle>
          <FooterSubtitle>
            {footerData.map((item, index) => (
              <FooterText key={index}>
                <Link href={item.link}> {item.text}</Link>
              </FooterText>
            ))}
          </FooterSubtitle>
        </FooterTextWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
}
