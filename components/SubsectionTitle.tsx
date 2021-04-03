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
      margin="64px auto 32px"
    >
      {title}
    </Heading>
  );
};

export default SubsectionTitle;
