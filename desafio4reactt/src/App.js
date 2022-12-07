import MiApi from "./components/MiApi";
import React from "react";
import LandingPage from "./components/LandingPage";
import "./App.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";


function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">HOME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/miapi">Characters</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      <br />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/miapi" element={<MiApi />} />

      </Routes>
    </Router>
  );
}

export default App;