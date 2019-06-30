webpackHotUpdate("static/development/pages/writing.js",{

/***/ "./containers/Writing/Writing.js":
/*!***************************************!*\
  !*** ./containers/Writing/Writing.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "../node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "../node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "../node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_SitePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/SitePage */ "./components/SitePage/index.js");
/* harmony import */ var _components_WritingIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/WritingIcon */ "./components/WritingIcon/index.js");
/* harmony import */ var _poems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./poems */ "./containers/Writing/poems.js");
/* harmony import */ var _Writing_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Writing.css */ "./containers/Writing/Writing.css");
/* harmony import */ var _Writing_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Writing_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/cedric/Documents/personal-site/src/containers/Writing/Writing.js";









var TITLE = "Writing - Cedric McDougal";
var DESCRIPTION = "TODO";
var PAPERS = [{
  title: "Multi-Dimensional Computer-Driven Quantitative Analysis of the Music and\nLyrics of the Beatles",
  href: "https://cedricmcdougal.s3.us-east-2.amazonaws.com/personal-site/docs/computer-driven-analysis-of-the-music-and-lyrics-of-the-beatles.pdf"
}, {
  title: "Overcoming the CAP Theorem: A survey of research on distributed computing",
  href: "https://cedricmcdougal.s3.us-east-2.amazonaws.com/personal-site/docs/overcoming-the-cap-theorem-a-survey-of-research-on-distributed-computing.pdf"
}];

var Writing = function Writing() {
  var classes = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(_Writing_css__WEBPACK_IMPORTED_MODULE_8___default.a)();
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_SitePage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    description: DESCRIPTION,
    favicon: "writing",
    icon: _components_WritingIcon__WEBPACK_IMPORTED_MODULE_6__["default"],
    mobileTitle: "Writing",
    title: TITLE,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Papers"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, PAPERS.map(function (_ref) {
    var title = _ref.title,
        href = _ref.href;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["default"], {
      component: _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_0__["default"],
      href: href,
      rel: "noopener noreferrer",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "subtitle1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, title));
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Poems"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, _poems__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (_ref2) {
    var title = _ref2.title,
        body = _ref2.body;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: title,
      className: classes.poem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.poemTitle,
      variant: "h6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.poemBody,
      variant: "body2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, body.trim()));
  })));
};

Writing.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Writing);

/***/ })

})
//# sourceMappingURL=writing.js.827f5e0b37894040f501.hot-update.js.map