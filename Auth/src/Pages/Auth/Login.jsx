import { useContext, useRef } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/context";
import { toast } from "react-toastify";

export default function Login() {
  const { auth } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  function resetInputs() {
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  function handleClick(path) {
    resetInputs();
    navigate(path);
  }

  function handleLogin(path) {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (auth?.email === email && auth?.password === password) {
      toast.success("Logged in Successfully");
      resetInputs();
      handleClick(path);
      return;
    }
    toast.error("Please enter correct email & password");
  }
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-xl">Login</h1>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          ref={emailRef}
          id="email"
          type="email"
          placeholder="Enter your email"
          className="bg-[#334155] py-2 px-3 rounded-lg outline-0"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <input
          ref={passwordRef}
          id="password"
          type="password"
          placeholder="Create password"
          className="bg-[#334155] py-2 px-3 rounded-lg outline-0"
        />
      </div>
      <div>
        <button
          className="w-52 rounded-md py-1.5 bg-[#38BDF8] cursor-pointer hover:bg-[#0EA5E9] hover:scale-105 transition-all duration-500 ease-in-out"
          onClick={() => handleLogin("/")}
        >
          Login
        </button>
      </div>
      <div>
        <p className="text-sm">
          Don't have an account?{" "}
          <span
            className="cursor-pointer text-[#38BDF8] hover:text-[#0EA5E9]"
            onClick={() => handleClick("/auth/register")}
          >
            Register
          </span>
        </p>
      </div>
    </>
  );
}
