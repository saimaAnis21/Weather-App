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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errordiv\": () => (/* binding */ errordiv),\n/* harmony export */   \"cityinput\": () => (/* binding */ cityinput),\n/* harmony export */   \"citybtn\": () => (/* binding */ citybtn),\n/* harmony export */   \"datadiv\": () => (/* binding */ datadiv),\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"tempspan\": () => (/* binding */ tempspan),\n/* harmony export */   \"weatherspan\": () => (/* binding */ weatherspan),\n/* harmony export */   \"cityspan\": () => (/* binding */ cityspan),\n/* harmony export */   \"iconimg\": () => (/* binding */ iconimg),\n/* harmony export */   \"tempunitbtn\": () => (/* binding */ tempunitbtn),\n/* harmony export */   \"feelslikespan\": () => (/* binding */ feelslikespan)\n/* harmony export */ });\n\nconst errordiv = document.createElement(\"div\");\n\nconst form = document.createElement('form');\nform.setAttribute('method','post');\n\nconst cityinput = document.createElement('input');\ncityinput.setAttribute('class','mr-10');\ncityinput.setAttribute('type','text');\ncityinput.setAttribute('id','cityinput');\ncityinput.setAttribute('name','city');\ncityinput.setAttribute('placeholder','Enter city');\ncityinput.setAttribute('required','true');\n\nconst citybtn = document.createElement('input');\ncitybtn.setAttribute('type','submit');\ncitybtn.value=\"Weather Data\";\n\nform.appendChild(cityinput);\nform.appendChild(citybtn);\n\nconst datadiv = document.createElement(\"div\");\ndatadiv.setAttribute(\"class\",\"flex-row\");\n\nconst tempunitbtn = document.createElement(\"button\");\ntempunitbtn.innerHTML=\"Convert to &#8457;\";\ntempunitbtn.setAttribute(\"class\",\"item-fc hidden\");\n\nconst cityspan = document.createElement(\"span\");\ncityspan.setAttribute(\"class\",\"item-fc\");\n\nconst iconimg = document.createElement(\"img\");\niconimg.setAttribute(\"class\",\"weathericon hidden item-fc \");\n\nconst tempspan = document.createElement(\"span\");\ntempspan.setAttribute(\"class\",\"item-fc\");\n\nconst weatherspan = document.createElement(\"span\");\nweatherspan.setAttribute(\"class\",\"item-fc\");\n\nconst feelslikespan = document.createElement(\"span\");\nfeelslikespan.setAttribute(\"class\",\"item-fc\");\n\n\nconst div1= document.createElement(\"div\");\ndiv1.setAttribute(\"class\",\"flex-col item-fr\");\nconst div2= document.createElement(\"div\");\ndiv2.setAttribute(\"class\",\"flex-col item-fr\");\n\ndiv1.appendChild(cityspan);\ndiv1.appendChild(iconimg);\ndiv2.appendChild(tempspan);\ndiv2.appendChild(feelslikespan);\ndiv2.appendChild(tempunitbtn);\ndiv2.appendChild(weatherspan);\n\n\ndatadiv.appendChild(div1);\ndatadiv.appendChild(div2);\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/DOMelements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOMelements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMelements */ \"./src/DOMelements.js\");\n/* harmony import */ var _weatherinfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherinfo */ \"./src/weatherinfo.js\");\n\n\n//require('dotenv').config;\n//console.log(process.env.API_KEY);\n\nlet citydata =\"\";\nlet icon=\"\"\nlet temp=\"\";\n\nlet weather = \"\";\nlet desc=\"\";\nlet feelslike= \"\";\nlet unit =\"\";\n\n  let weatherdiv = document.getElementById(\"weatherdata\");\n  weatherdiv.appendChild(_DOMelements__WEBPACK_IMPORTED_MODULE_0__.errordiv);\n  weatherdiv.appendChild(_DOMelements__WEBPACK_IMPORTED_MODULE_0__.cityinput);\n  weatherdiv.appendChild(_DOMelements__WEBPACK_IMPORTED_MODULE_0__.citybtn);\n  weatherdiv.appendChild(_DOMelements__WEBPACK_IMPORTED_MODULE_0__.datadiv);\n\n  const populatedata = () => {\n    _DOMelements__WEBPACK_IMPORTED_MODULE_0__.cityspan.innerHTML= `${citydata}`; \n    _DOMelements__WEBPACK_IMPORTED_MODULE_0__.iconimg.src = ` http://openweathermap.org/img/wn/${icon}@2x.png`;\n    let unitdisplay = \"\";\n    if(unit === 'c'){\n      unitdisplay = `&#8451;`;\n    }else{\n      unitdisplay = `&#8457;`;\n    }\n    _DOMelements__WEBPACK_IMPORTED_MODULE_0__.tempspan.innerHTML= `${temp} ${unitdisplay}`;\n    _DOMelements__WEBPACK_IMPORTED_MODULE_0__.feelslikespan.innerHTML =  `feels like ${feelslike} ${unitdisplay}`;\n    _DOMelements__WEBPACK_IMPORTED_MODULE_0__.weatherspan.innerHTML= `${weather}` + `, ${desc}`;\n  }\n\n  const toggleunit = () => {\n    if(unit === 'c'){\n      temp = ((temp*9/5) + 32).toFixed(0);\n      feelslike = ((feelslike*9/5) + 32).toFixed(2);\n      unit = \"f\";\n      _DOMelements__WEBPACK_IMPORTED_MODULE_0__.tempunitbtn.innerHTML=\"Convert to &#8451;\";\n    }\n    else{\n      temp = ((temp-32)*5/9).toFixed(0);\n      feelslike = ((feelslike-32)*5/9).toFixed(2);\n      unit = \"c\";\n      _DOMelements__WEBPACK_IMPORTED_MODULE_0__.tempunitbtn.innerHTML=\"Convert to &#8457;\";\n    }\n    populatedata();\n  }\n\n\n  _DOMelements__WEBPACK_IMPORTED_MODULE_0__.citybtn.addEventListener('click', async () => {\n    let city =\"\";\n    if(_DOMelements__WEBPACK_IMPORTED_MODULE_0__.cityinput.value===\"\"){\n      city = \"karachi\";\n    }\n    else{\n      city = _DOMelements__WEBPACK_IMPORTED_MODULE_0__.cityinput.value;\n    }\n    const dataobj = await (0,_weatherinfo__WEBPACK_IMPORTED_MODULE_1__.getData)(city);\n    const data = await dataobj;\n    console.log(data);\n     citydata = await data[\"name\"];\n     icon = data[\"weather\"][0].icon;\n     temp = data[\"main\"].temp;\n     weather=data[\"weather\"][0].main;\n     desc=data[\"weather\"][0].description;\n     feelslike = data[\"main\"].feels_like;\n     _DOMelements__WEBPACK_IMPORTED_MODULE_0__.iconimg.classList.add(\"visible\");\n     _DOMelements__WEBPACK_IMPORTED_MODULE_0__.tempunitbtn.classList.add(\"visible\");\n     unit = \"c\";\n     populatedata();\n  });\n\n  _DOMelements__WEBPACK_IMPORTED_MODULE_0__.tempunitbtn.addEventListener('click',() => {\n     toggleunit();\n  });\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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