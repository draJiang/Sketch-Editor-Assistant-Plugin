var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lineDrawer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lineDrawer.js":
/*!***************************!*\
  !*** ./src/lineDrawer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sketch = __webpack_require__(/*! sketch */ "sketch");

var document = sketch.getSelectedDocument(); // 当前文档

var mySelectedLayers = document.selectedLayers; // 选中的图层

/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (mySelectedLayers.layers.length == 0) {
    sketch.UI.message('⚠️ 请选中线条');
    return;
  } //操作线


  function clickLine(layer, sytleIndex) {
    layer.style.borders[0].color = '#0091ffff';
    layer.style.borders[0].thickness = 2;
    layer.style.borderOptions.startArrowhead = 'OpenCircle';
    layer.style.borderOptions.endArrowhead = 'FilledArrow';
    layer.style.borderOptions.dashPattern = [4, 4];
    layer.sharedStyleId = lineStyle[sytleIndex];
  } //流程线


  function flowLine(layer, sytleIndex) {
    layer.style.borders[0].color = '#0091ffff';
    layer.style.borders[0].thickness = 2;
    layer.style.borderOptions.startArrowhead = 'FilledCircle';
    layer.style.borderOptions.endArrowhead = 'OpenArrow';
    layer.style.borderOptions.dashPattern = [];
    layer.sharedStyleId = lineStyle[sytleIndex];
  } //线条样式配置


  var lineStyle = ['7560DAB0-5EAD-427B-A833-62C4D141B62F', '94F2F3E3-84FC-4254-984C-78C8AC9CE1A0']; //每次运行脚本将在此列表中循环切换样式

  var sytleIndex = -1; //遍历选中的所有图层

  for (var i = 0; i < mySelectedLayers.layers.length; i++) {
    //判断是否为线条
    if (mySelectedLayers.layers[i].type != 'ShapePath') {
      //不是线条则跳过
      continue;
    } else {
      //是线条则设置样式
      //判断当前样式是否在配置项中
      for (var j = 0; j < lineStyle.length; j++) {
        if (mySelectedLayers.layers[i].sharedStyleId == lineStyle[j]) {
          if (j == lineStyle.length - 1) {
            sytleIndex = 0;
          } else {
            sytleIndex = j + 1;
          }

          break;
        }
      }

      if (sytleIndex < 0) {
        //当前样式不存在在配置样式中，则默认设置为首个样式
        clickLine(mySelectedLayers.layers[i], 0);
      } else {
        //若存在则获取当前样式在配置项中的索引，并设置样式为下一个样式（头尾相连循）
        switch (sytleIndex) {
          case 0:
            clickLine(mySelectedLayers.layers[i], sytleIndex);
            break;

          case 1:
            flowLine(mySelectedLayers.layers[i], sytleIndex);
            break;
        }
      }
    }
  }
});

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=__lineDrawer.js.map