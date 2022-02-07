import './Contador.css';


export default function Contador ({conteo, setConteo}) {
	
	

	const sumar = () => {
		setConteo((prev) => prev+1);
	}

	const restar = () => {
		if(conteo > 1){
			setConteo((prev) => prev-1);
		}else{
			alert("No se pueden agregar menos productos de 1 al carrito")
		};
	};

	return (
		<div className="divContador">
			<button onClick={sumar} className="botonContador">+</button>
			<p>{conteo}</p>
			<button onClick={restar} className="botonContador">-</button>
		</div>
	);
};




