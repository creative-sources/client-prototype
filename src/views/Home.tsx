import React, { useEffect, useState } from "react";
import { History } from "history";
import LandingLayout from "components/layout";
import Hero from "components/Hero";

import { load, subscribe, Store } from "store";
import { useSnips } from "useReactive";
import { useObservableState } from "observable-hooks";

import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-gridy-sprites";

let svg = createAvatar(style, {
  seed: "custom-seed",
  // ... and other options
});

interface ChildComponentProps {
  history: History;
  /* other props for ChildComponent */
}

load("welcome");

export const Home: React.SFC<ChildComponentProps> = ({ history }) => {
  const { topSnippets } = useSnips();
  const snips = useObservableState(topSnippets, []);
  const svgString = encodeURIComponent(svg);
  const dataUri = `url("data:image/svg+xml,${svgString}")`;

  const [state, setState] = useState<Store>();
  useEffect(() => {
    subscribe(setState);
  }, []);
  return (
    <LandingLayout>
      <Hero></Hero>
    </LandingLayout>
  );
};
