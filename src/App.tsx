import Test from "./components/pages/Test.js";
import Home from "./components/pages/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.js";
import AboutTest from "./components/pages/AboutTest.tsx";
import ServiceTest from "./components/pages/ServiceTest.tsx";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Contact from "./components/pages/Contact.tsx";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/about" element={<AboutTest />} />
        <Route path="/service" element={<ServiceTest />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
