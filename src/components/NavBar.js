import './NavBar.css';
import Carrito from "../components/Carrito";
import { Link } from "react-router-dom";



function NavBar () {
	return <nav>
		<div>
			<h1>PadelShop!</h1>
		</div>
		<div className="lista">
			<ul>
				<li>
					<Link to="/">HOME</Link>
				</li>
				<li>
					<Link to="/masvendidos">MAS VENDIDOS</Link>
				</li>
				<li>
					<Link to="/contacto">CONTACTO</Link>
				</li>
				<li>
					<Link to="/carrito"><Carrito /></Link>
				</li>
			</ul>
		</div>
		
	</nav>
}

export default NavBar;