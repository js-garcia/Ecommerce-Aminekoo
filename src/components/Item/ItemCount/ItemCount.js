import { React, useState, useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import Button from "react-bootstrap/Button";
import "./ItemCount.css";

const ItemCount = ({ stock, quantitySelected, producto }) => {
    const [cantidad, setCantidad] = useState(1);

    const { addToCart, cart } = useContext(CartContext);

    function incDec(signo) {
    if (signo === "-") {
        if (cantidad > 1) {
        setCantidad(cantidad - 1);
    }
    } else if (signo === "+") {
        if (cantidad < stock) {
        setCantidad(cantidad + 1);
    }
    }
    }

    function onAdd() {
    quantitySelected(cantidad);
    console.log("Producto desde itemCount: ", producto);
    console.log("cantidad desde itemCount: ", cantidad);
    addToCart({ ...producto, cantidad });
    console.log("Cart desde ItemCount", cart);
    }

    return (
    <>
        <h4>Cuantos vas a llevar?</h4>
        <p className="stk">Stock :{stock}</p>
        <div className="conContainer">
        <div className="btnContador">
            <button onClick={() => incDec("-")} className="boton">
            -
            </button>
        </div>
        <div className="txtCantidad">{cantidad}</div>
        <div className="btnContador">
            <button onClick={() => incDec("+")} className="boton">
            +
            </button>
        </div>
        </div>
        <Button onClick={onAdd} variant="dark" className="buttonSize">
            Agregar al Carrito
        </Button>
    </>
    );
};

export default ItemCount;