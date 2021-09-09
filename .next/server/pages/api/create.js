"use strict";
(() => {
var exports = {};
exports.id = "pages/api/create";
exports.ids = ["pages/api/create"];
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

/***/ "./pages/api/create.ts":
/*!*****************************!*\
  !*** ./pages/api/create.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ "./lib/prisma.ts");
/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed"
    });
  }

  try {
    const {
      user
    } = req.body; // const user: Prisma.UserCreateInput = JSON.parse(req.body);

    const savedUser = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.user.create({
      data: user
    });
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong"
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/create.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2NyZWF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFVQSxJQUFJQyxNQUFKOztBQUVBLElBQUksTUFBK0I7QUFDbEMsYUFBMkMsRUFBM0MsTUFFTztBQUNOLFFBQUksQ0FBQ0MsTUFBTSxDQUFDRCxNQUFaLEVBQW9CO0FBQ25CQyxNQUFBQSxNQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUQsd0RBQUosRUFBaEI7QUFDQTs7QUFFREMsSUFBQUEsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0E7QUFDRDs7QUFFRCxpRUFBZUEsTUFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFHQTtBQUVBLGlFQUFlLE9BQU9FLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ25FLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQzFCLFdBQU9ELEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCLENBQVA7QUFDQTs7QUFFRCxNQUFJO0FBQ0gsVUFBTTtBQUFFQyxNQUFBQTtBQUFGLFFBQVdOLEdBQUcsQ0FBQ08sSUFBckIsQ0FERyxDQUVIOztBQUNBLFVBQU1DLFNBQVMsR0FBRyxNQUFNViw0REFBQSxDQUFtQjtBQUMxQ1ksTUFBQUEsSUFBSSxFQUFFSjtBQURvQyxLQUFuQixDQUF4QjtBQUdBTCxJQUFBQSxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkksU0FBckI7QUFDQSxHQVBELENBT0UsT0FBT0csS0FBUCxFQUFjO0FBQ2ZWLElBQUFBLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0E7QUFDRCxDQWZEOzs7Ozs7Ozs7O0FDTkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LXByaXNtYS1uZXh0Ly4vbGliL3ByaXNtYS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXByaXNtYS1uZXh0Ly4vcGFnZXMvYXBpL2NyZWF0ZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXByaXNtYS1uZXh0L2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuXHRuYW1lc3BhY2UgTm9kZUpTIHtcclxuXHRcdGludGVyZmFjZSBHbG9iYWwge1xyXG5cdFx0XHRwcmlzbWE6IFByaXNtYUNsaWVudDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudDtcclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0aWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG5cdFx0cHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRpZiAoIWdsb2JhbC5wcmlzbWEpIHtcclxuXHRcdFx0Z2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHRcdH1cclxuXHJcblx0XHRwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0ICovXG4vLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uL2xpYi9wcmlzbWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG5cdGlmIChyZXEubWV0aG9kICE9PSBcIlBPU1RcIikge1xuXHRcdHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XG5cdH1cblxuXHR0cnkge1xuXHRcdGNvbnN0IHsgdXNlciB9ID0gcmVxLmJvZHk7XG5cdFx0Ly8gY29uc3QgdXNlcjogUHJpc21hLlVzZXJDcmVhdGVJbnB1dCA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xuXHRcdGNvbnN0IHNhdmVkVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XG5cdFx0XHRkYXRhOiB1c2VyLFxuXHRcdH0pO1xuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHNhdmVkVXNlcik7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIgfSk7XG5cdH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ1c2VyIiwiYm9keSIsInNhdmVkVXNlciIsImNyZWF0ZSIsImRhdGEiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=