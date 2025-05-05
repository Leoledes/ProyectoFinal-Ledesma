import { useState } from "react";

function ItemCount() {
    const [contador, setContador] = useState(0)

    function sumar() {
        setContador(contador + 1)
    }
    function restar() {
        setContador(contador - 1)
    }

    return (
        <div className={"contador"}>
        <button onClick={restar}>-</button>
        <h2>{contador}</h2>
        <button onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount