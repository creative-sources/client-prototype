import React, { useEffect, useState } from "react";
import { History } from "history";
import { Text, Button, Center, Flex, Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import { load, subscribe, Store } from "store";
import background from "../assets/img/application-development-1970020.svg";
interface ChildComponentProps {
  history: History;
  /* other props for ChildComponent */
}

load("welcome");
export const Home: React.SFC<ChildComponentProps> = ({ history }) => {
  const [state, setState] = useState<Store>();
  useEffect(() => {
    subscribe(setState);
  }, []);
  return (
    <Center bg="#272826" color="white">
      <Flex
        minHeight="80vh"
        direction="column"
        alignItems="center"
        alignContent="space-evenly"
      >
        <Text
          bgGradient="linear(to-l, brand.600,brand.700)"
          bgClip="text"
          m="2rem"
          fontSize="4xl"
          fontWeight="extrabold"
          flexBasis="auto"
        >
          {state?.title}
        </Text>
        <Image h="50vh" borderRadius="full" boxSize="350px" src={background} />
        <Box marginY="3rem" height="12vh">
          <Button as="a" bg="Green" variant="ghost" href="/register">
            Hire me!
          </Button>
        </Box>
      </Flex>
    </Center>
  );
};
