import { Link, Route, Router, Routes } from "react-router-dom";

import "./App.css";
import React from "react";
import { ButtonGroup } from "react-bootstrap/";
import { Button } from "react-bootstrap/";
import { Container } from "react-bootstrap/";
import { Home } from "./components/Home";
import { Asian } from "./components/Asian";
import { French } from "./components/French";
import { Italian } from "./components/Italian";
import { Mediterranean } from "./components/Mediterranean"



function App() {
  return (


    <Container>

      <ButtonGroup className="btnhome">
        <Button  >
          <Link to="/" className="btnlink">Home</Link >
        </Button>
        <Button>
          <Link to="/Asian" className="btnlink">Asian</Link>
        </Button>
        <Button>
          <Link to="/French" className="btnlink">French</Link>
        </Button>
        <Button  >
          <Link to="/Italian" className="btnlink">Italian</Link >
        </Button>
        <Button  >
          <Link to="/Mediterranean" className="btnlink">Mediterranean</Link >
        </Button>
      </ButtonGroup>



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Asian" element={<Asian />} />
        <Route path="/French" element={<French />} />
        <Route path="/Italian" element={<Italian />} />
        <Route path="/Mediterranean" element={< Mediterranean />} />
      </Routes>


    </Container>

  );
}


export default App