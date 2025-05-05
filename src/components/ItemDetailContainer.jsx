import { useEffect, useState } from "react"
import { getSingleProduct } from "../utils/getProducts"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
useEffect(()=>{
    getSingleProduct(productId).then((productFromPromise)=>{
        setProduct(productFromPromise)
        setLoading(false)
    })
},[productId])

    if(loading) return 
        <div>
        <span class="loader"></span>
        </div>

    return (
        <div className={"itemcontainer"}>
            <ItemDetail product={product}></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer