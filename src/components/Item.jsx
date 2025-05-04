const Item =(props)=>{

    return (
        <div className={"card"}>
            <h2>{props.product.title}</h2>
            <h3>${props.product.price}</h3>
        </div>
    )
}

export default Item