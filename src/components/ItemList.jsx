import Item from "./Item"

const ItemList = (props) => {
    return ( 
        <div className={"itemlist"}>
            {props.products.map((product) => (
                <Item product={product} key={product.id}></Item>
            ))}
        </div>
    )
}

export default ItemList