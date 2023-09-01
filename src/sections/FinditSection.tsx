import Logo from "../../public/Logo";
import Twitter from "../../public/Twitter";
import Telegram from "../../public/Telegram";
import Discord from "../../public/Discord";
import {
  AboutContainer,
  FindContainer,
  FindWrapper,
  LogoWrapper,
} from "./About.Styles";
import {
  TextWrapper,
  StyledText,
  LandingButton,
  LandingTitle,
} from "./Landing.Styles";
import { FooterImage, FooterSubtitle } from "./FooterStyles";
import { Tweet } from "react-tweet";
import Link from "next/link";
import Image from "next/image";

export default function FinditSection() {
  return (
    <AboutContainer id="contact">
      {/* <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
          opacity: 0.3,
          boxShadow: "0px 0px 20px 20px #000000",
          borderRadius: "20px",
        }}
      >
        <source src="/muskVideo.mp4" type="video/mp4" />
      </video> */}
      <FindWrapper>
        <FindContainer>
          <LandingTitle>
            Contact <span>Us</span>
          </LandingTitle>
          <FooterSubtitle style={{ flexDirection: "row" }}>
            <LogoWrapper>
              <Link href="https://twitter.com/xtrump_eth" target="_blank">
                <Twitter />
              </Link>
            </LogoWrapper>
            <LogoWrapper>
              <Link href="https://t.me/OfficialTrumpXToken" target="_blank">
                <Telegram />
              </Link>
            </LogoWrapper>
            <LogoWrapper>
              <Discord />
            </LogoWrapper>
          </FooterSubtitle>

          <FooterImage />
        </FindContainer>
        <FindContainer>
          <TextWrapper>
            <StyledText>find it</StyledText>
            <StyledText>Buy it</StyledText>
            <StyledText>HODL it</StyledText>
          </TextWrapper>
          <LandingButton>Learn How To Buy</LandingButton>
        </FindContainer>
      </FindWrapper>
    </AboutContainer>
  );
}
