const Item =(props)=>{

    return (
        <div className={"card"}>
            <h2>{props.product.title}</h2>
            <img>{props.product.img}</img>
            <h3>${props.product.price}</h3>
            <p>{props.product.description}</p>
        </div>
    )
}

export default Item