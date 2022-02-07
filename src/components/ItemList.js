
import './ItemList.css';

import { useNavigate } from "react-router-dom";



function ItemList ({product}) {

	const navigate = useNavigate();


	return <div className="listaItems">
			<p>Paleta: {product.paleta}</p>
			<p>Precio: {product.precio}</p>
			<p>Grosor: {product.grosor}</p>
			<img src={require(`./asset/img/${product.img}`)} alt={product.name} />
		    <button onClick={()=> navigate(`${product.id}`)}>Ver más...</button>
		</div>
}

export default ItemList;