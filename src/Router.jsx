import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("./Components/Home"));
const Login = lazy(() => import("./pages/Login"));
const NavBar = lazy(() => import("./Components/NavBar"));
const About = lazy(() => import("./Components/About/About"));
const Skills = lazy(() => import("./Components/Skills"));
const Projects = lazy(() => import("./Components/Projects"));
const Experiences = lazy(() => import("./Components/Experiences"));
const Contact = lazy(() => import("./Components/Contact"));

function MainContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <MainContent />
      </Suspense>
    ),
  },
]);
