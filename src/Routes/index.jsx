import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Flavors from "../Pages/Flavors";

export default function Routs() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Flavors" element={<Flavors />} />
      </Routes>
    </BrowserRouter>
  );
}
