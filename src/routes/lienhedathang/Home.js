/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Header from '../../components/Partials/Header'
import Main7 from '../../components/Partials/Main7'
import Aside from '../../components/Partials/Aside'
import Footer from '../../components/Partials/Footer'
import MenuMobile from '../../components/Partials/MenuMobile'

class Home extends React.Component {

  render() {
    return (
      <div >
        <div id="mainContent">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <form className="form-horizontal">
                  <fieldset>
                    {/* Form Name */}
                    <legend >Liên hệ đặt hàng</legend>
                    {/* Text input*/}
                    <div className="form-group">
                      <label className="col-md-4 control-label" htmlFor="product_id">Họ Và Tên:</label>
                      <div className="col-md-8">
                        <input id="product_id" name="product_id" placeholder="Họ Và Tên" className="form-control input-md" required type="text" />
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="form-group">
                      <label className="col-md-4 control-label" htmlFor="product_name">Số điện thoại:</label>
                      <div className="col-md-8">
                        <input id="product_name" name="product_name" placeholder="Số điện thoại" className="form-control input-md" required type="text" />
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="form-group">
                      <label className="col-md-4 control-label" htmlFor="product_description">Địa chỉ:</label>
                      <div className="col-md-8">
                        <textarea className="form-control" id="product_description" name="product_description" defaultValue={""} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-4 control-label" htmlFor="product_categorie">Sản phẩm:</label>
                      <div className="col-md-8">
                        <select id="product_categorie" name="product_categorie" className="form-control">
                          <option value="Cốm khô">Cốm khô</option>
                          <option value="Chả cốm">Chả cốm</option>
                          <option value="Cốm non tươi">Cốm non tươi</option>
                        </select>
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="form-group">
                      <label className="col-md-4 control-label" htmlFor="available_quantity">Số lượng (kg):</label>
                      <div className="col-md-8">
                        <input id="available_quantity" name="available_quantity" placeholder="VD: 1kg" className="form-control input-md" required type="text" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-4 control-label" htmlFor="singlebutton" />
                      <div className="col-md-8">
                        <button id="singlebutton" name="singlebutton" className="btn btn-primary">Đặt hàng</button>
                      </div>
                    </div>

                    <legend>Liên hệ</legend>
                    <p>Hotline : <b style={{color: 'red'}}>0973318868</b></p>
                    <p>Địa chỉ : 128 – Chợ Mễ Trì – Quận Nam Từ Liêm – Hà Nội</p>
                  </fieldset>
                </form>
              </div>
              <div className="col-md-6">
                <fieldset>
                  <legend>Hình thức thanh toán</legend>
                  <p>Để thuận lợi hơn cho quí khách mua Cốm, chúng tôi có 2 hình thức thanh toán sau :</p>
                  <p>Khách hàng ở gần (bán kính 20km) : Quý khách thanh toán bằng chuyển khoản hoặc tiền mặt sau khi nhận cốm .</p>
                  <p>Khách hàng ở xa (trên 20km) : Quý khách vui lòng thanh toán 100% đơn hàng trước khi nhận hàng.</p>
                  <p><b>Thông tin tài khoản</b></p>
                  <p>Chủ tài khoản : <b style={{color: 'red'}}>Nguyễn Hữu Tú</b></p>
                  <p>Số tài khoản : <b style={{color: 'red'}}>84387487</b></p>
                  <p>Ngân hàng: <b style={{color: 'red'}}>VPBank chi nhánh Đông Đô</b></p>
                  <br/>
                  <p>Hotline : <b style={{color: 'red'}}>0973318868</b></p>
                  <p>Địa chỉ : 128 – Chợ Mễ Trì – Quận Nam Từ Liêm – Hà Nội</p>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home
