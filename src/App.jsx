
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import CSHelp from "./CsHelp";

export default function App() {
  const [references, setReferences] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("cshelp-topics");
    if (saved) {
      setReferences(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever references change
  useEffect(() => {
    localStorage.setItem("cshelp-topics", JSON.stringify(references));
  }, [references]);

  return (
    <Router>
      <div className="App">
        <header className="top-bar">
          <nav>
            <div className="logo">Encyclopedia</div>
            <div className="tabs">
              <Link to="/" className="tab-btn">Home</Link>
              <Link to="/cshelp" className="tab-btn">CS Help</Link>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cshelp" element={<CSHelp references={references} setReferences={setReferences} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

  const [references, setReferences] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("cshelp-topics");
    if (saved) {
      setReferences(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever references change
  useEffect(() => {
    localStorage.setItem("cshelp-topics", JSON.stringify(references));
  }, [references]);

  return (
    <Router>
      <div className="App">
        <header className="top-bar">
          <nav>
            <div className="logo">Encyclopedia</div>
            <div className="tabs">
              <Link to="/" className="tab-btn">Home</Link>
              <Link to="/cshelp" className="tab-btn">CS Help</Link>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cshelp" element={<CSHelp references={references} setReferences={setReferences} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
