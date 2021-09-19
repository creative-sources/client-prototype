import React from "react";
import { As, Flex, FlexProps, OmitCommonProps } from "@chakra-ui/react";
import Header from "../Header";
import Footer from "../Footer"; 

export default function LandingLayout(
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      >,
      keyof FlexProps
    > &
    FlexProps &
    OmitCommonProps<any, keyof FlexProps> & { as?: As<any> | undefined }
) {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["", "white", "primary.700", "primary.700"]}
      direction="column"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
      <Header />
      {props.children}
      <Footer />
    </Flex>
  );
}
