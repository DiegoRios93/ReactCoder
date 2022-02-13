import { useState, useEffect } from "react";
import { getFirestore } from "../firebase/firebase";
import { useParams } from "react-router-dom";


function ConfirmacionCompraPage() {

  const {orderId} = useParams();
  const [order, setOrder] = useState({});


  useEffect(() => {
    const db = getFirestore();
    db.collection("ordenes")
    .doc(orderId)
    .get()
    .then((res) => setOrder({id: res.id, ...res.data()}));
  }, [orderId]);



  return (
    <div>
      <h1>Gracias por tu compra  </h1>
      <h2>Detalle de su compra: </h2>
      <p></p>
    </div>
  );
}

export default ConfirmacionCompraPage ;