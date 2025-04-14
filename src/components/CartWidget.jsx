import CarritoCompras from "../img/carritoCompras.png"

function CartWidget (){
    return (
        <div className={"cartcontainer"}>
          <img className={"carticon"} src={CarritoCompras} alt="Carrito"></img>
          <span className={"cartcount"}>0</span>
        </div>
    )
}

export default CartWidget