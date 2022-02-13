import * as React from "react";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { getFirestore } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";


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
  .catch((err) => console.log("Error", err));

};

const { cart, removeItem, clearAll } = useCart();

  return (
    <div>
      <h1>Carrito</h1>
      {cart.map((purchase)=> {
        return <div key={purchase.item.id}>
        <p>{purchase.item.paleta}</p>
        <p>{purchase.cantidad}</p>
        <p>Precio total: ${purchase.item.precio * purchase.cantidad}</p>
        <br />
        <button onClick={()=>removeItem(purchase.item.id)}>Borrar Item</button>
        </div>
      })}
      <button onClick={clearAll}>Borrar todos los productos</button>
      <h2>Introduzaca sus datos para finalizar la compra:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="phone">Celular de contacto</label>
        <input type="number" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="submit" value="Confirmar compra" />
      </form>
    </div>
  );
}

export default CarritoPage ;