import { Link } from "react-router-dom"
const Item =(props)=>{

    return (
        <div className={"card"}>
            <h2>{props.product.title}</h2>
            <img src={props.product.imgUrl}></img>
            <h3>${props.product.price}</h3>
            <Link to={`/item/${props.product.id}`}>Ir a descripción del producto</Link>
        </div>
    )
}

export default Item