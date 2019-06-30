webpackHotUpdate("static/development/pages/writing.js",{

/***/ "./containers/Writing/ResearchPaper/ResearchPaper.js":
/*!***********************************************************!*\
  !*** ./containers/Writing/ResearchPaper/ResearchPaper.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "../node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Collapse */ "../node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "../node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "../node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_SitePage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/SitePage */ "./components/SitePage/index.js");
/* harmony import */ var _components_WritingIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/WritingIcon */ "./components/WritingIcon/index.js");
/* harmony import */ var _ResearchPaper_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ResearchPaper.css */ "./containers/Writing/ResearchPaper/ResearchPaper.css");
/* harmony import */ var _ResearchPaper_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ResearchPaper_css__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/home/cedric/Documents/personal-site/src/containers/Writing/ResearchPaper/ResearchPaper.js";











var ResearchPaper = function ResearchPaper(_ref) {
  var abstract = _ref.abstract,
      href = _ref.href,
      title = _ref.title;
  var classes = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(_ResearchPaper_css__WEBPACK_IMPORTED_MODULE_10___default.a)();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      _useState2 = _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      abstractVisible = _useState2[0],
      setAbstractVisible = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.paper,
    component: _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2__["default"],
    href: href,
    rel: "noopener noreferrer",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.title,
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_3__["default"], {
    in: abstractVisible,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.abstract,
    color: "textSecondary",
    variant: "caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, abstract)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: classes.actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.action,
    color: "secondary",
    onClick: function onClick(event) {
      event.preventDefault();
      event.stopPropagation();
      setAbstractVisible(function (prev) {
        return !prev;
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, abstractVisible ? "Hide" : "Read", " Abstract"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.action,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Read Full Paper")));
};

ResearchPaper.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (ResearchPaper);

/***/ })

})
//# sourceMappingURL=writing.js.1d7a4e05752a6ecdf177.hot-update.js.map