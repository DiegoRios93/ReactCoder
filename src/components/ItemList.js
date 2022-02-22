
import './ItemList.css';

import { useNavigate } from "react-router-dom";



function ItemList ({product}) {

	const navigate = useNavigate();


	return (
			<div className="listaItems">
			<img className="paletasImg" src={require(`./asset/img/${product.img}`)} alt={product.name} />
			<div className="detallePaleta">
				<p>Paleta: {product.paleta}</p>
				<p>Precio: {product.precio}</p>
				<p>Grosor: {product.grosor}</p>
			    <button onClick={()=> navigate(`${product.id}`)}>Ver más...</button>
			</div>
			</div>
	)
};

export default ItemList;