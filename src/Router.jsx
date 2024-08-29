import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./pages/Login";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experiences from "./Components/Experiences";
import Contact from "./Components/Contact";

function MainContent() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <>
        <NavBar />
        <Login />
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <MainContent />
      </>
    ),
  },
]);
