import React from 'react'

class Slider extends React.Component {
  componentDidMount () {
    console.log('run slider ok 23456')
    $('.sliderBig').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1
    });
  }
  render () {
    return (
      <div className="sliderBig bgm-2 slick-initialized slick-slider">
        <div aria-live="polite" className="slick-list draggable" tabIndex={0}><div className="slick-track" style={{opacity: 1, width: 4075, transform: 'translate3d(-2445px, 0px, 0px)'}}><div className="slide slick-slide slick-cloned" data-slick-index={-1} aria-hidden="true" style={{width: 815}}>
          <div className="news-big">
            <a href="/7-dieu-dam-bao-me-chua-biet-khi-tre-so-sinh-bi-sot-kci-12-ki-976.aspx" className="news-img">
              <img src="/assets/images/7-dieu-dam-bao-me-chua-biet-khi-tre-so-sinh-bi-sot-976.jpg" alt="7-dieu-dam-bao-me-chua-biet-khi-tre-so-sinh-bi-sot-976.jpg" /></a>
            <div className="news-content">
              <h3 className="news-name">
                <a href="/7-dieu-dam-bao-me-chua-biet-khi-tre-so-sinh-bi-sot-kci-12-ki-976.aspx">
                  7 điều đảm bảo mẹ chưa biết khi trẻ sơ sinh bị sốt</a></h3>
              <div className="description">
                Là bố mẹ, ai cũng xót xa khi chứng kiến bất kỳ sự khó chịu nào của trẻ sơ sinh...</div>
              <div className="more-details">
                <a className="text-uppercase" href="/7-dieu-dam-bao-me-chua-biet-khi-tre-so-sinh-bi-sot-kci-12-ki-976.aspx">
                  Xem chi tiết</a></div>
            </div>
          </div>
        </div><div className="slide slick-slide" data-slick-index={0} aria-hidden="true" style={{width: 815}}>
          <div className="news-big">
            <a href="/bieu-hien-khong-ngo-toi-lien-quan-den-suc-khoe-duong-ruot-cua-ban-kci-9-ki-1074.aspx" className="news-img">
              <img src="/assets/images/bieu-hien-khong-ngo-toi-lien-quan-den-suc-khoe-duong-ruot-cua-ban-1074.jpg" alt="bieu-hien-khong-ngo-toi-lien-quan-den-suc-khoe-duong-ruot-cua-ban-1074.jpg" /></a>
            <div className="news-content">
              <h3 className="news-name">
                <a href="/bieu-hien-khong-ngo-toi-lien-quan-den-suc-khoe-duong-ruot-cua-ban-kci-9-ki-1074.aspx">
                  Biểu hiện không ngờ tới liên quan đến sức khỏe đường ruột của bạn</a></h3>
              <div className="description">
                Thường xuyên bị ốm, ngứa và đau nhức? Luôn trong trạng...</div>
              <div className="more-details">
                <a className="text-uppercase" href="/bieu-hien-khong-ngo-toi-lien-quan-den-suc-khoe-duong-ruot-cua-ban-kci-9-ki-1074.aspx">
                  Xem chi tiết</a></div>
            </div>
          </div>
        </div><div className="slide slick-slide" data-slick-index={1} aria-hidden="true" style={{width: 815}}>
          <div className="news-big">
            <a href="/nguyen-nhan-be-ngu-ngay-va-cach-dieu-tri-hieu-qua-kci-12-ki-977.aspx" className="news-img">
              <img src="/assets/images/nguyen-nhan-be-ngu-ngay-va-cach-dieu-tri-hieu-qua-977.jpg" alt="nguyen-nhan-be-ngu-ngay-va-cach-dieu-tri-hieu-qua-977.jpg" /></a>
            <div className="news-content">
              <h3 className="news-name">
                <a href="/nguyen-nhan-be-ngu-ngay-va-cach-dieu-tri-hieu-qua-kci-12-ki-977.aspx">
                  Nguyên nhân bé ngủ ngáy và cách điều trị hiệu quả</a></h3>
              <div className="description">
                Bé ngủ ngáy thường rõ rệt vào khoảng thời gian bé 2-8 tuổi. Ngủ ngáy ở bé không...</div>
              <div className="more-details">
                <a className="text-uppercase" href="/nguyen-nhan-be-ngu-ngay-va-cach-dieu-tri-hieu-qua-kci-12-ki-977.aspx">
                  Xem chi tiết</a></div>
            </div>
          </div>
        </div><div className="slide slick-slide slick-active" data-slick-index={2} aria-hidden="false" style={{width: 815}}>
          <div className="news-big">
            <a href="/7-dieu-dam-bao-me-chua-biet-khi-tre-so-sinh-bi-sot-kci-12-ki-976.aspx" className="news-img">
              <img src="/assets/images/7-dieu-dam-bao-me-chua-biet-khi-tre-so-sinh-bi-sot-976.jpg" alt="7-dieu-dam-bao-me-chua-biet-khi-tre-so-sinh-bi-sot-976.jpg" /></a>
            <div className="news-content">
              <h3 className="news-name">
                <a href="/7-dieu-dam-bao-me-chua-biet-khi-tre-so-sinh-bi-sot-kci-12-ki-976.aspx">
                  7 điều đảm bảo mẹ chưa biết khi trẻ sơ sinh bị sốt</a></h3>
              <div className="description">
                Là bố mẹ, ai cũng xót xa khi chứng kiến bất kỳ sự khó chịu nào của trẻ sơ sinh...</div>
              <div className="more-details">
                <a className="text-uppercase" href="/7-dieu-dam-bao-me-chua-biet-khi-tre-so-sinh-bi-sot-kci-12-ki-976.aspx">
                  Xem chi tiết</a></div>
            </div>
          </div>
        </div><div className="slide slick-slide slick-cloned" data-slick-index={3} aria-hidden="true" style={{width: 815}}>
          <div className="news-big">
            <a href="/bieu-hien-khong-ngo-toi-lien-quan-den-suc-khoe-duong-ruot-cua-ban-kci-9-ki-1074.aspx" className="news-img">
              <img src="/assets/images/bieu-hien-khong-ngo-toi-lien-quan-den-suc-khoe-duong-ruot-cua-ban-1074.jpg" alt="bieu-hien-khong-ngo-toi-lien-quan-den-suc-khoe-duong-ruot-cua-ban-1074.jpg" /></a>
            <div className="news-content">
              <h3 className="news-name">
                <a href="/bieu-hien-khong-ngo-toi-lien-quan-den-suc-khoe-duong-ruot-cua-ban-kci-9-ki-1074.aspx">
                  Biểu hiện không ngờ tới liên quan đến sức khỏe đường ruột của bạn</a></h3>
              <div className="description">
                Thường xuyên bị ốm, ngứa và đau nhức? Luôn trong trạng...</div>
              <div className="more-details">
                <a className="text-uppercase" href="/bieu-hien-khong-ngo-toi-lien-quan-den-suc-khoe-duong-ruot-cua-ban-kci-9-ki-1074.aspx">
                  Xem chi tiết</a></div>
            </div>
          </div>
        </div></div></div>
        <ul className="slick-dots" style={{display: 'block'}}><li className aria-hidden="true"><button type="button" data-role="none">1</button></li><li aria-hidden="true" className><button type="button" data-role="none">2</button></li><li aria-hidden="false" className="slick-active"><button type="button" data-role="none">3</button></li></ul></div>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
      <div id="mainContent">
        <div className="container">
          <div id="colContent">
            <div className="head lineh">
              <h2 className="title-2" style={{lineHeight: 37}}>
                kiến thức bệnh học</h2>
              <div className="head-list">
                <a href="/benh-ho-hap-kci-3-kri-8.aspx">
                  Bệnh hô hấp</a>
                <a href="/benh-tieu-hoa-kci-3-kri-9.aspx">
                  Bệnh tiêu hoá</a>
                <a href="/coi-xuong-cham-lon-kci-3-kri-11.aspx">
                  Còi xương, chậm lớn</a>
                <a href="/tin-y-te-khac-kci-3-kri-12.aspx">
                  Tin y tế khác</a>
              </div>
            </div>
            <div className="slider-wrap">
              <Slider />
            </div>
            <div id="ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_UpdatePanel1">
              <div className="news-lbox">
                <a href="/bieu-hien-khong-ngo-toi-lien-quan-den-suc-khoe-duong-ruot-cua-ban-kci-9-ki-1074.aspx" className="news-img">
                  <img src="/assets/images/bieu-hien-khong-ngo-toi-lien-quan-den-suc-khoe-duong-ruot-cua-ban-1074.jpg" alt="bieu-hien-khong-ngo-toi-lien-quan-den-suc-khoe-duong-ruot-cua-ban-1074.jpg" /></a>
                <div className="news-content">
                  <h3 className="news-name">
                    <a href="/bieu-hien-khong-ngo-toi-lien-quan-den-suc-khoe-duong-ruot-cua-ban-kci-9-ki-1074.aspx">
                      Biểu hiện không ngờ tới liên quan đến sức khỏe đường ruột của bạn</a></h3>
                  <div className="description">
                    Thường xuyên bị ốm, ngứa và đau nhức? Luôn trong trạng thái cáu kỉnh? Có rất nhiều nguyên nhân có thể gây ra tình trạng này, trong đó mất cân bằng đường ruột có...</div>
                </div>
              </div>
              <div className="news-lbox">
                <a href="/viem-tai-giua-o-tre-em-nguyen-nhan-va-cach-dieu-tri-benh-kci-12-ki-1060.aspx" className="news-img">
                  <img src="/assets/images/viem-tai-giua-o-tre-em-nguyen-nhan-va-cach-dieu-tri-benh-1060.jpg" alt="viem-tai-giua-o-tre-em-nguyen-nhan-va-cach-dieu-tri-benh-1060.jpg" /></a>
                <div className="news-content">
                  <h3 className="news-name">
                    <a href="/viem-tai-giua-o-tre-em-nguyen-nhan-va-cach-dieu-tri-benh-kci-12-ki-1060.aspx">
                      Viêm tai giữa ở trẻ em: Nguyên nhân và cách điều trị bệnh</a></h3>
                  <div className="description">
                    Viêm tai giữa là một bệnh thường gặp của trẻ sơ sinh và trẻ nhỏ, được xếp vào nhóm bệnh đường hô hấp trên. Bệnh thường dẫn đến những biến chứng nặng nề nếu không được cha mẹ phát hiện kịp thời...</div>
                </div>
              </div>
              <div className="news-lbox">
                <a href="/chung-vang-da-o-tre-so-sinh-kci-12-ki-1056.aspx" className="news-img">
                  <img src="/assets/images/chung-vang-da-o-tre-so-sinh-1056.jpg" alt="chung-vang-da-o-tre-so-sinh-1056.jpg" /></a>
                <div className="news-content">
                  <h3 className="news-name">
                    <a href="/chung-vang-da-o-tre-so-sinh-kci-12-ki-1056.aspx">
                      Chứng vàng da ở trẻ sơ sinh</a></h3>
                  <div className="description">
                    Trẻ sơ sinh có 2 dạng vàng da là: sinh lý và bệnh lý. Vàng da sinh lý hầu hết trẻ đều bị và thường biến mất sau một thời gian ngắn. Vàng da bệnh lý rất nguy hiểm do trẻ có thể bị hôn mê, co giật do đó các bậc cha mẹ cần biết cách phát hiện bệnh vàng da ở trẻ...</div>
                </div>
              </div>
              <div className="news-lbox">
                <a href="/nguyen-nhan-va-bieu-hien-khi-tre-bi-roi-loan-tieu-hoa-kci-9-ki-1055.aspx" className="news-img">
                  <img src="/assets/images/nguyen-nhan-va-bieu-hien-khi-tre-bi-roi-loan-tieu-hoa-1055.jpg" alt="nguyen-nhan-va-bieu-hien-khi-tre-bi-roi-loan-tieu-hoa-1055.jpg" /></a>
                <div className="news-content">
                  <h3 className="news-name">
                    <a href="/nguyen-nhan-va-bieu-hien-khi-tre-bi-roi-loan-tieu-hoa-kci-9-ki-1055.aspx">
                      Nguyên nhân và biểu hiện khi trẻ bị rối loạn tiêu hóa?</a></h3>
                  <div className="description">
                    Có rất nhiều nguyên nhân dẫn đến rối loạn tiêu hóa. Trong đó đối tượng hay gặp nhất đó là trẻ em. Biểu hiện của hiện tượng này đó là táo bón, khó tiêu, đầy bụng, tiêu chảy, nôn trớ, trẻ lười ăn hoặc kém hấp thu…</div>
                </div>
              </div>
              <div className="news-lbox">
                <a href="/cam-lanh-o-tre-em-va-nhung-dieu-can-biet-kci-8-ki-1054.aspx" className="news-img">
                  <img src="/assets/images/cam-lanh-o-tre-em-va-nhung-dieu-can-biet-1054.jpg" alt="cam-lanh-o-tre-em-va-nhung-dieu-can-biet-1054.jpg" /></a>
                <div className="news-content">
                  <h3 className="news-name">
                    <a href="/cam-lanh-o-tre-em-va-nhung-dieu-can-biet-kci-8-ki-1054.aspx">
                      Cảm lạnh ở trẻ em và những điều cần biết</a></h3>
                  <div className="description">
                    Hầu hết trẻ em đều trải qua cảm lạnh ít nhất một vài lần bởi vì hệ hô hấp của bé dễ bị tổn thương bởi các tác nhân thời tiết...</div>
                </div>
              </div>
              <div className="news-lbox">
                <a href="/benh-hen-suyen-o-tre-em-kci-8-ki-1053.aspx" className="news-img">
                  <img src="/assets/images/benh-hen-suyen-o-tre-em-1053.jpg" alt="benh-hen-suyen-o-tre-em-1053.jpg" /></a>
                <div className="news-content">
                  <h3 className="news-name">
                    <a href="/benh-hen-suyen-o-tre-em-kci-8-ki-1053.aspx">
                      Bệnh hen suyễn ở trẻ em</a></h3>
                  <div className="description">
                    Hen phế quản (suyễn) là một vấn đề cần được quan tâm đúng mức. Thật vậy, đây chính là bệnh hô hấp mãn tính thường gặp nhất ở trẻ em. Tỷ lệ trẻ em mắc bệnh hen cũng cao gấp đôi ngườii lớn (10% so với 5%)</div>
                </div>
              </div>
              <div className="news-lbox">
                <a href="/7-trieu-chung-suc-khoe-tre-so-sinh-de-mac-phai-kci-12-ki-1052.aspx" className="news-img">
                  <img src="/assets/images/7-trieu-chung-suc-khoe-tre-so-sinh-de-mac-phai-1052.jpg" alt="7-trieu-chung-suc-khoe-tre-so-sinh-de-mac-phai-1052.jpg" /></a>
                <div className="news-content">
                  <h3 className="news-name">
                    <a href="/7-trieu-chung-suc-khoe-tre-so-sinh-de-mac-phai-kci-12-ki-1052.aspx">
                      7 triệu chứng sức khỏe trẻ sơ sinh dễ mắc phải</a></h3>
                  <div className="description">
                    Trẻ sơ sinh có sức đề kháng còn non yếu nên dễ nhiễm bệnh về hô hấp, tiêu hóa... Các mẹ cần đặc biệt chú ý khi chăm sóc trẻ...</div>
                </div>
              </div>
              <div className="news-lbox">
                <a href="/nguoi-bi-viem-loet-da-day-ta-trang-can-nho-kci-12-ki-1046.aspx" className="news-img">
                  <img src="/assets/images/nguoi-bi-viem-loet-da-day-ta-trang-can-nho-1046.jpg" alt="nguoi-bi-viem-loet-da-day-ta-trang-can-nho-1046.jpg" /></a>
                <div className="news-content">
                  <h3 className="news-name">
                    <a href="/nguoi-bi-viem-loet-da-day-ta-trang-can-nho-kci-12-ki-1046.aspx">
                      Người bị viêm loét dạ dày tá tràng cần nhớ</a></h3>
                  <div className="description">
                    Viêm loét dạ dày tá tràng là bệnh dễ tái phát, mang lại cảm giác khó chịu cho người bệnh. Chính vì vậy, để điều trị dứt điểm , loại bỏ các triệu chứng của bệnh...</div>
                </div>
              </div>
              <div className="news-lbox">
                <a href="/meo-dan-gian-ha-sot-cuc-hieu-qua-cho-tre-kci-12-ki-1042.aspx" className="news-img">
                  <img src="/assets/images/meo-dan-gian-ha-sot-cuc-hieu-qua-cho-tre-1042.jpg" alt="meo-dan-gian-ha-sot-cuc-hieu-qua-cho-tre-1042.jpg" /></a>
                <div className="news-content">
                  <h3 className="news-name">
                    <a href="/meo-dan-gian-ha-sot-cuc-hieu-qua-cho-tre-kci-12-ki-1042.aspx">
                      Mẹo dân gian hạ sốt cực hiệu quả cho trẻ</a></h3>
                  <div className="description">
                    Uống nước rau diếp, quấn tất ẩm quanh mắt cá chân hay chà chanh tươi là những mẹo giúp hạ sốt cho trẻ cực hiệu quả.</div>
                </div>
              </div>
              <div id="pagerp" className="pager">
                <span id="ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_DataPager1"><span className="first">First</span>&nbsp;<span className="prev">Previous</span>&nbsp;<span className="current">1</span>&nbsp;<a className="numer-paging" href="javascript:__doPostBack('ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl01','')">2</a>&nbsp;<a className="numer-paging" href="javascript:__doPostBack('ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl02','')">3</a>&nbsp;<a className="numer-paging" href="javascript:__doPostBack('ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl03','')">4</a>&nbsp;<a className="numer-paging" href="javascript:__doPostBack('ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl04','')">5</a>&nbsp;&nbsp;<a href="javascript:__doPostBack('ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl05','')">...</a>&nbsp;<a className="next" href="javascript:__doPostBack('ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl03$ctl00','')">Next</a>&nbsp;<a className="last" href="javascript:__doPostBack('ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl04$ctl00','')">Last</a>&nbsp;</span>
              </div>
            </div>
          </div>
          <div id="colAside">
            <div className="row">
              <div className="col-md-12 col-xs-6">
                <div className="adv">
                  <a href="/he-thong-phan-phoi.aspx">
                    <img src="/assets/images/images-1.jpg" alt /></a>
                </div>
              </div>
              <div className="col-md-12 col-xs-6">
                <div className="wrap-video">
                  <a href="/quang-cao-vien-ngam-ho-bezut-vd-5.aspx" className="videob">
                    <img src="/assets/images/quang-cao-vien-ngam-ho-bezut-5.jpg" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_lstVideo_ctrl0_Img1" alt="quang-cao-vien-ngam-ho-bezut-5.jpg" />
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
                        <img src="/assets/images/quang-cao-vien-ngam-ho-bezut-5.jpg" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_lstVideo_ctrl0_lstListVideo_ctrl0_Img2" alt="quang-cao-vien-ngam-ho-bezut-5.jpg" />
                      </span><span className="video-content"><span className="video-name">
                          Quảng cáo Viên ngậm ho Bezut</span>
                      </span></a>
                    <div className="whidden">
                      <div id="video-1" className="info-vido" data-video="https://www.youtube.com/watch?v=3s64nZhmK-g&feature=youtu.be">
                      </div>
                    </div>
                  </li>
                  <li><a href="/quang-cao-siro-ho-bezut-vd-4.aspx" className="video-box"><span className="video-img">
                        <img src="/assets/images/quang-cao-siro-ho-bezut-4.jpg" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_lstVideo_ctrl0_lstListVideo_ctrl1_Img2" alt="quang-cao-siro-ho-bezut-4.jpg" />
                      </span><span className="video-content"><span className="video-name">
                          Quảng cáo Siro ho Bezut</span>
                      </span></a>
                    <div className="whidden">
                      <div id="video-1" className="info-vido" data-video="https://www.youtube.com/watch?v=S3KcpLej46I&feature=youtu.be">
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wrap-question">
              <div className="question-out">
                <div className="question-in">
                  <div className="question-box">
                    <h2>
                      Gửi câu hỏi
                    </h2>
                    <div className="description">
                      Các câu hỏi của bạn đọc sẽ được giải đáp bởi đội ngũ chuyên gia y dược giàu kinh
                      nghiệm</div>
                  </div>
                  <div className="form-question">
                    <div className="question-input">
                      <input name="ctl00$ctl00$ctl00$ContentPlaceHolder1$cphAside$txtTitle" type="text" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_txtTitle" className="question-text corner" />
                      <input type="hidden" name="ctl00$ctl00$ctl00$ContentPlaceHolder1$cphAside$TextBoxWatermarkExtender1_ClientState" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_TextBoxWatermarkExtender1_ClientState" />
                      <span id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_RequiredFieldValidator4" className="lb-error" style={{color: 'Red', display: 'none'}}>Thông tin bắt buộc!</span>
                    </div>
                    <div className="question-input">
                      <input name="ctl00$ctl00$ctl00$ContentPlaceHolder1$cphAside$txtHoTen" type="text" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_txtHoTen" className="question-text corner" />
                      <input type="hidden" name="ctl00$ctl00$ctl00$ContentPlaceHolder1$cphAside$txtHoTen_WatermarkExtender_ClientState" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_txtHoTen_WatermarkExtender_ClientState" />
                      <span id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_RequiredFieldValidator1" className="lb-error" style={{color: 'Red', display: 'none'}}>Thông tin bắt buộc!</span>
                    </div>
                    <div className="question-input">
                      <input name="ctl00$ctl00$ctl00$ContentPlaceHolder1$cphAside$txtEmail" type="text" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_txtEmail" className="question-text corner" />
                      <input type="hidden" name="ctl00$ctl00$ctl00$ContentPlaceHolder1$cphAside$txtEmail_WatermarkExtender_ClientState" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_txtEmail_WatermarkExtender_ClientState" />
                      <span id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_RegularExpressionValidator1" className="lb-error" style={{color: 'Red', display: 'none'}}>Email không đúng!</span>
                      <span id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_RequiredFieldValidator2" className="lb-error" style={{color: 'Red', display: 'none'}}>Thông tin bắt buộc!</span>
                    </div>
                    <div className="question-input">
                      <textarea name="ctl00$ctl00$ctl00$ContentPlaceHolder1$cphAside$txtNoiDung" rows={2} cols={20} id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_txtNoiDung" className="question-area corner" defaultValue={""} />
                      <input type="hidden" name="ctl00$ctl00$ctl00$ContentPlaceHolder1$cphAside$txtNoiDung_WatermarkExtender_ClientState" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_txtNoiDung_WatermarkExtender_ClientState" />
                      <span id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_RequiredFieldValidator3" className="lb-error" style={{color: 'Red', display: 'none'}}>Thông tin bắt buộc!</span>
                    </div>
                    <div className="question-input">
                      <input name="ctl00$ctl00$ctl00$ContentPlaceHolder1$cphAside$txtVerifyCode" type="text" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_txtVerifyCode" className="question-text corner" />
                      <input type="hidden" name="ctl00$ctl00$ctl00$ContentPlaceHolder1$cphAside$txtVerifyCode_WatermarkExtender_ClientState" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_txtVerifyCode_WatermarkExtender_ClientState" />
                      <div id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_RadCaptcha1" className="RadCaptcha RadCaptcha_Default  capchaans">
                        {/* 2012.3.1016.35 */}<span id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_RadCaptcha1_ctl00" style={{color: 'Red', display: 'none'}}>Mã xác nhận: không chính xác.</span><div id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_RadCaptcha1_SpamProtectorPanel" className="capchaans">
                          <div id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_RadCaptcha1_ctl01">
                            <img id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_RadCaptcha1_CaptchaImageUP" alt src="/assets/images/Telerik.Web.UI.WebResource.axd" style={{height: 35, width: 125, borderWidth: 0, display: 'block'}} /><a id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_RadCaptcha1_CaptchaLinkButton" className="rcRefreshImage" title="Refesh" href="javascript:__doPostBack('ctl00$ctl00$ctl00$ContentPlaceHolder1$cphAside$RadCaptcha1$CaptchaLinkButton','')" style={{display: 'block'}}>Refesh</a>
                          </div>
                        </div><input id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_RadCaptcha1_ClientState" name="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_RadCaptcha1_ClientState" type="hidden" autoComplete="off" />
                      </div>
                    </div>
                    <div className="question-input">
                      <input type="submit" name="ctl00$ctl00$ctl00$ContentPlaceHolder1$cphAside$btnSendAnswer" defaultValue="Gửi câu hỏi" className="question-btn" />
                    </div>
                    <div className="question-input">
                      <span id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_lblMessage" style={{color: 'Red'}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Main as default }
