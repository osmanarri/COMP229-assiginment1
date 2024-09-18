// App.jsx
// Osman Tahir
// Student # 301075554

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import styled from 'styled-components';
import GlobalStyle from './globalStyles';

const MainContent = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <MainContent>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>        
      </MainContent>
      <Footer />
    </Router>
  );
}

export default App;
