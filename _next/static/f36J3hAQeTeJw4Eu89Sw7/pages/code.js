(window.webpackJsonp=window.webpackJsonp||[]).push([["ed98"],{"/NZN":function(e,t,a){"use strict";var n=a("RiSW"),o=a.n(n),r=a("8VmE"),i=a.n(r),c=a("mXGw"),l=a.n(c),s=(a("W0B4"),a("PDtE")),d=a("gbh0"),u=a("Rx6o"),p=a("x+AB"),m=a("WORb"),b=l.a.forwardRef(function(e,t){var a=e.children,n=e.classes,r=e.className,c=e.color,d=void 0===c?"default":c,u=e.component,b=void 0===u?"button":u,g=e.disabled,h=void 0!==g&&g,f=e.disableFocusRipple,y=void 0!==f&&f,w=e.focusVisibleClassName,v=e.fullWidth,x=void 0!==v&&v,k=e.size,O=void 0===k?"medium":k,j=e.type,E=void 0===j?"button":j,C=e.variant,S=void 0===C?"text":C,I=o()(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","fullWidth","size","type","variant"]),N="text"===S,B="outlined"===S,T="contained"===S,z="primary"===d,A="secondary"===d,W=Object(s.a)(n.root,r,N&&[n.text,z&&n.textPrimary,A&&n.textSecondary],B&&[n.outlined,z&&n.outlinedPrimary,A&&n.outlinedSecondary],T&&[n.contained,z&&n.containedPrimary,A&&n.containedSecondary],"medium"!==O&&n["size".concat(Object(m.a)(O))],h&&n.disabled,x&&n.fullWidth,"inherit"===d&&n.colorInherit);return l.a.createElement(p.a,i()({className:W,component:b,disabled:h,focusRipple:!y,focusVisibleClassName:Object(s.a)(n.focusVisible,w),ref:t,type:E},I),l.a.createElement("span",{className:n.label},a))});t.a=Object(d.a)(function(e){return{root:i()({lineHeight:1.75},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(u.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(u.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(u.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 16px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(u.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(u.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(u.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(u.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},sizeSmall:{padding:"4px 8px",fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"8px 24px",fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}},{name:"MuiButton"})(b)},"1LRU":function(e,t,a){"use strict";var n=a("8VmE"),o=a.n(n),r=a("nxTg"),i=a.n(r),c=a("RiSW"),l=a.n(c),s=a("mXGw"),d=a.n(s),u=(a("W0B4"),a("PDtE")),p=a("WORb"),m=a("gbh0"),b=a("jILc"),g=a("wahS"),h=a("/ZiB"),f=d.a.forwardRef(function(e,t){var a=e.classes,n=e.className,r=e.color,c=void 0===r?"primary":r,s=e.component,m=void 0===s?"a":s,f=e.onBlur,y=e.onFocus,w=e.TypographyClasses,v=e.underline,x=void 0===v?"hover":v,k=e.variant,O=void 0===k?"inherit":k,j=l()(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),E=Object(b.a)(),C=E.isFocusVisible,S=E.onBlurVisible,I=E.ref,N=d.a.useState(!1),B=i()(N,2),T=B[0],z=B[1],A=Object(g.b)(t,I);return d.a.createElement(h.a,o()({className:Object(u.a)(a.root,a["underline".concat(Object(p.a)(x))],n,"button"===m&&a.button,T&&a.focusVisible),classes:w,color:c,component:m,onBlur:function(e){T&&(S(),z(!1)),f&&f(e)},onFocus:function(e){C(e)&&z(!0),y&&y(e)},ref:A,variant:O},j))});t.a=Object(m.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:"none",border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(f)},"65xz":function(e,t,a){"use strict";var n=a("/ZiB"),o=a("Ns/9"),r=a("mXGw"),i=a.n(r),c=a("knLn"),l=a.n(c),s=function(e){var t=e.children,a=Object(o.a)(l.a)();return i.a.createElement(n.a,{className:a.description,variant:"body1"},t)};t.a=s},"8Jek":function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===r)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},"9lmX":function(e,t,a){a("zWrT");var n=a("TaGV").Object;e.exports=function(e,t){return n.getOwnPropertyDescriptor(e,t)}},IuyJ:function(e,t){e.exports=function(e){var t={description:{margin:"0 0 "+e.spacing(6)+"px",padding:"0 4px",textAlign:"center"},cards:{textAlign:"center"},cardContainer:{display:"inline-block",maxWidth:"540px",padding:"4px",verticalAlign:"top",width:"50%"}};return t[e.breakpoints.down("xs")]={description:{marginBottom:e.spacing(2)+"px",paddingTop:e.spacing(3)+"px"},cards:{paddingTop:e.spacing(2)+"px"},cardContainer:{width:"100%"}},t}},azxR:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a("hHgk"),o=a.n(n);function r(e,t,a){return t in e?o()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},knLn:function(e,t){e.exports=function(e){var t={description:{margin:"0 0 "+e.spacing(6)+"px",textAlign:"center"}};return t[e.breakpoints.down("xs")]={description:{marginBottom:e.spacing(3)+"px",paddingTop:e.spacing(3)+"px"}},t}},osjh:function(e,t,a){"use strict";a.r(t);var n=a("1LRU"),o=a("Ns/9"),r=a("mXGw"),i=a.n(r),c=a("LjmS"),l=a("65xz"),s=a("AtBE"),d=a("IuyJ"),u=a.n(d),p=a("z3IF"),m=a("azxR"),b=a("hDBU"),g=a("tvLF"),h=a.n(g),f=a("s4hn"),y=a.n(f),w=a("1qCV"),v=a.n(w);var x=a("/NZN"),k=a("x+AB"),O=a("4p7D"),j=a("MdBG"),E=a("bJWG"),C=a("/ZiB"),S=a("nFgL"),I=a("8Jek"),N=a.n(I),B=a("bBV7"),T=a("wxub"),z=a.n(T),A=Object(B.withRouter)(function(e){var t,a=e.description,n=e.href,c=e.image,l=e.label,s=e.name,d=Object(o.a)(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=v()(a);"function"==typeof y.a&&(n=n.concat(y()(a).filter(function(e){return h()(a,e).enumerable}))),n.forEach(function(t){Object(m.a)(e,t,a[t])})}return e}({},z()(e),{loadImage:{},mediaBackground:{"html.no-webp $loadImage &":{backgroundImage:"url('".concat(c.default,"')")},"html.webp $loadImage &":{backgroundImage:"url('".concat(c.webp,"')")}}})})(),u=Object(S.a)(),g=Object(r.useRef)(null),f=Object(r.useRef)(null),w=Object(r.useState)(!1),I=Object(b.default)(w,2),B=I[0],T=I[1],A=Object(r.useState)(null),W=Object(b.default)(A,2),F=W[0],R=W[1],D=Object(r.useState)(!1),$=Object(b.default)(D,2),P=$[0],L=$[1];Object(r.useEffect)(function(){"IntersectionObserver"in window?new IntersectionObserver(function(e,t){e.forEach(function(e){e.isIntersecting&&(T(!0),t.unobserve(e.target))})}).observe(g.current):T(!0)},[]);var V=Object(r.useCallback)(function(){window.history.pushState("",document.title,"".concat(window.location.pathname).concat(window.location.search,"#").concat(s));var e=g.current.getBoundingClientRect();R({left:e.left,top:e.top,width:e.width,height:e.height})},[s]),H=Object(r.useCallback)(function(){L(!0),setTimeout(function(){L(!1),R(null)},u.transitions.duration.leavingScreen),"undefined"!=typeof window&&window.history.pushState("",document.title,"".concat(window.location.pathname).concat(window.location.search))},[u]),_=Object(r.useCallback)(function(e){var t=e.currentTarget.location.hash;!t&&F?H():t!=="#".concat(s)||F||V()},[s,F,V,H]);Object(r.useEffect)(function(){return window.addEventListener("popstate",_),function(){window.removeEventListener("popstate",_)}},[_]);var G,X=null,J=null;if(F||P){var M,Z,q=function(e,t,a){if("undefined"==typeof window)return null;if(t)return{x:0,y:0,scale:1,extraHeight:0};var n,o,r,i=a.current?a.current.scrollHeight:200,c=e.left,l=e.top,s=e.width,d=e.height+i,u=window.innerWidth,p=window.innerHeight,m=1;for(n=0;!((n+=1)>20)&&((r=d*(o=u/s*m))>p||s*o>800);)m-=.05;var b,g=u/2-c-s/2,h=p/2-l-d/2,f=u<600?.05:.1,y=0;for(n=0;!((n+=1)>20||(b=l+(h-y)-(r-d)/2)<p*f);)y+=.02*p;var w=0;if(n=0,u<600)for(;!((n+=1)>20);)p-(b+(d+w)*o)>24&&(w+=16);return{x:g,y:h-y,scale:o,extraHeight:w}}(F,P,f);if(q){var U=q.x,K=q.y,Q=q.scale,Y=q.extraHeight;M="translate3D(".concat(U,"px, ").concat(K,"px, 0) scale(").concat(Q,")"),Z=Y}else M=null,Z=0;X={style:{left:F.left,maxWidth:"none",transform:M,top:F.top,width:F.width}},J={style:{paddingTop:16+Z}},G={component:"a",href:n,rel:"noopener noreferrer",target:"_blank"}}else G={onClick:V};return i.a.createElement(i.a.Fragment,null,i.a.createElement(j.a,{BackdropProps:{invisible:!0},className:d.modal,onClose:H,open:Boolean(F)},i.a.createElement("div",null)),i.a.createElement(O.a,{in:Boolean(F&&!P),mountOnEnter:!0,unmountOnExit:!0},i.a.createElement("div",{className:d.backdrop})),F&&i.a.createElement("div",{className:d.card,role:"presentation"},i.a.createElement("div",{className:d.media}),i.a.createElement("div",{className:d.content},a)),i.a.createElement(E.a,Object(p.a)({},X,{className:N()(d.card,(t={},Object(m.a)(t,d.loadImage,B),Object(m.a)(t,d.selected,F),Object(m.a)(t,d.closing,P),t)),ref:g}),i.a.createElement(k.a,Object(p.a)({},G,{"aria-label":l,className:N()(d.media,d.mediaBackground),disableRipple:!0,title:F?null:l})),i.a.createElement("div",{className:d.content,ref:f},i.a.createElement("div",{className:d.contentInner},i.a.createElement(C.a,{className:d.contentText,variant:"caption"},l),i.a.createElement(C.a,{className:d.contentText,color:"textSecondary",variant:"caption"}," ","—"," ",a)),i.a.createElement("div",Object(p.a)({},J,{className:d.contentActions}),i.a.createElement(x.a,{className:d.contentActionButton,color:"secondary",onClick:H},"Back"),i.a.createElement(x.a,{className:d.contentActionButton,color:"secondary",component:"a",href:n,rel:"noopener noreferrer",target:"_blank"},"Check it out!")))))}),W="https://cedricmcdougal.s3.us-east-2.amazonaws.com/personal-site/images",F=[{name:"neighborschools",label:"NeighborSchools",image:{default:"".concat(W,"/neighborschools-540.png"),webp:"".concat(W,"/neighborschools-540.webp")},href:"https://www.neighborschools.com",description:i.a.createElement(i.a.Fragment,null,"I’m currently the technical co-founder of the startup NeighborSchools. We’re helping qualified providers start licensed family child care programs in their homes.")},{name:"dgi",label:"Digital Grandparents",image:{default:"".concat(W,"/dgi-540.png"),webp:"".concat(W,"/dgi-540.webp")},href:"https://dg-inc.org",description:i.a.createElement(i.a.Fragment,null,"At Northeastern, I co-founded a non-profit called Digital Grandparents that helps older adults learn how to use technology.")},{name:"south-america-blog",label:"South America Backpacking Blog",image:{default:"".concat(W,"/south-america-blog-540.png"),webp:"".concat(W,"/south-america-blog-540.webp")},href:"https://cedricmcdougal.com/south-america-blog/",description:i.a.createElement(i.a.Fragment,null,"In 2013, I backpacked in South America for a month. I traveled across Argentina and Bolivia and created this blog website about the journey. I highly recommend Iguazu Falls!")},{name:"walkabout-boston",label:"Walkabout Boston",image:{default:"".concat(W,"/walkabout-boston-540.png"),webp:"".concat(W,"/walkabout-boston-540.webp")},href:"https://cedricmcdougal.com/walkabout-boston/",description:i.a.createElement(i.a.Fragment,null,"A photo journal website of a lengthy walk around Boston, showcasing Longwood, Fenway and Mission Hill.")},{name:"beatles-dataset-builder",label:"Beatles Dataset Builder",image:{default:"".concat(W,"/beatles-dataset-builder-540.png"),webp:"".concat(W,"/beatles-dataset-builder-540.webp")},href:"https://github.com/mcdougal/BeatlesDatasetBuilder",description:i.a.createElement(i.a.Fragment,null,"I built this tool for a"," ",i.a.createElement(n.a,{href:"https://cedricmcdougal.s3.us-east-2.amazonaws.com/personal-site/docs/computer-driven-analysis-of-the-music-and-lyrics-of-the-beatles.pdf",rel:"noopener noreferrer",target:"_blank",underline:"always"},"research paper")," ","investigating how computer-driven textual analysis can reveal lyrical trends across the career of the Beatles. Some of the collected metrics include: danceability, energy, positive emotions, negative emotions, self-referential lyrics, big words, etc.")},{name:"handman",label:"Handman",image:{default:"".concat(W,"/handman-540.png"),webp:"".concat(W,"/handman-540.webp")},href:"https://github.com/mcdougal/handman",description:i.a.createElement(i.a.Fragment,null,"Handman is an occupational therapy Android app. It is similar to a regular game of hangman, but if you guess incorrectly you get a chance to trace the letter. If you trace with high enough accuracy, your guess doesn’t count.")},{name:"notable",label:"Notable",image:{default:"".concat(W,"/notable-540.png"),webp:"".concat(W,"/notable-540.webp")},href:"https://github.com/mcdougal/notable",description:i.a.createElement(i.a.Fragment,null,"Notable is a music generation algorithm. It uses a pipeline of increasingly complex rules and transformations to generate a piece of music based on a set of input paramaters (key signature, time signature, tempo, etc.). The output can be passed in to "," ",i.a.createElement(n.a,{href:"http://lilypond.org/",rel:"noopener noreferrer",target:"_blank",underline:"always"},"LilyPond"),".")},{name:"wumpus-world",label:"Wumpus World",image:{default:"".concat(W,"/wumpus-world-540.png"),webp:"".concat(W,"/wumpus-world-540.webp")},href:"https://github.com/mcdougal/WumpusWorld",description:i.a.createElement(i.a.Fragment,null,"The Wumpus world problem deals with an AI robot navigating its way through a puzzle to try and find gold. The robot must safely navigate its way around bottomless pits of death and evil Wumpus creatures to locate the gold hidden on the board. After it has successfully found the gold, it must safely navigate its way back to the starting point. The robot must use its light sensors and the signals sent to it at each square to determine which way to properly navigate to reach its goal.")},{name:"traffic-smart",label:"TrafficSmart",image:{default:"".concat(W,"/traffic-smart-540.png"),webp:"".concat(W,"/traffic-smart-540.webp")},href:"https://github.com/mcdougal/TrafficSmart",description:i.a.createElement(i.a.Fragment,null,"TrafficSmart was a class project that aimed to use AI to increase the efficiency of traffic light timings in a city.")}],R=function(){var e=Object(o.a)(u.a)();return i.a.createElement(s.a,{description:"Some of the various coding projects I’ve worked on over the years.",favicon:"code",icon:c.a,mobileTitle:"Code",title:"Code - Cedric McDougal"},i.a.createElement(l.a,null,"These are some of the various coding projects I’ve worked on over the years. Click any project below to learn about it!"),i.a.createElement("div",{className:e.cards},F.map(function(t){var a=t.name,n=t.label,o=t.image,r=t.description,c=t.href;return i.a.createElement("div",{key:a,className:e.cardContainer},i.a.createElement(A,{description:r,href:c,image:o,label:n,name:a}))})))};t.default=R},tvLF:function(e,t,a){e.exports=a("9lmX")},wkjo:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/code",function(){var e=a("osjh");return{page:e.default||e}}])},wxub:function(e,t){e.exports=function(e){var t={card:{transitionDuration:e.transitions.duration.standard,transitionProperty:"box-shadow, opacity",transitionTimingFunction:e.transitions.easing.easeInOut,width:"100%","&:hover":{boxShadow:e.shadows[6],opacity:"0.8"},"&$selected":{boxShadow:e.shadows[2],margin:"0",opacity:"1",position:"fixed",transitionDuration:e.transitions.duration.enteringScreen,transitionProperty:"transform",transitionTimingFunction:e.transitions.easing.easeInOut,zIndex:e.zIndex.modal+1},"&$selected $media:hover":{opacity:"0.8"},"&$selected $content":{height:"auto",opacity:"1"},"&$selected$closing":{transitionDuration:e.transitions.duration.leavingScreen},"&$selected$closing $content":{height:"0"}},media:{backgroundSize:"cover",height:"0",paddingTop:"50%",transitionDuration:e.transitions.duration.standard,transitionProperty:"opacity",transitionTimingFunction:e.transitions.easing.easeInOut,width:"100%"},image:{maxWidth:"100%"},content:{height:"0",opacity:"0",overflow:"hidden",textAlign:"left",transitionDelay:e.transitions.duration.enteringScreen,transitionDuration:e.transitions.duration.shortest,transitionProperty:"opacity",transitionTimingFunction:e.transitions.easing.easeInOut},contentInner:{borderTop:"2px solid "+e.palette.divider,padding:e.spacing(4)+"px "+e.spacing(4)+"px "+e.spacing(2)+"px"},contentText:{display:"inline"},contentActions:{padding:e.spacing(2)+"px "+e.spacing(4)+"px",textAlign:"right"},contentActionButton:{fontSize:e.typography.caption.fontSize,marginLeft:e.spacing(1)+"px",marginRight:e.spacing(-1)+"px"},modal:{zIndex:e.zIndex.modal},selected:{},closing:{},backdrop:{backgroundColor:e.palette.background.default,bottom:"0",left:"0",position:"fixed",right:"0",top:"0",zIndex:e.zIndex.modal}};return t[e.breakpoints.down("xs")]={contentInner:{padding:e.spacing(2)+"px"},contentActions:{padding:e.spacing(2)+"px "+e.spacing(2)+"px "+e.spacing(1)+"px"}},t}},zWrT:function(e,t,a){var n=a("T/1i"),o=a("0HwX").f;a("qNvu")("getOwnPropertyDescriptor",function(){return function(e,t){return o(n(e),t)}})}},[["wkjo","5d41","9da1"]]]);