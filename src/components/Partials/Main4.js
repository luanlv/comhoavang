import React from 'react'

const Main = () => {
    return (
       <div id="mainContent">
        <div className="container">
          <div id="colContent">
            <div className="headno">
              <h1 className="title text-uppercase">
                <span id="ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_lblTitleNews">Tin giải trí</span></h1>
            </div>

            <div className="wrapper-text">
            <h2>HLV Hữu Thắng quyết giành chiến thắng ngày ra quân ở vòng loại ASIAN Cup 2019</h2>
            </div>
          </div>
          <div id="colAside">
            <div className="row">
              <div className="col-md-12 col-xs-6">
              </div>
              <div className="col-md-12 col-xs-6">
                <div className="wrap-video">
                  <a href="/quang-cao-vien-ngam-ho-bezut-vd-5.aspx" className="videob">
                    <img src="/assets/images/quang-cao-vien-ngam-ho-bezut-5.jpg" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_lstVideo_ctrl0_Img2" alt="quang-cao-vien-ngam-ho-bezut-5.jpg" />
                    <span className="ico-play">
                    </span></a>
                  <div className="video-content">
                    <h3 className="video-name">
                      <a href="/quang-cao-vien-ngam-ho-bezut-vd-5.aspx">
                        Quảng cáo Viên ngậm ho Bezut</a></h3>
                  </div>
                </div>
                <ul className="list-video">
                  <li><a href="/quang-cao-vien-ngam-ho-bezut-vd-5.aspx" className="video-box"><span className="video-img">
                        <img src="/assets/images/quang-cao-vien-ngam-ho-bezut-5.jpg" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_lstVideo_ctrl0_lstListVideo_ctrl0_Img3" alt="quang-cao-vien-ngam-ho-bezut-5.jpg" />
                      </span><span className="video-content"><span className="video-name">
                          Quảng cáo Viên ngậm ho Bezut</span> </span></a>
                    <div className="whidden">
                      <div id="video-1" className="info-vido" data-video="https://www.youtube.com/watch?v=3s64nZhmK-g&feature=youtu.be">
                      </div>
                    </div>
                  </li>
                  <li><a href="/quang-cao-siro-ho-bezut-vd-4.aspx" className="video-box"><span className="video-img">
                        <img src="/assets/images/quang-cao-siro-ho-bezut-4.jpg" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_lstVideo_ctrl0_lstListVideo_ctrl1_Img3" alt="quang-cao-siro-ho-bezut-4.jpg" />
                      </span><span className="video-content"><span className="video-name">
                          Quảng cáo Siro ho Bezut</span> </span></a>
                    <div className="whidden">
                      <div id="video-1" className="info-vido" data-video="https://www.youtube.com/watch?v=S3KcpLej46I&feature=youtu.be">
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-xs-6">
              </div>
              <div className="col-md-12 col-xs-6">
                <div className="adv">
                  <a href="/he-thong-phan-phoi.aspx">
                    <img src="/assets/images/images-1.jpg" alt /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export { Main as default }
