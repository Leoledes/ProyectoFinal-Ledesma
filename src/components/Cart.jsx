import { useContext } from "react";
import { cartContext } from "./CartContext";


const Cart = () => {
    const {cart, cleanCart, removeItem} = useContext(cartContext)
    return (
        <div>
            <h2>Tus productos seleccionados</h2>
            {cart.map((cartProduct)=>(
                <div key={cartProduct.product.id}>
                    <h3>{cartProduct.product.title}</h3>
                    <img src={cartProduct.product.imgUrl}></img>
                    <h4>{cartProduct.product.description}</h4>
                    <h3>Precio: ${cartProduct.product.price}</h3>
                    <h4>{cartProduct.product.quantity}</h4>
                    <button onClick={()=>{removeItem(cartProduct.product.id)}}>Eliminar seleccionado</button>
                </div>
            ))}
            <button onClick={cleanCart}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart