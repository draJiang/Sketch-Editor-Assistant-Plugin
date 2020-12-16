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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/my-command.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/my-command.js":
/*!***************************!*\
  !*** ./src/my-command.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sketch = __webpack_require__(/*! sketch */ "sketch");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  console.log(context.selection);
  var selection1 = context.selection; //当前选中图层的数组，用于设置样式

  var selection2 = sketch.getSelectedDocument().selectedLayers.layers; //当前选中图层的数组，长度与 selection1 是一样的，用于解析每行的字符串

  if (selection2.length == 0) {
    sketch.UI.message('⚠️请先选中文本');
    return;
  }

  console.log(selection2[0].text);
  var LayerTextArr;
  var recordQueryIndex = 0; //const h2BoldFont = NSFontManager.sharedFontManager().convertFont_toHaveTrait(selection2[0].sketchObject.font(), NSUnderlineStyleSingle);
  //layer.sketchObject.addAttribute_value_forRange_(NSFontAttributeName,h2BoldFont, NSMakeRange(start, end)); // NSMakeRange 定义设置样式文字位置
  //selection2[0].sketchObject.addAttribute_value_forRange(NSStrikethroughStyleAttributeName, NSUnderlineStyleSingle, NSMakeRange(0, 4)); // NSMakeRange 定义设置样式文字位置
  //selection1[0].addAttribute_value_forRange_(NSFontAttributeName,tFontSize, NSMakeRange(5, 4));
  //selection1[0].addAttribute_value_forRange_(NSFontAttributeName,boldFont, NSMakeRange(5, 4));

  for (var i = 0; i < selection2.length; i++) {
    recordQueryIndex = 0; //return
    //console.log(layer.stringValue())

    console.log("=============================i: ");
    console.log(i);

    if (selection1[i].class() != "MSTextLayer") {
      console.log('selection1[i].class()!="MSTextLayer"');
      continue;
    }

    LayerTextArr = selection2[i].text.split("\n"); //将文本段落按行进行拆分，获得一个每行字符串的数组

    console.log("LayerTextArr: ");
    console.log(LayerTextArr);
    console.log(selection1[i].class());
    selection1[i].setLineHeight(24); //初始化加粗、删除线样式

    selection2[i].sketchObject.addAttribute_value_forRange(NSStrikethroughStyleAttributeName, NSUnderlineStyleNone, NSMakeRange(0, selection2[i].text.length)); // NSMakeRange 定义设置样式文字位置

    var UnoldFont = NSFontManager.sharedFontManager().convertFont_toHaveTrait(selection2[i].sketchObject.font(), NSUnboldFontMask);
    selection2[i].sketchObject.addAttribute_value_forRange_(NSFontAttributeName, UnoldFont, NSMakeRange(0, selection2[i].text.length)); // NSMakeRange 定义设置样式文字位置

    var immutableColor = MSImmutableColor.colorWithSVGString_('#333333');
    var color = MSColor.alloc().initWithImmutableObject_(immutableColor);
    selection1[i].setTextColor(color);

    for (var j = 0; j < LayerTextArr.length; j++) {
      //处理每行字符串的样式,传入单行字符串、此图层的文本段落
      console.log("=========="); //console.log(selection1[i].stringValue())

      console.log("LayerTextArr[j]: ");
      console.log(LayerTextArr[j]); //main(LayerTextArr[j],selection2[i])

      selection2[i] = main(LayerTextArr[j], selection2[i]);
    }

    var underArr = [];
    var boldArr = [];
    console.log("~~~~");
    recordQueryIndex = 0; //删除线

    while (selection2[i].text.indexOf('~~', recordQueryIndex) != -1) {
      console.log(selection2[i].text.indexOf('~~', recordQueryIndex));
      underArr.push(selection2[i].text.indexOf('~~', recordQueryIndex));
      recordQueryIndex = selection2[i].text.indexOf('~~', recordQueryIndex) + 1;
    }

    console.log(underArr);

    if (underArr.length > 1) {
      for (var k = 0; k < underArr.length - 2; k++) {
        if (k != 0 && k < underArr.length - 2) {
          k += 1;
        } //const h2BoldFont = NSFontManager.sharedFontManager().convertFont_toHaveTrait(selection2[i].sketchObject.font(), NSUnderlineStyleSingle);


        selection2[i].sketchObject.addAttribute_value_forRange(NSStrikethroughStyleAttributeName, NSUnderlineStyleSingle, NSMakeRange(underArr[k], underArr[k + 1] - underArr[k] + 2)); // NSMakeRange 定义设置样式文字位置
      }
    }

    recordQueryIndex = 0; //加粗

    console.log("**********");
    var h1BoldFont = NSFontManager.sharedFontManager().convertFont_toHaveTrait(selection2[i].sketchObject.font(), NSBoldFontMask);

    while (selection2[i].text.indexOf('**', recordQueryIndex) != -1) {
      console.log(selection2[i].text.indexOf('**', recordQueryIndex));
      boldArr.push(selection2[i].text.indexOf('**', recordQueryIndex));
      recordQueryIndex = selection2[i].text.indexOf('**', recordQueryIndex) + 1;
    }

    console.log(boldArr);

    if (boldArr.length > 1) {
      for (var m = 0; m < boldArr.length - 2; m++) {
        if (m != 0 && m < boldArr.length - 2) {
          m += 1;
        }

        selection2[i].sketchObject.addAttribute_value_forRange_(NSFontAttributeName, h1BoldFont, NSMakeRange(boldArr[m], boldArr[m + 1] - boldArr[m] + 2)); // NSMakeRange 定义设置样式文字位置
      }
    }
  } //selectionLayer.stringValue())
  //console.log(selection.length)
  //console.log(sketch.getSelectedDocument().selectedLayers.length)


  function main(rowStr, layer) {
    var markEnd;
    var keyValue;
    var strInAllStart, strInAllEnd;
    markEnd = rowStr.indexOf(' ');
    keyValue = rowStr.substring(0, markEnd);
    console.log("rowStr: " + rowStr);
    console.log("keyValue: " + keyValue); //find thisStr in allStr index

    strInAllStart = layer.text.indexOf(rowStr, recordQueryIndex);

    if (strInAllStart != 0) {//strInAllStart+=2
    } //console.log("layer.stringValue(): "+layer.stringValue().replace(/\n/g,""))


    console.log("layer.stringValue(): " + layer.text);
    strInAllEnd = rowStr.length;
    recordQueryIndex += rowStr.length;
    console.log("start,end: ");
    console.log(strInAllStart);
    console.log(strInAllEnd);

    switch (keyValue) {
      case "#":
        layer = setHeading1(layer, strInAllStart, strInAllEnd);
        break;

      case "##":
        layer = setHeading2(layer, strInAllStart, strInAllEnd);
        break;

      default:
        layer = setDesc(layer, strInAllStart, strInAllEnd);
    }

    return layer;
  }

  function setHeading1(layer, start, end) {
    console.log('setHeading1'); //layer = layer.sketchObject
    //fontSize

    console.log(start);
    console.log(end);
    console.log(layer.text);
    console.log("------");
    console.log(layer.text.substring(start, start + end)); //layer = layer.sketchObject

    var h1BoldFont = NSFontManager.sharedFontManager().convertFont_toHaveTrait(layer.sketchObject.font(), NSBoldFontMask); //layer.sketchObject.addAttribute_value_forRange_(NSFontAttributeName,h1BoldFont, NSMakeRange(start, end)); // NSMakeRange 定义设置样式文字位置

    var h1FontSize = NSFontManager.sharedFontManager().convertFont_toSize(h1BoldFont, 14.0);
    layer.sketchObject.addAttribute_value_forRange_(NSFontAttributeName, h1FontSize, NSMakeRange(start, end)); // NSMakeRange 定义设置样式文字位置

    return layer;
  }

  function setHeading2(layer, start, end) {
    console.log('setHeading2');
    console.log(start);
    console.log(end);
    console.log("layer.stringValue().substring(start,start+end): ");
    console.log(layer.text);
    console.log("------");
    console.log(layer.text.substring(start, start + end)); //layer = layer.sketchObject

    var h2BoldFont = NSFontManager.sharedFontManager().convertFont_toHaveTrait(layer.sketchObject.font(), NSBoldFontMask); //layer.sketchObject.addAttribute_value_forRange_(NSFontAttributeName,h2BoldFont, NSMakeRange(start, end)); // NSMakeRange 定义设置样式文字位置

    var h2FontSize = NSFontManager.sharedFontManager().convertFont_toSize(h2BoldFont, 14.0);
    layer.sketchObject.addAttribute_value_forRange_(NSFontAttributeName, h2FontSize, NSMakeRange(start, end)); // NSMakeRange 定义设置样式文字位置

    return layer;
  }

  function setDesc(layer, start, end) {
    console.log('setDesc');
    console.log(layer.text);
    console.log("------");
    console.log(layer.text.substring(start, start + end)); //layer = layer.sketchObject

    var descBoldFont = NSFontManager.sharedFontManager().convertFont_toHaveTrait(layer.sketchObject.font(), NSUnboldFontMask);
    layer.sketchObject.addAttribute_value_forRange_(NSFontAttributeName, descBoldFont, NSMakeRange(start, end)); // NSMakeRange 定义设置样式文字位置

    var descFontSize = NSFontManager.sharedFontManager().convertFont_toSize(descBoldFont, 14.0);
    layer.sketchObject.addAttribute_value_forRange_(NSFontAttributeName, descFontSize, NSMakeRange(start, end)); // NSMakeRange 定义设置样式文字位置
    //layer.sketchObject.addAttribute_value_forRange_(NSFontAttributeName,descBoldFont, NSMakeRange(start, end)); // NSMakeRange 定义设置样式文字位置

    return layer;
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

//# sourceMappingURL=__my-command.js.map