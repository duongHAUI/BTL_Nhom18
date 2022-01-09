import { useState ,useEffect, Component} from "react";
import Input from "../components/UI/Input/Input";
import axios from "../axios";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom"


axios.defaults.withCredentials = true;

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    try {
        const res = await axios.post("http://localhost:5000/api/login",{
                ...user
        },)
        const  {msg} = res.data;
        
        setMsg(msg)
        if(res.status === 200){
            const {user,token} = res.data;
            Cookies.set("refreshToken",token,{  expires : 1  })
            Cookies.set("user",JSON.stringify(user))
            navigate('/');
         }
    } catch (error) {
        console.log("lỗi login");
    }
  };
  return (
    <div className="container-fluid login-fluid">
      <form className="Login" onSubmit={handleSubmit}>
          <span style={{color : "red" , marginLeft : "35%"}}>{msg}</span>
        <div className="row">
          <h1 className="text-center">Đăng nhập</h1>
          <Input
            className="mb-3"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
          />
          <Input
            className="mb-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
          />
          <div className="text-center mb-3">
            <button type="submit" className="btn btn-success">
              Đăng nhập
            </button>
          </div>
          <a href="/Logup">Đăng ký</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
