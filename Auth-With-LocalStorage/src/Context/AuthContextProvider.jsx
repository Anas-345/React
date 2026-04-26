import { useState, useEffect } from "react";
import { AuthContext } from "./context";

export default function AuthContextProvider({ children }) {
  const [login, setLoginState] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("auth_user");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed);
      setLoginState(true);
    }
  }, []);

  const setLogin = (value) => {
    setLoginState(value);
    if (!value) {
      localStorage.removeItem("auth_user");
      setUser(null);
    }
  };

  const saveUser = (userData) => {
    setUser(userData);
    setLoginState(true);
    localStorage.setItem("auth_user", JSON.stringify(userData));
  };

  const getUsers = () => {
    const users = localStorage.getItem("registered_users");
    return users ? JSON.parse(users) : [];
  };

  const registerUser = (userData) => {
    const users = getUsers();
    const exists = users.find((u) => u.email === userData.email);
    if (exists) return { success: false, message: "Email already registered." };
    const newUser = { ...userData, id: Date.now() };
    users.push(newUser);
    localStorage.setItem("registered_users", JSON.stringify(users));
    saveUser({ email: newUser.email, name: newUser.name, id: newUser.id });
    return { success: true };
  };

  const loginUser = (email, password) => {
    const users = getUsers();
    const found = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (!found)
      return { success: false, message: "Invalid email or password." };
    saveUser({ email: found.email, name: found.name, id: found.id });
    return { success: true };
  };

  const updatePassword = (email, newPassword) => {
    const users = getUsers();
    const idx = users.findIndex((u) => u.email === email);
    if (idx === -1)
      return { success: false, message: "No account found with that email." };
    users[idx].password = newPassword;
    localStorage.setItem("registered_users", JSON.stringify(users));
    return { success: true };
  };

  return (
    <AuthContext.Provider
      value={{ login, setLogin, user, registerUser, loginUser, updatePassword }}
    >
      {children}
    </AuthContext.Provider>
  );
}
