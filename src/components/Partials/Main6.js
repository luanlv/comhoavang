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
      const products = this.props.products || []
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
                  {products.map((el, index) => {
                    return (
                      <div key={index} className="col-xs-4 element-item">
                        <div className="product-box">
                          <Link to={'/san-pham/' + el.slug} className="product-img">
                            <img src={el.coverUrl} alt={el.name} /></Link>
                          <div className="product-content">
                            <h3 className="product-name">
                              <Link to={'/san-pham/' + el.slug}>
                                {el.name}</Link></h3>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
      </div>
      )
    }
  }
}

export { Main as default }
