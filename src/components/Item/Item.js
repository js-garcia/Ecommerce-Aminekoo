import "./Item.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ datos }) => {
    const {imagen, titulo, precio, id, categoria} = datos;
    return (
    <Card className="cardShadow" style={{ width: "15rem" }}>
      <Link to={`/${categoria}/${id}`}>
      <div className="likeBarra">
        <i className="fa-regular fa-heart fa-1x onTop-c derecha likeColor"></i>
      </div>  
      <Card.Img variant="top" src={`../../assets/images/${imagen}`} />
      <Card.Body>
        <div className="divisor">
        </div>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{precio}</Card.Text>
      </Card.Body>
      </Link>
    </Card>
  );
};

export default Item;