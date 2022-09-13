import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import ElCarousel from "../../components/Carousel/Carousel";

const Home=()=>{
    return(
        <>
            <ElCarousel />
            <ItemListContainer titulo="Listado de Productos" filtro=""/>
        </>
    )
}

export default Home;