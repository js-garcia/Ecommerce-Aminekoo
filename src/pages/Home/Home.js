import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import BasicExample from "../../components/Carousel/Carousel";


const Home=()=>{
    return(
        <>
            <BasicExample/>
            <ItemListContainer titulo="Listado de Productos" filtro=""/>
        </>
    )
}

export default Home;