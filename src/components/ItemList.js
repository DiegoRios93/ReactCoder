import './ItemList.css';
import Contador from "../components/Contador";

function ItemList ({product}) {
	return <div className="listaItems">
	<h2>Detalle del producto</h2>
		<p>Paleta: {product.paleta}</p>
		<p>Precio: {product.precio}</p>
		<p>Grosor: {product.grosor}</p>
		<p>Descripción : {product.descripcion}</p>
		<p>Material : {product.material}</p>
		<Contador />
	    <button>Agregar al carrito</button>
	</div>
}

export default ItemList;