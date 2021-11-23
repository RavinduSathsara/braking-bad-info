import React from "react";
import NavBar from "./components/NavBar";

//Router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Cast from "./screens/Cast";
import Quotes from "./screens/Quotes";

const App = () => {
  return (
    <div className="bg-light">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cast" element={<Cast />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
