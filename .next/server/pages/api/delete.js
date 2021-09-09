"use strict";
(() => {
var exports = {};
exports.id = "pages/api/delete";
exports.ids = ["pages/api/delete"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

let prisma;

if (true) {
  if (false) {} else {
    if (!global.prisma) {
      global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
    }

    prisma = global.prisma;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);

/***/ }),

/***/ "./pages/api/delete.ts":
/*!*****************************!*\
  !*** ./pages/api/delete.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ "./lib/prisma.ts");
 // eslint-disable-next-line import/no-anonymous-default-export

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  try {
    const {
      id
    } = req.body;

    if (!id) {
      res.json({
        error: "You should have an id!"
      });
      return;
    }

    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.user.delete({
      where: {
        id
      }
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong!"
    });
  }
});

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/delete.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2RlbGV0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFVQSxJQUFJQyxNQUFKOztBQUVBLElBQUksTUFBK0I7QUFDbEMsYUFBMkMsRUFBM0MsTUFFTztBQUNOLFFBQUksQ0FBQ0MsTUFBTSxDQUFDRCxNQUFaLEVBQW9CO0FBQ25CQyxNQUFBQSxNQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUQsd0RBQUosRUFBaEI7QUFDQTs7QUFFREMsSUFBQUEsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0E7QUFDRDs7QUFFRCxpRUFBZUEsTUFBZjs7Ozs7Ozs7Ozs7Ozs7O0NDdEJBOztBQUNBLGlFQUFlLE9BQU9FLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNsQyxNQUFJO0FBQ0gsVUFBTTtBQUFFQyxNQUFBQTtBQUFGLFFBQVNGLEdBQUcsQ0FBQ0csSUFBbkI7O0FBQ0EsUUFBSSxDQUFDRCxFQUFMLEVBQVM7QUFDUkQsTUFBQUEsR0FBRyxDQUFDRyxJQUFKLENBQVM7QUFBRUMsUUFBQUEsS0FBSyxFQUFFO0FBQVQsT0FBVDtBQUNBO0FBQ0E7O0FBQ0QsVUFBTUMsSUFBSSxHQUFHLE1BQU1SLDREQUFBLENBQW1CO0FBQ3JDVSxNQUFBQSxLQUFLLEVBQUU7QUFBRU4sUUFBQUE7QUFBRjtBQUQ4QixLQUFuQixDQUFuQjtBQUdBRCxJQUFBQSxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCTCxJQUFoQixDQUFxQkUsSUFBckI7QUFDQSxHQVZELENBVUUsT0FBT0QsS0FBUCxFQUFjO0FBQ2ZKLElBQUFBLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JMLElBQWhCLENBQXFCO0FBQUVNLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0E7QUFDRCxDQWREOzs7Ozs7Ozs7O0FDSEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LXByaXNtYS1uZXh0Ly4vbGliL3ByaXNtYS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXByaXNtYS1uZXh0Ly4vcGFnZXMvYXBpL2RlbGV0ZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXByaXNtYS1uZXh0L2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuXHRuYW1lc3BhY2UgTm9kZUpTIHtcclxuXHRcdGludGVyZmFjZSBHbG9iYWwge1xyXG5cdFx0XHRwcmlzbWE6IFByaXNtYUNsaWVudDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudDtcclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0aWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG5cdFx0cHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRpZiAoIWdsb2JhbC5wcmlzbWEpIHtcclxuXHRcdFx0Z2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHRcdH1cclxuXHJcblx0XHRwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xyXG4iLCJpbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi9saWIvcHJpc21hXCI7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWFub255bW91cy1kZWZhdWx0LWV4cG9ydFxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgeyBpZCB9ID0gcmVxLmJvZHk7XHJcblx0XHRpZiAoIWlkKSB7XHJcblx0XHRcdHJlcy5qc29uKHsgZXJyb3I6IFwiWW91IHNob3VsZCBoYXZlIGFuIGlkIVwiIH0pO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZGVsZXRlKHtcclxuXHRcdFx0d2hlcmU6IHsgaWQgfSxcclxuXHRcdH0pO1xyXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIiB9KTtcclxuXHR9XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJyZXEiLCJyZXMiLCJpZCIsImJvZHkiLCJqc29uIiwiZXJyb3IiLCJ1c2VyIiwiZGVsZXRlIiwid2hlcmUiLCJzdGF0dXMiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==