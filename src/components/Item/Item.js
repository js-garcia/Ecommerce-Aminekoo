import "./Item.css";
import ItemCount from "../Item/ItemCount/ItemCount";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ datos }) => {
    const {imagen, titulo, precio, onsale, id, categoria} = datos;
    return (
    <Card className="cardShadow" style={{ width: "15rem" }}>
      <Link to={`/${categoria}/${id}`}>
      <div className="likeBarra">
        <i className="fa-regular fa-heart fa-1x onTop-c derecha likeColor"></i>
      </div>  
      {onsale? 
      <Card.Img
        variant="top"
        className="sale-c"
        src={"/assets/sale img.png"}
      />:``}
      <Card.Img variant="top" src={`/assets/${imagen}`} />
      
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