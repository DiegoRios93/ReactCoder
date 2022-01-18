import React from "react";
import './Contador.css';

export default function Contador () {
	const [conteo, setConteo] = React.useState(1);

	const sumar = () => {
		setConteo(conteo+1);
	}

	const restar = () => {
		if(conteo > 1){
			setConteo(conteo-1);
		}else{
			alert("No se pueden agregar menos productos de 1 al carrito")
		}
	}

	return (
		<div className="divContador">
			<button onClick={sumar} className="botonContador">+</button>
			<p>{conteo}</p>
			<button onClick={restar} className="botonContador">-</button>
		</div>
	);
};




