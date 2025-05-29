import { Link } from "react-router-dom"
const Item =(props)=>{

    return (
        <div className={"card"}>
            <h3>{props.product.title}</h3>
            <img src={props.product.imgUrl}></img>
            <h3>Precio:${props.product.price}</h3>
            {props.product.stock > 0 && <Link to={`/item/${props.product.id}`}>Ir a descripción del producto</Link>} 
        </div>
    )
}

export default Item