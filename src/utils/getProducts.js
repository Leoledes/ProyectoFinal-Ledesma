import pastaDentalColgate from "../assets/pastaDentalColgate.png";
import shampooElvive from "../assets/shampooElvive.png";
import toallasHumedasHuggies from "../assets/toallasHumedasHuggies.png";
import serumHidratanteIsdin from "../assets/serumHidratanteIsdin.png";
import protectoSolarIsdin from "../assets/protectorSolarIsdin.png";
import serumAntiedadLaroche from "../assets/serumAntiedadLaroche.png";
import ibupiracIbuprofeno from "../assets/ibupiracIbuprofeno.png";
import tafirolForte from "../assets/tafirolForte.png";
import coltixHidraLagrimas from "../assets/coltixHidraLagrimas.png";
import melatolDiaRelax from "../assets/melatolDiaRelax.png";

const productos = [
    {id: 1, 
        title:"Pasta Dental Colgate Luminous White Instant x 70 g", 
        price:"7745", 
        imgUrl: pastaDentalColgate, 
        description: "Pasta Dental para dientes blancos al instante", 
        category: "cuidado-personal" },
    {id: 2, 
        title:"Shampoo Elvive Reparación Total Extreme x 400 ml", 
        price:"5193", 
        imgUrl: shampooElvive, 
        description: "Repara hasta la última capa: El LAK 1000 penetra hasta 10 capas del cabello para reconstruir las zonas dañadas de la estructura interna del cabello.", 
        category: "cuidado-personal"},
    {id: 3, 
        title:"Toallas Húmedas Huggies Cuidado y Nutrición Oleo Calcáreo x 48 u", 
        price:"5489", 
        imgUrl: toallasHumedasHuggies, 
        description: "Brindan un cuidado especial para la piel del recién nacido: nutren la piel manteniendo su barrera natural contra resequedad e irritaciones.", 
        category: "cuidado-personal"},
    {id: 4, 
        title:"Sérum Hidratante Isdin Hyaluronic Concentrate x 30 ml", 
        price:"102399", 
        imgUrl: serumHidratanteIsdin, 
        description: "Sérum facial ultrahidratante. Su fórmula con ácido hialurónico puro de bajo y medio peso molecular y textura aqua-gel proporciona una hidratación superficial y profunda a todas las capas de la piel.", 
        category: "dermocosmetica"},
    {id: 5, 
        title:"Protector Solar Facial Isdin Fotoprotector Fusion Water Magic SFP 50 x 50 ml", 
        price:"55630", 
        imgUrl: protectoSolarIsdin, 
        description: "Fotoprotector solar facial SPF50 de 50ml. SPF 50 UVB y UVA. No irrita los ojos. Con extracto antioxidante de algas mediterraneas", 
        category: "dermocosmetica"},
    {id: 6, 
        title:"Sérum Antiedad La Roche Posay Hyalu B5 Pieles Sensibles X 30 ml", 
        price:"104727", 
        imgUrl: serumAntiedadLaroche, 
        description: "Es el primer tratamiento antiarrugas con máxima tolerancia en pieles sensibles, y máxima eficacia antiedad.", 
        category: "dermocosmetica"},
    {id: 7, 
        title:"Ibupirac Ibuprofeno 400 mg x 12 Cáps", 
        price:"2721", 
        imgUrl: ibupiracIbuprofeno,  
        description: "IBUPIRAC está indicado para el alivio sintomático de: dolores musculares; dolores de espalda; fiebre; dolores de cabeza; dolor asociado a los estados gripales; dolores menstruales; dolores de dientes; dolores producidos por artritis.", 
        category: "farmacia"},
    {id: 8, 
        title:"Tafirol forte Paracetamol", 
        price:"6536", 
        imgUrl: tafirolForte, 
        description: "TAFIROL FORTE está indicado para el alivio sintomático de dolores (de cabeza, menstruales, musculares) leves a moderados, alivio de estados gripales y/o resfríos y reducir la fiebre.", 
        category: "farmacia"},
    {id: 9, 
        title:"Coltix Hidra Lagrimas x 12 ml", 
        price:"7209", 
        imgUrl: coltixHidraLagrimas, 
        description: "Humectante y lubricante ocular. Brinda alivio al ardor y la irritación provocados por la sequedad ocular. Protege, hidrata y lubrica.", 
        category: "farmacia"},
    {id: 10, 
        title:"Melatol Dia Relax x 30 Comprimidos", 
        price:"8842", 
        imgUrl: melatolDiaRelax, 
        description: "Medicamento herbario indicado para el alivio de los síntomas de ansiedad, nerviosismo, hiperexcitabilidad o irritabilidad, especialmente cuando éstas dan lugar a alteraciones del sueño, favoreciendo el reposo nocturno.", 
        category: "farmacia"}
]

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (categoryId === undefined) resolve(productos)
            else resolve(productos.filter((producto)=> producto.category === categoryId))}, 1500)
    })
}

export const getSingleProduct = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(productos.find((product) => product.id === Number(itemId))), 1500)
    })
}