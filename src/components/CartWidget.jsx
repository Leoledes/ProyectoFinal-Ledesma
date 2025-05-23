import { Link } from "react-router-dom"
import CarritoCompras from "../img/carritoCompras.png"

function CartWidget (){
    return (
      <Link to="/cart">
        <div className={"cartcontainer"}>
          <img className={"carticon"} src={CarritoCompras} alt="Carrito"></img>
          <span className={"cartcount"}>0</span>
        </div>
      </Link>
    )
}

export default CartWidget