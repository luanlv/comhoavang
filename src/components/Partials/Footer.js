import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <div id="footer">
        <div className="footer-wrapper">
          <div className="container">
            <div className="footer-box mobi480h">
              <div className="footer-logo">
                <a href="http://www.vinacare.vn/">
                  <img src="/assets/images/logo-footer.png" alt="img" /></a></div>
              <div className="dangky">
                <a href="http://online.gov.vn/CustomWebsiteDisplay.aspx?DocId=27183" target="_blank"><img src="/assets/images/dangky.png" alt="img" /></a></div>
            </div>
            <div className="footer-right">
              <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <h2>
                    điều trị ho</h2>
                  <ul className="list-footer">
                    <li><a href="/benh-hoc-dti-2-dri-4.aspx">
                        Bệnh học
                        <span className="icona-left icon-chevron-right" /></a></li>
                    <li><a href="/dieu-tri-ho-bang-thuoc-tay-y-dti-2-dri-5.aspx">
                        Điều trị ho bằng Thuốc Tây Y
                        <span className="icona-left icon-chevron-right" /></a></li>
                    <li><a href="/dieu-tri-ho-bang-thao-duoc-dti-2-dri-6.aspx">
                        Điều trị ho bằng Thảo Dược
                        <span className="icona-left icon-chevron-right" /></a></li>
                    <li><a href="/tai-sao-nen-dung-bezut-dti-2-dri-7.aspx">
                        Tại sao nên dùng Bezut ?
                        <span className="icona-left icon-chevron-right" /></a></li>
                  </ul>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <h2>
                    Thông tin website</h2>
                  <ul className="list-footer">
                    <li><a href="/hinh-thuc-thanh-toan-tci-16-tt-894.aspx">
                        Hình thức thanh toán<span className="icona-left icon-chevron-right" /></a></li>
                    <li><a href="/chinh-sach-van-chuyen-giao-nhan-tci-16-tt-895.aspx">
                        Chính sách vận chuyển, giao nhận<span className="icona-left icon-chevron-right" /></a></li>
                    <li><a href="/chinh-sach-bao-hanh-tci-16-tt-896.aspx">
                        Chính sách bảo hành<span className="icona-left icon-chevron-right" /></a></li>
                    <li><a href="/chinh-sach-doitra-hang-tci-16-tt-897.aspx">
                        Chính sách đổi/trả hàng<span className="icona-left icon-chevron-right" /></a></li>
                    <li><a href="/chinh-sach-quy-dinh-chung-tci-16-tt-898.aspx">
                        Chính sách &amp; Quy định chung<span className="icona-left icon-chevron-right" /></a></li>
                    <li><a href="/chinh-sach-bao-mat-thong-tin-tci-16-tt-912.aspx">
                        Chính sách bảo mật thông tin<span className="icona-left icon-chevron-right" /></a></li>
                  </ul>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                  <h2>Công ty Cổ phần Dược phẩm Vinacare</h2>
                  <ul className="address-box list-footer">
                    <li className="add-1"><span>Địa chỉ: Số 18 ngách 19/15 Kim Đồng - Hà Nội</span></li>
                    <li className="add-2"><span>Điện thoại: (04) 3664 9263</span></li>
                    <li className="add-3"><span>Fax: (04) 3664 9265</span></li>
                    <li className="add-5"><span>Email: <a href="mailto:vinacarepharma@gmail.com">vinacarepharma@gmail.com</a></span></li>
                    <li>Mã số doanh nghiệp 0102302539 cấp lần đầu ngày 26 tháng 06 năm 2007 và cấp lần thứ
                      7 ngày 07 tháng 07 năm 2015 tại Sở Kế hoạch và đầu tư Thành phố Hà Nội.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-box mobi480s">
              <div className="footer-logo">
                <a href="http://www.vinacare.vn/" id="ctl00_ctl00_ctl00_A1">
                  <img src="/assets/images/logo-footer.png" alt="img" /></a></div>
              <div className="dangky">
                <a href="http://online.gov.vn/CustomWebsiteDisplay.aspx?DocId=27183" target="_blank"><img src="/assets/images/dangky.png" alt="img" /></a></div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="col-md-6">
              © 2015 BEZUT. All rights reserved | <a href="http://www.tranlegroup.com/" target="_blank">
                Thiet Ke Web</a> <a href="http://www.tranlegroup.com/" target="_blank">Tran Le</a>
            </div>
            <div className="col-md-6">
              Đang truy cập:
              96
              | Tổng cộng:
              721,392
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export {Footer as default}
