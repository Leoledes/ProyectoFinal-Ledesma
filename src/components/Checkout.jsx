import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore"
import { useContext, useState } from "react"
import { cartContext } from "./CartContext"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Checkout = () => {
    const { getTotalPrice, cart, cleanCart } = useContext(cartContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const navigate = useNavigate()
    const handleCreateOrder = () => {
        const MySwal = withReactContent(Swal)
        const db = getFirestore()
        const collectionRef = collection(db, "orders")

        const orderData = {
            buyer: {
                name,
                email,
                phone,
                address
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
    
    const handleChangeName = (evt) => {
        setName(evt.target.value)
    }
    const handleChangeEmail = (evt) => {
        setEmail(evt.target.value)
    }
    const handleChangePhone = (evt) => {
        setPhone(evt.target.value)
    }
    const handleChangeAddress = (evt) => {
        setAddress(evt.target.value)
    }

    return (
        <div>
            <input placeholder="Nombre" onChange={handleChangeName}></input>
            <input placeholder="Correo electronico" onChange={handleChangeEmail}></input>
            <input placeholder="Telefono" onChange={handleChangePhone}></input>
            <input placeholder="Direccion" onChange={handleChangeAddress}></input>

            <button 
                disabled={!(name !== '' && email !== '' && phone !== '' && address !== '')}
                onClick={handleCreateOrder}>Realizar pedido</button>
        </div>
    )
}

export default Checkout