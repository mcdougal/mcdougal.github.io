webpackHotUpdate("static/development/pages/videos.js",{

/***/ "./containers/Videos/Videos.js":
/*!*************************************!*\
  !*** ./containers/Videos/Videos.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "../node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SitePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SitePage */ "./components/SitePage/index.js");
/* harmony import */ var _components_VideosIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/VideosIcon */ "./components/VideosIcon/index.js");
/* harmony import */ var _Videos_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Videos.css */ "./containers/Videos/Videos.css");
/* harmony import */ var _Videos_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Videos_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/cedric/Documents/personal-site/src/containers/Videos/Videos.js";






var TITLE = "Videos - Cedric McDougal";
var DESCRIPTION = "TODO";

var Videos = function Videos() {
  var classes = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(_Videos_css__WEBPACK_IMPORTED_MODULE_5___default.a)();
  var videos = [{
    label: "Distributed Databases for Dummies",
    description: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "This video walks through the CAP theorem at a very basic level. The CAP Theorem is about fundamental tradeoffs that must be made when designing distributed computing systems."),
    iframe: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("iframe", {
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
        lineNumber: 27
      },
      __self: this
    })
  }, {
    label: "Tea Time",
    description: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "This video was an entry for a scholarship before I went to college. The challenge was to make a 2 minute video about the health benefits of tea. I didn\u2019t win, but I like my song anyways. \uD83D\uDE1B"),
    iframe: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("iframe", {
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
        lineNumber: 50
      },
      __self: this
    })
  }];
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SitePage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    description: DESCRIPTION,
    favicon: "videos",
    icon: _components_VideosIcon__WEBPACK_IMPORTED_MODULE_4__["default"],
    mobileTitle: "Videos",
    title: TITLE,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, videos.map(function (_ref) {
    var label = _ref.label,
        description = _ref.description,
        iframe = _ref.iframe;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.video,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, iframe, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__["default"], {
      variant: "body2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, label), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__["default"], {
      color: "textSecondary",
      variant: "body2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, " ", "\u2014", " ", description))));
  })));
};

Videos.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Videos);

/***/ })

})
//# sourceMappingURL=videos.js.66bfb7146c6d10b28658.hot-update.js.map