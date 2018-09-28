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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! ./router.js */ \"./router.js\");\n\ndocument.addEventListener('DOMContentLoaded', function(e){\n  let buttons = document.querySelectorAll('.sidebar-nav li');\n  buttons.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      let str = btn.innerText.toLowerCase();\n      window.location.hash = str;\n      console.log(str);\n    });\n  });\n  // debugger;\n  let DOMNode = document.querySelector('.content');\n  let router = new Router(DOMNode);\n  router.start();\n  \n});\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./router.js":
/*!*******************!*\
  !*** ./router.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Router {\n  constructor(node) {\n    this.node = node;  \n    this.render = this.render.bind(this);\n  }\n\n  start(){\n    window.addEventListener('hashchange', this.render);\n    // document.addEventListener('hashchange', ()=> console.log('re-render')));\n    // window.onhashchange = e => this.render();\n    // window.onhashchange = this.render.bind(this);\n  }\n\n  render(){\n    // debugger;\n    this.node.innerHTML = \"\";\n    let route = this.activeRoute();\n    let newTag = document.createElement('p');\n    newTag.innerHTML = route;\n    this.node.appendChild(newTag);\n  }\n\n  activeRoute(){\n    return window.location.hash.slice(1);\n  }\n\n}\n\nmodule.exports = Router;\n// function Router(node){\n//   this.node = node;\n// }\n// \n// Router.prototype.start = function(){\n//   window.onhashchange = this.render;\n// };\n// \n// Router.prototype.render = function(){\n//     this.node.innerHTML = \"\";\n//     let route = this.activeRoute();\n//     let newTag = document.createElement('p');\n//     newTag.innerHTML = route;\n//     this.node.appendChild(newTag);\n// };\n// \n// Router.prototype.activeRoute = function(){\n//   return window.location.hash.slice(1);\n// };\n\n\n\n//# sourceURL=webpack:///./router.js?");

/***/ })

/******/ });