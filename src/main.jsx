import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import About from "./About.jsx";
import Skill from "./Skill.jsx";
import Portfolio from "./Portfolio.jsx";
import Contact from "./Contact.jsx";

// Auth
import AuthLayout from "./ui/layout/AuthLayout.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="skill" element={<Skill />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="contact" element={<Contact />} />

      <Route element={<AuthLayout  />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
