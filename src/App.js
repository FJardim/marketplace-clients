import { Route, Routes } from "react-router-dom";
import AppLayout from './components/Generico/AppLayout';
import Home from './pages/Home';
import Login from "./pages/UserLogin/Login";
import Register from "./pages/UserLogin/Register";
import Products from "./pages/Products";
import ProductDescrip from "./pages/ProductDescrip";

const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<ProductDescrip />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </AppLayout>
  );
};

export default App;
