import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer"
import './index.css'

function App() {
  
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path="/item/:productId" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        <Route path="/category/:categoryId" element={<ItemListContainer></ItemListContainer>}></Route>
      </Routes>      
    </BrowserRouter>
  )
}

export default App
