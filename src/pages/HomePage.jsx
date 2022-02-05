
import ItemList from "../components/ItemList";
import { useEffect, useState } from "react";

function HomePage() {

  const [products, setProducts] = useState([]);

  const [estaCargando, setEstaCargando] = useState(false);

  useEffect(() => {
    const URL = "http://localhost:3001/palas"


    setEstaCargando(true)
    fetch(URL)
    .then((response) => response.json())
    .then((json)=> setProducts(json))
    .catch((error) => console.log(error))
    .finally(() => setEstaCargando(false));
  }, []);

  return (
    <div>
      {estaCargando ? ( 
        <p>Cargando...</p> 
        ) : (
        products.map((product) => <ItemList key={product.id} product={product} />)
        )}
    </div>
  );
}

export default HomePage;