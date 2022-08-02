import { useEffect, useState } from 'react'
import Item from '../ItemList/ItemList'
import './ItemListContainer.scss'
import Products from '../../Utils/products.mocks'


const ItemListContainer = ({section}) => {

    const[listProducts, setListProducts] = useState([])

    const getProducts = new Promise( (resolve) => {
        setTimeout( () => {
            resolve(Products)
        }, 2000)
    }) 

    useEffect(() => {
        getProducts
            .then( (res) => { // Respuesta OK
                //console.log("Productos: ", res)
                setListProducts(res)
            })
            .catch( (error) => { // Falla la respuesta
                console.log("la llama fallo", error)
            })
            .finally( () => { // Siempre que termina por OK o Fallo
            //setSpinner(false) 
            })

    },)

    return(
        <div className='list-product'>
            <h2>{section}</h2>
        <Item  dataProducts={listProducts}/>
        </div>
        
    )
}

export default ItemListContainer