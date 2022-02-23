import './NavBar.css';
import Carrito from "../components/Carrito";
import { Link } from "react-router-dom";
import padel from './asset/img/padel.png';



function NavBar () {

	return <nav>
		<div>
			<h1 className="tituloShop">PadelShop!<img src={padel} alt="padel img" className="padelFoto"/></h1>
		</div>
		<div className="lista">
			<ul className="listaNav">
				<li>
					<Link to="/">HOME</Link>
				</li>
				<li>
					<Link to="/masvendidos">MAS VENDIDOS</Link>
				</li>
				<li>
					<Link to="/contacto">CONTACTO</Link>
				</li>
				<li className="imagenCarrito">
					<Link to="/carrito"><Carrito /></Link>
				</li>
			</ul>
		</div>
		
	</nav>
}

export default NavBar;