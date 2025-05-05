const ItemDetail = (props) => {
    return (
        <div className={"itemdetail"}>
            <p>{props.product?.title}</p>
            <p>{props.product?.description}</p>
            <p>${props.product?.price}</p>
        </div>
    )
}

export default ItemDetail