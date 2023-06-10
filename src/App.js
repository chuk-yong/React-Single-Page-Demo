import "./styles.css";
import { Home } from "./Home.js";
import { Footer } from "./Footer.js";

import { About } from "./About.js";
import { Menu } from "./Menu.js";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}
