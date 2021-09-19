import React, { useEffect, useMemo, useState } from "react";
import { rawSnippet$, topSnippets, Snippet } from "useReactive";
import { useObservableState } from "observable-hooks";

const Search = () => {
  const [search, setSearch] = useState("");
  const [snippet, setSnippet] = useState<Snippet[]>([]);

  useEffect(() => {
    const sub = rawSnippet$.subscribe(setSnippet);
    return () => sub.unsubscribe();
  }, []);

  const topSnippets = useMemo(() => {
    return snippet.filter((s) => s.language.includes(search));
  }, [snippet, search]);
  return (
    <div
      style={{
        padding: "2rem",
        display: "grid",
        gridTemplateColumns: " 1fr, 1fr",
      }}
    >
      <label>Search</label>
      <input
        style={{
          maxWidth: "50%",
        }}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {topSnippets.map((s) => (
          <div key={s.id}>{s.content}</div>
        ))}
      </div>
    </div>
  );
};

const Reactive = () => {
  const snippet = useObservableState(topSnippets, []);

  return (
    <div style={{ padding: "2rem", backgroundColor: "#fff" }}>
      <Search />
      <hr />
      {snippet.map((s) => (
        <div key={s.id}>
          <h1>{s.language}</h1>
          <p>
            <strong>{s.owner}</strong>
          </p>
          <p>{s.description}</p>
          <code>{s.content}</code>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Reactive;
