const Item =(props)=>{

    return (
        <div className={"card"}>
            <h2>{props.product.title}</h2>
            <img>{props.product.img}</img>
            <h3>${props.product.price}</h3>
            <link>Ir a descripción del producto</link>
        </div>
    )
}

export default Item