import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";

import Contact from "./components/pages/Contact.tsx";
import Project from "./components/pages/project.tsx";
import Portfolio from "./components/pages/portfolio.tsx";
import Blog from "./components/pages/Blog.tsx";
import Docker from "./components/pages/blogs/Docker.tsx";
import AGI from "./components/pages/blogs/AGI.tsx";

import "aos/dist/aos.css";
import AOS from "aos";
import "./index.js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/portfolios" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/docker" element={<Docker />} />
        <Route path="/blog/agi" element={<AGI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
