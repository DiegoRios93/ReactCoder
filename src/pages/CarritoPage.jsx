import * as React from "react";
import { useCart } from "../context/CartContext";


function CarritoPage() {

const { cart, removeItem, clearAll } = useCart();

  return (
    <div>
      <h1>Carrito</h1>
      {cart.map((purchase)=> {
        return <div key={purchase.item.id}>
        <p>{purchase.item.paleta}</p>
        <p>{purchase.cantidad}</p>
        <br />
        <button onClick={()=>removeItem(purchase.item.id)}>Borrar Item</button>
        </div>
      })}
      <button onClick={clearAll}>Borrar todos los productos</button>
    </div>
  );
}

export default CarritoPage ;