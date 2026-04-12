import { Route, Routes } from "react-router";
import Home from "../Pages/Home/Home";
import Auth from "../Pages/Auth/Auth";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

export default function PageRouter() {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact />} />
        <Route path="auth" element={<Auth />}>
        <Route path="register" element={<Register />}/>
        <Route path="login" element={<Login/>}/>
        </Route>
    </Routes>
}