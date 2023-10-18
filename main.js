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

/***/ "./src/dorota-semla.jpg":
/*!******************************!*\
  !*** ./src/dorota-semla.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/dorota-semla.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/dorota-semla.jpg?");

/***/ }),

/***/ "./src/spencer-davis.jpg":
/*!*******************************!*\
  !*** ./src/spencer-davis.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/spencer-davis.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/spencer-davis.jpg?");

/***/ }),

/***/ "./src/valeria-boltneva.jpg":
/*!**********************************!*\
  !*** ./src/valeria-boltneva.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/valeria-boltneva.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/valeria-boltneva.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load_page */ \"./src/load_page.js\");\n\n\nfunction removeBody() {\n    const body = document.querySelector('#body-container')\n    body.remove()\n}\nconst content = document.querySelector('#content')\n\ncontent.appendChild((0,_load_page__WEBPACK_IMPORTED_MODULE_0__.loadHeader)())\n\nconst home = document.querySelector('#home')\nconst menu = document.querySelector('#menu')\nconst contact = document.querySelector('#contact')\n\nhome.addEventListener(\"click\", (e) => {\n    removeBody()\n    content.appendChild((0,_load_page__WEBPACK_IMPORTED_MODULE_0__.loadMainPage)())\n})\n\nmenu.addEventListener(\"click\", (e) => {\n    removeBody()\n    content.appendChild((0,_load_page__WEBPACK_IMPORTED_MODULE_0__.loadMenuPage)())\n})\n\ncontact.addEventListener(\"click\", (e) => {\n    removeBody()\n    content.appendChild((0,_load_page__WEBPACK_IMPORTED_MODULE_0__.loadContactPage)())\n})\n\ncontent.appendChild((0,_load_page__WEBPACK_IMPORTED_MODULE_0__.loadMainPage)())\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load_page.js":
/*!**************************!*\
  !*** ./src/load_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContactPage: () => (/* binding */ loadContactPage),\n/* harmony export */   loadHeader: () => (/* binding */ loadHeader),\n/* harmony export */   loadMainPage: () => (/* binding */ loadMainPage),\n/* harmony export */   loadMenuPage: () => (/* binding */ loadMenuPage)\n/* harmony export */ });\n/* harmony import */ var _dorota_semla_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dorota-semla.jpg */ \"./src/dorota-semla.jpg\");\n/* harmony import */ var _spencer_davis_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spencer-davis.jpg */ \"./src/spencer-davis.jpg\");\n/* harmony import */ var _valeria_boltneva_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valeria-boltneva.jpg */ \"./src/valeria-boltneva.jpg\");\n\n\n\n\nconst loadHeader = () => {\n    const headerContainer = document.createElement(\"div\")\n    headerContainer.id = 'header-container'\n    const logoTitle = document.createElement(\"h1\")\n    logoTitle.textContent = \"Food for life\"\n\n    const home = document.createElement('a')\n    home.textContent = 'Home'\n    home.id = 'home'\n\n    const menu = document.createElement('a')\n    menu.textContent = 'Menu'\n    menu.id = 'menu'\n\n    const contact = document.createElement('a')\n    contact.textContent = 'Contact'\n    contact.id = 'contact'\n\n    headerContainer.appendChild(logoTitle)\n    headerContainer.appendChild(home)\n    headerContainer.appendChild(menu)\n    headerContainer.appendChild(contact)\n\n    return headerContainer\n}\n\nconst loadMainPage = () => {\n    const bodyContainer = document.createElement(\"div\")\n    bodyContainer.id = 'body-container'\n\n    const restaurantInfo = document.createElement(\"p\")\n    restaurantInfo.textContent = 'We provide food for a lifetime of enjoyment. Live well, eat well.'\n\n    const dorotaImgElement = document.createElement(\"img\")\n    dorotaImgElement.src = _dorota_semla_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    const spencerImgElement = document.createElement(\"img\")\n    spencerImgElement.src = _spencer_davis_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    const valeriaImgElement = document.createElement(\"img\")\n    valeriaImgElement.src = _valeria_boltneva_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n\n    bodyContainer.appendChild(restaurantInfo)\n    bodyContainer.appendChild(dorotaImgElement)\n    bodyContainer.appendChild(spencerImgElement)\n    bodyContainer.appendChild(valeriaImgElement)\n\n    return bodyContainer\n} \n\n\nconst loadMenuPage = () => {\n    const bodyContainer = document.createElement(\"div\")\n    bodyContainer.id = 'body-container'\n    bodyContainer.className = 'menu-body'\n\n    const item1 = document.createElement(\"p\")\n    item1.textContent = 'Steak Bake. Straight from gregs'\n    const item2 = document.createElement(\"p\")\n    item2.textContent = 'Glass Noodles. Low protein, low bcaa, high starch. Plain tasing but you\\'ll get over it.'\n    const item3 = document.createElement(\"p\")\n    item3.textContent = 'Gelatin Broth. So tasty.'\n\n    const dorotaImgElement = document.createElement(\"img\")\n    dorotaImgElement.src = _dorota_semla_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    const spencerImgElement = document.createElement(\"img\")\n    spencerImgElement.src = _spencer_davis_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    const valeriaImgElement = document.createElement(\"img\")\n    valeriaImgElement.src = _valeria_boltneva_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n\n    bodyContainer.appendChild(item1)\n    bodyContainer.appendChild(dorotaImgElement)\n    bodyContainer.appendChild(item2)\n    bodyContainer.appendChild(spencerImgElement)\n    bodyContainer.appendChild(item3)\n    bodyContainer.appendChild(valeriaImgElement)\n\n    return bodyContainer\n} \n\nconst loadContactPage = () => {\n    const bodyContainer = document.createElement(\"div\")\n    bodyContainer.id = 'body-container'\n    bodyContainer.className = 'menu-body'\n\n    const restaurantInfo = document.createElement(\"p\")\n    restaurantInfo.textContent = 'Location: \\n515 Turn End, Yorkshire. 0114 7773333.\\n\\nOpening Times: \\nMon-Fri: 7am-7pm\\nWeekends: 4pm-12pm'\n\n    bodyContainer.appendChild(restaurantInfo)\n\n    return bodyContainer\n} \n\n\n\n//# sourceURL=webpack://restaurant-page/./src/load_page.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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