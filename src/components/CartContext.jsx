import { createContext, useState } from "react";

export const cartContext = createContext()

const CartProvider = ({children}) => {

    const[cart, setCart] = useState([])

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