webpackHotUpdate("static/development/pages/code.js",{

/***/ "./containers/Code/CodeCard/CodeCard.js":
/*!**********************************************!*\
  !*** ./containers/Code/CodeCard/CodeCard.js ***!
  \**********************************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "../node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Fade */ "../node_modules/@material-ui/core/esm/Fade/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Modal */ "../node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "../node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/styles */ "../node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _CodeCard_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CodeCard.css */ "./containers/Code/CodeCard/CodeCard.css");
/* harmony import */ var _CodeCard_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_CodeCard_css__WEBPACK_IMPORTED_MODULE_15__);




var _jsxFileName = "/home/cedric/Documents/personal-site/src/containers/Code/CodeCard/CodeCard.js";













var getTransform = function getTransform(selected, closing, contentRef) {
  if (typeof window === "undefined") {
    return null;
  }

  if (closing) {
    return {
      x: 0,
      y: 0,
      scale: 1,
      extraHeight: 0
    };
  } // Attempt to get the height of the text content, if it's available.
  // Otherwise, just make a best guess.


  var contentHeight = contentRef.current ? contentRef.current.scrollHeight : 200;
  var left = selected.left;
  var top = selected.top;
  var width = selected.width;
  var height = selected.height + contentHeight;
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var loopProtector;
  var scale;
  var scaledWidth;
  var scaledHeight;
  var scaleRatio = 1;
  loopProtector = 0;

  while (true) {
    loopProtector += 1;

    if (loopProtector > 20) {
      break;
    }

    scale = windowWidth / width * scaleRatio;
    scaledWidth = width * scale;
    scaledHeight = height * scale;
    var overflows = scaledHeight > windowHeight || scaledWidth > 800;

    if (!overflows) {
      break;
    }

    scaleRatio -= 0.05;
  }

  var newLeft = -left + windowWidth / 2 - width / 2;
  var newTop = -top + windowHeight / 2 - height / 2; // The gap between the top of the scaled card and the top of the viewport
  // should not exceed this percentage of the viewport height.

  var minTopGap = windowWidth < 600 ? 0.05 : 0.1;
  var topGap;
  var topGapAdjustment = 0;
  loopProtector = 0;

  while (true) {
    loopProtector += 1;

    if (loopProtector > 20) {
      break;
    }

    topGap = top + (newTop - topGapAdjustment) - (scaledHeight - height) / 2;

    if (topGap < windowHeight * minTopGap) {
      break;
    }

    topGapAdjustment += windowHeight * 0.02;
  }

  var extraHeight = 0;
  loopProtector = 0;

  if (windowWidth < 600) {
    while (true) {
      loopProtector += 1;

      if (loopProtector > 20) {
        break;
      }

      var bottomGap = windowHeight - (topGap + (height + extraHeight) * scale);

      if (bottomGap > 24) {
        extraHeight += 16;
      }
    }
  }

  return {
    x: newLeft,
    y: newTop - topGapAdjustment,
    scale: scale,
    extraHeight: extraHeight
  };
};

var lazyImageObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    console.log(entry); // if (entry.isIntersecting) {
    //   let lazyImage = entry.target;
    //   lazyImage.src = lazyImage.dataset.src;
    //   lazyImage.srcset = lazyImage.dataset.srcset;
    //   lazyImage.classList.remove("lazy");
    //   lazyImageObserver.unobserve(lazyImage);
    // }
  });
});

var CodeCard = function CodeCard(_ref) {
  var _classNames;

  var description = _ref.description,
      href = _ref.href,
      image = _ref.image,
      label = _ref.label,
      name = _ref.name;
  var classes = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(function (theme) {
    return _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, _CodeCard_css__WEBPACK_IMPORTED_MODULE_15___default()(theme), {
      mediaBackground: {
        'html.no-webp &': {
          backgroundImage: "url('".concat(image.default, "')")
        },
        'html.webp &': {
          backgroundImage: "url('".concat(image.webp, "')")
        }
      }
    });
  })();
  var theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_10__["useTheme"])();
  var cardRef = Object(react__WEBPACK_IMPORTED_MODULE_14__["useRef"])(null);
  var contentRef = Object(react__WEBPACK_IMPORTED_MODULE_14__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(null),
      _useState2 = _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(false),
      _useState4 = _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      closing = _useState4[0],
      setClosing = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_14__["useEffect"])(function () {
    lazyImageObserver.observe(cardRef.current);
  }, []);
  var handleOpen = Object(react__WEBPACK_IMPORTED_MODULE_14__["useCallback"])(function () {
    // Add hash to URL
    window.history.pushState("", document.title, "".concat(window.location.pathname).concat(window.location.search, "#").concat(name));
    var rect = cardRef.current.getBoundingClientRect();
    setSelected({
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height
    });
  }, [name]);
  var handleClose = Object(react__WEBPACK_IMPORTED_MODULE_14__["useCallback"])(function () {
    setClosing(true);
    setTimeout(function () {
      setClosing(false);
      setSelected(null);
    }, theme.transitions.duration.leavingScreen);

    if (typeof window !== "undefined") {
      // Remove hash from URL
      window.history.pushState("", document.title, "".concat(window.location.pathname).concat(window.location.search));
    }
  }, [theme]);
  var handlePopState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useCallback"])(function (event) {
    var hash = event.currentTarget.location.hash;

    if (!hash && selected) {
      handleClose();
    } else if (hash === "#".concat(name) && !selected) {
      handleOpen();
    }
  }, [name, selected, handleOpen, handleClose]);
  Object(react__WEBPACK_IMPORTED_MODULE_14__["useEffect"])(function () {
    window.addEventListener("popstate", handlePopState);
    return function () {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [handlePopState]);
  var containerProps = null;
  var contentActionProps = null;
  var mediaProps;

  if (selected || closing) {
    var transformProps = getTransform(selected, closing, contentRef);
    var transform;
    var contentPadding;

    if (transformProps) {
      var x = transformProps.x,
          y = transformProps.y,
          scale = transformProps.scale,
          extraHeight = transformProps.extraHeight;
      transform = "translate3D(".concat(x, "px, ").concat(y, "px, 0) scale(").concat(scale, ")");
      contentPadding = extraHeight;
    } else {
      transform = null;
      contentPadding = 0;
    }

    containerProps = {
      style: {
        left: selected.left,
        maxWidth: "none",
        transform: transform,
        top: selected.top,
        width: selected.width
      }
    };
    contentActionProps = {
      style: {
        paddingTop: 16 + contentPadding
      }
    };
    mediaProps = {
      component: "a",
      href: href,
      rel: "noopener noreferrer",
      target: "_blank"
    };
  } else {
    mediaProps = {
      onClick: handleOpen
    };
  }

  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    BackdropProps: {
      invisible: true
    },
    className: classes.modal,
    onClose: handleClose,
    open: Boolean(selected),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6__["default"], {
    in: Boolean(selected && !closing),
    mountOnEnter: true,
    unmountOnExit: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: classes.backdrop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  })), selected && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: classes.card,
    role: "presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: classes.media,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, description)), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, containerProps, {
    className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(classes.card, (_classNames = {}, _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, classes.selected, selected), _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, classes.closing, closing), _classNames)),
    ref: cardRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_5__["default"], _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, mediaProps, {
    className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(classes.media, classes.mediaBackground),
    disableRipple: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: classes.content,
    ref: contentRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: classes.contentInner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.contentText,
    variant: "caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, label), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.contentText,
    color: "textSecondary",
    variant: "caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, " ", "\u2014", " ", description)), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, contentActionProps, {
    className: classes.contentActions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.contentActionButton,
    color: "secondary",
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, "Back"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.contentActionButton,
    color: "secondary",
    component: "a",
    href: href,
    rel: "noopener noreferrer",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, "Check it out!")))));
};

CodeCard.propTypes = {
  description: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.node.isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string.isRequired,
  image: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.shape({
    default: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string.isRequired,
    webp: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string.isRequired
  }).isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(CodeCard));

/***/ })

})
//# sourceMappingURL=code.js.fe456488f0b036d7e1d7.hot-update.js.map