import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Contact from "./page/Contact";
import About from "./page/About";
import MarketPlace from "./page/MarketPlace";
import ProductOverview from "./components/ProductOverview";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/marketplace" element={<MarketPlace />}></Route>
          <Route path="/marketplace/product/overview/:id" element={<ProductOverview />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
