import { Heading } from "@chakra-ui/react";

type Props = {
  title: string;
};

const SubsectionTitle = ({ title }: Props) => {
  return (
    <Heading
      as="h3"
      color="mainColor.4"
      fontFamily="Avenir"
      fontWeight="normal"
      fontSize={{ base: "20px", sm: "28px", md: "36px" }}
      marginTop={{ base: "32px", md: "64px" }}
      marginLeft="auto"
      marginRight="auto"
      marginBottom={{ base: "16px", md: "32px" }}
    >
      {title}
    </Heading>
  );
};

export default SubsectionTitle;
