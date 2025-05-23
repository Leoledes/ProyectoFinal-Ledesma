import { useContext } from "react";
import { cartContext } from "./CartContext";


const Cart = () => {
    const {cart} = useContext(cartContext)
    return (
        <div>
            {cart.map((cartProduct)=>(
                <div key={cartProduct.product.id}>
                    <h3>{cartProduct.product.title}</h3>
                    <img src={cartProduct.product.imgUrl}></img>
                    <h4>{cartProduct.product.description}</h4>
                    <h3>Precio: ${cartProduct.product.price}</h3>
                    <h4>{cartProduct.product.quantity}</h4>
                </div>
            ))}
        </div>
    )
}

export default Cart