import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/dist/next-server/lib/router/router";

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
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
