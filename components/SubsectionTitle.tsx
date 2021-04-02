import { Heading } from "@chakra-ui/react";

type Props = {
  title: string;
};

const SubsectionTitle = ({ title }: Props) => {
  return (
    <Heading
      as="h3"
      color="mainColor.5"
      fontFamily="Avenir"
      fontWeight="normal"
      fontSize={{ base: "20px", sm: "28px", md: "40px" }}
      margin="32px auto"
    >
      {title}
    </Heading>
  );
};

export default SubsectionTitle;
