import { useEffect, useState } from "react"
import { getProducts } from "../utils/getProducts"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

function ItemListContainer(props){
    
    const [products, setProducts] = useState ([])
    const { categoryId} = useParams ()

    useEffect(()=> {
        getProducts(categoryId)
        .then((productsFromPromise) => setProducts(productsFromPromise))
        .catch((error) => console.log(error))
    }, [categoryId])

    return (    
        <div>
           <ItemList products={products}></ItemList>
        </div>
    )
      
}

export default ItemListContainer