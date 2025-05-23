import { createContext, useState } from "react";

export const cartContext = createContext()

const CartProvider = ({children}) => {

    const[cart, setCart] = useState([])

    const onAdd = (product, quantity) => {
        setCart([...cart, {product: product, quantity: quantity }])
    }

    const cleanCart =()=> {
        setCart([])
    }

    const removeItem =(productId)=>{
        setCart(cart.filter((cartProduct)=> cartProduct.product.id !== productId))
    }

    return (
    <cartContext.Provider value={{cart, onAdd, cleanCart, removeItem}}>{children}</cartContext.Provider>
    )
}

export default CartProvider