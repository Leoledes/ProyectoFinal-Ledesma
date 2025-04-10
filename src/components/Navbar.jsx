import logoSassenach from "../img/logoSassenach.png"
import CartWidget from "./CartWidget"

function Navbar (){

    return (
        <div>
            <img src={logoSassenach} alt="logo Sassenach Farmacia"></img>
            <p>Cuidado Personal</p>
            <p>Belleza</p>
            <p>Farmacia</p>
            <CartWidget></CartWidget>
        </div>
    )
}

export default Navbar