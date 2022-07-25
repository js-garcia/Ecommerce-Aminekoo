import './ItemProduct.scss'

const ItemProduct = ({title,price, image}) => {

    return(
        <div className="item-product" style={{ width: "18rem" }}>
            <img src={`/assets/${image} `} alt=""/>
            <p>{title}</p>
            <span>$ {price}</span>
            <button>Comprar</button>
            
        </div>

    )
}



export default ItemProduct

