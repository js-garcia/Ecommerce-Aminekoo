import "./Footer.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Footer=()=> {
    return (
    <>    
        <Container fluid className="CatProyect">
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}  className="CatProyect-lg">
                        <image src="./assets/Logo-Amineko.png"></image>
                        <div className="texto">
                            <h2>Gatites del centenario</h2>
                            <p>Nuestra mision es que no haya mas animalitos abandonados,parte de lo recaudado en la venta de los amigurumis va para la agrupacion.<span className="strong"> Tenemos que hacer algo al respecto.</span></p>
                        </div>
                        <Button variant="dark">Te sumas?</Button>{' '}
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>    
        </Container>

        <Container fluid className="footer">
            <Container>
                <Row>
                    <Col sm={12} className="center">
                        <image src="../../assests/Amineko.png" className=""></image>
                    </Col>
                </Row> 
                <Row>   
                    <Col sm={12} className="cuerpoFooter">
                        <div className="opcionesFooter">
                            <h5>Nosotros</h5>
                            <p>Los comienzos</p>
                            <p>Mision </p>
                            <p>Vision</p>
                            <p>Valores</p>
                        </div>
                        <div className="opcionesFooter">
                            <h5>Productos</h5>
                            <p>Animales Tejidos</p>
                            <p>Personajes</p>
                            <p>Decoracion</p>
                            <p>Accesorios</p>
                            
                        </div>
                        <div className="opcionesFooter">
                            <h5>Gatites del centenario</h5>
                            <p>Procesos de Fabricacion</p>
                            <p>Eco Packaging</p>
                        </div><div className="opcionesFooter">
                            <h5>Politica de Calidad</h5>
                            <p>Garantias y Soporte</p>
                            <p>Foros y Bolg</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className="center linea">
                        
                    </Col>
                </Row> 
                <Row>
                    <Col sm={12} className="redes">
                        <i className="fa-brands fa-facebook fa-1x"></i>
                        <i className="fa-brands fa-instagram fa-1x"></i>
                        <i className="fa-brands fa-twitter fa-1x"></i>
                        <i className="fa-brands fa-youtube fa-1x"></i>
                    </Col>
                </Row>    
            </Container>    
        </Container>
    </>    
);}

export default Footer;