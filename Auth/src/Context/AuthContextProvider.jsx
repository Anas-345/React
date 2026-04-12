import { useState } from "react";
import { AuthContext } from "./context";

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')): {});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
