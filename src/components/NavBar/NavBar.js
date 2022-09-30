
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";




function CollapsibleExample() {
  return (
    <div className='fixed'>
      <CartWidget contador={0} />
    <Navbar collapseOnSelect expand="lg" bg="dark">
      <Container>
          <Navbar.Brand href="#home">
            <h2>AMINEKO</h2>
            <img alt="logo" src="./assets/Amineko.png" width="100" height="100"/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="my-navbar">
            <Nav.Link href="#animales tejidos">Animalitos</Nav.Link>
            <Nav.Link href="#personajes tejidos">Personajes</Nav.Link>
            <Nav.Link href="#decoracion">Decoracion</Nav.Link>
            <Row>
              <Col sm={12} className="center linea">
              </Col>
            </Row> 

          </Nav>
          <Nav>
          </Nav>
      </Container>
    </Navbar>
    </div>
  );
}

export default CollapsibleExample;