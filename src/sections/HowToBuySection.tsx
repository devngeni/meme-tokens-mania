import Image from "next/image";
import {
  HowContainer,
  HowCard,
  HowImageWrapper,
  HowSubtitle,
  HowTextWrapper,
  HowTitle,
  HowWrapper,
  HowText
} from "./HowToBuyStyles";
import { RoadmapWrapper } from "./RoadmapStyles";

export default function HowToBuySection() {
  const howToBuyData = [
    {
      title: "Create a Wallet",
      image: "/Wave.svg",
      text: "Before you buy $EWWE, you will need to have a cryptocurrency wallet that supports Ethereum. We recommend having a look at Metamask or Trust wallet."
    },
    {
      title: "Get Some ETH",
      image: "/Headimg.svg",
      text: "In order to buy $EWWE, you will need to first buy (ETH) from a cryptocurrency exchange. There are many exchanges to choose from, including Coinbase, Binance, and Kraken."
    },

    {
      title: "Switch ETH for $MemeTokenMania",
      image: "Wave.svg",
      text: "Once you have ETH in your wallet, you can exchange it for WWElon on a decentralized exchange (DEX) such as Uniswap. Simply connect your wallet to the DEX and place a swap order for WWElon."
    },
    {
      title: "HODL $EWWE",
      image: "Waver.svg",
      text: "Become a proud member of a community that's taking the crypto world by storm. Remember - you're not just investing in a token; you're investing in a journey. Always do your own research and invest responsibly."
    }
  ];
  return (
    <HowWrapper>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
          opacity: 0.3,
          boxShadow: "0px 0px 20px 20px #000000",
          borderRadius: "20px"
        }}
        src="https://unibot.app/static/media/unibotHeroAnimation.mp4"
      ></video>
      <HowContainer>
        <RoadmapWrapper
          style={{
            gap: "2rem"
          }}
        >
          <HowTitle>
            How To <span>&nbsp;Buy</span>
          </HowTitle>
          {howToBuyData.map((item, index) => (
            <HowCard key={index}>
              <HowImageWrapper>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              </HowImageWrapper>
              <HowTextWrapper>
                <HowSubtitle>{item.title}</HowSubtitle>
                <HowText>{item.text}</HowText>
              </HowTextWrapper>
            </HowCard>
          ))}
        </RoadmapWrapper>
      </HowContainer>
    </HowWrapper>
  );
}
