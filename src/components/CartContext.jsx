import { createContext } from "react";

export const cartContext = createContext()

const CartProvider = ({children}) => {

    const[cart,setCart] = useState([])

    const onAdd =(product, quantity)=> {
        setCart([...cart, {product: product, quantity: quantity }])
    }

    return <cartContext.Provider value={{cart}}>{children}</cartContext.Provider>
}

export default CartProvider