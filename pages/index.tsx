import { Box } from "@chakra-ui/layout";
import HeaderParticles from "components/HeaderParticles";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Box bg="#04041c">
        <HeaderParticles />
      </Box>
    </>
  );
};

export default Home;
