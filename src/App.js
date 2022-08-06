import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Comics from "./pages/Comics";
import Home from "./pages/Home";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Characters from "./pages/Characters";

function App() {
  return (
    <section>
      <Router>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Comics" element={<Comics />} />
          <Route path="/Characters" element={<Characters />} />
        </Routes>
      </Router>
      <footer />
    </section>
  );
}

export default App;
