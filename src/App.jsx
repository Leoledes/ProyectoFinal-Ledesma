import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer"
import CartProvider from "./components/CartContext"
import './index.css'
import Cart from "./components/Cart"
import { createFirebaseApp } from "./utils/configFirebase"
import Checkout from "./components/Checkout"

function App() {
  createFirebaseApp()

  return (
    <BrowserRouter>
      <CartProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path="/item/:productId" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        <Route path="/category/:categoryId" element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
      </CartProvider>      
    </BrowserRouter>
  )
}

export default App
