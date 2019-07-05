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
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "../node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActions */ "../node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "../node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "../node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "../node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Collapse */ "../node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/styles */ "../node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/Media */ "./components/Media/index.js");
/* harmony import */ var _ResearchPaper_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ResearchPaper.css */ "./containers/Writing/ResearchPaper/ResearchPaper.css");
/* harmony import */ var _ResearchPaper_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ResearchPaper_css__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "/home/cedric/Documents/personal-site/src/containers/Writing/ResearchPaper/ResearchPaper.js";















var ResearchPaper = function ResearchPaper(_ref) {
  var abstract = _ref.abstract,
      className = _ref.className,
      href = _ref.href,
      image = _ref.image,
      imageTitle = _ref.imageTitle,
      title = _ref.title;
  var classes = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(_ResearchPaper_css__WEBPACK_IMPORTED_MODULE_14___default.a)();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])(false),
      _useState2 = _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      abstractVisible = _useState2[0],
      setAbstractVisible = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(classes.card, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.cardHeader,
    title: title,
    titleTypographyProps: {
      variant: "subtitle1"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.cardMedia,
    component: _components_Media__WEBPACK_IMPORTED_MODULE_13__["default"],
    image: image,
    title: imageTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_7__["default"], {
    in: abstractVisible,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.cardContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.abstract,
    color: "textSecondary",
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, abstract))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.cardActions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, !abstractVisible && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.cardAction,
    color: "secondary",
    onClick: function onClick() {
      setAbstractVisible(function (prev) {
        return !prev;
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Read Abstract"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.cardAction,
    color: "secondary",
    component: "a",
    href: href,
    rel: "noopener noreferrer",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Read Full Paper")));
};

ResearchPaper.defaultProps = {
  className: null
};
ResearchPaper.propTypes = {
  abstract: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  href: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string.isRequired,
  image: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape({
    default: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string.isRequired,
    webp: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string.isRequired
  }).isRequired,
  imageTitle: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ResearchPaper);

/***/ })

})
//# sourceMappingURL=writing.js.59512db6940d70c110c1.hot-update.js.map