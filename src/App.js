import { Route, Routes } from "react-router-dom";
import AppLayout from './components/Generico/AppLayout';
import Home from './pages/Home';
import Login from "./pages/UserLogin/Login";
import Register from "./pages/UserLogin/Register";

const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </AppLayout>
  );
}

export default App;


