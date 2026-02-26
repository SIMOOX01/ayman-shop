import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Components/projects.jsx";
import ProjectDetails from "./Components/ProjectDetails.jsx";
import logo from "./assets/logo.jpeg";


function App() {
  return (
    <Router>
      <div className="app">
        <section className="hero">
        <img src={logo} alt="S2F Industrie" className="hero-logo" />
        </section>

        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
