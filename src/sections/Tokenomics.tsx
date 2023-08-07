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
          "Listen up, meme enthusiasts! 🐸✨ No Taxes. No Nonsense. Yep, it's
          that straightforward. A whopping 93.1% of the tokens? Splashed into
          the liquidity pool. LP tokens? Ashes in the wind. Contract? Renounced
          like yesterday's stale memes. And that sneaky 6.9% left? Nestled
          safely in a multi-sig wallet, earmarked only for the fanciest of
          future centralized exchange listings, high-tech bridges, and lush
          liquidity pools. And for all you eagle-eyed trackers out there, give
          “pepecexwallet.eth” a quick peek on ENS. We're as transparent as
          Pepe's love for memes!"
        </RoadMapP>
        <TokenomicsImg>
          <TokenomicsImage />
        </TokenomicsImg>
      </TokenomicsWrapper>
    </TokenomicsContainer>
  );
}
