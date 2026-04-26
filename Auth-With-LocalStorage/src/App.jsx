import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PageRouter from "./Router/PageRouter";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageRouter />
      <Footer />
    </div>
  );
}