import ItemList from "../components/ItemList";
import { useEffect, useState } from "react";
import { getFirestore } from "../firebase/firebase";

function HomePage() {

  //const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [estaCargando, setEstaCargando] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    

    const db = getFirestore();
    const productsCollection = db.collection("palas");



    const getDataFromFirestore = async () => {
      try {
        const response = await productsCollection.get();
        if(response.empty) {
        console.log("Esta vacio");
        };
        setData(response.docs.map((doc) => ({...doc.data(), id: doc.id })));
      } catch (err) {
        setError(err);
      }finally {
        setEstaCargando(false);
      }
      
    };
    getDataFromFirestore();
   

    //setEstaCargando(true)
    //fetch(URL)
    //.then((response) => response.json())
    //.then((json)=> setProducts(json))
    //.catch((error) => console.log(error))
    //.finally(() => setEstaCargando(false));
  }, []);

  return (
    <div>
      {estaCargando ? ( 
        <p>Cargando...</p> 
        ) : (
        data.map((product) => <ItemList key={product.id} product={product} />)
        )}
    </div>
  );
}

export default HomePage;


/*
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

export default HomePage;*/