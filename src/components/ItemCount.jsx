import { useContext, useState } from "react";
import { cartContext } from "./CartContext";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function ItemCount({ product }) {
    const {onAdd} = useContext(cartContext)
    const [contador, setContador] = useState(0)

    function sumar() {
        if (contador < product.stock) setContador(contador + 1)
        else Swal.fire({
            title: "Atención",
            text: `Superas el stock disponible máximo: ${product.stock}`,
            icon: "warning"
        },)
    }

    function restar() {
        if (contador >0) setContador(contador - 1)
    }

    return (
        <div>
        <div className={"contador"}>
        <button onClick={restar}>-</button>
        <h2>{contador}</h2>
        <button onClick={sumar}>+</button>
        </div>
        <button onClick={() => {if (contador > 0) {
            onAdd(product, contador)
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Producto agregado al carrito",
                showConfirmButton: false,
                timer: 1500
                })
            } else {
                Swal.fire({
                title: 'Cantidad inválida',
                text: 'Debes agregar al menos 1 unidad.',
                icon: 'error',
                confirmButtonText: 'OK'
                })
            }}
        }> Agregar al carrito</button>
        </div>
    )

}

export default ItemCount