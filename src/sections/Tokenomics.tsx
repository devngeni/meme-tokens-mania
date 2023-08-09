import TokenomicsImage from "../../public/TokenomicsImg";
import { RoadMapP } from "./RoadmapStyles";
import {
  TokenomicsContainer,
  TokenomicsWrapper,
  TokenomicsTitle,
  TokenomicsImg,
} from "./TokenomicsStyles";

export default function Tokenomics() {
  return (
    <TokenomicsContainer>
      <TokenomicsWrapper>
        <TokenomicsTitle>
          Toke<span>nomics</span>
        </TokenomicsTitle>
        <RoadMapP>
          &#x275D;Listen up, meme enthusiasts! 🐸✨ No Taxes. No Nonsense. Yep,
          it&apos;s that straightforward. A whopping 93.1% of the tokens?
          Splashed into the liquidity pool. LP tokens? Ashes in the wind.
          Contract? Renounced like yesterday&apos;s stale memes. And that sneaky
          6.9% left? Nestled safely in a multi-sig wallet, earmarked only for
          the fanciest of future centralized exchange listings, high-tech
          bridges, and lush liquidity pools. And for all you eagle-eyed trackers
          out there, give &#x201F;pepecexwallet.eth&#x201E; a quick peek on ENS.
          We&apos;re as transparent as Pepe&#x275C;s love for memes!&#x275E;
        </RoadMapP>
        <TokenomicsImg>
          <TokenomicsImage />
        </TokenomicsImg>
      </TokenomicsWrapper>
    </TokenomicsContainer>
  );
}
