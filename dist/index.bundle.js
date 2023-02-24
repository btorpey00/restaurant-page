/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./CarterOne-Regular.ttf */ "./src/CarterOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! images/background.jpg */ "./src/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'CarterOne';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('tff');\n    font-weight: 400;\n    font-style: normal;\n  }\n\n:root {\n    --header-bg: rgba(0, 0, 0, 0.95);\n    --header-text: rgb(255, 140, 140);\n    --hover-color: rgb(255, 105, 105);\n    --content-bg: rgba(0, 0, 0, 0.8);\n    --content-text: rgb(255, 120, 120);\n    --content-header: rgb(255, 75, 75);;\n}\n\nbody {\n    font-family: 'CarterOne', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    background-color: black;\n    background-repeat:repeat-y;\n    margin: 0;\n}\n\n.header {\n    display: flex;\n    position: sticky;\n    margin: 0;\n    padding-top: 1.5rem;\n    padding-bottom: .5rem;\n    padding-left: 2rem;\n    width: 100%;\n    top: 0;\n    left: 0;\n    background-color: var(--header-bg);\n    color: var(--header-text);\n    justify-content: space-between;\n    align-items: center;\n}\n\n.logo {\n    font-size: 3rem;\n    font-weight: bold;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;;\n}\n\n.logo:hover {\n    color: var(--hover-color);\n}\n\n.header-list {\n    margin-left: auto;\n    display: flex;\n    gap: 2rem;\n    list-style: none;\n    margin-right: 4rem;\n    margin-bottom: 0;\n    font-size: 1.5rem;\n    cursor: pointer;\n    flex-wrap: wrap;\n}\n\n.nav-link:hover {\n    position: relative;\n    color: var(--hover-color);\n    transform: translateY(-.05rem);\n    scale: 1.1;\n}\n\n.content {\n    max-width: 1000px;\n    display: flex;\n    flex-direction: column;\n    margin-top: 7rem;\n    margin-left: 50%;\n    transform: translateX(-50%);\n    background-color: var(--content-bg);\n    text-align: center;\n    font-size: 1.5rem;\n    color: var(--content-text);\n    padding: 2rem;\n    border-radius: 3rem;\n}\n\n.content-header {\n    font-size: 3rem;\n    font-weight: bold;\n    color: var(--content-header);\n}\n\n.home-text{\n    font-size: 2rem;\n}\n.home-header {\n    font-size: 4rem;\n}\n\n.menu {\n    color: var(--content-text);\n}\n\n.menu-title {\n    text-align: center;\n    font-size: 2.5rem;\n    background-color: var(--content-bg);\n    color: var(--content-header);\n}\n\n.menu-item {\n    background-color: var(--content-bg);\n    display: flex;\n    gap: 10px;\n    padding: 10px;\n    border-radius: 2rem;\n}\n\n.menu-item img {\n    max-width: 250px;\n    border-radius: 2rem;\n    align-self: center;\n}\n\n.menu-item-title {\n    color: var(--content-header);\n    font-size: 1.5rem;\n    font-weight: bold;\n    margin-top: 0;\n}\n\n.menu-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));\n    gap: 2rem;\n    padding: 3rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,0DAAiD;IACjD,gBAAgB;IAChB,kBAAkB;EACpB;;AAEF;IACI,gCAAgC;IAChC,iCAAiC;IACjC,iCAAiC;IACjC,gCAAgC;IAChC,kCAAkC;IAClC,kCAAkC;AACtC;;AAEA;IACI,mIAAmI;IACnI,yDAA4C;IAC5C,sBAAsB;IACtB,uBAAuB;IACvB,0BAA0B;IAC1B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,SAAS;IACT,mBAAmB;IACnB,qBAAqB;IACrB,kBAAkB;IAClB,WAAW;IACX,MAAM;IACN,OAAO;IACP,kCAAkC;IAClC,yBAAyB;IACzB,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,SAAS;IACT,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,SAAS;IACT,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,8BAA8B;IAC9B,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,gBAAgB;IAChB,2BAA2B;IAC3B,mCAAmC;IACnC,kBAAkB;IAClB,iBAAiB;IACjB,0BAA0B;IAC1B,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,4BAA4B;AAChC;;AAEA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,mCAAmC;IACnC,4BAA4B;AAChC;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,SAAS;IACT,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,4BAA4B;IAC5B,iBAAiB;IACjB,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,SAAS;IACT,aAAa;AACjB","sourcesContent":["@font-face {\n    font-family: 'CarterOne';\n    src: url('./CarterOne-Regular.ttf') format('tff');\n    font-weight: 400;\n    font-style: normal;\n  }\n\n:root {\n    --header-bg: rgba(0, 0, 0, 0.95);\n    --header-text: rgb(255, 140, 140);\n    --hover-color: rgb(255, 105, 105);\n    --content-bg: rgba(0, 0, 0, 0.8);\n    --content-text: rgb(255, 120, 120);\n    --content-header: rgb(255, 75, 75);;\n}\n\nbody {\n    font-family: 'CarterOne', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    background-image: url(images/background.jpg);\n    background-size: cover;\n    background-color: black;\n    background-repeat:repeat-y;\n    margin: 0;\n}\n\n.header {\n    display: flex;\n    position: sticky;\n    margin: 0;\n    padding-top: 1.5rem;\n    padding-bottom: .5rem;\n    padding-left: 2rem;\n    width: 100%;\n    top: 0;\n    left: 0;\n    background-color: var(--header-bg);\n    color: var(--header-text);\n    justify-content: space-between;\n    align-items: center;\n}\n\n.logo {\n    font-size: 3rem;\n    font-weight: bold;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;;\n}\n\n.logo:hover {\n    color: var(--hover-color);\n}\n\n.header-list {\n    margin-left: auto;\n    display: flex;\n    gap: 2rem;\n    list-style: none;\n    margin-right: 4rem;\n    margin-bottom: 0;\n    font-size: 1.5rem;\n    cursor: pointer;\n    flex-wrap: wrap;\n}\n\n.nav-link:hover {\n    position: relative;\n    color: var(--hover-color);\n    transform: translateY(-.05rem);\n    scale: 1.1;\n}\n\n.content {\n    max-width: 1000px;\n    display: flex;\n    flex-direction: column;\n    margin-top: 7rem;\n    margin-left: 50%;\n    transform: translateX(-50%);\n    background-color: var(--content-bg);\n    text-align: center;\n    font-size: 1.5rem;\n    color: var(--content-text);\n    padding: 2rem;\n    border-radius: 3rem;\n}\n\n.content-header {\n    font-size: 3rem;\n    font-weight: bold;\n    color: var(--content-header);\n}\n\n.home-text{\n    font-size: 2rem;\n}\n.home-header {\n    font-size: 4rem;\n}\n\n.menu {\n    color: var(--content-text);\n}\n\n.menu-title {\n    text-align: center;\n    font-size: 2.5rem;\n    background-color: var(--content-bg);\n    color: var(--content-header);\n}\n\n.menu-item {\n    background-color: var(--content-bg);\n    display: flex;\n    gap: 10px;\n    padding: 10px;\n    border-radius: 2rem;\n}\n\n.menu-item img {\n    max-width: 250px;\n    border-radius: 2rem;\n    align-self: center;\n}\n\n.menu-item-title {\n    color: var(--content-header);\n    font-size: 1.5rem;\n    font-weight: bold;\n    margin-top: 0;\n}\n\n.menu-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));\n    gap: 2rem;\n    padding: 3rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAbout)
/* harmony export */ });
function createAbout () {
    const about = document.createElement('div');
    about.className = 'about content';

    const aboutHeader = document.createElement('h2');
    aboutHeader.className = 'about-header content-header';
    aboutHeader.innerText = 'About TorPizza'
    about.appendChild(aboutHeader);

    const aboutText = document.createElement('p');
    aboutText.className = 'about-text content-text';
    aboutText.innerText = "Welcome to TorPizza, a pizza restaurant that offers delicious, handcrafted pizzas made with only the freshest ingredients. Our passion for pizza is evident in every slice, from the savory sauce to the perfect crust. \n\n At TorPizza, we believe that quality ingredients make all the difference. That's why we use only the finest ingredients, sourced from local farmers and suppliers whenever possible. We take pride in offering a variety of toppings, from classic pepperoni and cheese to unique and flavorful combinations that will excite your taste buds.\n\n At TorPizza, our goal is to provide a delicious and enjoyable dining experience that keeps our customers coming back for more. Come join us and taste the difference that quality ingredients and expert craftsmanship can make."
    about.appendChild(aboutText);

    return about;
}

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContact)
/* harmony export */ });
function createContact() {
    const contact = document.createElement('div');
    contact.className = 'contact content';

    const contactHeader = document.createElement('h2');
    contactHeader.className = 'contact-header content-header';
    contactHeader.innerText = 'Contact TorPizza'
    contact.appendChild(contactHeader);

    const contactText = document.createElement('p');
    contactText.className = 'contact-text content-text';
    contactText.innerText = 'Come visit us at: \n 1234 Main St \n Rockford, MI 49341 \n\n\n Call us at: \n (555)-616-7119'
    contact.appendChild(contactText);

    return contact;
}

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHome)
/* harmony export */ });
function createHome() {
    const home = document.createElement('div');
    home.className = 'home content';

    const homeHeader = document.createElement('h2');
    homeHeader.className = 'home-header content-header';
    homeHeader.innerText = 'Welcome to TorPizza';
    home.appendChild(homeHeader);

    const homeText = document.createElement('p');
    homeText.className = 'home-text content-text';
    homeText.innerText = 'TorPizza was created in 2023 as a fictional pizza restaurant for the restaurant page of The Odin Project.  The name is inspired from combining the last name of the creator (Torpey) with Pizza.';
    home.appendChild(homeText);

    return home;
}

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _images_cheese_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/cheese.jpg */ "./src/images/cheese.jpg");
/* harmony import */ var _images_bbqchicken_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/bbqchicken.jpg */ "./src/images/bbqchicken.jpg");
/* harmony import */ var _images_hawaiian_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/hawaiian.jpg */ "./src/images/hawaiian.jpg");
/* harmony import */ var _images_margherita_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/margherita.jpg */ "./src/images/margherita.jpg");
/* harmony import */ var _images_pepporoni_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/pepporoni.jpg */ "./src/images/pepporoni.jpg");
/* harmony import */ var _images_sausage_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/sausage.jpg */ "./src/images/sausage.jpg");
/* harmony import */ var _images_supreme_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/supreme.jpg */ "./src/images/supreme.jpg");
/* harmony import */ var _images_veggie_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/veggie.jpg */ "./src/images/veggie.jpg");










const makeMenuItem = (title, description, picture) => {
    return {
        title,
        description,
        picture
    }
}

const cheese = makeMenuItem('Cheese', 'Our delicious cheese pizza is a timeless classic that features a crispy crust topped with a generous layer of rich tomato sauce and a blend of melted mozzarella and parmesan cheese.', _images_cheese_jpg__WEBPACK_IMPORTED_MODULE_0__);
const bbqChicken = makeMenuItem('BBQ Chicken', 'Indulge in the smoky and sweet flavors of our BBQ chicken pizza! This delectable pizza features a crispy crust, smothered in tangy BBQ sauce and topped with succulent pieces of grilled chicken, red onions, and fresh cilantro.', _images_bbqchicken_jpg__WEBPACK_IMPORTED_MODULE_1__);
const hawaiian = makeMenuItem('Hawaiian', 'Get ready for a tropical escape with our Hawaiian pizza! This delicious pizza is a customer favorite, featuring a crispy crust topped with a sweet and tangy tomato sauce, juicy slices of ham, and chunks of sweet and juicy pineapple. ', _images_hawaiian_jpg__WEBPACK_IMPORTED_MODULE_2__);
const margherita = makeMenuItem('Margherita', 'Indulge in the simplicity and deliciousness of our classic Margherita pizza. Made with only the freshest ingredients, this pizza features a crispy crust topped with a vibrant tomato sauce, fresh mozzarella cheese, and fragrant basil leaves.', _images_margherita_jpg__WEBPACK_IMPORTED_MODULE_3__);
const pepporoni = makeMenuItem('Pepporoni', 'Get ready for a flavor explosion with our delicious Pepperoni pizza! This classic pizza variety features a crispy crust topped with a savory tomato sauce, a generous amount of melted mozzarella cheese, and delicious slices of spicy pepperoni sausage.', _images_pepporoni_jpg__WEBPACK_IMPORTED_MODULE_4__);
const sausage = makeMenuItem('Sausage', 'Satisfy your hunger with our delicious Sausage pizza! This hearty pizza variety features a crispy crust, a savory tomato sauce, and a generous layer of melted mozzarella cheese, all topped off with flavorful slices of sausage.', _images_sausage_jpg__WEBPACK_IMPORTED_MODULE_5__);
const supreme = makeMenuItem('Supreme', 'Indulge in the ultimate pizza experience with our delicious Supreme pizza! This hearty pizza variety is loaded with a savory tomato sauce, a generous layer of melted mozzarella cheese, and an assortment of toppings that includes savory slices of pepperoni, Italian sausage, green bell peppers, onions, and black olives.', _images_supreme_jpg__WEBPACK_IMPORTED_MODULE_6__);
const veggie = makeMenuItem('Veggie', 'Looking for a delicious and healthy pizza option? Look no further than our Veggie pizza! This delicious pizza features a crispy crust topped with a savory tomato sauce, a generous layer of melted mozzarella cheese, and a medley of fresh and flavorful vegetables. Our toppings include juicy mushrooms, crisp green bell peppers, ripe tomatoes, red onions, and black olives.', _images_veggie_jpg__WEBPACK_IMPORTED_MODULE_7__);

const menuItems = [ cheese, pepporoni, bbqChicken, hawaiian, margherita, sausage, supreme, veggie];


function createMenu (){
    const menu = document.createElement('div');
    menu.className = 'menu';

    const menuTitle = document.createElement('h2');
    menuTitle.innerText = 'Menu';
    menuTitle.className='menu-title';
    menu.appendChild(menuTitle);

    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';
    menu.appendChild(menuContainer);
    
    for (let i = 0; i < menuItems.length; i++) {
        const itemContainer = document.createElement('div');
        itemContainer.className = 'menu-item';
        menuContainer.appendChild(itemContainer);

        const itemPic = document.createElement('img');
        itemPic.src = menuItems[i].picture;
        itemPic.setAttribute('alt', `Picture of ${menuItems[i].title} pizza`);
        itemContainer.appendChild(itemPic);

        const textContainer = document.createElement('div');
        textContainer.className = 'menu-text-container';
        itemContainer.appendChild(textContainer);

        const itemTitle = document.createElement('h3');
        itemTitle.innerText = menuItems[i].title;
        itemTitle.className = 'menu-item-title'
        textContainer.appendChild(itemTitle);

        const itemText = document.createElement('p');
        itemText.innerText = menuItems[i].description;
        itemText.className = 'menu-item-text'
        textContainer.appendChild(itemText);
    }


    return menu;
};



/***/ }),

/***/ "./src/CarterOne-Regular.ttf":
/*!***********************************!*\
  !*** ./src/CarterOne-Regular.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "077c4bbc891d504d9751.ttf";

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92f50fb84035557326ac.jpg";

/***/ }),

/***/ "./src/images/bbqchicken.jpg":
/*!***********************************!*\
  !*** ./src/images/bbqchicken.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9cc0dbe13ebd3a7d122d.jpg";

/***/ }),

/***/ "./src/images/cheese.jpg":
/*!*******************************!*\
  !*** ./src/images/cheese.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "156acd46954880df28c6.jpg";

/***/ }),

/***/ "./src/images/hawaiian.jpg":
/*!*********************************!*\
  !*** ./src/images/hawaiian.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a399808482d18076bc2.jpg";

/***/ }),

/***/ "./src/images/margherita.jpg":
/*!***********************************!*\
  !*** ./src/images/margherita.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "123fd0291565201617a3.jpg";

/***/ }),

/***/ "./src/images/pepporoni.jpg":
/*!**********************************!*\
  !*** ./src/images/pepporoni.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "143351ce9b9052491421.jpg";

/***/ }),

/***/ "./src/images/sausage.jpg":
/*!********************************!*\
  !*** ./src/images/sausage.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13002aafe2bd4cfa9435.jpg";

/***/ }),

/***/ "./src/images/supreme.jpg":
/*!********************************!*\
  !*** ./src/images/supreme.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd99eed4f87ea96e4c40.jpg";

/***/ }),

/***/ "./src/images/veggie.jpg":
/*!*******************************!*\
  !*** ./src/images/veggie.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e17d5be3ce323dce0eaa.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home.js */ "./src/pages/home.js");
/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu.js */ "./src/pages/menu.js");
/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about.js */ "./src/pages/about.js");
/* harmony import */ var _pages_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact.js */ "./src/pages/contact.js");






document.body.appendChild(createHeader());
document.body.appendChild((0,_pages_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());

function createHeader() {
    const header = document.createElement('div');
    header.className = 'header';
    
    const logo = document.createElement('h1');
    logo.className = 'logo';
    logo.textContent= 'TorPizza';
    header.appendChild(logo);
    logo.addEventListener('click', function() {
        document.body.innerHTML = '';
        document.body.appendChild(createHeader());
        document.body.appendChild((0,_pages_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    });
    
    const headerList = document.createElement('ul');
    headerList.className = 'header-list';
    header.appendChild(headerList);

    const links = ['Home', 'Menu', 'About', 'Contact'];

    for (let i = 0; i < links.length; i++) {
        const link = document.createElement('li');
        link.className = 'nav-link';
        link.textContent = links[i];
        headerList.appendChild(link);
        link.addEventListener('click', function(e) {
            document.body.innerHTML = '';
            document.body.appendChild(createHeader());
            if(e.target.innerText === 'Home') {
                document.body.appendChild((0,_pages_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
            }
            else if(e.target.innerText === 'Menu') {
                document.body.appendChild((0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
            }
            else if(e.target.innerText === 'About') {
                document.body.appendChild((0,_pages_about_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
            }
            else if(e.target.innerText === 'Contact') {
                document.body.appendChild((0,_pages_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
            }
        })
    }

    return header;
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywwREFBVTtBQUM1QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDBEQUFVO0FBQ3BEO0FBQ0E7QUFDQSwwQ0FBMEMsMERBQVU7QUFDcEQ7QUFDQTtBQUNBLDBDQUEwQywyREFBVztBQUNyRDtBQUNBO0FBQ0EsMENBQTBDLDZEQUFhO0FBQ3ZEO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQ2FydGVyT25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0NhcnRlck9uZSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RmZicpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuOnJvb3Qge1xcbiAgICAtLWhlYWRlci1iZzogcmdiYSgwLCAwLCAwLCAwLjk1KTtcXG4gICAgLS1oZWFkZXItdGV4dDogcmdiKDI1NSwgMTQwLCAxNDApO1xcbiAgICAtLWhvdmVyLWNvbG9yOiByZ2IoMjU1LCAxMDUsIDEwNSk7XFxuICAgIC0tY29udGVudC1iZzogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICAtLWNvbnRlbnQtdGV4dDogcmdiKDI1NSwgMTIwLCAxMjApO1xcbiAgICAtLWNvbnRlbnQtaGVhZGVyOiByZ2IoMjU1LCA3NSwgNzUpOztcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2FydGVyT25lJywgJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXk7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZyk7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dCk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjs7XFxufVxcblxcbi5sb2dvOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLmhlYWRlci1saXN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5uYXYtbGluazpob3ZlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0uMDVyZW0pO1xcbiAgICBzY2FsZTogMS4xO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tdG9wOiA3cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmcpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tY29udGVudC10ZXh0KTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG59XFxuXFxuLmNvbnRlbnQtaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLWNvbnRlbnQtaGVhZGVyKTtcXG59XFxuXFxuLmhvbWUtdGV4dHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4uaG9tZS1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5tZW51IHtcXG4gICAgY29sb3I6IHZhcigtLWNvbnRlbnQtdGV4dCk7XFxufVxcblxcbi5tZW51LXRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iZyk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb250ZW50LWhlYWRlcik7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJnKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtIGltZyB7XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbS10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb250ZW50LWhlYWRlcik7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNTAwcHgsIDFmcikpO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHBhZGRpbmc6IDNyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsMERBQWlEO0lBQ2pELGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG1JQUFtSTtJQUNuSSx5REFBNEM7SUFDNUMsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE1BQU07SUFDTixPQUFPO0lBQ1Asa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsU0FBUztJQUNULGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNERBQTREO0lBQzVELFNBQVM7SUFDVCxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0NhcnRlck9uZSc7XFxuICAgIHNyYzogdXJsKCcuL0NhcnRlck9uZS1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndGZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG5cXG46cm9vdCB7XFxuICAgIC0taGVhZGVyLWJnOiByZ2JhKDAsIDAsIDAsIDAuOTUpO1xcbiAgICAtLWhlYWRlci10ZXh0OiByZ2IoMjU1LCAxNDAsIDE0MCk7XFxuICAgIC0taG92ZXItY29sb3I6IHJnYigyNTUsIDEwNSwgMTA1KTtcXG4gICAgLS1jb250ZW50LWJnOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIC0tY29udGVudC10ZXh0OiByZ2IoMjU1LCAxMjAsIDEyMCk7XFxuICAgIC0tY29udGVudC1oZWFkZXI6IHJnYigyNTUsIDc1LCA3NSk7O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdDYXJ0ZXJPbmUnLCAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvYmFja2dyb3VuZC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXk7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZyk7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dCk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjs7XFxufVxcblxcbi5sb2dvOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLmhlYWRlci1saXN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5uYXYtbGluazpob3ZlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0uMDVyZW0pO1xcbiAgICBzY2FsZTogMS4xO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tdG9wOiA3cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmcpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tY29udGVudC10ZXh0KTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG59XFxuXFxuLmNvbnRlbnQtaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLWNvbnRlbnQtaGVhZGVyKTtcXG59XFxuXFxuLmhvbWUtdGV4dHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4uaG9tZS1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5tZW51IHtcXG4gICAgY29sb3I6IHZhcigtLWNvbnRlbnQtdGV4dCk7XFxufVxcblxcbi5tZW51LXRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iZyk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb250ZW50LWhlYWRlcik7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJnKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtIGltZyB7XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbS10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb250ZW50LWhlYWRlcik7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNTAwcHgsIDFmcikpO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHBhZGRpbmc6IDNyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBYm91dCAoKSB7XG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dC5jbGFzc05hbWUgPSAnYWJvdXQgY29udGVudCc7XG5cbiAgICBjb25zdCBhYm91dEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYWJvdXRIZWFkZXIuY2xhc3NOYW1lID0gJ2Fib3V0LWhlYWRlciBjb250ZW50LWhlYWRlcic7XG4gICAgYWJvdXRIZWFkZXIuaW5uZXJUZXh0ID0gJ0Fib3V0IFRvclBpenphJ1xuICAgIGFib3V0LmFwcGVuZENoaWxkKGFib3V0SGVhZGVyKTtcblxuICAgIGNvbnN0IGFib3V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dFRleHQuY2xhc3NOYW1lID0gJ2Fib3V0LXRleHQgY29udGVudC10ZXh0JztcbiAgICBhYm91dFRleHQuaW5uZXJUZXh0ID0gXCJXZWxjb21lIHRvIFRvclBpenphLCBhIHBpenphIHJlc3RhdXJhbnQgdGhhdCBvZmZlcnMgZGVsaWNpb3VzLCBoYW5kY3JhZnRlZCBwaXp6YXMgbWFkZSB3aXRoIG9ubHkgdGhlIGZyZXNoZXN0IGluZ3JlZGllbnRzLiBPdXIgcGFzc2lvbiBmb3IgcGl6emEgaXMgZXZpZGVudCBpbiBldmVyeSBzbGljZSwgZnJvbSB0aGUgc2F2b3J5IHNhdWNlIHRvIHRoZSBwZXJmZWN0IGNydXN0LiBcXG5cXG4gQXQgVG9yUGl6emEsIHdlIGJlbGlldmUgdGhhdCBxdWFsaXR5IGluZ3JlZGllbnRzIG1ha2UgYWxsIHRoZSBkaWZmZXJlbmNlLiBUaGF0J3Mgd2h5IHdlIHVzZSBvbmx5IHRoZSBmaW5lc3QgaW5ncmVkaWVudHMsIHNvdXJjZWQgZnJvbSBsb2NhbCBmYXJtZXJzIGFuZCBzdXBwbGllcnMgd2hlbmV2ZXIgcG9zc2libGUuIFdlIHRha2UgcHJpZGUgaW4gb2ZmZXJpbmcgYSB2YXJpZXR5IG9mIHRvcHBpbmdzLCBmcm9tIGNsYXNzaWMgcGVwcGVyb25pIGFuZCBjaGVlc2UgdG8gdW5pcXVlIGFuZCBmbGF2b3JmdWwgY29tYmluYXRpb25zIHRoYXQgd2lsbCBleGNpdGUgeW91ciB0YXN0ZSBidWRzLlxcblxcbiBBdCBUb3JQaXp6YSwgb3VyIGdvYWwgaXMgdG8gcHJvdmlkZSBhIGRlbGljaW91cyBhbmQgZW5qb3lhYmxlIGRpbmluZyBleHBlcmllbmNlIHRoYXQga2VlcHMgb3VyIGN1c3RvbWVycyBjb21pbmcgYmFjayBmb3IgbW9yZS4gQ29tZSBqb2luIHVzIGFuZCB0YXN0ZSB0aGUgZGlmZmVyZW5jZSB0aGF0IHF1YWxpdHkgaW5ncmVkaWVudHMgYW5kIGV4cGVydCBjcmFmdHNtYW5zaGlwIGNhbiBtYWtlLlwiXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRUZXh0KTtcblxuICAgIHJldHVybiBhYm91dDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0LmNsYXNzTmFtZSA9ICdjb250YWN0IGNvbnRlbnQnO1xuXG4gICAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29udGFjdEhlYWRlci5jbGFzc05hbWUgPSAnY29udGFjdC1oZWFkZXIgY29udGVudC1oZWFkZXInO1xuICAgIGNvbnRhY3RIZWFkZXIuaW5uZXJUZXh0ID0gJ0NvbnRhY3QgVG9yUGl6emEnXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcblxuICAgIGNvbnN0IGNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RUZXh0LmNsYXNzTmFtZSA9ICdjb250YWN0LXRleHQgY29udGVudC10ZXh0JztcbiAgICBjb250YWN0VGV4dC5pbm5lclRleHQgPSAnQ29tZSB2aXNpdCB1cyBhdDogXFxuIDEyMzQgTWFpbiBTdCBcXG4gUm9ja2ZvcmQsIE1JIDQ5MzQxIFxcblxcblxcbiBDYWxsIHVzIGF0OiBcXG4gKDU1NSktNjE2LTcxMTknXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0VGV4dCk7XG5cbiAgICByZXR1cm4gY29udGFjdDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lLmNsYXNzTmFtZSA9ICdob21lIGNvbnRlbnQnO1xuXG4gICAgY29uc3QgaG9tZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaG9tZUhlYWRlci5jbGFzc05hbWUgPSAnaG9tZS1oZWFkZXIgY29udGVudC1oZWFkZXInO1xuICAgIGhvbWVIZWFkZXIuaW5uZXJUZXh0ID0gJ1dlbGNvbWUgdG8gVG9yUGl6emEnO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZUhlYWRlcik7XG5cbiAgICBjb25zdCBob21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob21lVGV4dC5jbGFzc05hbWUgPSAnaG9tZS10ZXh0IGNvbnRlbnQtdGV4dCc7XG4gICAgaG9tZVRleHQuaW5uZXJUZXh0ID0gJ1RvclBpenphIHdhcyBjcmVhdGVkIGluIDIwMjMgYXMgYSBmaWN0aW9uYWwgcGl6emEgcmVzdGF1cmFudCBmb3IgdGhlIHJlc3RhdXJhbnQgcGFnZSBvZiBUaGUgT2RpbiBQcm9qZWN0LiAgVGhlIG5hbWUgaXMgaW5zcGlyZWQgZnJvbSBjb21iaW5pbmcgdGhlIGxhc3QgbmFtZSBvZiB0aGUgY3JlYXRvciAoVG9ycGV5KSB3aXRoIFBpenphLic7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChob21lVGV4dCk7XG5cbiAgICByZXR1cm4gaG9tZTtcbn0iLCJpbXBvcnQgY2hlZXNlUGljIGZyb20gJy4uL2ltYWdlcy9jaGVlc2UuanBnJztcbmltcG9ydCBiYnFDaGlja2VuUGljIGZyb20gJy4uL2ltYWdlcy9iYnFjaGlja2VuLmpwZyc7XG5pbXBvcnQgaGF3YWlpYW5QaWMgZnJvbSAnLi4vaW1hZ2VzL2hhd2FpaWFuLmpwZyc7XG5pbXBvcnQgbWFyZ2hlcml0YVBpYyBmcm9tICcuLi9pbWFnZXMvbWFyZ2hlcml0YS5qcGcnO1xuaW1wb3J0IHBlcHBvcm9uaVBpYyBmcm9tICcuLi9pbWFnZXMvcGVwcG9yb25pLmpwZyc7XG5pbXBvcnQgc2F1c2FnZVBpYyBmcm9tICcuLi9pbWFnZXMvc2F1c2FnZS5qcGcnO1xuaW1wb3J0IHN1cHJlbWVQaWMgZnJvbSAnLi4vaW1hZ2VzL3N1cHJlbWUuanBnJztcbmltcG9ydCB2ZWdnaWVQaWMgZnJvbSAnLi4vaW1hZ2VzL3ZlZ2dpZS5qcGcnO1xuXG5cbmNvbnN0IG1ha2VNZW51SXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHBpY3R1cmUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIHBpY3R1cmVcbiAgICB9XG59XG5cbmNvbnN0IGNoZWVzZSA9IG1ha2VNZW51SXRlbSgnQ2hlZXNlJywgJ091ciBkZWxpY2lvdXMgY2hlZXNlIHBpenphIGlzIGEgdGltZWxlc3MgY2xhc3NpYyB0aGF0IGZlYXR1cmVzIGEgY3Jpc3B5IGNydXN0IHRvcHBlZCB3aXRoIGEgZ2VuZXJvdXMgbGF5ZXIgb2YgcmljaCB0b21hdG8gc2F1Y2UgYW5kIGEgYmxlbmQgb2YgbWVsdGVkIG1venphcmVsbGEgYW5kIHBhcm1lc2FuIGNoZWVzZS4nLCBjaGVlc2VQaWMpO1xuY29uc3QgYmJxQ2hpY2tlbiA9IG1ha2VNZW51SXRlbSgnQkJRIENoaWNrZW4nLCAnSW5kdWxnZSBpbiB0aGUgc21va3kgYW5kIHN3ZWV0IGZsYXZvcnMgb2Ygb3VyIEJCUSBjaGlja2VuIHBpenphISBUaGlzIGRlbGVjdGFibGUgcGl6emEgZmVhdHVyZXMgYSBjcmlzcHkgY3J1c3QsIHNtb3RoZXJlZCBpbiB0YW5neSBCQlEgc2F1Y2UgYW5kIHRvcHBlZCB3aXRoIHN1Y2N1bGVudCBwaWVjZXMgb2YgZ3JpbGxlZCBjaGlja2VuLCByZWQgb25pb25zLCBhbmQgZnJlc2ggY2lsYW50cm8uJywgYmJxQ2hpY2tlblBpYyk7XG5jb25zdCBoYXdhaWlhbiA9IG1ha2VNZW51SXRlbSgnSGF3YWlpYW4nLCAnR2V0IHJlYWR5IGZvciBhIHRyb3BpY2FsIGVzY2FwZSB3aXRoIG91ciBIYXdhaWlhbiBwaXp6YSEgVGhpcyBkZWxpY2lvdXMgcGl6emEgaXMgYSBjdXN0b21lciBmYXZvcml0ZSwgZmVhdHVyaW5nIGEgY3Jpc3B5IGNydXN0IHRvcHBlZCB3aXRoIGEgc3dlZXQgYW5kIHRhbmd5IHRvbWF0byBzYXVjZSwganVpY3kgc2xpY2VzIG9mIGhhbSwgYW5kIGNodW5rcyBvZiBzd2VldCBhbmQganVpY3kgcGluZWFwcGxlLiAnLCBoYXdhaWlhblBpYyk7XG5jb25zdCBtYXJnaGVyaXRhID0gbWFrZU1lbnVJdGVtKCdNYXJnaGVyaXRhJywgJ0luZHVsZ2UgaW4gdGhlIHNpbXBsaWNpdHkgYW5kIGRlbGljaW91c25lc3Mgb2Ygb3VyIGNsYXNzaWMgTWFyZ2hlcml0YSBwaXp6YS4gTWFkZSB3aXRoIG9ubHkgdGhlIGZyZXNoZXN0IGluZ3JlZGllbnRzLCB0aGlzIHBpenphIGZlYXR1cmVzIGEgY3Jpc3B5IGNydXN0IHRvcHBlZCB3aXRoIGEgdmlicmFudCB0b21hdG8gc2F1Y2UsIGZyZXNoIG1venphcmVsbGEgY2hlZXNlLCBhbmQgZnJhZ3JhbnQgYmFzaWwgbGVhdmVzLicsIG1hcmdoZXJpdGFQaWMpO1xuY29uc3QgcGVwcG9yb25pID0gbWFrZU1lbnVJdGVtKCdQZXBwb3JvbmknLCAnR2V0IHJlYWR5IGZvciBhIGZsYXZvciBleHBsb3Npb24gd2l0aCBvdXIgZGVsaWNpb3VzIFBlcHBlcm9uaSBwaXp6YSEgVGhpcyBjbGFzc2ljIHBpenphIHZhcmlldHkgZmVhdHVyZXMgYSBjcmlzcHkgY3J1c3QgdG9wcGVkIHdpdGggYSBzYXZvcnkgdG9tYXRvIHNhdWNlLCBhIGdlbmVyb3VzIGFtb3VudCBvZiBtZWx0ZWQgbW96emFyZWxsYSBjaGVlc2UsIGFuZCBkZWxpY2lvdXMgc2xpY2VzIG9mIHNwaWN5IHBlcHBlcm9uaSBzYXVzYWdlLicsIHBlcHBvcm9uaVBpYyk7XG5jb25zdCBzYXVzYWdlID0gbWFrZU1lbnVJdGVtKCdTYXVzYWdlJywgJ1NhdGlzZnkgeW91ciBodW5nZXIgd2l0aCBvdXIgZGVsaWNpb3VzIFNhdXNhZ2UgcGl6emEhIFRoaXMgaGVhcnR5IHBpenphIHZhcmlldHkgZmVhdHVyZXMgYSBjcmlzcHkgY3J1c3QsIGEgc2F2b3J5IHRvbWF0byBzYXVjZSwgYW5kIGEgZ2VuZXJvdXMgbGF5ZXIgb2YgbWVsdGVkIG1venphcmVsbGEgY2hlZXNlLCBhbGwgdG9wcGVkIG9mZiB3aXRoIGZsYXZvcmZ1bCBzbGljZXMgb2Ygc2F1c2FnZS4nLCBzYXVzYWdlUGljKTtcbmNvbnN0IHN1cHJlbWUgPSBtYWtlTWVudUl0ZW0oJ1N1cHJlbWUnLCAnSW5kdWxnZSBpbiB0aGUgdWx0aW1hdGUgcGl6emEgZXhwZXJpZW5jZSB3aXRoIG91ciBkZWxpY2lvdXMgU3VwcmVtZSBwaXp6YSEgVGhpcyBoZWFydHkgcGl6emEgdmFyaWV0eSBpcyBsb2FkZWQgd2l0aCBhIHNhdm9yeSB0b21hdG8gc2F1Y2UsIGEgZ2VuZXJvdXMgbGF5ZXIgb2YgbWVsdGVkIG1venphcmVsbGEgY2hlZXNlLCBhbmQgYW4gYXNzb3J0bWVudCBvZiB0b3BwaW5ncyB0aGF0IGluY2x1ZGVzIHNhdm9yeSBzbGljZXMgb2YgcGVwcGVyb25pLCBJdGFsaWFuIHNhdXNhZ2UsIGdyZWVuIGJlbGwgcGVwcGVycywgb25pb25zLCBhbmQgYmxhY2sgb2xpdmVzLicsIHN1cHJlbWVQaWMpO1xuY29uc3QgdmVnZ2llID0gbWFrZU1lbnVJdGVtKCdWZWdnaWUnLCAnTG9va2luZyBmb3IgYSBkZWxpY2lvdXMgYW5kIGhlYWx0aHkgcGl6emEgb3B0aW9uPyBMb29rIG5vIGZ1cnRoZXIgdGhhbiBvdXIgVmVnZ2llIHBpenphISBUaGlzIGRlbGljaW91cyBwaXp6YSBmZWF0dXJlcyBhIGNyaXNweSBjcnVzdCB0b3BwZWQgd2l0aCBhIHNhdm9yeSB0b21hdG8gc2F1Y2UsIGEgZ2VuZXJvdXMgbGF5ZXIgb2YgbWVsdGVkIG1venphcmVsbGEgY2hlZXNlLCBhbmQgYSBtZWRsZXkgb2YgZnJlc2ggYW5kIGZsYXZvcmZ1bCB2ZWdldGFibGVzLiBPdXIgdG9wcGluZ3MgaW5jbHVkZSBqdWljeSBtdXNocm9vbXMsIGNyaXNwIGdyZWVuIGJlbGwgcGVwcGVycywgcmlwZSB0b21hdG9lcywgcmVkIG9uaW9ucywgYW5kIGJsYWNrIG9saXZlcy4nLCB2ZWdnaWVQaWMpO1xuXG5jb25zdCBtZW51SXRlbXMgPSBbIGNoZWVzZSwgcGVwcG9yb25pLCBiYnFDaGlja2VuLCBoYXdhaWlhbiwgbWFyZ2hlcml0YSwgc2F1c2FnZSwgc3VwcmVtZSwgdmVnZ2llXTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51ICgpe1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTmFtZSA9ICdtZW51JztcblxuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudVRpdGxlLmlubmVyVGV4dCA9ICdNZW51JztcbiAgICBtZW51VGl0bGUuY2xhc3NOYW1lPSdtZW51LXRpdGxlJztcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG5cbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc05hbWUgPSAnbWVudS1jb250YWluZXInO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdtZW51LWl0ZW0nO1xuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1QaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaXRlbVBpYy5zcmMgPSBtZW51SXRlbXNbaV0ucGljdHVyZTtcbiAgICAgICAgaXRlbVBpYy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGBQaWN0dXJlIG9mICR7bWVudUl0ZW1zW2ldLnRpdGxlfSBwaXp6YWApO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1QaWMpO1xuXG4gICAgICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGV4dENvbnRhaW5lci5jbGFzc05hbWUgPSAnbWVudS10ZXh0LWNvbnRhaW5lcic7XG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgaXRlbVRpdGxlLmlubmVyVGV4dCA9IG1lbnVJdGVtc1tpXS50aXRsZTtcbiAgICAgICAgaXRlbVRpdGxlLmNsYXNzTmFtZSA9ICdtZW51LWl0ZW0tdGl0bGUnXG4gICAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcblxuICAgICAgICBjb25zdCBpdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaXRlbVRleHQuaW5uZXJUZXh0ID0gbWVudUl0ZW1zW2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICBpdGVtVGV4dC5jbGFzc05hbWUgPSAnbWVudS1pdGVtLXRleHQnXG4gICAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVRleHQpO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIG1lbnU7XG59O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi9wYWdlcy9ob21lLmpzJztcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4vcGFnZXMvbWVudS5qcyc7XG5pbXBvcnQgY3JlYXRlQWJvdXQgZnJvbSAnLi9wYWdlcy9hYm91dC5qcyc7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tICcuL3BhZ2VzL2NvbnRhY3QuanMnO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSAnaGVhZGVyJztcbiAgICBcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBsb2dvLmNsYXNzTmFtZSA9ICdsb2dvJztcbiAgICBsb2dvLnRleHRDb250ZW50PSAnVG9yUGl6emEnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBsb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgaGVhZGVyTGlzdC5jbGFzc05hbWUgPSAnaGVhZGVyLWxpc3QnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMaXN0KTtcblxuICAgIGNvbnN0IGxpbmtzID0gWydIb21lJywgJ01lbnUnLCAnQWJvdXQnLCAnQ29udGFjdCddO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGluay5jbGFzc05hbWUgPSAnbmF2LWxpbmsnO1xuICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gbGlua3NbaV07XG4gICAgICAgIGhlYWRlckxpc3QuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgICAgICAgICBpZihlLnRhcmdldC5pbm5lclRleHQgPT09ICdIb21lJykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZS50YXJnZXQuaW5uZXJUZXh0ID09PSAnTWVudScpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGUudGFyZ2V0LmlubmVyVGV4dCA9PT0gJ0Fib3V0Jykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGUudGFyZ2V0LmlubmVyVGV4dCA9PT0gJ0NvbnRhY3QnKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9