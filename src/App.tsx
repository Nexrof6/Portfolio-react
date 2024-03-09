import Test from "./components/pages/Test.js";
import Home from "./components/pages/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.js";
import ParallaxTest from "./components/pages/ParallaxTest.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/parallax" element={<ParallaxTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
