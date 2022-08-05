import Item from "../ItemDetail/ItemDetail"
import "./ItemList.scss"


const ItemList = ({dataProducts}) => {
    return (
        <div className="d-flex row justify-content-center m-3 flex-wrap">
            { dataProducts.map( (product)=>{return <Item key={product.id} data={product} initial={1}/>})}
        </div>
    )
}

export default ItemList