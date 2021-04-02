import { Heading, useTheme } from "@chakra-ui/react";

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  const theme = useTheme();

  return (
    <Heading
      as="h2"
      color="mainColor.5"
      fontFamily="Avenir"
      fontWeight="normal"
      fontSize={{ base: "24px", sm: "40px", md: "54px" }}
      margin="32px auto"
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
