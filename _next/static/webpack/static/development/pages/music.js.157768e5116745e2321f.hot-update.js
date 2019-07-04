webpackHotUpdate("static/development/pages/music.js",{

/***/ "./components/PageDescription/PageDescription.css":
/*!********************************************************!*\
  !*** ./components/PageDescription/PageDescription.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


    module.exports = function cssToMuiLoader(theme) {
      
      
      
      var output = {
        
        
    'description': {
      'margin': '0 0 '+theme.spacing(6) + 'px','textAlign': 'center',
      
    },
  
      };

      
    output[theme.breakpoints.down('xs')] = {
      
    'description': {
      'marginBottom': theme.spacing(3) + 'px','paddingTop': theme.spacing(3) + 'px',
      
    },
  
    };
  

      return output;
    
    };
  

/***/ }),

/***/ "./components/PageDescription/PageDescription.js":
/*!*******************************************************!*\
  !*** ./components/PageDescription/PageDescription.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "../node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PageDescription_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageDescription.css */ "./components/PageDescription/PageDescription.css");
/* harmony import */ var _PageDescription_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PageDescription_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/cedric/Documents/personal-site/src/components/PageDescription/PageDescription.js";





var PageDescription = function PageDescription(_ref) {
  var children = _ref.children;
  var classes = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(_PageDescription_css__WEBPACK_IMPORTED_MODULE_3___default.a)();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__["default"], {
    className: classes.description,
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (PageDescription);

/***/ }),

/***/ "./components/PageDescription/index.js":
/*!*********************************************!*\
  !*** ./components/PageDescription/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageDescription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageDescription */ "./components/PageDescription/PageDescription.js");

/* harmony default export */ __webpack_exports__["default"] = (_PageDescription__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./containers/Music/Music.js":
/*!***********************************!*\
  !*** ./containers/Music/Music.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Paper */ "../node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "../node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MusicIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MusicIcon */ "./components/MusicIcon/index.js");
/* harmony import */ var _components_PageDescription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PageDescription */ "./components/PageDescription/index.js");
/* harmony import */ var _components_SitePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SitePage */ "./components/SitePage/index.js");
/* harmony import */ var _Music_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Music.css */ "./containers/Music/Music.css");
/* harmony import */ var _Music_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Music_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/cedric/Documents/personal-site/src/containers/Music/Music.js";








var TITLE = "Music - Cedric McDougal";
var DESCRIPTION = "Songs I have written, including some acoustic guitar recordings and electronic music made in Ableton Live.";

var Music = function Music() {
  var classes = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(_Music_css__WEBPACK_IMPORTED_MODULE_7___default.a)();
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_SitePage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    description: DESCRIPTION,
    favicon: "music",
    icon: _components_MusicIcon__WEBPACK_IMPORTED_MODULE_4__["default"],
    mobileTitle: "Music",
    title: TITLE,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_PageDescription__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "These are some of the songs I\u2019ve written."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("iframe", {
    allow: "autoplay",
    frameBorder: "no",
    height: "450",
    scrolling: "no",
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/814890147&color=%23ff9100&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    title: "Cedric McDougal - All Tracks",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Music);

/***/ })

})
//# sourceMappingURL=music.js.157768e5116745e2321f.hot-update.js.map