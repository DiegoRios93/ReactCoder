import './ItemList.css';
import Contador from "../components/Contador";

function ItemList ({paleta, precio, grosor}) {
	return <div className="listaItems">
		<p>Paleta: {paleta}</p>
		<p>Precio: {precio}</p>
		<p>Grosor: {grosor}</p>
		<Contador />
	    <button>Agregar al carrito</button>
	</div>
}

export default ItemList;