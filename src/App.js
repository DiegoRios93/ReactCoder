import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MasVendidosPage from "./pages/MasVendidosPage";
import ContactoPage from "./pages/ContactoPage";
import CarritoPage from "./pages/CarritoPage";
import ProductoDetallePage from "./pages/ProductoDetallePage";
import ConfirmacionCompraPage from "./pages/ConfirmacionCompraPage";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";


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
            <Route path="confirmacion/:orderId" element ={<ConfirmacionCompraPage />} />
          </Route>-
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;





