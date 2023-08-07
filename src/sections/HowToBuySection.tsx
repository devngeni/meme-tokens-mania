import Image from "next/image";
import {
  HowContainer,
  HowCard,
  HowImageWrapper,
  HowSubtitle,
  HowTextWrapper,
  HowTitle,
  HowWrapper,
  HowText,
} from "./HowToBuyStyles";
import { RoadmapWrapper } from "./RoadmapStyles";

export default function HowToBuySection() {
  const howToBuyData = [
    {
      title: "Create a Wallet",
      image: "/Wave.svg",
      text: "Download MetaMask or your wallet of choice from the App Store or Google Play Store for free. Desktop users, download the Google Chrome extension by going to metamask.io.",
    },
    {
      title: "Get Some ETH",
      image: "/Headimg.svg",
      text: "Have ETH in your wallet to switch to $MemeTokenMania. If you don’t have any ETH, you can buy directly on MetaMask, transfer from another wallet, or buy on another exchange and send it to your wallet.",
    },
    {
      title: "Go to Pancakeswap",
      image: "Waver.svg",
      text: "Connect to Uniswap. Go to app.uniswap.org in Google Chrome or on the browser inside your MetaMask app. Connect your wallet. Paste the $MemeTokenMania token address into Uniswap, select MemeTokenMania, and confirm. When MetaMask prompts you for a wallet signature, sign.",
    },
    {
      title: "Switch ETH for $MemeTokenMania",
      image: "Wave.svg",
      text: "Switch ETH for $MemeTokenMania. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.",
    },
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
          borderRadius: "20px",
        }}
        src="https://unibot.app/static/media/unibotHeroAnimation.mp4"
      ></video>
      <HowContainer>
        <RoadmapWrapper
          style={{
            gap: "2rem",
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
