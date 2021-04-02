import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import { FaUser, FaBirthdayCake } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";

import SectionTitle from "components/SectionTitle";

type AboutType = {
  icon: React.ReactElement;
  attribute: string;
  value: string;
};

const About = () => {
  const abouts: AboutType[] = [
    {
      icon: <FaUser />,
      attribute: "Name",
      value: "Shota Iwamoto (岩本 翔太)",
    },
    {
      icon: <FaBirthdayCake />,
      attribute: "Birthday",
      value: "February 24th, 1999",
    },
    {
      icon: <MdMyLocation />,
      attribute: "Location",
      value: "Tokyo, Japan",
    },
  ];

  return (
    <>
      <SectionTitle title="About" />
      <Grid
        width={{
          base: "80vw",
          sm: "75vw",
          md: "60vw",
          lg: "45vw",
          xl: "35vw",
        }}
        margin="auto"
        templateRows={`repeat(${abouts.length}, 1fr)`}
        templateColumns="repeat(3, 1fr)"
        fontSize={{ base: "16px", sm: "20px", md: "24px" }}
        gap={{ base: 1, md: 4 }}
      >
        {abouts.map((about, idx) => (
          <>
            <GridItem
              key={2 * idx}
              colSpan={1}
              textAlign="left"
              fontFamily="Avenir"
            >
              <HStack>
                <Box>{about.icon}</Box>
                <Box>{about.attribute}</Box>
              </HStack>
            </GridItem>
            <GridItem
              key={2 * idx + 1}
              colSpan={2}
              textAlign="center"
              fontFamily="Avenir"
            >
              {about.value}
            </GridItem>
          </>
        ))}
      </Grid>
    </>
  );
};

export default About;
