import React, { PropTypes } from 'react';
class Home extends React.Component {

  render() {
    return (
      <div id="landing">
        <div className="heading">
          <div className="shadow" />
          <div className="container">
            <div className="row">
              <div className="col-sm-6 centerWr">
                <div className="center">
                  <div className="boxWr">
                      <div>
                        <div className="num">10</div>
                        <div className="text">DAYS</div>
                      </div>
                      <div>
                        <div className="num">1</div>
                        <div className="text">HOURS</div>
                      </div>
                      <div>
                        <div className="num">05</div>
                        <div className="text">MINUTES</div>
                      </div>
                      <div>
                        <div className="num">52</div>
                        <div className="text">SECONDS</div>
                      </div>
                  </div>
                  <div className="freeship">
                    <div>GIÁ <b style={{color: '#5cb846'}}>270.000VNĐ</b>/1kg</div>
                    <div>GIẢM 10% VÀ FREE SHIP</div>
                    <div>ĐƠN HÀNG TRÊN 3KG</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 centerWr">
                <div className="form center">
                  <div className="form-header">ĐĂNG KÝ MUA HÀNG</div>
                  <div className="form-body">
                    <form>
                      <div className="form-group">
                        <input type="email" className="form-control" id=  "email" placeholder="Họ và tên" />
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control" id="email" placeholder="Số Điện Thoại" />
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control" id="email" placeholder="Địa chỉ" />
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control" id="email" placeholder="Loại Sản Phẩm" />
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control" id="pwd" placeholder="Số Lượng" />
                      </div>
                      <a className="form-button" href="#"> Đặt hàng</a>
                    </form>
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



export default Home
