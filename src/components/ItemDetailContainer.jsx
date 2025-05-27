import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    
useEffect(()=>{
    setLoading(true)
    const db = getFirestore()
    const documentRef = doc(db, "products", productId)

    getDoc(documentRef).then((response)=>{
        setProduct({...response.data(), id:response.id})
    }).catch (()=> {
        console.log("Error en la carga del producto")
    })
    .finally (()=> {
        setLoading(false)
    })
},[productId])

if (loading) return <span className={"loader"}></span>

return (
    <div className={"itemcontainer"}>
        <ItemDetail product={product}></ItemDetail>
    </div>
    )
}

export default ItemDetailContainer