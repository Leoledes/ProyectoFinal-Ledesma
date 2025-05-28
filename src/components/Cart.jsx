import { useContext } from "react";
import { cartContext } from "./CartContext";
import { Link } from "react-router-dom"

const Cart = () => {
    const {cart, cleanCart, removeItem, getTotalPrice} = useContext(cartContext)

    const totalPrice = getTotalPrice()


    if (cart.length === 0) return <h3>Faltan añadir productos al carrito!</h3>

    return (
        <div>
            <h2>Tus productos seleccionados</h2>
            {cart.map((cartProduct)=>(
                <div key={cartProduct.product.id}>
                    <h3>{cartProduct.product.title}</h3>
                    <img src={cartProduct.product.imgUrl}></img>
                    <h4>{cartProduct.product.description}</h4>
                    <h3>Precio: ${cartProduct.product.price}</h3>
                    <h4>Cantidad seleccionada:{cartProduct.quantity}</h4>
                    <button onClick={()=>{removeItem(cartProduct.product.id)}}>Eliminar seleccionado</button>
                </div>
            ))}
            <h3>El precio total de tus productos es: ${totalPrice}</h3>
            <Link to="/checkout">Finalizar su compra</Link>
            <button onClick={cleanCart}>Vaciar Carrito</button>  
        </div>
    )
}

export default Cart