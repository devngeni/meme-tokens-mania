import { PT_Sans } from "next/font/google";
import { PageLayout } from "@/Layouts";
import {
  AboutusSection,
  FinditSection,
  LandingSection,
  HowToBuySection,
  Tokenomics,
  RoadMap,
} from "@/sections";
import { BodyWrapper } from "@/sections/Commons";

const fontFamily = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className={fontFamily.className}>
      <PageLayout>
        <LandingSection />
        <BodyWrapper>
          <AboutusSection />
          <FinditSection />
        </BodyWrapper>
        <HowToBuySection />
        <Tokenomics />
        <RoadMap />
      </PageLayout>
    </main>
  );
}
