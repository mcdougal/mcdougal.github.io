_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(r.default.useContext(o.AmpStateContext))};var i,r=(i=n("q1tI"))&&i.__esModule?i:{default:i},o=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,i=e.hybrid,r=void 0!==i&&i,o=e.hasQuery,a=void 0!==o&&o;return n||r&&a}},"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"0G5g":function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var i="undefined"!==typeof self&&self.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)};t.default=i},"1ccW":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},n.apply(this,arguments)}e.exports=n},"48fX":function(e,t,n){var i=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}},"5fIB":function(e,t,n){var i=n("7eYB");e.exports=function(e){if(Array.isArray(e))return i(e)}},"7eYB":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var i,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(i=n("Xuae"))&&i.__esModule?i:{default:i},a=n("lwAK"),s=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,i={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var a=r.key.slice(r.key.indexOf("$")+1);e.has(a)?o=!1:e.add(a)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var s=0,c=h.length;s<c;s++){var l=h[s];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var u=r.props[l],d=i[l]||new Set;d.has(u)?o=!1:(d.add(u),i[l]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,r.useContext)(a.AmpStateContext),i=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:f,headManager:i,inAmpMode:(0,c.isInAmpMode)(n)},t)}p.rewind=function(){};var m=p;t.default=m},"98FW":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}},Aiso:function(e,t,n){e.exports=n("dQHF")},AroE:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"C+bE":function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},FYa8:function(e,t,n){"use strict";var i;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((i=n("q1tI"))&&i.__esModule?i:{default:i}).default.createContext({});t.HeadManagerContext=r},KckH:function(e,t,n){var i=n("7eYB");e.exports=function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}},PqPU:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},Qetd:function(e,t,n){"use strict";var i=Object.assign.bind(Object);e.exports=i,e.exports.default=e.exports},RXBc:function(e,t,n){"use strict";n.r(t);var i=n("nKUr"),r=n("8Kt/"),o=n.n(r),a=n("q1tI"),s=n.n(a),c=n("Aiso"),l=n.n(c),u="mailto:mcdougal.ce@gmail.com",d=[{title:"NeighborSchools",img:"/neighborschools_b8qpbv.png",cta:"Visit Site",url:"https://www.neighborschools.com",description:"I\u2019m currently CTO and co-founder of NeighborSchools. We\u2019re helping qualified providers start licensed home daycares."},{title:"Digital Grandparents",img:"/dgi_tcz2by.png",cta:"Visit Site",url:"https://dg-inc.org",description:"At Northeastern, I co-founded a non-profit called Digital Grandparents that helps older adults learn how to use technology."},{title:"South America Backpacking Blog",img:"/south-america-blog_dp82mq.png",cta:"Visit Site",url:"https://cedricmcdougal.com/south-america-blog/",description:"In 2013, I backpacked in South America for a month. I traveled across Argentina and Bolivia and created this blog website about the journey. I highly recommend Iguazu Falls!"},{title:"Walkabout Boston",img:"/walkabout-boston_t3tgxs.png",cta:"Visit Site",url:"https://cedricmcdougal.com/walkabout-boston/",description:"A photo journal website of a lengthy walk around Boston, showcasing Longwood, Fenway and Mission Hill."},{title:"Beatles Dataset Builder",img:"/beatles-dataset-builder_ez3alr.png",cta:"View Code",url:"https://github.com/mcdougal/BeatlesDatasetBuilder",description:"I built this tool for a research paper investigating how computer-driven textual analysis can reveal lyrical trends across the career of the Beatles. Some of the collected metrics include: danceability, energy, positive emotions, negative emotions, self-referential lyrics, big words, etc."},{title:"Handman",img:"/handman_i4wavt.png",cta:"View Code",url:"https://github.com/mcdougal/handman",description:"Handman is an occupational therapy Android app. It\u2019s similar to a regular game of hangman, but if you guess incorrectly you get a chance to trace the letter. If you trace with high enough accuracy, your guess doesn\u2019t count."},{title:"Notable",img:"/notable_kzdhgc.png",cta:"View Code",url:"https://github.com/mcdougal/notable",description:"Notable is a music generation algorithm. It uses a pipeline of increasingly complex rules and transformations to generate a piece of music based on a set of input paramaters (key signature, time signature, tempo, etc.). The output can be passed in to LilyPond."},{title:"Wumpus World",img:"/wumpus-world_t86rmq.png",cta:"View Code",url:"https://github.com/mcdougal/WumpusWorld",description:"The Wumpus world problem deals with an AI robot navigating its way through a puzzle to try and find gold. The robot must safely navigate its way around bottomless pits of death and evil Wumpus creatures to locate the gold hidden on the board."},{title:"TrafficSmart",img:"/traffic-smart_ir4bb0.png",cta:"View Code",url:"https://github.com/mcdougal/TrafficSmart",description:"TrafficSmart was a class project that aimed to use AI to increase the efficiency of traffic light timings in a city."}],h=[{title:"Distributed Databases for Dummies",video:"https://www.youtube.com/embed/aDTE8b-DHYU",description:"A walkthrough of the CAP theorem at a very basic level. The CAP Theorem is about fundamental tradeoffs that must be made when designing distributed computing systems. I made this video in conjunction with an academic paper."},{title:"Tea Time",video:"https://www.youtube.com/embed/obpa2Qa7tI8",description:"My entry to the Calm-A-Sutra of Tea Scholarship Competition. The challenge was to make a two-minute video about the health benefits of tea."}],f=[{title:"Multi-Dimensional Computer-Driven Quantitative Analysis of the Music and Lyrics of the Beatles",abstract:"Data retrieved through computer-driven quantitative textual analysis of Beatles lyrics was combined with data retrieved from computer-driven quantitative auditory analysis of Beatles music in order to build an extensive dataset that can answer a wide variety of multi-dimensional questions. This dataset spans the Beatles\u2019 career and provides metrics such as danceability, energy, positive emotions, negative emotions, self-referential lyrics, big words, etc. It can be indexed by year, album, songwriter, chart position, and more. This study explores a number of general relationships and trends within the data in order to best demonstrate the types of questions that can be answered with this dataset.",url:"https://cedricmcdougal.s3.us-east-2.amazonaws.com/personal-site/docs/computer-driven-analysis-of-the-music-and-lyrics-of-the-beatles.pdf",img:"/beatles-band_wrywie.jpg",alt:"The Beatles sitting on a fence"},{title:"Overcoming the CAP Theorem: A survey of research on distributed computing",abstract:"The vast amount of digital data in the world has led many companies to adopt distributed computing. However, this is not a perfect solution. Eric Brewer\u2019s CAP Theorem outlines a few of the limitations inherent in distributed computing. This paper explores current efforts to overcome these limitations. First, I introduce and explain the CAP Theorem. Then, I examine modern strategies for addressing the CAP Theorem limitations. Finally, I conclude the paper by summarizing my findings, explaining limitations in my research, and ruminating on the future of distributed computing.",url:"https://cedricmcdougal.s3.us-east-2.amazonaws.com/personal-site/docs/overcoming-the-cap-theorem-a-survey-of-research-on-distributed-computing.pdf",img:"/network_g2ldao.jpg",alt:"Stylized illustration of a network graph"}],p=[{title:"Adrift on the Blue",body:"\nA cozy home\nIn the bow of a boat\nWith the whisper of water\nAnd rocking. Afloat\nOn the surface\nOf surf serene and\nSo calm,\nStreaming in sunlight,\nHumming along.\nThe motor tugs\nForward, the wake\nSlips behind,\nSleep settles over\nThis nook as this mind\nMeanders, a river\nOf thoughts\nWinding through\nThe depths of a dream,\nAdrift on the blue.\n    ".trim()},{title:"Real Life",body:"\nTales of terror; darkness nests \u2013\nLambent fields; so truly blessed \u2013\nMurders gone and unconfessed \u2013\nYou know what happens in the rest.\nlife confined but Life so free,\nThe freedom gained; begot for free.\nLife as life can never be,\nMeaning nothing needlessly.\nSleep in streets. Go softly sneaking,\nAs the walls are slowly weakening.\nAlarming thoughts from people seeking\nQuestions with another meaning.\nJolted soul; erupting head \u2013\nCan\u2019t remember what was said \u2013\nTo Life I was so shortly wed:\nAnd now I must get out of bed.\n    ".trim()},{title:"Maybe life is but a dream...",body:"\nWhen it is covered by the night,\nThe blackest mare in wild fright\nWill vanish with the blackest light\nAnd burden nevermore, it might\nBecome the sunny, sandy shore,\nOr the purely pearly door,\nBut never will it hunt, no more\nWill it haunt the after or\nWill it ride and cross the sea\nWith iron will it float so free,\nCan it not nor never be\nThat it will drift so lazily\nAcross the one way out there stream\nOf muddy water, it might seem\nTo reel, with bending straining beam,\nIn this never-ending dream.\n    ".trim()},{title:"In Memory of Gus",body:"\nStaring at a casket, past it.\nLasting moments flashing past it.\nStaring at the past, it\u2019s static,\nStill, sweet, and gently aromatic.\nThe death has yet to settle in\nThe gaping hole you can\u2019t fill in\nThat in due time you will fall in.\nYou\u2019ve dug the earth a little hole.\nA scar to mark his memory.\nFill empty grave with empty soul.\n    ".trim()},{title:"A Silent Goodbye",body:"\nThe screech of a seagull shudders in the sky,\nThe waves weep salty tears before they die,\nThe froth churns frilly, on the sand it does lie,\nThe mussels cling tight, from the rocks none can pry,\nThe clouds fluffy fiction, above me, up high,\nThe sun\u2019s an inferno, the earth does it fry,\nSearing above, an all-seeing eye,\nWatching over the world, naught doesn\u2019t it spy.\nThe sands shaping golden and shifting like rye,\nThe willow sagging down with a weeping cry,\nThe oaks reaching up and giving a sigh,\nTheir fingers stretch hopelessly, trying to tie\nThe earth and the heavens, always they try\nTo grow upwards and out, right next to my\nSpot on the beach, the place where I\nLook out at the world and ask it: why?\nIt answers with nothing, a silent goodbye.\n    ".trim()},{title:"Winter\u2019s Wrath",body:"\nOh Winter\u2019s wrath besets the world with rage!\nTenacious, striking, Winter never sleeps.\nShe dominates the sun and Heaven\u2019s stage,\nHer breath is colder than the frozen deep.\nAs death doth rob the dying body\u2019s heat,\nShe steals remaining warmth from Autumn\u2019s air.\nHer baleful temper slings the snow and sleet,\nOppressing all the world without a care.\nYet Winter\u2019s wrath precedes a warmer Spring.\nShe cedes control of all the frozen land.\nThe sun comes forth and birds begin to sing,\nThe time has come for Spring to make her stand.\nThe seasons ever cycle on their path,\nOh Life will never stop through joy and wrath\n    ".trim()},{title:"Lost",body:"\nThe setting sun, the fleeing light,\nThe longest hour of the endless night.\nThe looming darkness full of fright:\nDancing devil, frolicking sprite.\nUp and down and left and right,\nThe shadow closes; its grip so tight.\nTry as you will with all your might,\nYou can\u2019t shake off your eerie plight.\nThe drooling jaws, the gnashing bite,\nThe nothingness that none can fight.\nAnd when it takes away your sight,\nYou\u2019re filled with opposite of white.\nYou feel as if you\u2019ve lost your height,\nYou feel as though your soul is slight.\nYour thoughts a jungle, your mind a blight,\nThe moon drains you of your delight.\nIs morning come? Not yet, not quite.\nThis void\u2019s becoming rather trite.\nFor to survive you must invite\nThe morbid fact that naught\u2019s alright.\n    ".trim()},{title:"On the Edge of Candle\u2019s Light",body:"\nAs night is raised with setting day,\nAcross the mind to candle\u2019s light\nThe darkened realm,\nThe brightened sprite.\nDwelling in the dripping glow\nWith flicking wings, the darting click\nOf bickering flame\nAnd wilting wick.\nSetting eyes of yellow shift\nThe edgy spore of shadow\u2019s knot;\nIt wavers back\nThe rotting thought.\nGnawing cross the candle\u2019s cell are\nMinute claws that cringe and cower\nWith second life\nIn final hour.\nAnd as the core is lowered still,\nToo void, the emptiness it lies\nToo bare, in sleep\nDeceit deprives.\nAnd so avoid the rest of time:\nIn meaning less it feeds on all\nWith lulling grasp,\nMirages fall.\n    ".trim()},{title:"An Unfortunate Journey",body:"\nThe hills were blocking the beautiful rays,\nBehind them all the wonder lay,\nFor in that spot I could not see,\nThe sun was there looking for me.\nI wanted much to see the sun,\nIn case it left, I started to run.\nIt took me long to reach this place,\nI traveled all night at a steady pace.\nTo my misfortune when I crested the hill,\nI found something that made me feel ill.\nThe sun was not here anymore,\nIt was behind me in the mountains that soar.\n    ".trim()}];t.default=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(o.a,{children:[Object(i.jsx)("title",{children:"Cedric McDougal"}),Object(i.jsx)("meta",{content:"Hi, I\u2019m Cedric McDougal. I\u2019m a software developer in Boston. I\u2019m currently building NeighborSchools to help solve the child care crisis in the U.S.",name:"description"})]}),Object(i.jsx)("header",{children:Object(i.jsx)("h1",{children:"Cedric McDougal"})}),Object(i.jsx)("nav",{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"#code",children:"Code"}),Object(i.jsx)("a",{href:"#music",children:"Music"}),Object(i.jsx)("a",{href:"#videos",children:"Videos"}),Object(i.jsx)("a",{href:"#papers",children:"Papers"}),Object(i.jsx)("a",{href:"#poems",children:"Poems"}),Object(i.jsx)("a",{href:"#contact",children:"Contact"})]})}),Object(i.jsxs)("section",{children:[Object(i.jsx)(l.a,{alt:"Picture of Cedric",height:300,layout:"intrinsic",src:"/headshot_lsrcng.jpg",width:308}),Object(i.jsxs)("p",{children:["I\u2019m a software developer in Boston. I\u2019m currently building"," ",Object(i.jsx)("a",{href:"https://www.neighborschools.com",children:"NeighborSchools"})," ","to help solve the"," ",Object(i.jsx)("a",{href:"https://www.publichealthpost.org/research/american-child-care-crisis/",children:"child care crisis"})," ","in the U.S."]}),Object(i.jsxs)("p",{children:["This website is a collection of various personal and professional projects. If you want to get in touch, feel free to"," ",Object(i.jsx)("a",{href:u,children:"shoot me an email"}),"."]})]}),Object(i.jsxs)("section",{id:"code",children:[Object(i.jsx)("h2",{children:"Code"}),Array.apply(null,Array(Math.ceil(d.length/2))).map((function(e,t){return Object(i.jsx)(s.a.Fragment,{children:[0,1].map((function(e){var n=2*t+e;if(n>d.length-1)return null;var r=d[n],o=r.title,a=r.img,c=r.cta,u=r.url,h=r.description;return Object(i.jsxs)(s.a.Fragment,{children:[Object(i.jsx)("h3",{children:o}),Object(i.jsx)("figure",{children:Object(i.jsx)("a",{"aria-label":c,href:u,title:c,children:Object(i.jsx)(l.a,{alt:o,height:220,layout:"intrinsic",src:a,width:440})})}),Object(i.jsx)("p",{children:h}),Object(i.jsx)("a",{href:u,children:c})]},e)}))},t)}))]}),Object(i.jsxs)("section",{id:"music",children:[Object(i.jsx)("h2",{children:"Music"}),Object(i.jsx)("iframe",{allow:"autoplay",frameBorder:"no",height:"450",scrolling:"no",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/814890147&color=%23ff9100&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",title:"Cedric McDougal - All Tracks",width:"100%"})]}),Object(i.jsxs)("section",{id:"videos",children:[Object(i.jsx)("h2",{children:"Videos"}),Array.apply(null,Array(Math.ceil(h.length/2))).map((function(e,t){return Object(i.jsx)(s.a.Fragment,{children:[0,1].map((function(e){var n=2*t+e;if(n>h.length-1)return null;var r=h[n],o=r.title,a=r.video,c=r.description;return Object(i.jsxs)(s.a.Fragment,{children:[Object(i.jsx)("h3",{children:o}),Object(i.jsx)("iframe",{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,frameBorder:"0",height:"300",src:a,title:o,width:"100%"}),Object(i.jsx)("p",{children:c})]},e)}))},t)}))]}),Object(i.jsxs)("section",{id:"papers",children:[Object(i.jsx)("h2",{children:"Papers"}),Array.apply(null,Array(Math.ceil(f.length/2))).map((function(e,t){return Object(i.jsx)(s.a.Fragment,{children:[0,1].map((function(e){var n=2*t+e;if(n>f.length-1)return null;var r=f[n],o=r.title,a=r.abstract,c=r.url,u=r.img,d=r.alt;return Object(i.jsxs)(s.a.Fragment,{children:[Object(i.jsx)("h3",{children:o}),Object(i.jsx)("figure",{children:Object(i.jsx)(l.a,{alt:d,height:270,layout:"intrinsic",src:u,width:440})}),Object(i.jsx)("p",{children:a}),Object(i.jsx)("a",{href:c,children:"Read Paper"})]},e)}))},t)}))]}),Object(i.jsxs)("section",{id:"poems",children:[Object(i.jsx)("h2",{children:"Poems"}),Array.apply(null,Array(Math.ceil(p.length/2))).map((function(e,t){return Object(i.jsx)(s.a.Fragment,{children:[0,1].map((function(e){var n=2*t+e;if(n>p.length-1)return null;var r=p[n],o=r.title,a=r.body;return Object(i.jsxs)(s.a.Fragment,{children:[Object(i.jsx)("h3",{children:o}),Object(i.jsx)("p",{children:a})]},e)}))},t)}))]}),Object(i.jsxs)("footer",{children:[Object(i.jsx)("h2",{id:"contact",children:"Get in touch"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"https://github.com/mcdougal",children:"GitHub"}),Object(i.jsx)("a",{href:"https://www.linkedin.com/in/cedric-mcdougal-2b99021a/",children:"LinkedIn"}),Object(i.jsx)("a",{href:u,children:"Email"})]})]})]})}},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},UWYU:function(e,t,n){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},Xuae:function(e,t,n){"use strict";var i=n("mPvQ"),r=n("/GRZ"),o=n("i2R6"),a=(n("qXWd"),n("48fX")),s=n("tCBg"),c=n("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){a(n,e);var t=l(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(i(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},dEHY:function(e,t,n){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,t,n){"use strict";var i=n("zoAU"),r=n("mPvQ"),o=n("AroE");t.__esModule=!0,t.default=function(e){var t=e.src,n=e.sizes,o=e.unoptimized,s=void 0!==o&&o,u=e.priority,h=void 0!==u&&u,f=e.loading,m=e.className,g=e.quality,b=e.width,j=e.height,x=e.objectFit,O=e.objectPosition,A=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition"]),k=n?"responsive":"intrinsic",S=!1;"unsized"in A?(S=Boolean(A.unsized),delete A.unsized):"layout"in A&&(A.layout&&(k=A.layout),delete A.layout);0;var T=!h&&("lazy"===f||"undefined"===typeof f);t&&t.startsWith("data:")&&(s=!0,T=!1);var I,_,M,C=(0,d.useIntersection)({rootMargin:"200px",disabled:!T}),z=i(C,2),P=z[0],W=z[1],B=!T||W,D=v(b),E=v(j),q=v(g),H={visibility:B?"visible":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:x,objectPosition:O};if("undefined"!==typeof D&&"undefined"!==typeof E&&"fill"!==k){var F=E/D,R=isNaN(F)?"100%":"".concat(100*F,"%");"responsive"===k?(I={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},_={display:"block",boxSizing:"border-box",paddingTop:R}):"intrinsic"===k?(I={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},_={boxSizing:"border-box",display:"block",maxWidth:"100%"},M='<svg width="'.concat(D,'" height="').concat(E,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===k&&(I={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:D,height:E})}else"undefined"===typeof D&&"undefined"===typeof E&&"fill"===k&&(I={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var L={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"};B&&(L=function(e){var t=e.src,n=e.unoptimized,i=e.layout,o=e.width,a=e.quality,s=e.sizes;if(n)return{src:t};var c=function(e,t){if("number"!==typeof e||"fill"===t||"responsive"===t)return{widths:p,kind:"w"};return{widths:r(new Set([e,2*e,3*e].map((function(e){return y.find((function(t){return t>=e}))||y[y.length-1]})))),kind:"x"}}(o,i),l=c.widths,u=c.kind,d=l.length-1,h=l.map((function(e,n){return"".concat(w({src:t,quality:a,width:e})," ").concat("w"===u?e:n+1).concat(u)})).join(", ");s||"w"!==u||(s=l.map((function(e,t){return t===d?"".concat(e,"px"):"(max-width: ".concat(e,"px) ").concat(e,"px")})).join(", "));return{src:t=w({src:t,quality:a,width:l[d]}),sizes:s,srcSet:h}}({src:t,unoptimized:s,layout:k,width:D,quality:q,sizes:n}));S&&(I=void 0,_=void 0,H=void 0);return c.default.createElement("div",{style:I},_?c.default.createElement("div",{style:_},M?c.default.createElement("img",{style:{maxWidth:"100%",display:"block"},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,l.toBase64)(M))}):null):null,c.default.createElement("img",Object.assign({},A,L,{decoding:"async",className:m,ref:P,style:H})))};var a=o(n("98FW")),s=o(n("1ccW")),c=o(n("q1tI")),l=n("dEHY"),u=n("UWYU"),d=n("vNVm");var h=new Map([["imgix",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,o=["auto=format","fit=max","w="+i],a="";r&&o.push("q="+r);o.length&&(a="?"+o.join("&"));return"".concat(t).concat(j(n)).concat(a)}],["cloudinary",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i],a="";r&&o.push("q_"+r);o.length&&(a=o.join(",")+"/");return"".concat(t).concat(a).concat(j(n))}],["akamai",function(e){var t=e.root,n=e.src,i=e.width;return"".concat(t).concat(j(n),"?imwidth=").concat(i)}],["default",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}]]),f={deviceSizes:[640],imageSizes:[16,32,48,64,96,128,256,384],path:"https://res.cloudinary.com/cedricmcdougal/image/upload/",loader:"cloudinary"}||u.imageConfigDefault,p=f.deviceSizes,m=f.imageSizes,g=f.loader,b=f.path,y=(f.domains,[].concat(r(p),r(m)));function w(e){var t=h.get(g);if(t)return t((0,s.default)({root:b},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(g))}function v(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function j(e){return"/"===e[0]?e.slice(1):e}p.sort((function(e,t){return e-t})),y.sort((function(e,t){return e-t}))},i2R6:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}e.exports=function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var i;t.__esModule=!0,t.AmpStateContext=void 0;var r=((i=n("q1tI"))&&i.__esModule?i:{default:i}).default.createContext({});t.AmpStateContext=r},mPvQ:function(e,t,n){var i=n("5fIB"),r=n("rlHP"),o=n("KckH"),a=n("kG2m");e.exports=function(e){return i(e)||r(e)||o(e)||a()}},mxvI:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(c){r=!0,o=c}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},pSHO:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},qhzo:function(e,t){function n(t,i){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,i)}e.exports=n},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var i=n("C+bE"),r=n("qXWd");e.exports=function(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?r(e):t}},vNVm:function(e,t,n){"use strict";var i=n("zoAU"),r=n("AroE");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,r=(0,o.useRef)(),l=(0,o.useState)(!1),u=i(l,2),d=u[0],h=u[1],f=(0,o.useCallback)((function(e){r.current&&(r.current(),r.current=void 0),n||d||e&&e.tagName&&(r.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(r))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[n,t,d]);return(0,o.useEffect)((function(){s||d||(0,a.default)((function(){return h(!0)}))}),[d]),[f,d]};var o=n("q1tI"),a=r(n("0G5g")),s="undefined"!==typeof IntersectionObserver;var c=new Map},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])},zoAU:function(e,t,n){var i=n("PqPU"),r=n("mxvI"),o=n("KckH"),a=n("pSHO");e.exports=function(e,t){return i(e)||r(e,t)||o(e,t)||a()}}},[["vlRD",0,1]]]);