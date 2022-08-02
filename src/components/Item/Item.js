import React from 'react';
import './Item.scss'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ItemCount from '../ItemCount/ItemCount';


const Item = ({dataProducts}) => {

    const {id,title, image, price, stock} = dataProducts

    return(
        <div key={id} className="d-flex flex-row align-items-center justify-content-between m-5 contenedor-detail">
        <div className="item">
            <div className='float-options'>
                <p>ENVIO GRATIS</p>
                <button><FavoriteBorderIcon /></button>
            </div>
            <img src={`/assets/${image}`} alt="Imagen producto" />
            </div>
            <div className='detail-product'>
                <p>{title}</p>
                <p><CreditCardIcon /> 3 Cuotas sin interes</p>
                <p><DeliveryDiningIcon />Envio fratis a partir de $3000</p>
                <span>$ {price}</span>
                <ItemCount stock={stock}/>
            </div>
        </div> 
    )
}

export default Item