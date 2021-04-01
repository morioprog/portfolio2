import { Box, Grid, GridItem } from "@chakra-ui/layout";
import HeaderParticles from "components/HeaderParticles";

const Heading = () => (
  <Box bg="#04041c" height={{ base: "160px", sm: "220px", md: "100vh" }}>
    <Box
      color="#fbfaf5"
      pos="absolute"
      top="42%"
      left="50%"
      transform={{
        base: "translateY(-40px) translateX(-50%)",
        sm: "translateY(-60px) translateX(-50%)",
        md: "translateY(-50%) translateX(-50%)",
      }}
      width={{ base: "95vw", sm: "90vw", md: "60vw" }}
    >
      <Grid h="200px">
        <GridItem
          textAlign="center"
          fontSize={{
            base: "38px",
            sm: "56px",
            md: "60px",
            lg: "80px",
            xl: "100px",
          }}
          fontFamily="Avenir"
        >
          Shota Iwamoto's
          <br />
          Portfolio
        </GridItem>
        <GridItem
          textAlign="center"
          fontSize={{ md: "26px", lg: "32px", xl: "40px" }}
          fontFamily="Menlo"
          visibility={{ base: "hidden", md: "visible" }}
        >
          I'm interested in Algorithms
        </GridItem>
      </Grid>
    </Box>
    <HeaderParticles />
  </Box>
);

export default Heading;
