import { Route, Routes } from "react-router-dom";
import AppLayout from './components/Generico/AppLayout';
import Home from './pages/Home';
const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppLayout>
  );
}

export default App;


