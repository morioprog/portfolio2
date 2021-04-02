import { Grid, GridItem } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/react";
import SectionTitle from "components/SectionTitle";
import SkillBar from "components/SkillBar";
import SkillCircle from "components/SkillCircle";
import { useEffect, useState } from "react";

import { SkillType } from "src/types";

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

  const languages: SkillType[] = [
    {
      name: "Japanese",
      percentage: 100,
      level: "Native",
      color: "#8ec6c5",
      src: "/imgs/languages/japanese.png",
    },
    {
      name: "English",
      percentage: 70,
      level: "Advanced",
      color: "#03506f",
      src: "/imgs/languages/english.png",
    },
    {
      name: "Chinese",
      percentage: 60,
      level: "Intermediate",
      color: "#ee964b",
      src: "/imgs/languages/chinese.png",
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
    </>
  );
};

export default Languages;
