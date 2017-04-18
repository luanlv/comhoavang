import React from 'react'
import Link from '../Link'
class MenuMobile extends React.Component {
  render() {
    return (
      <div id="menumobile" className="mobile-panel mobilep-left" style={{transform: 'translate3d(-120%, 0px, 0px)'}}>
        <div className="close-menu">
          <a href="#menumobile" className="glyphicon glyphicon-remove-circle" />
        </div>
        <div className="menu-in">
          <div className="menu-mobile">
            <div className="logo">
              <Link to="/">
                <img src="/assets/images/logo-com.png" alt="logo com hoa vang" /></Link></div>
            <ul className="menu-nav">
              <li><Link to="/san-pham">Sản phẩm</Link>
                <ul>
                  <li><Link to="/san-pham/com-kho-hoa-vang">
                    Cốm khô hoa vàng</Link></li>
                  <li><Link to="/san-pham/cha-com">
                    Chả Cốm</Link></li>
                </ul>
              </li>
              <li><Link to="/mon-ngon">MÓN NGON</Link>
                <ul>
                  <li><Link to="/danh-muc/mon-ngon-tu-com">
                      <span className="icon-chevron-right iconl" />
                    Món ngon từ Cốm
                  </Link></li>
                  <li><Link to="/danh-muc/cach-lam-mon-ngon-tai-nha">
                      <span className="icon-chevron-right iconl" />
                    Cách làm món ngon tài nhà
                  </Link></li>
                </ul>
              </li>
              <li className="active"><Link to="/tin-tuc">TIN TỨC</Link>
                <ul>
                  <li><Link to="/danh-muc/su-kien">
                    <span className="icon-chevron-right iconl" />
                    Sự kiện
                  </Link></li>
                  <li><Link to="/danh-muc/tin-tuc-tong-hop">
                    <span className="icon-chevron-right iconl" />
                    Tin tức tổng hợp
                  </Link></li>
                </ul>
              </li>
              <li className="last"><Link to="/">Liên hệ đặt hàng</Link></li>
            </ul>
            <div className="mo-box">
              <div className="hotline">
                Tổng đài CSKH: <strong>097 331 8868</strong></div>
            </div>
            <div className="mo-box">
              <div className="share">
                Follow me on <a target="_blank" href="https://www.facebook.com/comhoavang">
                  <img src="/assets/images/fa-1.png" alt /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { MenuMobile as default }
