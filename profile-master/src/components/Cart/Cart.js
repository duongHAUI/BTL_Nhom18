import Cookies from "js-cookie";
import { useState, useEffect } from "react";
function Cart() {
  // const [carts,setCarts]=useState(()=>);

  // // useEffect(()=>{
  // //     setCarts(JSON.parse(localStorage.getItem('carts')))
  // // },[carts])
  // // console.log("carts carts",carts);
  // const carts=JSON.parse(localStorage.getItem('carts'));
  const carts = Cookies.get("carts") ? JSON.parse(Cookies.get("carts")) : [];
  console.log("carts cart", carts);
//   const SumCarts = () => {
//     if (!carts) {
//       return 0;
//     } else {
//       let sum = 0;
//       for (var i = 0; i < carts.length; i++) {
//         sum += carts.price;
//       }
//       return sum;
//     }
//   };
  return (
    <div className="container">
      <div className="alert alert-info" role="alert">
        <h1 className="text-center">Giỏ Hàng</h1>
      </div>
      <table className="table table-bordered ">
        <thead>
          <tr>
            <td>STT</td>
            <td>Tên Sản phẩm</td>
            <td>Giá tiền</td>
            <td>Số lượng</td>
            <td>Tool</td>
          </tr>
        </thead>
        <tbody>
          {carts ? (
            carts.map((cart, index) => {
              return (
                <tr key={cart.id}>
                  <td>{index + 1}</td>
                  <td>{cart.title}</td>
                  <td>{cart.price}</td>
                  <td>{cart.qty}</td>
                  <td>
                    <button className="btn btn-danger">Xoa</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <h1 className="text-center">Không có sản phẩm nào trong giỏ!</h1>
          )}
          <tr>
            <td colSpan={4}>
              <div className="mb-3 row">
                <label className="col-3 col-form-label">Họ và tên(*)</label>
                <div className="col-6">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="VD:Lê Văn Kiên"
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-3 col-form-label">Số điện thoại(*)</label>
                <div className="col-6">
                  <input
                    className="form-control"
                    placeholder="VD:0386785259"
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-3 col-form-label">
                  Địa chỉ giao hàng(*)
                </label>
                <div className="col-6">
                  <input
                    className="form-control"
                    placeholder="VD:Hà Lai-Hà Trung-Thanh Hóa"
                    required
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              Tổng tiền:{" "}
              <b>
                {carts.reduce((total, value) => {
                  return total + value.price*value.qty;
                }, 0)}
              </b>
            </td>
            <td>
              <a href="/products" className="btn btn-success">
                {" "}
                Thanh Toán
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
