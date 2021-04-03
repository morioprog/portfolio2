import { Box, Grid, GridItem, HStack, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SectionTitle from "components/SectionTitle";
import BorderCard from "components/BorderCard";

import { CompetitiveProgrammingType, ContestType } from "src/types";
import { apiQueries, apiUrl } from "src/fetchRating";

const CompetitiveProgramming = () => {
  const sitesPerRow = useBreakpointValue({
    base: 1,
    sm: 3,
  });
  const titleSize = useBreakpointValue({
    base: 18,
    md: 22,
    lg: 24,
  });

  // useMediaQuery - doesn't select the corect state on initial load
  // https://github.com/chakra-ui/chakra-ui/issues/3124
  const [isMdUp] = useMediaQuery("(min-width: 48em)");
  const [isMdUpState, setIsMdUpState] = useState(false);

  useEffect(() => {
    if (isMdUp !== isMdUpState) {
      setIsMdUpState(isMdUp);
    }
  }, [isMdUp]);

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

  const otherContests: ContestType[] = [
    {
      date: "November 2018",
      name: "CODE THANKS FESTIVAL 2018",
      link: "https://atcoder.jp/contests/code-thanks-festival-2018",
    },
    {
      date: "July 2019",
      name: "ICPC 2019 Asia Yokohama Regional Contest",
      result: "Passed the domestic qualifying round (45th out of 458 teams)",
      link: "https://icpc.iisf.or.jp/2019-yokohama",
    },
    {
      date: "September 2019",
      name: "第一回日本最強プログラマー学生選手権決勝",
      link: "https://atcoder.jp/contests/jsc2019-final",
    },
    {
      date: "January 2020",
      name: "DISCO presents ディスカバリーチャンネル コードコンテスト2020 本戦",
      link: "https://atcoder.jp/contests/ddcc2020-final",
    },
    {
      date: "November 2020",
      name: "ICPC 2020 Asia Yokohama Regional Contest",
      result: "Passed the domestic qualifying round (32th out of 297 teams)",
      link: "https://icpc.iisf.or.jp/2020-yokohama",
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
      <br />
      <Box fontFamily="Avenir">
        {isMdUp ? (
          <VerticalTimeline>
            {otherContests.map((otherContest) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--contests"
                iconStyle={{ background: "#8db596" }}
              >
                <h2
                  className="vertical-timeline-element-title"
                  style={{ fontWeight: 500, fontSize: titleSize }}
                >
                  {otherContest.date}
                </h2>
                <h3 style={{ marginTop: 16 }}>{otherContest.name}</h3>
                {otherContest.result && (
                  <h4 style={{ marginTop: 4 }}>{otherContest.result}</h4>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        ) : (
          <Grid gap={4}>
            {otherContests.map((otherContest, idx) => (
              <GridItem key={idx}>
                <BorderCard color="#8db596">
                  <Text fontWeight={500} fontSize={{ base: 16, sm: 20 }}>
                    {otherContest.date}
                  </Text>
                  <Text fontSize={{ base: 16, sm: 18 }} marginTop={2}>
                    {otherContest.name}
                  </Text>
                  {otherContest.result && (
                    <Text fontSize={{ base: 14, sm: 16 }}>
                      {otherContest.result}
                    </Text>
                  )}
                </BorderCard>
              </GridItem>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default CompetitiveProgramming;
