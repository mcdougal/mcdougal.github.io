webpackHotUpdate("static/development/pages/writing.js",{

/***/ "./containers/Writing/Writing.js":
/*!***************************************!*\
  !*** ./containers/Writing/Writing.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "../node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SitePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SitePage */ "./components/SitePage/index.js");
/* harmony import */ var _components_WritingIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/WritingIcon */ "./components/WritingIcon/index.js");
/* harmony import */ var _papers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./papers */ "./containers/Writing/papers.js");
/* harmony import */ var _Poem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Poem */ "./containers/Writing/Poem/index.js");
/* harmony import */ var _poems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./poems */ "./containers/Writing/poems.js");
/* harmony import */ var _ResearchPaper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ResearchPaper */ "./containers/Writing/ResearchPaper/index.js");
/* harmony import */ var _Writing_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Writing.css */ "./containers/Writing/Writing.css");
/* harmony import */ var _Writing_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Writing_css__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/home/cedric/Documents/personal-site/src/containers/Writing/Writing.js";










var TITLE = "Writing - Cedric McDougal";
var DESCRIPTION = "Academic papers and poems I have written.";

var Writing = function Writing() {
  var classes = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(_Writing_css__WEBPACK_IMPORTED_MODULE_9___default.a)();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SitePage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    description: DESCRIPTION,
    favicon: "writing",
    icon: _components_WritingIcon__WEBPACK_IMPORTED_MODULE_4__["default"],
    mobileTitle: "Writing",
    title: TITLE,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__["default"], {
    className: classes.sectionTitle,
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Papers"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, _papers__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (_ref) {
    var abstract = _ref.abstract,
        href = _ref.href,
        image = _ref.image,
        imageTitle = _ref.imageTitle,
        title = _ref.title;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ResearchPaper__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: title,
      abstract: abstract,
      href: href,
      image: image,
      imageTitle: imageTitle,
      title: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__["default"], {
    className: classes.sectionTitle,
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Poems"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, _poems__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (_ref2) {
    var body = _ref2.body,
        title = _ref2.title;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Poem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: title,
      body: body,
      title: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    });
  }))));
};

Writing.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Writing);

/***/ })

})
//# sourceMappingURL=writing.js.abb2ab087ec15ccbba22.hot-update.js.map