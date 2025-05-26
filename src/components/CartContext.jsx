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

    const removeItem =(productId)=> {
        setCart(cart.filter((cartProduct)=> cartProduct.product.id !== productId))
    }

    const getTotalPrice =()=>{
        let totalPrice = 0

        cart.forEach((cartProduct) => {
            totalPrice = totalPrice + cartProduct.product.price * cartProduct.quantity
        })

        return totalPrice
    }

    return (
    <cartContext.Provider value={{cart, onAdd, cleanCart, removeItem, getTotalPrice}}>{children}</cartContext.Provider>
    )
}

export default CartProvider