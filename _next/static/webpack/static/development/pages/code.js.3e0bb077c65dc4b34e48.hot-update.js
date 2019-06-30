webpackHotUpdate("static/development/pages/code.js",{

/***/ "./containers/Code/Code.js":
/*!*********************************!*\
  !*** ./containers/Code/Code.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "../node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "../node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "../node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "../node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "../node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ "../node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "../node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "../node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "../node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "../node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/styles */ "../node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_CodeIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/CodeIcon */ "./components/CodeIcon/index.js");
/* harmony import */ var _components_LinkWrapper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/LinkWrapper */ "./components/LinkWrapper/index.js");
/* harmony import */ var _components_SitePage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/SitePage */ "./components/SitePage/index.js");
/* harmony import */ var _Code_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Code.css */ "./containers/Code/Code.css");
/* harmony import */ var _Code_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_Code_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _CodeCard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./CodeCard */ "./containers/Code/CodeCard/index.js");
var _jsxFileName = "/home/cedric/Documents/personal-site/src/containers/Code/Code.js";





















var TITLE = "Code - Cedric McDougal";
var DESCRIPTION = "TODO";
var S3 = "https://cedricmcdougal.s3.us-east-2.amazonaws.com/personal-site/images";
var CARDS = [{
  name: "neighborschools",
  label: "NeighborSchools",
  image: "".concat(S3, "/neighborschools-540.png"),
  href: "https://www.neighborschools.com",
  description: react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, "I\u2019m currently the technical co-founder of the startup NeighborSchools. We\u2019re helping qualified providers start licensed family child care programs in their homes.")
}, {
  name: "dgi",
  label: "Digital Grandparents",
  image: "".concat(S3, "/dgi-540.png"),
  href: "https://dg-inc.org",
  description: react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, "At Northeastern, I co-founded a non-profit called Digital Grandparents that helps older adults learn how to use technology. Up until 2016 I was actively managing the website.")
}, {
  name: "south-america-blog",
  label: "South America Backpacking Blog",
  image: "".concat(S3, "/south-america-blog-540.png"),
  href: "https://mcdougal.github.io/south-america-blog",
  description: react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, "In 2013, I backpacked through South America for a month. I went to Argentina and Bolivia. This is the blog of my trip.")
}, {
  name: "walkabout-boston",
  label: "Walkabout Boston",
  image: "".concat(S3, "/walkabout-boston-540.png"),
  href: "https://mcdougal.github.io/walkabout-boston",
  description: react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, "A photo journal of a lengthy walk around Boston, showcasing Longwood, Fenway and Mission Hill.")
}, {
  name: "beatles-dataset-builder",
  label: "Beatles Dataset Builder",
  image: "".concat(S3, "/beatles-dataset-builder-540.png"),
  href: "https://github.com/mcdougal/BeatlesDatasetBuilder",
  description: react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, "The 1st iteration of my personal website. This one probably dates back to 2009 or so. How far I\u2019ve come.")
}, {
  name: "handman",
  label: "Handman",
  image: "".concat(S3, "/handman-540.png"),
  href: "https://github.com/mcdougal/handman",
  description: react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, "The 1st iteration of my personal website. This one probably dates back to 2009 or so. How far I\u2019ve come.")
}, {
  name: "notable",
  label: "Notable",
  image: "".concat(S3, "/notable-540.png"),
  href: "https://github.com/mcdougal/notable",
  description: react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, "The 1st iteration of my personal website. This one probably dates back to 2009 or so. How far I\u2019ve come.")
}, {
  name: "wumpus-world",
  label: "Wumpus World",
  image: "".concat(S3, "/wumpus-world-540.png"),
  href: "https://github.com/mcdougal/WumpusWorld",
  description: react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, "The 1st iteration of my personal website. This one probably dates back to 2009 or so. How far I\u2019ve come.")
}, {
  name: "traffic-smart",
  label: "TrafficSmart",
  image: "".concat(S3, "/traffic-smart-540.png"),
  href: "https://github.com/mcdougal/TrafficSmart",
  description: react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, "The 1st iteration of my personal website. This one probably dates back to 2009 or so. How far I\u2019ve come.")
}];

var Code = function Code() {
  var classes = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(_Code_css__WEBPACK_IMPORTED_MODULE_19___default.a)();
  return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_components_SitePage__WEBPACK_IMPORTED_MODULE_18__["default"], {
    description: DESCRIPTION,
    favicon: "code",
    icon: _components_CodeIcon__WEBPACK_IMPORTED_MODULE_16__["default"],
    mobileTitle: "Code",
    title: TITLE,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.description,
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "These are the various coding projects I\u2019ve worked on over the years."), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: classes.cards,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, CARDS.map(function (_ref) {
    var name = _ref.name,
        label = _ref.label,
        image = _ref.image,
        description = _ref.description,
        href = _ref.href;
    return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
      key: name,
      className: classes.cardContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_CodeCard__WEBPACK_IMPORTED_MODULE_20__["default"], {
      description: description,
      href: href,
      image: image,
      label: label,
      name: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Code);

/***/ })

})
//# sourceMappingURL=code.js.3e0bb077c65dc4b34e48.hot-update.js.map