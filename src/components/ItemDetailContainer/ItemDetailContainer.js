import { useState, useEffect } from "react";
import "./ItemDetailContainer.scss";
import ItemDetail from "../ItemDetail/ItemDetail";
import prod from "../../Utils/products.mocks"

function ItemDetailContainer({ item }) {
    const [producto, setProducto] = useState([]);

    const traeProducto = new Promise((resolve) => {
    setTimeout(() => {
        resolve(prod.find((p) => p.id === parseInt(item)));
    }, 1);
});

    useEffect(() => {
        traeProducto
        .then((respuesta) => {
        setProducto(respuesta);
        console.log(producto);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("seguimos...");
    });
    }, []);

    return (
    <div className="container contenedorVista">
        <ItemDetail datos={producto} />
    </div>
    );
}

export default ItemDetailContainer;