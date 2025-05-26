import { Link } from "react-router-dom"
import CarritoCompras from "../img/carritoCompras.png"
import { useContext } from "react"
import { cartContext } from "./CartContext"

function CartWidget (){
  const { getTotalItemsInCart } = useContext (cartContext)
  const totalItemsInCart = getTotalItemsInCart()

    return (      
      <Link to="/cart">
        <div className={"cartcontainer"}>
          <img className={"carticon"} src={CarritoCompras} alt="Carrito"></img>
          <span className={"cartcount"}>{totalItemsInCart > 0 && totalItemsInCart}</span>          
        </div>
      </Link>
    )
}

export default CartWidget