import { styled } from "styled-components";
import { BodyContainer } from "./Commons";
import { LandingTitle } from "./Landing.Styles";

export const RoadmapContainer = styled(BodyContainer)`
  height: 100%;
  padding: 2% 0;
`;
export const RoadmapWrapper = styled.div`
  width: 80%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1300px) {
    width: 90%;
    text-align: center;
    gap: 2rem;
  }
`;
export const RoadmapTitle = styled(LandingTitle)`
  font-size: clamp(2rem, calc(2rem + ((1vw - 0.1375rem) * 4.2857)), 6.5rem);
`;

export const RoadmapSubtitle = styled(LandingTitle)`
  font-size: 3rem;
`;

export const RoadMapHeader = styled(LandingTitle)`
  font-size: clamp(1.5rem, calc(1.5rem + ((1vw - 0.1375rem) * 1.4286)), 3rem);
`;
export const RoadMapCard = styled.div`
 max-width: 440px;
  height: 50vh;
  background-color: #000;
  border-radius: 160px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  justify-items: center;
  padding: 5%;
  @media screen and (max-width: 768px) {
    padding: 10%;
  }
`;

export const RoadMapList = styled.ul`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
`;
export const RoadmapCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  width: 100%;
  height: 100%;
  padding: 2% 0;
  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
`;

export const RoadMapText = styled.li`
  color: #a6a6a6;
`;

export const RoadMapP = styled.p`
  font-family: "Chakra Petch", sans-serif;
  font-size: clamp(0.8rem, calc(0.8rem + ((1vw - 0.1375rem) * 0.381)), 1.2rem);
  font-weight: 400;
  line-height: 1.5;
  color: #a6a6a6;
  width: 60%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
