import './ItemProduct.scss'

const ItemProduct = ({title,price, image}) => {

    return(
        <div className="item-product">
            <img src={`/assets/${image} `}   alt="Oso Benito"/>
            <p>{title}</p>
            <span>$ {price}</span>
            <button>Comprar</button>

        </div>

    )
}

export default ItemProduct

