import './ItemList.css';
import Contador from "../components/Contador";

function ItemList ({product}) {
	return <div className="listaItems">
		<p>Paleta: {product.paleta}</p>
		<p>Precio: {product.precio}</p>
		<p>Grosor: {product.grosor}</p>
		<Contador />
	    <button>Agregar al carrito</button>
	</div>
}

export default ItemList;