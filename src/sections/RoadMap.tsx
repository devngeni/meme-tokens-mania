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
  RoadMapHeader,
} from "./RoadmapStyles";

export default function RoadMap() {
  const roadMapData = [
    {
      title: "Awakening 🌠",
      content: [
        "🚀 Launch and Token Creation",
        "🌟 Community Building",
        "💎 Listing and Partnerships",
        "Get $WWElon Trending on twitter with our memetic power",
        "1,000+ Holders",
      ],
    },
    {
      title: "Expansion 🛸",
      content: [
        "🌐 Ecosystem Development",
        "🌌 NFTs and Digital Collectibles",
        "CEX Listings",
        "10,000+holders",
      ],
    },
    {
      title: "Leaps 🌀",
      content: [
        "🛰️ Spacefaring Utilities",
        "WWElon Academy",
        "🌍 Charitable Initiatives",
        "🌠 Game-Changing Features",
        "100,000+ holders",
      ],
    },
    {
      title: "Enlightenment ✨",
      content: [
        "🌄 Decentralization and Governance",
        "🔒 Sustainability and Security",
        "🚀 Legacy and Beyond",
        "1000,000+holders",
      ],
    },
  ];

  return (
    <RoadmapContainer>
      <RoadmapWrapper
        style={{
          textAlign: "start",
        }}
      >
        <RoadmapTitle>
          Road<span>Map</span>
        </RoadmapTitle>
        <RoadMapP>
          &#x275D;Alright folks, grab your meme-tinted glasses and buckle up!
          Here&apos;s a sneak peek of $WWElon&apos;s wild journey ahead. But
          remember, we&#x275C;re like that fun uncle at family gatherings &#x5f;
          always full of unexpected tricks and treats. So keep those peepers
          peeled, because the meme magic has only just begun! 😜🚀
          #ToTheMemeVerseAndBeyond &#x275E;
        </RoadMapP>

        <RoadmapCardWrapper>
          {roadMapData.map((roadMap, index) => (
            <RoadMapCard key={index}>
              <RoadMapHeader>{roadMap.title}</RoadMapHeader>
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
