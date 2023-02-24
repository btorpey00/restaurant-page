/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
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
    
    for (let i = 0; i < menuItems.length; i++) {
        const itemContainer = document.createElement('div');
        itemContainer.className = 'menu-item';
        menu.appendChild(itemContainer);

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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y2QztBQUNRO0FBQ0o7QUFDSTtBQUNGO0FBQ0o7QUFDQTtBQUNGOzs7QUFHN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK05BQStOLCtDQUFTO0FBQ3hPLG9SQUFvUixtREFBYTtBQUNqUyx1UkFBdVIsaURBQVc7QUFDbFMsa1NBQWtTLG1EQUFhO0FBQy9TLDBTQUEwUyxrREFBWTtBQUN0VCw4UUFBOFEsZ0RBQVU7QUFDeFIsMldBQTJXLGdEQUFVO0FBQ3JYLDZaQUE2WiwrQ0FBUzs7QUFFdGE7OztBQUdlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRCxvQkFBb0I7QUFDdEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGNoZWVzZVBpYyBmcm9tICcuLi9pbWFnZXMvY2hlZXNlLmpwZyc7XG5pbXBvcnQgYmJxQ2hpY2tlblBpYyBmcm9tICcuLi9pbWFnZXMvYmJxY2hpY2tlbi5qcGcnO1xuaW1wb3J0IGhhd2FpaWFuUGljIGZyb20gJy4uL2ltYWdlcy9oYXdhaWlhbi5qcGcnO1xuaW1wb3J0IG1hcmdoZXJpdGFQaWMgZnJvbSAnLi4vaW1hZ2VzL21hcmdoZXJpdGEuanBnJztcbmltcG9ydCBwZXBwb3JvbmlQaWMgZnJvbSAnLi4vaW1hZ2VzL3BlcHBvcm9uaS5qcGcnO1xuaW1wb3J0IHNhdXNhZ2VQaWMgZnJvbSAnLi4vaW1hZ2VzL3NhdXNhZ2UuanBnJztcbmltcG9ydCBzdXByZW1lUGljIGZyb20gJy4uL2ltYWdlcy9zdXByZW1lLmpwZyc7XG5pbXBvcnQgdmVnZ2llUGljIGZyb20gJy4uL2ltYWdlcy92ZWdnaWUuanBnJztcblxuXG5jb25zdCBtYWtlTWVudUl0ZW0gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBwaWN0dXJlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBwaWN0dXJlXG4gICAgfVxufVxuXG5jb25zdCBjaGVlc2UgPSBtYWtlTWVudUl0ZW0oJ0NoZWVzZScsICdPdXIgZGVsaWNpb3VzIGNoZWVzZSBwaXp6YSBpcyBhIHRpbWVsZXNzIGNsYXNzaWMgdGhhdCBmZWF0dXJlcyBhIGNyaXNweSBjcnVzdCB0b3BwZWQgd2l0aCBhIGdlbmVyb3VzIGxheWVyIG9mIHJpY2ggdG9tYXRvIHNhdWNlIGFuZCBhIGJsZW5kIG9mIG1lbHRlZCBtb3p6YXJlbGxhIGFuZCBwYXJtZXNhbiBjaGVlc2UuJywgY2hlZXNlUGljKTtcbmNvbnN0IGJicUNoaWNrZW4gPSBtYWtlTWVudUl0ZW0oJ0JCUSBDaGlja2VuJywgJ0luZHVsZ2UgaW4gdGhlIHNtb2t5IGFuZCBzd2VldCBmbGF2b3JzIG9mIG91ciBCQlEgY2hpY2tlbiBwaXp6YSEgVGhpcyBkZWxlY3RhYmxlIHBpenphIGZlYXR1cmVzIGEgY3Jpc3B5IGNydXN0LCBzbW90aGVyZWQgaW4gdGFuZ3kgQkJRIHNhdWNlIGFuZCB0b3BwZWQgd2l0aCBzdWNjdWxlbnQgcGllY2VzIG9mIGdyaWxsZWQgY2hpY2tlbiwgcmVkIG9uaW9ucywgYW5kIGZyZXNoIGNpbGFudHJvLicsIGJicUNoaWNrZW5QaWMpO1xuY29uc3QgaGF3YWlpYW4gPSBtYWtlTWVudUl0ZW0oJ0hhd2FpaWFuJywgJ0dldCByZWFkeSBmb3IgYSB0cm9waWNhbCBlc2NhcGUgd2l0aCBvdXIgSGF3YWlpYW4gcGl6emEhIFRoaXMgZGVsaWNpb3VzIHBpenphIGlzIGEgY3VzdG9tZXIgZmF2b3JpdGUsIGZlYXR1cmluZyBhIGNyaXNweSBjcnVzdCB0b3BwZWQgd2l0aCBhIHN3ZWV0IGFuZCB0YW5neSB0b21hdG8gc2F1Y2UsIGp1aWN5IHNsaWNlcyBvZiBoYW0sIGFuZCBjaHVua3Mgb2Ygc3dlZXQgYW5kIGp1aWN5IHBpbmVhcHBsZS4gJywgaGF3YWlpYW5QaWMpO1xuY29uc3QgbWFyZ2hlcml0YSA9IG1ha2VNZW51SXRlbSgnTWFyZ2hlcml0YScsICdJbmR1bGdlIGluIHRoZSBzaW1wbGljaXR5IGFuZCBkZWxpY2lvdXNuZXNzIG9mIG91ciBjbGFzc2ljIE1hcmdoZXJpdGEgcGl6emEuIE1hZGUgd2l0aCBvbmx5IHRoZSBmcmVzaGVzdCBpbmdyZWRpZW50cywgdGhpcyBwaXp6YSBmZWF0dXJlcyBhIGNyaXNweSBjcnVzdCB0b3BwZWQgd2l0aCBhIHZpYnJhbnQgdG9tYXRvIHNhdWNlLCBmcmVzaCBtb3p6YXJlbGxhIGNoZWVzZSwgYW5kIGZyYWdyYW50IGJhc2lsIGxlYXZlcy4nLCBtYXJnaGVyaXRhUGljKTtcbmNvbnN0IHBlcHBvcm9uaSA9IG1ha2VNZW51SXRlbSgnUGVwcG9yb25pJywgJ0dldCByZWFkeSBmb3IgYSBmbGF2b3IgZXhwbG9zaW9uIHdpdGggb3VyIGRlbGljaW91cyBQZXBwZXJvbmkgcGl6emEhIFRoaXMgY2xhc3NpYyBwaXp6YSB2YXJpZXR5IGZlYXR1cmVzIGEgY3Jpc3B5IGNydXN0IHRvcHBlZCB3aXRoIGEgc2F2b3J5IHRvbWF0byBzYXVjZSwgYSBnZW5lcm91cyBhbW91bnQgb2YgbWVsdGVkIG1venphcmVsbGEgY2hlZXNlLCBhbmQgZGVsaWNpb3VzIHNsaWNlcyBvZiBzcGljeSBwZXBwZXJvbmkgc2F1c2FnZS4nLCBwZXBwb3JvbmlQaWMpO1xuY29uc3Qgc2F1c2FnZSA9IG1ha2VNZW51SXRlbSgnU2F1c2FnZScsICdTYXRpc2Z5IHlvdXIgaHVuZ2VyIHdpdGggb3VyIGRlbGljaW91cyBTYXVzYWdlIHBpenphISBUaGlzIGhlYXJ0eSBwaXp6YSB2YXJpZXR5IGZlYXR1cmVzIGEgY3Jpc3B5IGNydXN0LCBhIHNhdm9yeSB0b21hdG8gc2F1Y2UsIGFuZCBhIGdlbmVyb3VzIGxheWVyIG9mIG1lbHRlZCBtb3p6YXJlbGxhIGNoZWVzZSwgYWxsIHRvcHBlZCBvZmYgd2l0aCBmbGF2b3JmdWwgc2xpY2VzIG9mIHNhdXNhZ2UuJywgc2F1c2FnZVBpYyk7XG5jb25zdCBzdXByZW1lID0gbWFrZU1lbnVJdGVtKCdTdXByZW1lJywgJ0luZHVsZ2UgaW4gdGhlIHVsdGltYXRlIHBpenphIGV4cGVyaWVuY2Ugd2l0aCBvdXIgZGVsaWNpb3VzIFN1cHJlbWUgcGl6emEhIFRoaXMgaGVhcnR5IHBpenphIHZhcmlldHkgaXMgbG9hZGVkIHdpdGggYSBzYXZvcnkgdG9tYXRvIHNhdWNlLCBhIGdlbmVyb3VzIGxheWVyIG9mIG1lbHRlZCBtb3p6YXJlbGxhIGNoZWVzZSwgYW5kIGFuIGFzc29ydG1lbnQgb2YgdG9wcGluZ3MgdGhhdCBpbmNsdWRlcyBzYXZvcnkgc2xpY2VzIG9mIHBlcHBlcm9uaSwgSXRhbGlhbiBzYXVzYWdlLCBncmVlbiBiZWxsIHBlcHBlcnMsIG9uaW9ucywgYW5kIGJsYWNrIG9saXZlcy4nLCBzdXByZW1lUGljKTtcbmNvbnN0IHZlZ2dpZSA9IG1ha2VNZW51SXRlbSgnVmVnZ2llJywgJ0xvb2tpbmcgZm9yIGEgZGVsaWNpb3VzIGFuZCBoZWFsdGh5IHBpenphIG9wdGlvbj8gTG9vayBubyBmdXJ0aGVyIHRoYW4gb3VyIFZlZ2dpZSBwaXp6YSEgVGhpcyBkZWxpY2lvdXMgcGl6emEgZmVhdHVyZXMgYSBjcmlzcHkgY3J1c3QgdG9wcGVkIHdpdGggYSBzYXZvcnkgdG9tYXRvIHNhdWNlLCBhIGdlbmVyb3VzIGxheWVyIG9mIG1lbHRlZCBtb3p6YXJlbGxhIGNoZWVzZSwgYW5kIGEgbWVkbGV5IG9mIGZyZXNoIGFuZCBmbGF2b3JmdWwgdmVnZXRhYmxlcy4gT3VyIHRvcHBpbmdzIGluY2x1ZGUganVpY3kgbXVzaHJvb21zLCBjcmlzcCBncmVlbiBiZWxsIHBlcHBlcnMsIHJpcGUgdG9tYXRvZXMsIHJlZCBvbmlvbnMsIGFuZCBibGFjayBvbGl2ZXMuJywgdmVnZ2llUGljKTtcblxuY29uc3QgbWVudUl0ZW1zID0gWyBjaGVlc2UsIHBlcHBvcm9uaSwgYmJxQ2hpY2tlbiwgaGF3YWlpYW4sIG1hcmdoZXJpdGEsIHNhdXNhZ2UsIHN1cHJlbWUsIHZlZ2dpZV07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudSAoKXtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc05hbWUgPSAnbWVudSc7XG5cbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnVUaXRsZS5pbm5lclRleHQgPSAnTWVudSc7XG4gICAgbWVudVRpdGxlLmNsYXNzTmFtZT0nbWVudS10aXRsZSc7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc05hbWUgPSAnbWVudS1pdGVtJztcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBpdGVtUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGl0ZW1QaWMuc3JjID0gbWVudUl0ZW1zW2ldLnBpY3R1cmU7XG4gICAgICAgIGl0ZW1QaWMuc2V0QXR0cmlidXRlKCdhbHQnLCBgUGljdHVyZSBvZiAke21lbnVJdGVtc1tpXS50aXRsZX0gcGl6emFgKTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtUGljKTtcblxuICAgICAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRleHRDb250YWluZXIuY2xhc3NOYW1lID0gJ21lbnUtdGV4dC1jb250YWluZXInO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGl0ZW1UaXRsZS5pbm5lclRleHQgPSBtZW51SXRlbXNbaV0udGl0bGU7XG4gICAgICAgIGl0ZW1UaXRsZS5jbGFzc05hbWUgPSAnbWVudS1pdGVtLXRpdGxlJ1xuICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG5cbiAgICAgICAgY29uc3QgaXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1UZXh0LmlubmVyVGV4dCA9IG1lbnVJdGVtc1tpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgaXRlbVRleHQuY2xhc3NOYW1lID0gJ21lbnUtaXRlbS10ZXh0J1xuICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1UZXh0KTtcbiAgICB9XG5cblxuICAgIHJldHVybiBtZW51O1xufTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9