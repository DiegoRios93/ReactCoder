import './Carrito.css';
import carrito from './asset/img/carrito.png';
import { useCart } from "../context/CartContext";



function Carrito () {

	const { cantidadProductos } = useCart();
	return <div className="editarCarrito">
		<img src={carrito} alt="carrito img"/><p>({cantidadProductos})</p>
	</div>
		
}

export default Carrito;