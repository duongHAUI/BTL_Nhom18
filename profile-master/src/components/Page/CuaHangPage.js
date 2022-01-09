import Layout from "../Layout/Layout";

import CuaHang from "../CuaHang/CuaHang";
function CuaHangPage(props){
    return (
        <Layout user={props.user}>
            <CuaHang />
        </Layout>
    )
}
export default CuaHangPage;