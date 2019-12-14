webpackHotUpdate("static/development/pages/index.js",{

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/*! exports provided: NEIGHBORSCHOOLS_URL, CHILD_CARE_CRISIS_URL, GITHUB_URL, LINKEDIN_URL, EMAIL_URL, HEADSHOT_700, CODE, VIDEOS, PAPERS, POEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEIGHBORSCHOOLS_URL", function() { return NEIGHBORSCHOOLS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHILD_CARE_CRISIS_URL", function() { return CHILD_CARE_CRISIS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITHUB_URL", function() { return GITHUB_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINKEDIN_URL", function() { return LINKEDIN_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_URL", function() { return EMAIL_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADSHOT_700", function() { return HEADSHOT_700; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CODE", function() { return CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIDEOS", function() { return VIDEOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAPERS", function() { return PAPERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POEMS", function() { return POEMS; });
var S3 = "https://cedricmcdougal.s3.us-east-2.amazonaws.com/personal-site/images";
var NEIGHBORSCHOOLS_URL = "https://www.neighborschools.com";
var CHILD_CARE_CRISIS_URL = "https://www.publichealthpost.org/research/american-child-care-crisis/";
var GITHUB_URL = "https://github.com/mcdougal";
var LINKEDIN_URL = "https://www.linkedin.com/in/cedric-mcdougal-2b99021a/";
var EMAIL_URL = "mailto:mcdougal.ce@gmail.com";
var HEADSHOT_700 = "".concat(S3, "/headshot2-700.jpg");
var CODE = [{
  title: "NeighborSchools",
  img: "".concat(S3, "/neighborschools-540.png"),
  cta: "Visit Site",
  url: "https://www.neighborschools.com",
  description: "I\u2019m currently the technical co-founder of the startup NeighborSchools. We\u2019re helping qualified providers start licensed family child care programs in their homes."
}, {
  title: "Digital Grandparents",
  img: "".concat(S3, "/dgi-540.png"),
  cta: "Visit Site",
  url: "https://dg-inc.org",
  description: "At Northeastern, I co-founded a non-profit called Digital Grandparents that helps older adults learn how to use technology."
}, {
  title: "South America Backpacking Blog",
  img: "".concat(S3, "/south-america-blog-540.png"),
  cta: "Visit Site",
  url: "https://cedricmcdougal.com/south-america-blog/",
  description: "In 2013, I backpacked in South America for a month. I traveled across Argentina and Bolivia and created this blog website about the journey. I highly recommend Iguazu Falls!"
}, {
  title: "Walkabout Boston",
  img: "".concat(S3, "/walkabout-boston-540.png"),
  cta: "Visit Site",
  url: "https://cedricmcdougal.com/walkabout-boston/",
  description: "A photo journal website of a lengthy walk around Boston, showcasing Longwood, Fenway and Mission Hill."
}, {
  title: "Beatles Dataset Builder",
  img: "".concat(S3, "/beatles-dataset-builder-540.png"),
  cta: "View Code",
  url: "https://github.com/mcdougal/BeatlesDatasetBuilder",
  description: "I built this tool for a research paper investigating how computer-driven textual analysis can reveal lyrical trends across the career of the Beatles. Some of the collected metrics include: danceability, energy, positive emotions, negative emotions, self-referential lyrics, big words, etc."
}, {
  title: "Handman",
  img: "".concat(S3, "/handman-540.png"),
  cta: "View Code",
  url: "https://github.com/mcdougal/handman",
  description: "Handman is an occupational therapy Android app. It is similar to a regular game of hangman, but if you guess incorrectly you get a chance to trace the letter. If you trace with high enough accuracy, your guess doesn\u2019t count."
}, {
  title: "Notable",
  img: "".concat(S3, "/notable-540.png"),
  cta: "View Code",
  url: "https://github.com/mcdougal/notable",
  description: "Notable is a music generation algorithm. It uses a pipeline of increasingly complex rules and transformations to generate a piece of music based on a set of input paramaters (key signature, time signature, tempo, etc.). The output can be passed in to LilyPond."
}, {
  title: "Wumpus World",
  img: "".concat(S3, "/wumpus-world-540.png"),
  cta: "View Code",
  url: "https://github.com/mcdougal/WumpusWorld",
  description: "The Wumpus world problem deals with an AI robot navigating its way through a puzzle to try and find gold. The robot must safely navigate its way around bottomless pits of death and evil Wumpus creatures to locate the gold hidden on the board."
}, {
  title: "TrafficSmart",
  img: "".concat(S3, "/traffic-smart-540.png"),
  cta: "View Code",
  url: "https://github.com/mcdougal/TrafficSmart",
  description: "TrafficSmart was a class project that aimed to use AI to increase the efficiency of traffic light timings in a city."
}];
var VIDEOS = [{
  title: "Distributed Databases for Dummies",
  video: "https://www.youtube.com/embed/aDTE8b-DHYU",
  description: "A walkthrough of the CAP theorem at a very basic level. The CAP Theorem is about fundamental tradeoffs that must be made when designing distributed computing systems. I made this video in conjunction with an academic paper."
}, {
  title: "Tea Time",
  video: "https://www.youtube.com/embed/obpa2Qa7tI8",
  description: "My entry to the Calm-A-Sutra of Tea Scholarship Competition. The challenge was to make a two-minute video about the health benefits of tea."
}];
var PAPERS = [{
  title: "Multi-Dimensional Computer-Driven Quantitative Analysis of the Music and Lyrics of the Beatles",
  "abstract": "Data retrieved through computer-driven quantitative textual analysis of Beatles lyrics was combined with data retrieved from computer-driven quantitative auditory analysis of Beatles music in order to build an extensive dataset that can answer a wide variety of multi-dimensional questions. This dataset spans the Beatles' career and provides metrics such as danceability, energy, positive emotions, negative emotions, self-referential lyrics, big words, etc. It can be indexed by year, album, songwriter, chart position, and more. This study explores a number of general relationships and trends within the data in order to best demonstrate the types of questions that can be answered with this dataset.",
  url: "https://cedricmcdougal.s3.us-east-2.amazonaws.com/personal-site/docs/computer-driven-analysis-of-the-music-and-lyrics-of-the-beatles.pdf",
  img: "https://cedricmcdougal.s3.us-east-2.amazonaws.com/personal-site/images/beatles-band-540.jpg",
  alt: "The Beatles sitting on a fence"
}, {
  title: "Overcoming the CAP Theorem: A survey of research on distributed computing",
  "abstract": "The vast amount of digital data in the world has led many companies to adopt distributed computing. However, this is not a perfect solution. Eric Brewer's CAP Theorem outlines a few of the limitations inherent in distributed computing. This paper explores current efforts to overcome these limitations. First, I introduce and explain the CAP Theorem. Then, I examine modern strategies for addressing the CAP Theorem limitations. Finally, I conclude the paper by summarizing my findings, explaining limitations in my research, and ruminating on the future of distributed computing.",
  url: "https://cedricmcdougal.s3.us-east-2.amazonaws.com/personal-site/docs/overcoming-the-cap-theorem-a-survey-of-research-on-distributed-computing.pdf",
  img: "https://cedricmcdougal.s3.us-east-2.amazonaws.com/personal-site/images/network-540.jpg",
  alt: "Stylized illustration of a network graph"
}];
var POEMS = [{
  title: "Adrift on the Blue",
  body: "\nA cozy home\nIn the bow of a boat\nWith the whisper of water\nAnd rocking. Afloat\nOn the surface\nOf surf serene and\nSo calm,\nStreaming in sunlight,\nHumming along.\nThe motor tugs\nForward, the wake\nSlips behind,\nSleep settles over\nThis nook as this mind\nMeanders, a river\nOf thoughts\nWinding through\nThe depths of a dream,\nAdrift on the blue.\n    "
}, {
  title: "Real Life",
  body: "\nTales of terror; darkness nests \u2013\nLambent fields; so truly blessed \u2013\nMurders gone and unconfessed \u2013\nYou know what happens in the rest.\nlife confined but Life so free,\nThe freedom gained; begot for free.\nLife as life can never be,\nMeaning nothing needlessly.\nSleep in streets. Go softly sneaking,\nAs the walls are slowly weakening.\nAlarming thoughts from people seeking\nQuestions with another meaning.\nJolted soul; erupting head \u2013\nCan't remember what was said \u2013\nTo Life I was so shortly wed:\nAnd now I must get out of bed.\n    "
}, {
  title: "Maybe life is but a dream...",
  body: "\nWhen it is covered by the night,\nThe blackest mare in wild fright\nWill vanish with the blackest light\nAnd burden nevermore, it might\nBecome the sunny, sandy shore,\nOr the purely pearly door,\nBut never will it hunt, no more\nWill it haunt the after or\nWill it ride and cross the sea\nWith iron will it float so free,\nCan it not nor never be\nThat it will drift so lazily\nAcross the one way out there stream\nOf muddy water, it might seem\nTo reel, with bending straining beam,\nIn this never-ending dream.\n    "
}, {
  title: "In Memory of Gus",
  body: "\nStaring at a casket, past it.\nLasting moments flashing past it.\nStaring at the past, it's static,\nStill, sweet, and gently aromatic.\nThe death has yet to settle in\nThe gaping hole you can't fill in\nThat in due time you will fall in.\nYou've dug the earth a little hole.\nA scar to mark his memory.\nFill empty grave with empty soul.\n    "
}, {
  title: "A Silent Goodbye",
  body: "\nThe screech of a seagull shudders in the sky,\nThe waves weep salty tears before they die,\nThe froth churns frilly, on the sand it does lie,\nThe mussels cling tight, from the rocks none can pry,\nThe clouds fluffy fiction, above me, up high,\nThe sun's an inferno, the earth does it fry,\nSearing above, an all-seeing eye,\nWatching over the world, naught doesn't it spy.\nThe sands shaping golden and shifting like rye,\nThe willow sagging down with a weeping cry,\nThe oaks reaching up and giving a sigh,\nTheir fingers stretch hopelessly, trying to tie\nThe earth and the heavens, always they try\nTo grow upwards and out, right next to my\nSpot on the beach, the place where I\nLook out at the world and ask it: why?\nIt answers with nothing, a silent goodbye.\n    "
}, {
  title: "Winter's Wrath",
  body: "\nOh Winter's wrath besets the world with rage!\nTenacious, striking, Winter never sleeps.\nShe dominates the sun and Heaven's stage,\nHer breath is colder than the frozen deep.\nAs death doth rob the dying body's heat,\nShe steals remaining warmth from Autumn's air.\nHer baleful temper slings the snow and sleet,\nOppressing all the world without a care.\nYet Winter's wrath precedes a warmer Spring.\nShe cedes control of all the frozen land.\nThe sun comes forth and birds begin to sing,\nThe time has come for Spring to make her stand.\nThe seasons ever cycle on their path,\nOh Life will never stop through joy and wrath\n    "
}, {
  title: "Lost",
  body: "\nThe setting sun, the fleeing light,\nThe longest hour of the endless night.\nThe looming darkness full of fright:\nDancing devil, frolicking sprite.\nUp and down and left and right,\nThe shadow closes; its grip so tight.\nTry as you will with all your might,\nYou can't shake off your eerie plight.\nThe drooling jaws, the gnashing bite,\nThe nothingness that none can fight.\nAnd when it takes away your sight,\nYou're filled with opposite of white.\nYou feel as if you've lost your height,\nYou feel as though your soul is slight.\nYour thoughts a jungle, your mind a blight,\nThe moon drains you of your delight.\nIs morning come? Not yet, not quite.\nThis void's becoming rather trite.\nFor to survive you must invite\nThe morbid fact that naught\u2019s alright.\n    "
}, {
  title: "On the Edge of Candle's Light",
  body: "\nAs night is raised with setting day,\nAcross the mind to candle's light\nThe darkened realm,\nThe brightened sprite.\nDwelling in the dripping glow\nWith flicking wings, the darting click\nOf bickering flame\nAnd wilting wick.\nSetting eyes of yellow shift\nThe edgy spore of shadow's knot;\nIt wavers back\nThe rotting thought.\nGnawing cross the candle's cell are\nMinute claws that cringe and cower\nWith second life\nIn final hour.\nAnd as the core is lowered still,\nToo void, the emptiness it lies\nToo bare, in sleep\nDeceit deprives.\nAnd so avoid the rest of time:\nIn meaning less it feeds on all\nWith lulling grasp,\nMirages fall.\n    "
}, {
  title: "An Unfortunate Journey",
  body: "\nThe hills were blocking the beautiful rays,\nBehind them all the wonder lay,\nFor in that spot I could not see,\nThe sun was there looking for me.\nI wanted much to see the sun,\nIn case it left, I started to run.\nIt took me long to reach this place,\nI traveled all night at a steady pace.\nTo my misfortune when I crested the hill,\nI found something that made me feel ill.\nThe sun was not here anymore,\nIt was behind me in the mountains that soar.\n    "
}];

/***/ })

})
//# sourceMappingURL=index.js.97d048603fd4a4620b61.hot-update.js.map