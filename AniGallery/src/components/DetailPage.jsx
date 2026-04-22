import { useParams } from "react-router";
import Card from "./Card";
import anime from "../data";

export default function DetailPage() {
  const { id } = useParams();
  const data = anime.find((item) => item.id === Number(id));

  if (!data) {
    return <h2>Anime not found</h2>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Card
        image={data.image}
        name={data.name}
        episodes={data.episodes}
        ratings={data.rating}
        releasedate={data.releaseYear}
        description={data.description}
        genre={data.genre}
      />
    </div>
  );
}
