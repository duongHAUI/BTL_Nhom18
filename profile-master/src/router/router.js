import { Routes,Route } from "react-router-dom";
import CuaHangPage from "../components/Page/CuaHangPage";
import HoSoCuaHangPage from "../components/Page/HoSoCuaHangPage";
import MuaHangPage from "../components/Page/MuaHangPage";
import ProductsPage from "../components/Page/ProductsPage";
import Login from "../Login/Login";
import Logup from "../Logup/Logup";
import CartPage from "../components/Page/CartPage";

export let routes = (
        <Routes>
          <Route exact path="/" element={<CuaHangPage/>} />
          <Route path="/products" element={< ProductsPage/>}/>
          <Route path="/HoSoCuaHang" element={<HoSoCuaHangPage />}/>
          <Route path="/products/muahang" element={<MuaHangPage />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Logup" element={<Logup/>}/>
          {/* <Route path="/products/muahang/cart" element={<CartPage/>}/>   */}
        </Routes>
);