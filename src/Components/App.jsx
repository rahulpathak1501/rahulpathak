import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("../pages/Login"));
import NavBar from "./NavBar";
const About = lazy(() => import("./About/About"));
const Skills = lazy(() => import("./Skills"));
const Projects = lazy(() => import("./Projects"));
const Experiences = lazy(() => import("./Experiences"));
const Contact = lazy(() => import("./Contact"));

function App() {
  // const [{ token }, dispatch] = useStateProvider();
  return (
    <div className="app">
      <Router basename="">
        <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<MainContent />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

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

export default App;

{
  /* <Router basename="">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/login" element={<Login />} />
          {/* <Route element={NotFound} /> */
}
{
  /* </Routes> */
}
{
  /* </Router> */
}
{
  /* <NavBar /> */
}
