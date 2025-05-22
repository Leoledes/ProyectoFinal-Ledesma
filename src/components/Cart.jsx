import { useContext } from "react";
import { cartContext } from "./CartContext";


const Cart = () => {
    const {cart} = useContext(cartContext)
    return (
        <div>
            {cart.map((cartProduct)=>(
                <div>
                    <h3>{props.product?.title}</h3>
                    <img src={props.product?.imgUrl}></img>
                    <h4>{props.product?.description}</h4>
                    <h3>Precio: ${props.product?.price}</h3>
                </div>
            ))}
        </div>
    )
}

export default Cart