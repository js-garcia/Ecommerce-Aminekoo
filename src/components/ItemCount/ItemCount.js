import { useState, useContext } from "react"
import { CartContext } from '../../Context/CartContext'

const ItemCount = ({setQuantitySelected, data}) => {
    const { addToCart } = useContext(CartContext)

    const [countQuantity, setCountQuantity] = useState(1)

    const addQuantity = () => {
        setCountQuantity(countQuantity + 1)
    }
    
    const removeQuantity = () => {
        setCountQuantity(countQuantity -1)
    }

    const onAdd = () => {
        console.log("Agregar al carrito: ", data)
        addToCart({...data, countQuantity})
        setQuantitySelected(countQuantity)
    }

    return(
        <>
            <div className="container-count">
                <button onClick={removeQuantity}>-</button>
                <span>{countQuantity}</span>
                <button onClick={addQuantity}>+</button>
            </div>
            <button onClick={onAdd}>Agregar al Carrito</button>
        </>
    )
}

export default ItemCount