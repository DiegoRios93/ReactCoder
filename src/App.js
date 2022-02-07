import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MasVendidosPage from "./pages/MasVendidosPage";
import ContactoPage from "./pages/ContactoPage";
import CarritoPage from "./pages/CarritoPage";
import ProductoDetallePage from "./pages/ProductoDetallePage";
import { CartProvider } from "./context/CartContext";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/">
            <Route index element ={<HomePage />} />
            <Route path=":productId" element ={<ProductoDetallePage />} />
            <Route path="masvendidos" element ={<MasVendidosPage />} />
            <Route path="contacto" element ={<ContactoPage />} />
            <Route path="carrito" element ={<CarritoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;





