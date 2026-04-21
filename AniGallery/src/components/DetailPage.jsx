import { useContext } from "react";
import { AnimeContext } from "../Context/context";
import anime from "../data";
import Card from "./Card";

export default function DetailPage() {
  const { findAnime } = useContext(AnimeContext);

  const data = anime.find((item) => item.name === findAnime);

  return (
    <>
    <div className="flex flex-col justify-center items-center">
      {
          <Card
          image={data.image}
          name={data.name}
          episodes={data.episodes}
          ratings={data.rating}
          releasedate={data.releaseYear}
          description={data.description}
          genre={data.genre}
          />
        }
        </div>
    </>
  );
}
