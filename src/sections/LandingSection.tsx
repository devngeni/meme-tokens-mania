import { AboutTextWrapper } from "./About.Styles";
import {
  LandingContainer,
  LandingButton,
  LandingWrapper,
  LandingTitle,
  LandingSubtitle,
  LandingImage,
} from "./Landing.Styles";

export default function LandingSection() {
  return (
    <LandingContainer>
      <LandingWrapper>
        <AboutTextWrapper style={{ width: "100%" }}>
          <LandingTitle>
            Are you ready for a thrilling journey?
          </LandingTitle>
          <LandingSubtitle>
            Say hello to XTrump Token, the groundbreaking meme coin that&#39;s taking the crypto world by storm! 
            Strap in and get ready to ride the rocket ship of blockchain innovation with us. 
            Fasten your seatbelts, amigos, because we&apos;re about to launch into the meme-sterpiece of blockchain bedlam! 🚀🐱‍🐉🪙
          </LandingSubtitle>
          <LandingButton>Buy Now</LandingButton>
        </AboutTextWrapper>
        <LandingImage />
      </LandingWrapper>
    </LandingContainer>
  );
}
