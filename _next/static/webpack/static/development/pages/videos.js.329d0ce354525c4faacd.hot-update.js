webpackHotUpdate("static/development/pages/videos.js",{

/***/ "./containers/Videos/Videos.js":
/*!*************************************!*\
  !*** ./containers/Videos/Videos.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Paper */ "../node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "../node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SitePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SitePage */ "./components/SitePage/index.js");
/* harmony import */ var _components_VideosIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/VideosIcon */ "./components/VideosIcon/index.js");
/* harmony import */ var _Videos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Videos.css */ "./containers/Videos/Videos.css");
/* harmony import */ var _Videos_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Videos_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/cedric/Documents/personal-site/src/containers/Videos/Videos.js";







var TITLE = "Videos - Cedric McDougal";
var DESCRIPTION = "Random YouTube videos I made for various reasons.";

var Videos = function Videos() {
  var classes = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(_Videos_css__WEBPACK_IMPORTED_MODULE_6___default.a)();
  var videos = [{
    label: "Distributed Databases for Dummies",
    description: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, "This video walks through the CAP theorem at a very basic level. The CAP Theorem is about fundamental tradeoffs that must be made when designing distributed computing systems."),
    iframe: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("iframe", {
      // eslint-disable-next-line max-len
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      className: classes.iframe,
      frameBorder: "0",
      height: "315",
      src: "https://www.youtube.com/embed/aDTE8b-DHYU",
      title: "Distributed Databases for Dummies",
      width: "100%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })
  }, {
    label: "Tea Time",
    description: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, "This video was an entry for a scholarship before I went to college. The challenge was to make a 2 minute video about the health benefits of tea. I didn\u2019t win, but I like my song anyways. \uD83D\uDE1B"),
    iframe: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("iframe", {
      // eslint-disable-next-line max-len
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      className: classes.iframe,
      frameBorder: "0",
      height: "315",
      src: "https://www.youtube.com/embed/obpa2Qa7tI8",
      title: "Tea Time",
      width: "100%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })
  }];
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_SitePage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    description: DESCRIPTION,
    favicon: "videos",
    icon: _components_VideosIcon__WEBPACK_IMPORTED_MODULE_5__["default"],
    mobileTitle: "Videos",
    title: TITLE,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, videos.map(function (_ref) {
    var label = _ref.label,
        description = _ref.description,
        iframe = _ref.iframe;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      key: label,
      className: classes.videoContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_0__["default"], {
      className: classes.video,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, iframe, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: classes.videoDescription,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
      variant: "body2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, label), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
      color: "textSecondary",
      variant: "body2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, " ", "\u2014", " ", description))));
  })));
};

Videos.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Videos);

/***/ })

})
//# sourceMappingURL=videos.js.329d0ce354525c4faacd.hot-update.js.map