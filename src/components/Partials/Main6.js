import React from 'react'
import Link from '../Link'

class Main extends React.Component {
  render() {
    if (!this.props.product) {
      return (
        <div id="mainContent">
          Loading...
        </div>
      )
    } else {
      const product = this.props.product
      return (
        <div id="colContent">
              <div className="wrapper-details">
                <div className="details-content">
                  <h1 className="title">
                    {product.name}
                    </h1>
                </div>
              </div>
              <div className="wrapper-text detail-text">
                <div className="wrap-product">
                  <div className="details-img" style={{paddingRight: 5}}>
                    <img src={product.coverUrl} />
                  </div>
                  <div className="details-content">
                    <h4 className="title-2"><span>Thông tin sản phẩm</span></h4>
                    <div>
                      {product.description}
                    </div>
                  </div>
                </div>
                <div className="wrapper-text" style={{marginTop: 20}}>
                  <div className="post-body" dangerouslySetInnerHTML={{__html: product.body}} />
                </div>
              </div>
              <div className="headno headpo">
                <h2 className="title">
                  Sản phẩm liên quan</h2>
              </div>
              <div className="wrap-section prom">
                <div className="product-tb pro-tb row">
                  <div className="col-xs-4 element-item">
                    <div className="product-box">
                      <a href="hobezut-pci-2-pi-11.aspx" className="product-img">
                        <img src="res/product/hobezut-11.jpg" alt="hobezut-11.jpg" /></a>
                      <div className="product-content">
                        <h3 className="product-name">
                          <a href="hobezut-pci-2-pi-11.aspx">
                            HOBEZUT</a></h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 element-item">
                    <div className="product-box">
                      <a href="siro-ho-bezut-pci-2-pi-1.aspx" className="product-img">
                        <img src="res/product/siro-ho-bezut-1.jpg" alt="siro-ho-bezut-1.jpg" /></a>
                      <div className="product-content">
                        <h3 className="product-name">
                          <a href="siro-ho-bezut-pci-2-pi-1.aspx">
                            Siro ho bezut</a></h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 element-item">
                    <div className="product-box">
                      <a href="vien-ngam-ho-bezut-pci-2-pi-2.aspx" className="product-img">
                        <img src="res/product/vien-ngam-ho-bezut-2.jpg" alt="vien-ngam-ho-bezut-2.jpg" /></a>
                      <div className="product-content">
                        <h3 className="product-name">
                          <a href="vien-ngam-ho-bezut-pci-2-pi-2.aspx">
                            Viên ngậm ho bezut</a></h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 element-item">
                    <div className="product-box">
                      <a href="calcium-mumekids-10-pci-2-pi-8.aspx" className="product-img">
                        <img src="res/product/calcium-mumekids-10-8.jpg" alt="calcium-mumekids-10-8.jpg" /></a>
                      <div className="product-content">
                        <h3 className="product-name">
                          <a href="calcium-mumekids-10-pci-2-pi-8.aspx">
                            Calcium mumekids 10</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrapper-comment">
                <div className="fb-comments" data-href="http://www.bezut.vn/vien-ngam-ho-bezut-khong-duong-pci-2-pi-5.aspx" data-width={675} data-numposts={5} data-colorscheme="light">
                </div>
              </div>
      </div>
      )
    }
  }
}

export { Main as default }
