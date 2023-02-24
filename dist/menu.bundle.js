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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y2QztBQUNRO0FBQ0o7QUFDSTtBQUNGO0FBQ0o7QUFDQTtBQUNGOzs7QUFHN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK05BQStOLCtDQUFTO0FBQ3hPLG9SQUFvUixtREFBYTtBQUNqUyx1UkFBdVIsaURBQVc7QUFDbFMsa1NBQWtTLG1EQUFhO0FBQy9TLDBTQUEwUyxrREFBWTtBQUN0VCw4UUFBOFEsZ0RBQVU7QUFDeFIsMldBQTJXLGdEQUFVO0FBQ3JYLDZaQUE2WiwrQ0FBUzs7QUFFdGE7OztBQUdlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0Qsb0JBQW9CO0FBQ3RFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBjaGVlc2VQaWMgZnJvbSAnLi4vaW1hZ2VzL2NoZWVzZS5qcGcnO1xuaW1wb3J0IGJicUNoaWNrZW5QaWMgZnJvbSAnLi4vaW1hZ2VzL2JicWNoaWNrZW4uanBnJztcbmltcG9ydCBoYXdhaWlhblBpYyBmcm9tICcuLi9pbWFnZXMvaGF3YWlpYW4uanBnJztcbmltcG9ydCBtYXJnaGVyaXRhUGljIGZyb20gJy4uL2ltYWdlcy9tYXJnaGVyaXRhLmpwZyc7XG5pbXBvcnQgcGVwcG9yb25pUGljIGZyb20gJy4uL2ltYWdlcy9wZXBwb3JvbmkuanBnJztcbmltcG9ydCBzYXVzYWdlUGljIGZyb20gJy4uL2ltYWdlcy9zYXVzYWdlLmpwZyc7XG5pbXBvcnQgc3VwcmVtZVBpYyBmcm9tICcuLi9pbWFnZXMvc3VwcmVtZS5qcGcnO1xuaW1wb3J0IHZlZ2dpZVBpYyBmcm9tICcuLi9pbWFnZXMvdmVnZ2llLmpwZyc7XG5cblxuY29uc3QgbWFrZU1lbnVJdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgcGljdHVyZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgcGljdHVyZVxuICAgIH1cbn1cblxuY29uc3QgY2hlZXNlID0gbWFrZU1lbnVJdGVtKCdDaGVlc2UnLCAnT3VyIGRlbGljaW91cyBjaGVlc2UgcGl6emEgaXMgYSB0aW1lbGVzcyBjbGFzc2ljIHRoYXQgZmVhdHVyZXMgYSBjcmlzcHkgY3J1c3QgdG9wcGVkIHdpdGggYSBnZW5lcm91cyBsYXllciBvZiByaWNoIHRvbWF0byBzYXVjZSBhbmQgYSBibGVuZCBvZiBtZWx0ZWQgbW96emFyZWxsYSBhbmQgcGFybWVzYW4gY2hlZXNlLicsIGNoZWVzZVBpYyk7XG5jb25zdCBiYnFDaGlja2VuID0gbWFrZU1lbnVJdGVtKCdCQlEgQ2hpY2tlbicsICdJbmR1bGdlIGluIHRoZSBzbW9reSBhbmQgc3dlZXQgZmxhdm9ycyBvZiBvdXIgQkJRIGNoaWNrZW4gcGl6emEhIFRoaXMgZGVsZWN0YWJsZSBwaXp6YSBmZWF0dXJlcyBhIGNyaXNweSBjcnVzdCwgc21vdGhlcmVkIGluIHRhbmd5IEJCUSBzYXVjZSBhbmQgdG9wcGVkIHdpdGggc3VjY3VsZW50IHBpZWNlcyBvZiBncmlsbGVkIGNoaWNrZW4sIHJlZCBvbmlvbnMsIGFuZCBmcmVzaCBjaWxhbnRyby4nLCBiYnFDaGlja2VuUGljKTtcbmNvbnN0IGhhd2FpaWFuID0gbWFrZU1lbnVJdGVtKCdIYXdhaWlhbicsICdHZXQgcmVhZHkgZm9yIGEgdHJvcGljYWwgZXNjYXBlIHdpdGggb3VyIEhhd2FpaWFuIHBpenphISBUaGlzIGRlbGljaW91cyBwaXp6YSBpcyBhIGN1c3RvbWVyIGZhdm9yaXRlLCBmZWF0dXJpbmcgYSBjcmlzcHkgY3J1c3QgdG9wcGVkIHdpdGggYSBzd2VldCBhbmQgdGFuZ3kgdG9tYXRvIHNhdWNlLCBqdWljeSBzbGljZXMgb2YgaGFtLCBhbmQgY2h1bmtzIG9mIHN3ZWV0IGFuZCBqdWljeSBwaW5lYXBwbGUuICcsIGhhd2FpaWFuUGljKTtcbmNvbnN0IG1hcmdoZXJpdGEgPSBtYWtlTWVudUl0ZW0oJ01hcmdoZXJpdGEnLCAnSW5kdWxnZSBpbiB0aGUgc2ltcGxpY2l0eSBhbmQgZGVsaWNpb3VzbmVzcyBvZiBvdXIgY2xhc3NpYyBNYXJnaGVyaXRhIHBpenphLiBNYWRlIHdpdGggb25seSB0aGUgZnJlc2hlc3QgaW5ncmVkaWVudHMsIHRoaXMgcGl6emEgZmVhdHVyZXMgYSBjcmlzcHkgY3J1c3QgdG9wcGVkIHdpdGggYSB2aWJyYW50IHRvbWF0byBzYXVjZSwgZnJlc2ggbW96emFyZWxsYSBjaGVlc2UsIGFuZCBmcmFncmFudCBiYXNpbCBsZWF2ZXMuJywgbWFyZ2hlcml0YVBpYyk7XG5jb25zdCBwZXBwb3JvbmkgPSBtYWtlTWVudUl0ZW0oJ1BlcHBvcm9uaScsICdHZXQgcmVhZHkgZm9yIGEgZmxhdm9yIGV4cGxvc2lvbiB3aXRoIG91ciBkZWxpY2lvdXMgUGVwcGVyb25pIHBpenphISBUaGlzIGNsYXNzaWMgcGl6emEgdmFyaWV0eSBmZWF0dXJlcyBhIGNyaXNweSBjcnVzdCB0b3BwZWQgd2l0aCBhIHNhdm9yeSB0b21hdG8gc2F1Y2UsIGEgZ2VuZXJvdXMgYW1vdW50IG9mIG1lbHRlZCBtb3p6YXJlbGxhIGNoZWVzZSwgYW5kIGRlbGljaW91cyBzbGljZXMgb2Ygc3BpY3kgcGVwcGVyb25pIHNhdXNhZ2UuJywgcGVwcG9yb25pUGljKTtcbmNvbnN0IHNhdXNhZ2UgPSBtYWtlTWVudUl0ZW0oJ1NhdXNhZ2UnLCAnU2F0aXNmeSB5b3VyIGh1bmdlciB3aXRoIG91ciBkZWxpY2lvdXMgU2F1c2FnZSBwaXp6YSEgVGhpcyBoZWFydHkgcGl6emEgdmFyaWV0eSBmZWF0dXJlcyBhIGNyaXNweSBjcnVzdCwgYSBzYXZvcnkgdG9tYXRvIHNhdWNlLCBhbmQgYSBnZW5lcm91cyBsYXllciBvZiBtZWx0ZWQgbW96emFyZWxsYSBjaGVlc2UsIGFsbCB0b3BwZWQgb2ZmIHdpdGggZmxhdm9yZnVsIHNsaWNlcyBvZiBzYXVzYWdlLicsIHNhdXNhZ2VQaWMpO1xuY29uc3Qgc3VwcmVtZSA9IG1ha2VNZW51SXRlbSgnU3VwcmVtZScsICdJbmR1bGdlIGluIHRoZSB1bHRpbWF0ZSBwaXp6YSBleHBlcmllbmNlIHdpdGggb3VyIGRlbGljaW91cyBTdXByZW1lIHBpenphISBUaGlzIGhlYXJ0eSBwaXp6YSB2YXJpZXR5IGlzIGxvYWRlZCB3aXRoIGEgc2F2b3J5IHRvbWF0byBzYXVjZSwgYSBnZW5lcm91cyBsYXllciBvZiBtZWx0ZWQgbW96emFyZWxsYSBjaGVlc2UsIGFuZCBhbiBhc3NvcnRtZW50IG9mIHRvcHBpbmdzIHRoYXQgaW5jbHVkZXMgc2F2b3J5IHNsaWNlcyBvZiBwZXBwZXJvbmksIEl0YWxpYW4gc2F1c2FnZSwgZ3JlZW4gYmVsbCBwZXBwZXJzLCBvbmlvbnMsIGFuZCBibGFjayBvbGl2ZXMuJywgc3VwcmVtZVBpYyk7XG5jb25zdCB2ZWdnaWUgPSBtYWtlTWVudUl0ZW0oJ1ZlZ2dpZScsICdMb29raW5nIGZvciBhIGRlbGljaW91cyBhbmQgaGVhbHRoeSBwaXp6YSBvcHRpb24/IExvb2sgbm8gZnVydGhlciB0aGFuIG91ciBWZWdnaWUgcGl6emEhIFRoaXMgZGVsaWNpb3VzIHBpenphIGZlYXR1cmVzIGEgY3Jpc3B5IGNydXN0IHRvcHBlZCB3aXRoIGEgc2F2b3J5IHRvbWF0byBzYXVjZSwgYSBnZW5lcm91cyBsYXllciBvZiBtZWx0ZWQgbW96emFyZWxsYSBjaGVlc2UsIGFuZCBhIG1lZGxleSBvZiBmcmVzaCBhbmQgZmxhdm9yZnVsIHZlZ2V0YWJsZXMuIE91ciB0b3BwaW5ncyBpbmNsdWRlIGp1aWN5IG11c2hyb29tcywgY3Jpc3AgZ3JlZW4gYmVsbCBwZXBwZXJzLCByaXBlIHRvbWF0b2VzLCByZWQgb25pb25zLCBhbmQgYmxhY2sgb2xpdmVzLicsIHZlZ2dpZVBpYyk7XG5cbmNvbnN0IG1lbnVJdGVtcyA9IFsgY2hlZXNlLCBwZXBwb3JvbmksIGJicUNoaWNrZW4sIGhhd2FpaWFuLCBtYXJnaGVyaXRhLCBzYXVzYWdlLCBzdXByZW1lLCB2ZWdnaWVdO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUgKCl7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NOYW1lID0gJ21lbnUnO1xuXG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51VGl0bGUuaW5uZXJUZXh0ID0gJ01lbnUnO1xuICAgIG1lbnVUaXRsZS5jbGFzc05hbWU9J21lbnUtdGl0bGUnO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcblxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdtZW51LWNvbnRhaW5lcic7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NOYW1lID0gJ21lbnUtaXRlbSc7XG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgaXRlbVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpdGVtUGljLnNyYyA9IG1lbnVJdGVtc1tpXS5waWN0dXJlO1xuICAgICAgICBpdGVtUGljLnNldEF0dHJpYnV0ZSgnYWx0JywgYFBpY3R1cmUgb2YgJHttZW51SXRlbXNbaV0udGl0bGV9IHBpenphYCk7XG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVBpYyk7XG5cbiAgICAgICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdtZW51LXRleHQtY29udGFpbmVyJztcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBpdGVtVGl0bGUuaW5uZXJUZXh0ID0gbWVudUl0ZW1zW2ldLnRpdGxlO1xuICAgICAgICBpdGVtVGl0bGUuY2xhc3NOYW1lID0gJ21lbnUtaXRlbS10aXRsZSdcbiAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpdGVtVGV4dC5pbm5lclRleHQgPSBtZW51SXRlbXNbaV0uZGVzY3JpcHRpb247XG4gICAgICAgIGl0ZW1UZXh0LmNsYXNzTmFtZSA9ICdtZW51LWl0ZW0tdGV4dCdcbiAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtVGV4dCk7XG4gICAgfVxuXG5cbiAgICByZXR1cm4gbWVudTtcbn07XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==