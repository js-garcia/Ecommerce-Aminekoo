import './NavBar.scss'
import CartWidget from './CartWidget'


const NavBar = () => {
    return(
        <div className='navbar-amineko'>
            <img src= "/assets/amineko.png" alt="logo amineko"  width="70px" height="70px"></img>
            <ul>
                <li><button>Inicio</button></li>
                <li><button>Productos</button></li>
                <li><button>Carrito</button></li>
                <li><button>Contacto</button></li>
            </ul>
            <CartWidget/>
            </div>
    )



}

export default NavBar