import Image from "next/image";

import { SkillType } from "src/types";
import { Box, Grid, GridItem, HStack, Text } from "@chakra-ui/layout";
import { useBreakpointValue, useMediaQuery } from "@chakra-ui/media-query";

type Props = { skill: SkillType };

const SkillBar = ({ skill }: Props) => {
  const iconSize = useBreakpointValue({ base: 24, sm: 36 }) ?? 20;
  const [isSmUp] = useMediaQuery("(min-width: 30em)");

  return (
    <Grid templateColumns="repeat(13, 1fr)" gap={{ base: 0, sm: 2 }}>
      <GridItem colSpan={2}>
        <Image
          src={skill.src}
          objectFit="contain"
          width={iconSize}
          height={iconSize}
          loading="lazy"
        />
      </GridItem>
      {isSmUp && (
        <GridItem colSpan={4} display="flex" alignItems="center">
          <Text fontFamily="Avenir" fontSize="20px">
            {skill.name}
          </Text>
        </GridItem>
      )}
      <GridItem
        colSpan={{ base: 11, sm: 7 }}
        marginTop="auto"
        marginBottom="auto"
        marginRight="16px"
      >
        <HStack spacing={0}>
          <Box bg={skill.color} height="20px" width={`${skill.percentage}%`} />
          <Box
            bg="#eeeeee"
            height="20px"
            width={`${100 - skill.percentage}%`}
          />
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default SkillBar;
