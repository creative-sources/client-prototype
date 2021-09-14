/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  Grid,
  Text,
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  GridItem,
} from "@chakra-ui/react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef as any} colorScheme="green" onClick={onOpen}>
        About
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        initialFocusRef={btnRef as any}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const NavBar = () => {
  return (
    <Grid bg="brand.600" templateColumns="repeat(2,1fr)" gap={3}>
      <GridItem p="2rem " minW={["20vw", "40vw", "60vw", "80vw", "90vw"]}>
        <Box>
          <Link to="/">
            <Text fontWeight="extrabold">Dcreative</Text>
          </Link>
        </Box>
      </GridItem>
      <GridItem p="2rem">
        <Box>
          <DrawerExample />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default NavBar;
