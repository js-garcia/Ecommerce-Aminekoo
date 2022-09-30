import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../../Item/ItemCount/ItemCount";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ItemDetail = ({ datos }) => {
  const { imagen, titulo, precio, stock,categoria } =
    datos;
  const [quantitySelected, setQuantitySelected] = useState(0);
  return (
    <div className="containerDetail">
      <div className="containerImgs">
        <div className="tmbsContainer">
          <div className="tmbContainer">
            <img className="tmb" src={`/assets/images/${imagen}`} alt="" />
          </div>
          <div className="tmbContainer">
            <img className="tmb" src={`/assets/images/${imagen}`} alt="" />
          </div>
          <div className="tmbContainer">
            <img className="tmb" src={`/assets/images/${imagen}`} alt="" />
          </div>
          <div className="tmbContainer">
            <img className="tmb" src={`/assets/images/${imagen}`} alt="" />
          </div>
        </div>
        <div className="imgContainer">
          <div className="likeBarra">
            <i className="fa-regular fa-heart fa-2x onTop derecha likeColor"></i>
          </div>
          <img className="imagen" src={`/assets/images/${imagen}`} alt="" />
        </div>
      </div>
      <div className="containerInfo">
        <div className="linkBack">
          <Link to="/">
            <p className="linkBackText">Home - </p>
          </Link>
          <Link to={`/${categoria}`}>
            <p className="linkBackText">{categoria} - </p>
          </Link>
          <p className="linkBackText">{titulo}</p>
        </div>
        <h1>{titulo}</h1>
        <hr />
        <div className="precio">
          <h2>{precio}</h2>
        </div>
        <hr />
        <h4>Descripcion del Producto</h4>
        <p>
          {titulo}Ideal para hacerle un regalo a esa personita especial,nada mejor que un regalo
          hecho a mano y con mucho amor!
        </p>
        <hr />
        <div className="comprar">
          {quantitySelected > 0 ? (
            <>
              <Link to={`/${categoria}`}>
                <Button variant="dark" className="buttonSize">
                  Seguir comprando...
                </Button>
              </Link>
              <div className="separador"></div>
              <Link to={`/Cart`}>
                <Button variant="light" className="buttonSize">
                  Terminar Compra
                </Button>
              </Link>
            </>
          ) : (
            <ItemCount
              stock={stock}
              quantitySelected={setQuantitySelected}
              producto={datos}
            />
          )}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ItemDetail;
