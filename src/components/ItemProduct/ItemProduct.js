import './ItemProduct.scss'
import ItemCount from '../ItemCount/ItemCount'

const ItemProduct = ({data, action}) => {
    
    const {title, image, price, stock} = data
    return(
        <div className="item-product" style={{ width: "18rem" }}>
            <img src={`/assets/${image} `} alt="Imagen Producto"/>
            <p>{title}</p>
            <span>$ {price}</span>
            <p>Stock {stock}</p>
            <button onClick={action}>Comprar</button>
            <ItemCount stock={stock}/>
        </div>

    )
}



export default ItemProduct

