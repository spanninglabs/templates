import "@fontsource/work-sans";
import "@fontsource/mulish";

import { BOSPage, MetamaskPage, MobilePage } from "apps_shared/components/FilledPage";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import type { AppProps } from "next/app";
import Head from "next/head";
import defaultTheme from "apps_shared/styles/SpanningThemeDefault";
import { useBosStatus } from "apps_shared/hooks/useBosStatus";

const title = "Spanning Labs | Demo";
const description = "A demo of Spanning Tokens and NFTs.";
const shareImage = "https://demo.spanning.network/images/share.jpg";

function SpanningDemoApp({ Component, pageProps }: AppProps) {
  const [isMobileUser, setMobileUser] = useState(false);
  const [isMissingMetamask, setMissingMetamask] = useState(false);
  const { bosIsUp } = useBosStatus();

  // Check if the user is on a mobile device
  useEffect(() => {
    setMobileUser(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    );
  }, []);

  // Check if the user has metamask installed
  useEffect(() => {
    setMissingMetamask(!window.ethereum);
  }, []);

  return (
    <>
      {/* Header Info */}
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://demo.spanning.network/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={shareImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={shareImage} />
      </Head>

      {/* App Content */}
      <ChakraProvider theme={defaultTheme}>
        <Flex h="100%" w="100%" m="0" p="0" bg="brand.white">
          {/* Run Checks:
            1. Check if mobile
            2. Check if metamask is installed
            3. Check if BOS is running
            4. Render Application! */}
          {(isMobileUser && <MobilePage />) ||
            (isMissingMetamask && <MetamaskPage />) ||
            (!bosIsUp && <BOSPage />) || <Component {...pageProps} />}
        </Flex>
      </ChakraProvider>
    </>
  );
}

export default SpanningDemoApp;
