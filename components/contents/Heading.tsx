import { useState } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/layout";
import { HeaderParticlesPolygon } from "components/HeaderParticles";
import Typist from "react-typist";

const Heading = () => {
  const [typistIndex, setTypistIndex] = useState(0);

  const interests = [
    "Competitive Programming",
    "Machine Learning",
    "Algorithms",
    "Code Golf",
  ];

  return (
    <Box bg="mainColor.5" height={{ base: "160px", sm: "220px", md: "100vh" }}>
      <Box
        color="#fbfaf5"
        pos="absolute"
        top={{ base: "72px", sm: "84px", md: "45vh", xl: "38vh" }}
        left="50%"
        transform={{
          base: "translateY(-40px) translateX(-50%)",
          sm: "translateY(-60px) translateX(-50%)",
          md: "translateY(-50%) translateX(-50%)",
        }}
        width={{ base: "95vw", sm: "90vw", md: "60vw" }}
      >
        <Grid h="200px" gap={4}>
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
            I'm interested in{" "}
            <Typist
              key={typistIndex}
              avgTypingDelay={50}
              stdTypingDelay={0}
              onTypingDone={() => setTypistIndex(typistIndex + 1)}
            >
              {interests.map((interest) => [
                <span style={{ padding: "2px", backgroundColor: "#00587a" }}>
                  {interest}
                </span>,
                <Typist.Backspace count={interest.length} delay={2000} />,
              ])}
            </Typist>
          </GridItem>
        </Grid>
      </Box>
      <HeaderParticlesPolygon />
    </Box>
  );
};

export default Heading;
