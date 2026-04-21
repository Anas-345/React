import { useState } from "react";
import { AnimeContext } from "./context";

export default function ContextProvider({ children }) {
  const [findAnime, setAnime] = useState("");

  return (
    <AnimeContext.Provider value={{ findAnime, setAnime }}>
      {children}
    </AnimeContext.Provider>
  );
}
