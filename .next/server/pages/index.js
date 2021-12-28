(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/banner/Banner.js":
/*!*************************************!*\
  !*** ./components/banner/Banner.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_banner_banner_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/banner/banner.module.scss */ "./styles/banner/banner.module.scss");
/* harmony import */ var _styles_banner_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_banner_banner_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_info_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/info/actions */ "./store/info/actions.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./store/index.js");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _loader_sliderLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loader/sliderLoader */ "./components/loader/sliderLoader.js");

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\banner\\Banner.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const settings = {
  dots: true,
  infinite: true,
  autoplaySpeed: 4000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  className: (_styles_banner_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sliderWrapper)
};

function Banner({
  dispatch,
  banners,
  loading
}) {
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    (0,_store_info_actions__WEBPACK_IMPORTED_MODULE_3__.getBanners)(dispatch, {});
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_banner_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default().bannerWrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loader_sliderLoader__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 20
      }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({}, settings), {}, {
        children: banners === null || banners === void 0 ? void 0 : banners.map((item, idx) => {
          var _item$banner;

          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_banner_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default().slideItem),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              alt: item.title,
              src: (_item$banner = item.banner) === null || _item$banner === void 0 ? void 0 : _item$banner.url
            }, item._id, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this)
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_store__WEBPACK_IMPORTED_MODULE_4__.connectContext)(Banner, ({
  info: {
    banners
  }
}) => ({
  banners: banners.data || [],
  loading: banners.loading
})));

/***/ }),

/***/ "./components/bestsellers/Bestsellers.js":
/*!***********************************************!*\
  !*** ./components/bestsellers/Bestsellers.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loader_ProductLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader/ProductLoader */ "./components/loader/ProductLoader.js");
/* harmony import */ var _product_productItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product/productItem */ "./components/product/productItem.js");
/* harmony import */ var _styles_bestsellers_bestsellers_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/bestsellers/bestsellers.module.scss */ "./styles/bestsellers/bestsellers.module.scss");
/* harmony import */ var _styles_bestsellers_bestsellers_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_bestsellers_bestsellers_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./store/index.js");
/* harmony import */ var _store_products_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/products/actions */ "./store/products/actions.js");
/* harmony import */ var _store_bucket_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/bucket/actions */ "./store/bucket/actions.js");

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\bestsellers\\Bestsellers.js";









const Bestsellers = ({
  dispatch,
  bestsellers,
  loading
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const goToSeeAll = () => {
    router.push('/catalog?heading=Хит%20продаж&topSelling=true');
  };

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    (0,_store_bucket_actions__WEBPACK_IMPORTED_MODULE_7__.getItems)(dispatch);
    (0,_store_products_actions__WEBPACK_IMPORTED_MODULE_6__.getTopProducts)(dispatch, {
      limit: 10
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_bestsellers_bestsellers_module_scss__WEBPACK_IMPORTED_MODULE_8___default().wrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "\u0425\u0438\u0442\u044B \u043F\u0440\u043E\u0434\u0430\u0436"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_bestsellers_bestsellers_module_scss__WEBPACK_IMPORTED_MODULE_8___default().content),
        children: [loading ? [...Array(10).keys()].map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_bestsellers_bestsellers_module_scss__WEBPACK_IMPORTED_MODULE_8___default().loaderWrapper),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loader_ProductLoader__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }, undefined)
        }, item, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 15
        }, undefined)) : null, bestsellers === null || bestsellers === void 0 ? void 0 : bestsellers.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_product_productItem__WEBPACK_IMPORTED_MODULE_4__.default, {
          item: item
        }, item._id, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 37
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_styles_bestsellers_bestsellers_module_scss__WEBPACK_IMPORTED_MODULE_8___default().seeAll),
        onClick: goToSeeAll,
        children: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_store__WEBPACK_IMPORTED_MODULE_5__.connectContext)(Bestsellers, ({
  products: {
    top
  }
}) => ({
  bestsellers: top.data || [],
  loading: top.loading
})));

/***/ }),

/***/ "./components/footer/footer.js":
/*!*************************************!*\
  !*** ./components/footer/footer.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_icons_appstore_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/icons/appstore.svg */ "./public/icons/appstore.svg");
/* harmony import */ var _public_icons_googleplay_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/icons/googleplay.svg */ "./public/icons/googleplay.svg");
/* harmony import */ var _public_icons_vk_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/icons/vk.svg */ "./public/icons/vk.svg");
/* harmony import */ var _public_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/icons/facebook.svg */ "./public/icons/facebook.svg");
/* harmony import */ var _public_icons_ok_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/icons/ok.svg */ "./public/icons/ok.svg");
/* harmony import */ var _public_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/icons/instagram.svg */ "./public/icons/instagram.svg");
/* harmony import */ var _public_icons_mail_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/icons/mail.svg */ "./public/icons/mail.svg");
/* harmony import */ var _public_icons_phone_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/icons/phone.svg */ "./public/icons/phone.svg");
/* harmony import */ var _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../styles/footer/footer.module.scss */ "./styles/footer/footer.module.scss");
/* harmony import */ var _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\footer\\footer.js";













const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    className: (_styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().footer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().topContent),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().content),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().column),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044F\u043C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/help",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: "\u041A\u0430\u043A \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 27,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/help",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: "\u0421\u043F\u043E\u0441\u043E\u0431\u044B \u043E\u043F\u043B\u0430\u0442\u044B"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/help",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/help",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: "\u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u0442\u043E\u0432\u0430\u0440\u0430"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/help",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043E\u0442\u0432\u0435\u0442\u044B"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().column),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/about",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: "\u041E \u043D\u0430\u0441"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/contacts",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().column),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "\u041C\u044B \u0432 \u0441\u043E\u0446 \u0441\u0435\u0442\u044F\u0445"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                      src: _public_icons_vk_svg__WEBPACK_IMPORTED_MODULE_6__.default,
                      alt: "vk"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 24
                    }, undefined), "\u0412\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                      src: _public_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_7__.default,
                      alt: "facebook"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 77,
                      columnNumber: 24
                    }, undefined), "Facebook"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                      src: _public_icons_ok_svg__WEBPACK_IMPORTED_MODULE_8__.default,
                      alt: "ok"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 24
                    }, undefined), "\u041E\u0434\u043D\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u0438\u043A\u0438"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                      src: _public_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_9__.default,
                      alt: "instagram"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 24
                    }, undefined), "Instagram"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().column),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "mailto:mail@bimed.kg",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                      src: _public_icons_mail_svg__WEBPACK_IMPORTED_MODULE_10__.default,
                      alt: "mail"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 23
                    }, undefined), "mail@bimed.kg"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "tel:+996555555555",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                      src: _public_icons_phone_svg__WEBPACK_IMPORTED_MODULE_11__.default,
                      alt: "phone"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 23
                    }, undefined), "+996555 55 55 55"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                    src: _public_icons_appstore_svg__WEBPACK_IMPORTED_MODULE_4__.default,
                    alt: "appstore"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 24
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                    src: _public_icons_googleplay_svg__WEBPACK_IMPORTED_MODULE_5__.default,
                    alt: "google play"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 24
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().footerBottom),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u0430\u0439\u0442\u043E\u0432 \u0438 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "https://sunrisestudio.pro",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: ["www.sunrisestudio.pro ", new Date().getFullYear()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(Footer));

/***/ }),

/***/ "./components/header/header.js":
/*!*************************************!*\
  !*** ./components/header/header.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _headerProfileNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./headerProfileNav */ "./components/header/headerProfileNav.js");
/* harmony import */ var _modals_feedBack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/feedBack */ "./components/modals/feedBack.js");
/* harmony import */ var _modals_wholesalers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals/wholesalers */ "./components/modals/wholesalers.js");
/* harmony import */ var _modals_cartModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modals/cartModal */ "./components/modals/cartModal.js");
/* harmony import */ var _modals_productModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modals/productModal */ "./components/modals/productModal.js");
/* harmony import */ var _headerMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./headerMenu */ "./components/header/headerMenu.js");
/* harmony import */ var _public_icons_logo_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../public/icons/logo.svg */ "./public/icons/logo.svg");
/* harmony import */ var _public_icons_search_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../public/icons/search.svg */ "./public/icons/search.svg");
/* harmony import */ var _public_icons_close_black_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../public/icons/close-black.svg */ "./public/icons/close-black.svg");
/* harmony import */ var _public_icons_mobile_search_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../public/icons/mobile-search.svg */ "./public/icons/mobile-search.svg");
/* harmony import */ var _public_icons_heart_black_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../public/icons/heart-black.svg */ "./public/icons/heart-black.svg");
/* harmony import */ var _public_icons_login_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../public/icons/login.svg */ "./public/icons/login.svg");
/* harmony import */ var _public_icons_cart_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../public/icons/cart.svg */ "./public/icons/cart.svg");
/* harmony import */ var _public_icons_mobile_logo_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../public/icons/mobile-logo.png */ "./public/icons/mobile-logo.png");
/* harmony import */ var _public_icons_user_header_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../public/icons/user-header.svg */ "./public/icons/user-header.svg");
/* harmony import */ var _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../styles/header/header.module.scss */ "./styles/header/header.module.scss");
/* harmony import */ var _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../store */ "./store/index.js");
/* harmony import */ var _store_user_actions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../store/user/actions */ "./store/user/actions.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _store_products_actions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../store/products/actions */ "./store/products/actions.js");

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\header\\header.js";


























const Header = ({
  dispatch,
  user,
  isLoggedIn,
  searchSuggestions
}) => {
  const [modal, setModal] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');
  const [showUserNav, setShowUserNav] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const [searchWord, setSearchWord] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');
  const [showSearch, setShowSearch] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const searchRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  const logoutHandler = () => {
    (0,_store_user_actions__WEBPACK_IMPORTED_MODULE_22__.logout)(dispatch);
  };

  const searchChange = (0,_utils__WEBPACK_IMPORTED_MODULE_23__.debounce)(({
    target: {
      value
    }
  }) => {
    setSearchWord(value);
  });

  const searchHandler = e => {
    e.preventDefault();
    router.push(`/search-result?${(0,_utils__WEBPACK_IMPORTED_MODULE_23__.objectToQuery)({
      search: searchWord
    })}`);
  };

  const goToSearch = (e, search) => {
    e.stopPropagation();
    router.push(`/search-result?${(0,_utils__WEBPACK_IMPORTED_MODULE_23__.objectToQuery)({
      search
    })}`);
  };

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    const outsideClicker = ({
      target
    }) => {
      if (searchRef.current && !searchRef.current.contains(target) && window.innerWidth > 992) {
        setShowSearch(false);
      }
    };

    document.addEventListener('mousedown', outsideClicker);
    return () => {
      document.removeEventListener('mousedown', outsideClicker);
    };
  }, [searchRef]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (searchWord.length) {
      (0,_store_products_actions__WEBPACK_IMPORTED_MODULE_24__.getSearchSuggestions)(dispatch, {
        name: searchWord
      });
    }
  }, [searchWord]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (!Object.keys(user).length && router.pathname !== '/login' && router.pathname !== '/register') {
      (0,_store_user_actions__WEBPACK_IMPORTED_MODULE_22__.loginByToken)(dispatch);
    }
  }, [user]);

  const currentModal = () => {
    switch (modal) {
      case 'feedback':
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modals_feedBack__WEBPACK_IMPORTED_MODULE_7__.default, {
          closeModal: () => setModal(''),
          showModal: modal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, undefined);

      case 'wholesalers':
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modals_wholesalers__WEBPACK_IMPORTED_MODULE_8__.default, {
          closeModal: () => setModal(''),
          showModal: modal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, undefined);

      case 'cart':
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modals_cartModal__WEBPACK_IMPORTED_MODULE_9__.default, {
          closeCart: () => setModal('')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, undefined);

      case 'menu':
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headerMenu__WEBPACK_IMPORTED_MODULE_11__.default, {
          closeMenu: () => setModal(''),
          openModal: setModal,
          showModal: modal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, undefined);

      case 'notFound':
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modals_productModal__WEBPACK_IMPORTED_MODULE_10__.default, {
          closeModal: () => setModal('')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, undefined);

      default:
        return null;
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [currentModal(), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().header),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().toplineWrapper),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().headerTopline),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().left),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/about",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      children: "\u041E \u043D\u0430\u0441"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 136,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/help",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      children: "\u041F\u043E\u043C\u043E\u0449\u044C"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/pharmacy",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      children: "\u0424\u0438\u043B\u0438\u0430\u043B\u044B"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/contacts",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 151,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().right),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "tel:+996 000 00 00 00",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        children: "\u0422\u0435\u043B: "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 161,
                        columnNumber: 25
                      }, undefined), "+996 000 00 00 00"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 160,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().line)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    onClick: () => setModal('wholesalers'),
                    children: "\u041E\u043F\u0442\u043E\u0432\u0438\u043A\u0430\u043C"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                    onClick: () => setModal('feedback'),
                    children: "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().headerContent),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().mobileBurgerLogo),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().hamburger),
              onClick: () => setModal('menu')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().mobileLogo),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_icons_mobile_logo_png__WEBPACK_IMPORTED_MODULE_19__.default.src,
                alt: "logo",
                onClick: () => router.push('/')
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().desktopLogo),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                src: _public_icons_logo_svg__WEBPACK_IMPORTED_MODULE_12__.default,
                alt: "logo",
                onClick: () => router.push('/')
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            ref: searchRef,
            className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().headerSearch),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
              action: "#",
              onSubmit: searchHandler,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text",
                placeholder: "\u041F\u043E\u0438\u0441\u043A",
                onChange: searchChange,
                onFocus: () => setShowSearch(true)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                  src: _public_icons_search_svg__WEBPACK_IMPORTED_MODULE_13__.default,
                  alt: "search"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 15
            }, undefined), searchWord.length && showSearch && searchSuggestions.length ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().searchSuggestion),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().inner),
                children: searchSuggestions.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().suggestion),
                  onClick: e => goToSearch(e, item),
                  children: item
                }, item, false, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 27
                }, undefined))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 21
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().notFound),
                onClick: () => {
                  setModal('notFound');
                  setShowSearch(false);
                },
                children: "\u041D\u0435 \u043D\u0430\u0448\u043B\u0438 \u0442\u043E, \u0447\u0442\u043E \u0438\u0441\u043A\u0430\u043B\u0438?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 19
            }, undefined) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
              [(_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().actionsWrapper)]: true,
              [(_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().actionWrapperLong)]: isLoggedIn
            }),
            children: [isLoggedIn ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().headerActions), (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().favoriteWrapper)),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                src: _public_icons_heart_black_svg__WEBPACK_IMPORTED_MODULE_16__.default,
                alt: "heart",
                onClick: () => router.push('/cart')
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 253,
                columnNumber: 21
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/favorite",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 259,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 19
            }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().line)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().headerActions), (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().mobileSearch)),
              onClick: () => setShowSearch(true),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                src: _public_icons_mobile_search_svg__WEBPACK_IMPORTED_MODULE_15__.default,
                alt: "icon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 269,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().headerActions),
              children: user !== null && user !== void 0 && user.data ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                  src: _public_icons_user_header_svg__WEBPACK_IMPORTED_MODULE_20__.default,
                  alt: "user",
                  onClick: () => setShowUserNav(!showUserNav)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 274,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  onClick: () => setShowUserNav(!showUserNav),
                  children: user.data.firstname
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 279,
                  columnNumber: 21
                }, undefined), showUserNav ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headerProfileNav__WEBPACK_IMPORTED_MODULE_6__.default, {
                  closeNav: () => setShowUserNav(false),
                  logout: logoutHandler
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 283,
                  columnNumber: 23
                }, undefined) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 19
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                  src: _public_icons_login_svg__WEBPACK_IMPORTED_MODULE_17__.default,
                  alt: "icon",
                  onClick: () => router.push('/login')
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 291,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/login",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: "\u0412\u043E\u0439\u0442\u0438"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 297,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 296,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 290,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().line)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 302,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().headerActions),
              onClick: () => setModal('cart'),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                src: _public_icons_cart_svg__WEBPACK_IMPORTED_MODULE_18__.default,
                alt: "icon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 308,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, undefined), showSearch ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().mobileSearchBlock),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            action: "#",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().searchIconMobile),
              src: _public_icons_search_svg__WEBPACK_IMPORTED_MODULE_13__.default.src,
              alt: "search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 318,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().closeSearchMobile),
              src: _public_icons_close_black_svg__WEBPACK_IMPORTED_MODULE_14__.default.src,
              onClick: () => setShowSearch(false),
              alt: "close"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 319,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              onChange: searchChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 325,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 17
          }, undefined), searchWord.length && searchSuggestions.length ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().searchSuggestion),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().inner),
              children: searchSuggestions.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().suggestion),
                onClick: e => goToSearch(e, item),
                children: item
              }, item, false, {
                fileName: _jsxFileName,
                lineNumber: 333,
                columnNumber: 29
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 330,
              columnNumber: 23
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_25___default().notFound),
              onClick: () => {
                setModal('notFound');
                setShowSearch(false);
              },
              children: "\u041D\u0435 \u043D\u0430\u0448\u043B\u0438 \u0442\u043E, \u0447\u0442\u043E \u0438\u0441\u043A\u0430\u043B\u0438?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 343,
              columnNumber: 23
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 21
          }, undefined) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 13
      }, undefined) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_store__WEBPACK_IMPORTED_MODULE_21__.connectContext)(Header, ({
  user: {
    info,
    isLoggedIn
  },
  products: {
    searchSuggestions
  }
}) => ({
  user: info,
  isLoggedIn,
  searchSuggestions: searchSuggestions.data || []
})));

/***/ }),

/***/ "./components/header/headerMenu.js":
/*!*****************************************!*\
  !*** ./components/header/headerMenu.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_icons_dropdown_arrow_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/icons/dropdown-arrow.svg */ "./public/icons/dropdown-arrow.svg");
/* harmony import */ var _public_icons_close_modal_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/icons/close-modal.svg */ "./public/icons/close-modal.svg");
/* harmony import */ var _styles_header_headerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/header/headerMenu.module.scss */ "./styles/header/headerMenu.module.scss");
/* harmony import */ var _styles_header_headerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_header_headerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\header\\headerMenu.js";









const categories = [{
  title: 'Витамины',
  subcategories: [{
    title: 'Витамин С',
    subcategories: [{
      title: 'Витамин C 900 г'
    }, {
      title: 'Витамин C 1000 г'
    }, {
      title: 'Витамин C 1500 г'
    }]
  }, {
    title: 'Витамин B',
    subcategories: [{
      title: 'Витамин B 900 г'
    }, {
      title: 'Витамин B 1000 г'
    }, {
      title: 'Витамин B 1500 г'
    }]
  }]
}, {
  title: 'Сиропы',
  subcategories: [{
    title: 'Сироп от кашля',
    subcategories: [{
      title: 'Детский'
    }, {
      title: 'Взрослый'
    }]
  }, {
    title: 'Сироп для детей'
  }]
}, {
  title: 'Лекарственные средства'
}];

const HeaderMenu = ({
  closeMenu,
  openModal
}) => {
  const [title, setTitle] = react__WEBPACK_IMPORTED_MODULE_1__.useState('Меню');
  const [categoryNesting, setCategoryNesting] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
  const [currentCategory, setCurrentCategory] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
  const [showMobileCategories, setShowMobileCategories] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const [isClose, setIsClose] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);

  const changeCategory = (index = 0, next = true) => {
    if (next) {
      setCategoryNesting([...categoryNesting, index]);
    } else {
      setCategoryNesting(categoryNesting.slice(0, -1));
    }
  };

  const titleClassnames = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(() => classnames__WEBPACK_IMPORTED_MODULE_4___default()({
    [(_styles_header_headerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().title)]: true,
    [(_styles_header_headerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().titleBack)]: categoryNesting.length
  }), [categoryNesting.length]);

  const openModals = modalName => {
    closeMenu('');
    openModal(modalName);
  };

  const handleClose = () => {
    setIsClose(true);
    setTimeout(() => {
      closeMenu('');
    }, 500);
  };

  const contentClassnames = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(() => {
    return classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      [(_styles_header_headerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().content)]: true,
      [(_styles_header_headerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().closeContent)]: isClose
    });
  }, [isClose]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    setCurrentCategory(categories);
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (categoryNesting.length) {
      let currentCategory = {};
      categoryNesting.forEach(item => {
        var _currentCategory$subc, _currentCategory$subc2;

        if (!((_currentCategory$subc = currentCategory.subcategories) !== null && _currentCategory$subc !== void 0 && _currentCategory$subc.length)) {
          currentCategory = categories[item];
        } else if ((_currentCategory$subc2 = currentCategory.subcategories[item]) !== null && _currentCategory$subc2 !== void 0 && _currentCategory$subc2.subcategories) {
          currentCategory = currentCategory.subcategories[item];
        } else {
          setCategoryNesting(categoryNesting.slice(0, -1));
        }
      });
      setTitle(currentCategory.title);
      setCurrentCategory(currentCategory.subcategories);
      setShowMobileCategories(true);
    } else {
      setTitle('Категории');
      setCurrentCategory(categories);
      setShowMobileCategories(false);
    }
  }, [categoryNesting]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_header_headerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().wrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: contentClassnames(),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_header_headerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().closeBtn),
        onClick: handleClose,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          src: _public_icons_close_modal_svg__WEBPACK_IMPORTED_MODULE_7__.default,
          alt: "close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_header_headerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().desktopMenu),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: titleClassnames(),
          onClick: () => changeCategory(0, false),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Menu, {
          categories: currentCategory,
          changeCategory: changeCategory,
          setTitle: setTitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_header_headerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().mobileMenu),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: titleClassnames(),
          onClick: () => changeCategory(0, false),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: "\u041C\u0435\u043D\u044E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, undefined), showMobileCategories ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Menu, {
          categories: currentCategory,
          changeCategory: changeCategory,
          setTitle: setTitle,
          isMobile: true,
          title: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_header_headerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().mobileNav),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_header_headerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().navItem),
              onClick: () => setShowMobileCategories(true),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: _public_icons_dropdown_arrow_svg__WEBPACK_IMPORTED_MODULE_6__.default,
                alt: "arrow"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_header_headerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().navItem),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "about",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: "\u041E \u043D\u0430\u0441"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 38
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_header_headerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().navItem),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/help",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: "\u041F\u043E\u043C\u043E\u0449\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 38
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_header_headerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().navItem),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/pharmacy",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: "\u0424\u0438\u043B\u0438\u0430\u043B\u044B"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 42
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_header_headerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().navItem),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/contacts",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 42
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_header_headerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().modalsBtn),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => openModals('feedback'),
              children: "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => openModals('wholesalers'),
              children: "\u041E\u043F\u0442\u043E\u0432\u0438\u043A\u0430\u043C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_header_headerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().phone),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "tel:+996000000000",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: "\u0422\u0435\u043B: "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 196,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: "+996 000 000 000"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 197,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 5
  }, undefined);
};

function Menu({
  categories,
  changeCategory,
  setTitle,
  title,
  isMobile = false
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  const handleClick = (e, title, index, next) => {
    e.stopPropagation();
    setTitle(title);
    changeCategory(index, next);
  };

  const handleSearch = title => {
    router.push(`/catalog?${(0,_utils__WEBPACK_IMPORTED_MODULE_8__.objectToQuery)({
      category: title
    })}`);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_header_headerMenu_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menu),
    children: [isMobile ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: title || 'Категории'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 19
    }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: categories.map(({
        title,
        subcategories
      }, idx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        onClick: () => handleSearch(title),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 13
        }, this), subcategories ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          src: _public_icons_dropdown_arrow_svg__WEBPACK_IMPORTED_MODULE_6__.default,
          alt: "arrow",
          onClick: e => handleClick(e, title, idx, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 15
        }, this) : null]
      }, idx, true, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 230,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(HeaderMenu));

/***/ }),

/***/ "./components/header/headerProfileNav.js":
/*!***********************************************!*\
  !*** ./components/header/headerProfileNav.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_icons_user_default_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/icons/user-default.svg */ "./public/icons/user-default.svg");
/* harmony import */ var _public_icons_heart_gray_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/icons/heart-gray.svg */ "./public/icons/heart-gray.svg");
/* harmony import */ var _public_icons_clock_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/icons/clock.svg */ "./public/icons/clock.svg");
/* harmony import */ var _public_icons_phone_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/icons/phone.svg */ "./public/icons/phone.svg");
/* harmony import */ var _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/header/header.module.scss */ "./styles/header/header.module.scss");
/* harmony import */ var _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./store/index.js");

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\header\\headerProfileNav.js";










const HeaderProfileNav = ({
  closeNav,
  logout,
  user
}) => {
  var _user$data;

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    document.addEventListener('click', closeNav);
    return () => {
      document.removeEventListener('click', closeNav);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().profileActions),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        onClick: () => router.push('/profile'),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: _public_icons_user_default_svg__WEBPACK_IMPORTED_MODULE_4__.default,
            alt: "user"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().bonus),
          children: (user === null || user === void 0 ? void 0 : (_user$data = user.data) === null || _user$data === void 0 ? void 0 : _user$data.bonus) || 0
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        onClick: () => router.push('/favorite'),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: _public_icons_heart_gray_svg__WEBPACK_IMPORTED_MODULE_5__.default,
            alt: "heart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        onClick: () => router.push('/order-history'),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: _public_icons_clock_svg__WEBPACK_IMPORTED_MODULE_6__.default,
            alt: "clock"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u043E\u0432"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        onClick: () => router.push('/change-phone'),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: _public_icons_phone_svg__WEBPACK_IMPORTED_MODULE_7__.default,
            alt: "phone"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u043E\u043C\u0435\u0440"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().profileLine)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().logout),
        onClick: logout,
        children: "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_store__WEBPACK_IMPORTED_MODULE_8__.connectContext)(HeaderProfileNav, ({
  user: {
    info
  }
}) => ({
  user: info
})));

/***/ }),

/***/ "./components/loader/NewsLoader.js":
/*!*****************************************!*\
  !*** ./components/loader/NewsLoader.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-content-loader */ "react-content-loader");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\loader\\NewsLoader.js";



const NewsLoader = ({
  width = 25
}) => {
  let styles = {
    width: `calc(${width}% - 30px)`,
    borderRadius: '16px',
    margin: '14px 4px 0 4px',
    backgroundColor: '#fff'
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: styles,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_content_loader__WEBPACK_IMPORTED_MODULE_2___default()), {
      viewBox: "0 0 286 300",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
        x: "0",
        y: "0",
        rx: "8",
        ry: "8",
        width: "286",
        height: "180"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
        x: "10",
        y: "195",
        rx: "3",
        ry: "3",
        width: "246",
        height: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
        x: "10",
        y: "215",
        rx: "3",
        ry: "3",
        width: "266",
        height: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
        x: "10",
        y: "235",
        rx: "3",
        ry: "3",
        width: "220",
        height: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
        x: "10",
        y: "265",
        rx: "5",
        ry: "5",
        width: "90",
        height: "12"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NewsLoader);

/***/ }),

/***/ "./components/loader/ProductLoader.js":
/*!********************************************!*\
  !*** ./components/loader/ProductLoader.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-content-loader */ "react-content-loader");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\loader\\ProductLoader.js";



const ProductLoader = () => {
  let styles = {
    width: "100%",
    borderRadius: '5px',
    backgroundColor: '#fff'
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: styles,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_content_loader__WEBPACK_IMPORTED_MODULE_2___default()), {
      viewBox: "0 0 224 390",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
        x: "0",
        y: "0",
        rx: "8",
        ry: "8",
        width: "224",
        height: "216"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
        x: "10",
        y: "250",
        rx: "3",
        ry: "3",
        width: "204",
        height: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
        x: "40",
        y: "270",
        rx: "3",
        ry: "3",
        width: "144",
        height: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
        x: "40",
        y: "302",
        rx: "5",
        ry: "5",
        width: "60",
        height: "15"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
        x: "110",
        y: "302",
        rx: "5",
        ry: "5",
        width: "60",
        height: "15"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
        x: "8",
        y: "337",
        rx: "10",
        ry: "10",
        width: "40",
        height: "40"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
        x: "100",
        y: "337",
        rx: "10",
        ry: "10",
        width: "100",
        height: "40"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductLoader);

/***/ }),

/***/ "./components/loader/buttonLoader.js":
/*!*******************************************!*\
  !*** ./components/loader/buttonLoader.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_loader_loader_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/loader/loader.module.scss */ "./styles/loader/loader.module.scss");
/* harmony import */ var _styles_loader_loader_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_loader_loader_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\loader\\buttonLoader.js";


const ButtonLoader = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_loader_loader_module_scss__WEBPACK_IMPORTED_MODULE_1___default().buttonLoader)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonLoader);

/***/ }),

/***/ "./components/loader/sliderLoader.js":
/*!*******************************************!*\
  !*** ./components/loader/sliderLoader.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-content-loader */ "react-content-loader");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\loader\\sliderLoader.js";



const SliderLoader = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_content_loader__WEBPACK_IMPORTED_MODULE_2___default()), {
      width: "100%",
      height: "448px",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
        x: "0",
        y: "0",
        rx: "16",
        ry: "16",
        width: "100%",
        height: "448px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SliderLoader);

/***/ }),

/***/ "./components/modals/cartModal.js":
/*!****************************************!*\
  !*** ./components/modals/cartModal.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _product_cartProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product/cartProduct */ "./components/product/cartProduct.js");
/* harmony import */ var _public_icons_cart_black_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/icons/cart-black.svg */ "./public/icons/cart-black.svg");
/* harmony import */ var _public_icons_close_modal_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/icons/close-modal.svg */ "./public/icons/close-modal.svg");
/* harmony import */ var _styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles/modals/cartModal.module.scss */ "./styles/modals/cartModal.module.scss");
/* harmony import */ var _styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _store_bucket_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/bucket/actions */ "./store/bucket/actions.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store */ "./store/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");


var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\modals\\cartModal.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const CartModal = ({
  closeCart,
  bucket,
  dispatch
}) => {
  const [prices, setPrices] = react__WEBPACK_IMPORTED_MODULE_0__.useState({});
  const [isClose, setIsClose] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const handleClose = () => {
    setIsClose(true);
    setTimeout(() => {
      closeCart();
    }, 500);
  };

  const contentClassnames = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    return classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      [(_styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_11___default().content)]: true,
      [(_styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_11___default().closeContent)]: isClose
    });
  }, [isClose]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    setPrices((0,_utils__WEBPACK_IMPORTED_MODULE_10__.calculatePrice)(bucket, 0.01));
  }, [bucket]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    (0,_store_bucket_actions__WEBPACK_IMPORTED_MODULE_8__.getItems)(dispatch);
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_11___default().wrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: contentClassnames(),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_11___default().close),
        onClick: handleClose,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          src: _public_icons_close_modal_svg__WEBPACK_IMPORTED_MODULE_7__.default,
          alt: "close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cartScroll),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          children: "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_11___default().products),
          children: bucket.map(item => /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_product_cartProduct__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread(_objectSpread({}, item), {}, {
            key: item._id,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }
          })))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bottom),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bottomInfo),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              children: "\u0422\u043E\u0432\u0430\u0440\u043E\u0432 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              children: bucket.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bottomInfo),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              children: "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              children: [prices.total, " c"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            onClick: () => router.push('/cart'),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
              src: _public_icons_cart_black_svg__WEBPACK_IMPORTED_MODULE_6__.default,
              alt: "cart"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              children: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_store__WEBPACK_IMPORTED_MODULE_9__.connectContext)(CartModal, ({
  bucket = []
}) => ({
  bucket
})));

/***/ }),

/***/ "./components/modals/feedBack.js":
/*!***************************************!*\
  !*** ./components/modals/feedBack.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _phoneInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../phoneInput */ "./components/phoneInput/index.js");
/* harmony import */ var _infoModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./infoModal */ "./components/modals/infoModal.js");
/* harmony import */ var _loader_buttonLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loader/buttonLoader */ "./components/loader/buttonLoader.js");
/* harmony import */ var _styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/modals/modal.module.scss */ "./styles/modals/modal.module.scss");
/* harmony import */ var _styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\modals\\feedBack.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const FeedBack = ({
  showModal,
  closeModal
}) => {
  const [inputData, setInputData] = react__WEBPACK_IMPORTED_MODULE_1__.useState({});
  const [inputErrors, setInputErrors] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
  const [phoneCountry, setPhoneCountry] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');
  const [resSuccess, setResSuccess] = react__WEBPACK_IMPORTED_MODULE_1__.useState({});
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const {
    displayInputError,
    displayErrorName,
    inputErrorClassname,
    feedBackSchema
  } = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.useValidate)(phoneCountry);

  const handlePhoneChange = (phone, country) => {
    setInputData(_objectSpread(_objectSpread({}, inputData), {}, {
      phone
    }));
    setPhoneCountry(country.countryCode);
  };

  const handleChange = ({
    target: {
      name,
      value
    }
  }) => {
    setInputData(_objectSpread(_objectSpread({}, inputData), {}, {
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const validateError = await feedBackSchema(inputData);
    setInputErrors(validateError);

    if (!validateError.length) {
      setLoading(true);
      const res = await (0,_utils__WEBPACK_IMPORTED_MODULE_6__.modalsRequest)('/api/feedback', inputData);
      setResSuccess(res);
      setLoading(false);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);
  const wrapperClasses = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(() => {
    return classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [(_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_7___default().wrapper)]: true,
      [(_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_7___default().activeWrapper)]: showModal === 'feedback'
    });
  }, [showModal]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: wrapperClasses(),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_7___default().content),
      children: !Object.keys(resSuccess).length ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          children: "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_7___default().text),
          children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          action: "#",
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_7___default().formItem),
            children: [displayErrorName(inputErrors, 'name', 'Имя'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              className: inputErrorClassname(inputErrors, 'name'),
              type: "text",
              placeholder: "\u0418\u043C\u044F",
              name: "name",
              onChange: handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 21
            }, undefined), displayInputError(inputErrors, 'name')]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 19
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_7___default().formItem),
            children: [displayErrorName(inputErrors, 'phone', 'Номер телефона'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_phoneInput__WEBPACK_IMPORTED_MODULE_3__.default, {
              handleChange: handlePhoneChange,
              isError: inputErrors.some(err => err.path === 'phone')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 21
            }, undefined), displayInputError(inputErrors, 'phone')]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 19
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_7___default().formItem),
            children: [displayErrorName(inputErrors, 'email', 'E-mail'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              className: inputErrorClassname(inputErrors, 'email'),
              type: "text",
              placeholder: "e-mail",
              name: "email",
              onChange: handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 21
            }, undefined), displayInputError(inputErrors, 'email')]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 19
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_7___default().formItem),
            children: [displayErrorName(inputErrors, 'title', 'Тема'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              className: inputErrorClassname(inputErrors, 'title'),
              type: "text",
              placeholder: "\u0422\u0435\u043C\u0430",
              name: "title",
              onChange: handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 21
            }, undefined), displayInputError(inputErrors, 'title')]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 19
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_7___default().formItem),
            children: [displayErrorName(inputErrors, 'body', 'Комментарий'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
              className: inputErrorClassname(inputErrors, 'body'),
              placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
              rows: 5,
              name: "body",
              onChange: handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 21
            }, undefined), displayInputError(inputErrors, 'body')]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 19
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loader_buttonLoader__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 39
            }, undefined) : 'Отправить'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_7___default().close),
          onClick: closeModal,
          children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_infoModal__WEBPACK_IMPORTED_MODULE_4__.default, {
        success: resSuccess.success,
        text: resSuccess.success ? 'Успешно' : 'Произошла ошибка',
        closeModal: closeModal,
        isLink: false
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FeedBack);

/***/ }),

/***/ "./components/modals/infoModal.js":
/*!****************************************!*\
  !*** ./components/modals/infoModal.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_icons_success_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/icons/success.svg */ "./public/icons/success.svg");
/* harmony import */ var _public_icons_error_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/icons/error.svg */ "./public/icons/error.svg");
/* harmony import */ var _styles_modals_successModal_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/modals/successModal.module.scss */ "./styles/modals/successModal.module.scss");
/* harmony import */ var _styles_modals_successModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_modals_successModal_module_scss__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\modals\\infoModal.js";







const InfoModal = ({
  text,
  isLink,
  closeModal,
  success = true
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_modals_successModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_modals_successModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().image),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: success ? _public_icons_success_svg__WEBPACK_IMPORTED_MODULE_4__.default : _public_icons_error_svg__WEBPACK_IMPORTED_MODULE_5__.default,
        alt: "info"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_modals_successModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().link),
      children: isLink ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 26
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: closeModal,
        children: success ? 'Хорошо' : 'Закрыть'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (InfoModal);

/***/ }),

/***/ "./components/modals/productModal.js":
/*!*******************************************!*\
  !*** ./components/modals/productModal.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _phoneInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../phoneInput */ "./components/phoneInput/index.js");
/* harmony import */ var _styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/modals/modal.module.scss */ "./styles/modals/modal.module.scss");
/* harmony import */ var _styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _infoModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./infoModal */ "./components/modals/infoModal.js");
/* harmony import */ var _loader_buttonLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loader/buttonLoader */ "./components/loader/buttonLoader.js");

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\modals\\productModal.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const ProductModal = ({
  closeModal
}) => {
  const [inputData, setInputData] = react__WEBPACK_IMPORTED_MODULE_1__.useState({});
  const [phoneCountry, setPhoneCountry] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');
  const [inputErrors, setInputErrors] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
  const [resSuccess, setResSuccess] = react__WEBPACK_IMPORTED_MODULE_1__.useState({});
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const {
    productModalSchema,
    displayInputError,
    displayErrorName
  } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.useValidate)(phoneCountry);

  const handleChange = ({
    target: {
      name,
      value
    }
  }) => {
    setInputData(_objectSpread(_objectSpread({}, inputData), {}, {
      [name]: value
    }));
  };

  const handlePhoneChange = (phone, country) => {
    setInputData(_objectSpread(_objectSpread({}, inputData), {}, {
      phone
    }));
    setPhoneCountry(country.countryCode);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const validateErrors = await productModalSchema(inputData);

    if (!validateErrors.length) {
      setLoading(true);
      const res = await (0,_utils__WEBPACK_IMPORTED_MODULE_3__.modalsRequest)('/api/nfpr', inputData);
      setResSuccess(res);
      setLoading(false);
    } else {
      setInputErrors(validateErrors);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().activeWrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().content),
      children: !Object.keys(resSuccess).length ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          children: "\u0424\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u0435\u043D\u0438\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text),
          children: "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043D\u0430\u043C \u0437\u0430\u044F\u0432\u043A\u0443, \u0438 \u043C\u044B \u043F\u0440\u0438\u0432\u0435\u0437\u0435\u043C \u043D\u0443\u0436\u043D\u044B\u0439 \u0442\u043E\u0432\u0430\u0440"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          action: "#",
          onSubmit: handleSubmit,
          children: [displayErrorName(inputErrors, 'name', 'Имя'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            placeholder: "\u0418\u043C\u044F",
            name: "name",
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 17
          }, undefined), displayInputError(inputErrors, 'name'), displayErrorName(inputErrors, 'phone', 'Номер телефона'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_phoneInput__WEBPACK_IMPORTED_MODULE_2__.default, {
            handleChange: handlePhoneChange,
            isError: inputErrors.some(err => err.path === 'phone')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 17
          }, undefined), displayInputError(inputErrors, 'phone'), displayErrorName(inputErrors, 'product', 'Название товара'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430",
            name: "product",
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 17
          }, undefined), displayInputError(inputErrors, 'product'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loader_buttonLoader__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 30
            }, undefined) : 'Отправить'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().close),
          onClick: closeModal,
          children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_infoModal__WEBPACK_IMPORTED_MODULE_4__.default, {
        success: resSuccess.success,
        isLink: false,
        text: resSuccess.success ? 'Успешно' : 'Ошибка',
        closeModal: closeModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductModal);

/***/ }),

/***/ "./components/modals/requestCall.js":
/*!******************************************!*\
  !*** ./components/modals/requestCall.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _phoneInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../phoneInput */ "./components/phoneInput/index.js");
/* harmony import */ var _loader_buttonLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loader/buttonLoader */ "./components/loader/buttonLoader.js");
/* harmony import */ var _infoModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./infoModal */ "./components/modals/infoModal.js");
/* harmony import */ var _public_icons_phone_green_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/icons/phone-green.svg */ "./public/icons/phone-green.svg");
/* harmony import */ var _styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/modals/modal.module.scss */ "./styles/modals/modal.module.scss");
/* harmony import */ var _styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\modals\\requestCall.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const RequestCall = ({
  showModal,
  setModal
}) => {
  const [inputData, setInputData] = react__WEBPACK_IMPORTED_MODULE_1__.useState({});
  const [phoneCountry, setPhoneCountry] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');
  const [inputErrors, setInputErrors] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
  const [resSuccess, setResSuccess] = react__WEBPACK_IMPORTED_MODULE_1__.useState({});
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const {
    displayInputError,
    displayErrorName,
    inputErrorClassname,
    requestCallSchema
  } = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.useValidate)(phoneCountry);

  const handleSubmit = async e => {
    e.preventDefault();
    const validateError = await requestCallSchema(inputData);
    setInputErrors(validateError);

    if (!validateError.length) {
      setLoading(true);
      const res = await (0,_utils__WEBPACK_IMPORTED_MODULE_8__.modalsRequest)('/api/callOrder', inputData);
      setResSuccess(res);
      setLoading(false);
    }
  };

  const handlePhoneChange = (phone, country) => {
    setInputData(_objectSpread(_objectSpread({}, inputData), {}, {
      phone
    }));
    setPhoneCountry(country.countryCode);
  };

  const handleChange = ({
    target: {
      name,
      value
    }
  }) => {
    setInputData(_objectSpread(_objectSpread({}, inputData), {}, {
      [name]: value
    }));
  };

  const wrapperClasses = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(() => {
    return classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      [(_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default().wrapper)]: true,
      [(_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default().activeWrapper)]: showModal === 'requestCall'
    });
  }, [showModal]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: wrapperClasses(),
    children: showModal === 'requestCall' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default().content),
      children: !Object.keys(resSuccess).length ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0432\u043E\u043D\u043E\u043A"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default().text),
          children: "Lorem ipsum dolor sit amet, consecrated advising elite"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          action: "#",
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default().formItem),
            children: [displayErrorName(inputErrors, 'name', 'Имя'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              className: inputErrorClassname(inputErrors, 'name'),
              type: "text",
              name: "name",
              placeholder: "\u041A\u0430\u043A \u043A \u0412\u0430\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F?",
              onChange: handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 25
            }, undefined), displayInputError(inputErrors, 'name')]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 23
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default().formItem),
            children: [displayErrorName(inputErrors, 'phone', 'Номер телефона'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_phoneInput__WEBPACK_IMPORTED_MODULE_4__.default, {
              handleChange: handlePhoneChange,
              isError: inputErrors.some(err => err.path === 'phone')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 25
            }, undefined), displayInputError(inputErrors, 'phone')]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 23
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loader_buttonLoader__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 43
            }, undefined) : 'Заказать звонок'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 23
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default().close),
          onClick: () => setModal(false),
          children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 19
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_infoModal__WEBPACK_IMPORTED_MODULE_6__.default, {
        success: resSuccess.success,
        text: resSuccess.success ? 'Успешно' : 'Произошла ошибка!',
        isLink: false,
        closeModal: () => setModal(false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 19
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default().phoneIcon),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: _public_icons_phone_green_svg__WEBPACK_IMPORTED_MODULE_7__.default,
        alt: "phone",
        onClick: () => setModal('requestCall')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RequestCall);

/***/ }),

/***/ "./components/modals/wholesalers.js":
/*!******************************************!*\
  !*** ./components/modals/wholesalers.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _phoneInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../phoneInput */ "./components/phoneInput/index.js");
/* harmony import */ var _infoModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./infoModal */ "./components/modals/infoModal.js");
/* harmony import */ var _loader_buttonLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loader/buttonLoader */ "./components/loader/buttonLoader.js");
/* harmony import */ var _public_icons_clip_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/icons/clip.svg */ "./public/icons/clip.svg");
/* harmony import */ var _styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/modals/modal.module.scss */ "./styles/modals/modal.module.scss");
/* harmony import */ var _styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\modals\\wholesalers.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const Wholesalers = ({
  closeModal,
  showModal
}) => {
  const [inputData, setInputData] = react__WEBPACK_IMPORTED_MODULE_1__.useState({});
  const [phoneCountry, setPhoneCountry] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');
  const [inputErrors, setInputErrors] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
  const [resSuccess, setResSuccess] = react__WEBPACK_IMPORTED_MODULE_1__.useState({});
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const {
    displayInputError,
    displayErrorName,
    inputErrorClassname,
    wholesalersSchema
  } = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.useValidate)(phoneCountry);

  const handleChange = ({
    target: {
      name,
      value
    }
  }) => {
    setInputData(_objectSpread(_objectSpread({}, inputData), {}, {
      [name]: value
    }));
  };

  const handlePhoneChange = (phone, country) => {
    setInputData(_objectSpread(_objectSpread({}, inputData), {}, {
      phone
    }));
    setPhoneCountry(country.countryCode);
  };

  const handleFileChange = ({
    target: {
      name,
      files
    }
  }) => {
    setInputData(_objectSpread(_objectSpread({}, inputData), {}, {
      [name]: files[0]
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const validateError = await wholesalersSchema(inputData);
    setInputErrors(validateError);

    if (!validateError.length) {
      setLoading(true);
      const formData = new FormData();

      for (let key in inputData) {
        formData.append(key, inputData[key]);
      }

      const res = await (0,_utils__WEBPACK_IMPORTED_MODULE_8__.modalsRequest)('/api/utcar', formData, true);
      setResSuccess(res);
      setLoading(false);
    }
  };

  const wrapperClasses = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(() => {
    return classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      [(_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default().wrapper)]: true,
      [(_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default().activeWrapper)]: showModal === 'wholesalers'
    });
  }, [showModal]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: wrapperClasses(),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default().content),
      children: !Object.keys(resSuccess).length ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          children: "\u041E\u043F\u0442\u043E\u0432\u0438\u043A\u0430\u043C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default().text),
          children: "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0432\u043E\u044E \u0437\u0430\u044F\u0432\u043A\u0443 \u0434\u043B\u044F \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043E\u043F\u0442\u043E\u0432\u044B\u0445 \u0446\u0435\u043D \u043D\u0430 \u0441\u0430\u0439\u0442\u0435. \u0412 \u043F\u043E\u043B\u0435 \"\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0444\u0430\u0439\u043B\" \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u0435 \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0438\u043B\u0438 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044E \u0412\u0430\u0448\u0435\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          action: "#",
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default().formItem),
            children: [displayErrorName(inputErrors, 'name', 'Имя'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              className: inputErrorClassname(inputErrors, 'name'),
              type: "text",
              placeholder: "\u0418\u043C\u044F",
              name: "name",
              onChange: handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 19
            }, undefined), displayInputError(inputErrors, 'name')]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default().formItem),
            children: [displayErrorName(inputErrors, 'phone', 'Номер телефона'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_phoneInput__WEBPACK_IMPORTED_MODULE_4__.default, {
              handleChange: handlePhoneChange,
              isError: inputErrors.some(err => err.path === 'phone')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 19
            }, undefined), displayInputError(inputErrors, 'phone')]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default().formItem),
            children: [displayErrorName(inputErrors, 'license', 'Файл'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "file",
              className: inputErrorClassname(inputErrors, 'license'),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: inputData.license ? inputData.license.name : 'Прикрепить файл'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 21
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: _public_icons_clip_svg__WEBPACK_IMPORTED_MODULE_7__.default,
                alt: "clip"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 19
            }, undefined), displayInputError(inputErrors, 'license')]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "file",
            name: "license",
            id: "file",
            onChange: handleFileChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loader_buttonLoader__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 37
            }, undefined) : 'Отправить'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_styles_modals_modal_module_scss__WEBPACK_IMPORTED_MODULE_9___default().close),
          onClick: closeModal,
          children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_infoModal__WEBPACK_IMPORTED_MODULE_5__.default, {
        success: resSuccess.success,
        text: resSuccess.success ? 'Успешно' : 'Произошла ошибка',
        isLink: false,
        closeModal: closeModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Wholesalers);

/***/ }),

/***/ "./components/news/newsItem.js":
/*!*************************************!*\
  !*** ./components/news/newsItem.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_icons_noproduct_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/icons/noproduct.svg */ "./public/icons/noproduct.svg");
/* harmony import */ var _styles_news_newsItem_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/news/newsItem.module.scss */ "./styles/news/newsItem.module.scss");
/* harmony import */ var _styles_news_newsItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_news_newsItem_module_scss__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\news\\newsItem.js";







const NewsItem = ({
  item,
  fullWidth = false
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  const handleClick = () => {
    router.push(`/news/${item._id}`);
  };

  const imageBlockClasses = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(() => classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    [(_styles_news_newsItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().image)]: true,
    [(_styles_news_newsItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().errorImage)]: !item.image
  }));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: fullWidth ? (_styles_news_newsItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().fullWidth) : (_styles_news_newsItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().item),
    onClick: handleClick,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: imageBlockClasses(),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: item.image || _public_icons_noproduct_svg__WEBPACK_IMPORTED_MODULE_5__.default.src,
        alt: "news"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_news_newsItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: item.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: moment__WEBPACK_IMPORTED_MODULE_2___default()(item === null || item === void 0 ? void 0 : item.date).format('DD.MM.YYYY')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NewsItem);

/***/ }),

/***/ "./components/news/newsWrapper.js":
/*!****************************************!*\
  !*** ./components/news/newsWrapper.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _newsItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newsItem */ "./components/news/newsItem.js");
/* harmony import */ var _loader_NewsLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/NewsLoader */ "./components/loader/NewsLoader.js");
/* harmony import */ var _styles_news_newsWrapper_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/news/newsWrapper.module.scss */ "./styles/news/newsWrapper.module.scss");
/* harmony import */ var _styles_news_newsWrapper_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_news_newsWrapper_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./store/index.js");
/* harmony import */ var _store_info_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/info/actions */ "./store/info/actions.js");

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\news\\newsWrapper.js";








const NewsWrapper = ({
  dispatch,
  news,
  loading
}) => {
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    (0,_store_info_actions__WEBPACK_IMPORTED_MODULE_6__.getNews)(dispatch, {
      limit: 8
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_news_newsWrapper_module_scss__WEBPACK_IMPORTED_MODULE_7___default().wrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: (_styles_news_newsWrapper_module_scss__WEBPACK_IMPORTED_MODULE_7___default().heading),
        children: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_news_newsWrapper_module_scss__WEBPACK_IMPORTED_MODULE_7___default().newsContent),
        children: [loading ? [...Array(8).keys()].map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loader_NewsLoader__WEBPACK_IMPORTED_MODULE_4__.default, {}, item, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 15
        }, undefined)) : null, news === null || news === void 0 ? void 0 : news.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newsItem__WEBPACK_IMPORTED_MODULE_3__.default, {
          item: item
        }, item._id, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 30
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/news",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: (_styles_news_newsWrapper_module_scss__WEBPACK_IMPORTED_MODULE_7___default().seeAll),
          children: "\u0412\u0441\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_store__WEBPACK_IMPORTED_MODULE_5__.connectContext)(NewsWrapper, ({
  info: {
    news
  }
}) => ({
  news: news.data || [],
  loading: news.loading
})));

/***/ }),

/***/ "./components/phoneInput/index.js":
/*!****************************************!*\
  !*** ./components/phoneInput/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_phone_input_2_lang_ru_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-phone-input-2/lang/ru.json */ "./node_modules/react-phone-input-2/lang/ru.json");
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-phone-input-2 */ "react-phone-input-2");
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-phone-input-2/lib/style.css */ "./node_modules/react-phone-input-2/lib/style.css");
/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\phoneInput\\index.js";





const PhoneField = ({
  handleChange,
  isError
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_phone_input_2__WEBPACK_IMPORTED_MODULE_3___default()), {
    localization: react_phone_input_2_lang_ru_json__WEBPACK_IMPORTED_MODULE_2__,
    country: "kg",
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
    inputClass: isError ? 'input-error' : '',
    onChange: handleChange
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(PhoneField));

/***/ }),

/***/ "./components/product/cartProduct.js":
/*!*******************************************!*\
  !*** ./components/product/cartProduct.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_icons_noproduct_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/icons/noproduct.svg */ "./public/icons/noproduct.svg");
/* harmony import */ var _public_icons_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/icons/plus.svg */ "./public/icons/plus.svg");
/* harmony import */ var _styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/modals/cartModal.module.scss */ "./styles/modals/cartModal.module.scss");
/* harmony import */ var _styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_bucket_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/bucket/actions */ "./store/bucket/actions.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./store/index.js");

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\product\\cartProduct.js";







const CartProduct = ({
  _id,
  gallery,
  amount,
  price,
  name,
  dispatch,
  userType
}) => {
  var _gallery$, _gallery$$x_1C;

  const decrementCount = () => _store_bucket_actions__WEBPACK_IMPORTED_MODULE_4__.decrementItem(dispatch, _id);

  const incrementCount = () => _store_bucket_actions__WEBPACK_IMPORTED_MODULE_4__.incrementItem(dispatch, _id);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().item),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().itemImg),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: gallery && ((_gallery$ = gallery[0]) === null || _gallery$ === void 0 ? void 0 : (_gallery$$x_1C = _gallery$.x_1C) === null || _gallery$$x_1C === void 0 ? void 0 : _gallery$$x_1C.url) || _public_icons_noproduct_svg__WEBPACK_IMPORTED_MODULE_2__.default.src,
        alt: "medicine"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().itemBody),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().itemPriceBlock),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().itemPrice),
          children: ["\u0426\u0435\u043D\u0430 \u0437\u0430 \u0448\u0442 ", price[userType], " \u0441"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().itemPriceTotal),
          children: [price[userType] * amount, " \u0441"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().calc),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: decrementCount,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_modals_cartModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().minus)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: amount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: incrementCount,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: _public_icons_plus_svg__WEBPACK_IMPORTED_MODULE_3__.default,
            alt: "plus"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_store__WEBPACK_IMPORTED_MODULE_5__.connectContext)(CartProduct, ({
  user: {
    info
  }
}) => {
  var _info$data;

  return {
    userType: ((_info$data = info.data) === null || _info$data === void 0 ? void 0 : _info$data.account_type) || 'noncommercial'
  };
}));

/***/ }),

/***/ "./components/product/productItem.js":
/*!*******************************************!*\
  !*** ./components/product/productItem.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_icons_heart_default_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/icons/heart_default.svg */ "./public/icons/heart_default.svg");
/* harmony import */ var _public_icons_heart_active_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/icons/heart_active.svg */ "./public/icons/heart_active.svg");
/* harmony import */ var _public_icons_plus_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/icons/plus.svg */ "./public/icons/plus.svg");
/* harmony import */ var _public_icons_add_cart_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/icons/add_cart.svg */ "./public/icons/add_cart.svg");
/* harmony import */ var _public_icons_noproduct_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/icons/noproduct.svg */ "./public/icons/noproduct.svg");
/* harmony import */ var _styles_product_productItem_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../styles/product/productItem.module.scss */ "./styles/product/productItem.module.scss");
/* harmony import */ var _styles_product_productItem_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_product_productItem_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store */ "./store/index.js");
/* harmony import */ var _store_user_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/user/actions */ "./store/user/actions.js");
/* harmony import */ var _store_bucket_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/bucket/actions */ "./store/bucket/actions.js");

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\product\\productItem.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const ProductItem = ({
  inline = false,
  isFav = false,
  item,
  bucket,
  dispatch,
  userId,
  favorites,
  userType
}) => {
  var _item$gallery$, _item$gallery$$x_1C, _item$sales$userType, _item$sales$userType2;

  const [bucketItem, setBucketItem] = react__WEBPACK_IMPORTED_MODULE_1__.useState({});
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  const decrementCount = () => _store_bucket_actions__WEBPACK_IMPORTED_MODULE_12__.decrementItem(dispatch, item._id);

  const incrementCount = () => _store_bucket_actions__WEBPACK_IMPORTED_MODULE_12__.incrementItem(dispatch, item._id);

  const handleCartAdd = () => _store_bucket_actions__WEBPACK_IMPORTED_MODULE_12__.addItem(dispatch, _objectSpread(_objectSpread({}, item), {}, {
    amount: 1
  }));

  const itemClassname = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(() => classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    [(_styles_product_productItem_module_scss__WEBPACK_IMPORTED_MODULE_13___default().item)]: true,
    [(_styles_product_productItem_module_scss__WEBPACK_IMPORTED_MODULE_13___default().favorite)]: isFav,
    [(_styles_product_productItem_module_scss__WEBPACK_IMPORTED_MODULE_13___default().inlineItem)]: inline
  }), [inline]);

  const goToProduct = () => {
    router.push(`/product/${item._id}`);
  };

  const handleFavoriteChange = () => {
    if (userId.length) {
      (0,_store_user_actions__WEBPACK_IMPORTED_MODULE_11__.changeFavorite)(dispatch, userId, item._id, favorites);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    setBucketItem(bucket.find(x => x._id === item._id) || {});
  }, [bucket]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: itemClassname(),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_product_productItem_module_scss__WEBPACK_IMPORTED_MODULE_13___default().imageBlock),
      onClick: goToProduct,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: item.gallery && ((_item$gallery$ = item.gallery[0]) === null || _item$gallery$ === void 0 ? void 0 : (_item$gallery$$x_1C = _item$gallery$.x_1C) === null || _item$gallery$$x_1C === void 0 ? void 0 : _item$gallery$$x_1C.url) || _public_icons_noproduct_svg__WEBPACK_IMPORTED_MODULE_9__.default.src,
        alt: "medicine"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_product_productItem_module_scss__WEBPACK_IMPORTED_MODULE_13___default().productBody),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_product_productItem_module_scss__WEBPACK_IMPORTED_MODULE_13___default().description),
        onClick: goToProduct,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: item === null || item === void 0 ? void 0 : item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_product_productItem_module_scss__WEBPACK_IMPORTED_MODULE_13___default().actions),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_product_productItem_module_scss__WEBPACK_IMPORTED_MODULE_13___default().price),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_product_productItem_module_scss__WEBPACK_IMPORTED_MODULE_13___default().crossed),
            children: item.sales.status ? (_item$sales$userType = item.sales[userType]) === null || _item$sales$userType === void 0 ? void 0 : _item$sales$userType.original : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_product_productItem_module_scss__WEBPACK_IMPORTED_MODULE_13___default().defaultPrice),
            children: [item.price[userType], " \u0441"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_product_productItem_module_scss__WEBPACK_IMPORTED_MODULE_13___default().favorite),
          onClick: handleFavoriteChange,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: favorites.includes(item._id) ? _public_icons_heart_active_svg__WEBPACK_IMPORTED_MODULE_6__.default : _public_icons_heart_default_svg__WEBPACK_IMPORTED_MODULE_5__.default,
            alt: "heart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_product_productItem_module_scss__WEBPACK_IMPORTED_MODULE_13___default().favoritePopup),
            onClick: handleFavoriteChange,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0438\u0437\u0440\u0431\u0430\u043D\u043D\u043E\u0435"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined), bucketItem.amount ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: decrementCount,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_product_productItem_module_scss__WEBPACK_IMPORTED_MODULE_13___default().favoritePopup),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: "\u0423\u0431\u0430\u0432\u0438\u0442\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_product_productItem_module_scss__WEBPACK_IMPORTED_MODULE_13___default().minus)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: bucketItem.amount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: incrementCount,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_product_productItem_module_scss__WEBPACK_IMPORTED_MODULE_13___default().favoritePopup),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
              src: _public_icons_plus_svg__WEBPACK_IMPORTED_MODULE_7__.default,
              alt: "plus"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_product_productItem_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cart),
          onClick: handleCartAdd,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_product_productItem_module_scss__WEBPACK_IMPORTED_MODULE_13___default().favoritePopup),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
              src: _public_icons_add_cart_svg__WEBPACK_IMPORTED_MODULE_8__.default,
              alt: "cart"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: [item.sales.status ? (_item$sales$userType2 = item.sales[userType]) === null || _item$sales$userType2 === void 0 ? void 0 : _item$sales$userType2.original : item.price[userType], " c"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_store__WEBPACK_IMPORTED_MODULE_10__.connectContext)(ProductItem, ({
  bucket,
  user: {
    info
  }
}) => {
  var _info$data, _info$data2, _info$data3;

  return {
    bucket,
    userId: ((_info$data = info.data) === null || _info$data === void 0 ? void 0 : _info$data._id) || '',
    userType: ((_info$data2 = info.data) === null || _info$data2 === void 0 ? void 0 : _info$data2.account_type) || 'noncommercial',
    favorites: ((_info$data3 = info.data) === null || _info$data3 === void 0 ? void 0 : _info$data3.favorite_medicines) || []
  };
}));

/***/ }),

/***/ "./components/promotions/Arrows.js":
/*!*****************************************!*\
  !*** ./components/promotions/Arrows.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrevArrow": function() { return /* binding */ PrevArrow; },
/* harmony export */   "NextArrow": function() { return /* binding */ NextArrow; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_promotions_arrows_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/promotions/arrows.module.scss */ "./styles/promotions/arrows.module.scss");
/* harmony import */ var _styles_promotions_arrows_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_promotions_arrows_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\promotions\\Arrows.js";

const PrevArrow = ({
  onClick
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: (_styles_promotions_arrows_module_scss__WEBPACK_IMPORTED_MODULE_1___default().prev),
    onClick: onClick
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};
const NextArrow = ({
  onClick
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: (_styles_promotions_arrows_module_scss__WEBPACK_IMPORTED_MODULE_1___default().next),
    onClick: onClick
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./components/promotions/Promotions.js":
/*!*********************************************!*\
  !*** ./components/promotions/Promotions.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_saleImage_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/saleImage.png */ "./public/saleImage.png");
/* harmony import */ var _public_map_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/map.png */ "./public/map.png");
/* harmony import */ var _public_order_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/order.png */ "./public/order.png");
/* harmony import */ var _public_delivery_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../public/delivery.png */ "./public/delivery.png");
/* harmony import */ var _styles_promotions_promotion_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../styles/promotions/promotion.module.scss */ "./styles/promotions/promotion.module.scss");
/* harmony import */ var _styles_promotions_promotion_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_promotions_promotion_module_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Arrows__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Arrows */ "./components/promotions/Arrows.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store */ "./store/index.js");
/* harmony import */ var _store_products_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../store/products/actions */ "./store/products/actions.js");

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\components\\promotions\\Promotions.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const settings = {
  dots: true,
  infinite: true,
  autoplaySpeed: 4500,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  arrows: true,
  nextArrow: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Arrows__WEBPACK_IMPORTED_MODULE_13__.NextArrow, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 14
  }, undefined),
  prevArrow: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Arrows__WEBPACK_IMPORTED_MODULE_13__.PrevArrow, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 14
  }, undefined),
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_promotions_promotion_module_scss__WEBPACK_IMPORTED_MODULE_16___default().slider), 'promotions-slider')
};
const mobileSliderSettings = {
  dots: true,
  infinite: true,
  autoplaySpeed: 4500,
  speed: 500,
  slidesToShow: 1.15,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  className: (_styles_promotions_promotion_module_scss__WEBPACK_IMPORTED_MODULE_16___default().mobileSlider),
  centerMode: true
};

const Promotions = ({
  dispatch,
  sales,
  loading
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();

  const goToPromotion = id => {
    router.push(`/product/${id}`);
  };

  const goToSeeAll = () => {
    router.push('/sales');
  };

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    (0,_store_products_actions__WEBPACK_IMPORTED_MODULE_15__.getSalesProducts)(dispatch);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_promotions_promotion_module_scss__WEBPACK_IMPORTED_MODULE_16___default().wrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_promotions_promotion_module_scss__WEBPACK_IMPORTED_MODULE_16___default().content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_promotions_promotion_module_scss__WEBPACK_IMPORTED_MODULE_16___default().sliderWrapper),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "\u0410\u043A\u0446\u0438\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_slick__WEBPACK_IMPORTED_MODULE_5___default()), _objectSpread(_objectSpread({}, settings), {}, {
            children: sales === null || sales === void 0 ? void 0 : sales.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_promotions_promotion_module_scss__WEBPACK_IMPORTED_MODULE_16___default().sliderItem),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                onClick: () => goToPromotion(item._id),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: item.url
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 19
              }, undefined)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 17
            }, undefined))
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_slick__WEBPACK_IMPORTED_MODULE_5___default()), _objectSpread(_objectSpread({}, mobileSliderSettings), {}, {
            children: sales === null || sales === void 0 ? void 0 : sales.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_promotions_promotion_module_scss__WEBPACK_IMPORTED_MODULE_16___default().sliderItem),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                onClick: () => goToPromotion(item._id),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: _public_saleImage_png__WEBPACK_IMPORTED_MODULE_9__.default.src
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 19
              }, undefined)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, undefined))
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: (_styles_promotions_promotion_module_scss__WEBPACK_IMPORTED_MODULE_16___default().seeAll),
            onClick: goToSeeAll,
            children: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_promotions_promotion_module_scss__WEBPACK_IMPORTED_MODULE_16___default().questionsWrapper),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/help",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                src: _public_map_png__WEBPACK_IMPORTED_MODULE_10__.default,
                alt: "map"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/help",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                src: _public_order_png__WEBPACK_IMPORTED_MODULE_11__.default,
                alt: "order"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/help",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                src: _public_delivery_png__WEBPACK_IMPORTED_MODULE_12__.default,
                alt: "delivery"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_store__WEBPACK_IMPORTED_MODULE_14__.connectContext)(Promotions, ({
  products: {
    sales
  }
}) => ({
  sales: sales.data || [],
  loading: sales.loading
})));

/***/ }),

/***/ "./layouts/MainLayout.js":
/*!*******************************!*\
  !*** ./layouts/MainLayout.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header */ "./components/header/header.js");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer/footer */ "./components/footer/footer.js");

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\layouts\\MainLayout.js";




function MainLayout({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer_footer__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MainLayout);

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["i.pinimg.com","encrypted-tbn0.gstatic.com","www.trinityhealth.org","i.apteka24.ua","traveltimes.ru"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    const handleLoad = () => {
      if (!img.src.startsWith('data:')) {
        const p = 'decode' in img ? img.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        });
      }
    };

    if (img.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if ((widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_banner_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/banner/Banner */ "./components/banner/Banner.js");
/* harmony import */ var _components_bestsellers_Bestsellers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/bestsellers/Bestsellers */ "./components/bestsellers/Bestsellers.js");
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var _components_news_newsWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/news/newsWrapper */ "./components/news/newsWrapper.js");
/* harmony import */ var _components_promotions_Promotions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/promotions/Promotions */ "./components/promotions/Promotions.js");
/* harmony import */ var _components_modals_requestCall__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/modals/requestCall */ "./components/modals/requestCall.js");


var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\pages\\index.js";








function Home() {
  const [modal, setModal] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modals_requestCall__WEBPACK_IMPORTED_MODULE_7__.default, {
      setModal: setModal,
      showModal: modal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_banner_Banner__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_bestsellers_Bestsellers__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_promotions_Promotions__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_news_newsWrapper__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./store/bucket/actions.js":
/*!*********************************!*\
  !*** ./store/bucket/actions.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getItems": function() { return /* binding */ getItems; },
/* harmony export */   "addItem": function() { return /* binding */ addItem; },
/* harmony export */   "incrementItem": function() { return /* binding */ incrementItem; },
/* harmony export */   "removeItem": function() { return /* binding */ removeItem; },
/* harmony export */   "decrementItem": function() { return /* binding */ decrementItem; }
/* harmony export */ });
const CHANGE_BUCKET = "CHANGE_BUCKET";
const getItems = dispatch => {
  const items = JSON.parse(localStorage.getItem('bucket') || '[]');
  dispatch({
    type: CHANGE_BUCKET,
    data: items
  });
  return {
    success: true,
    data: items
  };
};
const addItem = (dispatch, item) => {
  const items = JSON.parse(localStorage.getItem('bucket') || '[]');
  items.push(item);
  localStorage.setItem('bucket', JSON.stringify(items));
  dispatch({
    type: CHANGE_BUCKET,
    data: items
  });
  return {
    success: true,
    data: items
  };
};
const incrementItem = (dispatch, id) => {
  const items = JSON.parse(localStorage.getItem('bucket') || '[]');
  items.find(i => i._id === id).amount += 1;
  localStorage.setItem('bucket', JSON.stringify(items));
  dispatch({
    type: CHANGE_BUCKET,
    data: items
  });
  return {
    success: true,
    data: items
  };
};
const removeItem = (dispatch, id) => {
  const items = JSON.parse(localStorage.getItem('bucket') || '[]');
  const newItems = items.filter(item => item._id !== id);
  localStorage.setItem('bucket', JSON.stringify(newItems));
  dispatch({
    type: CHANGE_BUCKET,
    data: newItems
  });
  return {
    success: true,
    data: items
  };
};
const decrementItem = (dispatch, id) => {
  const items = JSON.parse(localStorage.getItem('bucket') || '[]');
  items.find((i, idx) => {
    if (i._id === id) {
      if (items[idx].amount == 1) {
        delete items[idx];
      } else {
        items[idx].amount -= 1;
      }
    }
  });
  localStorage.setItem('bucket', JSON.stringify(items.filter(Boolean)));
  dispatch({
    type: CHANGE_BUCKET,
    data: items.filter(Boolean)
  });
  return {
    success: true,
    data: items.filter(Boolean)
  };
};

/***/ }),

/***/ "./store/bucket/reducer.js":
/*!*********************************!*\
  !*** ./store/bucket/reducer.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function bucket(state, {
  type,
  data
}) {
  switch (type) {
    case 'CHANGE_BUCKET':
      return data;

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (bucket);

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": function() { return /* binding */ Context; },
/* harmony export */   "ContextProvider": function() { return /* binding */ ContextProvider; },
/* harmony export */   "connectContext": function() { return /* binding */ connectContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bucket_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bucket/reducer */ "./store/bucket/reducer.js");
/* harmony import */ var _info_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info/reducer */ "./store/info/reducer.js");
/* harmony import */ var _products_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/reducer */ "./store/products/reducer.js");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/reducer */ "./store/user/reducer.js");
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initialState */ "./store/initialState.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./utils/index.js");

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\store\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext();
const combinedReducers = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.combineReducers)({
  bucket: _bucket_reducer__WEBPACK_IMPORTED_MODULE_2__.default,
  info: _info_reducer__WEBPACK_IMPORTED_MODULE_3__.default,
  products: _products_reducer__WEBPACK_IMPORTED_MODULE_4__.default,
  user: _user_reducer__WEBPACK_IMPORTED_MODULE_5__.default
});

function ContextProvider({
  children
}) {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1__.useReducer(combinedReducers, _initialState__WEBPACK_IMPORTED_MODULE_6__.default);
  const context = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => [state, dispatch], [state, dispatch]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {
    value: context,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

const connectContext = (Component, select) => {
  return props => {
    const [store, dispatch] = react__WEBPACK_IMPORTED_MODULE_1__.useContext(Context);

    const data = _objectSpread({}, select ? select(store) : {});

    return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread(_objectSpread(_objectSpread({}, data), props), {}, {
      dispatch: dispatch
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, undefined), [JSON.stringify(data), JSON.stringify(props)]);
  };
};



/***/ }),

/***/ "./store/info/actions.js":
/*!*******************************!*\
  !*** ./store/info/actions.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBanners": function() { return /* binding */ getBanners; },
/* harmony export */   "getFaq": function() { return /* binding */ getFaq; },
/* harmony export */   "getAbout": function() { return /* binding */ getAbout; },
/* harmony export */   "getContacts": function() { return /* binding */ getContacts; },
/* harmony export */   "getPharmacy": function() { return /* binding */ getPharmacy; },
/* harmony export */   "getPharmacyById": function() { return /* binding */ getPharmacyById; },
/* harmony export */   "getNews": function() { return /* binding */ getNews; },
/* harmony export */   "getNewsById": function() { return /* binding */ getNewsById; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./store/info/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");


const getBanners = async (dispatch, params = {}) => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_BANNERS,
    loading: true
  });

  try {
    const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.get)(`/api/banner?${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.objectToQuery)(params)}`);
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_BANNERS,
      data,
      loading: false
    });
    return {
      success: true,
      data
    };
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_BANNERS,
      error,
      loading: false
    });
    return {
      success: false,
      error
    };
  }
};
const getFaq = async dispatch => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_FAQ,
    loading: true
  });

  try {
    const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.get)('/api/faq');
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_FAQ,
      data,
      loading: false
    });
    return {
      success: true,
      data
    };
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_FAQ,
      error,
      loading: false
    });
    return {
      success: false,
      error
    };
  }
};
const getAbout = async dispatch => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_ABOUT,
    loading: true
  });

  try {
    const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.get)('/api/about');
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_ABOUT,
      data,
      loading: false
    });
    return {
      success: true,
      data
    };
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_ABOUT,
      error,
      loading: false
    });
    return {
      success: false,
      error
    };
  }
};
const getContacts = async dispatch => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_CONTACTS,
    loading: true
  });

  try {
    const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.get)('/api/contact');
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_CONTACTS,
      data,
      loading: false
    });
    return {
      success: true,
      data
    };
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_CONTACTS,
      error,
      loading: false
    });
    return {
      success: false,
      error
    };
  }
};
const getPharmacy = async (dispatch, params = {}) => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_PHARMACY,
    loading: true
  });

  try {
    const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.get)(`/api/pharmacy?${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.objectToQuery)(params)}`);
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_PHARMACY,
      data,
      loading: false
    });
    return {
      success: true,
      data
    };
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_PHARMACY,
      error,
      loading: false
    });
    return {
      success: false,
      error
    };
  }
};
const getPharmacyById = async (dispatch, id) => {
  try {
    const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.get)(`/api/pharmacy/${id}`);
    return {
      success: true,
      data
    };
  } catch (error) {
    return {
      success: false,
      error
    };
  }
};
const getNews = async (dispatch, params = {}) => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_NEWS,
    loading: true
  });

  try {
    const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.get)(`/api/news?${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.objectToQuery)(params)}`);
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_NEWS,
      data,
      loading: false
    });
    return {
      success: true,
      data
    };
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_NEWS,
      error,
      loading: false
    });
    return {
      success: false,
      error
    };
  }
};
const getNewsById = async (dispatch, id) => {
  try {
    const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.get)(`/api/news/${id}`);
    return {
      success: true,
      data
    };
  } catch (error) {
    return {
      success: false,
      error
    };
  }
};

/***/ }),

/***/ "./store/info/constants.js":
/*!*********************************!*\
  !*** ./store/info/constants.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  GET_BANNERS: "GET_BANNERS",
  GET_FAQ: "GET_FAQ",
  GET_ABOUT: "GET_ABOUT",
  GET_CONTACTS: "GET_CONTACTS",
  GET_PHARMACY: "GET_PHARMACY",
  GET_NEWS: "GET_NEWS"
});

/***/ }),

/***/ "./store/info/reducer.js":
/*!*******************************!*\
  !*** ./store/info/reducer.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./store/info/constants.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function info(state, _ref) {
  let {
    type
  } = _ref,
      res = _objectWithoutProperties(_ref, ["type"]);

  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_BANNERS:
      return Object.assign(state, {
        banners: Object.assign(state.banners, res)
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_FAQ:
      return Object.assign(state, {
        faq: Object.assign(state.faq, res)
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_ABOUT:
      return Object.assign(state, {
        about: Object.assign(state.about, res)
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_CONTACTS:
      return Object.assign(state, {
        contacts: Object.assign(state.contacts, res)
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_PHARMACY:
      return Object.assign(state, {
        pharmacy: Object.assign(state.pharmacy, res)
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_NEWS:
      return Object.assign(state, {
        news: Object.assign(state.news, res)
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (info);

/***/ }),

/***/ "./store/initialState.js":
/*!*******************************!*\
  !*** ./store/initialState.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  bucket: [],
  products: {
    all: {
      data: []
    },
    top: {
      data: []
    },
    sales: {
      data: []
    },
    catalog: {
      data: []
    },
    searchSuggestions: {
      data: []
    }
  },
  user: {
    isLoggedIn: false,
    otp: {},
    info: {},
    orders: {
      data: [{
        id: 1235,
        status: 'accepted',
        totalPrice: 1234,
        orderDate: new Date(2021, 6, 22, 13, 43),
        items: [{
          id: 692,
          images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU'],
          preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU',
          title: 'Витамин С 900 мг 5 г порош.шипуч.№10 саше-пакет',
          description: 'В качестве биологически активной добавки к пище, дополнительного источника витаминов и минералов.',
          receptRequired: true,
          oldPrice: 13920,
          price: 12980,
          available: true,
          manufactureCountry: 'Россия',
          manufacture: 'АВАНТА АО',
          brand: 'БЕЛОРУЧКА',
          relizeForm: 'Крем для рук 75мл, туба',
          amount: 1,
          composition: 'вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция'
        }, {
          id: 693,
          images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU'],
          preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU',
          title: 'Витамин С 900 мг 5 г порош.шипуч.№10 саше-пакет',
          description: 'В качестве биологически активной добавки к пище, дополнительного источника витаминов и минералов.',
          receptRequired: true,
          oldPrice: 13920,
          price: 12980,
          available: true,
          manufactureCountry: 'Россия',
          manufacture: 'АВАНТА АО',
          brand: 'БЕЛОРУЧКА',
          relizeForm: 'Крем для рук 75мл, туба',
          amount: 2,
          composition: 'вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция'
        }, {
          id: 694,
          images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU'],
          preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU',
          title: 'Витамин С 900 мг 5 г порош.шипуч.№10 саше-пакет',
          description: 'В качестве биологически активной добавки к пище, дополнительного источника витаминов и минералов.',
          receptRequired: true,
          oldPrice: 13920,
          price: 12980,
          available: true,
          manufactureCountry: 'Россия',
          manufacture: 'АВАНТА АО',
          brand: 'БЕЛОРУЧКА',
          relizeForm: 'Крем для рук 75мл, туба',
          amount: 1,
          composition: 'вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция'
        }]
      }, {
        id: 1335,
        status: 'delivered',
        totalPrice: 1234,
        orderDate: new Date(2021, 1, 15, 18, 43),
        items: [{
          id: 692,
          images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU'],
          preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU',
          title: 'Витамин С 900 мг 5 г порош.шипуч.№10 саше-пакет',
          description: 'В качестве биологически активной добавки к пище, дополнительного источника витаминов и минералов.',
          receptRequired: true,
          oldPrice: 13920,
          price: 12980,
          available: true,
          manufactureCountry: 'Россия',
          manufacture: 'АВАНТА АО',
          brand: 'БЕЛОРУЧКА',
          relizeForm: 'Крем для рук 75мл, туба',
          amount: 4,
          composition: 'вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция'
        }, {
          id: 693,
          images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU'],
          preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU',
          title: 'Витамин С 900 мг 5 г порош.шипуч.№10 саше-пакет',
          description: 'В качестве биологически активной добавки к пище, дополнительного источника витаминов и минералов.',
          receptRequired: true,
          oldPrice: 13920,
          price: 12980,
          available: true,
          manufactureCountry: 'Россия',
          manufacture: 'АВАНТА АО',
          brand: 'БЕЛОРУЧКА',
          relizeForm: 'Крем для рук 75мл, туба',
          amount: 1,
          composition: 'вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция'
        }, {
          id: 694,
          images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU'],
          preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU',
          title: 'Витамин С 900 мг 5 г порош.шипуч.№10 саше-пакет',
          description: 'В качестве биологически активной добавки к пище, дополнительного источника витаминов и минералов.',
          receptRequired: true,
          oldPrice: 13920,
          price: 12980,
          available: true,
          manufactureCountry: 'Россия',
          manufacture: 'АВАНТА АО',
          brand: 'БЕЛОРУЧКА',
          relizeForm: 'Крем для рук 75мл, туба',
          amount: 1,
          composition: 'вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция'
        }]
      }, {
        id: 2335,
        status: 'declined',
        totalPrice: 1234,
        orderDate: new Date(2021, 2, 25, 16, 43),
        items: [{
          id: 692,
          images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU'],
          preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU',
          title: 'Витамин С 900 мг 5 г порош.шипуч.№10 саше-пакет',
          description: 'В качестве биологически активной добавки к пище, дополнительного источника витаминов и минералов.',
          receptRequired: true,
          oldPrice: 13920,
          price: 12980,
          available: true,
          manufactureCountry: 'Россия',
          manufacture: 'АВАНТА АО',
          brand: 'БЕЛОРУЧКА',
          relizeForm: 'Крем для рук 75мл, туба',
          amount: 3,
          composition: 'вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция'
        }, {
          id: 693,
          images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU'],
          preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU',
          title: 'Витамин С 900 мг 5 г порош.шипуч.№10 саше-пакет',
          description: 'В качестве биологически активной добавки к пище, дополнительного источника витаминов и минералов.',
          receptRequired: true,
          oldPrice: 13920,
          price: 12980,
          available: true,
          manufactureCountry: 'Россия',
          manufacture: 'АВАНТА АО',
          brand: 'БЕЛОРУЧКА',
          relizeForm: 'Крем для рук 75мл, туба',
          amount: 1,
          composition: 'вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция'
        }, {
          id: 694,
          images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU'],
          preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU',
          title: 'Витамин С 900 мг 5 г порош.шипуч.№10 саше-пакет',
          description: 'В качестве биологически активной добавки к пище, дополнительного источника витаминов и минералов.',
          receptRequired: true,
          oldPrice: 13920,
          price: 12980,
          available: true,
          manufactureCountry: 'Россия',
          manufacture: 'АВАНТА АО',
          brand: 'БЕЛОРУЧКА',
          relizeForm: 'Крем для рук 75мл, туба',
          amount: 1,
          composition: 'вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция'
        }]
      }]
    }
  },
  info: {
    banners: {
      data: [{
        title: 'kek',
        url: 'https://images.food52.com/IjL6uGq1jFuk18cPGiZTUVphPIo=/1200x1200/103b54ba-45fd-47d5-84f1-d9e3ed1245a8--2019-1022_kek-lapis-sarawak_3x2_rocky-luten_028.jpg'
      }, {
        title: 'kek1',
        url: 'https://images.food52.com/IjL6uGq1jFuk18cPGiZTUVphPIo=/1200x1200/103b54ba-45fd-47d5-84f1-d9e3ed1245a8--2019-1022_kek-lapis-sarawak_3x2_rocky-luten_028.jpg'
      }, {
        title: 'kek2',
        url: 'https://images.food52.com/IjL6uGq1jFuk18cPGiZTUVphPIo=/1200x1200/103b54ba-45fd-47d5-84f1-d9e3ed1245a8--2019-1022_kek-lapis-sarawak_3x2_rocky-luten_028.jpg'
      }, {
        title: 'kek3',
        url: 'https://images.food52.com/IjL6uGq1jFuk18cPGiZTUVphPIo=/1200x1200/103b54ba-45fd-47d5-84f1-d9e3ed1245a8--2019-1022_kek-lapis-sarawak_3x2_rocky-luten_028.jpg'
      }, {
        title: 'kek4',
        url: 'https://images.food52.com/IjL6uGq1jFuk18cPGiZTUVphPIo=/1200x1200/103b54ba-45fd-47d5-84f1-d9e3ed1245a8--2019-1022_kek-lapis-sarawak_3x2_rocky-luten_028.jpg'
      }]
    },
    about: {},
    contacts: {},
    pharmacy: {},
    news: {},
    faq: {}
  }
});

/***/ }),

/***/ "./store/products/actions.js":
/*!***********************************!*\
  !*** ./store/products/actions.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProducts": function() { return /* binding */ getProducts; },
/* harmony export */   "getCatalogProducts": function() { return /* binding */ getCatalogProducts; },
/* harmony export */   "getProductsById": function() { return /* binding */ getProductsById; },
/* harmony export */   "getSalesProducts": function() { return /* binding */ getSalesProducts; },
/* harmony export */   "getTopProducts": function() { return /* binding */ getTopProducts; },
/* harmony export */   "getSearchSuggestions": function() { return /* binding */ getSearchSuggestions; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./store/products/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");


const getProducts = async (dispatch, params = {}) => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_PRODUCTS,
    loading: true
  });

  try {
    const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.get)(`/api/medicine?${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.objectToQuery)(params)}`);
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_PRODUCTS,
      data,
      loading: false
    });
    return {
      success: true,
      data
    };
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_PRODUCTS,
      error,
      loading: false
    });
    return {
      success: false,
      error
    };
  }
};
const getCatalogProducts = async (dispatch, params = {}) => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_CATALOG_PRODUCTS,
    loading: true
  });

  try {
    const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.get)(`/api/medicine?${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.objectToQuery)(params)}`);
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_CATALOG_PRODUCTS,
      data,
      loading: false
    });
    return {
      success: true,
      data
    };
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_CATALOG_PRODUCTS,
      error,
      loading: false
    });
    return {
      success: false,
      error
    };
  }
};
const getProductsById = async id => {
  try {
    const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.get)(`/api/medicine/${id}`);
    return {
      success: true,
      data
    };
  } catch (error) {
    return {
      success: false,
      error
    };
  }
};
const getSalesProducts = async (dispatch, params = {}) => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_SALES_PRODUCTS,
    loading: true
  });

  try {
    const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.get)(`/api/medicine/onSales?${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.objectToQuery)(params)}`);
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_SALES_PRODUCTS,
      data,
      loading: false
    });
    return {
      success: true,
      data
    };
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_SALES_PRODUCTS,
      error,
      loading: false
    });
    return {
      success: false,
      error
    };
  }
};
const getTopProducts = async (dispatch, params = {}) => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_TOP_PRODUCTS,
    loading: true
  });

  try {
    const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.get)(`/api/medicine/topSelling?${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.objectToQuery)(params)}`);
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_TOP_PRODUCTS,
      data,
      loading: false
    });
    return {
      success: true,
      data
    };
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_TOP_PRODUCTS,
      error,
      loading: false
    });
    return {
      success: false,
      error
    };
  }
};
const getSearchSuggestions = async (dispatch, params = {}) => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_SEARCH_SUGGESTIONS,
    loading: true
  });

  try {
    const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.get)(`/api/medicine?${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.objectToQuery)(params)}`);
    const parsedData = data === null || data === void 0 ? void 0 : data.map(item => item.name);
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_SEARCH_SUGGESTIONS,
      data: parsedData,
      loading: false
    });
    return {
      data,
      success: true
    };
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_SEARCH_SUGGESTIONS,
      loading: false,
      error
    });
    return {
      error,
      success: false
    };
  }
};

/***/ }),

/***/ "./store/products/constants.js":
/*!*************************************!*\
  !*** ./store/products/constants.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_SALES_PRODUCTS: "GET_SALES_PRODUCTS",
  GET_TOP_PRODUCTS: "GET_TOP_PRODUCTS",
  GET_CATALOG_PRODUCTS: "GET_CATALOG_PRODUCTS",
  GET_SEARCH_SUGGESTIONS: 'GET_SEARCH_SUGGESTIONS'
});

/***/ }),

/***/ "./store/products/reducer.js":
/*!***********************************!*\
  !*** ./store/products/reducer.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./store/products/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function products(state, _ref) {
  let {
    type
  } = _ref,
      res = _objectWithoutProperties(_ref, ["type"]);

  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_PRODUCTS:
      return Object.assign(state, {
        all: res
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_SALES_PRODUCTS:
      return Object.assign(state, {
        sales: res
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_TOP_PRODUCTS:
      return Object.assign(state, {
        top: res
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_CATALOG_PRODUCTS:
      return Object.assign(state, {
        catalog: _objectSpread({
          data: res.data || state.catalog.data || []
        }, res)
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_SEARCH_SUGGESTIONS:
      return Object.assign(state, {
        searchSuggestions: _objectSpread({
          data: res.data || state.searchSuggestions.data
        }, res)
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (products);

/***/ }),

/***/ "./store/user/actions.js":
/*!*******************************!*\
  !*** ./store/user/actions.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOtp": function() { return /* binding */ getOtp; },
/* harmony export */   "login": function() { return /* binding */ login; },
/* harmony export */   "loginByToken": function() { return /* binding */ loginByToken; },
/* harmony export */   "logout": function() { return /* binding */ logout; },
/* harmony export */   "registration": function() { return /* binding */ registration; },
/* harmony export */   "getUserById": function() { return /* binding */ getUserById; },
/* harmony export */   "changeUserData": function() { return /* binding */ changeUserData; },
/* harmony export */   "changeUserPhoto": function() { return /* binding */ changeUserPhoto; },
/* harmony export */   "deleteUserPhoto": function() { return /* binding */ deleteUserPhoto; },
/* harmony export */   "getUserOrders": function() { return /* binding */ getUserOrders; },
/* harmony export */   "createOrder": function() { return /* binding */ createOrder; },
/* harmony export */   "sendNumber": function() { return /* binding */ sendNumber; },
/* harmony export */   "confirmNumber": function() { return /* binding */ confirmNumber; },
/* harmony export */   "changeFavorite": function() { return /* binding */ changeFavorite; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./store/user/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const getOtp = async (dispatch, data) => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.SEND_OTP,
    loading: true
  });

  try {
    const res = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.post)('/api/otp/sendSmsOtp', data);
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.SEND_OTP,
      data: res,
      loading: false
    });
    return {
      success: true,
      data: res
    };
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.SEND_OTP,
      error,
      loading: false
    });
    return {
      success: false,
      error
    };
  }
};
const login = async (dispatch, data) => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.LOGIN,
    loading: true
  });

  try {
    const res = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.post)('/api/auth/login', data);
    window.localStorage.setItem('token', res.token);
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.LOGIN,
      data: res,
      loading: false
    });
    return {
      success: true,
      data: res
    };
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.LOGIN,
      error,
      loading: false
    });
    return {
      success: false,
      error
    };
  }
};
const loginByToken = async dispatch => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.LOGIN,
    loading: true
  });

  try {
    const res = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.updateToken)();
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.LOGIN,
      data: res,
      loading: false
    });
    return {
      success: true,
      data: res
    };
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.LOGIN,
      error,
      loading: false
    });
    return {
      success: false,
      error
    };
  }
};
const logout = async dispatch => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.LOGOUT,
    loading: true
  });
  const token = window.localStorage.getItem('token');

  try {
    await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.post)('/api/auth/logout', {
      token
    });
    window.localStorage.removeItem('token');
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.LOGOUT,
      loading: false
    });
    return {
      success: true,
      data: {}
    };
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.LOGOUT,
      error,
      loading: false
    });
    return {
      success: false,
      error
    };
  }
};
const registration = async (dispatch, data) => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.REGISTRATION,
    loading: true
  });

  try {
    const res = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.post)('/api/user', data);
    window.localStorage.setItem('token', res.token);
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.REGISTRATION,
      data: res,
      loading: false
    });
    return {
      success: true,
      data: res
    };
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.REGISTRATION,
      error,
      loading: false
    });
    return {
      success: false,
      error
    };
  }
};
const getUserById = async (dispatch, id) => {
  try {
    const res = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.get)(`/api/user/${id}`);
    return {
      success: true,
      data: res
    };
  } catch (error) {
    return {
      success: false,
      error
    };
  }
};
const changeUserData = async (dispatch, _ref) => {
  let {
    id
  } = _ref,
      data = _objectWithoutProperties(_ref, ["id"]);

  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.CHANGE_USER,
    loading: true
  });

  try {
    const res = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.post)(`/api/user/${id}`, data, {
      method: 'PATCH'
    });
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.CHANGE_USER,
      data: res,
      loading: false
    });
    return {
      success: true,
      data: res
    };
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.CHANGE_USER,
      error,
      loading: false
    });
    return {
      success: false,
      error
    };
  }
};
const changeUserPhoto = async (dispatch, {
  id,
  formData
}) => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.CHANGE_USER,
    loading: true
  });

  try {
    const res = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.modalsRequest)(`/api/user/${id}`, formData, true, 'PATCH');
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.CHANGE_USER,
      data: res.body,
      loading: false
    });
    return res;
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.CHANGE_USER,
      loading: false,
      error
    });
    return {
      success: false,
      error
    };
  }
};
const deleteUserPhoto = async (dispatch, id, filename) => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.CHANGE_USER,
    loading: true
  });

  try {
    const res = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.deleteRequest)(`/api/user/${id}/profile/photo/${filename}`);
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.CHANGE_USER,
      loading: false,
      data: res.data
    });
    return res;
  } catch (error) {
    dispatch({
      success: false,
      error
    });
    return {
      success: false,
      error
    };
  }
};
const getUserOrders = async (dispatch, id) => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_USER_ORDERS,
    loading: true
  });

  try {
    const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.get)(`/api/order?buyer=${id}`);
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_USER_ORDERS,
      data,
      loading: false
    });
    return {
      success: true,
      data
    };
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_USER_ORDERS,
      error,
      loading: false
    });
    return {
      success: false,
      error
    };
  }
};
const createOrder = async (dispatch, data) => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.CREATE_ORDER,
    loading: true
  });

  try {
    const res = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.post)(`/api/order`, data);
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.CREATE_ORDER,
      data: res,
      loading: false
    });
    return {
      success: true,
      data: res
    };
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.CREATE_ORDER,
      error,
      loading: false
    });
    return {
      success: false,
      error
    };
  }
};
const sendNumber = async data => {
  try {
    const res = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.post)('/api/otp/sendSmsOtp', _objectSpread(_objectSpread({}, data), {}, {
      sms_otp_type: 'UPDATE_PHONE'
    }));
    return {
      success: true,
      sms_otp_id: res.sms_otp_id
    };
  } catch (error) {
    return {
      success: false,
      error
    };
  }
};
const confirmNumber = async data => {
  try {
    const res = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.post)('/api/otp/confirmSmsOtp', data);
    return {
      success: true
    };
  } catch (error) {
    return {
      success: false,
      error
    };
  }
};
const changeFavorite = async (dispatch, userId, productId, favorite) => {
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.CHANGE_FAVORITE
  });

  try {
    let newFavorite = [];

    if (favorite.includes(productId)) {
      newFavorite = favorite.filter(fav => fav !== productId);
    } else {
      newFavorite = [...favorite, productId];
    }

    const res = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.post)(`/api/user/${userId}`, {
      favorite_medicines: newFavorite
    }, {
      method: 'PATCH'
    });
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.CHANGE_FAVORITE,
      data: res.favorite_medicines
    });
    return {
      success: true,
      data: res.data
    };
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.CHANGE_FAVORITE,
      error,
      loading: false
    });
    return {
      success: false,
      error
    };
  }
};

/***/ }),

/***/ "./store/user/constants.js":
/*!*********************************!*\
  !*** ./store/user/constants.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  SEND_OTP: "SEND_OTP",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  REGISTRATION: "REGISTRATION",
  CHANGE_USER: "CHANGE_USER",
  GET_USER_ORDERS: "GET_USER_ORDERS",
  CREATE_ORDER: "CREATE_ORDER",
  CHANGE_FAVORITE: 'CHANGE_FAVORITE'
});

/***/ }),

/***/ "./store/user/reducer.js":
/*!*******************************!*\
  !*** ./store/user/reducer.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./store/user/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function user(state, _ref) {
  var _state$data$orders, _state$info$data;

  let {
    type
  } = _ref,
      res = _objectWithoutProperties(_ref, ["type"]);

  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.SEND_OTP:
      return Object.assign(state, {
        otp: res
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.LOGIN:
      return Object.assign(state, {
        isLoggedIn: !res.error,
        info: res
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.LOGOUT:
      return {
        isLoggedIn: false,
        orders: {},
        otp: {},
        info: {
          loading: res.loading
        }
      };

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.REGISTRATION:
      return Object.assign(state, {
        isLoggedIn: true,
        info: res
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.CHANGE_USER:
      return Object.assign(state, {
        info: res.data ? res : state.info
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_USER_ORDERS:
      return Object.assign(state, {
        orders: Object.assign(state.orders, res)
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.CREATE_ORDER:
      return Object.assign(state, {
        orders: _objectSpread(_objectSpread({}, res), {}, {
          data: ((_state$data$orders = state.data.orders) === null || _state$data$orders === void 0 ? void 0 : _state$data$orders.concat(res.data)) || res.data
        })
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.CHANGE_FAVORITE:
      return Object.assign(state, {
        info: _objectSpread({
          data: Object.assign(state.info.data, {
            favorite_medicines: res.data || ((_state$info$data = state.info.data) === null || _state$info$data === void 0 ? void 0 : _state$info$data.favorite_medicines)
          })
        }, state.info)
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (user);

/***/ }),

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "post": function() { return /* binding */ post; },
/* harmony export */   "updateToken": function() { return /* binding */ updateToken; },
/* harmony export */   "modalsRequest": function() { return /* binding */ modalsRequest; },
/* harmony export */   "deleteRequest": function() { return /* binding */ deleteRequest; },
/* harmony export */   "multipleRequest": function() { return /* binding */ multipleRequest; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const baseUrl = process.env.API_URL || 'http://localhost:8080';
const get = async url => {
  const token = localStorage.getItem('token') || '';
  const res = await fetch(`${baseUrl}${url}`, {
    method: 'GET',
    // mode: 'no-cors',
    // cache: 'default',
    headers: _objectSpread({
      'Content-Type': 'application/json'
    }, token ? {
      'x-auth-token': token
    } : {})
  });

  if (res.ok) {
    const response = await res.json();
    return response.body;
  }

  if (res.status === 403) {
    updateToken();
  }

  throw new Error('error');
};
const post = async (url, body, params) => {
  const token = localStorage.getItem('token') || '';
  const res = await fetch(`${baseUrl}${url}`, _objectSpread({
    method: 'POST',
    // mode: 'no-cors',
    // cache: 'default',
    headers: _objectSpread({
      'Content-Type': 'application/json'
    }, token ? {
      'x-auth-token': token
    } : {}),
    body: JSON.stringify(body)
  }, params));

  if (res.ok) {
    const response = await res.json();
    return response.body;
  }

  if (res.status === 403) {
    updateToken();
  }

  throw new Error('error');
};
const updateToken = async () => {
  const token = localStorage.getItem('token') || '';
  const res = await fetch(`${baseUrl}/api/auth`, {
    method: 'GET',
    // mode: 'no-cors',
    // cache: 'default',
    headers: _objectSpread({
      'Content-Type': 'application/json'
    }, token ? {
      'x-auth-token': token
    } : {})
  });

  if (res.ok) {
    const response = await res.json();
    window.localStorage.setItem('token', response.body.token);
    return response.body;
  }

  throw new Error(error);
};
const modalsRequest = async (url, body, isFormData = false, method = 'POST') => {
  const token = localStorage.getItem('token') || '';
  const res = await fetch(`${baseUrl}${url}`, {
    method,
    body: isFormData ? body : JSON.stringify(body),
    headers: _objectSpread(_objectSpread({}, !isFormData ? {
      'Content-Type': 'application/json'
    } : {}), token ? {
      'x-auth-token': token
    } : {})
  });

  if (res.ok) {
    const response = await res.json();
    return {
      success: true,
      body: response.body
    };
  }

  return {
    success: false
  };
};
const deleteRequest = async url => {
  const token = localStorage.getItem('token') || '';
  const res = await fetch(`${baseUrl}${url}`, {
    method: 'DELETE',
    headers: _objectSpread({
      'Content-Type': 'application/json'
    }, token ? {
      'x-auth-token': token
    } : {})
  });

  if (res.ok) {
    const response = await res.json();
    return {
      success: true,
      body: response.body
    };
  }

  return {
    success: false
  };
}; // do not touch this

const multipleRequest = () => {};

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useValidate": function() { return /* reexport safe */ _validation__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "objectToQuery": function() { return /* binding */ objectToQuery; },
/* harmony export */   "combineReducers": function() { return /* binding */ combineReducers; },
/* harmony export */   "debounce": function() { return /* binding */ debounce; },
/* harmony export */   "calculatePrice": function() { return /* binding */ calculatePrice; },
/* harmony export */   "months": function() { return /* binding */ months; },
/* harmony export */   "SOCIALS": function() { return /* binding */ SOCIALS; },
/* harmony export */   "STATUSES": function() { return /* binding */ STATUSES; }
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./utils/api.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _api__WEBPACK_IMPORTED_MODULE_0__) if(["default","useValidate","objectToQuery","combineReducers","debounce","calculatePrice","months","SOCIALS","STATUSES"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _api__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation */ "./utils/validation.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const objectToQuery = params => Object.keys(params).map(key => key + '=' + params[key]).join('&');
const combineReducers = slices => (state, action) => Object.keys(slices).reduce((acc, prop) => _objectSpread(_objectSpread({}, acc), {}, {
  [prop]: slices[prop](acc[prop], action)
}), state);
function debounce(func, time = 300) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(func.bind(this, ...args), time);
  };
}
function calculatePrice(items, discountPercentage, userType = 'noncommercial') {
  const price = items.reduce((a, b) => a + b.price[userType] * b.amount, 0);
  const discount = Math.floor(price * discountPercentage);
  return {
    discount,
    total: price - discount,
    totalNoDiscount: price
  };
}
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const SOCIALS = {
  vk: "http://vk.com/share.php?",
  ok: "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl=",
  fb: "http://www.facebook.com/sharer.php?u=",
  wp: "https://api.whatsapp.com/send?text="
};
const STATUSES = {
  accepted: 'Принят',
  delivered: 'Доставлен',
  declined: 'Отменен'
};

/***/ }),

/***/ "./utils/validation.js":
/*!*****************************!*\
  !*** ./utils/validation.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var libphonenumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libphonenumber-js */ "libphonenumber-js");
/* harmony import */ var libphonenumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(libphonenumber_js__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\nurbe\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\asd\\utils\\validation.js";



const useValidate = phoneCountry => {
  const displayInputError = (errors, inputName) => {
    if (errors.some(err => err.path === inputName)) {
      var _errors$find;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "error-text",
        children: (_errors$find = errors.find(err => err.path === inputName)) === null || _errors$find === void 0 ? void 0 : _errors$find.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined);
    }

    return null;
  };

  const displayErrorName = (errors, inputName, inputNameText) => {
    if (errors.some(error => error.path === inputName)) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "error-text",
        children: inputNameText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 14
      }, undefined);
    }

    return null;
  };

  const inputErrorClassname = (errors, inputName) => {
    return errors.some(err => err.path === inputName) ? 'input-error' : '';
  };

  yup__WEBPACK_IMPORTED_MODULE_1__.setLocale({
    string: {
      email: 'Неправильно введен e-mail'
    }
  });
  yup__WEBPACK_IMPORTED_MODULE_1__.addMethod(yup__WEBPACK_IMPORTED_MODULE_1__.string, 'validatePhone', function (errorMessage) {
    return this.test('checkPhone', errorMessage, function (phone) {
      const {
        path,
        createError
      } = this;
      const phoneNumber = (0,libphonenumber_js__WEBPACK_IMPORTED_MODULE_2__.parsePhoneNumber)(phone && phone.length > 1 ? phone : '+99600', phoneCountry.toUpperCase());
      return phoneNumber.isValid() || createError({
        path,
        message: errorMessage
      });
    });
  });

  const loginSchema = data => yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().validatePhone('Неправильно введен номер')
  }).validate(data, {
    abortEarly: false
  }).then(() => []).catch(error => error.inner);

  const registerSchema = data => yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    firstname: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Введите имя'),
    lastname: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Введите фамилию'),
    date_of_birth: yup__WEBPACK_IMPORTED_MODULE_1__.date().required('Введите дату рождения'),
    phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().validatePhone('Неправильно введен номер')
  }).validate(data, {
    abortEarly: false
  }).then(() => []).catch(error => error.inner);

  const productModalSchema = data => yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Введите имя'),
    phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().validatePhone('Неправильно введен номер'),
    product: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Укажите товар')
  }).validate(data, {
    abortEarly: false
  }).then(() => []).catch(error => error.inner);

  const feedBackSchema = data => yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Введите имя'),
    phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().validatePhone('Неправильно введен номер'),
    email: yup__WEBPACK_IMPORTED_MODULE_1__.string().email().required('Введите e-mail'),
    body: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Напишите комментарий'),
    title: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Напишите тему')
  }).validate(data, {
    abortEarly: false
  }).then(() => []).catch(error => error.inner);

  const requestCallSchema = data => yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Введите имя'),
    phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().validatePhone('Неправильно введен номер')
  }).validate(data, {
    abortEarly: false
  }).then(() => []).catch(error => error.inner);

  const wholesalersSchema = data => yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Введите имя'),
    phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().validatePhone('Неправильно введен номер'),
    license: yup__WEBPACK_IMPORTED_MODULE_1__.mixed().required('Прикрепите файл')
  }).validate(data, {
    abortEarly: false
  }).then(() => []).catch(error => error.inner);

  return {
    loginSchema,
    registerSchema,
    displayInputError,
    displayErrorName,
    inputErrorClassname,
    productModalSchema,
    feedBackSchema,
    requestCallSchema,
    wholesalersSchema
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useValidate);

/***/ }),

/***/ "./public/delivery.png":
/*!*****************************!*\
  !*** ./public/delivery.png ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/delivery.18afabdc6f072e7fff1084ccba0eb57d.png","height":232,"width":380,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAApUlEQVR42hWKQQqCQBhG52AdoZvUETpBINSmdbsWgS1aKG60RRhEGUURpCVEUEJYM2M5jv1fung8eDwGQNu+Bc93qCwUpODIhCCVK2RSagYAnmfSYTkH8KP8Kys+iM8XklyAqSq290PE74RQL2VRi7pdA0GwJsZlgoHVIXfUQ7Jy8EweSFOBmTml42YLVoa+Dsct7PpNiowG+PUEe+JQ5C7wut31H7PPjPSf3oNYAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./public/icons/add_cart.svg":
/*!***********************************!*\
  !*** ./public/icons/add_cart.svg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/add_cart.fed32bf2d54f53ae1a6db40286e1b07c.svg","height":26,"width":26});

/***/ }),

/***/ "./public/icons/appstore.svg":
/*!***********************************!*\
  !*** ./public/icons/appstore.svg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/appstore.2c3ec15261a458c1dd441c56ecf3fe8d.svg","height":28,"width":71});

/***/ }),

/***/ "./public/icons/cart-black.svg":
/*!*************************************!*\
  !*** ./public/icons/cart-black.svg ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/cart-black.89ae95f0c187cfc716f6f1e8b9bad20f.svg","height":16,"width":17});

/***/ }),

/***/ "./public/icons/cart.svg":
/*!*******************************!*\
  !*** ./public/icons/cart.svg ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/cart.ba5f51d5e47fc5309f20ac1da832062a.svg","height":20,"width":20});

/***/ }),

/***/ "./public/icons/clip.svg":
/*!*******************************!*\
  !*** ./public/icons/clip.svg ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/clip.d680ce614307f069077a7261258938fc.svg","height":24,"width":24});

/***/ }),

/***/ "./public/icons/clock.svg":
/*!********************************!*\
  !*** ./public/icons/clock.svg ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/clock.29ba49ebcb2e61c6a97d855baae8d8b2.svg","height":19,"width":20});

/***/ }),

/***/ "./public/icons/close-black.svg":
/*!**************************************!*\
  !*** ./public/icons/close-black.svg ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/close-black.183085f0d7ec18cc0cb4e73bc9fb8f5e.svg","height":20,"width":20});

/***/ }),

/***/ "./public/icons/close-modal.svg":
/*!**************************************!*\
  !*** ./public/icons/close-modal.svg ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/close-modal.fd92b5b44011d8e39e72141c2d8e1bbb.svg","height":70,"width":35});

/***/ }),

/***/ "./public/icons/dropdown-arrow.svg":
/*!*****************************************!*\
  !*** ./public/icons/dropdown-arrow.svg ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/dropdown-arrow.3aa8d7105e8ded8aa7ce88772c188901.svg","height":24,"width":24});

/***/ }),

/***/ "./public/icons/error.svg":
/*!********************************!*\
  !*** ./public/icons/error.svg ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/error.4e64ffde3f16e075d1409b9f7eedf794.svg","height":64,"width":64});

/***/ }),

/***/ "./public/icons/facebook.svg":
/*!***********************************!*\
  !*** ./public/icons/facebook.svg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/facebook.a6e190731ec0369e09f7799c1c1e50e2.svg","height":16,"width":17});

/***/ }),

/***/ "./public/icons/googleplay.svg":
/*!*************************************!*\
  !*** ./public/icons/googleplay.svg ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/googleplay.4df2be987df89c3c205b5b1f56c347af.svg","height":21,"width":80});

/***/ }),

/***/ "./public/icons/heart-black.svg":
/*!**************************************!*\
  !*** ./public/icons/heart-black.svg ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/heart-black.f6652c81714894de6445871074842390.svg","height":20,"width":20});

/***/ }),

/***/ "./public/icons/heart-gray.svg":
/*!*************************************!*\
  !*** ./public/icons/heart-gray.svg ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/heart-gray.60d87249f21704a47f5cd80194df6981.svg","height":21,"width":20});

/***/ }),

/***/ "./public/icons/heart_active.svg":
/*!***************************************!*\
  !*** ./public/icons/heart_active.svg ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/heart_active.f9d8008a8a9b5967f95bb270e5086c7b.svg","height":24,"width":24});

/***/ }),

/***/ "./public/icons/heart_default.svg":
/*!****************************************!*\
  !*** ./public/icons/heart_default.svg ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/heart_default.c7f74de38296925540a2406291644dbb.svg","height":24,"width":24});

/***/ }),

/***/ "./public/icons/instagram.svg":
/*!************************************!*\
  !*** ./public/icons/instagram.svg ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/instagram.347b2063b6f61656e7dafdc2e62d0040.svg","height":18,"width":18});

/***/ }),

/***/ "./public/icons/login.svg":
/*!********************************!*\
  !*** ./public/icons/login.svg ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/login.a2cd4b3e67741afe0fa910c1ad1e13b5.svg","height":20,"width":20});

/***/ }),

/***/ "./public/icons/logo.svg":
/*!*******************************!*\
  !*** ./public/icons/logo.svg ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/logo.ecb70d1704ff7edcec94ad84a115ab4e.svg","height":48,"width":67});

/***/ }),

/***/ "./public/icons/mail.svg":
/*!*******************************!*\
  !*** ./public/icons/mail.svg ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/mail.4e7050ce7200f0823b9f7f2c2983a424.svg","height":20,"width":20});

/***/ }),

/***/ "./public/icons/mobile-logo.png":
/*!**************************************!*\
  !*** ./public/icons/mobile-logo.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/mobile-logo.60faef4bde94a738d9f2f70328582951.png","height":24,"width":103,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAS0lEQVR4nGMUaNoTzfTv32/2P79Ynz9lupDiVST45w+fNAPDv9///zOwMsplrwhh/PfvK/vnzzwMT3++N4hY+OTXz/8aDEAVQMwFAFlIH//ZuQ7GAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./public/icons/mobile-search.svg":
/*!****************************************!*\
  !*** ./public/icons/mobile-search.svg ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/mobile-search.d5960b15611014c57fa5da255a6f6518.svg","height":20,"width":20});

/***/ }),

/***/ "./public/icons/noproduct.svg":
/*!************************************!*\
  !*** ./public/icons/noproduct.svg ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/noproduct.7df3e039e2000c8ed34d2d8c25c038ee.svg","height":62,"width":62});

/***/ }),

/***/ "./public/icons/ok.svg":
/*!*****************************!*\
  !*** ./public/icons/ok.svg ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/ok.20c2b6169cf7ec7e7b8b65fcd68e208b.svg","height":18,"width":12});

/***/ }),

/***/ "./public/icons/phone-green.svg":
/*!**************************************!*\
  !*** ./public/icons/phone-green.svg ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/phone-green.daffcedb5028c3d7678f5622e46ea756.svg","height":68,"width":68});

/***/ }),

/***/ "./public/icons/phone.svg":
/*!********************************!*\
  !*** ./public/icons/phone.svg ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/phone.14d01333779d15985d7ace2496dab60f.svg","height":20,"width":20});

/***/ }),

/***/ "./public/icons/plus.svg":
/*!*******************************!*\
  !*** ./public/icons/plus.svg ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/plus.02b2c0ece32a4fd6ede12126b675bd69.svg","height":20,"width":20});

/***/ }),

/***/ "./public/icons/search.svg":
/*!*********************************!*\
  !*** ./public/icons/search.svg ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/search.0699fa2b1bc3e03fbf2272b58b0627a0.svg","height":24,"width":24});

/***/ }),

/***/ "./public/icons/success.svg":
/*!**********************************!*\
  !*** ./public/icons/success.svg ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/success.e0dbadc1b7dd8c90eda0f3cd53e9852e.svg","height":64,"width":64});

/***/ }),

/***/ "./public/icons/user-default.svg":
/*!***************************************!*\
  !*** ./public/icons/user-default.svg ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/user-default.9673f044888c472680ef2f6040d6c172.svg","height":21,"width":20});

/***/ }),

/***/ "./public/icons/user-header.svg":
/*!**************************************!*\
  !*** ./public/icons/user-header.svg ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/user-header.d7bc9f886d26b311cd5be8a99dfee850.svg","height":20,"width":20});

/***/ }),

/***/ "./public/icons/vk.svg":
/*!*****************************!*\
  !*** ./public/icons/vk.svg ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/icons/vk.e624e88f41ffd55598fa09a7d361abb2.svg","height":16,"width":17});

/***/ }),

/***/ "./public/map.png":
/*!************************!*\
  !*** ./public/map.png ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/map.d3576a8c3c8779ba4808174fc35582d3.png","height":232,"width":380,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAmklEQVR4nA3Iyw7BQBgF4P90hoQ27mtB4h3EO9h5xtp6jS5YSRo2tk2YZhalYi6H7YdzfXIJte5GzbGeoi+pWGfYJi0CvEdpSpLgTCa41zcq3ZH5YIEQHF9JA9TPKiZKAezweM1hTCO79Z6jcQYyEkVVcOgzZmr4BxFrrfR6qagR+Y4fIL8cnLEPvUqX3My3iBLkGzytruHE+R8q41MM7bpirAAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./public/order.png":
/*!**************************!*\
  !*** ./public/order.png ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/order.be9b1e42e68fc3a9985b731dff62baa6.png","height":232,"width":380,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/AQDS5vsA+/wEAPr7/wADBAE9+fYAKN/Y/5snMQEA9/n8AQDX6v9E/v3/QQkEAXvy+/9X7OcAacGQAac6Z/+9ERwBAQDW6P5bBQEBJAUC/8jz+AFW/foANP/x/+zy9QGFABP/ARDE4f8d/QD/+P79ARf8/ACIHAcA8vDxAPzz9P+VCBIBATeU0Pse/gkE+v////r9/gFPJPMAAurb/875BAGZFx38bc9Wie36IzAAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/saleImage.png":
/*!******************************!*\
  !*** ./public/saleImage.png ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/saleImage.8d41e637f9c7954e5da2896c2fda45ad.png","height":232,"width":380,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAArUlEQVR4nAVAuw7BUBj+fhqtXrQugxBDFxKrzWXiIewGIRGJ2MVmsjMwiScxmiQ2ErNQerQ90cYRSncXYbOUkOQUF4fgBsv04WsOZNOjuO5FhN5cjKy4IDCs1AeKxgf5NOCqd4TaiwiDyW/faJGVzYnpcYuObaNml3HlFyzdNQjjvtjU20LVDcxOO2RSAFOeSBgcPOkQVWfD8MyeEmJvUSmY4AqDrAUQOiNJ+UZ/ZB49CjEqKAsAAAAASUVORK5CYII="});

/***/ }),

/***/ "./styles/banner/banner.module.scss":
/*!******************************************!*\
  !*** ./styles/banner/banner.module.scss ***!
  \******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"bannerWrapper": "banner_bannerWrapper__2wjko",
	"sliderWrapper": "banner_sliderWrapper__11rnb",
	"slideItem": "banner_slideItem__3l6eW"
};


/***/ }),

/***/ "./styles/bestsellers/bestsellers.module.scss":
/*!****************************************************!*\
  !*** ./styles/bestsellers/bestsellers.module.scss ***!
  \****************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "bestsellers_wrapper__3HI1V",
	"content": "bestsellers_content__17G5V",
	"seeAll": "bestsellers_seeAll__3NdXc",
	"loaderWrapper": "bestsellers_loaderWrapper__1ClP1"
};


/***/ }),

/***/ "./styles/footer/footer.module.scss":
/*!******************************************!*\
  !*** ./styles/footer/footer.module.scss ***!
  \******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "footer_footer__3yq9W",
	"topContent": "footer_topContent__2V8c-",
	"content": "footer_content___e8S5",
	"column": "footer_column__2nu2R",
	"footerBottom": "footer_footerBottom__36HIc"
};


/***/ }),

/***/ "./styles/header/header.module.scss":
/*!******************************************!*\
  !*** ./styles/header/header.module.scss ***!
  \******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"header": "header_header__LZegv",
	"toplineWrapper": "header_toplineWrapper__2QfPO",
	"headerTopline": "header_headerTopline__sk4aH",
	"left": "header_left__3PlOf",
	"line": "header_line__1XfYm",
	"right": "header_right__308H6",
	"headerContent": "header_headerContent__247qU",
	"mobileBurgerLogo": "header_mobileBurgerLogo__3P-EY",
	"hamburger": "header_hamburger__kx8Kw",
	"headerSearch": "header_headerSearch__zAhoU",
	"searchIcon": "header_searchIcon__1pLZD",
	"actionWrapperLong": "header_actionWrapperLong__3nld3",
	"actionsWrapper": "header_actionsWrapper__3vNK9",
	"favoriteWrapper": "header_favoriteWrapper__2-3hH",
	"headerActions": "header_headerActions__jLR84",
	"profileActions": "header_profileActions__2Dh6M",
	"bonus": "header_bonus__2_gnf",
	"logout": "header_logout__Z2N84",
	"profileLine": "header_profileLine__1y5TZ",
	"mobileLogo": "header_mobileLogo__33-Af",
	"desktopLogo": "header_desktopLogo__2QGt0",
	"mobileSearch": "header_mobileSearch__JopOw",
	"favoriteImg": "header_favoriteImg__10Cdw",
	"searchSuggestion": "header_searchSuggestion__2cSrL",
	"inner": "header_inner__325pW",
	"suggestion": "header_suggestion__229jf",
	"notFound": "header_notFound__2Khzm",
	"mobileSearchBlock": "header_mobileSearchBlock__2RHPp",
	"searchIconMobile": "header_searchIconMobile__E1Q-L",
	"closeSearchMobile": "header_closeSearchMobile__3DM0O"
};


/***/ }),

/***/ "./styles/header/headerMenu.module.scss":
/*!**********************************************!*\
  !*** ./styles/header/headerMenu.module.scss ***!
  \**********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "headerMenu_wrapper__2W-5q",
	"closeContent": "headerMenu_closeContent__28MJF",
	"hideBlock": "headerMenu_hideBlock__nYAVJ",
	"content": "headerMenu_content__3XfT5",
	"showBlock": "headerMenu_showBlock__1iF0A",
	"closeBtn": "headerMenu_closeBtn__3uqU3",
	"desktopMenu": "headerMenu_desktopMenu__2XthI",
	"mobileMenu": "headerMenu_mobileMenu__3SHJR",
	"menu": "headerMenu_menu__39koR",
	"titleBack": "headerMenu_titleBack__3fr8e",
	"title": "headerMenu_title__2NjsB",
	"mobileNav": "headerMenu_mobileNav__tiHTo",
	"navItem": "headerMenu_navItem__kZrUJ",
	"modalsBtn": "headerMenu_modalsBtn__34cB4",
	"switchLang": "headerMenu_switchLang__1hvxm",
	"activeLang": "headerMenu_activeLang__osHOq",
	"defaultLang": "headerMenu_defaultLang__24e3G",
	"phone": "headerMenu_phone__orizx"
};


/***/ }),

/***/ "./styles/loader/loader.module.scss":
/*!******************************************!*\
  !*** ./styles/loader/loader.module.scss ***!
  \******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"spinner": "loader_spinner__INilr",
	"spin": "loader_spin__8qZYa",
	"buttonLoader": "loader_buttonLoader__14ZSo"
};


/***/ }),

/***/ "./styles/modals/cartModal.module.scss":
/*!*********************************************!*\
  !*** ./styles/modals/cartModal.module.scss ***!
  \*********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "cartModal_wrapper__TfKzI",
	"closeContent": "cartModal_closeContent__3Caa7",
	"hideBlock": "cartModal_hideBlock__36ieS",
	"content": "cartModal_content__3qH3E",
	"showCart": "cartModal_showCart__2DMvI",
	"close": "cartModal_close__26bHu",
	"products": "cartModal_products__3jqQB",
	"cartScroll": "cartModal_cartScroll__1lgy9",
	"bottom": "cartModal_bottom__32-Lt",
	"bottomInfo": "cartModal_bottomInfo__CotNx",
	"item": "cartModal_item__2JDYn",
	"itemImg": "cartModal_itemImg__eBN9Y",
	"itemBody": "cartModal_itemBody__2-YEO",
	"itemPriceBlock": "cartModal_itemPriceBlock__2xBK8",
	"itemPrice": "cartModal_itemPrice__pRc3s",
	"itemPriceTotal": "cartModal_itemPriceTotal__3tsAf",
	"calc": "cartModal_calc__2Z31h",
	"minus": "cartModal_minus__28LWc"
};


/***/ }),

/***/ "./styles/modals/modal.module.scss":
/*!*****************************************!*\
  !*** ./styles/modals/modal.module.scss ***!
  \*****************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "modal_wrapper__wFnRU",
	"activeWrapper": "modal_activeWrapper__-wO-l",
	"content": "modal_content__3BW5Z",
	"text": "modal_text__2ORgR",
	"formItem": "modal_formItem__kstQr",
	"close": "modal_close__2Wm8Z",
	"phoneIcon": "modal_phoneIcon__PgwFS"
};


/***/ }),

/***/ "./styles/modals/successModal.module.scss":
/*!************************************************!*\
  !*** ./styles/modals/successModal.module.scss ***!
  \************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "successModal_wrapper__2OTqA",
	"image": "successModal_image__ZyAAo",
	"link": "successModal_link__2NFGM"
};


/***/ }),

/***/ "./styles/news/newsItem.module.scss":
/*!******************************************!*\
  !*** ./styles/news/newsItem.module.scss ***!
  \******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"item": "newsItem_item__1cFr5",
	"title": "newsItem_title__3XTE2",
	"fullWidth": "newsItem_fullWidth__BSc4y",
	"image": "newsItem_image__nXuuK",
	"errorImage": "newsItem_errorImage__37PfJ"
};


/***/ }),

/***/ "./styles/news/newsWrapper.module.scss":
/*!*********************************************!*\
  !*** ./styles/news/newsWrapper.module.scss ***!
  \*********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "newsWrapper_wrapper__1c0nO",
	"heading": "newsWrapper_heading__1XS3r",
	"newsContent": "newsWrapper_newsContent__dcFa0",
	"seeAll": "newsWrapper_seeAll__2AvDY"
};


/***/ }),

/***/ "./styles/product/productItem.module.scss":
/*!************************************************!*\
  !*** ./styles/product/productItem.module.scss ***!
  \************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"item": "productItem_item__3mgx3",
	"description": "productItem_description__2mOqr",
	"price": "productItem_price__3AmVx",
	"favorite": "productItem_favorite__x6Cwi",
	"cart": "productItem_cart__2IoVn",
	"actions": "productItem_actions__2KAsU",
	"imageBlock": "productItem_imageBlock__3v7m2",
	"inlineItem": "productItem_inlineItem__1JBN5",
	"productBody": "productItem_productBody__1Ng0b",
	"crossed": "productItem_crossed__2sxzT",
	"defaultPrice": "productItem_defaultPrice__wrew5",
	"favoritePopup": "productItem_favoritePopup__3419-",
	"minus": "productItem_minus__2KRRM"
};


/***/ }),

/***/ "./styles/promotions/arrows.module.scss":
/*!**********************************************!*\
  !*** ./styles/promotions/arrows.module.scss ***!
  \**********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"next": "arrows_next__pe8gj",
	"prev": "arrows_prev__2o5Rx"
};


/***/ }),

/***/ "./styles/promotions/promotion.module.scss":
/*!*************************************************!*\
  !*** ./styles/promotions/promotion.module.scss ***!
  \*************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "promotion_wrapper__1BfWs",
	"sliderItem": "promotion_sliderItem__3Jri_",
	"sliderWrapper": "promotion_sliderWrapper__-i1vL",
	"slider": "promotion_slider__1pGOX",
	"seeAll": "promotion_seeAll__2-0Yk",
	"content": "promotion_content__2S8kO",
	"questionsWrapper": "promotion_questionsWrapper__3jSlO",
	"mobileSlider": "promotion_mobileSlider__1KsCn"
};


/***/ }),

/***/ "./node_modules/react-phone-input-2/lib/style.css":
/*!********************************************************!*\
  !*** ./node_modules/react-phone-input-2/lib/style.css ***!
  \********************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/react-phone-input-2/lang/ru.json":
/*!*******************************************************!*\
  !*** ./node_modules/react-phone-input-2/lang/ru.json ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"au":"Австралия","at":"Австрия","az":"Азербайджан","ax":"Аландские о-ва","al":"Албания","dz":"Алжир","as":"Американское Самоа","ai":"Ангилья","ao":"Ангола","ad":"Андорра","aq":"Антарктида","ag":"Антигуа и Барбуда","ar":"Аргентина","am":"Армения","aw":"Аруба","af":"Афганистан","bs":"Багамы","bd":"Бангладеш","bb":"Барбадос","bh":"Бахрейн","by":"Беларусь","bz":"Белиз","be":"Бельгия","bj":"Бенин","bm":"Бермудские о-ва","bg":"Болгария","bo":"Боливия","bq":"Бонэйр, Синт-Эстатиус и Саба","ba":"Босния и Герцеговина","bw":"Ботсвана","br":"Бразилия","io":"Британская территория в Индийском океане","bn":"Бруней-Даруссалам","bf":"Буркина-Фасо","bi":"Бурунди","bt":"Бутан","vu":"Вануату","va":"Ватикан","gb":"Великобритания","hu":"Венгрия","ve":"Венесуэла","vg":"Виргинские о-ва","vi":"Виргинские о-ва","um":"Внешние малые о-ва","tl":"Восточный Тимор","vn":"Вьетнам","ga":"Габон","ht":"Гаити","gy":"Гайана","gm":"Гамбия","gh":"Гана","gp":"Гваделупа","gt":"Гватемала","gn":"Гвинея","gw":"Гвинея-Бисау","de":"Германия","gg":"Гернси","gi":"Гибралтар","hn":"Гондурас","hk":"Гонконг","gd":"Гренада","gl":"Гренландия","gr":"Греция","ge":"Грузия","gu":"Гуам","dk":"Дания","je":"Джерси","dj":"Джибути","dg":"Диего-Гарсия","dm":"Доминика","do":"Доминиканская Республика","eg":"Египет","zm":"Замбия","eh":"Западная Сахара","zw":"Зимбабве","il":"Израиль","in":"Индия","id":"Индонезия","jo":"Иордания","iq":"Ирак","ir":"Иран","ie":"Ирландия","is":"Исландия","es":"Испания","it":"Италия","ye":"Йемен","cv":"Кабо-Верде","kz":"Казахстан","kh":"Камбоджа","cm":"Камерун","ca":"Канада","ic":"Канарские о-ва","qa":"Катар","ke":"Кения","cy":"Кипр","kg":"Киргизия","ki":"Кирибати","cn":"Китай","kp":"КНДР","cc":"Кокосовые о-ва","co":"Колумбия","km":"Коморы","cg":"Конго - Браззавиль","cd":"Конго - Киншаса","xk":"Косово","cr":"Коста-Рика","ci":"Кот-д’Ивуар","cu":"Куба","kw":"Кувейт","cw":"Кюрасао","la":"Лаос","lv":"Латвия","ls":"Лесото","lr":"Либерия","lb":"Ливан","ly":"Ливия","lt":"Литва","li":"Лихтенштейн","lu":"Люксембург","mu":"Маврикий","mr":"Мавритания","mg":"Мадагаскар","yt":"Майотта","mo":"Макао","mw":"Малави","my":"Малайзия","ml":"Мали","mv":"Мальдивы","mt":"Мальта","ma":"Марокко","mq":"Мартиника","mh":"Маршалловы Острова","mx":"Мексика","mz":"Мозамбик","md":"Молдова","mc":"Монако","mn":"Монголия","ms":"Монтсеррат","mm":"Мьянма","na":"Намибия","nr":"Науру","np":"Непал","ne":"Нигер","ng":"Нигерия","nl":"Нидерланды","ni":"Никарагуа","nu":"Ниуэ","nz":"Новая Зеландия","nc":"Новая Каледония","no":"Норвегия","ac":"о-в Вознесения","im":"о-в Мэн","nf":"о-в Норфолк","cx":"о-в Рождества","sh":"о-в Св. Елены","pn":"о-ва Питкэрн","tc":"о-ва Тёркс и Кайкос","ae":"ОАЭ","om":"Оман","ky":"Острова Кайман","ck":"Острова Кука","pk":"Пакистан","pw":"Палау","ps":"Палестинские территории","pa":"Панама","pg":"Папуа — Новая Гвинея","py":"Парагвай","pe":"Перу","pl":"Польша","pt":"Португалия","pr":"Пуэрто-Рико","kr":"Республика Корея","re":"Реюньон","ru":"Россия","rw":"Руанда","ro":"Румыния","sv":"Сальвадор","ws":"Самоа","sm":"Сан-Марино","st":"Сан-Томе и Принсипи","sa":"Саудовская Аравия","mk":"Северная Македония","mp":"Северные Марианские о-ва","sc":"Сейшельские Острова","bl":"Сен-Бартелеми","mf":"Сен-Мартен","pm":"Сен-Пьер и Микелон","sn":"Сенегал","vc":"Сент-Винсент и Гренадины","kn":"Сент-Китс и Невис","lc":"Сент-Люсия","rs":"Сербия","ea":"Сеута и Мелилья","sg":"Сингапур","sx":"Синт-Мартен","sy":"Сирия","sk":"Словакия","si":"Словения","us":"Соединенные Штаты","sb":"Соломоновы Острова","so":"Сомали","sd":"Судан","sr":"Суринам","sl":"Сьерра-Леоне","tj":"Таджикистан","th":"Таиланд","tw":"Тайвань","tz":"Танзания","tg":"Того","tk":"Токелау","to":"Тонга","tt":"Тринидад и Тобаго","ta":"Тристан-да-Кунья","tv":"Тувалу","tn":"Тунис","tm":"Туркменистан","tr":"Турция","ug":"Уганда","uz":"Узбекистан","ua":"Украина","wf":"Уоллис и Футуна","uy":"Уругвай","fo":"Фарерские о-ва","fm":"Федеративные Штаты Микронезии","fj":"Фиджи","ph":"Филиппины","fi":"Финляндия","fk":"Фолклендские о-ва","fr":"Франция","gf":"Французская Гвиана","pf":"Французская Полинезия","tf":"Французские Южные территории","hr":"Хорватия","cf":"Центрально-Африканская Республика","td":"Чад","me":"Черногория","cz":"Чехия","cl":"Чили","ch":"Швейцария","se":"Швеция","sj":"Шпицберген и Ян-Майен","lk":"Шри-Ланка","ec":"Эквадор","gq":"Экваториальная Гвинея","er":"Эритрея","sz":"Эсватини","ee":"Эстония","et":"Эфиопия","gs":"Южная Георгия и Южные Сандвичевы о-ва","za":"Южно-Африканская Республика","ss":"Южный Судан","jm":"Ямайка","jp":"Япония"}');

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("classnames");;

/***/ }),

/***/ "libphonenumber-js":
/*!************************************!*\
  !*** external "libphonenumber-js" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("libphonenumber-js");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-content-loader":
/*!***************************************!*\
  !*** external "react-content-loader" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-content-loader");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-phone-input-2":
/*!**************************************!*\
  !*** external "react-phone-input-2" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-phone-input-2");;

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-slick");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("yup");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();