import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Login from "../pages/Login";
import { useStateProvider } from "../Provider/StateProvider";
import { reducerConstants } from "../Action";

function App() {
  // const [{ token }, dispatch] = useStateProvider();
  return (
    <div className="app">
      <Router basename="">
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<MainContent />} />
        </Routes>
      </Router>
    </div>
  );
}

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
