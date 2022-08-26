import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { useState } from "react"
import { Link } from 'react-router-dom'

const ItemDetail = ({dataProducts, setShowModal}) => {
    const [quantitySelected, setQuantitySelected] = useState(0)

    return(
        <>
            <div className="item-detail-image">
                <img
                    src=  {`./assets/${dataProducts.image}`} 
                    alt="imagen"
                    onClick={() => setShowModal (true)} 
                />
            </div>
            <div className="item-detail-info">
                <span className="category">Muñecos Tejidos</span>
                <h2>{dataProducts.title}</h2>
                <p className="detail-info__price">$ {dataProducts.price}</p>
                <span>Tamaños</span>
                <div className="detail-info__size">
                    <button>Pequeño</button>
                    <button>Mediano</button>
                    <button>Grande</button>
                </div>
                {console.log("quantitySelected: ", quantitySelected)}
    {
        quantitySelected > 0 ? <button><Link to="/cart">TERMINAR COMPRA</Link></button> : <ItemCount setQuantitySelected={setQuantitySelected} data={dataProducts}/>
    }
                
                
            </div>
        </>
    )
}
    export default ItemDetail