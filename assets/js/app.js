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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const workSlider = document.querySelector(\".complete-work__slider\");\r\nconst blogSlider = document.querySelector(\".blog-main__slider\");\r\n\r\nif (workSlider) {\r\n  let sliderWork = tns({\r\n    \"container\": \".complete-work__slider\",\r\n    \"items\": 2,\r\n    \"loop\": false,\r\n    \"edgePadding\": 50,\r\n    \"controlsContainer\": \".complete-work__controls\",\r\n    \"speed\": 400,\r\n    \"nav\": false\r\n  });\r\n}\r\n\r\nif (blogSlider) {\r\n  let sliderBlog = tns({\r\n    \"container\": \".blog-main__slider\",\r\n    \"items\": 2,\r\n    \"loop\": false,\r\n    \"controlsContainer\": \".blog-main__controls\",\r\n    \"speed\": 400,\r\n    \"controls\": true,\r\n    \"nav\": false\r\n  });\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/calculate-steps.js":
/*!******************************************!*\
  !*** ./src/assets/js/calculate-steps.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const nextPageBtn = document.getElementById(\"nextPageBtn\"),\n\t\t\tcalculateMain = document.querySelector(\".calculate-main\");\n\nif (nextPageBtn) {\n\tnextPageBtn.addEventListener(\"click\", ()=> {\n\t\tcalculateMain.classList.add(\"next-page\")\n\t})\n}\n\n//# sourceURL=webpack:///./src/assets/js/calculate-steps.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const body = document.body;\nconst modalBtn = document.querySelectorAll('[data-modal]');\nconst modalClose = document.querySelectorAll('.modal__close');\nconst modal = document.querySelectorAll('.modal');\nconst thanksBox = document.querySelector('.thanks__box');\nconst thanksBtn = document.querySelector('#thanksBtn');\n\nif (modal) {\n\tmodalBtn.forEach(item =>{\n\t\titem.addEventListener('click', event => {\n\t\t\tlet $this = event.currentTarget;\n\t\t\tlet modalId = $this.getAttribute('data-modal');\n\t\t\tlet modal = document.getElementById(modalId);\n\t\t\tlet modalContent = modal.querySelector('.modal__content');\n\n\t\t\tmodalContent.addEventListener('click', event => {\n\t\t\t\tevent.stopPropagation();\n\t\t\t});\n\n\n\t\t\tbody.classList.add('no-scroll');\n\t\t\tmodal.classList.add('show');\n\n\t\t\t\n\t\t\tsetTimeout( ()=> {\n\t\t\t\tmodalContent.style.transform = 'none';\n\t\t\t\tmodalContent.style.opacity = '1';\n\t\t\t}, 1);\n\t\t});\n\t});\n\n\tmodalClose.forEach(item =>{\n\t\titem.addEventListener('click', event => {\n\t\t\tlet currentModal = event.currentTarget.closest('.modal');\n\n\t\t\tcloseModal(currentModal);\n\t\t\t});\n\t});\n\n\n\tmodal.forEach(item =>{\n\t\titem.addEventListener('click', event => {\n\t\t\tlet currentModal = event.currentTarget;\n\n\t\t\tcloseModal(currentModal);\n\t\t\t});\n\t});\n\n\tif (thanksBtn) {\n\t\t\tthanksBtn.addEventListener('click', () => {\n\t\t\tthanksBox.classList.add(\"show\");\n\n\t\t\tthanksBox.previousElementSibling.style.display = \"none\";\n\t\t});\n\t}\n}\n\nfunction closeModal(currentModal) {\n\tlet modalContent = currentModal.querySelector(\".modal__content\");\n\tmodalContent.removeAttribute('style');\n\t\n\tsetTimeout(() => {\n\t\tbody.classList.remove('no-scroll');\n\t\tcurrentModal.classList.remove('show');\n\t\tthanksBox.classList.remove(\"show\");\n\t\tthanksBox.previousElementSibling.removeAttribute('style');\n\t}, 200);\n}\n\n//# sourceURL=webpack:///./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/sidebar.js":
/*!**********************************!*\
  !*** ./src/assets/js/sidebar.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const body = document.body,\n\t\t\tmenuBtn = document.querySelector(\".menu__btn\");\n\nmenuBtn.addEventListener(\"click\", () => {\n\tbody.classList.toggle(\"sidebar-show\")\n})\n\nwindow.addEventListener('wheel', function(event) {\n\tif (window.pageYOffset >= 80) {\n\t\tbody.classList.add(\"scroll-menu\");\n\t} else {\n\t\tbody.classList.remove(\"scroll-menu\");\n\t}\n});\n\nwindow.addEventListener('touchmove', function(event) {\n\tif (window.pageYOffset >= 80) {\n\t\tbody.classList.add(\"scroll-menu\");\n\t} else {\n\t\tbody.classList.remove(\"scroll-menu\");\n\t}\n});\n\n//# sourceURL=webpack:///./src/assets/js/sidebar.js?");

/***/ }),

/***/ 0:
/*!***************************************************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/calculate-steps.js ./src/assets/js/modal.js ./src/assets/js/sidebar.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/gooden/Code/Work/roof/src/assets/js/app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! /home/gooden/Code/Work/roof/src/assets/js/calculate-steps.js */\"./src/assets/js/calculate-steps.js\");\n__webpack_require__(/*! /home/gooden/Code/Work/roof/src/assets/js/modal.js */\"./src/assets/js/modal.js\");\nmodule.exports = __webpack_require__(/*! /home/gooden/Code/Work/roof/src/assets/js/sidebar.js */\"./src/assets/js/sidebar.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/calculate-steps.js_./src/assets/js/modal.js_./src/assets/js/sidebar.js?");

/***/ })

/******/ });