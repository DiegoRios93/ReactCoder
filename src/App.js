import './App.css';
import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";
import { useEffect, useState } from "react";
import { getProductos} from "./baseDatos";

function App() {

  const [products, setProducts] = useState([]);

  const [estaCargando, setEstaCargando] = useState(false);

  useEffect(() => {
    setEstaCargando(true)
    getProductos()
    .then((data) => setProducts(data))
    .catch((error) => console.log(error))
    .finally(() => setEstaCargando(false));
  }, []);

  return (
    <div>
      <NavBar />
      {estaCargando ? ( 
        <p>Cargando...</p> 
        ) : (
        products.map((product) => <ItemList key={product.id} product={product} />)
        )}
    </div>
  );
}

export default App;
