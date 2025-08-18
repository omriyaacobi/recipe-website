import "./App.css";
import Home from "./Home/Home.jsx";
import About from "./About.jsx";
import AddRecipe from "./AddRecipe/AddRecipe.jsx";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/AddRecipe" element={<AddRecipe />} />
        </Routes>
      </div>
      <nav>
        {/* <Link to="/">Home</Link> */}
        <Link to="/about">About</Link>
      </nav>
    </>
  );
};

export default App;
