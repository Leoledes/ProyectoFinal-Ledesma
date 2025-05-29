import { addDoc, collection, getFirestore, serverTimestamp, doc, updateDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { cartContext } from "./CartContext"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import RenderInput from "./RenderInput"


const Checkout = () => {
    const { getTotalPrice, cart, cleanCart } = useContext(cartContext)

    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })

    const handleChange = (evt) => {
        setValues({...values, [evt.target.name]: evt.target.value});
    }

    const navigate = useNavigate()
    const handleCreateOrder = () => {
        const MySwal = withReactContent(Swal)
        const db = getFirestore()
        const collectionRef = collection(db, "orders")

        const orderData = {
            buyer: {
                name: values.name,
                email: values.email,
                phone: values.phone,
                address: values.address,
            },
            total: getTotalPrice(),
            items: cart,
            date: serverTimestamp(),
        }

        addDoc(collectionRef, orderData)
            .then((response) => {
                MySwal.fire({
                title: `Tu orden fue creada correctamente con el id: ${response.id}`,
                icon: "success",
                draggable: true
            })
            cart.forEach((cartProduct)=>{
                const docRef = doc(db, "products", cartProduct.product.id)
                updateDoc(docRef, {stock: cartProduct.product.stock - cartProduct.quantity})
            })                        
        cleanCart()
        navigate("/")
        })
        .catch(()=>{
            console.log("Error al crear la orden")
        })        
    }

    return (
        <div className={"checkout-container"}>
            <RenderInput name="name" label="Nombre Completo:" value={values.name} onChange={handleChange} />
            <RenderInput name="email" label="Correo Electrónico:" value={values.email} onChange={handleChange} />
            <RenderInput name="phone" label="Teléfono:" value={values.phone} onChange={handleChange} />
            <RenderInput name="address" label="Dirección:" value={values.address} onChange={handleChange} />

            <button className="btn-primary" disabled={values.name === '' || values.email === '' || values.phone === '' || values.address === ''}
             onClick={handleCreateOrder}>Realizar pedido</button>
        </div>
    )
}

export default Checkout