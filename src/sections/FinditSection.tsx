import Logo from "../../public/Logo";
import Twitter from "../../public/Twitter";
import Telegram from "../../public/Telegram";
import Discord from "../../public/Discord";
import {
  AboutContainer,
  FindContainer,
  FindWrapper,
  LogoWrapper
} from "./About.Styles";
import {
  TextWrapper,
  StyledText,
  LandingButton,
  LandingTitle
} from "./Landing.Styles";
import { FooterSubtitle } from "./FooterStyles";

export default function FinditSection() {
  return (
    <AboutContainer id="contact">
      <FindWrapper>
        <FindContainer>
          <LandingTitle>
            Contact <span>Us</span>
          </LandingTitle>
          <FooterSubtitle style={{ flexDirection: "row" }}>
            <LogoWrapper>
              <Twitter />
            </LogoWrapper>
            <LogoWrapper>
              <Telegram />
            </LogoWrapper>
            <LogoWrapper>
              <Discord />
            </LogoWrapper>
          </FooterSubtitle>
        </FindContainer>
        <FindContainer>
          <TextWrapper>
            <StyledText>find it</StyledText>
            <StyledText>Buy it</StyledText>
            <StyledText>Hold it</StyledText>
          </TextWrapper>
          <LandingButton>Learn How To Buy</LandingButton>
        </FindContainer>
      </FindWrapper>
    </AboutContainer>
  );
}
