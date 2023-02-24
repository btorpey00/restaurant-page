/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9hYm91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFib3V0ICgpIHtcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0LmNsYXNzTmFtZSA9ICdhYm91dCBjb250ZW50JztcblxuICAgIGNvbnN0IGFib3V0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBhYm91dEhlYWRlci5jbGFzc05hbWUgPSAnYWJvdXQtaGVhZGVyIGNvbnRlbnQtaGVhZGVyJztcbiAgICBhYm91dEhlYWRlci5pbm5lclRleHQgPSAnQWJvdXQgVG9yUGl6emEnXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkZXIpO1xuXG4gICAgY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFib3V0VGV4dC5jbGFzc05hbWUgPSAnYWJvdXQtdGV4dCBjb250ZW50LXRleHQnO1xuICAgIGFib3V0VGV4dC5pbm5lclRleHQgPSBcIldlbGNvbWUgdG8gVG9yUGl6emEsIGEgcGl6emEgcmVzdGF1cmFudCB0aGF0IG9mZmVycyBkZWxpY2lvdXMsIGhhbmRjcmFmdGVkIHBpenphcyBtYWRlIHdpdGggb25seSB0aGUgZnJlc2hlc3QgaW5ncmVkaWVudHMuIE91ciBwYXNzaW9uIGZvciBwaXp6YSBpcyBldmlkZW50IGluIGV2ZXJ5IHNsaWNlLCBmcm9tIHRoZSBzYXZvcnkgc2F1Y2UgdG8gdGhlIHBlcmZlY3QgY3J1c3QuIFxcblxcbiBBdCBUb3JQaXp6YSwgd2UgYmVsaWV2ZSB0aGF0IHF1YWxpdHkgaW5ncmVkaWVudHMgbWFrZSBhbGwgdGhlIGRpZmZlcmVuY2UuIFRoYXQncyB3aHkgd2UgdXNlIG9ubHkgdGhlIGZpbmVzdCBpbmdyZWRpZW50cywgc291cmNlZCBmcm9tIGxvY2FsIGZhcm1lcnMgYW5kIHN1cHBsaWVycyB3aGVuZXZlciBwb3NzaWJsZS4gV2UgdGFrZSBwcmlkZSBpbiBvZmZlcmluZyBhIHZhcmlldHkgb2YgdG9wcGluZ3MsIGZyb20gY2xhc3NpYyBwZXBwZXJvbmkgYW5kIGNoZWVzZSB0byB1bmlxdWUgYW5kIGZsYXZvcmZ1bCBjb21iaW5hdGlvbnMgdGhhdCB3aWxsIGV4Y2l0ZSB5b3VyIHRhc3RlIGJ1ZHMuXFxuXFxuIEF0IFRvclBpenphLCBvdXIgZ29hbCBpcyB0byBwcm92aWRlIGEgZGVsaWNpb3VzIGFuZCBlbmpveWFibGUgZGluaW5nIGV4cGVyaWVuY2UgdGhhdCBrZWVwcyBvdXIgY3VzdG9tZXJzIGNvbWluZyBiYWNrIGZvciBtb3JlLiBDb21lIGpvaW4gdXMgYW5kIHRhc3RlIHRoZSBkaWZmZXJlbmNlIHRoYXQgcXVhbGl0eSBpbmdyZWRpZW50cyBhbmQgZXhwZXJ0IGNyYWZ0c21hbnNoaXAgY2FuIG1ha2UuXCJcbiAgICBhYm91dC5hcHBlbmRDaGlsZChhYm91dFRleHQpO1xuXG4gICAgcmV0dXJuIGFib3V0O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==