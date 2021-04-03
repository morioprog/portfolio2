import { Heading, useTheme } from "@chakra-ui/react";

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  const theme = useTheme();

  return (
    <Heading
      as="h2"
      color="mainColor.4"
      fontFamily="Avenir"
      fontWeight="normal"
      fontSize={{ base: "24px", sm: "40px", md: "48px" }}
      margin="96px auto 48px"
      _after={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        height: "2px",
        width: "30%",
        content: "''",
        background: `linear-gradient(to right, ${theme.colors.mainColor[4]} 0%, ${theme.colors.mainColor[2]} 100%)`,
      }}
    >
      {title}
    </Heading>
  );
};

export default SectionTitle;
