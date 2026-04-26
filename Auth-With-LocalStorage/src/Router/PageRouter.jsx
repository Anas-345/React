import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Auth from "../Pages/Auth/Auth";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ForgotPassword from "../Pages/Auth/ForgotPassword";

export default function PageRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgotpassword" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
}