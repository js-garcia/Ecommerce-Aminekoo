import "./CartWidget.css";
import "../ShowCart/ShowCart"
import ShowCart from "../ShowCart/ShowCart";

const CartWidget = ({contador})=>{

    return(
        <div className="navHeader container">
            <a href="#sigin">
                <p className="textNavHeader">Ingresar</p>
            </a>
            <a href="#login">
                <p className="textNavHeader">Registrarse</p>
            </a>
            <ShowCart contador={contador}/>
        </div>
    )
}

export default CartWidget;