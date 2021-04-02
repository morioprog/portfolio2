import { Box, Grid, GridItem, Heading, HStack, Text } from "@chakra-ui/react";
import { FaUser, FaBirthdayCake } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";

import SectionTitle from "components/SectionTitle";
import SubsectionTitle from "components/SubsectionTitle";
import BorderCard from "components/BorderCard";

type AboutType = {
  icon: React.ReactElement;
  attribute: string;
  value: string;
};

type EducationType = {
  dateFrom: string;
  dateTo?: string;
  name: string;
  location: string;
  description: string;
  gpa?: number;
  maxGpa?: number;
  info?: string;
  link?: string;
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

  const educations: EducationType[] = [
    {
      dateFrom: "April 2017",
      dateTo: "March 2021",
      name: "Keio University",
      location: "Kanagawa, Japan",
      description: "Bachelor of Information and Computer Science",
      gpa: 3.81,
      maxGpa: 4.0,
      info: "Graduated at the top of the department",
      link: "https://www.st.keio.ac.jp/departments/faculty/ics.html",
    },
    {
      dateFrom: "April 2021",
      name: "Keio University",
      location: "Kanagawa, Japan",
      description: "Graduate School of Science and Technology",
      link: "https://www.st.keio.ac.jp/departments/open/",
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
      <SubsectionTitle title="Educations" />
      <Box
        marginLeft="auto"
        marginRight="auto"
        width={{ base: "95%", xl: "65vw" }}
      >
        <Grid
          templateRows={{ base: "repeat(2, 1fr)", xl: "repeat(1, 1fr)" }}
          templateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(2, 1fr)" }}
          gap={4}
        >
          {educations.map((education, idx) => (
            <>
              <BorderCard color="#fdd001" fontFamily="Avenir" key={idx}>
                <Heading
                  as="h3"
                  fontFamily="Avenir"
                  fontWeight="normal"
                  fontSize={{ base: "18px", sm: "22px", md: "26px" }}
                >
                  {education.dateFrom} - {education.dateTo ?? "Present"}
                </Heading>
                <Text
                  paddingTop="8px"
                  fontSize={{ base: "14px", sm: "16px", md: "20px" }}
                >
                  <b>{education.name}</b> ({education.location})
                </Text>
                <Text fontSize={{ base: "14px", md: "18px" }}>
                  {education.description}
                </Text>
                <Text fontSize={{ base: "14px", md: "18px" }} paddingTop="8px">
                  <u>Overall GPA</u> <b>{education.gpa?.toFixed(2) ?? "-"}</b> /{" "}
                  {education.maxGpa?.toFixed(2) ?? "-"}
                </Text>
                {education.info && (
                  <Text fontSize={{ base: "14px", md: "18px" }}>
                    ({education.info})
                  </Text>
                )}
              </BorderCard>
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default About;
