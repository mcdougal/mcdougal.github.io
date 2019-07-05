webpackHotUpdate("static/development/pages/code.js",{

/***/ "./components/Media/Media.js":
/*!***********************************!*\
  !*** ./components/Media/Media.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../node_modules/@babel/runtime-corejs2/helpers/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "../node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "../node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "/home/cedric/Documents/personal-site/src/components/Media/Media.js";






var Media = function Media(_ref) {
  var className = _ref.className,
      component = _ref.component,
      image = _ref.image,
      otherProps = _babel_runtime_corejs2_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_ref, ["className", "component", "image"]);

  var Component = component;
  var classes = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function () {
    return {
      loadImage: {},
      mediaBackground: {
        'html.no-webp &$loadImage': {
          backgroundImage: "url('".concat(image.default, "')")
        },
        'html.webp &$loadImage ': {
          backgroundImage: "url('".concat(image.webp, "')")
        }
      }
    };
  })();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState2 = _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      shouldLoadImage = _useState2[0],
      setShouldLoadImage = _useState2[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    if ("IntersectionObserver" in window) {
      var lazyImageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setShouldLoadImage(true);
            observer.unobserve(entry.target);
          }
        });
      });
      lazyImageObserver.observe(ref.current);
    } else {
      setShouldLoadImage(true);
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Component, _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, otherProps, {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, classes.mediaBackground, _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, classes.loadImage, shouldLoadImage)),
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }));
};

Media.defaultProps = {
  className: null,
  component: _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4__["default"]
};
Media.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  component: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object]),
  image: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
    default: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
    webp: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Media);

/***/ })

})
//# sourceMappingURL=code.js.a71d4e04009d7e095bbf.hot-update.js.map