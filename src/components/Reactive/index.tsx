import React, { useEffect, useMemo, useState } from "react";
import { rawSnippet$, topSnippets, Snippet } from "useReactive";

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
  useEffect(() => {
    topSnippets.subscribe(console.log);
  }, []);
  return (
    <div style={{ padding: "2rem", backgroundColor: "#fff" }}>
      <Search />
    </div>
  );
};

export default Reactive;
