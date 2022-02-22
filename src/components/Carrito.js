import './Carrito.css';
import carrito from './asset/img/carrito.png';
import { useCart } from "../context/CartContext";



function Carrito () {

	const { cartQuantity } = useCart();
	return <div className="editarCarrito">
		<img className="carritoFoto" src={carrito} alt="carrito img"/><p className="carritoCantidad">{ cartQuantity }</p>
	</div>
		
}

export default Carrito;