import Test from "./components/pages/Test.js";
import Home from "./components/pages/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.js";
import ParallaxTest from "./components/pages/ParallaxTest.js";
import AboutTest from "./components/pages/AboutTest.tsx";
function App() {
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
