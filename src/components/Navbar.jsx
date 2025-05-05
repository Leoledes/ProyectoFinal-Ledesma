import { Link } from "react-router-dom"
import logoSassenach from "../img/logoSassenach.png"
import CartWidget from "./CartWidget"

function Navbar (){
    return (
        <div className="navbar">
            <Link to="/">
                <img src={logoSassenach} alt="logo Sassenach Farmacia" className="logo"></img>
            </Link>
            <Link to="/category/cuidado-personal">Cuidado Personal</Link>
            <Link to="/category/dermocosmetica">Dermocosmética</Link>
            <Link to="/category/farmacia">Farmacia</Link>
            <CartWidget></CartWidget>
        </div>
    )
}

export default Navbar