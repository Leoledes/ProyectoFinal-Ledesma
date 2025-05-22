import { useContext, useState } from "react";
import { cartContext } from "./CartContext";

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
        <button onClick={() => {onAdd(product, contador)}}> Agregar al carrito</button>
        </div>
    )
}

export default ItemCount