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
    {...other}
  >
    {children}
  </Box>
);

export default BorderCard;
