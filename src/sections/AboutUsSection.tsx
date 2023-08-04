import {
  AboutContainer,
  AboutButton,
  AboutSubtitle,
  AboutTextWrapper,
  AboutTitle,
  AboutWrapper,
  AboutImageWrapper,
} from "./About.Styles";

export default function AboutusSection() {
  return (
    <AboutContainer>
      <AboutWrapper>
        <AboutImageWrapper />
        <AboutTextWrapper>
          <AboutTitle>
            <span>About</span> MemeTokens Mania
          </AboutTitle>
          <AboutSubtitle>
            MemeTokens Mania is a community-driven platform that aims to
            democratize the meme token space. By forging a path of zero taxes,
            LP burns, contract renunciation, and relentless originality, we're
            redefining the meme token space. Join us in our mission to combat
            meme token rugs, explore the universe of authentic meme tokens, and
            become a part of a community where laughter and wealth coalesce.
            With MemeTokenMania, the memes are real, the community is strong,
            and the potential is limitless. Invest responsibly, and remember,
            the future is memes!
          </AboutSubtitle>
          <AboutButton>Buy some</AboutButton>
        </AboutTextWrapper>
      </AboutWrapper>
    </AboutContainer>
  );
}
