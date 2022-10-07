import { Route, Routes } from "react-router-dom";
import AppLayout from './components/Generico/AppLayout';
import Home from './pages/Home';
import ProductDescrip from "./pages/ProductDescrip";
import Login from "./pages/UserLogin/Login";
import Register from "./pages/UserLogin/Register";

const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<ProductDescrip />} />
      </Routes>
    </AppLayout>
  );
}

export default App;


