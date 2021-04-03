import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "public/global.css";

const colors = {
  mainColor: {
    1: "#fbfaf5",
    2: "#d0e8f2",
    3: "#79a3b1",
    4: "#456268",
    5: "#26363a",
  },
};

const customTheme = extendTheme({ colors });

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Shota Iwamoto's Portfolio</title>
        <meta property="og:title" content="Shota Iwamoto's Portfolio" />
        <meta
          property="og:description"
          content="岩本翔太のポートフォリオサイトです"
        />
        <meta
          property="og:image"
          content="https://github.com/morioprog/portfolio2/blob/master/public/icon.jpg?raw=true"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@morio_prog" />
        <meta name="twitter:creator" content="@morio_prog" />
      </Head>
      <ChakraProvider theme={customTheme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default MyApp;
