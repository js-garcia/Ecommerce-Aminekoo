import { useState } from "react"
import "./ItemDetail.scss"

const ItemDetail = ({dataProducts, initial}) => {

    const {id,title,price,image,image1,image2, stock} = dataProducts

    const [contador, setContador] = useState(initial)

    function onAdd() {
        contador < stock && setContador(contador+1)
    }

    function onRemove() {
        contador > initial && setContador(contador-1)
    }

    return (         
        <div key={id} className="d-flex flex-row align-items-center justify-content-between m-5 contenedor-detail">   
            <div className="d-flex flex-column justify-content-center align-items-center ms-5">
                <image src={image}  className="img-Benito"/>   
            <div className="d-flex flex-row justify-content-around fotos m-3">
                <image src={image1} className="img-Conejo"/>
                <image src={image2} className="foto-secundaria"/>
            </div>               
        </div>           
        <div className=" d-flex flex-column align-items-center justify-content-around me-5">
            <h2>{title}</h2>
                <p className="info d-flex justify-content-center">Los personajes más tiernos,tejidos con mucho amor</p>
                <span className="precio">$ {price}</span>
                <div className="d-flex justify-content-s my-5">
                    <button onClick={onRemove} className="btn btn-outline-danger h-1 border-3 rounded-5">-</button>
                    <p className="m-3">{contador}</p>
                    <button onClick={onAdd} className="btn btn-outline-danger border-3 rounded-5">+</button>
                </div>
                    <button className="btn btn-outline-danger">COMPRAR</button>
        </div>
    </div>            
    )
}

export default ItemDetail