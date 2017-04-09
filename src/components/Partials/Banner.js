import React from 'react'


const style = {
  "width": "819px",
  "visibility": "hidden",
  "display": "none !important"
}

const Banner = () => {
    return (
        <div className="wrapper-banner">
          <div className="container">
            <div id="banner">
              <div className="doc-bg"><img src="/assets/images/do-bg.gif" alt="" /></div>
              <div className="doctor">
                <a href="https://www.facebook.com/bacsibezut"><img src="/assets/images/doctor-img.gif" alt="" /></a>
              </div>
              <div className="slider-wrapper">
                <div id="slider" className="nivoSlider">
                  <a href="http://cumative.vn/vi/nghe-va-suc-khoe/tim-hieu-ve-curcumin-nano-curcumin-phytosome-curcumin-novasol-curcumin-va-cach-lua-chon-dung.html" target="_blank" className="nivo-imageLink" style={{display: 'none'}}>
                     <img src="/res/advertisement/44.png" id="ctl00_ctl00_ctl00_cphBanner_cphBanner_cphBanner_lstBanner_ctrl0_Img3" alt="44.png" style={style} />
                  </a>
                  <a href="http://cumative.vn/vi/nghe-va-suc-khoe/nguyen-nhan-do-dau-dung-nghe-chua-dau-da-day-bao-nam-khong-khoi-.html" target="_blank" className="nivo-imageLink" style={{display: 'none'}}>
                    <img src="/res/advertisement/43.png" id="ctl00_ctl00_ctl00_cphBanner_cphBanner_cphBanner_lstBanner_ctrl1_Img3" alt="43.png" style={style} /></a>
                  <a href="/" target="_blank" className="nivo-imageLink" style={{display: 'none'}}>
                    <img src="/res/advertisement/41.png" id="ctl00_ctl00_ctl00_cphBanner_cphBanner_cphBanner_lstBanner_ctrl2_Img3" alt="41.png" style={style} /></a>
                  <a href="/" target="_blank" className="nivo-imageLink" style={{display: 'none'}}>
                    <img src="/res/advertisement/29.jpg" id="ctl00_ctl00_ctl00_cphBanner_cphBanner_cphBanner_lstBanner_ctrl3_Img3" alt="29.jpg" style={style} /></a>
                  <a href="/" target="_blank" className="nivo-imageLink" style={{display: 'block'}}>
                    <img src="/res/advertisement/35.jpg" id="ctl00_ctl00_ctl00_cphBanner_cphBanner_cphBanner_lstBanner_ctrl4_Img3" alt="35.jpg" style={style} /></a>
                  <a href="/" target="_blank" className="nivo-imageLink" style={{display: 'none'}}>
                    <img src="/res/advertisement/37.jpg" id="ctl00_ctl00_ctl00_cphBanner_cphBanner_cphBanner_lstBanner_ctrl5_Img3" alt="37.jpg" style={style} /></a>
                  <a href="/" target="_blank" className="nivo-imageLink" style={{display: 'none'}}>
                    <img src="/res/advertisement/36.jpg" id="ctl00_ctl00_ctl00_cphBanner_cphBanner_cphBanner_lstBanner_ctrl6_Img3" alt="36.jpg" style={style} /></a>

                    <img className="nivo-main-image" src="/res/advertisement/35.jpg" style={{display: 'none !important', height: 'auto', width: '819px' }} />
                  <div className="nivo-caption"></div>
                </div>
                <div className="nivo-controlNav"><a className="nivo-control" rel="0">1</a><a className="nivo-control" rel="1">2</a><a className="nivo-control" rel="2">3</a><a className="nivo-control" rel="3">4</a><a className="nivo-control active" rel="4">5</a><a className="nivo-control" rel="5">6</a><a className="nivo-control" rel="6">7</a></div>
              </div>
            </div>
          </div>
        </div>
    )
}

export { Banner as default }
