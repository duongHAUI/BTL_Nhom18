function ThongTin() {
  return (
    <div className="infor row">
      <div className="col">
        <h4 style={{marginLeft : "50px"}} >Nhom8</h4>
        <ul className="nav infor-li">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <i style={{ color: "yellow" }} className="fas fa-star"></i>
              <i style={{ color: "yellow" }} className="fas fa-star"></i>
              <i style={{ color: "yellow" }} className="fas fa-star"></i>
              <i style={{ color: "yellow" }} className="fas fa-star"></i>
              <i style={{ color: "yellow" }} className="fas fa-star"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Ngừời theo dõi 89
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Phản hồi chat 100%
            </a>
          </li>
          <li className="nav-item">
            <button className="btn btn-primary"> Theo Dõi</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ThongTin;
