import React, {useEffect, useState} from "react";
import "./ItemDetailContainer.scss";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, collection, getDocs, doc} from 'firebase/firestore'
import { useParams } from "react-router";

export const ItemDetailContainer =() => {
    const[ data, setData]= useState ({})
    const {detalleId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb,'productos', '1LuN9iUMknppn0Tpwdn9');
        getDocs(queryDoc)
            .then(res => setData({id:res.id,...res.data()}))
    }, [])
    
    return (
    
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;