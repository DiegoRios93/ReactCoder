import './NavBar.css';
import Carrito from "../components/Carrito";
import ItemList from "../components/ItemList";

function NavBar () {
	return <nav>
		<div>
			<h1>PadelShop!</h1>
		</div>
		<div className="lista">
			<ul>
				<li><a href="!#">PRODUCTOS</a></li>
				<li><a href="!#">MÁS VENDIDOS</a></li>
				<li><a href="!#">CONTACTO</a></li>
				<li><a href="!#"><Carrito /></a></li>
			</ul>
		</div>
		
	</nav>
}

export default NavBar;