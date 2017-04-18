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
                <img src="/assets/images/free-ship.jpg" alt="free ship" /></Link>
            </div>
            <div className="adv">
              <Link to={'/'}>
                <img src="/assets/images/mon-ngon-tu-com.jpg" alt="cac mon ngon tu com" /></Link>
            </div>
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
              <li><Link to="/" className="video-box"><span className="video-img">
                        <img src="/assets/images/bao-quan-com.jpeg" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_lstVideo_ctrl0_lstListVideo_ctrl0_Img3" alt="quang-cao-vien-ngam-ho-bezut-5.jpg" />
                      </span><span className="video-content"><span className="video-name">
                          Cách bảo quản và sử dụng Cốm Mễ Trì </span> </span></Link>
              </li>
              <li><Link to="/" className="video-box"><span className="video-img">
                        <img src="/assets/images/phan-biet.jpg" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_lstVideo_ctrl0_lstListVideo_ctrl1_Img3" alt="quang-cao-siro-ho-bezut-4.jpg" />
                      </span><span className="video-content"><span className="video-name">
                          Cách phân biệt cốm sạch và cốm bẩn </span> </span></Link>
              </li>
            </ul>
          </div>
        </div>


      </div>
    )
  }
}

export {Aside as default}
