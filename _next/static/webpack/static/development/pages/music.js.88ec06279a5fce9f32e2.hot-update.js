webpackHotUpdate("static/development/pages/music.js",{

/***/ "../node_modules/@babel/runtime-corejs2/helpers/defineProperty.js":
false,

/***/ "../node_modules/classnames/index.js":
false,

/***/ "./components/SitePage/SitePage.css":
/*!******************************************!*\
  !*** ./components/SitePage/SitePage.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {


    module.exports = function cssToMuiLoader(theme) {
      
      
      
      var output = {
        
    '@keyframes slidein': {
      '0%': { 'maxWidth': '0', },'100%': { 'maxWidth': '200px', },
    },
  
        
    'appBar': {
      'background': theme.palette.common.black,
      
    },
  
    'left': {
      'alignItems': 'stretch','alignSelf': 'stretch','display': 'flex','flexGrow': '1',
      
    },
  
    'titleIcon': {
      'fill': theme.palette.common.white,'height': theme.spacing(4) + 'px','marginRight': theme.spacing(2) + 'px','transitionDuration': theme.transitions.duration.standard,'transitionProperty': 'fill','transitionTimingFunction': theme.transitions.easing.easeInOut,'width': theme.spacing(4) + 'px',
      
    },
  
    'titleText': {
      'position': 'relative',
      
    },
  
    'title': {
      
      
        '&:hover $titleIcon': {
          'fill': theme.palette.secondary.main,
        },
      
        '&:hover + $fishHelmet': {
          'transform': 'rotate(-10deg)',
        },
      
    },
  
    'fishHelmet': {
      'bottom': '-20px','height': '300px','minHeight': '300px','minWidth': '240px','position': 'fixed','right': '10px','transform': 'translate(235px, 30px) rotate(-4deg)','transition': 'all 200ms ease-in-out 500ms','width': '240px','zIndex': theme.zIndex.drawer,
      
    },
  
    'tab': {
      'transitionDuration': theme.transitions.duration.standard,'transitionProperty': 'color','transitionTimingFunction': theme.transitions.easing.easeInOut,
      
        '&:not($selected):hover': {
          'color': theme.palette.secondary.light,
        },
      
        '& $underline': {
          'animationDuration': '500ms','animationFillMode': 'forwards','animationName': '$slidein','animationTimingFunction': theme.transitions.easing.easeInOut,
        },
      
        '&:not($selected) $underline': {
          'display': 'none',
        },
      
    },
  
    'selected': {
      
      
    },
  
    'menuIcon': {
      'fill': theme.palette.common.white,'height': theme.spacing(3) + 'px','marginRight': theme.spacing(-1) + 'px','width': theme.spacing(3) + 'px',
      
    },
  
    'drawerList': {
      'width': '200px',
      
    },
  
    'drawerListItem': {
      'paddingLeft': theme.spacing(3) + 'px','paddingRight': theme.spacing(3) + 'px',
      
    },
  
    'drawerListItemIcon': {
      'marginRight': theme.spacing(2) + 'px','minWidth': '0',
      
    },
  
    'drawerListIcon': {
      'fill': theme.palette.text.primary,'height': '20px','marginTop': '-1px','width': '20px',
      
    },
  
    'underline': {
      'background': theme.palette.secondary.main,'bottom': '0','height': '2px','left': '0','position': 'absolute','width': '100%',
      
    },
  
    'mobileFooter': {
      'marginTop': theme.spacing(5) + 'px',
      
    },
  
    'mobileFooterText': {
      'textAlign': 'center',
      
    },
  
      };

      
    output[theme.breakpoints.up('sm')] = {
      
    'mobileTitle': {
      'display': 'none',
      
    },
  
    'menuButton': {
      'display': 'none',
      
    },
  
    'mobileFooter': {
      'display': 'none',
      
    },
  
    };
  
    output[theme.breakpoints.down('sm')] = {
      
    'tabs': {
      'marginRight': theme.spacing(-2) + 'px',
      
    },
  
    };
  
    output[theme.breakpoints.down('xs')] = {
      
    'titleIcon': {
      'marginRight': theme.spacing(1) + 'px',
      
    },
  
    'desktopTitle': {
      'display': 'none',
      
    },
  
    'tabs': {
      'display': 'none',
      
    },
  
    'fishHelmet': {
      'display': 'none',
      
    },
  
    };
  

      return output;
    
    };
  

/***/ }),

/***/ "./components/SitePage/SitePage.js":
/*!*****************************************!*\
  !*** ./components/SitePage/SitePage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "../node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "../node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "../node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "../node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "../node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Drawer */ "../node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "../node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "../node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "../node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "../node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "../node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/NoSsr */ "../node_modules/@material-ui/core/esm/NoSsr/index.js");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Slide */ "../node_modules/@material-ui/core/esm/Slide/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Tab */ "../node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Tabs */ "../node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "../node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "../node_modules/@material-ui/core/esm/useScrollTrigger/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/styles */ "../node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/head */ "../node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _CodeIcon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../CodeIcon */ "./components/CodeIcon/index.js");
/* harmony import */ var _HomeIcon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../HomeIcon */ "./components/HomeIcon/index.js");
/* harmony import */ var _LinkWrapper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../LinkWrapper */ "./components/LinkWrapper/index.js");
/* harmony import */ var _MenuIcon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../MenuIcon */ "./components/MenuIcon/index.js");
/* harmony import */ var _MusicIcon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../MusicIcon */ "./components/MusicIcon/index.js");
/* harmony import */ var _VideosIcon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../VideosIcon */ "./components/VideosIcon/index.js");
/* harmony import */ var _WritingIcon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../WritingIcon */ "./components/WritingIcon/index.js");
/* harmony import */ var _SitePage_css__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./SitePage.css */ "./components/SitePage/SitePage.css");
/* harmony import */ var _SitePage_css__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_SitePage_css__WEBPACK_IMPORTED_MODULE_32__);

var _jsxFileName = "/home/cedric/Documents/personal-site/src/components/SitePage/SitePage.js";
































var IMAGE = "/static/images/headshot.jpg";
var IMAGE_ALT = "Cedric McDougal\u2019s headshot";
var FISH_HELMET_240 = "https://cedricmcdougal.s3.us-east-2.amazonaws.com/personal-site/images/fish-helmet-240.png";
var FISH_HELMET_480 = "https://cedricmcdougal.s3.us-east-2.amazonaws.com/personal-site/images/fish-helmet-480.png";
var PAGES = [{
  label: "Code",
  href: "/code",
  Icon: _CodeIcon__WEBPACK_IMPORTED_MODULE_25__["default"]
}, {
  label: "Music",
  href: "/music",
  Icon: _MusicIcon__WEBPACK_IMPORTED_MODULE_29__["default"]
}, {
  label: "Videos",
  href: "/videos",
  Icon: _VideosIcon__WEBPACK_IMPORTED_MODULE_30__["default"]
}, {
  label: "Writing",
  href: "/writing",
  Icon: _WritingIcon__WEBPACK_IMPORTED_MODULE_31__["default"]
}];
var DRAWER = [{
  label: "About Me",
  href: "/",
  Icon: _HomeIcon__WEBPACK_IMPORTED_MODULE_26__["default"]
}].concat(PAGES);

var SitePage = function SitePage(_ref) {
  var children = _ref.children,
      description = _ref.description,
      favicon = _ref.favicon,
      icon = _ref.icon,
      mobileTitle = _ref.mobileTitle,
      router = _ref.router,
      title = _ref.title;
  var PageIcon = icon;
  var classes = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_19__["makeStyles"])(_SitePage_css__WEBPACK_IMPORTED_MODULE_32___default.a)();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_24__["useState"])(false),
      _useState2 = _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      drawerIsOpen = _useState2[0],
      setDrawerIsOpen = _useState2[1];

  var trigger = Object(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_18__["default"])();
  var selectedPage = PAGES.find(function (_ref2) {
    var href = _ref2.href;
    return router.pathname === href;
  });
  return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_24___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_20___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("title", {
    key: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("meta", {
    key: "description",
    content: description,
    name: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("meta", {
    key: "og:type",
    content: "website",
    property: "og:type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("meta", {
    key: "og:title",
    content: title,
    property: "og:title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("meta", {
    key: "og:description",
    content: description,
    property: "og:description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("meta", {
    key: "og:image",
    content: IMAGE,
    property: "og:image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("meta", {
    key: "og:image:alt",
    content: IMAGE_ALT,
    property: "og:image:alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("link", {
    href: "/static/favicons/".concat(favicon, "/apple-touch-icon.png"),
    rel: "apple-touch-icon",
    sizes: "180x180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("link", {
    href: "/static/favicons/".concat(favicon, "/favicon-32x32.png"),
    rel: "icon",
    sizes: "32x32",
    type: "image/png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("link", {
    href: "/static/favicons/".concat(favicon, "/favicon-16x16.png"),
    rel: "icon",
    sizes: "16x16",
    type: "image/png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("link", {
    href: "/static/favicons/".concat(favicon, "/site.webmanifest"),
    rel: "manifest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("link", {
    color: "#5bbad5",
    href: "/static/favicons/".concat(favicon, "/safari-pinned-tab.svg"),
    rel: "mask-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("link", {
    href: "/static/favicons/".concat(favicon, "/favicon.ico"),
    rel: "shortcut icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("meta", {
    content: "#da532c",
    name: "msapplication-TileColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("meta", {
    href: "/static/favicons/".concat(favicon, "/browserconfig.xml"),
    name: "msapplication-config",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_13__["default"], {
    appear: false,
    direction: "down",
    in: !trigger,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", {
    className: classes.left,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_21___default.a, {
    href: "/",
    passHref: true,
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.title,
    component: "a",
    focusRipple: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(PageIcon, {
    className: classes.titleIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: classes.titleText,
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("span", {
    className: classes.desktopTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Cedric McDougal"), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("span", {
    className: classes.mobileTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, mobileTitle)))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("img", {
    alt: "Cedric in a hat that looks like an anglerfish",
    className: classes.fishHelmet,
    src: FISH_HELMET_480,
    srcSet: "".concat(FISH_HELMET_240, " 240w, ").concat(FISH_HELMET_480, " 480w"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.tabs,
    TabIndicatorProps: {
      style: {
        display: "none"
      }
    },
    value: selectedPage ? selectedPage.href : false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, PAGES.map(function (_ref3) {
    var label = _ref3.label,
        href = _ref3.href;
    return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: label,
      classes: {
        selected: classes.selected
      },
      className: classes.tab,
      component: _LinkWrapper__WEBPACK_IMPORTED_MODULE_27__["default"],
      label: react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_24___default.a.Fragment, null, label, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", {
        className: classes.underline,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      })),
      LinkProps: {
        href: href,
        passHref: true,
        prefetch: true
      },
      value: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.menuButton,
    onClick: function onClick() {
      setDrawerIsOpen(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_MenuIcon__WEBPACK_IMPORTED_MODULE_28__["default"], {
    className: classes.menuIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    anchor: "right",
    onClose: function onClose() {
      setDrawerIsOpen(false);
    },
    open: drawerIsOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.drawerList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, DRAWER.map(function (_ref4) {
    var label = _ref4.label,
        href = _ref4.href,
        Icon = _ref4.Icon;
    return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_21___default.a, {
      key: label,
      href: href,
      passHref: true,
      prefetch: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      button: true,
      className: classes.drawerListItem,
      component: "a",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: classes.drawerListItemIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(Icon, {
      className: classes.drawerListIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
      primary: label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    })));
  })))))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    maxWidth: "xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    mb: 8,
    mt: {
      xs: 7,
      sm: 14
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.mobileFooter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, PAGES.map(function (_ref5) {
    var label = _ref5.label,
        href = _ref5.href;
    return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: label,
      button: true,
      component: _LinkWrapper__WEBPACK_IMPORTED_MODULE_27__["default"],
      LinkProps: {
        href: href,
        passHref: true,
        prefetch: true
      },
      value: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: classes.mobileFooterText,
      primary: label,
      primaryTypographyProps: {
        color: "primary"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    }));
  })))));
};

SitePage.propTypes = {
  description: prop_types__WEBPACK_IMPORTED_MODULE_23___default.a.string.isRequired,
  favicon: prop_types__WEBPACK_IMPORTED_MODULE_23___default.a.oneOf(["home", "code", "music", "videos", "writing"]).isRequired,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_23___default.a.func.isRequired,
  mobileTitle: prop_types__WEBPACK_IMPORTED_MODULE_23___default.a.string.isRequired,
  router: prop_types__WEBPACK_IMPORTED_MODULE_23___default.a.object.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_23___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_22__["withRouter"])(SitePage));

/***/ })

})
//# sourceMappingURL=music.js.88ec06279a5fce9f32e2.hot-update.js.map