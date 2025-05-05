import ItemCount from "./ItemCount"

const ItemDetail = (props) => {
    return (
        <div className={"itemdetail"}>
            <h3>{props.product?.title}</h3>
            <img src={props.product?.imgUrl}></img>
            <h4>{props.product?.description}</h4>
            <h3>Precio: ${props.product?.price}</h3>
            <ItemCount></ItemCount>
        </div>
    )
}

export default ItemDetail