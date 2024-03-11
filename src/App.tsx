import Test from "./components/pages/Test.js";
import Home from "./components/pages/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.js";
import ParallaxTest from "./components/pages/ParallaxTest.js";
import AboutTest from "./components/pages/AboutTest.tsx";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/parallax" element={<ParallaxTest />} />
        <Route path="/about" element={<AboutTest />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
