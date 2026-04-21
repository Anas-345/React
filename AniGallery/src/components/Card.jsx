import { useNavigate } from "react-router";
import Image from "./Image.jsx";
import { useContext } from "react";
import { AnimeContext } from "../Context/context";
import Info from "./Info.jsx";

export default function Card({
  name,
  image,
  episodes,
  genre,
  ratings,
  releasedate,
  description,
}) {
  const navigate = useNavigate();
  const { setAnime } = useContext(AnimeContext);

  function handleClick() {
    setAnime(name)
    navigate(`/detail`);
  }

  return (
    <div
      className="bg-stone-700 p-4 mx-6 rounded-xl shadow-2xl w-[370px] flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
      onClick={handleClick}
    >
      <h2 className="text-2xl">{name}</h2>
      <Image imgSrc={image} alt={name} />
      <Info head="Episodes: " body={episodes} />
      <Info head="Ratings: " body={ratings} />
      <Info head="Release Year: " body={releasedate} />
      <Info head="Genre: " body={genre} />
      <Info head="Description: " body={description} Info />
    </div>
  );
}
