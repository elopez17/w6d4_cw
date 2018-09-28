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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(els) {\n    this.els = els;\n  }\n  \n  html(str){\n    if (str === undefined) {\n      return this.els[0].innerHTML;\n    } else {\n      this.els.forEach(function(el){\n        el.innerHTML = str;\n      });\n    }\n  }\n  \n  empty(){\n    this.els.forEach((el) => el.innerHTML = \"\");\n  }\n  \n  append(args){\n    this.els.forEach (\n      el => {\n        if (args instanceof HTMLElement || args instanceof String) {\n           el.innerHTML += ( args instanceof HTMLElement ? args.outerHTML : args ); \n        } else {\n          args.forEach (\n            (arg) => {\n              el.innerHTML += arg.outerHTML;\n            }\n          );\n        }\n      }\n    );\n  }\n  \n  attr(name, val) {\n    if (val === undefined) {\n      return this.els[0].getAttribute(name);\n    } else {\n      this.els.forEach((el) => { el.setAttribute(name, val); });\n    }\n  }\n  \n  addClass(names) {\n    const classNames = names.split(\" \");\n    this.els.forEach((el) => { el.classList.add(...classNames); });\n  }\n  \n  removeClass(names) {\n    const classNames = names.split(\" \");\n    this.els.forEach((el) => { el.classList.remove(...classNames); });\n  }\n  \n  children(){\n    let children = [];\n    \n    this.els.forEach((el) => { \n      let c = Array.from(el.children);\n      children = children.concat(c);\n    });\n    return new DOMNodeCollection(children);\n  }\n  \n  parent(){\n    let parents = [];\n    \n    this.els.forEach((el) => { \n      let c = Array.from(el.parentNode);\n      parents = parents.concat(c);\n    });\n    return new DOMNodeCollection(parents);\n  }\n  \n  find(str){\n    let result = [];\n    \n    this.els.forEach((el) => {\n      let temp = el.querySelectorAll(str);\n      result = result.concat(temp);\n    });\n    return new DOMNodeCollection(result);\n  }\n  \n  remove(){\n    this.els.forEach((el) => {\n      el.remove();\n    });\n    this.els = [];\n  }\n  \n  on(type, callback) {\n    this.onCallback = callback;\n    this.els.forEach( el => {\n      el.addEventListener(type, callback);\n    });\n  }\n  \n  off(type) {\n    this.els.forEach( el => {\n      el.removeEventListener(type, this.onCallback);\n    });\n  }\n    \n}\n\nmodule.exports = DOMNodeCollection;\n\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./lib/dom_node_collection.js\");\n\nwindow.$l = function(arg) {\n  this.callbacks = this.callbacks || [];\n  \n  if (arg instanceof HTMLElement) {\n    return new DOMNodeCollection([arg]);\n    \n  } else if (arg instanceof Function) {\n    this.callbacks.push(arg);\n    \n    if (document.readyState === 'complete') {\n      this.callbacks.forEach (\n        callback => callback()\n      );\n    } else {\n      document.addEventListener('DOMContentLoaded', function() {\n        this.callbacks.forEach (\n          callback => callback()\n        );\n      });\n    }\n    \n  } else {\n    const els = document.querySelectorAll(arg);\n    return new DOMNodeCollection(Array.from(els));\n  }\n};\n\n$l.extend = function(...args){\n  return Object.assign({}, ...args);\n};\n\n$l.ajax = function(options){\n  let df = {success: (res) => window.location = JSON.parse(res).data.image_url ,\n            error: () => console.log('error'),\n            url: `https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G`,\n            data: {}, \n            method: \"GET\", \n            contentType: \"JSON\" };\n            \n  options = Object.assign({}, df, options);\n  const xhr = new XMLHttpRequest();\n  \n  xhr.onreadystatechange = function(){\n    if (xhr.readyState === 4) {\n      if (xhr.status >= 200 && xhr.status < 300) {\n        options.success(xhr.response);\n      } else {\n        options.error(xhr.response);\n      }\n    }\n  };\n  \n  xhr.open(options.method, options.url);\n  xhr.send(options.data);  \n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });