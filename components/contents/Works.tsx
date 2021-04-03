import { Grid, GridItem, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";

import BorderCard from "components/BorderCard";
import SectionTitle from "components/SectionTitle";

import { WorkType } from "src/types";

const Works = () => {
  const worksPerRow =
    useBreakpointValue({
      base: 1,
      lg: 2,
      xl: 3,
    }) ?? 1;

  const works: WorkType[] = [
    {
      name: "DeepL Indent Shaper",
      description:
        "PDFからコピーした際のインデントを修正し，直接DeepLでの翻訳が行えるWebサイト．",
      technologies: ["Python", "Streamlit", "Heroku"],
      link: "https://deepl-indent-shaper.herokuapp.com",
    },
    {
      name: "cpplib",
      description:
        "競技プログラミング用のC++ライブラリ．PDFとしても出力される．",
      technologies: ["C++", "GitHub Actions"],
      link: "https://morioprog.github.io/cpplib",
    },
    {
      name: "vscode-snippet-from-file",
      description: "他ファイルの内容を手軽に貼り付けるためのVSCode拡張機能．",
      technologies: ["TypeScript", "VSCode Extension"],
      link:
        "https://marketplace.visualstudio.com/items?itemName=morioprog.snippet-from-file",
    },
    {
      name: "AtCoder Submission User Colorizer",
      description: "AtCoderの提出一覧のユーザ名を色付けするUserScript．",
      technologies: ["JavaScript", "UserScript"],
      link:
        "https://greasyfork.org/ja/scripts/397710-atcoder-submission-user-colorizer",
    },
    {
      name: "AtCoder Language Filter",
      description:
        "AtCoderにおいて，提出言語のフィルタリングと並び替えを行うUserScript．",
      technologies: ["JavaScript", "UserScript"],
      link: "https://greasyfork.org/ja/scripts/398148-atcoder-language-filter",
    },
    {
      name: "Trard",
      description:
        "トレーディングカード用のフリーマーケットサイト．大学の講義にて作成．",
      technologies: ["PHP", "JavaScript", "HTML"],
      link: "http://131.113.100.213/~j170222s/webapp/index.php",
    },
    {
      name: "Portfolio",
      description:
        "このサイトです．落ち着いたデザインを心がけて作っています．卒業研究が落ち着き次第，レスポンシブにする予定です．",
      technologies: ["Vue.js", "JavaScript", "SCSS"],
      link: "https://morioprog.github.io/portfolio",
    },
    {
      name: "OmnisCode",
      description:
        "ヤフー主催のハッカソン「Open Hack U 2020 Vol.5」にて，最優秀賞とHappy Hacking賞の2つの賞をいただきました．フロントエンドを担当しました．",
      technologies: ["Next.js", "TypeScript", "CSS", "Material UI"],
      link: "https://omniscode.one",
    },
  ];

  return (
    <>
      <SectionTitle title="Works" />
      <Grid templateColumns={`repeat(${worksPerRow}, 1fr)`} gap={4}>
        {works.map((work, idx) => (
          <GridItem key={idx} colSpan={1}>
            <a href={work.link} target="_blank">
              <BorderCard color="#a07676" height="100%">
                <Text
                  fontWeight={500}
                  fontFamily="Avenir"
                  fontSize={{ base: 16, sm: 18, xl: 20 }}
                >
                  {work.name}
                </Text>
                <Text
                  fontFamily="Avenir"
                  fontSize={{ base: 14, sm: 16 }}
                  marginTop={4}
                >
                  {work.description}
                </Text>
                <Text
                  fontFamily="Avenir"
                  fontSize={{ base: 14, sm: 16 }}
                  marginTop={2}
                >
                  {work.technologies.join(", ")}
                </Text>
              </BorderCard>
            </a>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Works;
