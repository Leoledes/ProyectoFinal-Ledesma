const productos = [
    {id: 1, title:"Pasta dental Colgate", price:"7745", description: "descripcion de producto", category: "cuidado-personal" },
    {id: 2, title:"Shampoo Elvive", price:"5193", description: "descripcion de producto", category: "cuidado-personal"},
    {id: 3, title:"Toallas humedas Huggies", price:"5489", description: "descripcion de producto", category: "cuidado-personal"},
    {id: 4, title:"Serum hidratante Isdin", price:"102399", description: "descripcion de producto", category: "dermocosmetica"},
    {id: 5, title:"Protector solar Isdin", price:"55630", description: "descripcion de producto", category: "dermocosmetica"},
    {id: 6, title:"Serum antiedad LaRoche", price:"104727", description: "descripcion de producto", category: "dermocosmetica"},
    {id: 7, title:"Ibupirac Ibuprofeno", price:"2721", description: "descripcion de producto", category: "farmacia"},
    {id: 8, title:"Tafirol forte Paracetamol", price:"6536", description: "descripcion de producto", category: "farmacia"},
    {id: 9, title:"Coltix Hidra lagrimas", price:"7209", description: "descripcion de producto", category: "farmacia"},
    {id: 10, title:"Melatol Día Relax", price:"8842", description: "descripcion de producto", catergoy: "farmacia"}
]

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (categoryId === undefined) resolve(productos)
            else resolve(productos.filter((producto)=> producto.category === categoryId))}, 1000)
    })
}

export const getSingleProduct = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(productos.find((product) => product.id === Number(itemId))), 500)
    })
}