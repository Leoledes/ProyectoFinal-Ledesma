import { useEffect, useState } from "react"
import { getProducts } from "../utils/getProducts"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

function ItemListContainer(props){
    const [products, setProducts] = useState ([])
    const { categoryId } = useParams ()
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        setLoading(true)
        getProducts(categoryId)
        .then((productsFromPromise) => {
            setProducts(productsFromPromise)
            setLoading(false)
        })
        .catch((error) => console.log(error))
    }, [categoryId])

    if (loading) return <span className={"loader"}></span>

    return (    
        <div>
           <ItemList products={products}></ItemList>
        </div>
    )
      
}

export default ItemListContainer