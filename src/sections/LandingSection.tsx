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
            Prepare for the most epic battle of the century
          </LandingTitle>
          <LandingSubtitle>
            Witness Elon &#x275D;Space-King&#x275E; Musk duke it out with Mark
            &#x275D;Lizard Lord&#x275E; Zuckerberg in the Web3 coliseum!, BSC is
            hosting the ultimate meme coin showdown: WWElon. Grab your seat in
            this crypto clash now! 🐍
          </LandingSubtitle>
          <LandingButton>Buy Now</LandingButton>
        </AboutTextWrapper>
        <LandingImage />
      </LandingWrapper>
    </LandingContainer>
  );
}
