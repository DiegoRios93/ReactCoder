import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Contador from "../components/Contador";
import { useCart } from "../context/CartContext";
import { getFirestore } from "../firebase/firebase";


function ProductoDetalle() {

  const {productId} = useParams();
  const [product, setProduct] = useState();
  const [estaCargando, setEstaCargando] = useState(false);
  const { addItem } = useCart();
  const [conteo, setConteo] = useState(1);

  const handleClick = () => {
    addItem(product, conteo);
  };


  useEffect(() => {

    const db = getFirestore();
    const productsCollection = db.collection("palas");
    const selectedProduct = productsCollection.doc(productId);

    setEstaCargando(true);

    selectedProduct.get()
    .then((response) => {
      if (!response.exists) console.log("No existe");
      setProduct({...response.data(), id: response.id});
    })
    .finally(()=> setEstaCargando(false));

    //const URL = `http://localhost:3001/palas/${productId}`;
    //setEstaCargando(true)
    //fetch(URL)
    //.then((res) => res.json())
    //.then((data)=>setProduct(data))
    //.finally(()=> setEstaCargando(false));

  }, [productId]);

  if (estaCargando || !product) return <p>Cargando...</p>; 

    return (
    
      <div>
        <h1>Descripción de paleta numero: {productId}</h1>
        <h2>{product.paleta}</h2>
        <img src={require(`../components/asset/img/${product.img}`)} alt={product.name} />
        <p>Precio:{product.precio}</p>
        <p>Grosor:{product.grosor}</p>
        <p>Stock: {product.stock}</p>
        <Contador conteo={conteo} setConteo={setConteo} />
        <button onClick={handleClick}>Agregar al carrito</button>
      </div>
    
  );
  
}

export default ProductoDetalle;