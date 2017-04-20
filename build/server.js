require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 177);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(17);
/* unused harmony reexport Request */
/* unused harmony reexport Headers */
/* unused harmony reexport Response */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return localFetch; });
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





__WEBPACK_IMPORTED_MODULE_1_node_fetch___default.a.Promise = __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a;
__WEBPACK_IMPORTED_MODULE_1_node_fetch__["Response"].Promise = __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a;

function localUrl(url) {
  if (url.startsWith('//')) {
    return `https:${url}`;
  }

  if (url.startsWith('http')) {
    return url;
  }

  return `http://${__WEBPACK_IMPORTED_MODULE_2__config__["e" /* host */]}${url}`;
}

function localFetch(url, options) {
  return __WEBPACK_IMPORTED_MODULE_1_node_fetch___default()(localUrl(url), options);
}



/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_history__ = __webpack_require__(15);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Link extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleClick = event => {
      if (this.props.onClick) {
        this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_1__core_history__["a" /* default */].push(this.props.to);
    }, _temp;
  }

  render() {
    const _props = this.props,
          { to, children } = _props,
          props = _objectWithoutProperties(_props, ['to', 'children']);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      _extends({ href: to }, props, { onClick: this.handleClick }),
      children
    );
  }
}

Link.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func
};
Link.defaultProps = {
  onClick: null
};
/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = needFetch;

function needFetch() {
  if (false) {
    console.log('first');
    window.firstTime = true;
    return false;
  }
  console.log('second');
  return true;
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-redux-loading-bar");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Partials_Header__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Partials_Footer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Partials_MenuMobile__ = __webpack_require__(13);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Layout.css';
// import Header from '../Header';
// import Feedback from '../Feedback';
// import Footer from '../Footer';





class Layout extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  componentDidMount() {
    console.log('test ok');
    if (false) {
      window.myfunload();
    }
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'wrapper' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar___default.a, { showFastActions: true, maxProgress: 80, progressIncrease: 40, style: { backgroundColor: 'red', zIndex: 1000, height: '2px' } }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Partials_Header__["a" /* default */], null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
      this.props.children,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Partials_Footer__["a" /* default */], null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Partials_MenuMobile__["a" /* default */], null)
    );
  }
}

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Aside; });



class Aside extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'colAside' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'col-md-12 col-xs-6' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'col-md-12 col-xs-6' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'adv' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: '/' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/hotline.jpg', alt: 'Hotline' })
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'col-md-12 col-xs-6' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'col-md-12 col-xs-6' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'wrap-video' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: 'https://www.youtube.com/watch?v=L74dhO4i-0w', target: '_blank', className: 'videob' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/video-com.jpg',
                alt: 'video-com.jpg' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'ico-play' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'video-content' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                { className: 'video-name' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                  { to: '/' },
                  'R\u1ED9n r\xE0ng ng\xE0y h\u1ED9i v\u0103n h\xF3a C\u1ED1m M\u1EC5 Tr\xEC'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { className: 'list-video' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/bai-viet/cach-lam-che-com-thom-mat', className: 'video-box' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'video-img' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/image/R8cvtxxu3g-che-com-03.jpg', id: 'ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_lstVideo_ctrl0_lstListVideo_ctrl0_Img3', alt: 'R8cvtxxu3g-che-com-03.jpg' })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'video-content' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'video-name' },
                    'C\xE1ch b\u1EA3o qu\u1EA3n v\xE0 s\u1EED d\u1EE5ng C\u1ED1m M\u1EC5 Tr\xEC '
                  ),
                  ' '
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/bai-viet/com-me-tri-thom-ngon-duoc-lam-cong-phu-the-nao', className: 'video-box' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'video-img' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/image/5n9GkKlQVI-01dc4a05-cc41-48f9-8ee7-b10058293fef.jpg', id: 'ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_lstVideo_ctrl0_lstListVideo_ctrl1_Img3', alt: 'C\u1ED1m M\u1EC5 Tr\xEC th\u01A1m ngon \u0111\u01B0\u1EE3c l\xE0m c\xF4ng phu th\u1EBF n\xE0o.jpg' })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'video-content' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'video-name' },
                    'C\u1ED1m M\u1EC5 Tr\xEC th\u01A1m ngon \u0111\u01B0\u1EE3c l\xE0m c\xF4ng phu th\u1EBF n\xE0o?'
                  ),
                  ' '
                )
              )
            )
          )
        )
      )
    );
  }
}



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });



class Footer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'footer' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'footer-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'footer-box mobi480h' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'dangky' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: 'http://online.gov.vn/CustomWebsiteDisplay.aspx?DocId=27183', target: '_blank' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/dangky.png', alt: 'img' })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'footer-right' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'row' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-md-4 col-sm-6 col-xs-12' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h2',
                  null,
                  'M\xD3N NGON T\u1EEA C\u1ED0M '
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'ul',
                  { className: 'list-footer' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/bai-viet/cach-lam-che-com-thom-mat' },
                      'Ch\xE8 c\u1ED1m',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/bai-viet/cach-lam-cha-com-ngon-tai-nha' },
                      'Ch\u1EA3 c\u1ED1m',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/bai-viet/com-xao---mon-an-binh-di-goi-nho-mua-thu' },
                      'C\u1ED1m x\xE0o',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/bai-viet/tom-chien-com-xanh-don-gian-la-mieng' },
                      'T\xF4m chi\xEAn c\u1ED1m',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/bai-viet/mon-trung-ran-com-ngon-cho-ban-vung-ve' },
                      'Tr\u1EE9ng c\u1ED1m',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right' })
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-md-4 col-sm-6 col-xs-12' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h2',
                  null,
                  'TH\xD4NG TIN WEBSITE'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'ul',
                  { className: 'list-footer' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/lien-he-dat-hang' },
                      'H\xECnh th\u1EE9c thanh to\xE1n',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/lien-he-dat-hang' },
                      'Ch\xEDnh s\xE1ch v\u1EADn chuy\u1EC3n, giao nh\u1EADn',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/lien-he-dat-hang' },
                      'Li\xEAn h\u1EC7 \u0111\u1EB7t h\xE0ng',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icona-left icon-chevron-right' })
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-md-4 col-sm-12 col-xs-12' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h2',
                  null,
                  'C\u01A0 S\u1EDE S\u1EA2N XU\u1EA4T C\u1ED0M M\u1EC4 TR\xCC'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'ul',
                  { className: 'address-box list-footer' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'add-1' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      null,
                      '\u0110\u1ECBa ch\u1EC9 : 128 \u2013 ch\u1EE3 M\u1EC5 Tr\xEC h\u1EA1, qu\u1EADn Nam T\u1EEB Li\xEAm, TP.H\xE0 N\u1ED9i'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'add-2' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      null,
                      '\u0110i\u1EC7n tho\u1EA1i : 097 331 8868'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'add-5' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      null,
                      'Email: ',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'a',
                        { href: 'mailto:commetri295@gmail.com' },
                        'commetri295@gmail.com'
                      )
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'footer-box mobi480s' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'footer-logo' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: 'http://www.vinacare.vn/', id: 'ctl00_ctl00_ctl00_A1' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/logo-footer.png', alt: 'img' })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'dangky' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: 'http://online.gov.vn/CustomWebsiteDisplay.aspx?DocId=27183', target: '_blank' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/dangky.png', alt: 'img' })
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'copyright' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'col-md-6' },
            '\xA9 2017 COMHOAVANG. All rights reserved | ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: 'http://vnguy.com/', target: '_blank' },
              'Thiet Ke Web'
            ),
            ' ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: 'http://vnguy.com/', target: '_blank' },
              'VnGuy.Com'
            )
          )
        )
      )
    );
  }
}



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });



class Header extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'header' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'logo' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
            { to: '/' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/logo-com.png', alt: 'logo' })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'header-right' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'button-menu mobile-showhide' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'panel-left', href: '#menumobile' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'icon-bar' },
                'bar'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'icon-bar' },
                'bar'
              ),
              ' ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'icon-bar' },
                'bar'
              ),
              ' '
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '#searchbox', className: 'finda mobile-showhide' },
            'search'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { id: 'menu', className: 'desktop-showhide sf-js-enabled', style: { touchAction: 'pan-y' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'home' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/' },
                'Trang ch\u1EE7'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/san-pham', className: 'sf-with-ul' },
                'S\u1EA3n ph\u1EA9m'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/mon-ngon' },
                'M\xF3n ngon'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/tin-tuc' },
                'Tin t\u1EE9c'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'last' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/lien-he-dat-hang' },
                'Li\xEAn h\u1EC7 \u0111\u1EB7t h\xE0ng'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'header-bottom' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { id: 'searchbox', className: 'search-form' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'submit', name: 'ctl00$ctl00$ctl00$btnSearch', value: '', id: 'ctl00_ctl00_ctl00_btnSearch',
                className: 'search-btn' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'search-input' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'ctl00$ctl00$ctl00$txtSearch', type: 'text', id: 'ctl00_ctl00_ctl00_txtSearch',
                  className: 'search-text' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'hidden', name: 'ctl00$ctl00$ctl00$txtSearch_TextBoxWatermarkExtender_ClientState',
                  id: 'ctl00_ctl00_ctl00_txtSearch_TextBoxWatermarkExtender_ClientState' })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'share desktop-showhide' },
              'Follow me on ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { target: '_blank', href: 'https://www.facebook.com/comhoavang' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/fa-1.png', alt: '' })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'hotline desktop-showhide' },
              'T\u1ED5ng \u0111\xE0i CSKH: ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                null,
                '097 331 8868'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'clr' })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'clr' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'header-bgr desktop-showhide' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'header-bgl desktop-showhide' })
    );
  }
}



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuMobile; });


class MenuMobile extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  closeMenu() {
    if (false) {
      console.log('close');
      $('#close-menu').trigger('click');
    }
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'menumobile', className: 'mobile-panel mobile-left', style: { transform: 'translate3d(-120%, 0px, 0px)' } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'close-menu' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', { id: 'close-menu', href: '#menumobile', className: 'glyphicon glyphicon-remove-circle' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'menu-in' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'menu-mobile' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'logo' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: '/',
                onClick: this.closeMenu
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/logo-com.png', alt: 'logo com hoa vang' })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { className: 'menu-nav' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/san-pham', onClick: this.closeMenu },
                'S\u1EA3n ph\u1EA9m'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/san-pham/com-kho-hoa-vang', onClick: this.closeMenu },
                    'C\u1ED1m kh\xF4 hoa v\xE0ng'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/san-pham/cha-com', onClick: this.closeMenu },
                    'Ch\u1EA3 C\u1ED1m'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/san-pham/com-non-me-tri', onClick: this.closeMenu },
                    'C\u1ED1m Non M\u1EC5 Tr\xEC'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/mon-ngon', onClick: this.closeMenu },
                'M\xD3N NGON'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/danh-muc/mon-ngon-tu-com', onClick: this.closeMenu },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon-chevron-right iconl' }),
                    'M\xF3n ngon t\u1EEB C\u1ED1m'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/danh-muc/cach-lam-mon-ngon-tai-nha', onClick: this.closeMenu },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon-chevron-right iconl' }),
                    'C\xE1ch l\xE0m m\xF3n ngon t\xE0i nh\xE0'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'active' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/tin-tuc', onClick: this.closeMenu },
                'TIN T\u1EE8C'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/danh-muc/su-kien', onClick: this.closeMenu },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon-chevron-right iconl' }),
                    'S\u1EF1 ki\u1EC7n'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/danh-muc/tin-tuc-tong-hop', onClick: this.closeMenu },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon-chevron-right iconl' }),
                    'Tin t\u1EE9c t\u1ED5ng h\u1EE3p'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'last' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/lien-he-dat-hang', onClick: this.closeMenu },
                'Li\xEAn h\u1EC7 \u0111\u1EB7t h\xE0ng'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mo-box' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'hotline' },
              'T\u1ED5ng \u0111\xE0i CSKH: ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                null,
                '097 331 8868'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mo-box' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'share' },
              'Follow me on ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { target: '_blank', href: 'https://www.facebook.com/comhoavang' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/assets/images/fa-1.png', alt: true })
              )
            )
          )
        )
      )
    );
  }
}



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(18);
/* harmony export (immutable) */ __webpack_exports__["a"] = setData;
/* eslint-disable import/prefer-default-export */



function setData(value = {}) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_DATA */],
    payload: {
      value
    }
  };
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
/* harmony default export */ __webpack_exports__["a"] = (false && __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()());

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("graphql-iso-date");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

const port = process.env.PORT || 3998;
/* harmony export (immutable) */ __webpack_exports__["a"] = port;

const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;
/* harmony export (immutable) */ __webpack_exports__["e"] = host;


const databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';
/* harmony export (immutable) */ __webpack_exports__["c"] = databaseUrl;


const mongoDBURL = 'mongodb://localhost/comhoavang';
/* harmony export (immutable) */ __webpack_exports__["b"] = mongoDBURL;


const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID }

};
/* harmony export (immutable) */ __webpack_exports__["d"] = analytics;


const auth = {

  jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

  // https://developers.facebook.com/
  facebook: {
    id: process.env.FACEBOOK_APP_ID || '186244551745631',
    secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
  },

  // https://cloud.google.com/console/project
  google: {
    id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
    secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
  },

  // https://apps.twitter.com/
  twitter: {
    key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
    secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
  }

};
/* harmony export (immutable) */ __webpack_exports__["f"] = auth;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable import/prefer-default-export */
const SET_SETTING = 'SET_SETTING';
/* harmony export (immutable) */ __webpack_exports__["c"] = SET_SETTING;

const SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';
/* harmony export (immutable) */ __webpack_exports__["b"] = SET_RUNTIME_VARIABLE;


const SET_DATA = 'SET_DATA';
/* harmony export (immutable) */ __webpack_exports__["a"] = SET_DATA;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var AdminRequire = Promise.resolve().then((require => {
  return {
    App: __webpack_require__(92).default,
    Dashboard: __webpack_require__(93).default,
    Library: __webpack_require__(97).default,
    Setting: __webpack_require__(108).default,
    Editor: __webpack_require__(95).default,
    ListNews: __webpack_require__(103).default,
    EditNews: __webpack_require__(102).default,
    EditFoods: __webpack_require__(99).default,
    ListFoods: __webpack_require__(100).default,
    EditProduct: __webpack_require__(105).default,
    ListProduct: __webpack_require__(106).default
  };
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

module.exports = AdminRequire;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(17);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const sequelize = new __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a(__WEBPACK_IMPORTED_MODULE_1__config__["c" /* databaseUrl */], {
  define: {
    freezeTableName: true
  }
});

/* harmony default export */ __webpack_exports__["a"] = (sequelize);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(150);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(151);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = __webpack_require__(149);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var id = _step.value;

      if (--inserted[id] <= 0) {
        var elem = document.getElementById(prefix + id);
        if (elem) {
          elem.parentNode.removeChild(elem);
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && btoa) {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("universal-router");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var Waypoint = __webpack_require__(171);


const Dragger = __WEBPACK_IMPORTED_MODULE_2_antd__["Upload"].Dragger;

var list = [];
for (let i = 0; i < 50; i++) {
  list.push(i);
}

const props = {
  name: 'image',
  multiple: true,
  showUploadList: false,
  action: '/upload/image'
};

class ImageSelect extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      copyImageUrl: 'abc',
      copied: false,
      uploadArea: false,
      visible: false,
      filter: '',
      time: new Date().toISOString(),
      imgs: [],
      selectedImage: {}
    };
    this.fetchImage(40, this.state.time);
  }

  fetchImage(num, time, reset = true) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ listImage(num: ' + num + ', time: "' + time + '", filter: "' + _this.state.filter + '") { _id slug name type fileSize dimensions {width height} userUpload created_at } }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();

      _this.setState(function (prevState) {
        if (data.listImage.length > 0) {
          let newImgs;
          if (reset) {
            newImgs = data.listImage;
          } else {
            newImgs = prevState.imgs.concat(data.listImage);
          }
          return _extends({}, prevState, {
            imgs: newImgs,
            time: newImgs[newImgs.length - 1].created_at
          });
        }
      });
    })();
  }
  showModal(el) {
    this.setState({
      visible: true,
      selectedImage: el
    });
  }
  handleOk(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }

  beforeUpload(file) {
    const isImage = file.type.match('image*');
    if (!isImage) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('You can only upload Image file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('Image must smaller than 5MB!');
    }
    return isImage && isLt5M;
  }

  _handleWaypointEnter() {
    alert('loading more ...');
  }

  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      this.setState(prevState => {
        var newImgs = prevState.imgs;
        newImgs.unshift(info.file.response);
        return _extends({}, prevState, {
          imgs: newImgs
        });
      });
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error(`${info.file.name} file upload failed.`);
    }
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
        { className: 'padding-5 margin-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
          { sm: 16 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
            {
              onClick: () => {
                this.setState((preState, curProps) => {
                  return _extends({}, preState, {
                    uploadArea: !preState.uploadArea
                  });
                });
              }
            },
            'Th\xEAm \u1EA3nh'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
          { sm: 8 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Input"], { size: 'large', placeholder: 'Search by name',
            onChange: e => {
              let newInput = e.target.value;
              this.setState(prevState => {
                return _extends({}, prevState, {
                  filter: newInput
                });
              });
              this.fetchImage(40, this.state.time);
            }
          })
        )
      ),
      this.state.uploadArea && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
        { className: 'padding-5 margin-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginTop: 16, height: 180 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Dragger,
            _extends({}, props, {
              onChange: info => this.onChange(info),
              beforeUpload: this.beforeUpload
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-drag-icon' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Icon"], { type: 'inbox' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-text' },
              'K\xE9o th\u1EA3 c\xE1c c\xE1c file v\xE0o b\u1EA5t k\xEC n\u01A1i n\xE0o tr\xEAn v\xF9ng n\xE0y \u0111\u1EC3 t\u1EA3i l\xEAn.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-hint' },
              'Ho\u1EB7c b\u1EA5m v\xE0o v\xF9ng n\xE0y \u0111\u1EC3 ch\u1ECDn \u1EA3nh'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { background: '#ECECEC' } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
          null,
          this.state.imgs.map((el, key) => {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
              { xs: 12, sm: 6, md: 4, lg: 4, key: key, className: 'padding-5' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
                { bordered: false, className: 'imgWr',
                  onClick: () => this.props.handleSelect(el)
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: "/image/small/" + el.name })
              )
            );
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
            { xs: 12, sm: 6, md: 4, lg: 4, className: 'padding-5' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
              { bordered: false, className: 'imgWr',
                onClick: () => this.fetchImage(40, this.state.imgs[this.state.imgs.length - 1].created_at, false)
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://www.loadebar.com/images/template/load-more.png' })
            )
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ImageSelect);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_resize_detector__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_resize_detector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_resize_detector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ImageSelect__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CKEditor; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* global CKEDITOR */





class CKEditor extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      console.log(e);
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      oldEditorSize: 0,
      isEndEditor: false,
      showModalSelectImage: false,
      selectImageType: ''
    };
    this.elementName = "editor_" + this.props.id;
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  handleSelectImage(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        modalSelectImage: false
      });
    });
    this.editor.insertHtml('<p style="text-align:center"><img alt="eS9cTTQzZT-3.jpg" src="' + '/image/' + img.name + '" /></p><br/>');
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { className: 'padding-5' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
            id: 'addImage',
            style: { marginRight: 10 },
            onClick: () => this.showModalSelectImage('editor')
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_resize_detector___default.a, { handleWidth: true, handleHeight: true, onResize: (w, h) => {
              let diff = h - this.state.oldEditorSize;
              if (this.state.isEndEditor && diff > 0) {
                var y = $(window).scrollTop();
                $(window).scrollTop(y + diff);
              }
              this.setState({
                oldEditorSize: h
              });
            } }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: 'toolbarLocation' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { name: this.elementName, defaultValue: this.props.value }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { height: 20 } }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor___default.a, { onChange: isVisible => {
              this.setState({
                isEndEditor: !isVisible
              });
            } })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Modal"],
            {
              style: { top: 30 },
              width: '90%',
              title: 'Basic Modal', visible: this.state.modalSelectImage,
              onOk: this.handleOk, onCancel: this.handleCancel
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img) })
          )
        )
      )
    );
  }

  componentDidMount() {
    let configuration = {
      // removePlugins : 'magicline',
      extraPlugins: 'autogrow,image2,sharedspace',
      uploadUrl: '/upload/imageCKEditor',
      disallowedContent: 'img{width,height}',
      sharedSpaces: {
        top: 'toolbarLocation'
      }
    };
    this.editor = CKEDITOR.replace(this.elementName, configuration);
    CKEDITOR.instances[this.elementName].on("change", function () {
      let data = CKEDITOR.instances[this.elementName].getData();
      this.props.onChange(data);
    }.bind(this));

    CKEDITOR.on('instanceReady', function (ev) {
      ev.editor.focus();
    });
    $("#toolbarLocation").sticky({ topSpacing: 0 });

    this.editor.addCommand("mySimpleCommand", { // create named command
      exec: function (edt) {
        $("#addImage").trigger("click");
      }
    });

    this.editor.ui.addButton('SuperButton', { // add new button and bind our command
      label: "Click me",
      command: 'mySimpleCommand',
      toolbar: 'insert',
      icon: '/assets/add-image.png'
    });
  }

  componentWillUnmount() {
    console.log('destroy');
    this.editor.destroy();
  }

}



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);




const Dragger = __WEBPACK_IMPORTED_MODULE_1_antd__["Upload"].Dragger;

class ImageUpload extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadArea: false,
      visible: false,
      selectedImage: {}
    };
  }

  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      this.props.handleUpload(info.file.response);
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error(`${info.file.name} file upload failed.`);
    }
  }

  beforeUpload(file) {
    const isImage = file.type.match('image*');
    if (!isImage) {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('You can only upload Image file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Image must smaller than 5MB!');
    }
    return isImage && isLt5M;
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Dragger,
      {
        name: 'image',
        multiple: this.props.isMultiple,
        showUploadList: false,
        action: '/upload/image',
        onChange: info => this.onChange(info),
        beforeUpload: this.beforeUpload
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'ant-upload-drag-icon' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'inbox' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'ant-upload-text' },
        'K\xE9o th\u1EA3 c\xE1c c\xE1c file v\xE0o b\u1EA5t k\xEC n\u01A1i n\xE0o tr\xEAn v\xF9ng n\xE0y \u0111\u1EC3 t\u1EA3i l\xEAn.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'ant-upload-hint' },
        'Ho\u1EB7c b\u1EA5m v\xE0o v\xF9ng n\xE0y \u0111\u1EC3 ch\u1ECDn \u1EA3nh'
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ImageUpload);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slug__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_slug__);




class EditableTagGroup extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.handleClose = removedTag => {
      const tags = this.state.tags.filter(tag => tag.slug !== removedTag);
      this.setState({ tags });
      this.props.handleChange(tags || []);
    };

    this.showInput = () => {
      this.setState({ inputVisible: true }, () => this.input.focus());
    };

    this.handleInputChange = e => {
      this.setState({ inputValue: e.target.value });
    };

    this.handleInputConfirm = () => {
      const state = this.state;
      const inputValue = state.inputValue;
      let tags = state.tags;
      if (inputValue && indexByField(tags, 'slug', __WEBPACK_IMPORTED_MODULE_2_slug___default()(inputValue, { lower: true }))) {
        tags = [...tags, { name: inputValue, slug: __WEBPACK_IMPORTED_MODULE_2_slug___default()(inputValue, { lower: true }) }];
      }
      this.setState({
        tags,
        inputVisible: false,
        inputValue: ''
      });
      this.props.handleChange(tags || []);
    };

    this.saveInputRef = input => this.input = input;

    this.state = {
      tags: this.props.defaultValue || [],
      inputVisible: false,
      inputValue: ''
    };
  }

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      tags.map((tag, index) => {
        const isLongTag = tag.name.length > 20;
        const tagElem = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Tag"],
          { key: index, closable: true, afterClose: () => this.handleClose(tag) },
          isLongTag ? `${tag.name.slice(0, 20)}...` : tag.name
        );
        return isLongTag ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Tooltip"],
          { title: tag.name },
          tagElem
        ) : tagElem;
      }),
      inputVisible && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        ref: this.saveInputRef,
        type: 'text', size: 'small',
        style: { width: 78 },
        value: inputValue,
        onChange: this.handleInputChange,
        onBlur: this.handleInputConfirm,
        onPressEnter: this.handleInputConfirm
      }),
      !inputVisible && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
        { size: 'small', type: 'dashed', onClick: this.showInput },
        '+ New Tag'
      )
    );
  }
}

function indexByField(list = [], fieldName, value) {
  let lenth = list.length;
  for (let i = 0; i < lenth; i++) {
    if (list[i][fieldName] === value) {
      return i;
    }
  }
  return -1;
}

/* harmony default export */ __webpack_exports__["a"] = (EditableTagGroup);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("graphql-type-json");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _en_US = __webpack_require__(146);

var _en_US2 = _interopRequireDefault(_en_US);

var _en_US3 = __webpack_require__(34);

var _en_US4 = _interopRequireDefault(_en_US3);

var _objectAssign = __webpack_require__(179);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Merge into a locale object
var locale = {
    lang: (0, _objectAssign2["default"])({
        placeholder: 'Select date',
        rangePlaceholder: ['Start date', 'End date']
    }, _en_US2["default"]),
    timePickerLocale: (0, _objectAssign2["default"])({}, _en_US4["default"])
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports["default"] = locale;
module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var locale = {
    placeholder: 'Select time'
};
exports["default"] = locale;
module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });



class Main extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    if (this.props.products.length < 1) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        'Loading...'
      );
    } else {
      const products = this.props.products;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'colContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'bannerSub' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'slider-wrapper' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'head-la head-pro' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: 'title text-uppercase' },
            's\u1EA3n ph\u1EA9m'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrap-section' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'product-tb row isotopelist listfull' },
            products.map((el, index) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-xs-12 element-item', key: index },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'product-box' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/san-pham/' + el.slug, className: 'product-img' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl, alt: el.title })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'product-content' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h3',
                      { className: 'product-name' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                        { to: '/san-pham/' + el.slug },
                        el.name
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'description' },
                      el.description,
                      ' ...'
                    )
                  )
                )
              );
            })
          )
        )
      );
    }
  }
}



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sequelize__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserLogin__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserClaim__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UserProfile__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__User__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__UserLogin__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__UserClaim__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__UserProfile__["a"]; });
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasMany(__WEBPACK_IMPORTED_MODULE_2__UserLogin__["a" /* default */], {
  foreignKey: 'userId',
  as: 'logins',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasMany(__WEBPACK_IMPORTED_MODULE_3__UserClaim__["a" /* default */], {
  foreignKey: 'userId',
  as: 'claims',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasOne(__WEBPACK_IMPORTED_MODULE_4__UserProfile__["a" /* default */], {
  foreignKey: 'userId',
  as: 'profile',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

function sync(...args) {
  return __WEBPACK_IMPORTED_MODULE_0__sequelize__["a" /* default */].sync(...args);
}

/* harmony default export */ __webpack_exports__["a"] = ({ sync });


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  category: String,
  slug: { type: String, required: true, unique: true, index: true },
  title: String,
  public: { type: Boolean, default: false },
  coverUrl: String,
  description: String,
  body: String,
  view: { type: Number, default: 0 },
  tags: [Schema.Types.Mixed],
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Post', schema);

module.exports = model;

// get ( news )

module.exports.getNews = (root, { page }) => {
  let listCategoryInNews = ['su-kien', 'tin-tuc-tong-hop'];

  return new Promise((resolve, reject) => {

    model.count({ category: { $in: listCategoryInNews } }).exec((err, count) => {
      if (err) return reject(err);
      model.find({ category: {
          $in: listCategoryInNews
        } }).sort({ created_at: -1 }).skip((page - 1) * 16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count / 16) + 1,
          data: res
        });
      });
    });
  });
};

module.exports.getNewsInCategory = (root, { page, slug }) => {

  return new Promise((resolve, reject) => {

    model.count({ category: slug }).exec((err, count) => {
      if (err) return reject(err);
      model.find({ category: slug }).sort({ created_at: -1 }).skip((page - 1) * 16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count / 16) + 1,
          data: res
        });
      });
    });
  });
};

module.exports.getOnePost = (root, { slug }) => {
  return new Promise((resolve, reject) => {
    model.findOne({ slug: slug }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

// get ( food )

module.exports.getFoodNews = (root, { page }) => {
  let listCategoryInNews = ['mon-ngon-tu-com', 'cach-lam-mon-ngon-tai-nha'];
  return new Promise((resolve, reject) => {
    model.count({ category: { $in: listCategoryInNews } }).exec((err, count) => {
      if (err) return reject(err);
      model.find({ category: {
          $in: listCategoryInNews
        } }).sort({ created_at: -1 }).skip((page - 1) * 16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count / 16) + 1,
          data: res
        });
      });
    });
  });
};

// mutation

module.exports.newPost = (root, { category, slug, title, coverUrl, description, body, tags }) => {
  let data = {
    category,
    slug,
    title,
    coverUrl,
    description,
    body,
    tags
  };
  return new Promise((resolve, reject) => {
    model.create(data, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Post',
  description: 'Post object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    category: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    slug: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    public: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"])
    },
    coverUrl: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    title: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    description: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    body: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    view: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    tags: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a)
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7);

var schema = new mongoose.Schema({
  id: { type: String },
  ssr: { type: Boolean, default: true },
  css: { type: String, default: '' },
  scriptTop: { type: String, default: '' },
  scriptBottom: { type: String, default: '' }
}, {
  collection: 'setting'
});

let model = mongoose.model('Setting', schema);

module.exports = model;

module.exports.getSetting = () => {
  return new Promise((resolve, reject) => {
    model.findOne({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.update = (root, { ssr }) => {
  let query = {};
  if (ssr !== undefined) query.ssr = ssr;
  return new Promise((resolve, reject) => {
    model.findOneAndUpdate({ id: 'setting' }, { $set: query }, { returnNewDocument: true, new: true }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);




// Define our user type, with two string fields; `id` and `name`
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Setting',
  description: 'Setting object',
  fields: () => ({
    id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    ssr: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"])
    },
    css: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    scriptTop: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    scriptBottom: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    }
  })
}));

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(140);
    var insertCss = __webpack_require__(22);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/index.js??ref--2-2!./ErrorPage.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/index.js??ref--2-2!./ErrorPage.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("gm");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("passport-facebook");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_graphql__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pretty_error__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_pretty_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_App__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Html__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_HtmlAdmin__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes_error_ErrorPage__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage_css__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_passport__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__data_models__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__data_schema__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__assets_json__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__assets_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__assets_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_bluebird__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__store_configureStore__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__actions_runtime__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__actions_setting__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__config__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_mongoose__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_mongoose__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new __WEBPACK_IMPORTED_MODULE_19_bluebird___default.a(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return __WEBPACK_IMPORTED_MODULE_19_bluebird___default.a.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */










// import UniversalRouter from 'universal-router';










 // eslint-disable-line import/no-unresolved





const session = __webpack_require__(157);
const MongoStore = __webpack_require__(153)(session);

//mongoose

__WEBPACK_IMPORTED_MODULE_24_mongoose___default.a.Promise = __WEBPACK_IMPORTED_MODULE_19_bluebird___default.a;
connect();
const Setting = __WEBPACK_IMPORTED_MODULE_24_mongoose___default.a.model('Setting');
// var User =  mongoose.model('User', require('./data/models/user/userSchema'))
//end


const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, 'public')));
app.use('/assets', (req, res) => {
  res.sendStatus(400);
});
app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json());
app.use(session({
  cookie: { maxAge: 24 * 3600 * 1000 * 30 },
  resave: true,
  saveUninitialized: false,
  secret: 'luuVANluan',
  ttl: 7 * 24 * 60 * 60,
  store: new MongoStore({ mongooseConnection: __WEBPACK_IMPORTED_MODULE_24_mongoose___default.a.connection })
}));
app.use(__WEBPACK_IMPORTED_MODULE_14__core_passport__["a" /* default */].initialize());
app.use(__WEBPACK_IMPORTED_MODULE_14__core_passport__["a" /* default */].session());
app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());
//
// Authentication
// -----------------------------------------------------------------------------

if (false) {
  app.enable('trust proxy');
}

app.use('/image', __webpack_require__(132));
app.use('/api', __webpack_require__(130));
app.use('/upload', __webpack_require__(133));
app.use('/auth', __webpack_require__(131));
//
// Register API middleware
// -----------------------------------------------------------------------------

app.use('/graphql', __WEBPACK_IMPORTED_MODULE_4_express_graphql___default()(req => ({
  schema: __WEBPACK_IMPORTED_MODULE_16__data_schema__["a" /* default */],
  graphiql: false,
  rootValue: { request: req },
  pretty: false
})));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------

app.get('*', (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    let routeUrl = req.originalUrl;
    let isAdmin = routeUrl.slice(0, 6) === '/admin';
    try {
      let setting = yield Setting.findOne({});
      const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__store_configureStore__["a" /* default */])({
        data: {
          post: {
            needUpdate: true,
            value: {}
          },
          foodNews: {
            needUpdate: true,
            value: {}
          },
          news: {
            needUpdate: true,
            value: {}
          },
          newsInCategory: {
            needUpdate: true,
            value: {}
          },
          product: {
            needUpdate: true,
            value: {}
          },
          products: {
            needUpdate: true,
            value: []
          }
        },
        user: req.user || null
      }, {
        cookie: req.headers.cookie
      });
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__actions_setting__["a" /* setSetting */])({
        value: setting.ssr || true
      }));
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21__actions_runtime__["a" /* setRuntimeVariable */])({
        name: 'initialNow',
        value: Date.now()
      }));
      const css = new Set();

      // Global (context) variables that can be easily accessed from any React component
      // https://facebook.github.io/react/docs/context.html
      const context = {
        // Enables critical path CSS rendering
        // https://github.com/kriasoft/isomorphic-style-loader
        insertCss: function (...styles) {
          // eslint-disable-next-line no-underscore-dangle
          styles.forEach(function (style) {
            return css.add(style._getCss());
          });
        },
        // Initialize a new Redux store
        // http://redux.js.org/docs/basics/UsageWithReact.html
        store
      };

      const route = yield __WEBPACK_IMPORTED_MODULE_17__core_router__["a" /* default */].resolve(_extends({}, context, {
        path: req.path,
        query: req.query
      }));

      if (route.redirect) {
        res.redirect(route.status || 302, route.redirect);
        return;
      }

      const data = _extends({}, route);

      if (data.disableSSR || !store.getState().setting.ssr) {
        data.children = '';
      } else {
        data.children = __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9__components_App__["a" /* default */],
          { context: context },
          route.component
        ));
      }

      data.styles = [{ id: 'css', cssText: [...css].join('') }];

      data.scripts = [__WEBPACK_IMPORTED_MODULE_18__assets_json___default.a.vendor.js, __WEBPACK_IMPORTED_MODULE_18__assets_json___default.a.client.js];
      data.state = context.store.getState();
      if (__WEBPACK_IMPORTED_MODULE_18__assets_json___default.a[route.chunk]) {
        data.scripts.push(__WEBPACK_IMPORTED_MODULE_18__assets_json___default.a[route.chunk].js);
      }

      if (isAdmin) {
        const html = __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_HtmlAdmin__["a" /* default */], _extends({}, data, { isAdmin: isAdmin })));
        res.status(route.status || 200);
        res.send(`<!doctype html>${html}`);
      } else {
        const html = __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Html__["a" /* default */], _extends({}, data, { isAdmin: isAdmin, scriptTop: setting.scriptTop || '', scriptBottom: setting.scriptBottom || '', css: setting.css || '' })));
        res.status(route.status || 200);
        res.send(`<!doctype html>${html}`);
      }
    } catch (err) {
      next(err);
    }
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new __WEBPACK_IMPORTED_MODULE_8_pretty_error___default.a();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  const html = __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_10__components_Html__["a" /* default */],
    {
      title: 'Internal Server Error',
      description: err.message,
      styles: [{ id: 'css', cssText: __WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage_css___default.a._getCss() }] // eslint-disable-line no-underscore-dangle
    },
    __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__routes_error_ErrorPage__["a" /* ErrorPageWithoutStyle */], { error: err }))
  ));
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */
__WEBPACK_IMPORTED_MODULE_15__data_models__["a" /* default */].sync().catch(err => console.error(err.stack)).then(() => {
  app.listen(__WEBPACK_IMPORTED_MODULE_23__config__["a" /* port */], () => {
    console.log(`The server is running at http://localhost:${__WEBPACK_IMPORTED_MODULE_23__config__["a" /* port */]}/`);
  });
});
/* eslint-enable no-console */

function connect() {
  var options = { server: { socketOptions: { keepAlive: 1 } }, promiseLibrary: __WEBPACK_IMPORTED_MODULE_19_bluebird___default.a };
  return __WEBPACK_IMPORTED_MODULE_24_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_23__config__["b" /* mongoDBURL */], options).connection;
}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _en_US = __webpack_require__(33);

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _en_US2["default"];
module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = __webpack_require__(178);

var _moment2 = _interopRequireDefault(_moment);

var _en_US = __webpack_require__(147);

var _en_US2 = _interopRequireDefault(_en_US);

var _en_US3 = __webpack_require__(33);

var _en_US4 = _interopRequireDefault(_en_US3);

var _en_US5 = __webpack_require__(34);

var _en_US6 = _interopRequireDefault(_en_US5);

var _en_US7 = __webpack_require__(51);

var _en_US8 = _interopRequireDefault(_en_US7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_moment2["default"].locale('en');
exports["default"] = {
    locale: 'en',
    Pagination: _en_US2["default"],
    DatePicker: _en_US4["default"],
    TimePicker: _en_US6["default"],
    Calendar: _en_US8["default"],
    Table: {
        filterTitle: 'Filter Menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        emptyText: 'No Data',
        selectAll: 'Select All',
        selectInvert: 'Select Invert'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel'
    },
    Transfer: {
        notFoundContent: 'Not Found',
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Select: {
        notFoundContent: 'Not Found'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file'
    }
};
module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(18);
/* harmony export (immutable) */ __webpack_exports__["a"] = setRuntimeVariable;
/* eslint-disable import/prefer-default-export */



function setRuntimeVariable({ name, value }) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* SET_RUNTIME_VARIABLE */],
    payload: {
      name,
      value
    }
  };
}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(18);
/* harmony export (immutable) */ __webpack_exports__["a"] = setSetting;
/* eslint-disable import/prefer-default-export */



function setSetting({ value }) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* SET_SETTING */],
    payload: {
      value
    }
  };
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  // Integrate Redux
  // http://redux.js.org/docs/basics/UsageWithReact.html
  store: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    subscribe: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
    dispatch: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
    getState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
  }).isRequired
};

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */
class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent {

  componentDidMount() {}

  getChildContext() {
    return this.props.context;
  }

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
  }

}

App.propTypes = {
  context: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape(ContextType).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].element.isRequired
};
App.childContextTypes = ContextType;
/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(17);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class Html extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    const { title, description, styles, scripts, state, children } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'html',
      { className: 'no-js', lang: 'en' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'head',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'title',
          null,
          title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: description }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'referrer', content: 'unsafe-url' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'referrer', content: 'origin' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'referrer', content: 'origin-when-cross-origin' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic&subset=latin,vietnamese', rel: 'stylesheet', type: 'text/css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,300italic,400italic,700,700italic&subset=latin,vietnamese', rel: 'stylesheet', type: 'text/css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic&subset=latin,vietnamese', rel: 'stylesheet', type: 'text/css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', type: 'text/css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css', rel: 'stylesheet', type: 'text/css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: '/assets/styles/uniform-base.css', rel: 'stylesheet', type: 'text/css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: '/assets/styles/slick.css', rel: 'stylesheet', type: 'text/css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: '/assets/styles/jquery.ui.datepicker.css', rel: 'stylesheet', type: 'text/css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: '/assets/styles/lugo.datepicker.css', rel: 'stylesheet', type: 'text/css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: '/assets/styles/site.css', rel: 'stylesheet', type: 'text/css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: '/assets/styles/site-repond.css', rel: 'stylesheet' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', type: 'text/javascript' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js', type: 'text/javascript' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/assets/js/jquery.ui.datepicker-vi-VN.js', type: 'text/javascript' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/assets/js/jquery.easing.1.3.js', type: 'text/javascript' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/assets/js/jquery.mb.browser.min.js', type: 'text/javascript' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/assets/js/jquery.textheight.js', type: 'text/javascript' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/css/app.css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: this.props.css } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { dangerouslySetInnerHTML: { __html: this.props.scriptTop } })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'body',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          id: 'app'
          // eslint-disable-next-line react/no-danger
          , dangerouslySetInnerHTML: { __html: children }
        }),
        state && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', {
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML: { __html: `window.APP_STATE=${__WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default()(state, { isJSON: true })}` }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/assets/js/hoverIntent.js', type: 'text/javascript' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/assets/js/imagesloaded.pkgd.min.js', type: 'text/javascript' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/assets/js/bootstrap.min.js', type: 'text/javascript' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/assets/js/jquery.uniform.min.js', type: 'text/javascript' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/assets/js/isotope.pkgd.min.js', type: 'text/javascript' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/assets/js/slick.min.js', type: 'text/javascript' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/assets/js/jquery.panel.mobile.js' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/assets/js/jquery.main.js', type: 'text/javascript' }),
        scripts.map(script => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { key: script, src: script })),
        __WEBPACK_IMPORTED_MODULE_2__config__["d" /* analytics */].google.trackingId && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', {
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + `ga('create','${__WEBPACK_IMPORTED_MODULE_2__config__["d" /* analytics */].google.trackingId}','auto');ga('send','pageview')` }
        }),
        __WEBPACK_IMPORTED_MODULE_2__config__["d" /* analytics */].google.trackingId && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://www.google-analytics.com/analytics.js', async: true, defer: true }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { dangerouslySetInnerHTML: { __html: this.props.scriptBottom } })
      )
    );
  }
}

Html.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  description: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  styles: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    id: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    cssText: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
  }).isRequired),
  scripts: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired),
  // eslint-disable-next-line react/forbid-prop-types
  state: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
Html.defaultProps = {
  styles: [],
  scripts: [],
  state: null
};
/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(17);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class Html extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    const { title, description, styles, scripts, state, children } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'html',
      { className: 'no-js', lang: 'en' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'head',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'title',
          null,
          title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: description }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'referrer', content: 'unsafe-url' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'referrer', content: 'origin' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'referrer', content: 'origin-when-cross-origin' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.sticky/1.0.4/jquery.sticky.js' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/lib/ckeditor/ckeditor.js' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/css/admin.css' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'body',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          id: 'app'
          // eslint-disable-next-line react/no-danger
          , dangerouslySetInnerHTML: { __html: children }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'script',
          null,
          'window.baseUrl = "',
          this.props.baseUrl,
          '"'
        ),
        state && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', {
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML: { __html: `window.APP_STATE=${__WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default()(state, { isJSON: true })}` }
        }),
        scripts.map(script => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { key: script, src: script })),
        __WEBPACK_IMPORTED_MODULE_2__config__["d" /* analytics */].google.trackingId && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', {
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + `ga('create','${__WEBPACK_IMPORTED_MODULE_2__config__["d" /* analytics */].google.trackingId}','auto');ga('send','pageview')` }
        }),
        __WEBPACK_IMPORTED_MODULE_2__config__["d" /* analytics */].google.trackingId && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://www.google-analytics.com/analytics.js', async: true, defer: true })
      )
    );
  }
}

Html.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  description: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  styles: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    id: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    cssText: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
  }).isRequired),
  scripts: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired),
  // eslint-disable-next-line react/forbid-prop-types
  state: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
Html.defaultProps = {
  styles: [],
  scripts: [],
  state: null
};
/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });



class Main extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    const first_foodNews = this.props.data.foodNews.value.data[0];
    const foodNews = this.props.data.foodNews.value.data.slice(1, 4);
    const news = this.props.data.news.value.data.slice(0, 3);
    const products = this.props.data.products.value;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'colContent' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        { className: 'title text-uppercase' },
        's\u1EA3n ph\u1EA9m'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'wrap-section line-bottom pro-site' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'product-tb pro-tb row' },
          products.map((el, index) => {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { key: index, className: 'col-xs-4 element-item' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'product-box' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                  { to: '/san-pham/' + el.slug, className: 'product-img' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl, alt: el.title })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'product-content' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h3',
                    { className: 'product-name' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                      { to: '/san-pham/' + el.slug },
                      el.name
                    )
                  )
                )
              )
            );
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'head lineh' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { className: 'title-2', style: { lineHeight: 37 } },
          'M\xF3n ngon'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'head-list' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
            { to: '/danh-muc/mon-ngon-tu-com' },
            'M\xF3n ngon t\u1EEB c\u1ED1m'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
            { to: '/danh-muc/cach-lam-mon-ngon-tai-nha' },
            'C\xE1ch l\xE0m m\xF3n ngon t\u1EA1i nh\xE0'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'wrap-section' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'section-box' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
            { to: '/bai-viet/' + first_foodNews.slug, className: 'section-img' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: first_foodNews.coverUrl,
              alt: first_foodNews.title }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'section-name' },
              first_foodNews.title
            ),
            ' '
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'description' },
            first_foodNews.description
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'section-list' },
          foodNews.map((el, index) => {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { key: index },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                { className: 'section-img', to: '/bai-viet/' + el.slug },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl,
                  alt: el.title })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'section-content' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h3',
                  { className: 'section-name' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                    { to: '/bai-viet/' + el.slug },
                    el.title
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'description' },
                  el.description.slice(0, 50),
                  ' ...'
                )
              )
            );
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'more-all' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
            { to: '/mon-ngon' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              'Xem t\u1EA5t c\u1EA3'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'head lineh' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { className: 'title-2', style: { lineHeight: 37 } },
          'Tin t\u1EE9c'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'head-list' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
            { to: '/danh-muc/su-kien' },
            'S\u1EF1 ki\u1EC7n'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
            { to: '/danh-muc/tin-tuc-tong-hop' },
            'Tin t\u1EE9c t\u1ED5ng h\u1EE3p'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'wrap-section' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'isotopelist', className: 'section-tb row mobile100',
            style: { position: 'relative', height: '305.25px' } },
          news.map((el, index) => {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { key: index, className: 'col-lg-4 col-md-6 col-sm-4 col-xs-6  element-item' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'box-news' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                  { className: 'section-img',
                    to: '/bai-viet/' + el.slug },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
                    src: el.coverUrl,
                    alt: el.title
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'section-content' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h3',
                    { className: 'section-name' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                      { to: '/bai-viet/' + el.slug },
                      el.title
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'description' },
                    el.description.slice(0, 50),
                    ' ...'
                  )
                )
              )
            );
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'more-all' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
            { to: '/tin-tuc' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              'Xem t\u1EA5t c\u1EA3'
            )
          )
        )
      )
    );
  }
}



/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });



class Slider extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    const post = this.props.post;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'sliderBig bgm-2 slick-initialized slick-slider' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'slide slick-slide', 'data-slick-index': 0, 'aria-hidden': 'true', style: { width: '100%' } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'news-big' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: '/bai-viet/' + post.slug, className: 'news-img', style: { margin: 10 } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: post.coverUrl, alt: post.title })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'news-content' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                { className: 'news-name' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                  { to: "/bai-viet/" + post.slug },
                  post.title
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'description' },
                post.description.slice(0, 200),
                ' ...'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'more-details' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                  { className: 'text-uppercase', to: '/bai-viet/' + post.slug },
                  'Xem chi ti\u1EBFt'
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        { className: 'slick-dots', style: { display: 'block' } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: true, 'aria-hidden': 'true' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', 'data-role': 'none' },
            '1'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { 'aria-hidden': 'true', className: true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', 'data-role': 'none' },
            '2'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { 'aria-hidden': 'false', className: 'slick-active' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', 'data-role': 'none' },
            '3'
          )
        )
      )
    );
  }
}

class Main extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    if (this.props.posts.data.length < 1) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        'Loading...'
      );
    } else {
      const firstPost = this.props.posts.data[0];
      const posts = this.props.posts.data.slice(1);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'colContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'head lineh' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: 'title-2', style: { lineHeight: 37 } },
            'M\xF3n ngon'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'head-list' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: "/danh-muc/mon-ngon-tu-com" },
              'M\xF3n ngon t\u1EEB c\u1ED1m'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: "/danh-muc/cach-lam-mon-ngon-tai-nha" },
              'C\xE1ch l\xE0m m\xF3n ngon t\u1EA1i nh\xE0'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'slider-wrap' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Slider, { post: firstPost })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_UpdatePanel1' },
          posts.map((el, index) => {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { key: index, className: 'news-lbox' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/bai-viet/' + el.slug,
                  className: 'news-img' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl,
                  alt: el.title })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'news-content' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h3',
                  { className: 'news-name' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/bai-viet/' + el.slug },
                    el.title
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'description' },
                  el.description
                )
              )
            );
          })
        )
      );
    }
  }
}



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Aside__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });



class Main extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    const { page, totalPage, data } = this.props.news;
    const news = data;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'mainContent' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'colContent' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'head lineh' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              { className: 'title-2', style: { lineHeight: 37 } },
              'tin t\u1EE9c'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'head-list' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/danh-muc/su-kien' },
                'S\u1EF1 ki\u1EC7n'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/danh-muc/tin-tuc-tong-hop' },
                'Tin t\u1EE9c t\u1ED5ng h\u1EE3p'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'news-big line-bottom' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              { to: '/bai-viet/' + news[0].slug, className: 'news-img' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: news[0].coverUrl })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'news-content' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                { className: 'news-name' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                  { to: '/bai-viet/' + news[0].slug },
                  news[0].title
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'description' },
                news[0].description
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'more-details' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                  { to: '/bai-viet/' + news[0].slug },
                  'Xem chi ti\u1EBFt'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { id: 'ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_UpdatePanel1' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'wrap-section pro-site' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'product-tb row', style: { position: 'relative', height: '1656.63px' } },
                news.map((el, index) => {
                  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { key: index, className: 'col-xs-4 element-item' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'product-box' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                        { to: '/bai-viet/' + el.slug, className: 'product-img' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl })
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'product-content' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'h3',
                          { className: 'product-name', style: { height: 80 } },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                            { to: '/bai-viet/' + el.slug },
                            el.title
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'description', style: { height: 60 } },
                          el.description
                        )
                      )
                    )
                  );
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { id: 'pagerp', className: 'pager' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { id: 'ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_DataPager1' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'first' },
                  'First'
                ),
                '\xA0',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'prev' },
                  'Previous'
                ),
                '\xA0',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'current' },
                  '1'
                ),
                '\xA0',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'numer-paging', href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl01\',\'\')' },
                  '2'
                ),
                '\xA0',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'numer-paging', href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl02\',\'\')' },
                  '3'
                ),
                '\xA0',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'numer-paging', href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl03\',\'\')' },
                  '4'
                ),
                '\xA0',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'numer-paging', href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl04\',\'\')' },
                  '5'
                ),
                '\xA0\xA0',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl02$ctl05\',\'\')' },
                  '...'
                ),
                '\xA0',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'next', href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl03$ctl00\',\'\')' },
                  'Next'
                ),
                '\xA0',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'last', href: 'javascript:__doPostBack(\'ctl00$ctl00$ctl00$ContentPlaceHolder1$ContentPlaceHolder1$ContentPlaceHolder1$DataPager1$ctl04$ctl00\',\'\')' },
                  'Last'
                ),
                '\xA0'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Aside__["a" /* default */], null)
      )
    );
  }
}



/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });


const Main = ({ post }) => {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { id: "colContent" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "headno" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h1",
        { className: "title text-uppercase" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "span",
          { id: "ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_lblTitleNews" },
          mapSlugToName(post.category)
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "wrapper-text" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h2",
        null,
        post.title
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "post-body", dangerouslySetInnerHTML: { __html: post.body } })
    )
  );
};



function mapSlugToName(slug) {
  switch (slug) {
    case 'mon-ngon-tu-com':
      return 'Món ngon từ cốm';
      break;
    case 'cach-lam-mon-ngon-tai-nha':
      return 'Cách làm món ngon tại nhà';
      break;
    case 'su-kien':
      return 'Sự kiện';
      break;
    case 'tin-tuc-tong-hop':
      return 'Tin tức tổng hợp';
      break;
    default:
      return '';
  }
}

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });



class Main extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    if (this.props.posts.data.length < 1) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        'Loading...'
      );
    } else {
      const firstPost = this.props.posts.data[0];
      const posts = this.props.posts.data.slice(1);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'colContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'headno' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            { className: 'title text-uppercase' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { id: 'ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_lblCategory' },
              this.props.title
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'news-big line-bottom mb12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
            { to: "/bai-viet/" + firstPost.slug, className: 'news-img' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: firstPost.coverUrl,
              alt: firstPost.title })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'news-content' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h3',
              { className: 'news-name' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: "/bai-viet/" + firstPost.slug },
                firstPost.title
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'description' },
              firstPost.description.slice(0, 50),
              ' ...'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'more-details' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                { to: '/bai-viet/' + firstPost.slug },
                'Xem chi ti\u1EBFt'
              )
            )
          )
        ),
        posts.map((el, index) => {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: index, className: 'news-lbox' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
              {
                to: '/bai-viet/' + el.slug,
                className: 'news-img' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
                src: el.coverUrl,
                alt: el.title })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'news-content' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                { className: 'news-name' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                  {
                    to: '/bai-viet/' + el.slug },
                  el.title
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'description' },
                el.description
              )
            )
          );
        })
      );
    }
  }
}



/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Main; });



class Main extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    if (!this.props.product) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        'Loading...'
      );
    } else {
      const product = this.props.product;
      const products = this.props.products || [];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'colContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrapper-details' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'details-content' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h1',
              { className: 'title' },
              product.name
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrapper-text detail-text' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'wrap-product' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'details-img', style: { paddingRight: 5 } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: product.coverUrl })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'details-content details-content2' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h4',
                { className: 'title-2', style: { textAlign: 'center' } },
                'Th\xF4ng tin s\u1EA3n ph\u1EA9m'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'price-product', style: { textAlign: 'center' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'em',
                  { style: { color: 'red' } },
                  numberWithCommas(product.price),
                  ' \u0111/kg'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'product-status', style: { textAlign: 'center', borderTop: '1px solid #ddd' } },
                'Mua tr\xEAn 3kg gi\u1EA3m ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'b',
                  { style: { color: 'blue' } },
                  '10%'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'product-ship', style: { textAlign: 'center', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'centerText', style: { display: 'inline-block', paddingRight: 5 } },
                  'V\u1EADn chuy\u1EC3n'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { display: 'inline-block', borderLeft: '1px solid #ddd', paddingLeft: 5 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    null,
                    '<20km : 25k/đơn'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    null,
                    '>20km : 25k/kg'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'wrap-button', style: { textAlign: 'center' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'col-w230 w258', style: { width: 250, float: 'none', textAlign: 'center' } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'box-in', style: { margin: '0 auto' } },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/lien-he-dat-hang', className: 'button-btn btn-b corner text-center' },
                      '\u0110\u1EB7t h\xE0ng ngay!'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'col-w230 w298', style: { width: 250, float: 'none' } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'box-in' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'button-btn phone corner', style: { fontSize: 18, fontWeight: 'bold' } },
                      'T\u01B0 v\u1EA5n: ',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'b',
                        null,
                        '097 331 8868'
                      )
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'wrapper-text', style: { marginTop: 20 } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'post-body', dangerouslySetInnerHTML: { __html: product.body } })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'headno headpo' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: 'title' },
            'S\u1EA3n ph\u1EA9m li\xEAn quan'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'wrap-section prom' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'product-tb pro-tb row' },
            products.map((el, index) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { key: index, className: 'col-xs-4 element-item' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'product-box' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/san-pham/' + el.slug, className: 'product-img' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl, alt: el.name })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'product-content' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h3',
                      { className: 'product-name' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                        { to: '/san-pham/' + el.slug },
                        el.name
                      )
                    )
                  )
                )
              );
            })
          )
        )
      );
    }
  }
}



function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_facebook__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_passport_facebook__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_models__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(17);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Passport.js reference implementation.
 * The database schema used in this sample is available at
 * https://github.com/membership/membership.db/tree/master/postgres
 */






/**
 * Sign in with Facebook.
 */
__WEBPACK_IMPORTED_MODULE_0_passport___default.a.use(new __WEBPACK_IMPORTED_MODULE_1_passport_facebook__["Strategy"]({
  clientID: __WEBPACK_IMPORTED_MODULE_3__config__["f" /* auth */].facebook.id,
  clientSecret: __WEBPACK_IMPORTED_MODULE_3__config__["f" /* auth */].facebook.secret,
  callbackURL: '/login/facebook/return',
  profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
  passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
  /* eslint-disable no-underscore-dangle */
  const loginName = 'facebook';
  const claimType = 'urn:facebook:access_token';
  const fooBar = (() => {
    var _ref = _asyncToGenerator(function* () {
      if (req.user) {
        const userLogin = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["b" /* UserLogin */].findOne({
          attributes: ['name', 'key'],
          where: { name: loginName, key: profile.id }
        });
        if (userLogin) {
          // There is already a Facebook account that belongs to you.
          // Sign in with that account or delete it, then link it with your current account.
          done();
        } else {
          const user = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* User */].create({
            id: req.user.id,
            email: profile._json.email,
            logins: [{ name: loginName, key: profile.id }],
            claims: [{ type: claimType, value: profile.id }],
            profile: {
              displayName: profile.displayName,
              gender: profile._json.gender,
              picture: `https://graph.facebook.com/${profile.id}/picture?type=large`
            }
          }, {
            include: [{ model: __WEBPACK_IMPORTED_MODULE_2__data_models__["b" /* UserLogin */], as: 'logins' }, { model: __WEBPACK_IMPORTED_MODULE_2__data_models__["d" /* UserClaim */], as: 'claims' }, { model: __WEBPACK_IMPORTED_MODULE_2__data_models__["e" /* UserProfile */], as: 'profile' }]
          });
          done(null, {
            id: user.id,
            email: user.email
          });
        }
      } else {
        const users = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* User */].findAll({
          attributes: ['id', 'email'],
          where: { '$logins.name$': loginName, '$logins.key$': profile.id },
          include: [{
            attributes: ['name', 'key'],
            model: __WEBPACK_IMPORTED_MODULE_2__data_models__["b" /* UserLogin */],
            as: 'logins',
            required: true
          }]
        });
        if (users.length) {
          done(null, users[0]);
        } else {
          let user = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* User */].findOne({ where: { email: profile._json.email } });
          if (user) {
            // There is already an account using this email address. Sign in to
            // that account and link it with Facebook manually from Account Settings.
            done(null);
          } else {
            user = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* User */].create({
              email: profile._json.email,
              emailConfirmed: true,
              logins: [{ name: loginName, key: profile.id }],
              claims: [{ type: claimType, value: accessToken }],
              profile: {
                displayName: profile.displayName,
                gender: profile._json.gender,
                picture: `https://graph.facebook.com/${profile.id}/picture?type=large`
              }
            }, {
              include: [{ model: __WEBPACK_IMPORTED_MODULE_2__data_models__["b" /* UserLogin */], as: 'logins' }, { model: __WEBPACK_IMPORTED_MODULE_2__data_models__["d" /* UserClaim */], as: 'claims' }, { model: __WEBPACK_IMPORTED_MODULE_2__data_models__["e" /* UserProfile */], as: 'profile' }]
            });
            done(null, {
              id: user.id,
              email: user.email
            });
          }
        }
      }
    });

    return function fooBar() {
      return _ref.apply(this, arguments);
    };
  })();

  fooBar().catch(done);
}));

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_passport___default.a);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__(119);

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_universal_router___default.a(__WEBPACK_IMPORTED_MODULE_1__routes__["a" /* default */]));

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(20);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const User = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('User', {

  id: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    defaultValue: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUIDV1,
    primaryKey: true
  },

  email: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255),
    validate: { isEmail: true }
  },

  emailConfirmed: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.BOOLEAN,
    defaultValue: false
  }

}, {

  indexes: [{ fields: ['email'] }]

});

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(20);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const UserClaim = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserClaim', {

  type: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
  },

  value: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
  }

});

/* harmony default export */ __webpack_exports__["a"] = (UserClaim);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(20);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const UserLogin = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserLogin', {

  name: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(50),
    primaryKey: true
  },

  key: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100),
    primaryKey: true
  }

});

/* harmony default export */ __webpack_exports__["a"] = (UserLogin);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(20);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const UserProfile = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserProfile', {

  userId: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    primaryKey: true
  },

  displayName: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100)
  },

  picture: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255)
  },

  gender: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(50)
  },

  location: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100)
  },

  website: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255)
  }

});

/* harmony default export */ __webpack_exports__["a"] = (UserProfile);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(7);
let autoIncrement = __webpack_require__(163);
autoIncrement.initialize(mongoose.connection);

module.exports = autoIncrement;

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  listImage: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    args: {
      num: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
      },
      time: {
        type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
      },
      filter: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getListImageByTime
  }

});

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7);

var schema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true, index: true },
  name: String,
  type: String,
  fileSize: { type: Number, default: 0 },
  dimensions: {
    width: { type: Number },
    height: { type: Number }
  },
  userUpload: String,
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Image', schema);

module.exports = model;

module.exports.getListImageByTime = (root, { num, time, filter }) => {
  if (!time) time = Date.now();
  let query = { created_at: { $lt: time } };
  if (filter) query.name = { $regex: new RegExp(filter, "ig") };
  console.log(query);
  return new Promise((resolve, reject) => {
    model.find(query).sort({ created_at: -1 }).limit(num).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);




// Define our user type, with two string fields; `id` and `name`
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Image',
  description: 'Image object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    slug: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    name: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    type: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    fileSize: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    dimensions: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
        name: 'dimensions',
        fields: () => ({
          width: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"] },
          height: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"] }
        })
      })
    },
    userUpload: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_type_json__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_type_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  newPost: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],

    args: {
      category: {
        name: 'category',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
      },
      slug: {
        name: 'slug',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
      },
      title: {
        name: 'title',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
      },
      coverUrl: {
        name: 'coverUrl',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
      },
      description: {
        name: 'description',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
      },
      body: {
        name: 'body',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
      },
      tags: {
        name: 'slug',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_1_graphql_type_json___default.a)
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.newPost
  }
});

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  getNews: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
      name: 'getNews',
      description: 'getNews object',
      fields: () => ({
        page: {
          type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
        },
        totalPage: {
          type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
        },
        data: {
          type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */])
        }
      })
    }),
    args: {
      page: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getNews
  },
  getFoodNews: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
      name: 'getFoodNews',
      description: 'getFoodNews object',
      fields: () => ({
        page: {
          type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
        },
        totalPage: {
          type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
        },
        data: {
          type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */])
        }
      })
    }),
    args: {
      page: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getFoodNews
  },
  getOneNews: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getOnePost
  },
  getOnePost: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getOnePost
  },
  getNewsInCategory: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
      name: 'getNewsInCategory',
      description: 'getNewsInCategory object',
      fields: () => ({
        page: {
          type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
        },
        totalPage: {
          type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
        },
        data: {
          type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */])
        }
      })
    }),
    args: {
      page: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
      },
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getNewsInCategory
  }
});

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  getOneProduct: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getOneProduct
  },
  getProducts: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getProducts
  }
});

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  // category: String,
  slug: { type: String, required: true, unique: true, index: true },
  name: String,
  // public: {type: Boolean, default: false},
  coverUrl: String,
  price: Number,
  body: String,
  description: String,
  view: { type: Number, default: 0 },
  saleOff: {
    type: { type: Number },
    value: { type: Number }
  },
  // tags:[Schema.Types.Mixed],
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Product', schema);

module.exports = model;

// get ( product )


module.exports.getOneProduct = (root, { slug }) => {
  return new Promise((resolve, reject) => {
    model.findOne({ slug: slug }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getProducts = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Product',
  description: 'Product object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    slug: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    coverUrl: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    name: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    price: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    description: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    body: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    view: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    saleOff: {
      type: __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__schema__);





/* harmony default export */ __webpack_exports__["a"] = ({
  update: {
    type: __WEBPACK_IMPORTED_MODULE_1__type__["a" /* default */],
    args: {
      ssr: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_2__schema___default.a.update
  }
});

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  setting: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getSetting
  }

});

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__schema__);





/* harmony default export */ __webpack_exports__["a"] = ({
  users: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_1__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_2__schema___default.a.getListOfUsers
  }
});

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;
let findOrCreate = __webpack_require__(164);
let autoIncrement = __webpack_require__(70);
var bcrypt = __webpack_require__(152);

let UserSchema = new Schema({
  name: String,
  username: { type: String, default: 'abc@gmail.com' },
  uid: String,
  provider: String,
  accessToken: String,
  mustConfirmEmail: { type: Boolean, default: false },
  password: String,
  createAt: { type: Date, default: Date.now }
});

UserSchema.plugin(findOrCreate);

UserSchema.plugin(autoIncrement.plugin, 'User');

let User = mongoose.model('User', UserSchema);

module.exports = User;

module.exports.getUserByEmail = function (username, callback) {
  User.find({ username: username }, callback);
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if (err) console.log(err);
    callback(null, isMatch);
  });
};

module.exports.createUser = function (newUser, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      newUser.password = hash;
      User.create(newUser, callback);
    });
  });
};

module.exports.changePassword = function (email, password, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) throw err;
      console.log(hash);
      User.update({ username: email }, { $set: { password: hash } }, callback);
    });
  });
};

module.exports.getListOfUsers = () => {
  return new Promise((resolve, reject) => {
    User.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);


// Define our user type, with two string fields; `id` and `name`
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'User',
  description: 'User object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    }
  })
}));

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_NewsItemType__ = __webpack_require__(86);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





// React.js News Feed (RSS)
const url = 'https://api.rss2json.com/v1/api.json' + '?rss_url=https%3A%2F%2Freactjsnews.com%2Ffeed.xml';

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const news = {
  type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__types_NewsItemType__["a" /* default */]),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if (new Date() - lastFetchTime > 1000 * 60 * 10 /* 10 mins */) {
        lastFetchTime = new Date();
        lastFetchTask = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_fetch__["a" /* default */])(url).then(response => response.json()).then(data => {
          if (data.status === 'ok') {
            items = data.items;
          }

          return items;
        }).finally(() => {
          lastFetchTask = null;
        });

        if (items.length) {
          return items;
        }

        return lastFetchTask;
      }

    return items;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (news);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__queries_news__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_image_queries__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_post_queries__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_product_queries__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_queries__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_setting_queries__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_setting_mutations__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_post_mutations__ = __webpack_require__(74);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



// import me from './queries/me';







// mutation



let { listImage } = __WEBPACK_IMPORTED_MODULE_2__models_image_queries__["a" /* default */];
let { users } = __WEBPACK_IMPORTED_MODULE_5__models_user_queries__["a" /* default */];
let { setting } = __WEBPACK_IMPORTED_MODULE_6__models_setting_queries__["a" /* default */];
let { getNews, getOneNews, getFoodNews, getOnePost, getNewsInCategory } = __WEBPACK_IMPORTED_MODULE_3__models_post_queries__["a" /* default */];
let { getOneProduct, getProducts } = __WEBPACK_IMPORTED_MODULE_4__models_product_queries__["a" /* default */];

const schema = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLSchema"]({
  query: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
    name: 'Query',
    fields: {
      setting,
      news: __WEBPACK_IMPORTED_MODULE_1__queries_news__["a" /* default */],
      listImage,
      users,
      getNews,
      getOneNews,
      getFoodNews,
      getOnePost,
      getNewsInCategory,
      getOneProduct,
      getProducts
    }
  }),
  mutation: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
    name: 'Mutation',
    description: 'Realize Root Mutations',
    fields: {
      // addUser: userMutations.addUser,
      // updateUser: userMutations.updateUser
      updateSetting: __WEBPACK_IMPORTED_MODULE_7__models_setting_mutations__["a" /* default */].update,
      newPost: __WEBPACK_IMPORTED_MODULE_8__models_post_mutations__["a" /* default */].newPost
    }
  })
});

/* harmony default export */ __webpack_exports__["a"] = (schema);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const NewsItemType = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'NewsItem',
  fields: {
    title: { type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]) },
    link: { type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]) },
    author: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"] },
    pubDate: { type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]) },
    content: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"] }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (NewsItemType);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(18);
/* harmony export (immutable) */ __webpack_exports__["a"] = data;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function data(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_DATA */]:
      const data = action.payload.value;
      return _extends({}, state, {
        post: _extends({}, state.post, {
          value: data.getOnePost || {}
        }),
        news: _extends({}, state.news, {
          value: data.getNews || state.news.value
        }),
        foodNews: _extends({}, state.news, {
          value: data.getFoodNews || state.foodNews.value
        }),
        newsInCategory: _extends({}, state.newsInCategory, {
          value: data.getNewsInCategory || state.news.value
        }),
        product: _extends({}, state.product, {
          value: data.getOneProduct || {}
        }),
        products: _extends({}, state.products, {
          value: data.getProducts || []
        })
      });
    default:
      return state;
  }
}

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__);






/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  user: __WEBPACK_IMPORTED_MODULE_1__user__["a" /* default */],
  runtime: __WEBPACK_IMPORTED_MODULE_2__runtime__["a" /* default */],
  setting: __WEBPACK_IMPORTED_MODULE_3__setting__["a" /* default */],
  data: __WEBPACK_IMPORTED_MODULE_4__data__["a" /* default */],
  loadingBar: __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__["loadingBarReducer"]
}));

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(18);
/* harmony export (immutable) */ __webpack_exports__["a"] = runtime;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function runtime(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* SET_RUNTIME_VARIABLE */]:
      return _extends({}, state, {
        [action.payload.name]: action.payload.value
      });
    default:
      return state;
  }
}

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(18);
/* harmony export (immutable) */ __webpack_exports__["a"] = setting;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function setting(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* SET_SETTING */]:
      return _extends({}, state, {
        ['ssr']: action.payload.value
      });
    default:
      return state;
  }
}

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = user;
function user(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_sticky__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_sticky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_sticky__);


const { Header, Content, Footer, Sider } = __WEBPACK_IMPORTED_MODULE_1_antd__["Layout"];
const SubMenu = __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].SubMenu;





class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.onCollapse = collapsed => {
      this.setState({
        collapsed,
        mode: collapsed ? 'vertical' : 'inline'
      });
    };

    this.toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    };

    this.state = {
      name: this.props.name,
      collapsed: false,
      mode: 'inline'
    };
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["LocaleProvider"],
      { locale: __WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US___default.a },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Layout"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Sider,
          {
            collapsible: true,
            breakpoint: 'lg',
            collapsedWidth: '0',
            collapsed: this.state.collapsed,
            onCollapse: this.onCollapse,
            width: '170'
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'logo' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'admin-topSlide' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              'ADMIN'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"],
            { theme: 'dark',
              mode: this.state.mode,
              selectedKeys: [this.props.name],
              defaultOpenKeys: ['sub0', 'sub1', 'sub2']
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Dashboard' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'layout' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'Dashboard'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              SubMenu,
              {
                key: 'sub0',
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'idcard' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'S\u1EA3n ph\u1EA9m'
                  )
                )
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'product1' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/product?v=list' },
                  'Danh s\xE1ch'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'product2' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/product?v=add' },
                  'Th\xEAm m\u1EDBi'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              SubMenu,
              {
                key: 'sub1',
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'idcard' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'M\xF3n ngon'
                  )
                )
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'monngon1' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/monngon?v=list' },
                  'Danh s\xE1ch'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'monngon2' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/monngon?v=add' },
                  'Th\xEAm m\u1EDBi'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              SubMenu,
              {
                key: 'sub2',
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'idcard' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'Tin t\u1EE9c'
                  )
                )
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'tintuc1' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/news?v=list' },
                  'Danh s\xE1ch'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'tintuc2' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/news?v=add' },
                  'Th\xEAm m\u1EDBi'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Library' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/library' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'appstore-o' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'Th\u01B0 vi\u1EC7n'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Setting' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/setting' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'tool' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'C\xE0i \u0111\u1EB7t'
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Layout"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Header, { style: { height: 47, background: 'white', padding: 0 } }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Content,
            { style: { margin: '0 5px' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Breadcrumb"],
              { style: { margin: '12px 0' } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Breadcrumb"].Item,
                null,
                'Admin'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Breadcrumb"].Item,
                null,
                this.state.name
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { style: { background: '#fff', minHeight: 500 } },
              this.props.children
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Footer,
            { style: { textAlign: 'center' } },
            'Admin Page \xA9201 Created by L\u01B0u V\u0103n Lu\u1EADn'
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






class Admin extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null);
  }
}

Admin.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Dashboard';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/',

  action({ query }) {
    return _asyncToGenerator(function* () {
      const { App, Dashboard } = yield __webpack_require__(19);
      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Dashboard, { title: title })
        )
      };
    })();
  }
});

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




// import {Tag, Input, Tooltip, Button, DatePicker, Select} from 'antd';
// import ColorPic from '../Components/ColorPicker'
// import axios from 'axios';
var slug = __webpack_require__(174);
class EditorComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(html) {
    this.setState({ editorHtml: html });
  }
  componentDidMount() {}

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { width: 800, margin: '10px auto' } });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__style_css___default.a)(EditorComponent));

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


// import Layout from '../../components/Layout';

const title = 'Admin Page';
const isAdmin = false;

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/admin',
  children: [__webpack_require__(94).default, __webpack_require__(98).default, __webpack_require__(109).default,
  // require('./editor').default,
  __webpack_require__(104).default, __webpack_require__(101).default, __webpack_require__(107).default],
  action({ next }) {
    return _asyncToGenerator(function* () {
      const route = yield next();

      // Provide default values for title, description etc.
      route.title = `${route.title || 'Amdmin Page'}`;
      return route;
    })();
  }

});

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var Waypoint = __webpack_require__(171);


const Dragger = __WEBPACK_IMPORTED_MODULE_2_antd__["Upload"].Dragger;

var list = [];
for (let i = 0; i < 50; i++) {
  list.push(i);
}

const props = {
  name: 'image',
  multiple: true,
  showUploadList: false,
  action: '/upload/image'
};

class Library extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      copyImageUrl: 'abc',
      copied: false,
      uploadArea: false,
      visible: false,
      filter: '',
      time: new Date().toISOString(),
      imgs: [],
      selectedImage: {}
    };
    this.fetchImage(40, this.state.time);
  }

  fetchImage(num, time, reset = true) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ listImage(num: ' + num + ', time: "' + time + '", filter: "' + _this.state.filter + '") { _id slug name type fileSize dimensions {width height} userUpload created_at } }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();

      _this.setState(function (prevState) {
        if (data.listImage.length > 0) {
          let newImgs;
          if (reset) {
            newImgs = data.listImage;
          } else {
            newImgs = prevState.imgs.concat(data.listImage);
          }
          return _extends({}, prevState, {
            imgs: newImgs,
            time: newImgs[newImgs.length - 1].created_at
          });
        }
      });
    })();
  }
  showModal(el) {
    this.setState({
      visible: true,
      selectedImage: el
    });
  }
  handleOk(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }

  beforeUpload(file) {
    const isImage = file.type.match('image*');
    if (!isImage) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('You can only upload Image file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('Image must smaller than 5MB!');
    }
    return isImage && isLt5M;
  }

  _handleWaypointEnter() {
    alert('loading more ...');
  }

  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      this.setState(prevState => {
        var newImgs = prevState.imgs;
        newImgs.unshift(info.file.response);
        return _extends({}, prevState, {
          imgs: newImgs
        });
      });
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error(`${info.file.name} file upload failed.`);
    }
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
        { className: 'padding-5 margin-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
          { sm: 16 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
            {
              onClick: () => {
                this.setState((preState, curProps) => {
                  return _extends({}, preState, {
                    uploadArea: !preState.uploadArea
                  });
                });
              }
            },
            'Th\xEAm \u1EA3nh'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
          { sm: 8 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Input"], { size: 'large', placeholder: 'Search by name',
            onChange: e => {
              let newInput = e.target.value;
              this.setState(prevState => {
                return _extends({}, prevState, {
                  filter: newInput
                });
              });
              this.fetchImage(40, this.state.time);
            }
          })
        )
      ),
      this.state.uploadArea && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
        { className: 'padding-5 margin-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginTop: 16, height: 180 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Dragger,
            _extends({}, props, {
              onChange: info => this.onChange(info),
              beforeUpload: this.beforeUpload
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-drag-icon' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Icon"], { type: 'inbox' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-text' },
              'K\xE9o th\u1EA3 c\xE1c c\xE1c file v\xE0o b\u1EA5t k\xEC n\u01A1i n\xE0o tr\xEAn v\xF9ng n\xE0y \u0111\u1EC3 t\u1EA3i l\xEAn.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-hint' },
              'Ho\u1EB7c b\u1EA5m v\xE0o v\xF9ng n\xE0y \u0111\u1EC3 ch\u1ECDn \u1EA3nh'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { background: '#ECECEC' } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
          null,
          this.state.imgs.map((el, key) => {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
              { xs: 12, sm: 6, md: 4, lg: 4, key: key, className: 'padding-5' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
                { bordered: false, className: 'imgWr',
                  onClick: () => this.showModal(el)
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: "/image/small/" + el.name })
              )
            );
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
            { xs: 12, sm: 6, md: 4, lg: 4, className: 'padding-5' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
              { bordered: false, className: 'imgWr',
                onClick: () => this.fetchImage(40, this.state.imgs[this.state.imgs.length - 1].created_at, false)
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://www.loadebar.com/images/template/load-more.png' })
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Modal"],
        { title: 'Basic Modal', visible: this.state.visible,
          onOk: e => this.handleOk(e),
          onCancel: e => this.handleCancel(e),
          width: '90%',
          maskClosable: true,
          className: 'img'
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
            {
              lg: 12
            },
            this.state.selectedImage.name && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
              { bordered: false, className: 'imgWr'
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: "/image/" + this.state.selectedImage.name })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
            {
              lg: 12,
              className: 'padding-5'
            },
            this.state.selectedImage.name && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                null,
                'T\xEAn t\u1EADp tin:'
              ),
              ' ',
              this.state.selectedImage.name
            ),
            this.state.selectedImage.type && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                null,
                'Lo\u1EA1i t\u1EADp tin:'
              ),
              ' ',
              this.state.selectedImage.type
            ),
            this.state.selectedImage.created_at && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                null,
                '\u0110\xE3 t\u1EA3i l\xEAn v\xE0o l\xFAc:'
              ),
              ' ',
              this.state.selectedImage.created_at
            ),
            !!this.state.selectedImage.fileSize && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                null,
                'Dung l\u01B0\u1EE3ng t\u1EC7p:'
              ),
              ' ',
              this.state.selectedImage.fileSize,
              ' KB'
            ),
            this.state.selectedImage.dimensions && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                null,
                'K\xEDch th\u01B0\u1EDBc:'
              ),
              ' ',
              this.state.selectedImage.dimensions.width,
              ' \xD7 ',
              this.state.selectedImage.dimensions.height
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              'Link :'
            ),
            ' ',
            this.state.copied ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { style: { color: 'red' } },
              'Copied !"'
            ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { style: { color: 'blue' } },
              "/image/" + this.state.selectedImage.name
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard___default.a,
              { text: "/image/" + this.state.selectedImage.name,
                onCopy: () => {
                  this.setState({ copied: true });
                  setTimeout(() => {
                    this.setState({ copied: false });
                  }, 1000);
                } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                null,
                'Copy link \u1EA3nh'
              )
            )
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Library);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




// import moment from 'moment'

const title = 'Library';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/library',

  action({ store }) {
    return _asyncToGenerator(function* () {
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__["showLoading"])());
      const { App, Library } = yield __webpack_require__(19);
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__["hideLoading"])());
      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Library, { title: title })
        )
      };
    })();
  }
});

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_history__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_Tags__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_CKEditor__ = __webpack_require__(27);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









const TabPane = __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;

class EditNewsComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        tags: []
      }
    };
    if (this.props.isEdit) this.init(this.props.slug);
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ getOneNews(slug: "' + slug + '"){category, coverUrl, slug, public, title, description, body, view, tags, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getOneNews
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }

  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  addNews(post) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/post/new', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_3__core_history__["a" /* default */].push({
        pathname: '/admin/news',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      console.log(err);
    });
  }

  updateNews(post) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/post/update', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        'loading...'
      );
    }
    return !this.state.loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'admin-editor' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5', style: { marginBottom: 15 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Affix"],
          {
            offsetTop: 10
          },
          this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
            {
              size: 'large',
              type: 'primary', style: { float: 'right' },
              onClick: () => {
                this.updateNews(this.state.data);
              }
            },
            'C\u1EADp nh\u1EADp'
          ),
          !this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
            {
              size: 'large',
              type: 'primary', style: { float: 'right' },
              onClick: () => {
                this.addNews(this.state.data);
              }
            },
            'Th\xEAm m\u1EDBi'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"],
          { type: 'card' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'Th\xF4ng tin b\xE0i vi\u1EBFt', key: '1' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'T\u1EF1a \u0111\u1EC1:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
                    placeholder: 'T\u1EF1a \u0111\u1EC1',
                    defaultValue: this.state.data.title,
                    onChange: e => {
                      let that = this;
                      let value = e.target.value;
                      let newSlug = function () {
                        if (that.props.isEdit) return that.state.data.slug;else {
                          return slugify(value);
                        }
                      };
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            title: value,
                            slug: newSlug()
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'slug:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
                    placeholder: 'Slug',
                    disabled: this.props.isEdit,
                    value: this.state.data.slug,
                    onChange: e => {
                      let value = e.target.value;
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            slug: value
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Danh m\u1EE5c:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_antd__["Select"],
                    {
                      defaultValue: this.state.data.category,
                      style: { width: '100%' },
                      onChange: value => {
                        this.setState(prev => {
                          return _extends({}, prev, {
                            data: _extends({}, prev.data, {
                              category: value
                            })
                          });
                        });
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mon-ngon-tu-com' },
                      'M\xF3n ngon t\u1EEB c\u1ED1m'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'cach-lam-mon-ngon-tai-nha' },
                      'C\xE1ch l\xE0m m\xF3n ngon t\u1EA1i nh\xE0'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Tags:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Components_Tags__["a" /* default */], { defaultValue: this.state.data.tags,
                    handleChange: tags => {
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            tags: tags
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'M\xF4 t\u1EA3 ( ',
                      this.state.data.description.length >= 140 && this.state.data.description.length <= 150 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'blue' } },
                        this.state.data.description.length
                      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'red' } },
                        this.state.data.description.length
                      ),
                      ' /150) :'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { type: 'textarea',
                    autosize: { minRows: 2, maxRows: 10 },
                    defaultValue: this.state.data.description,
                    onChange: e => {
                      let value = e.target.value;
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            description: value
                          })
                        });
                      });
                    }
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    null,
                    'Public: '
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Switch"], { checked: this.state.data.public || false, onChange: value => {
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            public: value
                          })
                        });
                      });
                    } })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'
                    )
                  ),
                  !this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__["a" /* default */], {
                    isMultiple: false,
                    handleUpload: img => this.handleCoverUpload(img)
                  }),
                  this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_antd__["Card"],
                    { bordered: false, className: 'imgWr',
                      onClick: () => this.showModalSelectImage('cover')
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.state.data.coverUrl })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
                  {
                    style: { marginRight: 10 },
                    onClick: () => this.showModalSelectImage('cover')
                  },
                  'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'
                ),
                this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
                  {
                    onClick: () => {
                      this.setState(prevState => {
                        return _extends({}, prevState, {
                          data: _extends({}, prevState.data, {
                            coverUrl: null
                          })
                        });
                      });
                    }
                  },
                  'X\xF3a \u1EA3nh '
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'N\u1ED9i dung', key: '2' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                  { className: 'padding-5' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Components_CKEditor__["a" /* default */], {
                    id: 1,
                    value: this.state.data.body || '',
                    onChange: value => {
                      console.log(value);
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            body: value
                          })
                        });
                      });
                    }
                  })
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Modal"],
        {
          style: { top: 30 },
          width: '90%',
          title: 'Basic Modal', visible: this.state.modalSelectImage,
          onOk: this.handleOk, onCancel: this.handleCancel
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img) })
      )
    );
  }
}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (EditNewsComponent);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







class ListNews extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      data: []
    };
    this.getFoodNews(1);
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd__["Table"], { columns: columns, rowKey: record => record.slug, dataSource: this.state.data })
    );
  }
  getFoodNews(page) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{getFoodNews(page:' + page + ' ){page,totalPage,data{category, coverUrl, slug, public, title, description, body, view, tags, created_at}}}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getFoodNews.data
        });
      });
    })();
  }
}

const columns = [{
  title: 'Tựa đề',
  dataIndex: 'title',
  key: 'title',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    text.length > 53 ? text.slice(0, 50) + '...' : text
  )
}, {
  title: 'Lượt xem',
  dataIndex: 'view',
  key: 'view'
}, {
  title: 'Công khai',
  dataIndex: 'public',
  key: 'public',
  render: boolean => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    boolean ? 'true' : 'false'
  )
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */],
      { to: "/admin/monngon?v=edit&slug=" + record.slug },
      'S\u1EEDa'
    )
  )
}];

/* harmony default export */ __webpack_exports__["default"] = (ListNews);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Mon ngon';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/monngon',

  action({ query }) {
    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/monngon?v=list' };
      }
      const { App, EditFoods, ListFoods } = yield __webpack_require__(19);
      let component = {};

      if (query.v === 'list') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListFoods, { title: title })
        );
      } else if (query.v === 'add') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditFoods, { mode: 'add', isEdit: false })
        );
      } else if (query.slug && query.v === 'edit') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditFoods, { mode: 'edit', isEdit: true, slug: query.slug })
        );
      } else if (query.v !== 'list') {
        return { redirect: '/admin/mongon?v=list' };
      }

      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component
      };
    })();
  }
});

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_history__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_Tags__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_CKEditor__ = __webpack_require__(27);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */











const TabPane = __WEBPACK_IMPORTED_MODULE_3_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_3_antd__["Select"].Option;

class EditNewsComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      console.log(e);
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        tags: []
      }
    };
    if (this.props.isEdit) this.init(this.props.slug);
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ getOneNews(slug: "' + slug + '"){category, coverUrl, slug, public, title, description, body, view, tags, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getOneNews
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }

  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  addNews(post) {
    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/api/post/new', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].success('Thêm mới thành công!');
      __WEBPACK_IMPORTED_MODULE_5__core_history__["a" /* default */].push({
        pathname: '/admin/news',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      console.log(err);
    });
  }

  updateNews(post) {
    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/api/post/update', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        'loading...'
      );
    }
    return !this.state.loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'admin-editor' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
        { className: 'padding-5', style: { marginBottom: 15 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Affix"],
          {
            offsetTop: 10
          },
          this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
            { type: 'primary', style: { float: 'right' },
              size: 'large',
              onClick: () => {
                this.updateNews(this.state.data);
              }
            },
            'C\u1EADp nh\u1EADp'
          ),
          !this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
            { type: 'primary', style: { float: 'right' },
              size: 'large',
              onClick: () => {
                this.addNews(this.state.data);
              }
            },
            'Th\xEAm m\u1EDBi'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Tabs"],
          { type: 'card' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'Th\xF4ng tin b\xE0i vi\u1EBFt', key: '1' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'T\u1EF1a \u0111\u1EC1:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], {
                    placeholder: 'T\u1EF1a \u0111\u1EC1',
                    defaultValue: this.state.data.title,
                    onChange: e => {
                      let that = this;
                      let value = e.target.value;
                      let newSlug = function () {
                        if (that.props.isEdit) return that.state.data.slug;else {
                          return slugify(value);
                        }
                      };
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            title: value,
                            slug: newSlug()
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'slug:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], {
                    placeholder: 'Slug',
                    disabled: this.props.isEdit,
                    value: this.state.data.slug,
                    onChange: e => {
                      let value = e.target.value;
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            slug: value
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Danh m\u1EE5c:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_antd__["Select"],
                    {
                      defaultValue: this.state.data.category,
                      style: { width: '100%' },
                      onChange: value => {
                        this.setState(prev => {
                          return _extends({}, prev, {
                            data: _extends({}, prev.data, {
                              category: value
                            })
                          });
                        });
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'su-kien' },
                      'S\u1EF1 ki\u1EC7n'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'tin-tuc-tong-hop' },
                      'Tin t\u1EE9c t\u1ED5ng h\u1EE3p'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Tags:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Components_Tags__["a" /* default */], { defaultValue: this.state.data.tags,
                    handleChange: tags => {
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            tags: tags
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'M\xF4 t\u1EA3 ( ',
                      this.state.data.description.length >= 140 && this.state.data.description.length <= 150 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'blue' } },
                        this.state.data.description.length
                      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'red' } },
                        this.state.data.description.length
                      ),
                      ' /150) :'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], { type: 'textarea',
                    autosize: { minRows: 2, maxRows: 10 },
                    defaultValue: this.state.data.description,
                    onChange: e => {
                      let value = e.target.value;
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            description: value
                          })
                        });
                      });
                    }
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    null,
                    'Public: '
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Switch"], { checked: this.state.data.public || false, onChange: value => {
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            public: value
                          })
                        });
                      });
                    } })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'
                    )
                  ),
                  !this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__["a" /* default */], {
                    isMultiple: false,
                    handleUpload: img => this.handleCoverUpload(img)
                  }),
                  this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_antd__["Card"],
                    { bordered: false, className: 'imgWr',
                      onClick: () => this.showModalSelectImage('cover')
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.state.data.coverUrl })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
                  { style: { marginRight: 10 },
                    onClick: () => this.showModalSelectImage('cover')
                  },
                  'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'
                ),
                this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
                  {
                    onClick: () => {
                      this.setState(prevState => {
                        return _extends({}, prevState, {
                          data: _extends({}, prevState.data, {
                            coverUrl: null
                          })
                        });
                      });
                    }
                  },
                  'X\xF3a \u1EA3nh '
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'N\u1ED9i dung', key: '2' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                  { className: 'padding-5' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Components_CKEditor__["a" /* default */], {
                    id: 1,
                    value: this.state.data.body || '',
                    onChange: value => {
                      console.log(value);
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            body: value
                          })
                        });
                      });
                    }
                  })
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Modal"],
        {
          style: { top: 30 },
          width: '90%',
          title: 'Basic Modal', visible: this.state.modalSelectImage,
          onOk: this.handleOk, onCancel: this.handleCancel
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img) })
      )
    );
  }
}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__style_css___default.a)(EditNewsComponent));

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








class ListNews extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      totalPage: 1,
      data: []
    };
    this.getNews(1);
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd__["Table"], { columns: columns, rowKey: record => record.slug, dataSource: this.state.data })
    );
  }
  getNews(page) {
    var _this = this;

    return _asyncToGenerator(function* () {

      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{getNews(page:' + page + ' ){page,totalPage,data{category, coverUrl, slug, public, title, description, body, view, tags, created_at}}}'
        }),
        credentials: 'include'
      });

      const { data } = yield resp.json();
      // console.log(data.getNews)
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          page: data.getNews.page,
          totalPage: data.getNews.totalPage,
          data: data.getNews.data
        });
      });
    })();
  }
}

const columns = [{
  title: 'Tựa đề',
  dataIndex: 'title',
  key: 'title',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    text.length > 53 ? text.slice(0, 50) + '...' : text
  )
}, {
  title: 'Lượt xem',
  dataIndex: 'view',
  key: 'view'
}, {
  title: 'Công khai',
  dataIndex: 'public',
  key: 'public',
  render: boolean => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    boolean ? 'true' : 'false'
  )
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */],
      { to: "/admin/news?v=edit&slug=" + record.slug },
      'S\u1EEDa'
    )
  )
}];

/* harmony default export */ __webpack_exports__["default"] = (ListNews);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Tin Tuc';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/news',

  action({ query }) {
    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/news?v=list' };
      }
      const { App, EditNews, ListNews } = yield __webpack_require__(19);
      let component = {};

      if (query.v === 'list') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListNews, { title: title })
        );
      } else if (query.v === 'add') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditNews, { mode: 'add', isEdit: false })
        );
      } else if (query.slug && query.v === 'edit') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditNews, { mode: 'edit', isEdit: true, slug: query.slug })
        );
      } else if (query.v !== 'list') {
        return { redirect: '/admin/news?v=list' };
      }

      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component
      };
    })();
  }
});

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_history__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_Tags__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_CKEditor__ = __webpack_require__(27);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */











const TabPane = __WEBPACK_IMPORTED_MODULE_3_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_3_antd__["Select"].Option;

class EditNewsComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      console.log(e);
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        tags: []
      }
    };
    if (this.props.isEdit) this.init(this.props.slug);
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ getOneProduct(slug: "' + slug + '"){name, slug, price, coverUrl, description, saleOff, body, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getOneProduct
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }

  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  addProduct(product) {
    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/api/product/new', product).then(res => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].success('Thêm mới thành công!');
      __WEBPACK_IMPORTED_MODULE_5__core_history__["a" /* default */].push({
        pathname: '/admin/product',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      console.log(err);
    });
  }

  updateProduct(product) {
    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/api/product/update', product).then(res => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        'loading...'
      );
    }
    return !this.state.loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'admin-editor' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
        { className: 'padding-5', style: { marginBottom: 15 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Affix"],
          {
            offsetTop: 10
          },
          this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
            { type: 'primary', style: { float: 'right' },
              size: 'large',
              onClick: () => {
                this.updateProduct(this.state.data);
              }
            },
            'C\u1EADp nh\u1EADp'
          ),
          !this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
            {
              size: 'large',
              type: 'primary',
              style: { float: 'right' },

              onClick: () => {
                this.addProduct(this.state.data);
              }
            },
            'Th\xEAm m\u1EDBi'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Tabs"],
          { type: 'card' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'Th\xF4ng tin b\xE0i vi\u1EBFt', key: '1' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'T\xEAn s\u1EA3n ph\u1EA9m:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], {
                    placeholder: 'T\xEAn s\u1EA3n ph\u1EA9m',
                    defaultValue: this.state.data.name,
                    onChange: e => {
                      let that = this;
                      let value = e.target.value;
                      let newSlug = function () {
                        if (that.props.isEdit) return that.state.data.slug;else {
                          return slugify(value);
                        }
                      };
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            name: value,
                            slug: newSlug()
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'slug:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], {
                    placeholder: 'Slug',
                    disabled: this.props.isEdit,
                    value: this.state.data.slug,
                    onChange: e => {
                      let value = e.target.value;
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            slug: value
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Gi\xE1 s\u1EA3n ph\u1EA9m:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["InputNumber"], {
                    defaultValue: this.state.data.price || 0,
                    min: 0,
                    formatter: value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
                    parser: value => value.replace(/(,*)/g, ''),
                    style: { minWidth: 200 },
                    onChange: value => {
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            price: parseInt(value)
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'M\xF4 t\u1EA3 ( ',
                      this.state.data.description.length >= 140 && this.state.data.description.length <= 150 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'blue' } },
                        this.state.data.description.length
                      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'red' } },
                        this.state.data.description.length
                      ),
                      ' /150) :'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], { type: 'textarea',
                    autosize: { minRows: 2, maxRows: 10 },
                    defaultValue: this.state.data.description,
                    onChange: e => {
                      let value = e.target.value;
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            description: value
                          })
                        });
                      });
                    }
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'
                    )
                  ),
                  !this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__["a" /* default */], {
                    isMultiple: false,
                    handleUpload: img => this.handleCoverUpload(img)
                  }),
                  this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_antd__["Card"],
                    { bordered: false, className: 'imgWr',
                      onClick: () => this.showModalSelectImage('cover')
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.state.data.coverUrl })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
                  { style: { marginRight: 10 },
                    onClick: () => this.showModalSelectImage('cover')
                  },
                  'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'
                ),
                this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
                  {
                    onClick: () => {
                      this.setState(prevState => {
                        return _extends({}, prevState, {
                          data: _extends({}, prevState.data, {
                            coverUrl: null
                          })
                        });
                      });
                    }
                  },
                  'X\xF3a \u1EA3nh '
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'N\u1ED9i dung', key: '2' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                  { className: 'padding-5' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Components_CKEditor__["a" /* default */], {
                    id: 1,
                    value: this.state.data.body || '',
                    onChange: value => {
                      console.log(value);
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            body: value
                          })
                        });
                      });
                    }
                  })
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Modal"],
        {
          style: { top: 30 },
          width: '90%',
          title: 'Basic Modal', visible: this.state.modalSelectImage,
          onOk: this.handleOk, onCancel: this.handleCancel
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img) })
      )
    );
  }
}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__style_css___default.a)(EditNewsComponent));

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








class ListNews extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      totalPage: 1,
      data: []
    };
    this.getProducts(1);
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd__["Table"], { columns: columns, rowKey: record => record.slug, dataSource: this.state.data })
    );
  }
  getProducts(page) {
    var _this = this;

    return _asyncToGenerator(function* () {

      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: "{getProducts{coverUrl, slug,name, price, body, view, saleOff, created_at}}"
        }),
        credentials: 'include'
      });

      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          page: data.getProducts.page,
          totalPage: data.getProducts.totalPage,
          data: data.getProducts
        });
      });
    })();
  }
}

const columns = [{
  title: 'Tên sản phẩm',
  dataIndex: 'name',
  key: 'name',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    text.length > 53 ? text.slice(0, 50) + '...' : text
  )
}, {
  title: 'Giá sản phẩm',
  dataIndex: 'price',
  key: 'price',
  render: price => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    price
  )
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */],
      { to: "/admin/product?v=edit&slug=" + record.slug },
      'S\u1EEDa'
    )
  )
}];

/* harmony default export */ __webpack_exports__["default"] = (ListNews);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Sản phẩm';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/product',

  action({ query }) {
    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/news?v=list' };
      }
      const { App, EditProduct, ListProduct } = yield __webpack_require__(19);
      let component = {};

      if (query.v === 'list') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListProduct, { title: title })
        );
      } else if (query.v === 'add') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditProduct, { mode: 'add', isEdit: false })
        );
      } else if (query.slug && query.v === 'edit') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditProduct, { mode: 'edit', isEdit: true, slug: query.slug })
        );
      } else if (query.v !== 'list') {
        return { redirect: '/admin/news?v=list' };
      }

      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component
      };
    })();
  }
});

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import CodeMirror from '../Components/CodeMirror'


const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(180);
if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

class Setting extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      setting: {}
    };
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ setting{ssr, css, scriptTop, scriptBottom} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState({
        setting: data.setting
      });
    })();
  }

  toggleSSR() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      _this2.setState(function (prevState) {
        return _extends({}, prevState, {
          setting: _extends({}, prevState.setting, {
            ssr: !prevState.setting.ssr
          })
        });
      });
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: 'mutation { updateSetting(ssr: ' + !_this2.state.setting.ssr + ') { ssr } }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      if (data.updateSetting) {
        __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Update successful');
        _this2.setState(function (prevState) {
          return _extends({}, prevState, {
            setting: _extends({}, prevState.setting, {
              ssr: data.updateSetting.ssr
            })
          });
        });
      } else {
        _this2.setState(function (prevState) {
          return _extends({}, prevState, {
            setting: _extends({}, prevState.setting, {
              ssr: !prevState.setting.ssr
            })
          });
        });
      }
    })();
  }

  updateSetting(setting) {
    __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('/api/setting/update', setting).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      this.state.setting.ssr !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          null,
          'SSR: '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Switch"], { checked: this.state.setting.ssr, onChange: () => this.toggleSSR() })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Panel,
          { header: 'STYLESHEETS', key: '1' },
          this.state.setting.css !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
            { className: 'padding-5' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CodeMirror, {
              value: this.state.setting.css, onChange: value => this.setState(prev => {
                return _extends({}, prev, {
                  setting: _extends({}, prev.setting, {
                    css: value
                  })
                });
              })
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Panel,
          { header: 'Javascript đầu trang', key: '2' },
          this.state.setting.scriptTop !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
            { className: 'padding-5' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CodeMirror, {
              value: this.state.setting.scriptTop, onChange: value => this.setState(prev => {
                return _extends({}, prev, {
                  setting: _extends({}, prev.setting, {
                    scriptTop: value
                  })
                });
              })
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Panel,
          { header: 'Javascript cuối trang', key: '3' },
          this.state.setting.scriptBottom !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
            { className: 'padding-5' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CodeMirror, {
              value: this.state.setting.scriptBottom, onChange: value => this.setState(prev => {
                return _extends({}, prev, {
                  setting: _extends({}, prev.setting, {
                    scriptBottom: value
                  })
                });
              })
            })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
          {
            size: 'large',
            type: 'primary',
            onClick: () => {
              this.updateSetting(this.state.setting);
            }
          },
          'C\u1EADp nh\u1EADp'
        )
      )
    );
  }
}

Setting.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Setting);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Setting';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/setting',

  action({ query }) {
    return _asyncToGenerator(function* () {
      const { App, Setting } = yield __webpack_require__(19);
      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Setting, { title: title })
        )
      };
    })();
  }
});

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main4__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(13);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Partials_Main4__["a" /* default */], { post: this.props.post }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__["a" /* default */], null)
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/bai-viet/:slug',
  action({ store, params }) {
    return _asyncToGenerator(function* () {
      // process.env.BROWSER
      var post;
      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{getOnePost(slug: "' + params.slug + '"){title,slug,body,category, description}}'
          }),
          credentials: 'include'
        });
        let { data } = yield resp.json();
        // if (!data || !data.getOnePost) throw new Error('Failed to load data.');
        if (!data || !data.getOnePost) {
          return { redirect: '/' };
        }
        store.dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */](data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }
      return {
        title: store.getState().data.post.value.title,
        description: store.getState().data.post.value.description,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { post: store.getState().data.post.value })
        )
      };
    })();
  }

});

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main5__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(13);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Partials_Main5__["a" /* default */], { posts: this.props.posts, title: this.props.title }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__["a" /* default */], null)
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/danh-muc/:slug',
  action({ store, params, query }) {
    return _asyncToGenerator(function* () {
      let page = query.p || 1;

      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{getNewsInCategory(page:' + page + ', slug: "' + params.slug + '" ){page,totalPage,data{title, slug, coverUrl, description}}}'
          }),
          credentials: 'include'
        });
        const { data } = yield resp.json();
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }
      return {
        title: 'Danh mục: ' + mapSlugToName(params.slug),
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { posts: store.getState().data.newsInCategory.value, title: mapSlugToName(params.slug) })
        )
      };
    })();
  }

});

function mapSlugToName(slug) {
  switch (slug) {
    case 'mon-ngon-tu-com':
      return 'Món ngon từ cốm';
      break;
    case 'cach-lam-mon-ngon-tai-nha':
      return 'Cách làm món ngon tại nhà';
      break;
    case 'su-kien':
      return 'Sự kiện';
      break;
    case 'tin-tuc-tong-hop':
      return 'Tin tức tổng hợp';
      break;
    default:
      return '';
  }
}

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main7__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(13);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Partials_Main7__["a" /* default */], { products: this.props.products }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__["a" /* default */], null)
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/san-pham',
  action({ store }) {
    return _asyncToGenerator(function* () {
      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{ getProducts{name, price, slug, coverUrl, description, saleOff, body, created_at} }'
          }),
          credentials: 'include'
        });
        const { data } = yield resp.json();
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }

      return {
        title: 'Trang danh sách sản phẩm',
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { products: store.getState().data.products.value })
        )
      };
    })();
  }

});

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ErrorPage_css__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






class ErrorPage extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])();
    if (false) {
      const { error } = this.props;
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          error.name
        ),
        React.createElement(
          'p',
          null,
          error.message
        ),
        React.createElement(
          'pre',
          null,
          error.stack
        )
      );
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        'Error'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'Sorry, a critical error occurred on this page.'
      )
    );
  }
}

ErrorPage.propTypes = {
  error: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    name: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    message: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    stack: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
  }).isRequired
};

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__ErrorPage_css___default.a)(ErrorPage));

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(13);








class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Partials_Main__["a" /* default */], { data: this.props.data }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__["a" /* default */], null)
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/',
  action({ store }) {
    return _asyncToGenerator(function* () {
      // process.env.BROWSER
      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{getProducts{name, slug, price, coverUrl, description, saleOff, body, created_at}, getNews(page: 1 ){page,totalPage,data{title, slug, coverUrl, description}}, getFoodNews(page: 1 ){page,totalPage,data{title, slug, coverUrl, description}} }'
          }),
          credentials: 'include'
        });

        const { data } = yield resp.json();
        if (!data) throw new Error('Failed to load the news feed.');
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }

      return {
        title: 'Trang chủ',
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { data: store.getState().data })
        )
      };
    })();
  }

});

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
/* harmony default export */ __webpack_exports__["a"] = ({

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [__webpack_require__(118).default, __webpack_require__(123).default, __webpack_require__(127).default, __webpack_require__(115).default,
  // require('./landingpage').default,
  __webpack_require__(121).default, __webpack_require__(113).default, __webpack_require__(129).default, __webpack_require__(111).default,
  // require('./contact').default,
  // require('./login').default,
  // require('./register').default,
  // require('./about').default,
  // require('./privacy').default,
  __webpack_require__(96).default,
  // Wildcard routes, e.g. { path: '*', ... } (must go last)
  __webpack_require__(125).default],

  action({ next, store }) {
    return _asyncToGenerator(function* () {
      if (false) {
        window.numRendered = 0;
      }
      // Execute each child route until one of them return the result
      const route = yield next();

      // Provide default values for title, description etc.
      route.title = `${route.title || 'Untitled Page'} - ComHoaVang.Com`;
      route.description = route.description || '';

      return route;
    })();
  }

});

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main7__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(13);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-md-6' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'form',
                { className: 'form-horizontal' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'fieldset',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'legend',
                    null,
                    '\u0110\u1EB7t h\xE0ng'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'label',
                      { className: 'col-md-4 control-label', htmlFor: 'product_id' },
                      'H\u1ECD V\xE0 T\xEAn:'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'col-md-8' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { id: 'product_id', name: 'product_id', placeholder: 'H\u1ECD V\xE0 T\xEAn', className: 'form-control input-md', required: true, type: 'text' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'label',
                      { className: 'col-md-4 control-label', htmlFor: 'product_name' },
                      'S\u1ED1 \u0111i\u1EC7n tho\u1EA1i:'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'col-md-8' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { id: 'product_name', name: 'product_name', placeholder: 'S\u1ED1 \u0111i\u1EC7n tho\u1EA1i', className: 'form-control input-md', required: true, type: 'text' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'label',
                      { className: 'col-md-4 control-label', htmlFor: 'product_description' },
                      '\u0110\u1ECBa ch\u1EC9:'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'col-md-8' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { className: 'form-control', id: 'product_description', name: 'product_description', defaultValue: "" })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'label',
                      { className: 'col-md-4 control-label', htmlFor: 'product_categorie' },
                      'S\u1EA3n ph\u1EA9m:'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'col-md-8' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'select',
                        { id: 'product_categorie', name: 'product_categorie', className: 'form-control' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: 'C\u1ED1m kh\xF4' },
                          'C\u1ED1m kh\xF4'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: 'Ch\u1EA3 c\u1ED1m' },
                          'Ch\u1EA3 c\u1ED1m'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'option',
                          { value: 'C\u1ED1m non t\u01B0\u01A1i' },
                          'C\u1ED1m non t\u01B0\u01A1i'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'label',
                      { className: 'col-md-4 control-label', htmlFor: 'available_quantity' },
                      'S\u1ED1 l\u01B0\u1EE3ng (kg):'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'col-md-8' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { id: 'available_quantity', name: 'available_quantity', placeholder: 'VD: 1kg', className: 'form-control input-md', required: true, type: 'text' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label', { className: 'col-md-4 control-label', htmlFor: 'singlebutton' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'col-md-8' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { id: 'singlebutton', name: 'singlebutton', className: 'btn btn-primary' },
                        '\u0110\u1EB7t h\xE0ng'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'legend',
                    null,
                    'Li\xEAn h\u1EC7'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Hotline : ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      { style: { color: 'red' } },
                      '0973318868'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    '\u0110\u1ECBa ch\u1EC9 : 128 \u2013 Ch\u1EE3 M\u1EC5 Tr\xEC \u2013 Qu\u1EADn Nam T\u1EEB Li\xEAm \u2013 H\xE0 N\u1ED9i'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-md-6' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'fieldset',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'legend',
                  null,
                  'H\xECnh th\u1EE9c thanh to\xE1n'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  null,
                  '\u0110\u1EC3 thu\u1EADn l\u1EE3i h\u01A1n cho qu\xED kh\xE1ch mua C\u1ED1m, ch\xFAng t\xF4i c\xF3 2 h\xECnh th\u1EE9c thanh to\xE1n sau :'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  null,
                  'Kh\xE1ch h\xE0ng \u1EDF g\u1EA7n (b\xE1n k\xEDnh 20km) : Qu\xFD kh\xE1ch thanh to\xE1n b\u1EB1ng chuy\u1EC3n kho\u1EA3n ho\u1EB7c ti\u1EC1n m\u1EB7t sau khi nh\u1EADn c\u1ED1m .'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  null,
                  'Kh\xE1ch h\xE0ng \u1EDF xa (tr\xEAn 20km) : Qu\xFD kh\xE1ch vui l\xF2ng thanh to\xE1n 100% \u0111\u01A1n h\xE0ng tr\u01B0\u1EDBc khi nh\u1EADn h\xE0ng.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    null,
                    'Th\xF4ng tin t\xE0i kho\u1EA3n'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  null,
                  'Ch\u1EE7 t\xE0i kho\u1EA3n : ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    { style: { color: 'red' } },
                    'Nguy\u1EC5n H\u1EEFu T\xFA'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  null,
                  'S\u1ED1 t\xE0i kho\u1EA3n : ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    { style: { color: 'red' } },
                    '84387487'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  null,
                  'Ng\xE2n h\xE0ng: ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    { style: { color: 'red' } },
                    'VPBank chi nh\xE1nh \u0110\xF4ng \u0110\xF4'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  null,
                  'Hotline : ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    { style: { color: 'red' } },
                    '0973318868'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  null,
                  '\u0110\u1ECBa ch\u1EC9 : 128 \u2013 Ch\u1EE3 M\u1EC5 Tr\xEC \u2013 Qu\u1EADn Nam T\u1EEB Li\xEAm \u2013 H\xE0 N\u1ED9i'
                )
              )
            )
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(14);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }








/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/lien-he-dat-hang',
  action({ store }) {
    return _asyncToGenerator(function* () {
      if (true) {}
      return {
        title: 'Liên hệ đặt hàng',
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], null)
        )
      };
    })();
  }

});

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main2__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(13);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Partials_Main2__["a" /* default */], { posts: this.props.posts }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__["a" /* default */], null)
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/mon-ngon',
  action({ store, query }) {
    return _asyncToGenerator(function* () {
      let page = 1;
      if (query.p) page = query.p;

      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{getFoodNews(page:' + page + ' ){page,totalPage,data{title, slug, coverUrl, description}}}'
          }),
          credentials: 'include'
        });
        const { data } = yield resp.json();
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }

      return {
        title: 'Trang món ngon',
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { posts: store.getState().data.foodNews.value })
        )
      };
    })();
  }

});

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__NotFound_css__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class NotFound extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a.root },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a.container },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          this.props.title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Sorry, the page you were trying to view does not exist.'
        )
      )
    );
  }
}

NotFound.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a)(NotFound));

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(6);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Page Not Found';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '*',

  action() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])();
    return {
      title,
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__NotFound__["a" /* default */], { title: title })
      ),
      status: 404
    };
  }

});

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main6__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(13);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Partials_Main6__["a" /* default */], { product: this.props.product, products: this.props.products }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__["a" /* default */], null)
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/san-pham/:slug',
  action({ store, params }) {
    return _asyncToGenerator(function* () {
      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{ getProducts{name, slug, price, coverUrl, description, saleOff, body, created_at},getOneProduct(slug: "' + params.slug + '"){name, price, coverUrl, description, saleOff, body, created_at} }'
          }),
          credentials: 'include'
        });
        const { data } = yield resp.json();
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }

      return {
        title: store.getState().data.product.value.name,
        description: store.getState().data.product.value.description,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { product: store.getState().data.product.value, products: store.getState().data.products.value })
        )
      };
    })();
  }

});

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partials_Header__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partials_Main3__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Partials_Footer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Partials_MenuMobile__ = __webpack_require__(13);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'mainContent' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Partials_Main3__["a" /* default */], { news: this.props.news }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Partials_Aside__["a" /* default */], null)
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/tin-tuc',
  action({ store, query }) {
    return _asyncToGenerator(function* () {
      let page = 1;
      if (query.p) page = query.p;

      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{getNews(page:' + page + ' ){page,totalPage,data{title, slug, coverUrl, description}}}'
          }),
          credentials: 'include'
        });
        const { data } = yield resp.json();
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }

      return {
        title: 'Trang tin tức',
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { news: store.getState().data.news.value })
        )
      };
    })();
  }

});

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(23);
var router = express.Router();
const mongoose = __webpack_require__(7);
const Post = mongoose.model('Post');
const Setting = mongoose.model('Setting');
const Product = mongoose.model('Product');
let bodyParser = __webpack_require__(43);

router.post('/post/new', bodyParser.json(), (req, res) => {
  Post.create(req.body, (err, resData) => {
    if (err) res.sendStatus(400);
    res.send(resData);
  });
});

router.post('/post/update', bodyParser.json(), (req, res) => {
  Post.findOneAndUpdate({ slug: req.body.slug }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/setting/update', bodyParser.json(), (req, res) => {
  Setting.findOneAndUpdate({ id: "setting" }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send('error');
    res.send(resData);
  });
});

router.post('/product/new', bodyParser.json(), (req, res) => {
  Product.create(req.body, (err, resData) => {
    if (err) res.sendStatus(400);
    res.send(resData);
  });
});

router.post('/product/update', bodyParser.json(), (req, res) => {
  console.log(req.body);
  Product.findOneAndUpdate({ slug: req.body.slug }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

module.exports = router;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(23);
var router = express.Router();

let mongoose = __webpack_require__(7);
const User = mongoose.model('User');
// const Token = mongoose.model('Token')
// const Session = mongoose.model('Session')

let passport = __webpack_require__(45);
let FacebookStrategy = __webpack_require__(46).Strategy;
let GoogleStrategy = __webpack_require__(166).OAuth2Strategy;
let LocalStrategy = __webpack_require__(167).Strategy;
// let bodyParser = require('body-parser')

passport.use(new LocalStrategy(function (username, password, done) {
  console.log("strategy function starting...");
  User.getUserByEmail(username, function (err, user) {
    if (err) throw err;
    if (user.length < 1) {
      console.log("strategy calling done 1");
      return done(null, false, { message: "Unknown user" });
    }
    User.comparePassword(password, user[0].password, function (err, isMatch) {
      if (err) throw err;
      if (isMatch) {
        console.log("strategy calling done 2");
        return done(null, user[0]);
      } else {
        console.log("strategy calling done 3");
        return done(null, false, { message: "Invalid password" });
      }
    });
  });
}));

passport.use(new FacebookStrategy({
  clientID: '398172067232323',
  clientSecret: 'f5466ed132ad5bd3c11519c5eee9c606',
  callbackURL: 'http://localhost:3001/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'emails', 'name']
}, function (accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ username: profile.emails[0].value }, {
    uid: profile.id,
    name: profile.displayName,
    username: profile.emails[0].value,
    provider: 'facebook',
    accessToken: accessToken,
    mustConfirmEmail: false,
    password: ''
  }, function (err, user) {
    // logoutOther(user.username)
    cb(null, user);
  });
}));

passport.use(new GoogleStrategy({
  clientID: '181209932345-e5onckmk63rbchst6djlq9tjshbkmr79.apps.googleusercontent.com',
  clientSecret: 'a6Nz9Od7WfL82VdnFwpxLvKq',
  callbackURL: "http://edu.anabim.com/auth/google/callback"
}, function (accessToken, refreshToken, profile, cb) {

  User.findOrCreate({ username: profile.emails[0].value }, {
    uid: profile.id,
    name: profile.displayName,
    username: profile.emails[0].value,
    provider: 'google',
    accessToken: accessToken,
    password: '',
    mustConfirmEmail: false
  }, function (err, user) {
    logoutOther(user.username);
    cb(null, user);
  });
}));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

router.get('/session/:email', (req, res) => {
  var r = new RegExp(req.params.email, 'i');
  Session.remove({ session: { $regex: r } }, (err, session) => {
    if (err) throw err;
    res.send(session);
  });
});

router.post('/signup', (req, res) => {
  User.getUserByEmail(req.body.username, function (err, user) {
    if (err) throw err;
    if (user.length > 0) res.json({ status: false, m: "Email đã được đăng ký" });else User.createUser(req.body, (err, user) => {
      if (err) throw err;
      Token.create({ type: 'signup', email: user.username }, (err, token) => {
        Mailer.sendActiveMail(user.username, user.name, 'http://edu.anabim.com/token/active/' + token.token);
        res.json({ status: true, m: user.username });
      });
    });
  });
});

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), function (req, res) {
  console.log(' call back facebook');
  res.redirect('/');
});

router.get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), function (req, res) {
  res.redirect('/');
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

router.post('/login', passport.authenticate('local', { successRedirect: '/auth/login/ok',
  failureRedirect: '/auth/login/false' }));

router.get('/login/ok', function (req, res, next) {
  // Mailer.sendRegister('luanlv2591@gmail.com', 'Luan')
  res.send(true);
});

router.get('/login/false', function (req, res, next) {
  res.send(false);
});

module.exports = router;

// var logoutOther = (username) => {
//   var r = new RegExp(username,'i');
//   Session.remove({session: {$regex: r}}, (err, session) => {
//     if (err) throw err
//   })
// }

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(23);
var router = express.Router();
const path = __webpack_require__(32);
const fs = __webpack_require__(158);
var request = __webpack_require__(173);
var Gm = __webpack_require__(44);
var utf8 = __webpack_require__(175);
var iconv = __webpack_require__(160);

router.use('/small/', getSmallImage, express.static(path.join(__dirname, '../images-small')));

router.use('/', express.static(path.join(__dirname, '../images')));

function getSmallImage(req, res, next) {
  var imageName = decodeURI(req.originalUrl.slice(13));
  var originalPathImage = path.join(__dirname, '../images/', imageName);
  if (!fs.existsSync(originalPathImage)) {
    return next();
  }
  var pathImage = path.join(__dirname, '../images-small/', imageName);
  if (fs.existsSync(pathImage)) {
    next();
  } else {
    Gm(originalPathImage).resize(300, "!").write(pathImage, function (err) {
      if (err) console.log(err);
      next();
    });
    next();
  }
}

router.use('*', (req, res, next) => {
  res.status(404).send('not found!');
});

var download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

module.exports = router;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(23);
var router = express.Router();
const fileUpload = __webpack_require__(155);
const path = __webpack_require__(32);
var sizeOf = __webpack_require__(161);
var Gm = __webpack_require__(44);
//mongodb

const mongoose = __webpack_require__(7);
const Image = mongoose.model('Image');

router.use(fileUpload());

router.post('/image', function (req, res) {
  if (!req.files) return res.status(400).send('No files were uploaded.');
  let image = req.files.image;
  let id = randomString(10);
  let fileName = id + '-' + image.name;
  image.mv(path.join(__dirname, '../images', fileName), function (err) {
    if (err) return res.status(500).send(err);
    let dimensions = sizeOf(image.data);
    let data = {
      slug: id,
      name: fileName,
      type: image.mimetype,
      dimensions: dimensions,
      userUpload: 'admin'
    };
    Image.create(data, (err, image) => {
      if (err) return res.status(400).send("database error");
      res.send(image);
    });
  });
});

router.post('/imageCKEditor', function (req, res) {
  if (!req.files) return res.status(400).send('No files were uploaded.');
  let image = req.files.upload;
  let id = randomString(10);
  let fileName = id + '-' + image.name;
  let pathWithName = path.join(__dirname, '../images', fileName);
  let pathWithName2 = path.join(__dirname, '../images', 'test.jpg');
  let watermark = path.join(__dirname, '../images', 'watermark.png');
  image.mv(pathWithName, function (err) {
    if (err) return res.status(500).send(err);
    Gm(pathWithName).draw(['image over 0,0 0,0 ' + watermark]).write(pathWithName, function (err) {
      if (err) console.log(err);
    });
    let dimensions = sizeOf(image.data);
    let data = {
      slug: id,
      name: fileName,
      type: image.mimetype,
      dimensions: dimensions,
      userUpload: 'admin'
    };
    Image.create(data, (err, image) => {
      if (err) return res.status(400).send({
        uploaded: 0,
        error: {
          message: 'error'
        }
      });
      res.send({
        uploaded: 1,
        fileName: image.name,
        url: '/image/' + image.name
      });
    });
  });
});

router.post('/imageFroala', function (req, res) {
  if (!req.files) return res.status(400).send('No files were uploaded.');
  let image = req.files.image;
  let id = randomString(10);
  let fileName = id + '-' + image.name;
  image.mv(path.join(__dirname, '../images', fileName), function (err) {
    if (err) return res.status(500).send(err);
    let dimensions = sizeOf(image.data);
    let data = {
      slug: id,
      name: fileName,
      type: image.mimetype,
      dimensions: dimensions,
      userUpload: 'admin'
    };
    Image.create(data, (err, image) => {
      if (err) return res.status(400).send({
        uploaded: 0,
        error: {
          message: 'error'
        }
      });
      res.send({
        link: '/image/' + image.name
      });
    });
  });
});

module.exports = router;

function randomString(len, charSet) {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var randomString = '';
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createHelpers__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger__ = __webpack_require__(136);
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;






function configureStore(initialState, helpersConfig) {
  const helpers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__createHelpers__["a" /* default */])(helpersConfig);
  const middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(helpers)];

  let enhancer;

  if (false) {
    middleware.push(createLogger());

    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    let devToolsExtension = f => f;
    if (process.env.BROWSER && window.devToolsExtension) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = compose(applyMiddleware(...middleware), devToolsExtension);
  } else {
    enhancer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(...middleware);
  }

  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (false) {
    module.hot.accept('../reducers', () =>
    // eslint-disable-next-line global-require
    store.replaceReducer(require('../reducers').default));
  }

  return store;
}

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_fetch__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = createHelpers;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



function createGraphqlRequest(fetchKnowingCookie) {
  return (() => {
    var _ref = _asyncToGenerator(function* (query, variables) {
      const fetchConfig = {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, variables }),
        credentials: 'include'
      };
      const resp = yield fetchKnowingCookie('/graphql', fetchConfig);
      if (resp.status !== 200) throw new Error(resp.statusText);
      return resp.json();
    });

    function graphqlRequest(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return graphqlRequest;
  })();
}

function createFetchKnowingCookie({ cookie }) {
  if (true) {
    return (url, options = {}) => {
      const isLocalUrl = /^\/($|[^/])/.test(url);

      // pass cookie only for itself.
      // We can't know cookies for other sites BTW
      if (isLocalUrl && options.credentials === 'include') {
        const headers = _extends({}, options.headers, {
          cookie
        });
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(url, _extends({}, options, { headers }));
      }

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(url, options);
    };
  }

  return __WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */];
}

function createHelpers(config) {
  const fetchKnowingCookie = createFetchKnowingCookie(config);
  const graphqlRequest = createGraphqlRequest(fetchKnowingCookie);

  return {
    fetch: fetchKnowingCookie,
    graphqlRequest,
    history: config.history
  };
}

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
/* unused harmony export default */


function inspectObject(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_util__["inspect"])(object, {
    colors: true
  });
}

function singleLine(str) {
  return str.replace(/\s+/g, ' ');
}

const actionFormatters = {
  // This is used at feature/apollo branch, but it can help you when implementing Apollo
  APOLLO_QUERY_INIT: a => `queryId:${a.queryId} variables:${inspectObject(a.variables)}\n   ${singleLine(a.queryString)}`,

  APOLLO_QUERY_RESULT: a => `queryId:${a.queryId}\n   ${singleLine(inspectObject(a.result))}`,

  APOLLO_QUERY_STOP: a => `queryId:${a.queryId}`
};

// Server side redux action logger
function createLogger() {
  // eslint-disable-next-line no-unused-vars
  return store => next => action => {
    let formattedPayload = '';
    const actionFormatter = actionFormatters[action.type];
    if (typeof actionFormatter === 'function') {
      formattedPayload = actionFormatter(action);
    } else if (action.toString !== Object.prototype.toString) {
      formattedPayload = action.toString();
    } else if (typeof action.payload !== 'undefined') {
      formattedPayload = inspectObject(action.payload);
    } else {
      formattedPayload = inspectObject(action);
    }

    console.log(` * ${action.type}: ${formattedPayload}`); // eslint-disable-line no-console
    return next(action);
  };
}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, "*{line-height:1.2;margin:0}html{color:#888;display:table;font-family:sans-serif;height:100%;text-align:center;width:100%}body{display:table-cell;vertical-align:middle;padding:2em}h1{color:#555;font-size:2em;font-weight:400}p{margin:0 auto;width:280px}pre{text-align:left;margin-top:32px;margin-top:2rem}@media only screen and (max-width:280px){body,p{width:95%}h1{font-size:1.5em;margin:0 0 .3em}}", ""]);

// exports


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, "._3_3g8{padding-left:20px;padding-right:20px}._3FKMx{margin:0 auto;padding:0 0 40px;max-width:1000px}", ""]);

// exports
exports.locals = {
	"root": "_3_3g8",
	"container": "_3FKMx"
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(137);
    var insertCss = __webpack_require__(22);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/postcss-loader/index.js??ref--2-2!./style.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/postcss-loader/index.js??ref--2-2!./style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(138);
    var insertCss = __webpack_require__(22);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/postcss-loader/index.js??ref--2-2!./style.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/postcss-loader/index.js??ref--2-2!./style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(139);
    var insertCss = __webpack_require__(22);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/postcss-loader/index.js??ref--2-2!./style.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/postcss-loader/index.js??ref--2-2!./style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(141);
    var insertCss = __webpack_require__(22);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/index.js??ref--2-2!./NotFound.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/index.js??ref--2-2!./NotFound.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'Select time',
  dateSelect: 'Select date',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
module.exports = exports['default'];

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Goto',
  page: '',

  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
};
module.exports = exports['default'];

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = require("./assets.json");

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = require("express-fileupload");

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports = require("iconv-lite");

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = require("image-size");

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports = require("mongoose-auto-increment");

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports = require("mongoose-findorcreate");

/***/ }),
/* 165 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = require("passport-google-oauth");

/***/ }),
/* 167 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 168 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 169 */
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = require("slug");

/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = require("utf8");

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
module.exports = __webpack_require__(49);


/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = require("react-codemirror");

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = require("react-resize-detector");

/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports = require("react-sticky");

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map