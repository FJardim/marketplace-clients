import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/Generico/AppLayout";
import Home from "./pages/Home";
import Login from "./pages/UserLogin/Login";
import Register from "./pages/UserLogin/Register";
import Products from "./pages/Products";
import ProductDescrip from "./pages/ProductDescrip";
import CartDetallesProducts from "./pages/CartDetallesProducts";
import StoreBrand from "./pages/StoreBrand";
import ListTiendas from "./pages/ListTiendas";
import Nosotros from "./pages/Nosotros";
import Ayudas from "./pages/Ayudas";

const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<ProductDescrip />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cartdetailsproducts" element={<CartDetallesProducts />} />
        <Route path="/storebrand" element={<StoreBrand />} />
        <Route path="/listadetiendas" element={<ListTiendas />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/ayudas" element={<Ayudas />} />
      </Routes>
    </AppLayout>
  );
};

export default App;
