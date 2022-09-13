import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

function Navigation() {
    return (
    <div className="fixed">
        <CartWidget contador={0} />
        <Navbar bg="dark" variant="dark">
        <Container>
            <Link to="/">
            <img
              alt=""
              src="/assets/Amineko.png"
              width="90"
              height="85"
              className="d-inline-block align-top"
            />
          </Link>
          <Nav className="me-auto">
            <Link to="/Animales">
              <p className="link"> Animales Tejidos </p>
            </Link>
            <Link to="/Personajes">
              <p className="link"> Personajes</p>
            </Link>
            <Link to="/Accesorios">
              <p className="link"> Accesorios </p>
            </Link>
            <Link to="/Decoracion">
              <p className="link"> Decoracion </p>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;