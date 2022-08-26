import  {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.scss";
//import Products from "../../Utils/products.mocks";
import { useParams } from "react-router";
import Modal from "../Modal/Modal";
//Firebase
import db from "../../FirebaseConfig";
import { doc,  getDoc } from 'firebase/firestore';
import { async } from "@firebase/util"


const ItemDetailContainer =() => {
    const [ dataProducts, setDataProducts] = useState ({})
    const [showModal, setShowModal] = useState(false)
    const { id } = useParams();

    useEffect( () => {
        getProduct()
        .then((res) => {
            setDataProducts(res)
        })
    }, [id])

    

    const getProduct = async () => {
        const docRef = doc(db, 'productos', id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        dataProducts.id = docSnapshot.id
        return product
    }

    return(
        <div className={`container-item-detail ${showModal ? 'overlay-black' : ''}`}>
            <ItemDetail data={dataProducts} setShowModal={setShowModal}/>
            {showModal && (
                <Modal title="Imagen Producto" close={setShowModal}>
                    <image src={`/assets/${dataProducts.image}`} />
                </Modal>
            )}
        </div>
    )
}

export default ItemDetailContainer;