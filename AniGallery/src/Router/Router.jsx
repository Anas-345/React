import { Route, Routes } from "react-router";
import Home from "../components/Home";
import DetailPage from "../components/DetailPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<DetailPage/>} />
    </Routes>
  );
}
