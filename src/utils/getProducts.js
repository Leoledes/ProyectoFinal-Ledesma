const products = [
    {title:"Pasta dental Colgate", price:"7745", id:1},
    {title:"Shampoo Elvive", price:"5193", id:2},
    {title:"Toallas humedas Huggies", price:"5489", id:3},
    {title:"Serum hidratante Isdin", price:"102399", id:4},
    {title:"Protector Solar Isdin", price:"55630", id:5},
    {title:"Serum antiedad LaRoche", price:"104727", id:6},
    {title:"Ibupirac Ibuprofeno", price:"2721", id:7},
    {title:"Tafirol forte Paracetamol", price:"6536", id:8},
    {title:"Coltix Hidra lagrimas", price:"7209", id:9},
    {title:"Melatol Día Relax", price:"8842", id:10}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 2000)
    })
}