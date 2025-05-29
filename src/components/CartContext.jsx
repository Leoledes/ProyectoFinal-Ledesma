import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2"

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
        const updatedCart = cart.filter(item => item.product.id !== productId);
        setCart(updatedCart);
    };

    const increaseItem = (productId) => {
        const updatedCart = cart.map(item => {
        if (item.product.id === productId) {
        if (item.quantity < item.product.stock) {
          return { ...item, quantity: item.quantity + 1 }
            } else {
            Swal.fire({
                title: "Atención",
                text: `Superas el stock disponible máximo: ${item.product.stock}`,
                icon: "warning"
            })}
        }
        return item
        })
        setCart(updatedCart)
    }

    const decreaseItem = (productId) => {
        const updatedCart = cart
        .map(item => {
            if (item.product.id === productId) {
            return { ...item, quantity: item.quantity - 1 }
            }
            return item
        })
        .filter(item => item.quantity > 0)
        setCart(updatedCart)
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
    <cartContext.Provider value={{cart, onAdd, cleanCart, removeItem, increaseItem, decreaseItem, getTotalPrice, getTotalItemsInCart}}>{children}</cartContext.Provider>
    )
}

export default CartProvider