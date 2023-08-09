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
`;
export const RoadmapTitle = styled(LandingTitle)`
  font-size: 6rem;
`;

export const RoadmapSubtitle = styled(LandingTitle)`
  font-size: 3rem;
`;
export const RoadMapCard = styled.div`
  width: 440px;
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
`;

export const RoadMapText = styled.li`
  color: #a6a6a6;
`;

export const RoadMapP = styled.p`
  font-family: "Chakra Petch", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  color: #a6a6a6;
  width: 60%;
`;
