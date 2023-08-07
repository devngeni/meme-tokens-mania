import { Footer } from "@/sections";
import Navbar from "@/sections/Navbar";
import Head from "next/head";
type LayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>MemeTokenMania</title>
        <meta
          name="description"
          content="Unleashing Laughter, Building Wealth: No bullsiting just Your Gateway to the Meme Token Universe! 🚀"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
