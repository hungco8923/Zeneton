import Navbar from "./components/Navbar";
import "./App.css";
import "./sass/styles.scss";
import "normalize.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const type = ["boxers", "briefs"];

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="products" element={<Products type={type} />}>
          <Route path=":type" element={<Products />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
