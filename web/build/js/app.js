/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ansi-styles/index.js":
/*!*******************************************!*\
  !*** ./node_modules/ansi-styles/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


const wrapAnsi16 = (fn, offset) => (...args) => {
	const code = fn(...args);
	return `\u001B[${code + offset}m`;
};

const wrapAnsi256 = (fn, offset) => (...args) => {
	const code = fn(...args);
	return `\u001B[${38 + offset};5;${code}m`;
};

const wrapAnsi16m = (fn, offset) => (...args) => {
	const rgb = fn(...args);
	return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
};

const ansi2ansi = n => n;
const rgb2rgb = (r, g, b) => [r, g, b];

const setLazyProperty = (object, property, get) => {
	Object.defineProperty(object, property, {
		get: () => {
			const value = get();

			Object.defineProperty(object, property, {
				value,
				enumerable: true,
				configurable: true
			});

			return value;
		},
		enumerable: true,
		configurable: true
	});
};

/** @type {typeof import('color-convert')} */
let colorConvert;
const makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
	if (colorConvert === undefined) {
		colorConvert = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");
	}

	const offset = isBackground ? 10 : 0;
	const styles = {};

	for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
		const name = sourceSpace === 'ansi16' ? 'ansi' : sourceSpace;
		if (sourceSpace === targetSpace) {
			styles[name] = wrap(identity, offset);
		} else if (typeof suite === 'object') {
			styles[name] = wrap(suite[targetSpace], offset);
		}
	}

	return styles;
};

function assembleStyles() {
	const codes = new Map();
	const styles = {
		modifier: {
			reset: [0, 0],
			// 21 isn't widely supported and 22 does the same thing
			bold: [1, 22],
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		},
		color: {
			black: [30, 39],
			red: [31, 39],
			green: [32, 39],
			yellow: [33, 39],
			blue: [34, 39],
			magenta: [35, 39],
			cyan: [36, 39],
			white: [37, 39],

			// Bright color
			blackBright: [90, 39],
			redBright: [91, 39],
			greenBright: [92, 39],
			yellowBright: [93, 39],
			blueBright: [94, 39],
			magentaBright: [95, 39],
			cyanBright: [96, 39],
			whiteBright: [97, 39]
		},
		bgColor: {
			bgBlack: [40, 49],
			bgRed: [41, 49],
			bgGreen: [42, 49],
			bgYellow: [43, 49],
			bgBlue: [44, 49],
			bgMagenta: [45, 49],
			bgCyan: [46, 49],
			bgWhite: [47, 49],

			// Bright color
			bgBlackBright: [100, 49],
			bgRedBright: [101, 49],
			bgGreenBright: [102, 49],
			bgYellowBright: [103, 49],
			bgBlueBright: [104, 49],
			bgMagentaBright: [105, 49],
			bgCyanBright: [106, 49],
			bgWhiteBright: [107, 49]
		}
	};

	// Alias bright black as gray (and grey)
	styles.color.gray = styles.color.blackBright;
	styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
	styles.color.grey = styles.color.blackBright;
	styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;

	for (const [groupName, group] of Object.entries(styles)) {
		for (const [styleName, style] of Object.entries(group)) {
			styles[styleName] = {
				open: `\u001B[${style[0]}m`,
				close: `\u001B[${style[1]}m`
			};

			group[styleName] = styles[styleName];

			codes.set(style[0], style[1]);
		}

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});
	}

	Object.defineProperty(styles, 'codes', {
		value: codes,
		enumerable: false
	});

	styles.color.close = '\u001B[39m';
	styles.bgColor.close = '\u001B[49m';

	setLazyProperty(styles.color, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, false));
	setLazyProperty(styles.color, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, false));
	setLazyProperty(styles.color, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, false));
	setLazyProperty(styles.bgColor, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, true));
	setLazyProperty(styles.bgColor, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, true));
	setLazyProperty(styles.bgColor, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, true));

	return styles;
}

// Make the export immutable
Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});


/***/ }),

/***/ "./tailwind.config.js":
/*!****************************!*\
  !*** ./tailwind.config.js ***!
  \****************************/
/***/ ((module) => {

module.exports = {
  content: ['./app/Resources/views/**/*.html.twig', './web/assets/encore/**/*.js'],
  theme: {
    extend: {}
  },
  plugins: []
};

/***/ }),

/***/ "./web/assets/encore/js/vendor/addEvento.js":
/*!**************************************************!*\
  !*** ./web/assets/encore/js/vendor/addEvento.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addE": () => (/* binding */ addE)
/* harmony export */ });
var addE = function addE() {
  function addEvent(parent, evt, selector, handler) {
    parent.addEventListener(evt, function (event) {
      if (event.target.matches(selector + ', ' + selector + ' *')) {
        handler.apply(event.target.closest(selector), arguments);
      }
    }, false);
  }
  /* To be used as */


  addEvent(document, 'click', '.tab-tw-inspect-btn', function (e) {
    var id = this.getAttribute('data-id');
    document.querySelectorAll('.tab-tw-inspect-content').forEach(function (element) {
      element.classList.remove('open');
    });
    document.querySelectorAll('.tab-tw-inspect-btn').forEach(function (element) {
      element.classList.remove('active-tab-selector');
    });
    document.querySelector('.tab-tw-inspect-btn[data-id="' + id + '"]').classList.add('active-tab-selector');
    document.querySelector('.tab-tw-inspect-content[data-id="' + id + '"]').classList.add('open');
  });
  addEvent(document, 'click', '.delete-row', function (e) {});
  addEvent(document, 'click', '.delete-class-element', function (e) {
    var css = e.target.closest('.delete-row').querySelector('.class-css').innerHTML;
    console.log(e.target.closest('.delete-row').remove());
    document.querySelector('.click-element-over').classList.remove(css);
  });
};

/***/ }),

/***/ "./web/assets/encore/js/vendor/clickElement.js":
/*!*****************************************************!*\
  !*** ./web/assets/encore/js/vendor/clickElement.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickElement": () => (/* binding */ clickElement)
/* harmony export */ });
var clickElement = function clickElement() {
  var copyCss = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>';
  var deleteSvg = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>';

  var getClass = function getClass(className) {
    return className.getAttribute('class');
  };

  var setClassTw = function setClassTw(className) {
    // init-config
    var classNameTW = className;
    var classNameTWArray = classNameTW.split(' ');
    var classNameTWArrayLength = classNameTWArray.length;
    var classNameTWArrayLengthMinusOne = classNameTWArrayLength - 1;
    var classNameTWArrayLast = classNameTWArray[classNameTWArrayLengthMinusOne];
    var classNameTWArrayLastArray = classNameTWArrayLast.split('-');
    var classNameTWArrayLastArrayLength = classNameTWArrayLastArray.length;
    var classNameTWArrayLastArrayLengthMinusOne = classNameTWArrayLastArrayLength - 1;
    var classNameTWArrayLastArrayLast = classNameTWArrayLastArray[classNameTWArrayLastArrayLengthMinusOne]; //document.querySelector('.init-config').innerHTML = ""

    document.querySelector('.class-linear-tw').innerHTML = '';

    for (var index = 0; index < classNameTWArrayLength; index++) {
      var _element = classNameTWArray[index];

      if (_element === 'hover-element-over' || _element === 'click-element-over') {
        return false;
      }

      var html = "<div class=\"px-2 class-row-tw flex delete-row items-center py-2 cursor-pointer text-gray-400 rounded-lg bg-opacity-10 text-sm hover:bg-gray-400 hover:bg-opacity-20\"> <div class=\"class-css\" >".concat(_element, "</div>: <div class=\"ml-1 value-css text-\"></div><div class=\"copy-css ml-auto cursor-pointer\">").concat(copyCss, "</div><div class=\"delete-class-element\">").concat(deleteSvg, "</div></div>");
      document.querySelector('.class-linear-tw').innerHTML += html;
    }
  };

  var element = document.querySelector('*');
  element.addEventListener('click', function (event) {
    if (event.target.closest('.content-app-tw') !== null) {
      return false;
    }

    if (document.querySelector('.click-element-over') == null) {
      event.target.classList.add('click-element-over');
      setClassTw(getClass(event.target));
      return false;
    }

    setClassTw(getClass(event.target));
    document.querySelector('.click-element-over').classList.remove('click-element-over');
    event.target.classList.add('click-element-over');
  });
};

/***/ }),

/***/ "./web/assets/encore/js/vendor/disabledEnabled.js":
/*!********************************************************!*\
  !*** ./web/assets/encore/js/vendor/disabledEnabled.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleAction": () => (/* binding */ toggleAction)
/* harmony export */ });
var toggleAction = {
  activate: function activate() {
    function lockPage() {
      lockElements(document.getElementsByTagName("a"));
      lockElements(document.getElementsByTagName("input"));
      lockElements(document.getElementsByTagName("button"));
    }

    ;

    function lockElements(el) {
      for (var i = 0; i < el.length; i++) {
        el[i].style.pointerEvents = "none";
      }
    }

    ;
    lockPage(); // ...
  },
  deactivate: function deactivate() {
    // ...
    function unlockPage() {
      unlockElements(document.getElementsByTagName("a"));
      unlockElements(document.getElementsByTagName("input"));
      unlockElements(document.getElementsByTagName("button"));
    }

    ;

    function unlockElements(el) {
      for (var i = 0; i < el.length; i++) {
        el[i].style.pointerEvents = "auto";
      }
    }

    ;
    unlockPage();
  }
};

/***/ }),

/***/ "./web/assets/encore/js/vendor/dragElements.js":
/*!*****************************************************!*\
  !*** ./web/assets/encore/js/vendor/dragElements.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dragElement": () => (/* binding */ dragElement)
/* harmony export */ });
var dragElement = function dragElement(elmnt) {
  var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault(); // get the mouse cursor position at startup:

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement; // call a function whenever the cursor moves:

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault(); // calculate the new cursor position:

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY; // calculate the max cursor position:

    var xMax = window.innerWidth - elmnt.offsetWidth;
    var yMax = window.innerHeight - elmnt.offsetHeight; // set the element's new position:

    if (elmnt.offsetLeft - pos1 >= 0 && elmnt.offsetLeft - pos1 <= xMax) {
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      pos3 = e.clientX;
    }

    if (elmnt.offsetTop - pos2 >= 0 && elmnt.offsetTop - pos2 <= yMax) {
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      pos4 = e.clientY;
    }
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
};

/***/ }),

/***/ "./web/assets/encore/js/vendor/hoverElement.js":
/*!*****************************************************!*\
  !*** ./web/assets/encore/js/vendor/hoverElement.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hoverElement": () => (/* binding */ hoverElement)
/* harmony export */ });
var hoverElement = function hoverElement(en) {
  var element = document.querySelector('*');
  element.addEventListener('mouseover', function (event) {
    if (event.target.closest('.content-app-tw') !== null) {
      return false;
    }

    event.target.classList.add('hover-element-over');
  });
  element.addEventListener("mouseout", function (event) {
    if (event.target.closest('.content-app-tw') !== null) {
      return false;
    }

    event.target.classList.remove('hover-element-over');
  });
  var event = new MouseEvent('mouseover', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });
  element.dispatchEvent(event);
};

/***/ }),

/***/ "./web/assets/encore/js/vendor/searchClass.js":
/*!****************************************************!*\
  !*** ./web/assets/encore/js/vendor/searchClass.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchClass": () => (/* binding */ searchClass)
/* harmony export */ });
var hardReset = '';
var indexSelect = 0;
var searchClass = function searchClass(dataMaster) {
  var simulateClick = function simulateClick(elem) {
    // Create our event (with options)
    var evt = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    }); // If cancelled, don't dispatch our event

    var canceled = !elem.dispatchEvent(evt);
  };

  var attributeTailwind = {
    'height': 'h',
    'width': 'w',
    'min-height': 'min-h',
    'min-width': 'min-w',
    'max-height': 'max-h',
    'max-width': 'max-w',
    'margin': 'm',
    'margin-top': 'mt',
    'margin-right': 'mr',
    'margin-bottom': 'mb',
    'margin-left': 'ml',
    'padding': 'p',
    'padding-top': 'pt',
    'padding-right': 'pr',
    'padding-bottom': 'pb',
    'padding-left': 'pl',
    'border': 'b',
    'border-top': 'bt',
    'border-right': 'br',
    'border-bottom': 'bb',
    'border-left': 'bl',
    'border-radius': 'rounded',
    'border-top-left-radius': 'rounded-tl',
    'border-top-right-radius': 'rounded-tr',
    'border-bottom-left-radius': 'rounded-bl',
    'border-bottom-right-radius': 'rounded-br',
    'border-style': 'border-style',
    'border-width': 'border-width',
    'border-color': 'border-color'
  };
  document.getElementById('input-tw-search').addEventListener('click', function (e) {
    e.preventDefault();
    this.focus();
  });
  var suggestions = ["Channel", "CodingLab", "CodingNepal", "YouTube", "YouTuber", "YouTube Channel", "Blogger", "Bollywood", "Vlogger", "Vechiles", "Facebook", "Freelancer", "Facebook Page", "Designer", "Developer", "Web Designer", "Web Developer", "Login Form in HTML & CSS", "How to learn HTML & CSS", "How to learn JavaScript", "How to became Freelancer", "How to became Web Designer", "How to start Gaming Channel", "How to start YouTube Channel", "What does HTML stands for?", "What does CSS stands for?"];

  function addEvent(parent, evt, selector, handler) {
    parent.addEventListener(evt, function (event) {
      if (event.target.matches(selector + ', ' + selector + ' *')) {
        handler.apply(event.target.closest(selector), arguments);
      }
    }, false);
  } // getting all required elements


  var searchWrapper = document.querySelector(".search-input");
  var inputBox = searchWrapper.querySelector(".search-input input");
  var suggBox = searchWrapper.querySelector(".autocom-box");
  var icon = searchWrapper.querySelector(".icon");
  var linkTag = searchWrapper.querySelector("a");
  var webLink; // if user press any key and release

  inputBox.onkeyup = function (e) {
    var userData = e.target.value; //user enetered data

    var emptyArray = [];

    if (userData) {
      emptyArray = dataMaster.filter(function (data) {
        //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
        return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
      });
      emptyArray = emptyArray.map(function (data) {
        // passing return data inside li tag
        return data = '<li>' + data + '</li>';
      });
      searchWrapper.classList.add("active"); //show autocomplete box

      showdataMaster(emptyArray);
      var allList = suggBox.querySelectorAll("li");

      for (var i = 0; i < allList.length; i++) {
        //adding onclick attribute in all li tag
        //allList[i].setAttribute("onclick", "select(this)");
        allList[i].classList.add("select-item");
        allList[i].setAttribute("data-value", allList[i].innerHTML);

        if (allList[i].textContent.indexOf('bg-') > -1) {
          var span = document.createElement('span');
          var clases = allList[i].textContent;
          span.classList.add(clases, 'w-3', 'h-3', 'rounded', 'flex', 'ml-auto');
          allList[i].appendChild(span);
        }
      }
    } else {
      searchWrapper.classList.remove("active"); //hide autocomplete box
    }
  };

  document.getElementById('input-tw-search').addEventListener('keydown', function (e) {
    if (e.which === 38 || e.which === 40) {
      e.preventDefault();
    }
  });
  document.onkeydown = checkKey;
  document.onkeyup = checkKeypress;

  function checkKeypress(e) {
    document.getElementById('input-tw-search').addEventListener('keydown', function (e) {
      if (e.which === 38 || e.which === 40) {
        e.preventDefault();
      }
    });
    e = e || window.event;

    if (e.keyCode == '40') {
      document.querySelector('.select-item').classList.remove('active');
      document.querySelectorAll('.select-item')[indexSelect].classList.add('active');

      if (indexSelect <= document.querySelectorAll('.select-item').length) {
        indexSelect++;
      } else {}
    }

    if (e.keyCode == '38') {
      if (indexSelect == 0) {
        indexSelect = 0;
      } else {
        indexSelect--;
      }

      document.querySelector('.select-item').classList.remove('active');
      document.querySelectorAll('.select-item')[indexSelect].classList.add('active');
    }
  }

  function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '13') {
      var someLink = document.querySelector('.select-item.active');
      simulateClick(someLink);
      indexSelect == 0;
      document.querySelector('.autocom-box').innerHTML = '';
      document.querySelector('#input-tw-search').value = '';
      document.querySelector('.search-input').classList.remove('active');
    }

    if (e.keyCode == '38') {// up arrow
    } else if (e.keyCode == '40') {} else if (e.keyCode == '37') {// left arrow
    } else if (e.keyCode == '39') {// right arrow
    }
  }

  function showdataMaster(list) {
    var listData;

    if (!list.length) {
      var userValue = inputBox.value;
      listData = '<li>' + userValue + '</li>';
    } else {
      listData = list.join('');
    }

    suggBox.innerHTML = listData;
  }

  document.getElementById('input-tw-search').addEventListener('keyup', function (e) {
    if (e.target.value === '') {
      indexSelect = 0;
      document.querySelector('.autocom-box').innerHTML = '';
    }
  });
};

/***/ }),

/***/ "./node_modules/chalk/source/index.js":
/*!********************************************!*\
  !*** ./node_modules/chalk/source/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const ansiStyles = __webpack_require__(/*! ansi-styles */ "./node_modules/ansi-styles/index.js");
const {stdout: stdoutColor, stderr: stderrColor} = __webpack_require__(/*! supports-color */ "./node_modules/supports-color/browser.js");
const {
	stringReplaceAll,
	stringEncaseCRLFWithFirstIndex
} = __webpack_require__(/*! ./util */ "./node_modules/chalk/source/util.js");

const {isArray} = Array;

// `supportsColor.level` → `ansiStyles.color[name]` mapping
const levelMapping = [
	'ansi',
	'ansi',
	'ansi256',
	'ansi16m'
];

const styles = Object.create(null);

const applyOptions = (object, options = {}) => {
	if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
		throw new Error('The `level` option should be an integer from 0 to 3');
	}

	// Detect level if not set manually
	const colorLevel = stdoutColor ? stdoutColor.level : 0;
	object.level = options.level === undefined ? colorLevel : options.level;
};

class ChalkClass {
	constructor(options) {
		// eslint-disable-next-line no-constructor-return
		return chalkFactory(options);
	}
}

const chalkFactory = options => {
	const chalk = {};
	applyOptions(chalk, options);

	chalk.template = (...arguments_) => chalkTag(chalk.template, ...arguments_);

	Object.setPrototypeOf(chalk, Chalk.prototype);
	Object.setPrototypeOf(chalk.template, chalk);

	chalk.template.constructor = () => {
		throw new Error('`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.');
	};

	chalk.template.Instance = ChalkClass;

	return chalk.template;
};

function Chalk(options) {
	return chalkFactory(options);
}

for (const [styleName, style] of Object.entries(ansiStyles)) {
	styles[styleName] = {
		get() {
			const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
			Object.defineProperty(this, styleName, {value: builder});
			return builder;
		}
	};
}

styles.visible = {
	get() {
		const builder = createBuilder(this, this._styler, true);
		Object.defineProperty(this, 'visible', {value: builder});
		return builder;
	}
};

const usedModels = ['rgb', 'hex', 'keyword', 'hsl', 'hsv', 'hwb', 'ansi', 'ansi256'];

for (const model of usedModels) {
	styles[model] = {
		get() {
			const {level} = this;
			return function (...arguments_) {
				const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
				return createBuilder(this, styler, this._isEmpty);
			};
		}
	};
}

for (const model of usedModels) {
	const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
	styles[bgModel] = {
		get() {
			const {level} = this;
			return function (...arguments_) {
				const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
				return createBuilder(this, styler, this._isEmpty);
			};
		}
	};
}

const proto = Object.defineProperties(() => {}, {
	...styles,
	level: {
		enumerable: true,
		get() {
			return this._generator.level;
		},
		set(level) {
			this._generator.level = level;
		}
	}
});

const createStyler = (open, close, parent) => {
	let openAll;
	let closeAll;
	if (parent === undefined) {
		openAll = open;
		closeAll = close;
	} else {
		openAll = parent.openAll + open;
		closeAll = close + parent.closeAll;
	}

	return {
		open,
		close,
		openAll,
		closeAll,
		parent
	};
};

const createBuilder = (self, _styler, _isEmpty) => {
	const builder = (...arguments_) => {
		if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
			// Called as a template literal, for example: chalk.red`2 + 3 = {bold ${2+3}}`
			return applyStyle(builder, chalkTag(builder, ...arguments_));
		}

		// Single argument is hot path, implicit coercion is faster than anything
		// eslint-disable-next-line no-implicit-coercion
		return applyStyle(builder, (arguments_.length === 1) ? ('' + arguments_[0]) : arguments_.join(' '));
	};

	// We alter the prototype because we must return a function, but there is
	// no way to create a function with a different prototype
	Object.setPrototypeOf(builder, proto);

	builder._generator = self;
	builder._styler = _styler;
	builder._isEmpty = _isEmpty;

	return builder;
};

const applyStyle = (self, string) => {
	if (self.level <= 0 || !string) {
		return self._isEmpty ? '' : string;
	}

	let styler = self._styler;

	if (styler === undefined) {
		return string;
	}

	const {openAll, closeAll} = styler;
	if (string.indexOf('\u001B') !== -1) {
		while (styler !== undefined) {
			// Replace any instances already present with a re-opening code
			// otherwise only the part of the string until said closing code
			// will be colored, and the rest will simply be 'plain'.
			string = stringReplaceAll(string, styler.close, styler.open);

			styler = styler.parent;
		}
	}

	// We can move both next actions out of loop, because remaining actions in loop won't have
	// any/visible effect on parts we add here. Close the styling before a linebreak and reopen
	// after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
	const lfIndex = string.indexOf('\n');
	if (lfIndex !== -1) {
		string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
	}

	return openAll + string + closeAll;
};

let template;
const chalkTag = (chalk, ...strings) => {
	const [firstString] = strings;

	if (!isArray(firstString) || !isArray(firstString.raw)) {
		// If chalk() was called by itself or with a string,
		// return the string itself as a string.
		return strings.join(' ');
	}

	const arguments_ = strings.slice(1);
	const parts = [firstString.raw[0]];

	for (let i = 1; i < firstString.length; i++) {
		parts.push(
			String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'),
			String(firstString.raw[i])
		);
	}

	if (template === undefined) {
		template = __webpack_require__(/*! ./templates */ "./node_modules/chalk/source/templates.js");
	}

	return template(chalk, parts.join(''));
};

Object.defineProperties(Chalk.prototype, styles);

const chalk = Chalk(); // eslint-disable-line new-cap
chalk.supportsColor = stdoutColor;
chalk.stderr = Chalk({level: stderrColor ? stderrColor.level : 0}); // eslint-disable-line new-cap
chalk.stderr.supportsColor = stderrColor;

module.exports = chalk;


/***/ }),

/***/ "./node_modules/chalk/source/templates.js":
/*!************************************************!*\
  !*** ./node_modules/chalk/source/templates.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";

const TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;

const ESCAPES = new Map([
	['n', '\n'],
	['r', '\r'],
	['t', '\t'],
	['b', '\b'],
	['f', '\f'],
	['v', '\v'],
	['0', '\0'],
	['\\', '\\'],
	['e', '\u001B'],
	['a', '\u0007']
]);

function unescape(c) {
	const u = c[0] === 'u';
	const bracket = c[1] === '{';

	if ((u && !bracket && c.length === 5) || (c[0] === 'x' && c.length === 3)) {
		return String.fromCharCode(parseInt(c.slice(1), 16));
	}

	if (u && bracket) {
		return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
	}

	return ESCAPES.get(c) || c;
}

function parseArguments(name, arguments_) {
	const results = [];
	const chunks = arguments_.trim().split(/\s*,\s*/g);
	let matches;

	for (const chunk of chunks) {
		const number = Number(chunk);
		if (!Number.isNaN(number)) {
			results.push(number);
		} else if ((matches = chunk.match(STRING_REGEX))) {
			results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
		} else {
			throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
		}
	}

	return results;
}

function parseStyle(style) {
	STYLE_REGEX.lastIndex = 0;

	const results = [];
	let matches;

	while ((matches = STYLE_REGEX.exec(style)) !== null) {
		const name = matches[1];

		if (matches[2]) {
			const args = parseArguments(name, matches[2]);
			results.push([name].concat(args));
		} else {
			results.push([name]);
		}
	}

	return results;
}

function buildStyle(chalk, styles) {
	const enabled = {};

	for (const layer of styles) {
		for (const style of layer.styles) {
			enabled[style[0]] = layer.inverse ? null : style.slice(1);
		}
	}

	let current = chalk;
	for (const [styleName, styles] of Object.entries(enabled)) {
		if (!Array.isArray(styles)) {
			continue;
		}

		if (!(styleName in current)) {
			throw new Error(`Unknown Chalk style: ${styleName}`);
		}

		current = styles.length > 0 ? current[styleName](...styles) : current[styleName];
	}

	return current;
}

module.exports = (chalk, temporary) => {
	const styles = [];
	const chunks = [];
	let chunk = [];

	// eslint-disable-next-line max-params
	temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
		if (escapeCharacter) {
			chunk.push(unescape(escapeCharacter));
		} else if (style) {
			const string = chunk.join('');
			chunk = [];
			chunks.push(styles.length === 0 ? string : buildStyle(chalk, styles)(string));
			styles.push({inverse, styles: parseStyle(style)});
		} else if (close) {
			if (styles.length === 0) {
				throw new Error('Found extraneous } in Chalk template literal');
			}

			chunks.push(buildStyle(chalk, styles)(chunk.join('')));
			chunk = [];
			styles.pop();
		} else {
			chunk.push(character);
		}
	});

	chunks.push(chunk.join(''));

	if (styles.length > 0) {
		const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
		throw new Error(errMessage);
	}

	return chunks.join('');
};


/***/ }),

/***/ "./node_modules/chalk/source/util.js":
/*!*******************************************!*\
  !*** ./node_modules/chalk/source/util.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


const stringReplaceAll = (string, substring, replacer) => {
	let index = string.indexOf(substring);
	if (index === -1) {
		return string;
	}

	const substringLength = substring.length;
	let endIndex = 0;
	let returnValue = '';
	do {
		returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
		endIndex = index + substringLength;
		index = string.indexOf(substring, endIndex);
	} while (index !== -1);

	returnValue += string.substr(endIndex);
	return returnValue;
};

const stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index) => {
	let endIndex = 0;
	let returnValue = '';
	do {
		const gotCR = string[index - 1] === '\r';
		returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? '\r\n' : '\n') + postfix;
		endIndex = index + 1;
		index = string.indexOf('\n', endIndex);
	} while (index !== -1);

	returnValue += string.substr(endIndex);
	return returnValue;
};

module.exports = {
	stringReplaceAll,
	stringEncaseCRLFWithFirstIndex
};


/***/ }),

/***/ "./node_modules/color-convert/conversions.js":
/*!***************************************************!*\
  !*** ./node_modules/color-convert/conversions.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* MIT license */
/* eslint-disable no-mixed-operators */
const cssKeywords = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

const reverseKeywords = {};
for (const key of Object.keys(cssKeywords)) {
	reverseKeywords[cssKeywords[key]] = key;
}

const convert = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

module.exports = convert;

// Hide .channels and .labels properties
for (const model of Object.keys(convert)) {
	if (!('channels' in convert[model])) {
		throw new Error('missing channels property: ' + model);
	}

	if (!('labels' in convert[model])) {
		throw new Error('missing channel labels property: ' + model);
	}

	if (convert[model].labels.length !== convert[model].channels) {
		throw new Error('channel and label counts mismatch: ' + model);
	}

	const {channels, labels} = convert[model];
	delete convert[model].channels;
	delete convert[model].labels;
	Object.defineProperty(convert[model], 'channels', {value: channels});
	Object.defineProperty(convert[model], 'labels', {value: labels});
}

convert.rgb.hsl = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const min = Math.min(r, g, b);
	const max = Math.max(r, g, b);
	const delta = max - min;
	let h;
	let s;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	const l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	let rdif;
	let gdif;
	let bdif;
	let h;
	let s;

	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const v = Math.max(r, g, b);
	const diff = v - Math.min(r, g, b);
	const diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = 0;
		s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}

		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	const r = rgb[0];
	const g = rgb[1];
	let b = rgb[2];
	const h = convert.rgb.hsl(rgb)[0];
	const w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;

	const k = Math.min(1 - r, 1 - g, 1 - b);
	const c = (1 - r - k) / (1 - k) || 0;
	const m = (1 - g - k) / (1 - k) || 0;
	const y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

function comparativeDistance(x, y) {
	/*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/
	return (
		((x[0] - y[0]) ** 2) +
		((x[1] - y[1]) ** 2) +
		((x[2] - y[2]) ** 2)
	);
}

convert.rgb.keyword = function (rgb) {
	const reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	let currentClosestDistance = Infinity;
	let currentClosestKeyword;

	for (const keyword of Object.keys(cssKeywords)) {
		const value = cssKeywords[keyword];

		// Compute comparative distance
		const distance = comparativeDistance(rgb, value);

		// Check if its less, if so set as closest
		if (distance < currentClosestDistance) {
			currentClosestDistance = distance;
			currentClosestKeyword = keyword;
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	let r = rgb[0] / 255;
	let g = rgb[1] / 255;
	let b = rgb[2] / 255;

	// Assume sRGB
	r = r > 0.04045 ? (((r + 0.055) / 1.055) ** 2.4) : (r / 12.92);
	g = g > 0.04045 ? (((g + 0.055) / 1.055) ** 2.4) : (g / 12.92);
	b = b > 0.04045 ? (((b + 0.055) / 1.055) ** 2.4) : (b / 12.92);

	const x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	const y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	const z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	const xyz = convert.rgb.xyz(rgb);
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	const h = hsl[0] / 360;
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;
	let t2;
	let t3;
	let val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	const t1 = 2 * l - t2;

	const rgb = [0, 0, 0];
	for (let i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}

		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	const h = hsl[0];
	let s = hsl[1] / 100;
	let l = hsl[2] / 100;
	let smin = s;
	const lmin = Math.max(l, 0.01);

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	const v = (l + s) / 2;
	const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	const h = hsv[0] / 60;
	const s = hsv[1] / 100;
	let v = hsv[2] / 100;
	const hi = Math.floor(h) % 6;

	const f = h - Math.floor(h);
	const p = 255 * v * (1 - s);
	const q = 255 * v * (1 - (s * f));
	const t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	const h = hsv[0];
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;
	const vmin = Math.max(v, 0.01);
	let sl;
	let l;

	l = (2 - s) * v;
	const lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	const h = hwb[0] / 360;
	let wh = hwb[1] / 100;
	let bl = hwb[2] / 100;
	const ratio = wh + bl;
	let f;

	// Wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	const i = Math.floor(6 * h);
	const v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	const n = wh + f * (v - wh); // Linear interpolation

	let r;
	let g;
	let b;
	/* eslint-disable max-statements-per-line,no-multi-spaces */
	switch (i) {
		default:
		case 6:
		case 0: r = v;  g = n;  b = wh; break;
		case 1: r = n;  g = v;  b = wh; break;
		case 2: r = wh; g = v;  b = n; break;
		case 3: r = wh; g = n;  b = v; break;
		case 4: r = n;  g = wh; b = v; break;
		case 5: r = v;  g = wh; b = n; break;
	}
	/* eslint-enable max-statements-per-line,no-multi-spaces */

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	const c = cmyk[0] / 100;
	const m = cmyk[1] / 100;
	const y = cmyk[2] / 100;
	const k = cmyk[3] / 100;

	const r = 1 - Math.min(1, c * (1 - k) + k);
	const g = 1 - Math.min(1, m * (1 - k) + k);
	const b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	const x = xyz[0] / 100;
	const y = xyz[1] / 100;
	const z = xyz[2] / 100;
	let r;
	let g;
	let b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// Assume sRGB
	r = r > 0.0031308
		? ((1.055 * (r ** (1.0 / 2.4))) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * (g ** (1.0 / 2.4))) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * (b ** (1.0 / 2.4))) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let x;
	let y;
	let z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	const y2 = y ** 3;
	const x2 = x ** 3;
	const z2 = z ** 3;
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let h;

	const hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	const c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	const l = lch[0];
	const c = lch[1];
	const h = lch[2];

	const hr = h / 360 * 2 * Math.PI;
	const a = c * Math.cos(hr);
	const b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args, saturation = null) {
	const [r, g, b] = args;
	let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	let ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// Optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	const r = args[0];
	const g = args[1];
	const b = args[2];

	// We use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	const ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	let color = args % 10;

	// Handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	const mult = (~~(args > 50) + 1) * 0.5;
	const r = ((color & 1) * mult) * 255;
	const g = (((color >> 1) & 1) * mult) * 255;
	const b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// Handle greyscale
	if (args >= 232) {
		const c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	let rem;
	const r = Math.floor(args / 36) / 5 * 255;
	const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	const b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	const integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	let colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(char => {
			return char + char;
		}).join('');
	}

	const integer = parseInt(colorString, 16);
	const r = (integer >> 16) & 0xFF;
	const g = (integer >> 8) & 0xFF;
	const b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const max = Math.max(Math.max(r, g), b);
	const min = Math.min(Math.min(r, g), b);
	const chroma = (max - min);
	let grayscale;
	let hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;

	const c = l < 0.5 ? (2.0 * s * l) : (2.0 * s * (1.0 - l));

	let f = 0;
	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;

	const c = s * v;
	let f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	const h = hcg[0] / 360;
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	const pure = [0, 0, 0];
	const hi = (h % 1) * 6;
	const v = hi % 1;
	const w = 1 - v;
	let mg = 0;

	/* eslint-disable max-statements-per-line */
	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}
	/* eslint-enable max-statements-per-line */

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const v = c + g * (1.0 - c);
	let f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const l = g * (1.0 - c) + 0.5 * c;
	let s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;
	const v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	const w = hwb[1] / 100;
	const b = hwb[2] / 100;
	const v = 1 - b;
	const c = v - w;
	let g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hsv = convert.gray.hsl;

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	const val = Math.round(gray[0] / 100 * 255) & 0xFF;
	const integer = (val << 16) + (val << 8) + val;

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),

/***/ "./node_modules/color-convert/index.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");
const route = __webpack_require__(/*! ./route */ "./node_modules/color-convert/route.js");

const convert = {};

const models = Object.keys(conversions);

function wrapRaw(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];
		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		return fn(args);
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];

		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		const result = fn(args);

		// We're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (let len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(fromModel => {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	const routes = route(fromModel);
	const routeModels = Object.keys(routes);

	routeModels.forEach(toModel => {
		const fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),

/***/ "./node_modules/color-convert/route.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/route.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");

/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	const graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	const models = Object.keys(conversions);

	for (let len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	const graph = buildGraph();
	const queue = [fromModel]; // Unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		const current = queue.pop();
		const adjacents = Object.keys(conversions[current]);

		for (let len = adjacents.length, i = 0; i < len; i++) {
			const adjacent = adjacents[i];
			const node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	const path = [graph[toModel].parent, toModel];
	let fn = conversions[graph[toModel].parent][toModel];

	let cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	const graph = deriveBFS(fromModel);
	const conversion = {};

	const models = Object.keys(graph);
	for (let len = models.length, i = 0; i < len; i++) {
		const toModel = models[i];
		const node = graph[toModel];

		if (node.parent === null) {
			// No possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/supports-color/browser.js":
/*!************************************************!*\
  !*** ./node_modules/supports-color/browser.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";

module.exports = {
	stdout: false,
	stderr: false
};


/***/ }),

/***/ "./node_modules/tailwindcss/lib/corePluginList.js":
/*!********************************************************!*\
  !*** ./node_modules/tailwindcss/lib/corePluginList.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _default = [
    "preflight",
    "container",
    "accessibility",
    "pointerEvents",
    "visibility",
    "position",
    "inset",
    "isolation",
    "zIndex",
    "order",
    "gridColumn",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRow",
    "gridRowStart",
    "gridRowEnd",
    "float",
    "clear",
    "margin",
    "boxSizing",
    "display",
    "aspectRatio",
    "height",
    "maxHeight",
    "minHeight",
    "width",
    "minWidth",
    "maxWidth",
    "flex",
    "flexShrink",
    "flexGrow",
    "flexBasis",
    "tableLayout",
    "borderCollapse",
    "transformOrigin",
    "translate",
    "rotate",
    "skew",
    "scale",
    "transform",
    "animation",
    "cursor",
    "touchAction",
    "userSelect",
    "resize",
    "scrollSnapType",
    "scrollSnapAlign",
    "scrollSnapStop",
    "scrollMargin",
    "scrollPadding",
    "listStylePosition",
    "listStyleType",
    "appearance",
    "columns",
    "breakBefore",
    "breakInside",
    "breakAfter",
    "gridAutoColumns",
    "gridAutoFlow",
    "gridAutoRows",
    "gridTemplateColumns",
    "gridTemplateRows",
    "flexDirection",
    "flexWrap",
    "placeContent",
    "placeItems",
    "alignContent",
    "alignItems",
    "justifyContent",
    "justifyItems",
    "gap",
    "space",
    "divideWidth",
    "divideStyle",
    "divideColor",
    "divideOpacity",
    "placeSelf",
    "alignSelf",
    "justifySelf",
    "overflow",
    "overscrollBehavior",
    "scrollBehavior",
    "textOverflow",
    "whitespace",
    "wordBreak",
    "borderRadius",
    "borderWidth",
    "borderStyle",
    "borderColor",
    "borderOpacity",
    "backgroundColor",
    "backgroundOpacity",
    "backgroundImage",
    "gradientColorStops",
    "boxDecorationBreak",
    "backgroundSize",
    "backgroundAttachment",
    "backgroundClip",
    "backgroundPosition",
    "backgroundRepeat",
    "backgroundOrigin",
    "fill",
    "stroke",
    "strokeWidth",
    "objectFit",
    "objectPosition",
    "padding",
    "textAlign",
    "textIndent",
    "verticalAlign",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "textTransform",
    "fontStyle",
    "fontVariantNumeric",
    "lineHeight",
    "letterSpacing",
    "textColor",
    "textOpacity",
    "textDecoration",
    "textDecorationColor",
    "textDecorationStyle",
    "textDecorationThickness",
    "textUnderlineOffset",
    "fontSmoothing",
    "placeholderColor",
    "placeholderOpacity",
    "caretColor",
    "accentColor",
    "opacity",
    "backgroundBlendMode",
    "mixBlendMode",
    "boxShadow",
    "boxShadowColor",
    "outlineStyle",
    "outlineWidth",
    "outlineOffset",
    "outlineColor",
    "ringWidth",
    "ringColor",
    "ringOpacity",
    "ringOffsetWidth",
    "ringOffsetColor",
    "blur",
    "brightness",
    "contrast",
    "dropShadow",
    "grayscale",
    "hueRotate",
    "invert",
    "saturate",
    "sepia",
    "filter",
    "backdropBlur",
    "backdropBrightness",
    "backdropContrast",
    "backdropGrayscale",
    "backdropHueRotate",
    "backdropInvert",
    "backdropOpacity",
    "backdropSaturate",
    "backdropSepia",
    "backdropFilter",
    "transitionProperty",
    "transitionDelay",
    "transitionDuration",
    "transitionTimingFunction",
    "willChange",
    "content"
];
exports["default"] = _default;


/***/ }),

/***/ "./node_modules/tailwindcss/lib/featureFlags.js":
/*!******************************************************!*\
  !*** ./node_modules/tailwindcss/lib/featureFlags.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.flagEnabled = flagEnabled;
exports.issueFlagNotices = issueFlagNotices;
exports["default"] = void 0;
var _chalk = _interopRequireDefault(__webpack_require__(/*! chalk */ "./node_modules/chalk/source/index.js"));
var _log = _interopRequireDefault(__webpack_require__(/*! ./util/log */ "./node_modules/tailwindcss/lib/util/log.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let defaults = {
    optimizeUniversalDefaults: false
};
let featureFlags = {
    future: [],
    experimental: [
        'optimizeUniversalDefaults'
    ]
};
function flagEnabled(config, flag) {
    if (featureFlags.future.includes(flag)) {
        var ref;
        var ref1, ref2;
        return config.future === 'all' || ((ref2 = (ref1 = config === null || config === void 0 ? void 0 : (ref = config.future) === null || ref === void 0 ? void 0 : ref[flag]) !== null && ref1 !== void 0 ? ref1 : defaults[flag]) !== null && ref2 !== void 0 ? ref2 : false);
    }
    if (featureFlags.experimental.includes(flag)) {
        var ref3;
        var ref4, ref5;
        return config.experimental === 'all' || ((ref5 = (ref4 = config === null || config === void 0 ? void 0 : (ref3 = config.experimental) === null || ref3 === void 0 ? void 0 : ref3[flag]) !== null && ref4 !== void 0 ? ref4 : defaults[flag]) !== null && ref5 !== void 0 ? ref5 : false);
    }
    return false;
}
function experimentalFlagsEnabled(config) {
    if (config.experimental === 'all') {
        return featureFlags.experimental;
    }
    var ref;
    return Object.keys((ref = config === null || config === void 0 ? void 0 : config.experimental) !== null && ref !== void 0 ? ref : {}).filter((flag)=>featureFlags.experimental.includes(flag) && config.experimental[flag]
    );
}
function issueFlagNotices(config) {
    if (({"NODE_ENV":"development"}).JEST_WORKER_ID !== undefined) {
        return;
    }
    if (experimentalFlagsEnabled(config).length > 0) {
        let changes = experimentalFlagsEnabled(config).map((s)=>_chalk.default.yellow(s)
        ).join(', ');
        _log.default.warn('experimental-flags-enabled', [
            `You have enabled experimental features: ${changes}`,
            'Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time.', 
        ]);
    }
}
var _default = featureFlags;
exports["default"] = _default;


/***/ }),

/***/ "./node_modules/tailwindcss/lib/public/colors.js":
/*!*******************************************************!*\
  !*** ./node_modules/tailwindcss/lib/public/colors.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _log = _interopRequireDefault(__webpack_require__(/*! ../util/log */ "./node_modules/tailwindcss/lib/util/log.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function warn({ version , from , to  }) {
    _log.default.warn(`${from}-color-renamed`, [
        `As of Tailwind CSS ${version}, \`${from}\` has been renamed to \`${to}\`.`,
        'Update your configuration file to silence this warning.', 
    ]);
}
var _default = {
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a'
    },
    gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827'
    },
    zinc: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b'
    },
    neutral: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717'
    },
    stone: {
        50: '#fafaf9',
        100: '#f5f5f4',
        200: '#e7e5e4',
        300: '#d6d3d1',
        400: '#a8a29e',
        500: '#78716c',
        600: '#57534e',
        700: '#44403c',
        800: '#292524',
        900: '#1c1917'
    },
    red: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d'
    },
    orange: {
        50: '#fff7ed',
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316',
        600: '#ea580c',
        700: '#c2410c',
        800: '#9a3412',
        900: '#7c2d12'
    },
    amber: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f'
    },
    yellow: {
        50: '#fefce8',
        100: '#fef9c3',
        200: '#fef08a',
        300: '#fde047',
        400: '#facc15',
        500: '#eab308',
        600: '#ca8a04',
        700: '#a16207',
        800: '#854d0e',
        900: '#713f12'
    },
    lime: {
        50: '#f7fee7',
        100: '#ecfccb',
        200: '#d9f99d',
        300: '#bef264',
        400: '#a3e635',
        500: '#84cc16',
        600: '#65a30d',
        700: '#4d7c0f',
        800: '#3f6212',
        900: '#365314'
    },
    green: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d'
    },
    emerald: {
        50: '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981',
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b'
    },
    teal: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#5eead4',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a'
    },
    cyan: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63'
    },
    sky: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e'
    },
    blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a'
    },
    indigo: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81'
    },
    violet: {
        50: '#f5f3ff',
        100: '#ede9fe',
        200: '#ddd6fe',
        300: '#c4b5fd',
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95'
    },
    purple: {
        50: '#faf5ff',
        100: '#f3e8ff',
        200: '#e9d5ff',
        300: '#d8b4fe',
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7e22ce',
        800: '#6b21a8',
        900: '#581c87'
    },
    fuchsia: {
        50: '#fdf4ff',
        100: '#fae8ff',
        200: '#f5d0fe',
        300: '#f0abfc',
        400: '#e879f9',
        500: '#d946ef',
        600: '#c026d3',
        700: '#a21caf',
        800: '#86198f',
        900: '#701a75'
    },
    pink: {
        50: '#fdf2f8',
        100: '#fce7f3',
        200: '#fbcfe8',
        300: '#f9a8d4',
        400: '#f472b6',
        500: '#ec4899',
        600: '#db2777',
        700: '#be185d',
        800: '#9d174d',
        900: '#831843'
    },
    rose: {
        50: '#fff1f2',
        100: '#ffe4e6',
        200: '#fecdd3',
        300: '#fda4af',
        400: '#fb7185',
        500: '#f43f5e',
        600: '#e11d48',
        700: '#be123c',
        800: '#9f1239',
        900: '#881337'
    },
    get lightBlue () {
        warn({
            version: 'v2.2',
            from: 'lightBlue',
            to: 'sky'
        });
        return this.sky;
    },
    get warmGray () {
        warn({
            version: 'v3.0',
            from: 'warmGray',
            to: 'stone'
        });
        return this.stone;
    },
    get trueGray () {
        warn({
            version: 'v3.0',
            from: 'trueGray',
            to: 'neutral'
        });
        return this.neutral;
    },
    get coolGray () {
        warn({
            version: 'v3.0',
            from: 'coolGray',
            to: 'gray'
        });
        return this.gray;
    },
    get blueGray () {
        warn({
            version: 'v3.0',
            from: 'blueGray',
            to: 'slate'
        });
        return this.slate;
    }
};
exports["default"] = _default;


/***/ }),

/***/ "./node_modules/tailwindcss/lib/public/resolve-config.js":
/*!***************************************************************!*\
  !*** ./node_modules/tailwindcss/lib/public/resolve-config.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = resolveConfig;
var _resolveConfig = _interopRequireDefault(__webpack_require__(/*! ../util/resolveConfig */ "./node_modules/tailwindcss/lib/util/resolveConfig.js"));
var _getAllConfigs = _interopRequireDefault(__webpack_require__(/*! ../util/getAllConfigs */ "./node_modules/tailwindcss/lib/util/getAllConfigs.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function resolveConfig(...configs) {
    let [, ...defaultConfigs] = (0, _getAllConfigs).default(configs[0]);
    return (0, _resolveConfig).default([
        ...configs,
        ...defaultConfigs
    ]);
}


/***/ }),

/***/ "./node_modules/tailwindcss/lib/util/cloneDeep.js":
/*!********************************************************!*\
  !*** ./node_modules/tailwindcss/lib/util/cloneDeep.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.cloneDeep = cloneDeep;
function cloneDeep(value) {
    if (Array.isArray(value)) {
        return value.map((child)=>cloneDeep(child)
        );
    }
    if (typeof value === 'object' && value !== null) {
        return Object.fromEntries(Object.entries(value).map(([k, v])=>[
                k,
                cloneDeep(v)
            ]
        ));
    }
    return value;
}


/***/ }),

/***/ "./node_modules/tailwindcss/lib/util/configurePlugins.js":
/*!***************************************************************!*\
  !*** ./node_modules/tailwindcss/lib/util/configurePlugins.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = _default;
function _default(pluginConfig, plugins) {
    if (pluginConfig === undefined) {
        return plugins;
    }
    const pluginNames = Array.isArray(pluginConfig) ? pluginConfig : [
        ...new Set(plugins.filter((pluginName)=>{
            return pluginConfig !== false && pluginConfig[pluginName] !== false;
        }).concat(Object.keys(pluginConfig).filter((pluginName)=>{
            return pluginConfig[pluginName] !== false;
        }))), 
    ];
    return pluginNames;
}


/***/ }),

/***/ "./node_modules/tailwindcss/lib/util/defaults.js":
/*!*******************************************************!*\
  !*** ./node_modules/tailwindcss/lib/util/defaults.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.defaults = defaults;
function defaults(target, ...sources) {
    for (let source of sources){
        for(let k in source){
            var ref;
            if (!(target === null || target === void 0 ? void 0 : (ref = target.hasOwnProperty) === null || ref === void 0 ? void 0 : ref.call(target, k))) {
                target[k] = source[k];
            }
        }
        for (let k1 of Object.getOwnPropertySymbols(source)){
            var ref1;
            if (!(target === null || target === void 0 ? void 0 : (ref1 = target.hasOwnProperty) === null || ref1 === void 0 ? void 0 : ref1.call(target, k1))) {
                target[k1] = source[k1];
            }
        }
    }
    return target;
}


/***/ }),

/***/ "./node_modules/tailwindcss/lib/util/getAllConfigs.js":
/*!************************************************************!*\
  !*** ./node_modules/tailwindcss/lib/util/getAllConfigs.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = getAllConfigs;
var _defaultConfigStubJs = _interopRequireDefault(__webpack_require__(/*! ../../stubs/defaultConfig.stub.js */ "./node_modules/tailwindcss/stubs/defaultConfig.stub.js"));
var _featureFlags = __webpack_require__(/*! ../featureFlags */ "./node_modules/tailwindcss/lib/featureFlags.js");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function getAllConfigs(config) {
    var ref;
    const configs = ((ref = config === null || config === void 0 ? void 0 : config.presets) !== null && ref !== void 0 ? ref : [
        _defaultConfigStubJs.default
    ]).slice().reverse().flatMap((preset)=>getAllConfigs(preset instanceof Function ? preset() : preset)
    );
    const features = {
    };
    const experimentals = Object.keys(features).filter((feature)=>(0, _featureFlags).flagEnabled(config, feature)
    ).map((feature)=>features[feature]
    );
    return [
        config,
        ...experimentals,
        ...configs
    ];
}


/***/ }),

/***/ "./node_modules/tailwindcss/lib/util/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/tailwindcss/lib/util/isPlainObject.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = isPlainObject;
function isPlainObject(value) {
    if (Object.prototype.toString.call(value) !== '[object Object]') {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
}


/***/ }),

/***/ "./node_modules/tailwindcss/lib/util/log.js":
/*!**************************************************!*\
  !*** ./node_modules/tailwindcss/lib/util/log.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.dim = dim;
exports["default"] = void 0;
var _chalk = _interopRequireDefault(__webpack_require__(/*! chalk */ "./node_modules/chalk/source/index.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let alreadyShown = new Set();
function log(chalk, messages, key) {
    if (({"NODE_ENV":"development"}).JEST_WORKER_ID !== undefined) return;
    if (key && alreadyShown.has(key)) return;
    if (key) alreadyShown.add(key);
    console.warn('');
    messages.forEach((message)=>console.warn(chalk, '-', message)
    );
}
function dim(input) {
    return _chalk.default.dim(input);
}
var _default = {
    info (key, messages) {
        log(_chalk.default.bold.cyan('info'), ...Array.isArray(key) ? [
            key
        ] : [
            messages,
            key
        ]);
    },
    warn (key, messages) {
        log(_chalk.default.bold.yellow('warn'), ...Array.isArray(key) ? [
            key
        ] : [
            messages,
            key
        ]);
    },
    risk (key, messages) {
        log(_chalk.default.bold.magenta('risk'), ...Array.isArray(key) ? [
            key
        ] : [
            messages,
            key
        ]);
    }
};
exports["default"] = _default;


/***/ }),

/***/ "./node_modules/tailwindcss/lib/util/negateValue.js":
/*!**********************************************************!*\
  !*** ./node_modules/tailwindcss/lib/util/negateValue.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = _default;
function _default(value) {
    value = `${value}`;
    if (value === '0') {
        return '0';
    }
    // Flip sign of numbers
    if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(value)) {
        return value.replace(/^[+-]?/, (sign)=>sign === '-' ? '' : '-'
        );
    }
    if (value.includes('var(') || value.includes('calc(')) {
        return `calc(${value} * -1)`;
    }
}


/***/ }),

/***/ "./node_modules/tailwindcss/lib/util/normalizeConfig.js":
/*!**************************************************************!*\
  !*** ./node_modules/tailwindcss/lib/util/normalizeConfig.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.normalizeConfig = normalizeConfig;
var _log = _interopRequireWildcard(__webpack_require__(/*! ./log */ "./node_modules/tailwindcss/lib/util/log.js"));
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
function normalizeConfig(config) {
    // Quick structure validation
    /**
   * type FilePath = string
   * type RawFile = { raw: string, extension?: string }
   * type ExtractorFn = (content: string) => Array<string>
   * type TransformerFn = (content: string) => string
   *
   * type Content =
   *   | Array<FilePath | RawFile>
   *   | {
   *       files: Array<FilePath | RawFile>,
   *       extract?: ExtractorFn | { [extension: string]: ExtractorFn }
   *       transform?: TransformerFn | { [extension: string]: TransformerFn }
   *   }
   */ let valid = (()=>{
        // `config.purge` should not exist anymore
        if (config.purge) {
            return false;
        }
        // `config.content` should exist
        if (!config.content) {
            return false;
        }
        // `config.content` should be an object or an array
        if (!Array.isArray(config.content) && !(typeof config.content === 'object' && config.content !== null)) {
            return false;
        }
        // When `config.content` is an array, it should consist of FilePaths or RawFiles
        if (Array.isArray(config.content)) {
            return config.content.every((path)=>{
                // `path` can be a string
                if (typeof path === 'string') return true;
                // `path` can be an object { raw: string, extension?: string }
                // `raw` must be a string
                if (typeof (path === null || path === void 0 ? void 0 : path.raw) !== 'string') return false;
                // `extension` (if provided) should also be a string
                if ((path === null || path === void 0 ? void 0 : path.extension) && typeof (path === null || path === void 0 ? void 0 : path.extension) !== 'string') {
                    return false;
                }
                return true;
            });
        }
        // When `config.content` is an object
        if (typeof config.content === 'object' && config.content !== null) {
            // Only `files`, `extract` and `transform` can exist in `config.content`
            if (Object.keys(config.content).some((key)=>![
                    'files',
                    'extract',
                    'transform'
                ].includes(key)
            )) {
                return false;
            }
            // `config.content.files` should exist of FilePaths or RawFiles
            if (Array.isArray(config.content.files)) {
                if (!config.content.files.every((path)=>{
                    // `path` can be a string
                    if (typeof path === 'string') return true;
                    // `path` can be an object { raw: string, extension?: string }
                    // `raw` must be a string
                    if (typeof (path === null || path === void 0 ? void 0 : path.raw) !== 'string') return false;
                    // `extension` (if provided) should also be a string
                    if ((path === null || path === void 0 ? void 0 : path.extension) && typeof (path === null || path === void 0 ? void 0 : path.extension) !== 'string') {
                        return false;
                    }
                    return true;
                })) {
                    return false;
                }
                // `config.content.extract` is optional, and can be a Function or a Record<String, Function>
                if (typeof config.content.extract === 'object') {
                    for (let value of Object.values(config.content.extract)){
                        if (typeof value !== 'function') {
                            return false;
                        }
                    }
                } else if (!(config.content.extract === undefined || typeof config.content.extract === 'function')) {
                    return false;
                }
                // `config.content.transform` is optional, and can be a Function or a Record<String, Function>
                if (typeof config.content.transform === 'object') {
                    for (let value of Object.values(config.content.transform)){
                        if (typeof value !== 'function') {
                            return false;
                        }
                    }
                } else if (!(config.content.transform === undefined || typeof config.content.transform === 'function')) {
                    return false;
                }
            }
            return true;
        }
        return false;
    })();
    if (!valid) {
        _log.default.warn('purge-deprecation', [
            'The `purge`/`content` options have changed in Tailwind CSS v3.0.',
            'Update your configuration file to eliminate this warning.',
            'https://tailwindcss.com/docs/upgrade-guide#configure-content-sources', 
        ]);
    }
    // Normalize the `safelist`
    config.safelist = (()=>{
        var ref;
        let { content , purge , safelist  } = config;
        if (Array.isArray(safelist)) return safelist;
        if (Array.isArray(content === null || content === void 0 ? void 0 : content.safelist)) return content.safelist;
        if (Array.isArray(purge === null || purge === void 0 ? void 0 : purge.safelist)) return purge.safelist;
        if (Array.isArray(purge === null || purge === void 0 ? void 0 : (ref = purge.options) === null || ref === void 0 ? void 0 : ref.safelist)) return purge.options.safelist;
        return [];
    })();
    // Normalize prefix option
    if (typeof config.prefix === 'function') {
        _log.default.warn('prefix-function', [
            'As of Tailwind CSS v3.0, `prefix` cannot be a function.',
            'Update `prefix` in your configuration to be a string to eliminate this warning.',
            'https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function', 
        ]);
        config.prefix = '';
    } else {
        var _prefix;
        config.prefix = (_prefix = config.prefix) !== null && _prefix !== void 0 ? _prefix : '';
    }
    // Normalize the `content`
    config.content = {
        files: (()=>{
            let { content , purge  } = config;
            if (Array.isArray(purge)) return purge;
            if (Array.isArray(purge === null || purge === void 0 ? void 0 : purge.content)) return purge.content;
            if (Array.isArray(content)) return content;
            if (Array.isArray(content === null || content === void 0 ? void 0 : content.content)) return content.content;
            if (Array.isArray(content === null || content === void 0 ? void 0 : content.files)) return content.files;
            return [];
        })(),
        extract: (()=>{
            let extract = (()=>{
                var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9;
                if ((ref = config.purge) === null || ref === void 0 ? void 0 : ref.extract) return config.purge.extract;
                if ((ref1 = config.content) === null || ref1 === void 0 ? void 0 : ref1.extract) return config.content.extract;
                if ((ref2 = config.purge) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.extract) === null || ref3 === void 0 ? void 0 : ref3.DEFAULT) return config.purge.extract.DEFAULT;
                if ((ref4 = config.content) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.extract) === null || ref5 === void 0 ? void 0 : ref5.DEFAULT) return config.content.extract.DEFAULT;
                if ((ref6 = config.purge) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.options) === null || ref7 === void 0 ? void 0 : ref7.extractors) return config.purge.options.extractors;
                if ((ref8 = config.content) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.options) === null || ref9 === void 0 ? void 0 : ref9.extractors) return config.content.options.extractors;
                return {};
            })();
            let extractors = {};
            let defaultExtractor = (()=>{
                var ref, ref10, ref11, ref12;
                if ((ref = config.purge) === null || ref === void 0 ? void 0 : (ref10 = ref.options) === null || ref10 === void 0 ? void 0 : ref10.defaultExtractor) {
                    return config.purge.options.defaultExtractor;
                }
                if ((ref11 = config.content) === null || ref11 === void 0 ? void 0 : (ref12 = ref11.options) === null || ref12 === void 0 ? void 0 : ref12.defaultExtractor) {
                    return config.content.options.defaultExtractor;
                }
                return undefined;
            })();
            if (defaultExtractor !== undefined) {
                extractors.DEFAULT = defaultExtractor;
            }
            // Functions
            if (typeof extract === 'function') {
                extractors.DEFAULT = extract;
            } else if (Array.isArray(extract)) {
                for (let { extensions , extractor  } of extract !== null && extract !== void 0 ? extract : []){
                    for (let extension of extensions){
                        extractors[extension] = extractor;
                    }
                }
            } else if (typeof extract === 'object' && extract !== null) {
                Object.assign(extractors, extract);
            }
            return extractors;
        })(),
        transform: (()=>{
            let transform = (()=>{
                var ref, ref13, ref14, ref15, ref16, ref17;
                if ((ref = config.purge) === null || ref === void 0 ? void 0 : ref.transform) return config.purge.transform;
                if ((ref13 = config.content) === null || ref13 === void 0 ? void 0 : ref13.transform) return config.content.transform;
                if ((ref14 = config.purge) === null || ref14 === void 0 ? void 0 : (ref15 = ref14.transform) === null || ref15 === void 0 ? void 0 : ref15.DEFAULT) return config.purge.transform.DEFAULT;
                if ((ref16 = config.content) === null || ref16 === void 0 ? void 0 : (ref17 = ref16.transform) === null || ref17 === void 0 ? void 0 : ref17.DEFAULT) return config.content.transform.DEFAULT;
                return {};
            })();
            let transformers = {};
            if (typeof transform === 'function') {
                transformers.DEFAULT = transform;
            }
            if (typeof transform === 'object' && transform !== null) {
                Object.assign(transformers, transform);
            }
            return transformers;
        })()
    };
    // Validate globs to prevent bogus globs.
    // E.g.: `./src/*.{html}` is invalid, the `{html}` should just be `html`
    for (let file of config.content.files){
        if (typeof file === 'string' && /{([^,]*?)}/g.test(file)) {
            _log.default.warn('invalid-glob-braces', [
                `The glob pattern ${(0, _log).dim(file)} in your Tailwind CSS configuration is invalid.`,
                `Update it to ${(0, _log).dim(file.replace(/{([^,]*?)}/g, '$1'))} to silence this warning.`
            ]);
            break;
        }
    }
    if (config.content.files.length === 0) {
        _log.default.warn('content-problems', [
            'The `content` option in your Tailwind CSS configuration is missing or empty.',
            'Configure your content sources or your generated CSS will be missing styles.',
            'https://tailwindcss.com/docs/content-configuration', 
        ]);
    }
    return config;
}


/***/ }),

/***/ "./node_modules/tailwindcss/lib/util/resolveConfig.js":
/*!************************************************************!*\
  !*** ./node_modules/tailwindcss/lib/util/resolveConfig.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = resolveConfig;
var _negateValue = _interopRequireDefault(__webpack_require__(/*! ./negateValue */ "./node_modules/tailwindcss/lib/util/negateValue.js"));
var _corePluginList = _interopRequireDefault(__webpack_require__(/*! ../corePluginList */ "./node_modules/tailwindcss/lib/corePluginList.js"));
var _configurePlugins = _interopRequireDefault(__webpack_require__(/*! ./configurePlugins */ "./node_modules/tailwindcss/lib/util/configurePlugins.js"));
var _defaultConfigStub = _interopRequireDefault(__webpack_require__(/*! ../../stubs/defaultConfig.stub */ "./node_modules/tailwindcss/stubs/defaultConfig.stub.js"));
var _colors = _interopRequireDefault(__webpack_require__(/*! ../public/colors */ "./node_modules/tailwindcss/lib/public/colors.js"));
var _defaults = __webpack_require__(/*! ./defaults */ "./node_modules/tailwindcss/lib/util/defaults.js");
var _toPath = __webpack_require__(/*! ./toPath */ "./node_modules/tailwindcss/lib/util/toPath.js");
var _normalizeConfig = __webpack_require__(/*! ./normalizeConfig */ "./node_modules/tailwindcss/lib/util/normalizeConfig.js");
var _isPlainObject = _interopRequireDefault(__webpack_require__(/*! ./isPlainObject */ "./node_modules/tailwindcss/lib/util/isPlainObject.js"));
var _cloneDeep = __webpack_require__(/*! ./cloneDeep */ "./node_modules/tailwindcss/lib/util/cloneDeep.js");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isFunction(input) {
    return typeof input === 'function';
}
function isObject(input) {
    return typeof input === 'object' && input !== null;
}
function mergeWith(target, ...sources) {
    let customizer = sources.pop();
    for (let source of sources){
        for(let k in source){
            let merged = customizer(target[k], source[k]);
            if (merged === undefined) {
                if (isObject(target[k]) && isObject(source[k])) {
                    target[k] = mergeWith(target[k], source[k], customizer);
                } else {
                    target[k] = source[k];
                }
            } else {
                target[k] = merged;
            }
        }
    }
    return target;
}
const configUtils = {
    colors: _colors.default,
    negative (scale) {
        // TODO: Log that this function isn't really needed anymore?
        return Object.keys(scale).filter((key)=>scale[key] !== '0'
        ).reduce((negativeScale, key)=>{
            let negativeValue = (0, _negateValue).default(scale[key]);
            if (negativeValue !== undefined) {
                negativeScale[`-${key}`] = negativeValue;
            }
            return negativeScale;
        }, {});
    },
    breakpoints (screens) {
        return Object.keys(screens).filter((key)=>typeof screens[key] === 'string'
        ).reduce((breakpoints, key)=>({
                ...breakpoints,
                [`screen-${key}`]: screens[key]
            })
        , {});
    }
};
function value(valueToResolve, ...args) {
    return isFunction(valueToResolve) ? valueToResolve(...args) : valueToResolve;
}
function collectExtends(items) {
    return items.reduce((merged, { extend  })=>{
        return mergeWith(merged, extend, (mergedValue, extendValue)=>{
            if (mergedValue === undefined) {
                return [
                    extendValue
                ];
            }
            if (Array.isArray(mergedValue)) {
                return [
                    extendValue,
                    ...mergedValue
                ];
            }
            return [
                extendValue,
                mergedValue
            ];
        });
    }, {});
}
function mergeThemes(themes) {
    return {
        ...themes.reduce((merged, theme)=>(0, _defaults).defaults(merged, theme)
        , {}),
        // In order to resolve n config objects, we combine all of their `extend` properties
        // into arrays instead of objects so they aren't overridden.
        extend: collectExtends(themes)
    };
}
function mergeExtensionCustomizer(merged, value1) {
    // When we have an array of objects, we do want to merge it
    if (Array.isArray(merged) && isObject(merged[0])) {
        return merged.concat(value1);
    }
    // When the incoming value is an array, and the existing config is an object, prepend the existing object
    if (Array.isArray(value1) && isObject(value1[0]) && isObject(merged)) {
        return [
            merged,
            ...value1
        ];
    }
    // Override arrays (for example for font-families, box-shadows, ...)
    if (Array.isArray(value1)) {
        return value1;
    }
    // Execute default behaviour
    return undefined;
}
function mergeExtensions({ extend , ...theme }) {
    return mergeWith(theme, extend, (themeValue, extensions)=>{
        // The `extend` property is an array, so we need to check if it contains any functions
        if (!isFunction(themeValue) && !extensions.some(isFunction)) {
            return mergeWith({}, themeValue, ...extensions, mergeExtensionCustomizer);
        }
        return (resolveThemePath, utils)=>mergeWith({}, ...[
                themeValue,
                ...extensions
            ].map((e)=>value(e, resolveThemePath, utils)
            ), mergeExtensionCustomizer)
        ;
    });
}
function resolveFunctionKeys(object) {
    const resolvePath = (key, defaultValue)=>{
        const path = (0, _toPath).toPath(key);
        let index = 0;
        let val = object;
        while(val !== undefined && val !== null && index < path.length){
            val = val[path[index++]];
            val = isFunction(val) ? val(resolvePath, configUtils) : val;
        }
        if (val === undefined) {
            return defaultValue;
        }
        if ((0, _isPlainObject).default(val)) {
            return (0, _cloneDeep).cloneDeep(val);
        }
        return val;
    };
    resolvePath.theme = resolvePath;
    for(let key1 in configUtils){
        resolvePath[key1] = configUtils[key1];
    }
    return Object.keys(object).reduce((resolved, key)=>{
        return {
            ...resolved,
            [key]: isFunction(object[key]) ? object[key](resolvePath, configUtils) : object[key]
        };
    }, {});
}
function extractPluginConfigs(configs) {
    let allConfigs = [];
    configs.forEach((config)=>{
        allConfigs = [
            ...allConfigs,
            config
        ];
        var ref1;
        const plugins = (ref1 = config === null || config === void 0 ? void 0 : config.plugins) !== null && ref1 !== void 0 ? ref1 : [];
        if (plugins.length === 0) {
            return;
        }
        plugins.forEach((plugin)=>{
            if (plugin.__isOptionsFunction) {
                plugin = plugin();
            }
            var ref;
            allConfigs = [
                ...allConfigs,
                ...extractPluginConfigs([
                    (ref = plugin === null || plugin === void 0 ? void 0 : plugin.config) !== null && ref !== void 0 ? ref : {}
                ])
            ];
        });
    });
    return allConfigs;
}
function resolveCorePlugins(corePluginConfigs) {
    const result = [
        ...corePluginConfigs
    ].reduceRight((resolved, corePluginConfig)=>{
        if (isFunction(corePluginConfig)) {
            return corePluginConfig({
                corePlugins: resolved
            });
        }
        return (0, _configurePlugins).default(corePluginConfig, resolved);
    }, _corePluginList.default);
    return result;
}
function resolvePluginLists(pluginLists) {
    const result = [
        ...pluginLists
    ].reduceRight((resolved, pluginList)=>{
        return [
            ...resolved,
            ...pluginList
        ];
    }, []);
    return result;
}
function resolveConfig(configs) {
    let allConfigs = [
        ...extractPluginConfigs(configs),
        {
            prefix: '',
            important: false,
            separator: ':',
            variantOrder: _defaultConfigStub.default.variantOrder
        }, 
    ];
    var ref, ref2;
    return (0, _normalizeConfig).normalizeConfig((0, _defaults).defaults({
        theme: resolveFunctionKeys(mergeExtensions(mergeThemes(allConfigs.map((t)=>{
            return (ref = t === null || t === void 0 ? void 0 : t.theme) !== null && ref !== void 0 ? ref : {};
        })))),
        corePlugins: resolveCorePlugins(allConfigs.map((c)=>c.corePlugins
        )),
        plugins: resolvePluginLists(configs.map((c)=>{
            return (ref2 = c === null || c === void 0 ? void 0 : c.plugins) !== null && ref2 !== void 0 ? ref2 : [];
        }))
    }, ...allConfigs));
}


/***/ }),

/***/ "./node_modules/tailwindcss/lib/util/toPath.js":
/*!*****************************************************!*\
  !*** ./node_modules/tailwindcss/lib/util/toPath.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toPath = toPath;
function toPath(path) {
    if (Array.isArray(path)) return path;
    let openBrackets = path.split('[').length - 1;
    let closedBrackets = path.split(']').length - 1;
    if (openBrackets !== closedBrackets) {
        throw new Error(`Path is invalid. Has unbalanced brackets: ${path}`);
    }
    return path.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
}


/***/ }),

/***/ "./node_modules/tailwindcss/resolveConfig.js":
/*!***************************************************!*\
  !*** ./node_modules/tailwindcss/resolveConfig.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let resolveConfig = __webpack_require__(/*! ./lib/public/resolve-config */ "./node_modules/tailwindcss/lib/public/resolve-config.js")
module.exports = (resolveConfig.__esModule ? resolveConfig : { default: resolveConfig }).default


/***/ }),

/***/ "./node_modules/tailwindcss/stubs/defaultConfig.stub.js":
/*!**************************************************************!*\
  !*** ./node_modules/tailwindcss/stubs/defaultConfig.stub.js ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = {
  content: [],
  presets: [],
  darkMode: 'media', // or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    }),
    columns: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      '3xs': '16rem',
      '2xs': '18rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
    },
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
    },
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
    },
    backdropBlur: ({ theme }) => theme('blur'),
    backdropBrightness: ({ theme }) => theme('brightness'),
    backdropContrast: ({ theme }) => theme('contrast'),
    backdropGrayscale: ({ theme }) => theme('grayscale'),
    backdropHueRotate: ({ theme }) => theme('hueRotate'),
    backdropInvert: ({ theme }) => theme('invert'),
    backdropOpacity: ({ theme }) => theme('opacity'),
    backdropSaturate: ({ theme }) => theme('saturate'),
    backdropSepia: ({ theme }) => theme('sepia'),
    backgroundColor: ({ theme }) => theme('colors'),
    backgroundImage: {
      none: 'none',
      'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
      'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
      'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
    },
    backgroundOpacity: ({ theme }) => theme('opacity'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    blur: {
      0: '0',
      none: '0',
      sm: '4px',
      DEFAULT: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '40px',
      '3xl': '64px',
    },
    brightness: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
      200: '2',
    },
    borderColor: ({ theme }) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.200', 'currentColor'),
    }),
    borderOpacity: ({ theme }) => theme('opacity'),
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: 'none',
    },
    boxShadowColor: ({ theme }) => theme('colors'),
    caretColor: ({ theme }) => theme('colors'),
    accentColor: ({ theme }) => ({
      ...theme('colors'),
      auto: 'auto',
    }),
    contrast: {
      0: '0',
      50: '.5',
      75: '.75',
      100: '1',
      125: '1.25',
      150: '1.5',
      200: '2',
    },
    container: {},
    content: {
      none: 'none',
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      help: 'help',
      'not-allowed': 'not-allowed',
      none: 'none',
      'context-menu': 'context-menu',
      progress: 'progress',
      cell: 'cell',
      crosshair: 'crosshair',
      'vertical-text': 'vertical-text',
      alias: 'alias',
      copy: 'copy',
      'no-drop': 'no-drop',
      grab: 'grab',
      grabbing: 'grabbing',
      'all-scroll': 'all-scroll',
      'col-resize': 'col-resize',
      'row-resize': 'row-resize',
      'n-resize': 'n-resize',
      'e-resize': 'e-resize',
      's-resize': 's-resize',
      'w-resize': 'w-resize',
      'ne-resize': 'ne-resize',
      'nw-resize': 'nw-resize',
      'se-resize': 'se-resize',
      'sw-resize': 'sw-resize',
      'ew-resize': 'ew-resize',
      'ns-resize': 'ns-resize',
      'nesw-resize': 'nesw-resize',
      'nwse-resize': 'nwse-resize',
      'zoom-in': 'zoom-in',
      'zoom-out': 'zoom-out',
    },
    divideColor: ({ theme }) => theme('borderColor'),
    divideOpacity: ({ theme }) => theme('borderOpacity'),
    divideWidth: ({ theme }) => theme('borderWidth'),
    dropShadow: {
      sm: '0 1px 1px rgb(0 0 0 / 0.05)',
      DEFAULT: ['0 1px 2px rgb(0 0 0 / 0.1)', '0 1px 1px rgb(0 0 0 / 0.06)'],
      md: ['0 4px 3px rgb(0 0 0 / 0.07)', '0 2px 2px rgb(0 0 0 / 0.06)'],
      lg: ['0 10px 8px rgb(0 0 0 / 0.04)', '0 4px 3px rgb(0 0 0 / 0.1)'],
      xl: ['0 20px 13px rgb(0 0 0 / 0.03)', '0 8px 5px rgb(0 0 0 / 0.08)'],
      '2xl': '0 25px 25px rgb(0 0 0 / 0.15)',
      none: '0 0 #0000',
    },
    fill: ({ theme }) => theme('colors'),
    grayscale: {
      0: '0',
      DEFAULT: '100%',
    },
    hueRotate: {
      0: '0deg',
      15: '15deg',
      30: '30deg',
      60: '60deg',
      90: '90deg',
      180: '180deg',
    },
    invert: {
      0: '0',
      DEFAULT: '100%',
    },
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexBasis: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
    }),
    flexGrow: {
      0: '0',
      DEFAULT: '1',
    },
    flexShrink: {
      0: '0',
      DEFAULT: '1',
    },
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    gap: ({ theme }) => theme('spacing'),
    gradientColorStops: ({ theme }) => theme('colors'),
    gridAutoColumns: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
    gridAutoRows: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
      'span-full': '1 / -1',
    },
    gridColumnEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
    },
    gridColumnStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
    },
    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-full': '1 / -1',
    },
    gridRowStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
    },
    gridRowEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
    },
    gridTemplateColumns: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
    },
    gridTemplateRows: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
    },
    height: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    inset: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
    }),
    keyframes: {
      spin: {
        to: {
          transform: 'rotate(360deg)',
        },
      },
      ping: {
        '75%, 100%': {
          transform: 'scale(2)',
          opacity: '0',
        },
      },
      pulse: {
        '50%': {
          opacity: '.5',
        },
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
        },
      },
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    margin: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
    }),
    maxHeight: ({ theme }) => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    maxWidth: ({ theme, breakpoints }) => ({
      none: 'none',
      0: '0rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      prose: '65ch',
      ...breakpoints(theme('screens')),
    }),
    minHeight: {
      0: '0px',
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    minWidth: {
      0: '0px',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      90: '0.9',
      95: '0.95',
      100: '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    padding: ({ theme }) => theme('spacing'),
    placeholderColor: ({ theme }) => theme('colors'),
    placeholderOpacity: ({ theme }) => theme('opacity'),
    outlineColor: ({ theme }) => theme('colors'),
    outlineOffset: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    outlineWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    ringColor: ({ theme }) => ({
      DEFAULT: theme('colors.blue.500', '#3b82f6'),
      ...theme('colors'),
    }),
    ringOffsetColor: ({ theme }) => theme('colors'),
    ringOffsetWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    ringOpacity: ({ theme }) => ({
      DEFAULT: '0.5',
      ...theme('opacity'),
    }),
    ringWidth: {
      DEFAULT: '3px',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    rotate: {
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
      45: '45deg',
      90: '90deg',
      180: '180deg',
    },
    saturate: {
      0: '0',
      50: '.5',
      100: '1',
      150: '1.5',
      200: '2',
    },
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
    },
    scrollMargin: ({ theme }) => ({
      ...theme('spacing'),
    }),
    scrollPadding: ({ theme }) => theme('spacing'),
    sepia: {
      0: '0',
      DEFAULT: '100%',
    },
    skew: {
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
    },
    space: ({ theme }) => ({
      ...theme('spacing'),
    }),
    stroke: ({ theme }) => theme('colors'),
    strokeWidth: {
      0: '0',
      1: '1',
      2: '2',
    },
    textColor: ({ theme }) => theme('colors'),
    textDecorationColor: ({ theme }) => theme('colors'),
    textDecorationThickness: {
      auto: 'auto',
      'from-font': 'from-font',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    textUnderlineOffset: {
      auto: 'auto',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    textIndent: ({ theme }) => ({
      ...theme('spacing'),
    }),
    textOpacity: ({ theme }) => theme('opacity'),
    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left',
    },
    transitionDelay: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
    transitionDuration: {
      DEFAULT: '150ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
    transitionProperty: {
      none: 'none',
      all: 'all',
      DEFAULT:
        'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
      colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    translate: ({ theme }) => ({
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
    }),
    width: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    willChange: {
      auto: 'auto',
      scroll: 'scroll-position',
      contents: 'contents',
      transform: 'transform',
    },
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
    },
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'empty',
    'read-only',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled',
  ],
  plugins: [],
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************!*\
  !*** ./web/assets/encore/js/app.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tailwind_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../tailwind.config */ "./tailwind.config.js");
/* harmony import */ var _tailwind_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tailwind_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/resolveConfig */ "./node_modules/tailwindcss/resolveConfig.js");
/* harmony import */ var tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_dragElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor/dragElements */ "./web/assets/encore/js/vendor/dragElements.js");
/* harmony import */ var _vendor_clickElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor/clickElement */ "./web/assets/encore/js/vendor/clickElement.js");
/* harmony import */ var _vendor_addEvento__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor/addEvento */ "./web/assets/encore/js/vendor/addEvento.js");
/* harmony import */ var _vendor_hoverElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor/hoverElement */ "./web/assets/encore/js/vendor/hoverElement.js");
/* harmony import */ var _vendor_disabledEnabled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendor/disabledEnabled */ "./web/assets/encore/js/vendor/disabledEnabled.js");
/* harmony import */ var _vendor_searchClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vendor/searchClass */ "./web/assets/encore/js/vendor/searchClass.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








 //Agregar el cdn de tailwindcss para que funcione el plugin de inspectFlow 

var prefiexTailwind = ['sm:', 'h'];
var prefixBreakpoint = []; //aspect-w-2

var arrayListClassTailwind = {
  'aspectRatio': 'aspect'
};
var dataMaster = [];
var fullConfigTW = tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1___default()((_tailwind_config__WEBPACK_IMPORTED_MODULE_0___default()));
var userConfigTW = (_tailwind_config__WEBPACK_IMPORTED_MODULE_0___default());
Object.entries(fullConfigTW.theme.colors).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      keys = _ref2[0],
      value = _ref2[1];

  if (typeof value === 'string') {
    dataMaster.push('bg-' + keys);
  }

  if (_typeof(value) === 'object') {
    Object.entries(value).forEach(function (_ref3, index) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];

      dataMaster.push('bg-' + keys + '-' + key);
    });
  }
});
Object.entries(fullConfigTW.theme.screens).forEach(function (_ref5) {
  var _ref6 = _slicedToArray(_ref5, 2),
      key = _ref6[0],
      value = _ref6[1];

  var screen = key;
  var screenValue = value;
  prefixBreakpoint.push(screen);
}); //console.log(JSON.stringify(fullConfigTW))

function addEvent(parent, evt, selector, handler) {
  parent.addEventListener(evt, function (event) {
    if (event.target.matches(selector + ', ' + selector + ' *')) {
      handler.apply(event.target.closest(selector), arguments);
    }
  }, false);
}

var dev = true;
var initButton = document.querySelector('.init-config');
var arrowDown = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>';
var copyCss = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>';
var deleteSvg = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>';
/*console.log(userConfigTW)
console.log(fullConfigTW) */
//input-tw-search

var templateHtml = function templateHtml(text) {
  var htmlParent = document.createElement('div');
  htmlParent.classList.add('container-wrapper-config');
  htmlParent.setAttribute('dataid', 'container-' + text + '');
  htmlParent.innerHTML = '<span class="flex items-center">' + text + ' <div class="ml-auto">' + arrowDown + '</div></span>';
  htmlParent.innerHTML += '<div class="content-config"></div>';
  document.querySelector('.ContenthtmlParent').appendChild(htmlParent);
};

var space = function space() {
  var index = 0;
  templateHtml('space');

  for (var _i2 = 0, _Object$entries = Object.entries(fullConfigTW.theme.spacing); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (index === 0) {
      var mt = 'mt-3';
    } else {
      var mt = '';
    }

    var html = "<div class=\"px-2 class-row-tw flex items-center py-2 cursor-pointer text-gray-400 rounded-lg bg-opacity-10 text-sm hover:bg-gray-400 hover:bg-opacity-20      ".concat(mt, "\"> <div class=\"class-css\" data-classTW=\"m-").concat(key, "\">m-").concat(key, "</div>: <div class=\"ml-1 value-css text-\">").concat(value, "</div><div class=\"copy-css ml-auto cursor-pointer\">").concat(copyCss, "</div></div>");
    document.querySelector('.content-config').innerHTML += html;
    index++;
  }
};

var aspectRatio = function aspectRatio() {
  var name = 'aspectRatio';

  for (var i = 0; i < prefiexTailwind.length; i++) {
    for (var _i3 = 0, _Object$entries2 = Object.entries(fullConfigTW.theme.aspectRatio); _i3 < _Object$entries2.length; _i3++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];

      dataMaster.push(arrayListClassTailwind[name] + '-' + prefiexTailwind[i] + '-' + key);
    }
  }
};

var zIndex = function zIndex() {
  var name = 'z';

  for (var _i4 = 0, _Object$entries3 = Object.entries(fullConfigTW.theme.zIndex); _i4 < _Object$entries3.length; _i4++) {
    var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i4], 2),
        key = _Object$entries3$_i[0],
        value = _Object$entries3$_i[1];

    dataMaster.push(name + '-' + key);
  }

  for (var i = 0; i < prefixBreakpoint.length; i++) {
    Object.entries(fullConfigTW.theme.zIndex).forEach(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
          key = _ref8[0],
          value = _ref8[1];

      dataMaster.push(prefixBreakpoint[i] + ':' + name + '-' + key);
    });
  }
};

console.log(fullConfigTW);

function JSONDATA() {
  aspectRatio();
  zIndex();
}

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

var copyClass = [];

Array.prototype.remove = function () {
  var what,
      a = arguments,
      L = a.length,
      ax;

  while (L && this.length) {
    what = a[--L];

    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }

  return this;
};

var copyToClipboardWebpack = function copyToClipboardWebpack(str) {
  var el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

addEvent(document, 'click', '.copy-class', function (e) {
  var newClass = "";

  for (var i = 0; i < copyClass.length; i++) {
    newClass += copyClass[i] + ' ';
  }

  copyToClipboardWebpack(newClass.replace('undefined', ''));
});
addEvent(document, 'click', '.delete-class', function (e) {
  var classE = e.target.closest('.selected-item').getAttribute('data-class-select');
  document.querySelector('.click-element-over').classList.remove(classE);
  e.target.closest('.selected-item').remove();
  console.log(classE);
  copyClass.remove(classE);
  var newClass = "";

  for (var i = 0; i < copyClass.length; i++) {
    newClass += copyClass[i] + ' ';
  }

  copyToClipboardWebpack(newClass.replace('undefined', ''));
});
addEvent(document, 'click', '.select-item', function (e) {
  var searchWrapper = document.querySelector(".search-input");
  var inputBox = searchWrapper.querySelector(".search-input input");
  var suggBox = searchWrapper.querySelector(".autocom-box");
  var selectData = e.target.getAttribute("data-value");
  searchWrapper.classList.remove("active");
  var selectFor = document.querySelectorAll('.selected-item');

  for (var i = 0; i < selectFor.length; i++) {
    if (selectFor[i].getAttribute('data-class-select') === selectData) {
      break;
      console.log(selectData);
    }
  }

  console.log('paso');
  var span = document.createElement("span");
  span.classList.add('selected-item');
  span.classList.add('relative');
  span.classList.add('mr-2');
  span.setAttribute('data-class-select', selectData);
  span.innerHTML = selectData + '<span class="absolute cursor-pointer top-2/4 right-1 transform -translate-y-2/4 delete-class"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></span>';
  document.querySelector('.selected-class').appendChild(span);
  copyClass.push(selectData.replace('undefined', ''));

  if (false) { var span; }

  document.querySelector('.click-element-over').classList.add(selectData);
});
addEvent(document, 'click', '.move-inspect', function (e) {
  if (e.target.closest('.move-inspect').getAttribute('data-position') == 'left') {
    document.querySelector('.content-app-tw').style.right = '25px';
    document.querySelector('.content-app-tw').style.left = 'auto';
    e.target.closest('.move-inspect').querySelector('svg').style.transform = 'rotate(180deg)';
    e.target.closest('.move-inspect').setAttribute('data-position', 'right');
  } else {
    document.querySelector('.content-app-tw').style.setProperty('left', '25px', 'important');
    document.querySelector('.content-app-tw').style.right = '';
    e.target.closest('.move-inspect').querySelector('svg').style.transform = 'rotate(0deg)';
    e.target.closest('.move-inspect').setAttribute('data-position', 'left');
  }
});
addEvent(document, 'click', '.disabled-move', function (e) {
  document.querySelector('.content-app-tw').classList.toggle('block-drag');
});
addEvent(document, 'click', '.close-inspector', function (e) {
  document.querySelector('.content-app-tw').remove();
});
var cssFile = document.createElement('link');
cssFile.rel = 'stylesheet';
cssFile.href = "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"; // or path for file {themes('/styles/mobile.css')}

document.head.appendChild(cssFile);
var html = "\n\n<div class=\"content-app-tw block-drag aspect-1\" id=\"mydiv\">\n            <div id=\"mydivheader\" class=\"flex flex-col content-app-wrapper h-100\">\n                <nav class=\"flex items-center h-16 px-4 pt-4 text-gray-300 rounded-lg\">\n                    <div class=\" bg-gray-100 rounded-lg bg-opacity-5\">\n                        <button title=\"Move to left\" data-position='left' class=\"p-2 rounded-lg hover:text-white move-inspect\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6 fill-transparent\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\">\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 5l7 7-7 7\" />\n                            </svg>\n                        </button>\n                        <button class=\"p-2 rounded-lg text-primary disabled-move\" title=\"Pause\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6 fill-transparent\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\">\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 9l4-4 4 4m0 6l-4 4-4-4\" />\n                            </svg>\n                        </button>\n                        <button class=\"p-2 hidden rounded-lg hover:text-white\" title=\"Show grid\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"22\" height=\"22\">\n                                <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                                <path d=\"M14 10h-4v4h4v-4zm2 0v4h3v-4h-3zm-2 9v-3h-4v3h4zm2 0h3v-3h-3v3zM14 5h-4v3h4V5zm2 0v3h3V5h-3zm-8 5H5v4h3v-4zm0 9v-3H5v3h3zM8 5H5v3h3V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z\"></path>\n                            </svg>\n                        </button>\n                    </div>\n                    <div class=\"flex-grow\"></div>\n                    <a href=\"https://github.com/kholid060/inspect-css\" class=\"hidden mr-4\" target=\"_blank\" title=\"GitHub\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                            <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                            <path\n                                d=\"M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z\"\n                            ></path>\n                        </svg>\n                    </a>\n                    <button title=\"Close extension\" class=\"close-inspector\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                            <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                            <path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\"></path>\n                        </svg>\n                    </button>\n                </nav>\n                <div class=\"flex-1 py-2 my-2 overflow-auto scroll scroll-main \">\n                    <div class=\"px-4 init-config scroll\">\n                        <div class=\"flex w-full px-1 py-1 bg-gray-100 rounded-full bg-opacity-5\">\n                            <button data-id=\"live\" class=\"w-full px-2 py-2 rounded-full cursor-pointer tab-tw-inspect-btn active-tab-selector btn-tw-class\">Live</button>\n                            <button data-id=\"preview\" class=\"w-full px-2 py-2 rounded-full cursor-pointer tab-tw-inspect-btn btn-tw-class\">Preview</button>\n                        </div>\n                        <div class=\"overflow-auto live-editor-tw scroll\">\n                            <div data-id=\"live\" class=\"class-linear-tw tab-tw-inspect-content active-tw-content open\"></div>\n                            <div data-id=\"preview\" class=\"tab-tw-inspect-content\">\n                                <div class=\"search-input\">\n                                    <a href=\"\" target=\"_blank\" hidden></a>\n                                    <input type=\"text\" placeholder=\"Type to search..\" id=\"input-tw-search\"  class=\"w-full px-3 py-4 mt-5 bg-gray-900 border-0 rounded-lg input-tw-search\">\n                                    <div class=\"autocom-box\">\n                                    <!-- here list are inserted from javascript -->\n                                    </div>\n                                    <div class=\"px-3 py-3 selected-class\">\n                                    </div>\n                                    <div>\n                                        <button class=\"w-full px-5 py-4 text-white uppercase bg-blue-500 rounded copy-class text-md\">Copy class</button>\n                                    </div>\n                                    <div class=\"icon\"><i class=\"fas fa-search\"></i></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ContenthtmlParent\">\n\n                    </div>\n                </div>\n                <div class=\"flex items-center justify-between flex-shrink-0 w-full h-16 px-4 text-gray-300 bg-gray-100 rounded-lg bg-opacity-5 \">\n                    <button role=\"button\" class=\"relative p-2 transition transition-colors bg-gray-100 rounded-lg ui-button bg-opacity-5 text-primary\" title=\"Properties\">\n                        <span class=\"flex items-center justify-center h-full\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                                <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                                <path\n                                    d=\"M13 1l.001 3.062A8.004 8.004 0 0 1 19.938 11H23v2l-3.062.001a8.004 8.004 0 0 1-6.937 6.937L13 23h-2v-3.062a8.004 8.004 0 0 1-6.938-6.937L1 13v-2h3.062A8.004 8.004 0 0 1 11 4.062V1h2zm-1 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z\"\n                                ></path>\n                            </svg>\n                        </span>\n                        <!---->\n                    </button>\n                    <button role=\"button\" class=\"relative hidden p-2 transition transition-colors rounded-lg ui-button hover:text-white\" title=\"Attributes\">\n                        <span class=\"flex items-center justify-center h-full\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                                <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                                <path d=\"M16.757 3l-2 2H5v14h14V9.243l2-2V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12.757zm3.728-.9L21.9 3.516l-9.192 9.192-1.412.003-.002-1.417L20.485 2.1z\"></path>\n                            </svg>\n                        </span>\n                        <!---->\n                    </button>\n                    <button role=\"button\" class=\"relative hidden p-2 transition transition-colors rounded-lg ui-button hover:text-white\" title=\"Custom CSS\">\n                        <span class=\"flex items-center justify-center h-full\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                                <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                                <path d=\"M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z\"></path>\n                            </svg>\n                        </span>\n                        <!---->\n                    </button>\n                    <button role=\"button\" class=\"relative hidden p-2 transition transition-colors rounded-lg ui-button hover:text-white\" title=\"Graphic Assets\">\n                        <span class=\"flex items-center justify-center h-full\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                                <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                                <path\n                                    d=\"M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"\n                                ></path>\n                            </svg>\n                        </span>\n                        <!---->\n                    </button>\n                    <button role=\"button\" class=\"relative hidden p-2 transition transition-colors rounded-lg ui-button hover:text-white\" title=\"Palettes\">\n                        <span class=\"flex items-center justify-center h-full\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                                <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                                <path\n                                    d=\"M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z\"\n                                ></path>\n                            </svg>\n                        </span>\n                        <!---->\n                    </button>\n                </div>\n\n\n\n            </div>\n        </div>\n\n\n\n\n";
console.log(dataMaster);

var initTW = function initTW() {
  document.querySelector('body').insertAdjacentHTML('beforeend', html);
};

if (dev) {
  //initTW()
  var twActive = '<div class="fixed active-inspect cursor-pointer px-2 w-[36px] bg-black rounded  bottom-[36px] right-0"><img class="w-8 h-8" src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg"></div>';
  document.querySelector('body').insertAdjacentHTML('beforeend', twActive);
}

addEvent(document, 'click', '.active-inspect', function () {
  initTW();
  setTimeout(function () {
    (0,_vendor_addEvento__WEBPACK_IMPORTED_MODULE_4__.addE)();
    (0,_vendor_hoverElement__WEBPACK_IMPORTED_MODULE_5__.hoverElement)();
    (0,_vendor_searchClass__WEBPACK_IMPORTED_MODULE_7__.searchClass)();
    (0,_vendor_clickElement__WEBPACK_IMPORTED_MODULE_3__.clickElement)();
    (0,_vendor_dragElements__WEBPACK_IMPORTED_MODULE_2__.dragElement)(document.getElementById("mydiv"));
    space();
    JSONDATA();
    (0,_vendor_searchClass__WEBPACK_IMPORTED_MODULE_7__.searchClass)(dataMaster); //disabledEnabled()
    //toggleAction.activate()
  }, 3000);
});

function showCSS() {
  var element = document.querySelector('.class-row-tw');
}
})();

/******/ })()
;