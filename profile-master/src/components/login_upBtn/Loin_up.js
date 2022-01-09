import Cookies from "js-cookie";
import React,{useEffect,useState} from "react";
import {Link}from 'react-router-dom';

function BtnLog(){
//    const [user, setUser] = useState({});
   let info ;
   if(Cookies.get("user")){
        info =JSON.parse(Cookies.get("user"))
   }
//    console.log(info);
    const logout =()=>{
        // localStorage.clear();
        Cookies.remove("refreshToken")
        Cookies.remove("user")
    }
    return(

        info
        ?   <ul className="dntt col-8 nav" style={{marginLeft: "-30px"}}>
                <li >
                    <a href='/' className="btn btn-warning" onClick={logout}>Logout</a>
                </li>
                <li style={{backgroundColor:"none"}}>
                    <div style={{color:"#fff",marginTop:"5px"}}>({info.fullName})</div>
                </li>
            </ul>
        :   <ul className="dntt col-8 nav">
                <li >
                     <a href='/Login' className="btn btn-warning">Đăng nhập</a>
                </li>&nbsp;
                <li>
                     <a href='/Logup' className="btn btn-warning">Đăng kí</a>
                </li>
            </ul>

        // <ul className="dntt col-8 nav">
            
            // {/* {
            //     info
            //     ?<li >
            //         <Link to='/Login' className="btn btn-warning">Logout</Link>
            //     </li>
            //     :<li >
            //         <Link to='/Login' className="btn btn-warning">Đăng nhập</Link>
            //     </li>&nbsp;
            //     <li>
            //         <Link to='/Logup' className="btn btn-warning">Đăng kí</Link>
            //     </li>
            // } */}
            
        // </ul>
    )
}
export default BtnLog;