import "./App.css";
import { Routes, Route,useNavigate } from "react-router-dom";
import CuaHangPage from "./components/Page/CuaHangPage";
import HoSoCuaHangPage from "./components/Page/HoSoCuaHangPage";
import MuaHangPage from "./components/Page/MuaHangPage";
import ProductsPage from "./components/Page/ProductsPage";
import Login from "./Login/Login";
import Logup from "./Logup/Logup";
import CartPage from "./components/Page/CartPage";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie"

function App() {
  const refreshToken = Cookies.get("refreshToken");
  const [user,setUser] = useState()
  useEffect(async () => {
    
    if (refreshToken) {
      try {
        const res = await axios.get("http://localhost:5000/api/profile", {
        headers: { Authorization: `Bearer ${refreshToken}` },
      });
      if(res.status ===200){
        const user = res.data.user
        Cookies.set("user",JSON.stringify(user))
      }
      } catch (error) {
        Cookies.remove('user')
      }
    }
  }, [refreshToken]);
  return (
    <div className="App container-fluid">
      <Routes>
        <Route exact path="/" element={<CuaHangPage user={user}  />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/HoSoCuaHang" element={<HoSoCuaHangPage />} />
        <Route path="/products/muahang" element={<MuaHangPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logup" element={<Logup />} />
        {/* <Route path="/carts" element={<CartPage />} /> */}
        <Route path="/products/muahang/cart" element={<CartPage/>}/>  
      </Routes>
    </div>
  );
}

export default App;
