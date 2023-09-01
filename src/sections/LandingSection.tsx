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
  const handleFindIt = () => {
    window.open("https://app.uniswap.org/#/swap", "_blank");
  };
  const etherscan = () => {
    window.open(
      "https://etherscan.io/token/0x5ddaad64c2a7596915f86371f3007df8cb2a64a3",
      "_blank"
    );
  };
  return (
    <LandingContainer>
      <LandingWrapper>
        <AboutTextWrapper style={{ width: "100%" }}>
          <LandingTitle>Are you ready for a thrilling journey?</LandingTitle>
          <LandingSubtitle>
            Say hello to XTrump Token, the groundbreaking meme coin that&#39;s
            taking the crypto world by storm! Strap in and get ready to ride the
            rocket ship of blockchain innovation with us. Fasten your seatbelts,
            amigos, because we&apos;re about to launch into the meme-sterpiece
            of blockchain bedlam! 🚀🐱‍🐉🪙
          </LandingSubtitle>
          <LandingSubtitle
            onClick={() => etherscan()}
            style={{ cursor: "pointer" }}
          >
            0x5ddaad64c2a7596915f86371f3007df8cb2a64a3
          </LandingSubtitle>
          <LandingButton onClick={() => handleFindIt()}>Buy Now</LandingButton>
        </AboutTextWrapper>
        <LandingImage />
      </LandingWrapper>
    </LandingContainer>
  );
}
