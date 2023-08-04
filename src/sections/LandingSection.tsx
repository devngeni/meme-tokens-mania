import { AboutTextWrapper } from "./About.Styles";
import {
  LandingContainer,
  LandingButton,
  LanndingWrapper,
  LandingTitle,
  LandingSubtitle,
  LandingImage
} from "./Landing.Styles";

export default function LandingSection() {
  return (
    <LandingContainer>
      <LanndingWrapper>
        <AboutTextWrapper>
          <LandingTitle>
            Welcome to <span>Meme Token </span>Universe! 🚀
          </LandingTitle>
          <LandingSubtitle>
            Are you ready to explore the metaverse's wildest, most innovative,
            and downright funniest meme tokens? Buckle up and grab your digital
            wallets, because you're about to enter the MemeTokenMania universe!
          </LandingSubtitle>
          <LandingButton>Explore</LandingButton>
        </AboutTextWrapper>
        <LandingImage />
      </LanndingWrapper>
    </LandingContainer>
  );
}
