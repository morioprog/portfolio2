import {
  Grid,
  GridItem,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { SkillType } from "src/types";

import SectionTitle from "components/SectionTitle";
import SkillCircle from "components/SkillCircle";
import SkillBar from "components/SkillBar";

const Skills = () => {
  const skillsPerRow = useBreakpointValue({ base: 1, md: 3, xl: 4 }) ?? 1;

  // useMediaQuery - doesn't select the corect state on initial load
  // https://github.com/chakra-ui/chakra-ui/issues/3124
  const [isMdUp] = useMediaQuery("(min-width: 48em)");
  const [isMdUpState, setIsMdUpState] = useState(false);

  useEffect(() => {
    if (isMdUp !== isMdUpState) {
      setIsMdUpState(isMdUp);
    }
  }, [isMdUp]);

  const skills: SkillType[] = [
    {
      name: "C++",
      percentage: 70,
      color: "#669cd3",
      level: "Advanced",
      src: "/imgs/skills/cpp.png",
    },
    {
      name: "Python",
      percentage: 70,
      color: "#90be6d",
      level: "Advanced",
      src: "/imgs/skills/python.png",
    },
    {
      name: "JavaScript",
      percentage: 60,
      color: "#f9c74f",
      level: "Intermediate",
      src: "/imgs/skills/javascript.png",
    },
    {
      name: "TypeScript",
      percentage: 50,
      color: "#007acc",
      level: "Intermediate",
      src: "/imgs/skills/typescript.png",
    },
    {
      name: "Vue.js",
      percentage: 55,
      color: "#3eba84",
      level: "Intermediate",
      src: "/imgs/skills/vuejs.png",
    },
    {
      name: "React",
      percentage: 60,
      color: "#61dafb",
      level: "Intermediate",
      src: "/imgs/skills/react.png",
    },
    {
      name: "Git",
      percentage: 60,
      color: "#f05033",
      level: "Advanced",
      src: "/imgs/skills/git.png",
    },
    {
      name: "GitHub",
      percentage: 60,
      color: "#161614",
      level: "Advanced",
      src: "/imgs/skills/github.png",
    },
  ];

  return (
    <>
      <SectionTitle title="Skills" />
      {isMdUpState ? (
        <Grid
          templateRows={`repeat(${Math.floor(
            (skills.length + skillsPerRow - 1) / skillsPerRow
          )}, 1fr)`}
          templateColumns={`repeat(${skillsPerRow}, 1fr)`}
          marginTop={12}
          gap={8}
        >
          {skills.map((skill, idx) => (
            <GridItem key={idx} colSpan={1}>
              <SkillCircle skill={skill} />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Grid
          templateRows={`repeat(${skills.length}, 1fr)`}
          gap={{ base: 0, sm: 2 }}
        >
          {skills.map((skill, idx) => (
            <GridItem key={idx} rowSpan={1}>
              <SkillBar skill={skill} />
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Skills;
