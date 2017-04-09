import React from 'react'

class MenuMobile extends React.Component {
  render() {
    return (
      <div id="menumobile" className="mobile-panel mobilep-left" style={{transform: 'translate3d(-120%, 0px, 0px)'}}>
        <div className="close-menu">
          <a href="/kien-thuc-benh-hoc.aspx#menumobile" className="glyphicon glyphicon-remove-circle" />
        </div>
        <div className="menu-in">
          <div className="menu-mobile">
            <div className="logo">
              <a href="/">
                <img src="/assets/images/logosh.png" alt /></a></div>
            <ul className="menu-nav">
              <li><a href="/san-pham.aspx">Sản phẩm</a>
                <ul>
                  <li><a href="/siro-ho-bezut-pci-2-pi-1.aspx">
                      Siro ho bezut</a></li>
                  <li><a href="/vien-ngam-ho-bezut-khong-duong-pci-2-pi-5.aspx">
                      Viên ngậm ho bezut không đường</a></li>
                  <li><a href="/vien-ngam-ho-bezut-pci-2-pi-2.aspx">
                      Viên ngậm ho bezut</a></li>
                  <li><a href="/calcium-mumekids-10-pci-2-pi-8.aspx">
                      Calcium mumekids 10</a></li>
                  <li><a href="/hobezut-pci-2-pi-11.aspx">
                      HOBEZUT</a></li>
                </ul>
              </li>
              <li><a href="/dieu-tri-ho.aspx">Điều trị ho</a>
                <ul>
                  <li><a href="/benh-hoc-dti-2-dri-4.aspx">
                      <span className="icon-chevron-right iconl" />
                      Bệnh học</a></li>
                  <li><a href="/dieu-tri-ho-bang-thuoc-tay-y-dti-2-dri-5.aspx">
                      <span className="icon-chevron-right iconl" />
                      Điều trị ho bằng Thuốc Tây Y</a></li>
                  <li><a href="/dieu-tri-ho-bang-thao-duoc-dti-2-dri-6.aspx">
                      <span className="icon-chevron-right iconl" />
                      Điều trị ho bằng Thảo Dược</a></li>
                  <li><a href="/tai-sao-nen-dung-bezut-dti-2-dri-7.aspx">
                      <span className="icon-chevron-right iconl" />
                      Tại sao nên dùng Bezut ?</a></li>
                </ul>
              </li>
              <li className="active"><a href="/kien-thuc-benh-hoc.aspx">Kiến thức bệnh học</a>
                <ul>
                  <li><a href="/benh-ho-hap-kci-3-kri-8.aspx">
                      <span className="icon-chevron-right iconl" />
                      Bệnh hô hấp</a></li>
                  <li><a href="/benh-tieu-hoa-kci-3-kri-9.aspx">
                      <span className="icon-chevron-right iconl" />
                      Bệnh tiêu hoá</a></li>
                  <li><a href="/coi-xuong-cham-lon-kci-3-kri-11.aspx">
                      <span className="icon-chevron-right iconl" />
                      Còi xương, chậm lớn</a></li>
                  <li><a href="/tin-y-te-khac-kci-3-kri-12.aspx">
                      <span className="icon-chevron-right iconl" />
                      Tin y tế khác</a></li>
                </ul>
              </li>
              <li><a href="/tu-van.aspx">Tư vấn bác sỹ</a></li>
              <li><a href="/tin-tuc.aspx">Tin tức</a>
                <ul>
                  <li><a href="/tin-tuc-doi-song-tci-1-tri-13.aspx">
                      <span className="icon-chevron-right iconl" />
                      Tin tức đời sống</a></li>
                  <li><a href="/su-kien-bezut-tci-1-tri-14.aspx">
                      <span className="icon-chevron-right iconl" />
                      Sự kiện BEZUT</a></li>
                  <li><a href="/tin-giai-tri-tci-1-tri-15.aspx">
                      <span className="icon-chevron-right iconl" />
                      Tin giải trí</a></li>
                </ul>
              </li>
              <li><a href="/he-thong-phan-phoi.aspx">Hệ thống phân phối</a></li>
              <li className="last"><a href="/lien-he.aspx">Liên hệ</a></li>
            </ul>
            <div className="mo-box">
              <div className="hotline">
                Tổng đài CSKH: <strong>091 926 3399</strong></div>
            </div>
            <div className="mo-box">
              <div className="share">
                Follow me on <a href="https://www.facebook.com/bacsibezut">
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
