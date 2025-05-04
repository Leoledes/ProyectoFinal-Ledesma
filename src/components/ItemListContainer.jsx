import { useEffect, useState } from "react"
import { getProducts } from "../utils/getProducts"
import ItemList from "./ItemList"

function ItemListContainer(props){
    
    const [products, setProducts] = useState ([])

    useEffect(()=> {
        getProducts()
        .then((productsFromPromise) => setProducts(productsFromPromise))
        .catch((error) => console.log(error))
    }, [])

    return (    
        <div>
           <ItemList products={products}></ItemList>
        </div>
    )
      
}

export default ItemListContainer