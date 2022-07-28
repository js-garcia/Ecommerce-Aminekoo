import ItemProduct from "../ItemProduct/ItemProduct"
import './ItemListContainer.scss'



const ItemListContainer = ({section}) => {

    const product1 = {
    title:"Oso Benito",
    price: 2500,
    image: 'Benito.jpg',
    stock: 3
    }
    const product2 = {
    title:"Coneja Malvina",
    price: 1980,
    image:'Coneja Malvina.jpg',
    stock: 4
    }
    const product3 = {
    title:"Dragon",
    price: 2250,
    image:'Dragon.jpg',
    stock: 3
    }
    const product4 = {
    title:"Jirafa",
    price: 1980, 
    image:'Jirafa.jpg',
    stock: 3
    }
    const product5 = {
    title:"Llamita",
    price: 1980,
    image:'Llamita.jpg',
    stock: 5
    }
    const product6 = {
    title:"Oso Rufina",
    price: 3280, 
    image:'Oso Rufina.jpg',
    stock: 2
    }
    const product7 = {
    title:"Sailor Moon",
    price: 1980,
    image:'Sailor Moon.jpg',
    stock: 4
    }
    const product8 = {
    title:"Sirena", 
    price: 1980,
    image:'Sirena.jpg',
    stock: 3
    }
    return(
        <div className='list-product'>
            <h2>{section}</h2>
        <ItemProduct  data={product1}/>
        <ItemProduct  data={product2}/>
        <ItemProduct  data={product3}/>
        <ItemProduct  data={product4}/>
        <ItemProduct  data={product5}/>
        <ItemProduct  data={product6}/>
        <ItemProduct  data={product7}/>
        <ItemProduct  data={product8}/>
        </div>
        
    )
}

export default ItemListContainer