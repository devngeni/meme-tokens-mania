import {
  AboutContainer,
  AboutButton,
  AboutSubtitle,
  AboutTextWrapper,
  AboutTitle,
  AboutWrapper,
  AboutImageWrapper
} from "./About.Styles";

export default function AboutusSection() {
  return (
    <AboutContainer id="aboutus">
      <AboutWrapper>
        <AboutImageWrapper />
        <AboutTextWrapper>
          <AboutTitle>
            🌌 What is <span>XTrump?</span> 🌌
          </AboutTitle>
          <AboutSubtitle><span>XTrump isn&apos;t your average coin;</span></AboutSubtitle>
          <AboutSubtitle>
            It's a wild ride into the meme-filled universe of crypto chaos! 
            Imagine combining the charisma of The Donald himself with the frenzy of internet memes - that&apos;s XTrump in a nutshell. 
            It&apos;s not just a coin; it&apos;s a declaration that says, &quot;I&apos;m here to shake up the crypto world and make blockchain great again!&quot; 
            So whether you&apos;re a crypto novice or a seasoned trader, saddle up and let&apos;s explore the cosmic craziness that is XTrump! 🚀🌌🤯
          </AboutSubtitle>
          <AboutButton>Discover More</AboutButton>
        </AboutTextWrapper>
      </AboutWrapper>
    </AboutContainer>
  );
}
