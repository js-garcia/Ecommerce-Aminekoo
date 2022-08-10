import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../../Utils/products.mocks";
import './ItemDetailContainer.scss';
import { useParams } from 'react-router-dom'



const ItemDetailContainer = () => {
    const [productData, setProductData] = useState({})

    const { id } = useParams()
    
    useEffect( () => {
        filterById()
    }, [id])

    const filterById = () => {
        products.some( (product) => {
            if(product.id === id) {
                console.log("producto filtrado: ", product)
                setProductData(product) 
            }
        }
    )
    }
    return(
        <div className="container-item-detail">
            <ItemDetail data={productData}/>
        </div>
    )
    
}


export default ItemDetailContainer