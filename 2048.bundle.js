/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_start_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/start.js */ \"./src/start.js\");\n\r\n(function() {\r\n   Object(_src_start_js__WEBPACK_IMPORTED_MODULE_0__[\"startGame\"])();\r\n})();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/randomcolor/randomColor.js":
/*!*************************************************!*\
  !*** ./node_modules/randomcolor/randomColor.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {// randomColor by David Merfield under the CC0 license\n// https://github.com/davidmerfield/randomColor/\n\n;(function(root, factory) {\n\n  // Support CommonJS\n  if (true) {\n    var randomColor = factory();\n\n    // Support NodeJS & Component, which allow module.exports to be a function\n    if ( true && module && module.exports) {\n      exports = module.exports = randomColor;\n    }\n\n    // Support CommonJS 1.1.1 spec\n    exports.randomColor = randomColor;\n\n  // Support AMD\n  } else {}\n\n}(this, function() {\n\n  // Seed to get repeatable colors\n  var seed = null;\n\n  // Shared color dictionary\n  var colorDictionary = {};\n\n  // Populate the color dictionary\n  loadColorBounds();\n\n  // check if a range is taken\n  var colorRanges = [];\n\n  var randomColor = function (options) {\n\n    options = options || {};\n\n    // Check if there is a seed and ensure it's an\n    // integer. Otherwise, reset the seed value.\n    if (options.seed !== undefined && options.seed !== null && options.seed === parseInt(options.seed, 10)) {\n      seed = options.seed;\n\n    // A string was passed as a seed\n    } else if (typeof options.seed === 'string') {\n      seed = stringToInteger(options.seed);\n\n    // Something was passed as a seed but it wasn't an integer or string\n    } else if (options.seed !== undefined && options.seed !== null) {\n      throw new TypeError('The seed value must be an integer or string');\n\n    // No seed, reset the value outside.\n    } else {\n      seed = null;\n    }\n\n    var H,S,B;\n\n    // Check if we need to generate multiple colors\n    if (options.count !== null && options.count !== undefined) {\n\n      var totalColors = options.count,\n          colors = [];\n      // Value false at index i means the range i is not taken yet.\n      for (var i = 0; i < options.count; i++) {\n        colorRanges.push(false)\n        }\n      options.count = null;\n\n      while (totalColors > colors.length) {\n\n        // Since we're generating multiple colors,\n        // incremement the seed. Otherwise we'd just\n        // generate the same color each time...\n        if (seed && options.seed) options.seed += 1;\n\n        colors.push(randomColor(options));\n      }\n\n      options.count = totalColors;\n\n      return colors;\n    }\n\n    // First we pick a hue (H)\n    H = pickHue(options);\n\n    // Then use H to determine saturation (S)\n    S = pickSaturation(H, options);\n\n    // Then use S and H to determine brightness (B).\n    B = pickBrightness(H, S, options);\n\n    // Then we return the HSB color in the desired format\n    return setFormat([H,S,B], options);\n  };\n\n  function pickHue(options) {\n    if (colorRanges.length > 0) {\n      var hueRange = getRealHueRange(options.hue)\n\n      var hue = randomWithin(hueRange)\n\n      //Each of colorRanges.length ranges has a length equal approximatelly one step\n      var step = (hueRange[1] - hueRange[0]) / colorRanges.length\n\n      var j = parseInt((hue - hueRange[0]) / step)\n\n      //Check if the range j is taken\n      if (colorRanges[j] === true) {\n        j = (j + 2) % colorRanges.length\n      }\n      else {\n        colorRanges[j] = true\n           }\n\n      var min = (hueRange[0] + j * step) % 359,\n          max = (hueRange[0] + (j + 1) * step) % 359;\n\n      hueRange = [min, max]\n\n      hue = randomWithin(hueRange)\n\n      if (hue < 0) {hue = 360 + hue;}\n      return hue\n    }\n    else {\n      var hueRange = getHueRange(options.hue)\n\n      hue = randomWithin(hueRange);\n      // Instead of storing red as two seperate ranges,\n      // we group them, using negative numbers\n      if (hue < 0) {\n        hue = 360 + hue;\n      }\n\n      return hue;\n    }\n  }\n\n  function pickSaturation (hue, options) {\n\n    if (options.hue === 'monochrome') {\n      return 0;\n    }\n\n    if (options.luminosity === 'random') {\n      return randomWithin([0,100]);\n    }\n\n    var saturationRange = getSaturationRange(hue);\n\n    var sMin = saturationRange[0],\n        sMax = saturationRange[1];\n\n    switch (options.luminosity) {\n\n      case 'bright':\n        sMin = 55;\n        break;\n\n      case 'dark':\n        sMin = sMax - 10;\n        break;\n\n      case 'light':\n        sMax = 55;\n        break;\n   }\n\n    return randomWithin([sMin, sMax]);\n\n  }\n\n  function pickBrightness (H, S, options) {\n\n    var bMin = getMinimumBrightness(H, S),\n        bMax = 100;\n\n    switch (options.luminosity) {\n\n      case 'dark':\n        bMax = bMin + 20;\n        break;\n\n      case 'light':\n        bMin = (bMax + bMin)/2;\n        break;\n\n      case 'random':\n        bMin = 0;\n        bMax = 100;\n        break;\n    }\n\n    return randomWithin([bMin, bMax]);\n  }\n\n  function setFormat (hsv, options) {\n\n    switch (options.format) {\n\n      case 'hsvArray':\n        return hsv;\n\n      case 'hslArray':\n        return HSVtoHSL(hsv);\n\n      case 'hsl':\n        var hsl = HSVtoHSL(hsv);\n        return 'hsl('+hsl[0]+', '+hsl[1]+'%, '+hsl[2]+'%)';\n\n      case 'hsla':\n        var hslColor = HSVtoHSL(hsv);\n        var alpha = options.alpha || Math.random();\n        return 'hsla('+hslColor[0]+', '+hslColor[1]+'%, '+hslColor[2]+'%, ' + alpha + ')';\n\n      case 'rgbArray':\n        return HSVtoRGB(hsv);\n\n      case 'rgb':\n        var rgb = HSVtoRGB(hsv);\n        return 'rgb(' + rgb.join(', ') + ')';\n\n      case 'rgba':\n        var rgbColor = HSVtoRGB(hsv);\n        var alpha = options.alpha || Math.random();\n        return 'rgba(' + rgbColor.join(', ') + ', ' + alpha + ')';\n\n      default:\n        return HSVtoHex(hsv);\n    }\n\n  }\n\n  function getMinimumBrightness(H, S) {\n\n    var lowerBounds = getColorInfo(H).lowerBounds;\n\n    for (var i = 0; i < lowerBounds.length - 1; i++) {\n\n      var s1 = lowerBounds[i][0],\n          v1 = lowerBounds[i][1];\n\n      var s2 = lowerBounds[i+1][0],\n          v2 = lowerBounds[i+1][1];\n\n      if (S >= s1 && S <= s2) {\n\n         var m = (v2 - v1)/(s2 - s1),\n             b = v1 - m*s1;\n\n         return m*S + b;\n      }\n\n    }\n\n    return 0;\n  }\n\n  function getHueRange (colorInput) {\n\n    if (typeof parseInt(colorInput) === 'number') {\n\n      var number = parseInt(colorInput);\n\n      if (number < 360 && number > 0) {\n        return [number, number];\n      }\n\n    }\n\n    if (typeof colorInput === 'string') {\n\n      if (colorDictionary[colorInput]) {\n        var color = colorDictionary[colorInput];\n        if (color.hueRange) {return color.hueRange;}\n      } else if (colorInput.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {\n        var hue = HexToHSB(colorInput)[0];\n        return [ hue, hue ];\n      }\n    }\n\n    return [0,360];\n\n  }\n\n  function getSaturationRange (hue) {\n    return getColorInfo(hue).saturationRange;\n  }\n\n  function getColorInfo (hue) {\n\n    // Maps red colors to make picking hue easier\n    if (hue >= 334 && hue <= 360) {\n      hue-= 360;\n    }\n\n    for (var colorName in colorDictionary) {\n       var color = colorDictionary[colorName];\n       if (color.hueRange &&\n           hue >= color.hueRange[0] &&\n           hue <= color.hueRange[1]) {\n          return colorDictionary[colorName];\n       }\n    } return 'Color not found';\n  }\n\n  function randomWithin (range) {\n    if (seed === null) {\n      //generate random evenly destinct number from : https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/\n      var golden_ratio = 0.618033988749895\n      var r=Math.random()\n      r += golden_ratio\n      r %= 1\n      return Math.floor(range[0] + r*(range[1] + 1 - range[0]));\n    } else {\n      //Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/\n      var max = range[1] || 1;\n      var min = range[0] || 0;\n      seed = (seed * 9301 + 49297) % 233280;\n      var rnd = seed / 233280.0;\n      return Math.floor(min + rnd * (max - min));\n}\n  }\n\n  function HSVtoHex (hsv){\n\n    var rgb = HSVtoRGB(hsv);\n\n    function componentToHex(c) {\n        var hex = c.toString(16);\n        return hex.length == 1 ? '0' + hex : hex;\n    }\n\n    var hex = '#' + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);\n\n    return hex;\n\n  }\n\n  function defineColor (name, hueRange, lowerBounds) {\n\n    var sMin = lowerBounds[0][0],\n        sMax = lowerBounds[lowerBounds.length - 1][0],\n\n        bMin = lowerBounds[lowerBounds.length - 1][1],\n        bMax = lowerBounds[0][1];\n\n    colorDictionary[name] = {\n      hueRange: hueRange,\n      lowerBounds: lowerBounds,\n      saturationRange: [sMin, sMax],\n      brightnessRange: [bMin, bMax]\n    };\n\n  }\n\n  function loadColorBounds () {\n\n    defineColor(\n      'monochrome',\n      null,\n      [[0,0],[100,0]]\n    );\n\n    defineColor(\n      'red',\n      [-26,18],\n      [[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]\n    );\n\n    defineColor(\n      'orange',\n      [19,46],\n      [[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]\n    );\n\n    defineColor(\n      'yellow',\n      [47,62],\n      [[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]\n    );\n\n    defineColor(\n      'green',\n      [63,178],\n      [[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]\n    );\n\n    defineColor(\n      'blue',\n      [179, 257],\n      [[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]\n    );\n\n    defineColor(\n      'purple',\n      [258, 282],\n      [[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]\n    );\n\n    defineColor(\n      'pink',\n      [283, 334],\n      [[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]\n    );\n\n  }\n\n  function HSVtoRGB (hsv) {\n\n    // this doesn't work for the values of 0 and 360\n    // here's the hacky fix\n    var h = hsv[0];\n    if (h === 0) {h = 1;}\n    if (h === 360) {h = 359;}\n\n    // Rebase the h,s,v values\n    h = h/360;\n    var s = hsv[1]/100,\n        v = hsv[2]/100;\n\n    var h_i = Math.floor(h*6),\n      f = h * 6 - h_i,\n      p = v * (1 - s),\n      q = v * (1 - f*s),\n      t = v * (1 - (1 - f)*s),\n      r = 256,\n      g = 256,\n      b = 256;\n\n    switch(h_i) {\n      case 0: r = v; g = t; b = p;  break;\n      case 1: r = q; g = v; b = p;  break;\n      case 2: r = p; g = v; b = t;  break;\n      case 3: r = p; g = q; b = v;  break;\n      case 4: r = t; g = p; b = v;  break;\n      case 5: r = v; g = p; b = q;  break;\n    }\n\n    var result = [Math.floor(r*255), Math.floor(g*255), Math.floor(b*255)];\n    return result;\n  }\n\n  function HexToHSB (hex) {\n    hex = hex.replace(/^#/, '');\n    hex = hex.length === 3 ? hex.replace(/(.)/g, '$1$1') : hex;\n\n    var red = parseInt(hex.substr(0, 2), 16) / 255,\n          green = parseInt(hex.substr(2, 2), 16) / 255,\n          blue = parseInt(hex.substr(4, 2), 16) / 255;\n\n    var cMax = Math.max(red, green, blue),\n          delta = cMax - Math.min(red, green, blue),\n          saturation = cMax ? (delta / cMax) : 0;\n\n    switch (cMax) {\n      case red: return [ 60 * (((green - blue) / delta) % 6) || 0, saturation, cMax ];\n      case green: return [ 60 * (((blue - red) / delta) + 2) || 0, saturation, cMax ];\n      case blue: return [ 60 * (((red - green) / delta) + 4) || 0, saturation, cMax ];\n    }\n  }\n\n  function HSVtoHSL (hsv) {\n    var h = hsv[0],\n      s = hsv[1]/100,\n      v = hsv[2]/100,\n      k = (2-s)*v;\n\n    return [\n      h,\n      Math.round(s*v / (k<1 ? k : 2-k) * 10000) / 100,\n      k/2 * 100\n    ];\n  }\n\n  function stringToInteger (string) {\n    var total = 0\n    for (var i = 0; i !== string.length; i++) {\n      if (total >= Number.MAX_SAFE_INTEGER) break;\n      total += string.charCodeAt(i)\n    }\n    return total\n  }\n\n  // get The range of given hue when options.count!=0\n  function getRealHueRange(colorHue)\n  { if (!isNaN(colorHue)) {\n    var number = parseInt(colorHue);\n\n    if (number < 360 && number > 0) {\n      return getColorInfo(colorHue).hueRange\n    }\n  }\n    else if (typeof colorHue === 'string') {\n\n      if (colorDictionary[colorHue]) {\n        var color = colorDictionary[colorHue];\n\n        if (color.hueRange) {\n          return color.hueRange\n       }\n    } else if (colorHue.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {\n        var hue = HexToHSB(colorHue)[0]\n        return getColorInfo(hue).hueRange\n    }\n  }\n\n    return [0,360]\n}\n  return randomColor;\n}));\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/randomcolor/randomColor.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _GameAlgorithm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameAlgorithm.js */ \"./src/GameAlgorithm.js\");\n\r\n\r\nvar Game = {\r\n  inputBuffer: [],\r\n  grid: [],\r\n  plainGrid: [],\r\n  addToBuffer: function(direction) {\r\n    if (this.inputBuffer.length > 5)\r\n    this.inputBuffer[5] = direction;\r\n    else\r\n    this.inputBuffer.push(direction);\r\n  },\r\n  removeFromBuffer: function() {\r\n    this.inputBuffer.splice(0, 1);\r\n  },\r\n  next() {\r\n    if (this.inputBuffer.length) {\r\n      this.plainGrid.forEach(item => {\r\n        item.hasChanged = false;\r\n        item.eat = null;\r\n      });\r\n      this.grid = Object(_GameAlgorithm_js__WEBPACK_IMPORTED_MODULE_1__[\"move\"])(this.inputBuffer[0], this.grid);\r\n      this.generatePlainGrid();\r\n      this.removeFromBuffer();\r\n      this.changeValueOfRandomElement(this.plainGrid, 2);\r\n    }\r\n  },\r\n  onStart: function() {\r\n    window.onkeydown = (event) => {\r\n      if (event.code === \"KeyQ\" || event.code === \"ArrowLeft\")\r\n      this.addToBuffer(\"left\");\r\n      else if (event.code === \"KeyW\" || event.code === \"ArrowUp\")\r\n      this.addToBuffer(\"up\");\r\n      else if (event.code === \"KeyD\" || event.code === \"ArrowRight\")\r\n      this.addToBuffer(\"right\");\r\n      else if (event.code === \"KeyS\" || event.code === \"ArrowDown\")\r\n      this.addToBuffer(\"down\");\r\n      else\r\n      return;\r\n      event.preventDefault();\r\n    }\r\n    this.generateGrid();\r\n    this.changeValueOfRandomElement(this.plainGrid, 4);\r\n    this.changeValueOfRandomElement(this.plainGrid, 2);\r\n  },\r\n  changeValueOfRandomElement: function(elements, value) {\r\n    let array = elements.filter(item => item.value === 0);\r\n    const randomElement = array[Math.floor(Math.random() * array.length)];\r\n    randomElement.value = value;\r\n  },\r\n  generateGrid: function() {\r\n    for(var i = 0; i < _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].grid; i++) {\r\n      if (!this.grid)\r\n      this.grid = [];\r\n      let inGrid = [];\r\n      for(var j = 0; j < _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].grid; j++) {\r\n        let obj = {value: 0, y: i, x: j};\r\n        inGrid.push(obj);\r\n        this.plainGrid.push(obj);\r\n      }\r\n      this.grid.push(inGrid);\r\n    }\r\n  },\r\n  generatePlainGrid: function() {\r\n    this.plainGrid = [];\r\n    for(var i = 0; i < this.grid.length; i++) {\r\n      for(var j = 0; j < this.grid[i].length; j++) {\r\n        this.plainGrid.push(this.grid[i][j]);\r\n      }\r\n    }\r\n  }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\r\n\n\n//# sourceURL=webpack:///./src/Game.js?");

/***/ }),

/***/ "./src/GameAlgorithm.js":
/*!******************************!*\
  !*** ./src/GameAlgorithm.js ***!
  \******************************/
/*! exports provided: move */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"move\", function() { return move; });\n/**\r\n* 2048 algorithm on array\r\n* @param {String} direction (\"left\", \"right\", \"down\", \"up\")\r\n* @param {Array of Array of Object} position Example [[{x: 0, y: 0,value: 0},{x: 1, y: 0,value: 0},{x: 2, y: 0,value: 0},{x: 3, y: 0,value: 2}],...]\r\n* @return {Array of Array of Object} return same array of array of object with x and y updated and some new variables Object.eat and Object.hasChanged\r\n*/\r\n\r\nfunction move(direction, position) {\r\n  let toRight = 0;\r\n  let toDown = 0;\r\n  if (direction == \"right\") {\r\n    toRight = 1;\r\n  }\r\n  if (direction == \"left\") {\r\n    toRight = -1;\r\n  }\r\n  if (direction == \"up\") {\r\n    toDown = -1;\r\n  }\r\n  if (direction == \"down\") {\r\n    toDown = 1;\r\n  }\r\n  let change = false;\r\n  let startY = 0;\r\n  let startX = 0;\r\n  let addY = 1;\r\n  let addX = 1;\r\n  if (toDown == 1) {\r\n    addY = -1;\r\n    startY = position.length - 1;\r\n  }\r\n  if (toRight == 1) {\r\n    addX = -1;\r\n    startX = position.length - 1;\r\n  }\r\n  for(let y = startY; y != startY + addY * position.length; y = y + addY) {\r\n    for(let x = startX; x != startX + addX * position[y].length; x = x + addX) {\r\n      if ((toRight || toDown) && position[y + toDown] && position[y][x] && position[y][x].value && position[y + toDown][x + toRight]) {\r\n        let action = false;\r\n        if (position[y + toDown][x + toRight].value === 0) {\r\n          position[y][x].value *= 1;\r\n          action = true;\r\n        }\r\n        if (!position[y][x].hasChanged && !position[y + toDown][x + toRight].canMove && !position[y + toDown][x + toRight].hasChanged && position[y + toDown][x + toRight].value === position[y][x].value) {\r\n          position[y][x].value *= 2;\r\n          position[y][x].hasChanged = true;\r\n          action = true;\r\n        }\r\n        if (action) {\r\n          let last = position[y + toDown][x + toRight];\r\n          last = {component: last.component, value: last.value};\r\n          position[y][x].x = x + toRight;\r\n          position[y][x].y = y + toDown;\r\n          position[y][x].eat = last;\r\n          position[y + toDown][x + toRight] = position[y][x];\r\n          position[y][x] = {value: 0, x, y};\r\n          change = true;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  if (change) {\r\n    position = move(direction, position);\r\n  }\r\n  return position;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/GameAlgorithm.js?");

/***/ }),

/***/ "./src/GameArea.js":
/*!*************************!*\
  !*** ./src/GameArea.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.js */ \"./src/component.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game.js */ \"./src/Game.js\");\n/* harmony import */ var _GameStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameStyle.js */ \"./src/GameStyle.js\");\n\r\n\r\n\r\n\r\nvar GameArea = {\r\n  canvas : document.createElement(\"canvas\"),\r\n  game: _Game_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n  colorGenerator: new _GameStyle_js__WEBPACK_IMPORTED_MODULE_3__[\"ColorGenerator\"](),\r\n  start : function() {\r\n    this.canvas.width = _config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width;\r\n    this.canvas.height = _config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height;\r\n    this.context = this.canvas.getContext(\"2d\");\r\n    this.background = new _component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width, _config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height, \"darkgrey\", 0, 0);\r\n    _Game_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onStart();\r\n    this.generateBackGrid();\r\n    document.body.insertBefore(this.canvas, document.body.childNodes[0]);\r\n    this.frameNo = 0;\r\n    this.interval = setInterval(this.update.bind(this), 20);\r\n  },\r\n  generateBackGrid: function() {\r\n    let height = _config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / _config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].grid;\r\n    let width = _config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / _config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].grid;\r\n    let {otherMargin, margin} = _config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n    this.backGrid = [];\r\n    this.game.grid.forEach((item, keyy) => {\r\n      let y = (keyy * height);\r\n      item.forEach((item2, keyx) => {\r\n        let x = (keyx * width);\r\n        let comp = new _component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](height + otherMargin, width + otherMargin, \"lightgrey\", x + margin, y + margin, \"roundRect\");\r\n        this.backGrid.push(comp);\r\n      })\r\n    });\r\n    },\r\n  clear : function() {\r\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n  },\r\n  update: function() {\r\n    let height = _config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / _config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].grid;\r\n    let width = _config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / _config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].grid;\r\n    let {otherMargin, margin} = _config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n    this.clear();\r\n    this.frameNo += 1;\r\n    this.background.update();\r\n    this.backGrid.forEach(elem => elem.update());\r\n    let isMoving = false;\r\n    this.game.plainGrid.forEach(item => {\r\n      let desiredY = 0;\r\n      let desiredX = 0;\r\n      if (item.value !== 0) {\r\n        desiredX = item.x * width + margin;\r\n        desiredY = item.y * width + margin;\r\n      }\r\n      if (item && item.component) {\r\n        if (item.component.x !== desiredX || item.component.y !== desiredY) {\r\n          item.component.moveTo(desiredX, desiredY);\r\n          isMoving = true;\r\n          if (item.eat && item.eat.component) {\r\n            item.eat.component.moveTo(desiredX, desiredY);\r\n            item.eat.component.update();\r\n          }\r\n        } else {\r\n          item.component.setColor(this.colorGenerator.getColor(item.value));\r\n          item.component.value = item.value;\r\n          if (item.eat && item.eat.component)\r\n          item.component.changeSize([1, 1.2, 1]);\r\n          item.eat = null;\r\n        }\r\n        item.component.update();\r\n      }\r\n    })\r\n    this.game.plainGrid.forEach(item => {\r\n      let desiredY = 0;\r\n      let desiredX = 0;\r\n      if (item.value !== 0) {\r\n        desiredX = item.x * width + margin;\r\n        desiredY = item.y * width + margin;\r\n      }\r\n      if (item && item.value !== 0 && !item.component && !isMoving){\r\n        item.component = new _component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](height + otherMargin, width + otherMargin, this.colorGenerator.getColor(item.value), desiredX, desiredY, null, item);\r\n        item.component.changeSize([0, 1], 10);\r\n      }\r\n    })\r\n    if (!isMoving) {\r\n      this.game.next();\r\n    }\r\n  }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameArea);\r\n\n\n//# sourceURL=webpack:///./src/GameArea.js?");

/***/ }),

/***/ "./src/GameStyle.js":
/*!**************************!*\
  !*** ./src/GameStyle.js ***!
  \**************************/
/*! exports provided: ColorGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorGenerator\", function() { return ColorGenerator; });\n/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! randomcolor */ \"./node_modules/randomcolor/randomColor.js\");\n/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_0__);\n\r\nfunction ColorGenerator() {\r\n  this.colors = {},\r\n  this.createColor = function(value) {\r\n    let color = randomcolor__WEBPACK_IMPORTED_MODULE_0___default()({luminosity: 'light', format: 'rgb'});\r\n    return color;\r\n  },\r\n  this.getColor = function(value) {\r\n    if (!this.colors[value])\r\n    this.colors[value] = this.createColor(value);\r\n    return this.colors[value];\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/GameStyle.js?");

/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return component; });\n/* harmony import */ var _GameArea_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameArea.js */ \"./src/GameArea.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\r\n\r\n/*\r\n* class function Component\r\n*\r\n*/\r\nfunction component(width, height, color, x, y, type, obj) {\r\n  this.type = type;\r\n  this.score = 0;\r\n  this.width = width;\r\n  this.height = height;\r\n  this.speed = 2;\r\n  this.x = x;\r\n  this.y = y;\r\n  this.obj = obj;\r\n  this.value = obj && obj.value ? obj.value : 0;\r\n  this.gravity = 2;\r\n  this.gravitySpeed = 0;\r\n  this.arrayOfSize = [1];\r\n  this.setColor = function(color) {\r\n    this.color = color;\r\n    this.fontColor = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"fontColor\"])(color);\r\n  }\r\n  this.setColor(color);\r\n  this.update = function() {\r\n    let ctx = _GameArea_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].context;\r\n    let self = this;\r\n    if (this.isChangingSize)\r\n    self = this.sizeAlg();\r\n    let {x , y, width, height} = self;\r\n    if (this.type == \"text\") {\r\n      ctx.font = width + \" \" + height;\r\n      ctx.fillStyle = color;\r\n      ctx.fillText(this.text, x, y);\r\n    }  else if (this.value) {\r\n      ctx.fillStyle = this.color;\r\n      ctx.roundRect(x, y, width, height, 20, true, false);\r\n      let size = 0.5 * width;\r\n      ctx.font = \"bold \" + size + \"px monospace\";\r\n      ctx.fillStyle = this.fontColor;\r\n      ctx.textAlign = \"center\";\r\n      ctx.textBaseline = \"middle\";\r\n      ctx.fillText(this.value, x + (width / 2), y + (height / 2));\r\n    }\r\n    else if (this.type == \"roundRect\") {\r\n      ctx.fillStyle = this.color;\r\n      ctx.roundRect(x, y, width, height, 20, true, false);\r\n    }\r\n    else {\r\n      ctx.fillStyle = this.color;\r\n      ctx.fillRect(x, y, width, height);\r\n    }\r\n  }\r\n  this.moveTo = function(desiredX, desiredY) {\r\n    this.gravitySpeed += this.gravity;\r\n    let speed = (this.speed + this.gravitySpeed);\r\n    let movementX = desiredX - this.x;\r\n    let movementY = desiredY - this.y;\r\n    if (movementX >= speed || movementX <= speed * -1)\r\n    this.x += speed * (movementX > 0 ? 1 : -1) ;\r\n    else\r\n    this.x = desiredX;\r\n    if (movementY >= speed || movementY <= speed * -1)\r\n    this.y += speed * (movementY > 0 ? 1 : -1);\r\n    else\r\n    this.y = desiredY;\r\n    if (this.x === desiredX && this.y === desiredY) {\r\n      this.gravitySpeed = 0;\r\n    }\r\n  }\r\n  this.changeSize = function(arrayOfSize, speed = 2) {\r\n    if (!arrayOfSize)\r\n    arrayOfSize = this.arrayOfSize;\r\n    this.isChangingSize = 1;\r\n    this.arrayOfSize = arrayOfSize;\r\n    this.currentSize = this.width * arrayOfSize[0];\r\n    this.arrayOfSize.splice(0, 1);\r\n    this.sizeChangeSpeed = speed;\r\n  }\r\n  this.sizeAlg = function() {\r\n    let {x , y, width, height, isChangingSize, arrayOfSize, currentSize, sizeChangeSpeed, gravitySpeed} = this;\r\n    if (currentSize * isChangingSize >= arrayOfSize[0] * width)\r\n      arrayOfSize.splice(0, 1);\r\n    if (arrayOfSize.length === 0)\r\n    isChangingSize = 0;\r\n    else\r\n    isChangingSize = currentSize - arrayOfSize[0] * width < 0 ? 1 : -1;\r\n    currentSize = currentSize + ((sizeChangeSpeed + gravitySpeed) * isChangingSize);\r\n    x = x + (width - currentSize) / 2;\r\n    y = y + (width - currentSize) / 2;\r\n    width = currentSize;\r\n    height = currentSize;\r\n    this.currentSize = currentSize;\r\n    this.isChangingSize = isChangingSize;\r\n    return {x , y, width, height};\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/component.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar config = {\r\n  height: 800,\r\n  width: 800,\r\n  grid: 4,\r\n  margin: 10,\r\n  otherMargin: -20\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\r\n\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/start.js":
/*!**********************!*\
  !*** ./src/start.js ***!
  \**********************/
/*! exports provided: startGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startGame\", function() { return startGame; });\n/* harmony import */ var _GameArea_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameArea.js */ \"./src/GameArea.js\");\n/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.js */ \"./src/component.js\");\n\r\n\r\nconst startGame = function() {\r\n  _GameArea_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].start();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/start.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: fontColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fontColor\", function() { return fontColor; });\nfunction rgbToArray(rgb) {\r\n  let m = rgb.match(/^rgb\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$/i);\r\n  if( m) {\r\n    return [m[1],m[2],m[3]];\r\n  }\r\n}\r\nfunction fontColor(rgb) {\r\n  rgb = rgbToArray(rgb);\r\n  if (rgb)\r\n  return ((rgb[0]*0.299 + rgb[1]*0.587 + rgb[2]*0.114) > 186) ? \"dimgrey\" : \"#ffffff\";\r\n}\r\n\r\n/**\r\n* Draws a rounded rectangle using the current state of the canvas.\r\n* If you omit the last three params, it will draw a rectangle\r\n* outline with a 5 pixel border radius\r\n* @param {Number} x The top left x coordinate\r\n* @param {Number} y The top left y coordinate\r\n* @param {Number} width The width of the rectangle\r\n* @param {Number} height The height of the rectangle\r\n* @param {Object} radius All corner radii. Defaults to 0,0,0,0;\r\n* @param {Boolean} fill Whether to fill the rectangle. Defaults to false.\r\n* @param {Boolean} stroke Whether to stroke the rectangle. Defaults to true.\r\n*/\r\nCanvasRenderingContext2D.prototype.roundRect = function (x, y, width, height, radius, fill, stroke) {\r\n  var cornerRadius = { upperLeft: 0, upperRight: 0, lowerLeft: 0, lowerRight: 0 };\r\n  if (typeof stroke == \"undefined\") {\r\n    stroke = true;\r\n  }\r\n  if (typeof radius === \"object\") {\r\n    for (var side in radius) {\r\n      cornerRadius[side] = radius[side];\r\n    }\r\n  } else {\r\n    for (var side in cornerRadius) {\r\n      cornerRadius[side] = radius;\r\n    }\r\n  }\r\n\r\n  this.beginPath();\r\n  this.moveTo(x + cornerRadius.upperLeft, y);\r\n  this.lineTo(x + width - cornerRadius.upperRight, y);\r\n  this.quadraticCurveTo(x + width, y, x + width, y + cornerRadius.upperRight);\r\n  this.lineTo(x + width, y + height - cornerRadius.lowerRight);\r\n  this.quadraticCurveTo(x + width, y + height, x + width - cornerRadius.lowerRight, y + height);\r\n  this.lineTo(x + cornerRadius.lowerLeft, y + height);\r\n  this.quadraticCurveTo(x, y + height, x, y + height - cornerRadius.lowerLeft);\r\n  this.lineTo(x, y + cornerRadius.upperLeft);\r\n  this.quadraticCurveTo(x, y, x + cornerRadius.upperLeft, y);\r\n  this.closePath();\r\n  if (stroke) {\r\n    this.stroke();\r\n  }\r\n  if (fill) {\r\n    this.fill();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });