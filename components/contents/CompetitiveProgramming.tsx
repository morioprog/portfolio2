import { Box, Grid, GridItem, HStack, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import axios from "axios";
import useSWR from "swr";

import SectionTitle from "components/SectionTitle";
import BorderCard from "components/BorderCard";

import { CompetitiveProgrammingType } from "src/types";
import { apiQueries, apiUrl } from "src/fetchRating";

const CompetitiveProgramming = () => {
  const sitesPerRow = useBreakpointValue({
    base: 1,
    sm: 3,
  });

  const accounts: CompetitiveProgrammingType[] = [
    {
      name: "AtCoder",
      userId: "morio__",
    },
    {
      name: "Codeforces",
      userId: "morio__",
    },
    {
      name: "TopCoder",
      userId: "morio__",
    },
  ];

  const fetcher = async (url: string) => {
    const res = await axios.get(url);
    return res.data;
  };
  const { data, error } = useSWR(apiUrl(accounts), fetcher);
  if (error || !data) {
    return <></>;
  }

  return (
    <>
      <SectionTitle title="Competitive Programming" />
      <Grid templateColumns={`repeat(${sitesPerRow}, 1fr)`} gap={4}>
        {accounts.map((account, idx) => (
          <GridItem key={idx}>
            <BorderCard color={data[apiQueries[account.name]].color}>
              <Text
                fontWeight={500}
                fontFamily="Avenir"
                fontSize={{ base: 16, sm: 22 }}
              >
                {account.name}
              </Text>
              <HStack
                fontFamily="Avenir"
                justify="center"
                marginTop={{ base: 1, sm: 2 }}
                fontSize={{ base: 14, sm: 16 }}
              >
                <Box>Rating: </Box>
                <Box
                  color={data[apiQueries[account.name]].color}
                  fontWeight={500}
                >
                  {data[apiQueries[account.name]].rating}
                </Box>
              </HStack>
            </BorderCard>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default CompetitiveProgramming;
