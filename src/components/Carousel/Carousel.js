import Carousel from 'react-bootstrap/Carousel';

function ElCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/assets/Benito.jpg"
                width= "600"
                height= "600"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>El es Benito uno de nuestros primero diseños</h3>
                <p>lo mejor que te puede pasar es tener un benito en tu vida!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item> 
                <img
                className="d-block w-100"
                src="/assets/Coneja Malvina.jpg"
                width= "600"
                height= "600"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Ella es Malvina!</h3>
                <p>No hay conejito mas tierno que ella!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/assets/Zorrito.jpg"
                width= "600"
                height= "600"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Aca les presentamos al Zorrito mas tierno del mundo</h3>
                <p>
                    Lo podes pedir de los colores que mas te gusten! 
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ElCarousel;