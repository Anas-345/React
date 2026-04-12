import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  function handleClick(path) {
    navigate(path);
  }
  return (
    <div className="flex items-center justify-center px-4 flex-1">
      <div className="w-full max-w-lg text-center space-y-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quod quia sapiente magni, voluptatibus corporis aut minus ea? Iusto
          pariatur dolor nisi accusantium neque a consequatur cum facere dolore
          aliquam atque cumque delectus perferendis, expedita tenetur quibusdam
          voluptas asperiores, aspernatur.
        </p>
        <div className="flex justify-center gap-3">
          <button
            className="cursor-pointer bg-[#38BDF8] px-4 py-2 rounded-lg hover:bg-[#0EA5E9] hover:scale-105"
            onClick={() => handleClick("/auth/register")}
          >
            Register
          </button>
          <button
            className="cursor-pointer bg-[#38BDF8] px-4 py-2 rounded-lg hover:bg-[#0EA5E9] hover:scale-105"
            onClick={() => handleClick("/auth/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
