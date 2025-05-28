import { createContext, useState } from "react";
import { useEffect } from "react";

export const cartContext = createContext()

const CartProvider = ({children}) => {

    const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart")
    return storedCart ? JSON.parse(storedCart) : []
    })

    useEffect(() => {localStorage.setItem("cart", JSON.stringify(cart))}, [cart])

    const onAdd = (product, quantity) => {
    const existProductIndex = cart.findIndex(item => item.product.id === product.id)
        if (existProductIndex !== -1) {
            const updatedCart = [...cart]
            updatedCart[existProductIndex].quantity += quantity
            setCart(updatedCart)
        } else {
            setCart([...cart, { product, quantity }])
        }
    }

    const cleanCart =()=> {
        setCart([])
        localStorage.removeItem("cart")
    }

    const removeItem = (productId) => {
    const existProductIndex = cart.findIndex(item => item.product.id === productId)
        if (existProductIndex !== -1) {
            const updatedCart = [...cart]
            const currentQuantity = updatedCart[existProductIndex].quantity
            if (currentQuantity > 1) {            
            updatedCart[existProductIndex].quantity -= 1
        } else {updatedCart.splice(existProductIndex, 1)}            
        setCart(updatedCart)
        }
    }

    const getTotalPrice =()=>{
        let totalPrice = 0

        cart.forEach((cartProduct) => {
            totalPrice = totalPrice + cartProduct.product.price * cartProduct.quantity
        })

        return totalPrice
    }

    const getTotalItemsInCart = () =>{
        let totalItemsInCart = 0

        cart.forEach((cartProduct) => {
            totalItemsInCart = totalItemsInCart + cartProduct.quantity
        })

        return totalItemsInCart 
    }

    return (
    <cartContext.Provider value={{cart, onAdd, cleanCart, removeItem, getTotalPrice, getTotalItemsInCart}}>{children}</cartContext.Provider>
    )
}

export default CartProvider