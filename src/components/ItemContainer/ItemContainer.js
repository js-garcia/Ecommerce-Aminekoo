import ItemProduct from "../ItemProduct/ItemProduct"


const ItemContainer = ({section}) => {
    return(
        <div className='list-product'>
            <h2>{section}</h2>
        <ItemProduct  title="Oso Benito" price={2500} image={'Benito.jpg'}/>
        <ItemProduct  title="Coneja Malvina" price={1980} image={'Coneja Malvina.jpg'}/>
        <ItemProduct  title="Dino" price={1980}  image={'Dino.jpg'}/>
        <ItemProduct  title="Dragon" price={2250}  image={'Dragon.jpg'}/>
        <ItemProduct  title="Jirafa" price={1980}  image={'Fondo.jpg'}/>
        <ItemProduct  title="Jirafa" price={1980}  image={'Jirafa.jpg'}/>
        <ItemProduct  title="Jirafa" price={1980}  image={'Llamita.jpg'}/>
        <ItemProduct  title="Jirafa" price={3280}  image={'Oso Rufina.jpg'}/>
        <ItemProduct  title="Jirafa" price={1980}  image={'Sailor Moon.jpg'}/>
        <ItemProduct  title="Jirafa" price={1980}  image={'Sirena.jpg'}/>
        <ItemProduct  title="Jirafa" price={1400}  image={'Sonajeros.jpg'}/>
        <ItemProduct  title="Jirafa" price={1980}  image={'Zorrito.jpg'}/>
        </div>
    )
}

export default ItemContainer