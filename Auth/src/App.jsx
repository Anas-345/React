import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header.jsx/Header";
import PageRouter from "./Router/PageRouter";

export default function App() {
  return (
    <div className="text-[#E2E8F0] min-h-screen flex flex-col">
      <ToastContainer/>
      <Header />
      <div className="flex-1 flex">
      <PageRouter/>
      </div>
      <Footer />
    </div>
  );
}
