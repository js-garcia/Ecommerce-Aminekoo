import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"
import { useParams } from "react-router-dom";

const Product=()=>{
    const { id }=useParams()
    return(
        <ItemDetailContainer item={id}/>
    )
}

export default Product;