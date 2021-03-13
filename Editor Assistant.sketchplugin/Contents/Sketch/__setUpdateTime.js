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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/setUpdateTime.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/setUpdateTime.js":
/*!******************************!*\
  !*** ./src/setUpdateTime.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 在当前画板插入时间
var sketch = __webpack_require__(/*! sketch */ "sketch");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var document = sketch.getSelectedDocument(); // 当前 .sketch 文档

  var selection = document.selectedLayers; // 选中的图层列表

  var Text = __webpack_require__(/*! sketch/dom */ "sketch/dom").Text;

  if (selection.layers.length == 0) {
    sketch.UI.message('⚠️ 请选中画板或图层');
    return;
  }

  if (selection.layers.length > 1) {
    sketch.UI.message('⚠️ 最多选中 1 画板或图层');
    return;
  } //  --- 在 '' 符号内配置你的姓名 ---


  var userName = '';
  var isArtboard = false; // 记录是否为画板

  var ab; // 画板

  var runSun = 0; // 记录查询画板的层级数

  var timeIsExist = false; // 记录是否为时间图层

  var timeTextLayer; // 时间图层
  // --- 获取画板 ---

  if (selection.layers[0].type == 'Artboard') {
    // 如果当前选中的是画板
    ab = selection.layers[0];
  } else {
    ab = selection.layers[0].parent; // 取当前选中图层的父图层

    while (isArtboard == false) {
      runSun += 1; // 记录遍历次数，达到上限则跳出
      // 判断图层是否为画板

      if (ab.type == 'Artboard') {
        isArtboard = true;
      } else {
        // 不是画板则继续向上查询
        ab = ab.parent;
      } // 增加上限值，避免处理时间过长


      if (runSun >= 10) {
        break;
      }
    }
  } // --- 设置时间信息 ---
  // 遍历当前画板，查询是否已存在时间信息


  for (var i = ab.layers.length - 1; i >= 0; i--) {
    if (ab.layers[i].name == '[time]') {
      timeIsExist = true;
      timeTextLayer = ab.layers[i];
      break;
    }
  } // 获取当前时间


  var myDate = new Date();

  function addZero(m) {
    return m < 10 ? '0' + m : m;
  }

  var year = myDate.getFullYear();
  var month = myDate.getMonth() + 1;
  var date = myDate.getDate();
  var hours = myDate.getHours();
  var minutes = myDate.getMinutes();
  month = addZero(month);
  hours = addZero(hours);
  minutes = addZero(minutes);
  date = addZero(date);
  myDate = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes;

  if (timeIsExist) {
    // 已存在则更新
    timeTextLayer.text = '最近更新：' + myDate + ' ' + userName;
    timeTextLayer.name = '[time]';
    timeTextLayer.index = ab.layers.length - 1;
  } else {
    // 不存在则新增
    var text = new Text({
      text: '最近更新：' + myDate + ' ' + userName,
      //alignment: Text.Alignment.center
      parent: ab
    });
    text.name = '[time]';
    text.frame.x = 10;
    text.frame.y = 10;
    text.style.fontSize = 28;
    text.style.textColor = '#999999';
    text.index = ab.layers.length - 1;
    text.locked = true;
  }

  sketch.UI.message('✅ 已添加时间：' + myDate);
});

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

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

//# sourceMappingURL=__setUpdateTime.js.map