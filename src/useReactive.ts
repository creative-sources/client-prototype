import { BehaviorSubject, map } from "rxjs";

export interface Snippet {
  id: string;
  owner: string;
  language: string;
  description: string;
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
        upvotes: data.upvotes,
      }))
      .sort((a, b) => (a.upvotes < b.upvotes ? 1 : -1))
  )
);

fetch("/snippets.json")
  .then((res) => res.json())
  .then((data) => rawSnippet$.next(data));
