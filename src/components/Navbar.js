import React from "react";
import CV from '../pages/Cv'
import PB from '../pages/Pb'
import '../Styles/Navbar.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";


class BootstrapNavbar extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
            <Router>
              <Navbar>
                <Nav className="navbar">
                    
                  <Button className="HomeBtn">
                    <Nav.Link href="/">CV</Nav.Link>
                  </Button>

                  <Button className="HomeBtn">
                    <Nav.Link href="/Pb">PB</Nav.Link>
                  </Button>  

                </Nav>
              </Navbar>
              <br />
                <Routes>
                    <Route path="/" element={<CV />} />
                    <Route path="/Pb" element={<PB />} />
                </Routes>
            </Router>
        </div>
      </div>
    );
  }
}
export default BootstrapNavbar;
