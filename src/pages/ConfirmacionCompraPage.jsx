import { useState, useEffect } from "react";
import { getFirestore } from "../firebase/firebase";
import { useParams } from "react-router-dom";


function ConfirmacionCompraPage() {

  const {orderId} = useParams();
  const [order, setOrder] = useState({ items: [{ item: { paleta: '' }}]});

  useEffect(() => {
    const db = getFirestore();
    db.collection("ordenes")
    .doc(orderId)
    .get()
    .then((res) => setOrder({ id: res.id, ...res.data() }));
  }, [orderId]);



  return (
    <div>
      <h1>Gracias por tu compra {order?.buyer?.name} </h1>
      <h2>En breve nos contactaremos al número {order?.buyer?.phone}, para coordinar entrega.</h2>
      <h2>Detalle de su compra: </h2>
      {order.items.map((item) => {
      return <div key={`a${item.id}`}>
      <p>{item.item.paleta}</p>
      <p>{item.cantidad} x {item.item.precio}</p>
      <p>${item.cantidad * item.item.precio}</p>
      </div>
      })}
      <h3>Precio final ${order.total}</h3>
    </div>
  );
};


export default ConfirmacionCompraPage ;