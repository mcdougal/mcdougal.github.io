webpackHotUpdate("static/development/pages/code.js",{

/***/ "./containers/Code/CodeCard/CodeCard.css":
/*!***********************************************!*\
  !*** ./containers/Code/CodeCard/CodeCard.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


    module.exports = function cssToMuiLoader(theme) {
      
      
      
      var output = {
        
        
    'card': {
      'transitionDuration': theme.transitions.duration.standard,'transitionProperty': 'box-shadow, opacity','transitionTimingFunction': theme.transitions.easing.easeInOut,'width': '100%',
      
        '&:hover': {
          'boxShadow': theme.shadows[6],'opacity': '0.8',
        },
      
        '&$selected': {
          'boxShadow': theme.shadows[2],'margin': '0','opacity': '1','position': 'fixed','transitionDuration': theme.transitions.duration.enteringScreen,'transitionProperty': 'transform','transitionTimingFunction': theme.transitions.easing.easeInOut,'zIndex': theme.zIndex.modal + 1,
        },
      
        '&$selected $media:hover': {
          'opacity': '0.8',
        },
      
        '&$selected $content': {
          'height': 'auto','opacity': '1',
        },
      
        '&$selected$closing': {
          'transitionDuration': theme.transitions.duration.leavingScreen,
        },
      
        '&$selected$closing $content': {
          'height': '0',
        },
      
    },
  
    'media': {
      'backgroundSize': 'cover','height': '0','paddingTop': '50%','transitionDuration': theme.transitions.duration.standard,'transitionProperty': 'opacity','transitionTimingFunction': theme.transitions.easing.easeInOut,'width': '100%',
      
    },
  
    'image': {
      'maxWidth': '100%',
      
    },
  
    'content': {
      'height': '0','opacity': '0','overflow': 'hidden','textAlign': 'left','transitionDelay': theme.transitions.duration.enteringScreen,'transitionDuration': theme.transitions.duration.shortest,'transitionProperty': 'opacity','transitionTimingFunction': theme.transitions.easing.easeInOut,
      
    },
  
    'contentInner': {
      'borderTop': '2px solid '+theme.palette.divider,'padding': theme.spacing(4) + 'px'+' '+theme.spacing(4) + 'px'+' '+theme.spacing(2) + 'px',
      
    },
  
    'contentText': {
      'display': 'inline',
      
    },
  
    'contentActions': {
      'padding': theme.spacing(2) + 'px'+' '+theme.spacing(4) + 'px','textAlign': 'right',
      
    },
  
    'contentActionButton': {
      'fontSize': theme.typography.caption.fontSize,'marginLeft': theme.spacing(1) + 'px','marginRight': theme.spacing(-1) + 'px',
      
    },
  
    'modal': {
      'zIndex': theme.zIndex.modal,
      
    },
  
    'selected': {
      
      
    },
  
    'closing': {
      
      
    },
  
    'backdrop': {
      'backgroundColor': theme.palette.background.default,'bottom': '0','left': '0','position': 'fixed','right': '0','top': '0','zIndex': theme.zIndex.modal,
      
    },
  
      };

      
    output[theme.breakpoints.down('xs')] = {
      
    'contentInner': {
      'padding': theme.spacing(2) + 'px',
      
    },
  
    'contentActions': {
      'padding': theme.spacing(2) + 'px'+' '+theme.spacing(2) + 'px'+' '+theme.spacing(1) + 'px',
      
    },
  
    };
  

      return output;
    
    };
  

/***/ })

})
//# sourceMappingURL=code.js.ec16dacd20dc9ac718cf.hot-update.js.map