import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import { useParams } from "react-router-dom";


const Category=()=>{
    const cat = useParams();
    console.log(cat)
    return(
        <ItemListContainer titulo="Listado de Productos" filtro={cat.listaProductos}/>
    )
}

export default Category;
