import { Routes, Route } from "react-router-dom";
import Blog from "./features/Blog/pages/Blog";
import Home from "./features/Home/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}
