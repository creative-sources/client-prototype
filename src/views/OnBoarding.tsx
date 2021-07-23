import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Form } from "../components/NameForm/NameForm";
import { useAuthState } from "../useAuth";

export const OnBoarding = () => {
  const state = useAuthState();
  console.log(state);
  return (
    <Flex direction="column" alignItems="center" h="60vh">
      {!!state.verify ? (
        <Center bg="brand.900" h="100px" color="white">
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
            bg="brand.900"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              {`Hi ${state.name!}`}
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Thanks for submitting your application. Our team will get back to
              you soon.
            </AlertDescription>
          </Alert>
        </Center>
      ) : (
        <div>
          <Text color="brand.800" fontSize="4xl" p="5">
            Pre-Register
          </Text>
          <Form label="Register" variant="blue">

          </Form>
        </div>
      )}
    </Flex>
  );
};
