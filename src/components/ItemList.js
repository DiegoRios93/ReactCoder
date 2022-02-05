
import './ItemList.css';
import Contador from "../components/Contador";
import { useNavigate } from "react-router-dom";

function ItemList ({product}) {

	const navigate = useNavigate();

	return <div className="listaItems">
		<p>Paleta: {product.paleta}</p>
		<p>Precio: {product.precio}</p>
		<p>Grosor: {product.grosor}</p>
		<img src={product.img} alt={product.name} />
		<Contador />
	    <button>Agregar al carrito</button>
	    <button onClick={()=> navigate(`${product.id}`)}>Ver más...</button>

	</div>
}

export default ItemList;