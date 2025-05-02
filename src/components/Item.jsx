const Item =(props)=>{

    return (
        <div>
            <h2>{props.product.title}</h2>
            <h3>{props.prodcut.price}</h3>
        </div>
    )
}

export default Item