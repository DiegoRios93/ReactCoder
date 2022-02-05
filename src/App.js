import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MasVendidosPage from "./pages/MasVendidosPage";
import ContactoPage from "./pages/ContactoPage";
import CarritoPage from "./pages/CarritoPage";
import ProductoDetallePage from "./pages/ProductoDetallePage";

function App() {

  return (
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
  );
}

export default App;





