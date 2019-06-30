webpackHotUpdate("static/development/pages/writing.js",{

/***/ "./containers/Writing/Poem/Poem.css":
/*!******************************************!*\
  !*** ./containers/Writing/Poem/Poem.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {


    module.exports = function cssToMuiLoader(theme) {
      
      
      
      return {
        
        
      };
    
    };
  

/***/ }),

/***/ "./containers/Writing/Poem/Poem.js":
/*!*****************************************!*\
  !*** ./containers/Writing/Poem/Poem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Paper */ "../node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "../node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Poem_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Poem.css */ "./containers/Writing/Poem/Poem.css");
/* harmony import */ var _Poem_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Poem_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/cedric/Documents/personal-site/src/containers/Writing/Poem/Poem.js";







var Poem = function Poem(_ref) {
  var body = _ref.body,
      title = _ref.title;
  var classes = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(_Poem_css__WEBPACK_IMPORTED_MODULE_5___default.a)();
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_0__["default"], {
    key: title,
    className: classes.poem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.poemTitle,
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.poemBody,
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, body.trim()));
};

Poem.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Poem);

/***/ }),

/***/ "./containers/Writing/Poem/index.js":
/*!******************************************!*\
  !*** ./containers/Writing/Poem/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Poem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Poem */ "./containers/Writing/Poem/Poem.js");

/* harmony default export */ __webpack_exports__["default"] = (_Poem__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./containers/Writing/Writing.js":
/*!***************************************!*\
  !*** ./containers/Writing/Writing.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "../node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "../node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "../node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SitePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SitePage */ "./components/SitePage/index.js");
/* harmony import */ var _components_WritingIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/WritingIcon */ "./components/WritingIcon/index.js");
/* harmony import */ var _Poem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Poem */ "./containers/Writing/Poem/index.js");
/* harmony import */ var _poems__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./poems */ "./containers/Writing/poems.js");
/* harmony import */ var _ResearchPaper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ResearchPaper */ "./containers/Writing/ResearchPaper/index.js");
/* harmony import */ var _Writing_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Writing.css */ "./containers/Writing/Writing.css");
/* harmony import */ var _Writing_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Writing_css__WEBPACK_IMPORTED_MODULE_11__);
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
  var classes = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(_Writing_css__WEBPACK_IMPORTED_MODULE_11___default.a)();
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SitePage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    description: DESCRIPTION,
    favicon: "writing",
    icon: _components_WritingIcon__WEBPACK_IMPORTED_MODULE_7__["default"],
    mobileTitle: "Writing",
    title: TITLE,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.sectionTitle,
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Papers"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, PAPERS.map(function (_ref) {
    var href = _ref.href,
        title = _ref.title;
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ResearchPaper__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: title,
      herf: href,
      title: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.sectionTitle,
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Poems"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, _poems__WEBPACK_IMPORTED_MODULE_9__["default"].map(function (_ref2) {
    var body = _ref2.body,
        title = _ref2.title;
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Poem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: title,
      body: body,
      title: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    });
  }))));
};

Writing.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Writing);

/***/ })

})
//# sourceMappingURL=writing.js.44d5cbc498c9f329f460.hot-update.js.map