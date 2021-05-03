import { Grid, GridItem, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";

import BorderCard from "components/BorderCard";
import SectionTitle from "components/SectionTitle";

import { WorkExperienceType } from "src/types";

const WorkExperiences = () => {
  const expsPerRow = useBreakpointValue({
    base: 1,
    lg: 2,
  });

  const experiences: WorkExperienceType[] = [
    {
      dateFrom: "March 2019",
      dateTo: "September 2019",
      company: "Linkedge",
      location: "Tokyo, Japan",
      description_ja: "Webアプリケーションの開発に携わりました．",
      description_en:
        "Developed a web-application as a part-time software engineer.",
      technologies: ["Ruby on Rails", "JavaScript", "SQL"],
      link: "https://corp.linkedge.jp",
    },
    {
      dateFrom: "September 2020",
      company: "e-Seikatsu",
      location: "Tokyo, Japan",
      description_ja: "不動産のAPIを用いた物件探しサイトを開発しました．",
      description_en:
        "Developed a web-application for property search using a real estate API.",
      technologies: ["Vue.js", "JavaScript", "Swagger", "Firebase"],
      link: "https://www.e-seikatsu.info",
    },
    {
      dateFrom: "April 2021",
      company: "pixiv",
      location: "Tokyo, Japan",
      description_ja:
        "BOOTHというサービスの開発チームに参加し，既存コードのリファクタリングと新機能の開発を行いました．",
      description_en:
        "BOOTHというサービスの開発チームに参加し，既存コードのリファクタリングと新機能の開発を行いました．",
      technologies: ["Ruby on Rails", "Vue.js", "TypeScript"],
      link: "https://www.pixiv.co.jp",
    },
  ];

  return (
    <>
      <SectionTitle title="Work Experiences" />
      <Grid templateColumns={`repeat(${expsPerRow}, 1fr)`} gap={4}>
        {experiences.map((experience, idx) => (
          <GridItem key={idx} colSpan={1}>
            <a href={experience.link} target="_blank">
              <BorderCard color="#8ec6c5" height="100%">
                <Text fontFamily="Avenir" fontSize={{ base: 16, sm: 22 }}>
                  {experience.dateFrom}
                  {experience.dateTo && ` - ${experience.dateTo}`}
                </Text>
                <Text
                  fontFamily="Avenir"
                  fontSize={{ base: 14, sm: 18 }}
                  marginTop={{ base: 1, sm: 2 }}
                >
                  <b>{experience.company}</b> ({experience.location})
                </Text>
                <Text fontFamily="Avenir" fontSize={{ base: 14, sm: 16 }}>
                  {experience.description_ja}
                </Text>
                <Text
                  fontFamily="Avenir"
                  fontSize={{ base: 14, sm: 16 }}
                  marginTop={{ base: 1, sm: 2 }}
                >
                  {experience.technologies.join(", ")}
                </Text>
              </BorderCard>
            </a>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default WorkExperiences;
