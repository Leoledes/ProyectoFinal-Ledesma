import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

function ItemListContainer(){
    const [products, setProducts] = useState ([])
    const { categoryId } = useParams ()
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        setLoading(true)
        const db = getFirestore()
        const collectionRef = collection(db, "products")
        const queryCollection = categoryId ? query(collectionRef, where("category", "==", categoryId)) : collectionRef

        getDocs(queryCollection).then((response)=> {
            const responseMapped = response.docs.map((doc)=> ({...doc.data(), id: doc.id}))
            setProducts(responseMapped)
        }).catch (()=> {
            console.log("Error en la carga de productos")
        })
        .finally (()=> {
            setLoading(false)
        })
    }, [categoryId])

    if (loading) return <span className={"loader"}></span>

    return (    
        <div>
           <ItemList products={products}></ItemList>
        </div>
    )
      
}

export default ItemListContainer