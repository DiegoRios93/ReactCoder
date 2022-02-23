import { useState, useEffect } from "react";
import { getFirestore } from "../firebase/firebase";
import { useParams } from "react-router-dom";
import '../App.css';


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
    <div className="minAlto">
      <div className="centrar confirmaCompra">
        <h1 className="fontUno">Gracias por tu compra {order?.buyer?.name} </h1>
        <h2 className="fontDos">En breve nos contactaremos al número {order?.buyer?.phone}, para coordinar entrega.</h2>
        <h2 className="fontDos">Detalle de su compra: </h2>
        {order.items.map((item) => {
        return <div key={`a${item.id}`}>
        <p className="fontTres">{item.item.paleta}</p>
        <p className="fontTres">{item.cantidad} x {item.item.precio}</p>
        <p className="fontTres">${item.cantidad * item.item.precio}</p>
        </div>
        })}
        <h3>Precio final ${order.total}</h3>
      </div>
    </div>
  );
};


export default ConfirmacionCompraPage ;