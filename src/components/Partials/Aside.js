import React from 'react'
import Link from '../Link'

class Aside extends React.Component {
  render() {
    return (
      <div id="colAside">
        <div className="row">
          <div className="col-md-12 col-xs-6">
          </div>
          <div className="col-md-12 col-xs-6">
            <div className="adv">
              <Link to={'/'}>
                <img src="/assets/images/hotline.jpg" alt="Hotline" /></Link>
            </div>
            {/*<div className="adv">*/}
              {/*<Link to={'/'}>*/}
                {/*<img src="/assets/images/mon-ngon-tu-com.jpg" alt="cac mon ngon tu com" /></Link>*/}
            {/*</div>*/}
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-xs-6">
          </div>
          <div className="col-md-12 col-xs-6">
            <div className="wrap-video">
              <a href="https://www.youtube.com/watch?v=L74dhO4i-0w" target="_blank" className="videob">
                <img src="/assets/images/video-com.jpg"
                     alt="video-com.jpg"/>
                <span className="ico-play">
                    </span></a>
              <div className="video-content">
                <h3 className="video-name">
                  <Link to="/">
                    Rộn ràng ngày hội văn hóa Cốm Mễ Trì</Link></h3>
              </div>
            </div>
            <ul className="list-video">
              <li><Link to="/bai-viet/cach-lam-che-com-thom-mat" className="video-box"><span className="video-img">
                        <img src="/image/R8cvtxxu3g-che-com-03.jpg" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_lstVideo_ctrl0_lstListVideo_ctrl0_Img3" alt="R8cvtxxu3g-che-com-03.jpg" />
                      </span><span className="video-content"><span className="video-name">
                          Cách bảo quản và sử dụng Cốm Mễ Trì </span> </span></Link>
              </li>
              <li><Link to="/bai-viet/com-me-tri-thom-ngon-duoc-lam-cong-phu-the-nao" className="video-box"><span className="video-img">
                        <img src="/image/5n9GkKlQVI-01dc4a05-cc41-48f9-8ee7-b10058293fef.jpg" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_lstVideo_ctrl0_lstListVideo_ctrl1_Img3" alt="Cốm Mễ Trì thơm ngon được làm công phu thế nào.jpg" />

                      </span><span className="video-content"><span className="video-name">
                          Cốm Mễ Trì thơm ngon được làm công phu thế nào?</span> </span></Link>
              </li>
            </ul>
          </div>
        </div>


      </div>
    )
  }
}

export {Aside as default}
