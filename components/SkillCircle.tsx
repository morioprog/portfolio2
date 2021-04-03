import Image from "next/image";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress";

import { SkillType } from "src/types";
import { Text, VStack } from "@chakra-ui/layout";

type Props = { skill: SkillType };

const SkillCircle = ({ skill }: Props) => (
  <VStack>
    <CircularProgress
      color={skill.color}
      size={160}
      thickness={12}
      value={skill.percentage}
    >
      <CircularProgressLabel
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={skill.src}
          objectFit="contain"
          width="55%"
          height="55%"
          loading="lazy"
        />
      </CircularProgressLabel>
    </CircularProgress>
    <Text fontFamily="Avenir" fontSize={28}>
      {skill.name}
    </Text>
    <Text fontFamily="Avenir" fontSize={20} marginTop="0 !important">
      {skill.level}
    </Text>
  </VStack>
);

export default SkillCircle;
