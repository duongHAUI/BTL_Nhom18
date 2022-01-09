import { dataList1,dataList2 } from "./DataFooter";
function FooterItem(){
    return(
        <div className="row">
                <div className="col-3">
                <div className='title-list'> Hỗ trợ khách hàng</div>
                <ul className='footer-list'>
                    {dataList1.map((data,index)=>{
                        return(
                        <li key={index}>
                            <a>{data.list}</a>
                        </li>
                        )
                    })}
                </ul>
                </div>
                <div className="col-3">
                <div className='title-list'> Giới thiệu về kienleshop</div>
                    <ul className='footer-list'>
                        {dataList2.map((data,index)=>{
                            return(
                            <li key={index}>
                                <a>{data.list}</a>
                            </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="col-3">
                <div className='title-list'> Phương thức thanh toán</div>
                    <ul className='footer-list'>
                        <li>
                            <a>
                                <i className="fab fa-cc-visa"></i>

                            </a>
                           <a>
                           <i className="fab fa-cc-stripe"></i>
                           </a>
                           <a>
                           <i className="fab fa-cc-amazon-pay"></i>
                           </a>
                        </li>
                        
                    </ul>
                </div>
                <div className="col-3">
                <div className='title-list'> Kết nối với chúng tôi</div>
                    <ul className='footer-list'>
                        <li>
                            <a>
                                <i className="fab fa-facebook"></i>

                            </a>
                           <a>
                           <i className="fab fa-youtube"></i>
                           </a>
                           <a>
                           <i className="fab fa-instagram"></i>
                           </a>
                        </li>
                        
                    </ul>
                </div>
                
        </div>
    )
}
export default FooterItem;