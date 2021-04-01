import { NextPage } from "next";
import { Box, Center } from "@chakra-ui/layout";

import Heading from "components/contents/Heading";
import About from "components/contents/About";

const Home: NextPage = () => {
  return (
    <>
      <Heading />
      <Center>
        <Box
          paddingTop={{ base: "16px", sm: "32px", md: "48px" }}
          paddingBottom="128px"
          width={{ base: "90vw", md: "80vw", sm: "70vw" }}
        >
          <About />
        </Box>
      </Center>
    </>
  );
};

export default Home;
