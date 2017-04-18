import React from 'react'
import Link from '../Link'

class Main extends React.Component {
  render() {
    if (this.props.posts.data.length < 1) {
      return (
        <div id="mainContent">
          Loading...
        </div>
      )
    } else {
      const firstPost = this.props.posts.data[0]
      const posts = this.props.posts.data.slice(1)
      return (
        <div id="mainContent">
          <div className="container">
            <div id="colContent">
              <div className="headno">
                <h1 className="title text-uppercase">
                  <span id="ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_lblCategory">{this.props.title}</span>
                </h1>
              </div>
              <div className="news-big line-bottom mb12">
                <Link to={"/bai-viet/" + firstPost.slug} className="news-img">
                  <img src={firstPost.coverUrl}
                       alt={firstPost.title}/></Link>
                <div className="news-content">
                  <h3 className="news-name">
                    <Link to={"/bai-viet/" + firstPost.slug}>
                      {firstPost.title}
                    </Link></h3>
                  <div className="description">
                    {firstPost.description.slice(0, 50)} ...
                  </div>
                  <div className="more-details">
                    <Link to={'/bai-viet/' + firstPost.slug}>Xem chi tiết</Link></div>
                </div>
              </div>

              {posts.map((el, index) => {
                return (
                  <div key={index} className="news-lbox">
                    <Link
                      to={'/bai-viet/' + el.slug}
                      className="news-img">
                      <img
                        src={el.coverUrl}
                        alt={el.title}/>
                    </Link>
                    <div className="news-content">
                      <h3 className="news-name">
                        <a
                          href={'/bai-viet/' + el.slug}>
                          {el.title}
                        </a></h3>
                      <div className="description">
                        {el.description}
                      </div>
                    </div>
                  </div>
                )
              })}

              <div id="pagerp" className="pager">
              <span id="ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_DataPager1"><span
                className="first">First</span>&nbsp;<span className="prev">Previous</span>&nbsp;<span
                className="current">1</span>&nbsp;<a className="numer-paging"
                                                     href="javascript:__doPostBack('ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl01','')">2</a>&nbsp;
                <a className="numer-paging"
                   href="javascript:__doPostBack('ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl02','')">3</a>&nbsp;
                <a className="numer-paging"
                   href="javascript:__doPostBack('ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl03','')">4</a>&nbsp;
                <a className="numer-paging"
                   href="javascript:__doPostBack('ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl04','')">5</a>&nbsp;&nbsp;
                <a
                  href="javascript:__doPostBack('ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl05','')">...</a>&nbsp;
                <a className="next"
                   href="javascript:__doPostBack('ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl03$ctl00','')">Next</a>&nbsp;
                <a className="last"
                   href="javascript:__doPostBack('ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl04$ctl00','')">Last</a>&nbsp;</span>
              </div>
            </div>
            <div id="colAside">
              <div className="row">
                <div className="col-md-12 col-xs-6">
                </div>
                <div className="col-md-12 col-xs-6">
                  <div className="wrap-video">
                    <a href="/quang-cao-vien-ngam-ho-bezut-vd-5.aspx" className="videob">
                      <img src="/assets/images/quang-cao-vien-ngam-ho-bezut-5.jpg"
                           id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_lstVideo_ctrl0_Img2"
                           alt="quang-cao-vien-ngam-ho-bezut-5.jpg"/>
                      <span className="ico-play">
                    </span></a>
                    <div className="video-content">
                      <h3 className="video-name">
                        <a href="/quang-cao-vien-ngam-ho-bezut-vd-5.aspx">
                          Quảng cáo Viên ngậm ho Bezut</a></h3>
                    </div>
                  </div>
                  <ul className="list-video">
                    <li><a href="/quang-cao-vien-ngam-ho-bezut-vd-5.aspx" className="video-box"><span
                      className="video-img">
                        <img src="/assets/images/quang-cao-vien-ngam-ho-bezut-5.jpg"
                             id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_lstVideo_ctrl0_lstListVideo_ctrl0_Img3"
                             alt="quang-cao-vien-ngam-ho-bezut-5.jpg"/>
                      </span><span className="video-content"><span className="video-name">
                          Quảng cáo Viên ngậm ho Bezut</span> </span></a>
                      <div className="whidden">
                        <div id="video-1" className="info-vido"
                             data-video="https://www.youtube.com/watch?v=3s64nZhmK-g&feature=youtu.be">
                        </div>
                      </div>
                    </li>
                    <li><a href="/quang-cao-siro-ho-bezut-vd-4.aspx" className="video-box"><span className="video-img">
                        <img src="/assets/images/quang-cao-siro-ho-bezut-4.jpg"
                             id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_lstVideo_ctrl0_lstListVideo_ctrl1_Img3"
                             alt="quang-cao-siro-ho-bezut-4.jpg"/>
                      </span><span className="video-content"><span className="video-name">
                          Quảng cáo Siro ho Bezut</span> </span></a>
                      <div className="whidden">
                        <div id="video-1" className="info-vido"
                             data-video="https://www.youtube.com/watch?v=S3KcpLej46I&feature=youtu.be">
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
                      <img src="/assets/images/images-1.jpg" alt/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export { Main as default }
