import ItemCount from "./ItemCount"

const ItemDetail = ({product}) => {
    return (
        <div className={"itemdetail"}>
            <h3>{product?.title}</h3>
            <img src={product?.imgUrl}></img>
            <h4>{product?.description}</h4>
            <h3>Precio: ${product?.price}</h3>
            {product.stock === 0 ? (<h5>No hay stock disponible</h5>):(
            <>
            <ItemCount product={product}></ItemCount>
            <h5>Stock disponible: {product.stock}</h5>
            </>)}
        </div>
    )
}

export default ItemDetail