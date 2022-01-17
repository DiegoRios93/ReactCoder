import './ItemList.css';

function ItemList ({paleta, precio, grosor}) {
	return <div className="listaItems">
		<p>Paleta: {paleta}</p>
		<p>Precio: {precio}</p>
		<p>Grosor: {grosor}</p>
	    <button>Agregar al carrito</button>
	</div>
}

export default ItemList;