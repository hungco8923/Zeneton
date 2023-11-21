import Navbar from "./components/Navbar";
import "./App.css";
import "./sass/styles.scss";
import "normalize.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Product from "./pages/Product";

function App() {
  const type = ["boxers", "briefs"];

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Product type={type} />}>
          <Route path=":type" element={<Product />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
