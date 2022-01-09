import React, { useEffect } from "react";
import Menu from "./../Menu/Menu";
import ThongTin from "./../ThongTinShop/ThongTinShop";
import Contact from "./../Contact/contact";
import BtnLog from "../login_upBtn/Loin_up";
import Cookies from "js-cookie";
const Header = (props) => {
    const numberCart = Cookies.get("carts")?JSON.parse(Cookies.get("carts")).length:0
    // if(Cookies.get("carts")){
    //     numberCart = JSON.parse(Cookies.get("carts"))?JSON.parse(Cookies.get("carts")).length:0
    // }
  return (
    <div className="container-fluid">
      <Contact />
      <div className=" header">
        <div className="row">
          <div id="1" className="col-6">
            <ThongTin />
          </div>
          <div className="col-6 cart">
            <div className="row">
              <BtnLog />
              <a className="col-4" href="/products/muahang/cart">
                <span>{numberCart}</span>
                <a href="/products/muahang/cart">
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <Menu />
        </div>
      </div>
      <div className="content ">
        <br />
      </div>
    </div>
  );
};
export default Header;
