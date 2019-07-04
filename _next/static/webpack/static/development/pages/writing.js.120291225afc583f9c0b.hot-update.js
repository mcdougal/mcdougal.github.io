webpackHotUpdate("static/development/pages/writing.js",{

/***/ "./containers/Writing/Poem/Poem.js":
/*!*****************************************!*\
  !*** ./containers/Writing/Poem/Poem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Collapse */ "../node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "../node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "../node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Poem_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Poem.css */ "./containers/Writing/Poem/Poem.css");
/* harmony import */ var _Poem_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Poem_css__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/home/cedric/Documents/personal-site/src/containers/Writing/Poem/Poem.js";










var Poem = function Poem(_ref) {
  var body = _ref.body,
      className = _ref.className,
      title = _ref.title;
  var classes = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(_Poem_css__WEBPACK_IMPORTED_MODULE_9___default.a)();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState2 = _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: title,
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(classes.poem, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.poemTitle,
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.collapse,
    collapsedHeight: "200px",
    in: expanded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.poemBody,
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, body.trim()), !expanded && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: classes.fade,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), !expanded && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.readMore,
    color: "secondary",
    onClick: function onClick() {
      setExpanded(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Read More"));
};

ResearchPaper.defaultProps = {
  className: null
};
Poem.propTypes = {
  body: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Poem);

/***/ })

})
//# sourceMappingURL=writing.js.120291225afc583f9c0b.hot-update.js.map