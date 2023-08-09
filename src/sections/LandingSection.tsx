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
          <LandingSubtitle>
            🚀 Join The Ultimate Crypto Showdown! 🦎
          </LandingSubtitle>
          <LandingTitle>
            🥊 Prepare for the most epic battle of the century 🥊
          </LandingTitle>
          <LandingSubtitle>
            Watch as X-King Elon Musk, the Sultan of SpaceX, goes head-to-head
            with Lizard Boy Mark Zuckerberg, the Web-Slinger of Facebook in the
            crypto arena! Get ready to witness the clash of titans. It&apos;s a
            clash that transcends dimensions, and it&apos;s all happening on
            Ethereum. Join the battle in the form of the hottest meme coin on
            the Ethereum: WWElon! 🐍
          </LandingSubtitle>
          <LandingButton>Buy Now</LandingButton>
        </AboutTextWrapper>
        <LandingImage />
      </LanndingWrapper>
    </LandingContainer>
  );
}
