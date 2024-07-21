import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/about.jsx";
import Projects from "./components/Project.jsx";
import Skill from "./components/Skill.jsx";
import Contact from "./components/Contact1.jsx";
import Footer from "./components/footer.jsx";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

    <Footer />
  </React.StrictMode>
);
