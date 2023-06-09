import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header_admin from './components/Header_admin';
import NavBar_admin from './components/NavBar_admin';
import ProductRegister_admin from './components/ProductRegister_admin';
import Home_admin from './components/Home_admin';

function App() {
  return (
    <div>
      <Header_admin />
      <NavBar_admin />
      <Routes>
        <Route path="/" element={<Home_admin />} />
        <Route path="/pd_register" element={<ProductRegister_admin />} />
        <Route
          path="*"
          element={
            <h2 style={{ display: 'inline-block' }}>NOT FOUND 404err</h2>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
