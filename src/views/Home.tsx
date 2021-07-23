import React from "react";
import { History } from "history";
import { Text, Button, Center, Flex, Image } from "@chakra-ui/react";
import wallet from "../assets/img/wallet.svg";
interface ChildComponentProps {
  history: History;
  /* other props for ChildComponent */
}

export const Home: React.SFC<ChildComponentProps> = ({ history }) => {
  return (
    <Center bg="#000" h="65vh" color="white">
      <Flex direction="column">
        <Text
          bgGradient="linear(to-l, brand.600,brand.700)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="extrabold"
        >
          Get your wallet!
        </Text>
        <Image src={wallet} />
        <Button as="a" variant="outline" href="/register">
          pre-register
        </Button>
      </Flex>
    </Center>
  );
};
