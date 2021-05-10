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

eval("const workSlider = document.querySelector(\".complete-work__slider\");\r\nconst blogSlider = document.querySelector(\".blog-main__slider\");\r\n\r\nif (workSlider) {\r\n  let sliderWork = tns({\r\n    \"container\": \".complete-work__slider\",\r\n    \"items\": 2,\r\n    \"loop\": false,\r\n    \"edgePadding\": 50,\r\n    \"preventScrollOnTouch\": \"auto\",\r\n    \"controlsContainer\": \".complete-work__controls\",\r\n    \"lazyload\": true,\r\n    \"speed\": 400,\r\n    \"nav\": false\r\n  });\r\n}\r\n\r\nif (blogSlider) {\r\n  let sliderBlog = tns({\r\n    \"container\": \".blog-main__slider\",\r\n    \"items\": 2,\r\n    \"loop\": false,\r\n    \"preventScrollOnTouch\": \"auto\",\r\n    \"controlsContainer\": \".blog-main__controls\",\r\n    \"speed\": 400,\r\n    \"controls\": true,\r\n    \"nav\": false\r\n  });\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

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

eval("const body = document.body;\nconst modalBtn = document.querySelectorAll('[data-modal]');\nconst modalClose = document.querySelectorAll('.modal__close');\nconst modal = document.querySelectorAll('.modal');\nconst thanksBox = document.querySelector('.thanks__box');\nconst thanksBtns = document.querySelectorAll('#thanksBtn');\n\nif (modal) {\n\tmodalBtn.forEach(item =>{\n\t\titem.addEventListener('click', event => {\n\t\t\tlet $this = event.currentTarget;\n\t\t\tlet modalId = $this.getAttribute('data-modal');\n\t\t\tlet modal = document.getElementById(modalId);\n\t\t\tlet modalContent = modal.querySelector('.modal__content');\n\n\t\t\tmodalContent.addEventListener('click', event => {\n\t\t\t\tevent.stopPropagation();\n\t\t\t});\n\n\n\t\t\tbody.classList.add('no-scroll');\n\t\t\tmodal.classList.add('show');\n\n\t\t\t\n\t\t\tsetTimeout( ()=> {\n\t\t\t\tmodalContent.style.transform = 'none';\n\t\t\t\tmodalContent.style.opacity = '1';\n\t\t\t}, 1);\n\t\t});\n\t});\n\n\tmodalClose.forEach(item =>{\n\t\titem.addEventListener('click', event => {\n\t\t\tlet currentModal = event.currentTarget.closest('.modal');\n\n\t\t\tcloseModal(currentModal);\n\t\t\t});\n\t});\n\n\n\tmodal.forEach(item =>{\n\t\titem.addEventListener('click', event => {\n\t\t\tlet currentModal = event.currentTarget;\n\n\t\t\tcloseModal(currentModal);\n\t\t\t});\n\t});\n}\n\nif (thanksBtns) {\n\tfor(thanksBtn of thanksBtns) {\n\t\tthanksBtn.addEventListener('click', (event) => {\n\n\t\t\t\n\t\t\tif (!(event.currentTarget.form.querySelector(\"input[name='agree']\").checked) || !(event.currentTarget.form.querySelector(\"input[type='tel']\").value.length >= 16)) {\n          event.preventDefault();\n          return;\n      }\n\n\t\t\tlet modalContent = modal[0].querySelector('.modal__content');\n\t\t\tthanksBox.classList.add(\"show\");\n\n\t\t\tbody.classList.add('no-scroll');\n\t\t\tmodal[0].classList.add('show');\n\n\t\t\t\n\t\t\tsetTimeout( ()=> {\n\t\t\t\tmodalContent.style.transform = 'none';\n\t\t\t\tmodalContent.style.opacity = '1';\n\t\t\t}, 1);\n\n\t\t\tthanksBox.previousElementSibling.style.display = \"none\";\n\t\t});\n\t}\n}\n\nfunction closeModal(currentModal) {\n\tlet modalContent = currentModal.querySelector(\".modal__content\");\n\tmodalContent.removeAttribute('style');\n\t\n\tsetTimeout(() => {\n\t\tbody.classList.remove('no-scroll');\n\t\tcurrentModal.classList.remove('show');\n\t\tthanksBox.classList.remove(\"show\");\n\t\tthanksBox.previousElementSibling.removeAttribute('style');\n\t}, 200);\n}\n\n//# sourceURL=webpack:///./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/phone-mask.js":
/*!*************************************!*\
  !*** ./src/assets/js/phone-mask.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n    let phoneInputs = document.querySelectorAll('input[data-tel-input]');\n\n    let getInputNumbersValue = function (input) {\n        // Return stripped input value — just numbers\n        return input.value.replace(/\\D/g, '');\n    }\n\n    let onPhonePaste = function (e) {\n        let input = e.target,\n            inputNumbersValue = getInputNumbersValue(input);\n        let pasted = e.clipboardData || window.clipboardData;\n        if (pasted) {\n            let pastedText = pasted.getData('Text');\n            if (/\\D/g.test(pastedText)) {\n                // Attempt to paste non-numeric symbol — remove all non-numeric symbols,\n                // formatting will be in onPhoneInput handler\n                input.value = inputNumbersValue;\n                return;\n            }\n        }\n    }\n\n    let onPhoneInput = function (e) {\n        let input = e.target,\n            inputNumbersValue = getInputNumbersValue(input),\n            selectionStart = input.selectionStart,\n            formattedInputValue = \"\";\n\n        if (!inputNumbersValue) {\n            return input.value = \"\";\n        }\n\n        if (input.value.length != selectionStart) {\n            // Editing in the middle of input, not last symbol\n            if (e.data && /\\D/g.test(e.data)) {\n                // Attempt to input non-numeric symbol\n                input.value = inputNumbersValue;\n            }\n            return;\n        }\n\n        if ([\"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\"].indexOf(inputNumbersValue[0]) > -1) {\n            if (inputNumbersValue[0] == \"9\") inputNumbersValue = \"7\" + inputNumbersValue;\n            let firstSymbols = (inputNumbersValue[0] == \"8\") ? \"8\" : \"+7\";\n            formattedInputValue = input.value = firstSymbols;\n            if (inputNumbersValue.length > 1) {\n                formattedInputValue += '-' + inputNumbersValue.substring(1, 4);\n            }\n            if (inputNumbersValue.length >= 5) {\n                formattedInputValue += '-' + inputNumbersValue.substring(4, 7);\n            }\n            if (inputNumbersValue.length >= 8) {\n                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);\n            }\n            if (inputNumbersValue.length >= 10) {\n                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);\n            }\n        } else {\n            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);\n        }\n        input.value = formattedInputValue;\n    }\n    let onPhoneKeyDown = function (e) {\n        // Clear input after remove last symbol\n        let inputValue = e.target.value.replace(/\\D/g, '');\n        if (e.keyCode == 8 && inputValue.length == 1) {\n            e.target.value = \"\";\n        }\n    }\n    for (let phoneInput of phoneInputs) {\n        phoneInput.addEventListener('keydown', onPhoneKeyDown);\n        phoneInput.addEventListener('input', onPhoneInput, false);\n        phoneInput.addEventListener('paste', onPhonePaste, false);\n    }\n})\n\nconst formBtns = document.querySelectorAll(\"form button.btn#thanksBtn\");\n\nfor( let formBtn of formBtns) {\n    formBtn.form.addEventListener(\"submit\", (event) => {\n        if (!(event.currentTarget.querySelector(\"input[name='agree']\").checked) || !(formBtn.form.querySelector(\"input[type='tel']\").value.length >= 16)) {\n            event.preventDefault();\n        } \n    })\n}\n\n//# sourceURL=webpack:///./src/assets/js/phone-mask.js?");

/***/ }),

/***/ "./src/assets/js/services__filter.js":
/*!*******************************************!*\
  !*** ./src/assets/js/services__filter.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const blogMainItems = document.querySelectorAll(\".blog-main__item\"),\n\t\t\tcheckmarks = document.querySelectorAll(\".checkmark[data-type]\"),\n\t\t\tcheckmarkMob = document.querySelector(\".checkmark--mob\");\n\nif (checkmarks[0]) {\n\tfor (let checkmark of checkmarks) {\n\t\tcheckmark.addEventListener(\"click\", (event)=> {\n\t\t\tfor( let blogMainItem of blogMainItems) {\n\t\t\t\tblogMainItem.classList.remove(\"hide\");\n\n\t\t\t\tif (blogMainItem.dataset.type != event.target.dataset.type) {\n\t\t\t\t\tblogMainItem.classList.add(\"hide\");\n\t\t\t\t}\n\t\t\t}\n\t\t})\n\t}\n}\n\nif (checkmarkMob) {\n\tcheckmarkMob.addEventListener(\"change\", (event)=> {\n\t\tfor( let blogMainItem of blogMainItems) {\n\t\t\tblogMainItem.classList.remove(\"hide\");\n\n\t\t\tif (blogMainItem.dataset.type != event.target.selectedOptions[0].value) {\n\t\t\t\tblogMainItem.classList.add(\"hide\");\n\t\t\t}\n\t\t}\n\t})\n}\n\n//# sourceURL=webpack:///./src/assets/js/services__filter.js?");

/***/ }),

/***/ "./src/assets/js/sidebar.js":
/*!**********************************!*\
  !*** ./src/assets/js/sidebar.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const body = document.body,\n\t\t\tmenuBtn = document.querySelector(\".menu__btn\"),\n\t\t\tsidebarLinks = document.querySelectorAll(\".sidebar-main__item a\");\n\nmenuBtn.addEventListener(\"click\", () => {\n\tbody.classList.toggle(\"sidebar-show\")\n})\n\nfor( sidebarLink of sidebarLinks ) {\n\tsidebarLink.addEventListener(\"click\", ()=> {\n\t\tbody.classList.remove(\"sidebar-show\");\n\t})\n}\n\nwindow.addEventListener('wheel', function(event) {\n\tif (window.pageYOffset >= 80) {\n\t\tbody.classList.add(\"scroll-menu\");\n\t} else {\n\t\tbody.classList.remove(\"scroll-menu\");\n\t}\n});\n\nwindow.addEventListener('touchmove', function(event) {\n\tif (window.pageYOffset >= 80) {\n\t\tbody.classList.add(\"scroll-menu\");\n\t} else {\n\t\tbody.classList.remove(\"scroll-menu\");\n\t}\n});\n\n//# sourceURL=webpack:///./src/assets/js/sidebar.js?");

/***/ }),

/***/ 0:
/*!*********************************************************************************************************************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/calculate-steps.js ./src/assets/js/modal.js ./src/assets/js/phone-mask.js ./src/assets/js/services__filter.js ./src/assets/js/sidebar.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/gooden/Code/Work/roof/src/assets/js/app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! /home/gooden/Code/Work/roof/src/assets/js/calculate-steps.js */\"./src/assets/js/calculate-steps.js\");\n__webpack_require__(/*! /home/gooden/Code/Work/roof/src/assets/js/modal.js */\"./src/assets/js/modal.js\");\n__webpack_require__(/*! /home/gooden/Code/Work/roof/src/assets/js/phone-mask.js */\"./src/assets/js/phone-mask.js\");\n__webpack_require__(/*! /home/gooden/Code/Work/roof/src/assets/js/services__filter.js */\"./src/assets/js/services__filter.js\");\nmodule.exports = __webpack_require__(/*! /home/gooden/Code/Work/roof/src/assets/js/sidebar.js */\"./src/assets/js/sidebar.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/calculate-steps.js_./src/assets/js/modal.js_./src/assets/js/phone-mask.js_./src/assets/js/services__filter.js_./src/assets/js/sidebar.js?");

/***/ })

/******/ });