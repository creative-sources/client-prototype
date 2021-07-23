/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  Grid,
  Image,
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
} from "@chakra-ui/react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef as any} colorScheme="orange" onClick={onOpen}>
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
            <Button variant="outline" mr={3} onClick={onClose}>
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
    <Grid templateColumns="repeat(2, 1fr)" gap={10}>
      <Box alignSelf="center" paddingLeft="30">
        <Link to="/">
          <Image src={logo} boxSize="150px" />
        </Link>
      </Box>
      <Box alignSelf="center" paddingLeft="35" height="43px">
        <DrawerExample />
      </Box>
    </Grid>
  );
};

export default NavBar;
