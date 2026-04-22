import anime from "../data";
import Card from "./Card";

export default function Home() {
  return (
    <div className="bg-stone-900 flex mx-6 my-16">
      {anime.map((data) => (
        <Card
        id={data.id}
          image={data.image}
          key={data.name}
          name={data.name}
          episodes={data.episodes}
          ratings={data.rating}
          releasedate={data.releaseYear}
          description={data.description}
          genre={data.genre}
        />
      ))}
    </div>
  );
}
