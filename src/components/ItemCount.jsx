import { useContext, useState } from "react";
import { cartContext } from "./CartContext";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function ItemCount({ product }) {
    const {onAdd} = useContext(cartContext)
    const [contador, setContador] = useState(0)

    function sumar() {
        setContador(contador + 1)
    }
    function restar() {
        setContador(contador - 1)
    }

    return (
        <div>
        <div className={"contador"}>
        <button onClick={restar}>-</button>
        <h2>{contador}</h2>
        <button onClick={sumar}>+</button>
        </div>
        <button onClick={() => {onAdd(product, contador)
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Producto agregado al carrito",
                showConfirmButton: false,
                timer: 1500
            });
        }}> Agregar al carrito</button>
        </div>
    )
}

export default ItemCount