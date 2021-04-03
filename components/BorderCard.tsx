import { Box } from "@chakra-ui/layout";

type Props = {
  color: string;
  children?: React.ReactNode;
  [other: string]: any;
};

const BorderCard = ({ color, children, ...other }: Props) => (
  <Box
    bg="white"
    boxShadow="md"
    borderTop={`5px solid ${color}`}
    borderRadius="0.25em"
    padding="16px"
    transition="0.3s"
    _hover={{
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      transition: "0.3s",
    }}
    {...other}
  >
    {children}
  </Box>
);

export default BorderCard;
