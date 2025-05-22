import { useContext } from "react";
import { cartContext } from "./CartContext";


const Cart = () => {
    const {cart} = useContext(cartContext)
    return (
        <div>
            {cart.map((cartProduct)=>(
                <div key={cartProduct.id}>
                    <h3>{cartProduct.title}</h3>
                    <img src={cartProduct.imgUrl}></img>
                    <h4>{cartProduct.description}</h4>
                    <h3>Precio: ${cartProduct.price}</h3>
                </div>
            ))}
        </div>
    )
}

export default Cart