import logoSassenach from "../img/logoSassenach.png"
import CartWidget from "./CartWidget"

function Navbar (){

    return (
        <div className="navbar">
            <img src={logoSassenach} alt="logo Sassenach Farmacia" className={"logo"}></img>
            <p>Cuidado Personal</p>
            <p>Dermocosmética</p>
            <p>Farmacia</p>
            <CartWidget></CartWidget>
        </div>
    )
}

export default Navbar