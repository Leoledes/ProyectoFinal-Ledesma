import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore"
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
    });

    const handleChange = (evt) => {
        setValues({...values, [evt.target.name]: evt.target.value});
    };

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
        });
            cleanCart()
            navigate("/")
        })
        .catch(()=>{
            console.log("Error al crear la orden")
        })        
    }

    return (
        <div>
            <RenderInput name="name" placeholder="Nombre Completo" onChange={handleChange} />
            <RenderInput name="email" placeholder="Correo Electrónico" onChange={handleChange} />
            <RenderInput name="phone" placeholder="Teléfono" onChange={handleChange} />
            <RenderInput name="address" placeholder="Dirección" onChange={handleChange} />

            <button 
                disabled={values.name === '' || values.email === '' || values.phone === '' || values.address === ''}
                onClick={handleCreateOrder}>Realizar pedido</button>
        </div>
    )
}

export default Checkout