
import Card from 'react-bootstrap/Card';
import './Carousel.css'

function BasicExample() {
  return (
    <Card style={{ width: '' }}>
      <Card.Img className='Card-img' src="/assets/carousel/img-5.JPG" />
      <Card.Img className='Card-img' src="/assets/carousel/img-4.jpg" />
      <Card.Img className='Card-img' src="/assets/carousel/img-3.jpg" />
    </Card>



  );
}

export default BasicExample;