import React, { useState } from "react";
import {
  RouteComponentProps,
  Router,
  StaticContext,
  Switch,
} from "react-router";
import { createBrowserHistory } from "history";
import AuthRoute from "./Authroute";
import Routes from "./routes";
import { SessionContext, getSessionCookie } from "./sessions";
import NavBar from "./components/Navigation/NavBar";
import { Center, SimpleGrid, Text } from "@chakra-ui/react";

const history = createBrowserHistory();

export const AppRoutes = () => {
  const [session, setSession] = useState(getSessionCookie());

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      <Router history={history}>
        <NavBar />
        <Switch>
          {Routes.map((route, index) => (
            <AuthRoute
              key={index}
              path={route.path}
              isPrivate={route.isPrivate}
              exact
              Component={
                (route.component as unknown) as React.FC<
                  RouteComponentProps<{}, StaticContext, unknown>
                >
              }
            />
          ))}
        </Switch>
        <SimpleGrid style={{ position: "sticky", bottom: "0" }} h="12vh">
          <Center bg="#272727">
            <Text fontSize="xs" color="yellow.600">
              {" "}
              © 2021 Blas Oronoz
            </Text>
          </Center>
        </SimpleGrid>
      </Router>
    </SessionContext.Provider>
  );
};
