import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { useState } from "react"
import { Link } from 'react-router-dom'

const ItemDetail = ({dataProducts}) => {
    const [quantitySelected, setQuantitySelected] = useState(0)

    return(
        <>
            <div className="item-detail-image">
                <img src= {`${dataProducts.image}`} alt="imagen" />
            </div>
            <div className="item-detail-info">
                <span className="category">Animales Tejidos</span>
                <h2>{dataProducts.title}</h2>
                <p className="detail-info__price">$ {dataProducts.price}</p>
                <div className="detail-info__color">
                    <button>White</button> / <button>Light Blue</button>
                </div>
                <span>Tamaños</span>
                <div className="detail-info__size">
                    <button>Pequeño</button>
                    <button>Mediano</button>
                    <button>Grande</button>
                </div>
                {console.log("quantitySelected: ", quantitySelected)}
    {
        quantitySelected > 0 ? <button><Link to="/cart">TERMINAR COMPRA</Link></button> : <ItemCount setQuantitySelected={setQuantitySelected}/>
    }
                
                
            </div>
        </>
    )
}
    export default ItemDetail