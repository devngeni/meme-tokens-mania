import { Quicksand } from "next/font/google";
import { PageLayout } from "@/Layouts";
import {
  AboutusSection,
  BodyWrapper,
  FinditSection,
  LandingSection,
  HowToBuySection,
} from "@/sections";

const fontFamily = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      </PageLayout>
    </main>
  );
}
