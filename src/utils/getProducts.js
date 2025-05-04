const products = [
    {title:"Pasta dental Colgate", price:"7745", description: "descripcion de producto", id:1},
    {title:"Shampoo Elvive", price:"5193", description: "descripcion de producto", id:2},
    {title:"Toallas humedas Huggies", price:"5489", description: "descripcion de producto", id:3},
    {title:"Serum hidratante Isdin", price:"102399", description: "descripcion de producto", id:4},
    {title:"Protector solar Isdin", price:"55630", description: "descripcion de producto", id:5},
    {title:"Serum antiedad LaRoche", price:"104727", description: "descripcion de producto", id:6},
    {title:"Ibupirac Ibuprofeno", price:"2721", description: "descripcion de producto", id:7},
    {title:"Tafirol forte Paracetamol", price:"6536", description: "descripcion de producto", id:8},
    {title:"Coltix Hidra lagrimas", price:"7209", description: "descripcion de producto", id:9},
    {title:"Melatol Día Relax", price:"8842", description: "descripcion de producto", id:10}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 2000)
    })
}