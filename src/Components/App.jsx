import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import About from "./About/About";
import Skills from "./Skills";
import Experiences from "./Experience/Experiences";
import Contact from "./Contact";
import Footer from "./Footer";
import Resume from "./Resume";

function App() {
  return (
    <>
      <Router basename="">
        <Routes>
          <Route path="/resume" element={<Resume />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <About />
                <Skills />
                <Experiences />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </>

  );
}

export default App;
