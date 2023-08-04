import { AboutContainer, FindWrapper } from "./About.Styles";
import { TextWrapper, StyledText, LandingButton } from "./Landing.Styles";

export default function FinditSection() {
  return (
    <AboutContainer>
      <FindWrapper>
        <TextWrapper>
          <StyledText>find it</StyledText>
          <StyledText>Buy it</StyledText>
          <StyledText>Hold it</StyledText>
        </TextWrapper>
        <LandingButton>Learn How To Buy</LandingButton>
      </FindWrapper>
    </AboutContainer>
  );
}
