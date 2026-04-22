import DragonBallSuper from "./assets/DragonBallSuper.jpg";
import ClassroomOfTheElite from "./assets/ClassroomOfTheElite.jpg";
import JujustuKaisen from "./assets/JujustuKaisen.jpg";

export const anime = [
  {
    id: 1,
    name: "Jujutsu Kaisen",
    image: JujustuKaisen,
    episodes: 47,
    genre: "Action, Supernatural, Dark Fantasy",
    releaseYear: 2020,
    rating: 8.7,
    description:
      "Yuji Itadori joins a secret organization of sorcerers to eliminate powerful curses and uncover the mystery behind Sukuna, the King of curses.",
  },
  {
    id: 2,
    name: "Dragon Ball Super",
    image: DragonBallSuper,
    episodes: 131,
    genre: "Action, Adventure, Martial Arts",
    releaseYear: 2015,
    rating: 8.3,
    description:
      "Goku and his friends face new powerful gods and warriors across multiple universes while pushing their limits beyond Super Saiyan.",
  },
  {
    id: 3,
    name: "Classroom of the Elite",
    image: ClassroomOfTheElite,
    episodes: 25,
    genre: "Psychological, School, Drama",
    releaseYear: 2017,
    rating: 8.0,
    description:
      "Ayanokoji, a quiet but brilliant student, hides his intelligence while navigating a cutthroat school system where only the elite survive.",
  },
];

export default anime;
