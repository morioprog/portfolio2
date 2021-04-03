import { Grid, GridItem, Text } from "@chakra-ui/layout";
import { useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import BorderCard from "components/BorderCard";
import SectionTitle from "components/SectionTitle";
import SkillBar from "components/SkillBar";
import SkillCircle from "components/SkillCircle";
import SubsectionTitle from "components/SubsectionTitle";

import { SkillType, QualificationType } from "src/types";

const Languages = () => {
  // useMediaQuery - doesn't select the corect state on initial load
  // https://github.com/chakra-ui/chakra-ui/issues/3124
  const [isMdUp] = useMediaQuery("(min-width: 48em)");
  const [isMdUpState, setIsMdUpState] = useState(false);

  useEffect(() => {
    if (isMdUp !== isMdUpState) {
      setIsMdUpState(isMdUp);
    }
  }, [isMdUp]);

  const langsPerRow = useBreakpointValue({
    base: 1,
    sm: 2,
    xl: 4,
  });

  const languageAssets: {
    [language: string]: { color: string; src: string };
  } = {
    Japanese: {
      color: "#8ec6c5",
      src: "/imgs/languages/japanese.png",
    },
    English: {
      color: "#03506f",
      src: "/imgs/languages/english.png",
    },
    Chinese: {
      color: "#ee964b",
      src: "/imgs/languages/chinese.png",
    },
  };

  const languages: SkillType[] = [
    {
      name: "Japanese",
      percentage: 100,
      level: "Native",
      color: languageAssets.Japanese.color,
      src: languageAssets.Japanese.src,
    },
    {
      name: "English",
      percentage: 70,
      level: "Advanced",
      color: languageAssets.English.color,
      src: languageAssets.English.src,
    },
    {
      name: "Chinese",
      percentage: 60,
      level: "Intermediate",
      color: languageAssets.Chinese.color,
      src: languageAssets.Chinese.src,
    },
  ];

  const qualifications: QualificationType[] = [
    {
      name: "The EIKEN Test in Practical English Proficiency, Grade 2",
      language: "English",
      date: "July 2010",
      link: "https://www.eiken.or.jp/eiken",
    },
    {
      name: "TOEIC, 760",
      language: "English",
      date: "May 2013",
      link: "https://www.iibc-global.org/toeic.html",
    },
    {
      name: "Test of Chinese Proficiency, Grade 2",
      language: "Chinese",
      date: "December 2013",
      link: "http://www.chuken.gr.jp",
    },
    {
      name: "TOEFL iBT, 72",
      language: "English",
      date: "March 2019",
      link: "https://www.ets.org/jp/toefl/test-takers",
    },
  ];

  return (
    <>
      <SectionTitle title="Languages" />
      {isMdUpState ? (
        <Grid templateColumns={`repeat(${languages.length}, 1fr)`}>
          {languages.map((language, idx) => (
            <GridItem key={idx} colSpan={1}>
              <SkillCircle skill={language} />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Grid
          templateRows={`repeat(${languages.length}, 1fr)`}
          gap={{ base: 0, sm: 2 }}
        >
          {languages.map((language, idx) => (
            <GridItem key={idx} rowSpan={1}>
              <SkillBar skill={language} />
            </GridItem>
          ))}
        </Grid>
      )}
      <SubsectionTitle title="Qualifications" />
      <Grid templateColumns={`repeat(${langsPerRow}, 1fr)`} gap={4}>
        {qualifications.map((qualification, idx) => (
          <GridItem key={idx} colSpan={1}>
            <a href={qualification.link} target="_blank">
              <BorderCard
                color={
                  languageAssets?.[qualification?.language]?.color ?? "red"
                }
                height="100%"
              >
                <Text fontFamily="Avenir" fontSize={{ base: 18, sm: 22 }}>
                  {qualification.date}
                </Text>
                <Text
                  fontFamily="Avenir"
                  fontSize={{ base: 14, sm: 16 }}
                  marginTop={{ base: 1, sm: 4 }}
                >
                  {qualification.name}
                </Text>
              </BorderCard>
            </a>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Languages;
