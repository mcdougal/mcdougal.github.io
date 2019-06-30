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
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Link */ "../node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper */ "../node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/styles */ "../node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_CodeIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/CodeIcon */ "./components/CodeIcon/index.js");
/* harmony import */ var _components_LinkWrapper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/LinkWrapper */ "./components/LinkWrapper/index.js");
/* harmony import */ var _components_SitePage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/SitePage */ "./components/SitePage/index.js");
/* harmony import */ var _Code_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Code.css */ "./containers/Code/Code.css");
/* harmony import */ var _Code_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_Code_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _CodeCard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./CodeCard */ "./containers/Code/CodeCard/index.js");
var _jsxFileName = "/home/cedric/Documents/personal-site/src/containers/Code/Code.js";






















var TITLE = "Code - Cedric McDougal";
var DESCRIPTION = "TODO";
var S3 = "https://cedricmcdougal.s3.us-east-2.amazonaws.com/personal-site/images";
var BEATLES_PAPER = "https://cedricmcdougal.s3.us-east-2.amazonaws.com/personal-site/docs/computer-driven-analysis-of-the-music-and-lyrics-of-the-beatles.pdf";
var LILY_POND = "http://lilypond.org/";
var CARDS = [{
  name: "neighborschools",
  label: "NeighborSchools",
  image: "".concat(S3, "/neighborschools-540.png"),
  href: "https://www.neighborschools.com",
  description: react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_16___default.a.Fragment, null, "I\u2019m currently the technical co-founder of the startup NeighborSchools. We\u2019re helping qualified providers start licensed family child care programs in their homes.")
}, {
  name: "dgi",
  label: "Digital Grandparents",
  image: "".concat(S3, "/dgi-540.png"),
  href: "https://dg-inc.org",
  description: react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_16___default.a.Fragment, null, "At Northeastern, I co-founded a non-profit called Digital Grandparents that helps older adults learn how to use technology.")
}, {
  name: "south-america-blog",
  label: "South America Backpacking Blog",
  image: "".concat(S3, "/south-america-blog-540.png"),
  href: "https://mcdougal.github.io/south-america-blog",
  description: react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_16___default.a.Fragment, null, "In 2013, I backpacked in South America for a month. I traveled across Argentina and Bolivia and wrote this blog about the journey. I highly recommend Iguazu Falls!")
}, {
  name: "walkabout-boston",
  label: "Walkabout Boston",
  image: "".concat(S3, "/walkabout-boston-540.png"),
  href: "https://mcdougal.github.io/walkabout-boston",
  description: react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_16___default.a.Fragment, null, "A photo journal of a lengthy walk around Boston, showcasing Longwood, Fenway and Mission Hill.")
}, {
  name: "beatles-dataset-builder",
  label: "Beatles Dataset Builder",
  image: "".concat(S3, "/beatles-dataset-builder-540.png"),
  href: "https://github.com/mcdougal/BeatlesDatasetBuilder",
  description: react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_16___default.a.Fragment, null, "I built this tool for a", " ", react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
    href: BEATLES_PAPER,
    rel: "noopener noreferrer",
    target: "_blank",
    underline: "always",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, "research paper"), " ", "investigating how computer-driven textual analysis can reveal lyrical trends across the career of the Beatles. Some of the collected metrics include: danceability, energy, positive emotions, negative emotions, self-referential lyrics, big words, etc.")
}, {
  name: "handman",
  label: "Handman",
  image: "".concat(S3, "/handman-540.png"),
  href: "https://github.com/mcdougal/handman",
  description: react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_16___default.a.Fragment, null, "Handman is an occupational therapy Android app. It is similar to a regular game of hangman, but if you guess incorrectly you get a chance to trace the letter. If you trace with high enough accuracy, your guess doesn\u2019t count.")
}, {
  name: "notable",
  label: "Notable",
  image: "".concat(S3, "/notable-540.png"),
  href: "https://github.com/mcdougal/notable",
  description: react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_16___default.a.Fragment, null, "Notable is a music generation algorithm. It uses a pipeline of increasingly complex rules and transformations to generate a piece of music based on a set of input paramaters (key signature, time signature, tempo, etc.). The output can be passed in to ", " ", react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
    href: LILY_POND,
    rel: "noopener noreferrer",
    target: "_blank",
    underline: "always",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, "LilyPond"), ".")
}, {
  name: "wumpus-world",
  label: "Wumpus World",
  image: "".concat(S3, "/wumpus-world-540.png"),
  href: "https://github.com/mcdougal/WumpusWorld",
  description: react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_16___default.a.Fragment, null, "The Wumpus world problem deals with an AI robot navigating its way through a puzzle to try and find gold. The robot must safely navigate its way around bottomless pits of death and evil Wumpus creatures to locate the gold hidden on the board. After it has successfully found the gold, it must safely navigate its way back to the starting point. The robot must use its light sensors and the signals sent to it at each square to determine which way to properly navigate to reach its goal.")
}, {
  name: "traffic-smart",
  label: "TrafficSmart",
  image: "".concat(S3, "/traffic-smart-540.png"),
  href: "https://github.com/mcdougal/TrafficSmart",
  description: react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_16___default.a.Fragment, null, "TrafficSmart was a class project that aimed to use AI to increase the efficiency of traffic light timings in a city.")
}];

var Code = function Code() {
  var classes = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])(_Code_css__WEBPACK_IMPORTED_MODULE_20___default.a)();
  return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_components_SitePage__WEBPACK_IMPORTED_MODULE_19__["default"], {
    description: DESCRIPTION,
    favicon: "code",
    icon: _components_CodeIcon__WEBPACK_IMPORTED_MODULE_17__["default"],
    mobileTitle: "Code",
    title: TITLE,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.description,
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "These are some of the various coding projects I\u2019ve worked on over the years. Click any project below to learn about it!"), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
    className: classes.cards,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, CARDS.map(function (_ref) {
    var name = _ref.name,
        label = _ref.label,
        image = _ref.image,
        description = _ref.description,
        href = _ref.href;
    return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
      key: name,
      className: classes.cardContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_CodeCard__WEBPACK_IMPORTED_MODULE_21__["default"], {
      description: description,
      href: href,
      image: image,
      label: label,
      name: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Code);

/***/ })

})
//# sourceMappingURL=code.js.84fd704c0552394650bc.hot-update.js.map