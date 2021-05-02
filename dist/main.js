/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMelements.js":
/*!****************************!*\
  !*** ./src/DOMelements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errordiv\": () => (/* binding */ errordiv),\n/* harmony export */   \"cityinput\": () => (/* binding */ cityinput),\n/* harmony export */   \"citybtn\": () => (/* binding */ citybtn),\n/* harmony export */   \"datadiv\": () => (/* binding */ datadiv),\n/* harmony export */   \"form\": () => (/* binding */ form)\n/* harmony export */ });\n\nconst errordiv = document.createElement(\"div\");\n\nconst form = document.createElement('form');\nform.setAttribute('method','post');\n\nconst cityinput = document.createElement('input');\ncityinput.setAttribute('type','text');\ncityinput.setAttribute('id','cityinput');\ncityinput.setAttribute('name','city');\ncityinput.setAttribute('placeholder','Enter city');\ncityinput.setAttribute('required','true');\n\nconst citybtn = document.createElement('input');\ncitybtn.setAttribute('type','submit');\ncitybtn.value=\"Submit\";\n\nform.appendChild(cityinput);\nform.appendChild(citybtn);\n\nconst datadiv = document.createElement(\"div\");\ndatadiv.setAttribute(\"class\",\"flex-col\");\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/DOMelements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOMelements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMelements */ \"./src/DOMelements.js\");\n/* harmony import */ var _weatherinfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherinfo */ \"./src/weatherinfo.js\");\n\n\n//require('dotenv');\n//console.log(process.env.API_KEY);\n\n  const weatherdiv = document.getElementById(\"weatherdata\");\n\n  weatherdiv.appendChild(_DOMelements__WEBPACK_IMPORTED_MODULE_0__.errordiv);\n  weatherdiv.appendChild(_DOMelements__WEBPACK_IMPORTED_MODULE_0__.cityinput);\n  weatherdiv.appendChild(_DOMelements__WEBPACK_IMPORTED_MODULE_0__.citybtn);\n  weatherdiv.appendChild(_DOMelements__WEBPACK_IMPORTED_MODULE_0__.datadiv);\n\n  let weatherdata = \"\";\n  _DOMelements__WEBPACK_IMPORTED_MODULE_0__.citybtn.addEventListener('click', async () => {\n    let city = \"\";\n    if(_DOMelements__WEBPACK_IMPORTED_MODULE_0__.cityinput.value===\"\"){\n      city = \"karachi\";\n    }\n    else{\n      city = _DOMelements__WEBPACK_IMPORTED_MODULE_0__.cityinput.value;\n    }\n    const dataobj = await (0,_weatherinfo__WEBPACK_IMPORTED_MODULE_1__.getData)(city);\n    const data = dataobj;\n    weatherdata = data[\"main\"].temp;\n    _DOMelements__WEBPACK_IMPORTED_MODULE_0__.datadiv.innerText = weatherdata;\n\n  });\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weatherinfo.js":
/*!****************************!*\
  !*** ./src/weatherinfo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var _DOMelements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMelements */ \"./src/DOMelements.js\");\n\n\nconst apikey = \"54c6bcf0d3d2d963d92771c4eeb2136f\";\n\nconst getData = async (city) => {\n    \n        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;\n       \n    const response = await fetch(url, {\n            method: 'GET',\n            mode: 'cors'\n            \n        });\n    const data = response.json();\n    return data;\n    \n    \n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/weatherinfo.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;