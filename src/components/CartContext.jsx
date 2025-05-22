import { createContext } from "react";

export const cartContext = createContext()

const CartProvider = ({children}) => {

    const[cart,setCart] = useState()

    return <cartContext.Provider value={{cart}}>{children}</cartContext.Provider>
}

export default CartProvider