import ItemList from "../components/ItemList";
import { useEffect, useState } from "react";
import { getFirestore } from "../firebase/firebase";
import '../App.css';

function HomePage() {

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
        setEstaCargando(true);
        setData(response.docs.map((doc) => ({...doc.data(), id: doc.id })));
      } catch (err) {
        setError(err);
      }finally {
        setEstaCargando(false);
      }
      
    };
    getDataFromFirestore();
   
  }, []);

  return (
    <div className="itemsLista">
      {estaCargando ? ( 
        <p>Cargando...</p> 
        ) : (
        data.map((product) => <ItemList key={product.id} product={product} />)
        )}
    </div>
  );
}

export default HomePage;

