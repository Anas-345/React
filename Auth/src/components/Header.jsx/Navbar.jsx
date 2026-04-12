import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  function handleClick(path) {
    navigate(path);
  }
  return (
    <div className="bg-[#1E293B] flex items-center justify-between">
      <div className="flex gap-10 p-5 items-center">
        <p
          className="cursor-pointer m-x-10 ml-4 text-4xl"
          onClick={() => handleClick("/")}
        >
          Anas
        </p>
        <p className="cursor-pointer" onClick={() => handleClick("/")}>
          Home
        </p>
        <p className="cursor-pointer" onClick={() => handleClick("/about")}>
          About
        </p>
        <p className="cursor-pointer" onClick={() => handleClick("/contact")}>
          Contact
        </p>
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#334155] py-2 px-3 rounded-lg outline-0"
        />
        <button className="bg-[#38BDF8] py-2 rounded-lg px-4 mr-5 cursor-pointer hover:bg-[#0EA5E9]">
          Search
        </button>
      </div>
    </div>
  );
}
