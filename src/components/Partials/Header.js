import React from 'react'
import Link from '../Link'

class Header extends React.Component {

  render () {
    return (
      <div id="header">
        <div className="container">
          <div id="logo">
            <a href="/">
              <img src="/assets/images/logosh.png" alt="logo"/></a>
          </div>
          <div className="header-right">
            <div className="button-menu mobile-showhide">
              <a className="panel-left" href="#menumobile"><span className="icon-bar">bar</span>
                <span className="icon-bar">bar</span> <span className="icon-bar">bar</span> </a>
            </div>
            <a href="#searchbox" className="finda mobile-showhide">search</a>
            <ul id="menu" className="desktop-showhide sf-js-enabled" style={{touchAction: 'pan-y'}}>
              <li className="home">
                <Link to="/">Trang chủ</Link></li>
              <li>
                <Link to="/home2" className="sf-with-ul">Sản phẩm</Link>
                <ul style={{display: 'none'}}>
                  <li><a href="/nghien-cuu.aspx">Nghiên cứu phát triển</a></li>
                  <li><a href="/siro-ho-bezut-pci-2-pi-1.aspx">
                    Siro ho bezut</a>
                  </li>
                  <li><Link to="/home3">
                    Viên ngậm ho bezut không đường</Link>
                  </li>
                  <li><a href="/vien-ngam-ho-bezut-pci-2-pi-2.aspx">
                    Viên ngậm ho bezut</a>
                  </li>
                  <li><a href="/calcium-mumekids-10-pci-2-pi-8.aspx">
                    Calcium mumekids 10</a>
                  </li>
                  <li><a href="/hobezut-pci-2-pi-11.aspx">
                    HOBEZUT</a>
                  </li>
                </ul>
              </li>
              <li><Link to="/home3">Điều trị ho</Link></li>
              <li><Link to="/bai-viet/aaa">Sức khoẻ tổng hợp</Link></li>
              <li><a href="/tu-van.aspx">Tư vấn chuyên gia</a></li>
              <li><a href="/tin-tuc.aspx">Tin tức</a></li>
              <li><a href="/he-thong-phan-phoi.aspx">Hệ thống phân phối</a></li>
              <li className="last"><a href="/lien-he.aspx">Liên hệ</a></li>
            </ul>
            <div className="header-bottom">
              <div id="searchbox" className="search-form">
                <input type="submit" name="ctl00$ctl00$ctl00$btnSearch" value="" id="ctl00_ctl00_ctl00_btnSearch"
                       className="search-btn"/>
                <div className="search-input">
                  <input name="ctl00$ctl00$ctl00$txtSearch" type="text" id="ctl00_ctl00_ctl00_txtSearch"
                         className="search-text"/>
                  <input type="hidden" name="ctl00$ctl00$ctl00$txtSearch_TextBoxWatermarkExtender_ClientState"
                         id="ctl00_ctl00_ctl00_txtSearch_TextBoxWatermarkExtender_ClientState"/>
                </div>
              </div>
              <div className="share desktop-showhide">
                Follow me on <a href="https://www.facebook.com/bacsibezut">
                <img src="/assets/images/fa-1.png" alt=""/></a>
              </div>
              <div className="hotline desktop-showhide">
                Tổng đài CSKH: <strong>091 926 3399</strong>
              </div>
              <div className="clr">
              </div>
            </div>
            <div className="clr">
            </div>
          </div>
        </div>
        <div className="header-bgr desktop-showhide">
        </div>
        <div className="header-bgl desktop-showhide">
        </div>
      </div>
    )
  }
}

export {Header as default}
