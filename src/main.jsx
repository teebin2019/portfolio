import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import 'flowbite';

import App from "./App.jsx";
import About from "./pages/About.jsx";
import Skill from "./pages/Skill.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";

// Auth
import AuthLayout from "./ui/layout/AuthLayout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

// Dashboard
import Dashboard from "./pages/Dashboard.jsx";
import Home from "./pages/Home.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="skill" element={<Skill />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="contact" element={<Contact />} />

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
