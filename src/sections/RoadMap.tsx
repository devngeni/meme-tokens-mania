import {
  RoadmapContainer,
  RoadmapWrapper,
  RoadmapTitle,
  RoadmapCardWrapper,
  RoadMapCard,
  RoadMapText,
  RoadMapList,
  RoadmapSubtitle,
  RoadMapP,
} from "./RoadmapStyles";

export default function RoadMap() {
  const roadMapData = [
    {
      title: "Phase 1",
      content: [
        "Launch",
        "CoinGecko/Coinmarketcap Listings",
        "1,000+ Holders",
        "Get $MemeTokenMania Trending on twitter with our memetic power",
      ],
    },
    {
      title: "Phase 2",
      content: [
        "Community Partnerships MemeTokenMania Times digital newsletter",
        "Formation of token gated discord group, MemeTokenMania Palace, for holders, more details tba",
        "CEX Listings",
        "10,000+holders",
      ],
    },
    {
      title: "Phase 3",
      content: [
        "MemeTokenMania merch",
        "MemeTokenMania Academy",
        "MemeTokenMania Tools",
        "T1 Exchange Listings",
        "100,000+ holders",
        "Meme Takeover",
      ],
    },
  ];

  return (
    <RoadmapContainer>
      <RoadmapWrapper>
        <RoadmapTitle>
          Road<span>Map</span>
        </RoadmapTitle>
        <RoadMapP>
          "Alright folks, grab your meme-tinted glasses and buckle up! Here's a
          sneak peek of $MemeTokenMania's wild journey ahead. But remember, we're like
          that fun uncle at family gatherings – always full of unexpected tricks
          and treats. So keep those peepers peeled, because the meme magic has
          only just begun! 😜🚀 #ToTheMemeVerseAndBeyond"
        </RoadMapP>

        <RoadmapCardWrapper>
          {roadMapData.map((roadMap, index) => (
            <RoadMapCard key={index}>
              <RoadmapSubtitle>{roadMap.title}</RoadmapSubtitle>
              <RoadMapList>
                {roadMap.content.map((item, itemIndex) => (
                  <RoadMapText key={itemIndex}>{item}</RoadMapText>
                ))}
              </RoadMapList>
            </RoadMapCard>
          ))}
        </RoadmapCardWrapper>
      </RoadmapWrapper>
    </RoadmapContainer>
  );
}
