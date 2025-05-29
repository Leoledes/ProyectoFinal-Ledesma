import { useContext } from "react";
import { cartContext } from "./CartContext";
import { Link } from "react-router-dom"


const Cart = () => {
    const {cart, cleanCart, removeItem, getTotalPrice} = useContext(cartContext)

    const totalPrice = getTotalPrice()


    if (cart.length === 0) return <h3 className={"carrovacio"}>Faltan añadir productos al carrito!</h3>

    return (
        <div className={"cart"}>
            <h2>Tus productos seleccionados:</h2>
            {cart.map((cartProduct)=>(
                <div key={cartProduct.product.id} className={"cartcard"}>
                    <h3>{cartProduct.product.title}</h3>
                    <img src={cartProduct.product.imgUrl}></img>
                    <h3>Precio x unidad: ${cartProduct.product.price}</h3>
                    <h4>Cantidad seleccionada:{cartProduct.quantity}</h4>
                    <button onClick={()=>{removeItem(cartProduct.product.id)}}>Eliminar seleccionado</button>
                </div>
            ))}
            <h3>El precio total de tus productos es: ${totalPrice}</h3>
            <Link to="/checkout" className={"buttonlink"}>Finalizar su compra</Link>
            <Link to="/" className={"buttonlink"}>Seguir comprando</Link>
            <button onClick={cleanCart} className={"buttonvaciar"}>Vaciar Carrito</button>  
        </div>
    )
}

export default Cart