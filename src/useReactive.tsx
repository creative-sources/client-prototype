import React, { createContext, useContext } from "react";
import { BehaviorSubject, map } from "rxjs";

export interface Snippet {
  id: string;
  owner: string;
  language: string;
  description: string;
  style: string;
  upvotes: number;
  downvotes: number;
  content: string;
}

export const rawSnippet$ = new BehaviorSubject<Snippet[]>([]);
/* 
export const topSnippets = rawSnippet$.pipe(
  map((results) => results.filter((r) => r.upvotes > 2))
); */

export const topSnippets = rawSnippet$.pipe(
  map((snip) =>
    snip
      .map((data) => ({
        ...data,
      }))
      /* score = comments + saved ... time ... subreddit => front */
      .sort((a, b) => (a.upvotes < b.upvotes ? 1 : -1))
  )
);

fetch("/snippets.json")
  .then((res) => res.json())
  .then((data) => rawSnippet$.next(data));

const SnipContext = createContext({
  topSnippets,
  rawSnippet$,
});

export const useSnips = () => useContext(SnipContext);

export const SnipProvider: React.FunctionComponent = ({ children }) => (
  <SnipContext.Provider value={{ topSnippets, rawSnippet$ }}>
    {children}
  </SnipContext.Provider>
);
