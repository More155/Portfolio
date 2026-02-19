import { Routes, Route } from "react-router-dom"
import Skills from "../pages/Skills"
import About from "../pages/About"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"
import { Home } from "../pages/Home"
import { PetProjects } from "../pages/PetProjects"

export default function AppRouter() {
  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pet-projects" element={<PetProjects/>} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  )
}

