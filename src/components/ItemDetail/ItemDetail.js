import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { useState } from "react"
import { Link } from 'react-router-dom'

const ItemDetail = ({data}) => {
    const [quantitySelected, setQuantitySelected] = useState(0)

    return(
        <>
            <div className="item-detail-image">
                <img src= {`${data.image}`} alt="imagen" />
            </div>
            <div className="item-detail-info">
                <span className="category">Muñecos Tejidos</span>
                <h2>{data.title}</h2>
                <p className="detail-info__price">$ {data.price}</p>
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