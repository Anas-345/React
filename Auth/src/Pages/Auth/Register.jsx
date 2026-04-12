import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/context";
import { toast } from "react-toastify";

export default function Register() {
  const { auth, setAuth } = useContext(AuthContext);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cnfrmRef = useRef();

  const navigate = useNavigate();

  function resetInputs() {
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    cnfrmRef.current.value = "";
  }

  function handleClick(path) {
    resetInputs();
    navigate(path);
  }

  function handleReg(path) {
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const cnfrm = cnfrmRef.current.value;

    if (!name || !email || !password || !cnfrm) {
      toast.error("Please fill the form");
      return;
    } else if (password !== cnfrm) {
      toast.error("Please enter same password");
      return;
    }

    setAuth({
      name,
      email,
      password,
    });
    toast.success("Account Created Successfully");
    handleClick(path);
  }

  useEffect(() => localStorage.setItem("user", JSON.stringify(auth)), [auth]);

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-xl">Create Account</h1>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Name</label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          placeholder="Enter your name"
          className="bg-[#334155] py-2 px-3 rounded-lg outline-0"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          ref={emailRef}
          id="email"
          type="email"
          placeholder="Enter your email"
          className="bg-[#334155] py-2 px-3 rounded-lg outline-0"
          required
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
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="cnfrm-password">Confirm Password</label>
        <input
          ref={cnfrmRef}
          id="cnfrm-password"
          type="password"
          placeholder="Confirm password"
          className="bg-[#334155] py-2 px-3 rounded-lg outline-0"
          required
        />
      </div>
      <div>
        <button
          className="w-52 rounded-md py-1.5 bg-[#38BDF8] cursor-pointer hover:bg-[#0EA5E9] hover:scale-105 transition-all duration-500 ease-in-out"
          onClick={() => handleReg("/auth/login")}
        >
          Register
        </button>
      </div>
      <div>
        <p className="text-sm">
          Already have an account?{" "}
          <span
            className="cursor-pointer text-[#38BDF8] hover:text-[#0EA5E9]"
            onClick={() => handleClick("/auth/login")}
          >
            Login
          </span>
        </p>
      </div>
    </>
  );
}
