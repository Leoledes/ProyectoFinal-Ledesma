import { useEffect, useState } from "react"
import { getSingleProduct } from "../utils/getProducts"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState()

useEffect(()=>{
    getSingleProduct(productId).then((productFromPromise)=>{
        setProduct(productFromPromise)
    })
},[])

    return (
        <div>
            <ItemDetail product={product}></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer