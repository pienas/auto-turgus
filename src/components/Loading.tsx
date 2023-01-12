import { Flex, Spinner } from "@chakra-ui/react";

export const Loading = () => (
  <Flex
    justifyContent="center"
    alignItems="center"
    width="100vw"
    height="100vh"
    background="#1E1E1E"
  >
    <Spinner size="xl" color="white" />
  </Flex>
);
