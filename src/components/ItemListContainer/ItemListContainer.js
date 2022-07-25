import ItemProduct from "../ItemProduct/ItemProduct"



const ItemListContainer = ({section}) => {
    return(
        <div className='list-product'>
            <h2>{section}</h2>
        <ItemProduct  title="Oso Benito" price={2500} image={'Benito.jpg'}/>
        <ItemProduct  title="Coneja Malvina" price={1980} image={'Coneja Malvina.jpg'}/>
        <ItemProduct  title="Dragon" price={2250}  image={'Dragon.jpg'}/>
        <ItemProduct  title="Jirafa" price={1980}  image={'Jirafa.jpg'}/>
        <ItemProduct  title="Llamita" price={1980}  image={'Llamita.jpg'}/>
        <ItemProduct  title="Oso Rufina" price={3280}  image={'Oso Rufina.jpg'}/>
        <ItemProduct  title="Sailor Moon" price={1980}  image={'Sailor Moon.jpg'}/>
        <ItemProduct  title="Sirena" price={1980}  image={'Sirena.jpg'}/>
        <ItemProduct  title="Sonajeros" price={1400}  image={'Sonajeros.jpg'}/>
        <ItemProduct  title="Zorrito" price={1980}  image={'Zorrito.jpg'}/>
        </div>
    )
}

export default ItemListContainer