const ItemDetail = (props) => {
    return (
        <div className={"itemdetail"}>
            <h2>{props.product?.title}</h2>
            <h4>{props.product?.description}</h4>
            <h3>${props.product?.price}</h3>
        </div>
    )
}

export default ItemDetail