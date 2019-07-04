webpackHotUpdate("static/development/pages/writing.js",{

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
      'position': 'relative','transitionDuration': theme.transitions.duration.standard,'transitionProperty': 'color','transitionTimingFunction': theme.transitions.easing.easeInOut,
      
    },
  
    'title': {
      
      
        '&:hover $titleIcon': {
          'fill': theme.palette.secondary.main,
        },
      
        '&:hover $titleText': {
          'color': theme.palette.secondary.main,
        },
      
        '&:hover + $fishHelmet': {
          'display': 'block','transform': 'rotate(-10deg)',
        },
      
    },
  
    'fishHelmet': {
      'bottom': '-20px','display': 'none','height': '300px','minHeight': '300px','minWidth': '240px','position': 'fixed','right': '10px','transform': 'translate(235px, 30px) rotate(-4deg)','transition': 'all 200ms ease-in-out 500ms','width': '240px','zIndex': theme.zIndex.drawer,
      
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
  
    'footer': {
      'alignItems': 'center','borderTop': '1px solid '+theme.palette.divider,'display': 'flex',
      
        '& > :first-child': {
          'flexGrow': '1',
        },
      
    },
  
    'footerItem': {
      'display': 'inline-flex','width': 'auto',
      
    },
  
    'footerText': {
      'textAlign': 'center',
      
    },
  
    'footerIcon': {
      'fill': theme.palette.primary.main,'height': theme.spacing(3) + 'px','width': theme.spacing(3) + 'px',
      
    },
  
      };

      
    output[theme.breakpoints.up('sm')] = {
      
    'mobileTitle': {
      'display': 'none',
      
    },
  
    'menuButton': {
      'display': 'none',
      
    },
  
    };
  
    output[theme.breakpoints.down('sm')] = {
      
    'tabs': {
      'marginRight': theme.spacing(-2) + 'px',
      
    },
  
    'footer': {
      'flexDirection': 'column',
      
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
  
    'footer': {
      
      
        '& > :first-child': {
          'display': 'flex','flexDirection': 'column','marginBottom': theme.spacing(2) + 'px',
        },
      
    },
  
    };
  

      return output;
    
    };
  

/***/ })

})
//# sourceMappingURL=writing.js.4c30af14a6eb75a35f75.hot-update.js.map