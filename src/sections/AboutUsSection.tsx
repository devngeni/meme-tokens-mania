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
    <AboutContainer>
      <AboutWrapper>
        <AboutImageWrapper />
        <AboutTextWrapper>
          <AboutTitle>
            🌌 What is <span>WWElon?</span> 🌌
          </AboutTitle>
          <AboutSubtitle>WWElon is not just a meme coin;</AboutSubtitle>
          <AboutSubtitle>
            It&apos;s the dazzling result of blending the limitless imagination
            of a space pioneer with the mystique of a tech titan. Behold the
            birth of WWElon, Experience the inception of a crypto legend as it
            bursts forth like a comet, leaving a trail of awe and amazement. As
            the token gains momentum, join us on an odyssey through the
            blockchain, filled with exhilarating partnerships, out-of-this-world
            giveaways, and events that&apos;ll outshine the brightest
            constellations.
          </AboutSubtitle>
          <AboutButton>Discover More</AboutButton>
        </AboutTextWrapper>
      </AboutWrapper>
    </AboutContainer>
  );
}
