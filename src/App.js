import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Components/projects.jsx";
import ProjectDetails from "./Components/ProjectDetails.jsx";
import logo from "./assets/logo.jpeg";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
