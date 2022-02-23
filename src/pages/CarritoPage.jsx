import * as React from "react";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { getFirestore } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import '../App.css';


function CarritoPage() {

let navigate = useNavigate();


const [name, setName] = useState("");
const [phone, setPhone] = useState("");

const getTotal = (cart) => {
  let total = 0;
  cart.forEach((element)=>{
    total += element.item.precio * element.cantidad;
  });
  return total;
}

const handleSubmit = (evt) => {

  

  evt.preventDefault();

  if(!name || !phone){
    console.log("Por favor llene los campos");
    return false;
  }

  const newOrder = { buyer: {
    name,
    phone,
  },
  items: cart,
  total: getTotal(cart),
  }
  console.log(newOrder);

  const db = getFirestore();
  db.collection("ordenes")
  .add(newOrder)
  .then((res)=> {
    console.log("compra realizada", res.id)
    navigate(`/confirmacion/${res.id}`);
  })
  .catch((err) => console.log("Error", err))
  .finally(clearAll());

};

const { cart, removeItem, clearAll } = useCart();

  return (
    <div className="carritoPagina">
      <h1 className="centrar">Carrito</h1>
      <div className="padreTarjetas">
          {cart.map((purchase)=> {
            return <div key={purchase.item.id} className="tarjetasCarrito">
            <p>{purchase.item.paleta}</p>
            <p>Cantidad: {purchase.cantidad}</p>
            <p>Precio total: ${purchase.item.precio * purchase.cantidad}</p>
            <br />
            <button onClick={()=>removeItem(purchase.item.id)}>Borrar Item</button>
            </div>
          })}
      </div>
      <div className="centrar">
      <button onClick={clearAll} className="letraChica">Borrar todos los productos</button>
      <h3>Precio final: ${getTotal(cart)}</h3>
      <h2>Introduzca sus datos para finalizar la compra</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre completo </label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <br />
        <label htmlFor="phone">Celular de contacto </label>
        <input type="number" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <br />
        <br />
        <input type="submit" value="Pagar y confirmar compra" className="botonPagar" />
      </form>
      </div>
    </div>
  );
}

export default CarritoPage ;