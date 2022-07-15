/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/our-services/our-services.js":
/*!*********************************************!*\
  !*** ./blocks/our-services/our-services.js ***!
  \*********************************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\r\n\r\n\tconst block = \"our-services\";\r\n\r\n\tlet wrapBtns = document.querySelector(`.${block}__box-menu`);\r\n\tlet allServices = document.querySelectorAll(`.${block}__el-content`);\r\n\r\n\tlet menu = document.querySelector(\".our-services__services-now\");\r\n\tlet nameService = document.querySelector(\".our-services__name-services\");\r\n\r\n\tlet activeSer = wrapBtns.querySelector(\".our-services__menu-btn._active\");\r\n\tlet nameActiveSer = activeSer.querySelector(`.${block}__menu-btn-text`);\r\n\r\n\tnameService.innerHTML = nameActiveSer.innerHTML;\r\n\r\n\twrapBtns.addEventListener(\"click\", e => {\r\n\r\n\t\tlet allBtns = wrapBtns.children;\r\n\r\n\t\tfor (let i = 0; i < allBtns.length; i++) {\r\n\t\t\tconst el = allBtns[i];\r\n\r\n\t\t\tif (el.classList.contains(\"_active\")) {\r\n\t\t\t\tactiveBtn = el;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tlet btn = e.target.closest(\".our-services__menu-btn\");\r\n\r\n\t\tif (btn) {\r\n\r\n\t\t\tlet btnId = btn.getAttribute(\"data-id\");\r\n\r\n\t\t\tlet service, activeEl;\r\n\r\n\t\t\tfor (let i = 0; i < allServices.length; i++) {\r\n\t\t\t\tconst el = allServices[i];\r\n\r\n\t\t\t\tif (el.getAttribute(\"data-id\") == btnId) {\r\n\t\t\t\t\tservice = el;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (el.getAttribute(\"data-state\") == \"active\") {\r\n\t\t\t\t\tactiveEl = el;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tif (activeEl != service) {\r\n\t\t\t\tservice.setAttribute(\"data-state\", \"active\");\r\n\t\t\t\tactiveEl.removeAttribute(\"data-state\");\r\n\t\t\t\tbtn.classList.add('_active');\r\n\t\t\t\tactiveBtn.classList.remove('_active');\r\n\r\n\r\n\t\t\t\tlet text = btn.querySelector(`.${block}__menu-btn-text`);\r\n\t\t\t\tnameService.innerHTML = text.innerHTML;\r\n\r\n\t\t\t\tif (window.innerWidth <= 1020) {\r\n\t\t\t\t\tmenu.classList.remove(\"active\");\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t});\r\n\r\n\t// max-width: 1020px\r\n\tif (window.innerWidth <= 1020) {\r\n\r\n\t\tmenu.addEventListener(\"click\", e => {\r\n\r\n\t\t\tif (e.target.closest(\".our-services__services-now\")) {\r\n\t\t\t\tmenu.classList.toggle(\"active\");\r\n\t\t\t}\r\n\r\n\t\t});\r\n\r\n\t}\r\n\r\n\twindow.addEventListener(\"resize\", () => {\r\n\r\n\t\tif (window.innerWidth <= 1020) {\r\n\r\n\t\t\tmenu.addEventListener(\"click\", e => {\r\n\r\n\t\t\t\tif (e.target.closest(\".our-services__services-now\")) {\r\n\t\t\t\t\tmenu.classList.toggle(\"active\");\r\n\t\t\t\t}\r\n\r\n\t\t\t});\r\n\r\n\t\t}\r\n\r\n\t});\r\n});\n\n//# sourceURL=webpack://webpack-1.v/./blocks/our-services/our-services.js?");

/***/ }),

/***/ "./blocks sync recursive ^\\.\\/[^/]+\\/[^/.]+\\.(js%7Ccss%7Cscss%7Csass%7Cless)$":
/*!***************************************************************************!*\
  !*** ./blocks/ sync ^\.\/[^/]+\/[^/.]+\.(js%7Ccss%7Cscss%7Csass%7Cless)$ ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./enticement/enticement.scss\": \"./blocks/enticement/enticement.scss\",\n\t\"./footer/footer.scss\": \"./blocks/footer/footer.scss\",\n\t\"./get-in-touch/get-in-touch.scss\": \"./blocks/get-in-touch/get-in-touch.scss\",\n\t\"./header/header.scss\": \"./blocks/header/header.scss\",\n\t\"./our-projects/our-projects.scss\": \"./blocks/our-projects/our-projects.scss\",\n\t\"./our-services/our-services.js\": \"./blocks/our-services/our-services.js\",\n\t\"./our-services/our-services.scss\": \"./blocks/our-services/our-services.scss\",\n\t\"./our-values/our-values.scss\": \"./blocks/our-values/our-values.scss\",\n\t\"./top-block/top-block.scss\": \"./blocks/top-block/top-block.scss\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./blocks sync recursive ^\\\\.\\\\/[^/]+\\\\/[^/.]+\\\\.(js%7Ccss%7Cscss%7Csass%7Cless)$\";\n\n//# sourceURL=webpack://webpack-1.v/./blocks/_sync_^\\.\\/%5B^/%5D+\\/%5B^/.%5D+\\.(js%257Ccss%257Cscss%257Csass%257Cless)$?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_reset_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset-style.scss */ \"./styles/reset-style.scss\");\n\r\n\r\n\r\nfunction requireAll(r) {\r\n\tr.keys().map(r);\r\n\r\n}\r\n\r\nrequireAll(__webpack_require__(\"./blocks sync recursive ^\\\\.\\\\/[^/]+\\\\/[^/.]+\\\\.(js%7Ccss%7Cscss%7Csass%7Cless)$\"));\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-1.v/./index.js?");

/***/ }),

/***/ "./blocks/enticement/enticement.scss":
/*!*******************************************!*\
  !*** ./blocks/enticement/enticement.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-1.v/./blocks/enticement/enticement.scss?");

/***/ }),

/***/ "./blocks/footer/footer.scss":
/*!***********************************!*\
  !*** ./blocks/footer/footer.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-1.v/./blocks/footer/footer.scss?");

/***/ }),

/***/ "./blocks/get-in-touch/get-in-touch.scss":
/*!***********************************************!*\
  !*** ./blocks/get-in-touch/get-in-touch.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-1.v/./blocks/get-in-touch/get-in-touch.scss?");

/***/ }),

/***/ "./blocks/header/header.scss":
/*!***********************************!*\
  !*** ./blocks/header/header.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-1.v/./blocks/header/header.scss?");

/***/ }),

/***/ "./blocks/our-projects/our-projects.scss":
/*!***********************************************!*\
  !*** ./blocks/our-projects/our-projects.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-1.v/./blocks/our-projects/our-projects.scss?");

/***/ }),

/***/ "./blocks/our-services/our-services.scss":
/*!***********************************************!*\
  !*** ./blocks/our-services/our-services.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-1.v/./blocks/our-services/our-services.scss?");

/***/ }),

/***/ "./blocks/our-values/our-values.scss":
/*!*******************************************!*\
  !*** ./blocks/our-values/our-values.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-1.v/./blocks/our-values/our-values.scss?");

/***/ }),

/***/ "./blocks/top-block/top-block.scss":
/*!*****************************************!*\
  !*** ./blocks/top-block/top-block.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-1.v/./blocks/top-block/top-block.scss?");

/***/ }),

/***/ "./styles/reset-style.scss":
/*!*********************************!*\
  !*** ./styles/reset-style.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-1.v/./styles/reset-style.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;