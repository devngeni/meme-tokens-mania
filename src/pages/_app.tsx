import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

import styled from "styled-components";
const WelcomeBody = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
const WelcomeText = styled.h1`
  background-clip: text;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  background-image: url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif);
  background-size: cover;
  color: transparent;
  font-size: 5rem;
  margin: 10px 0;
  text-transform: uppercase;
  display: flex;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <WelcomeBody>
        <WelcomeText>🥊Join The Ultimate Crypto Showdown!🥊</WelcomeText>
      </WelcomeBody>
    );
  }

  return <Component {...pageProps} />;
}
