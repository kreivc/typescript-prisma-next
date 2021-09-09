"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\asus\\Desktop\\typescript-prisma-next\\pages\\index.tsx",
    _s = $RefreshSig$();








var __N_SSP = true;
function Home(_ref) {
  _s();

  var initialUsers = _ref.initialUsers;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(initialUsers),
      users = _useState[0],
      setUsers = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      firstName = _useState2[0],
      setFirstName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      lastName = _useState3[0],
      setLastName = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      email = _useState4[0],
      setEmail = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      avatar = _useState5[0],
      setAvatar = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      role = _useState6[0],
      setRole = _useState6[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var body;
      return C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              body = {
                firstName: firstName,
                lastName: lastName,
                role: role,
                email: email,
                avatar: avatar
              };
              _context.next = 3;
              return (0,_utils_fetcher__WEBPACK_IMPORTED_MODULE_5__.fetcher)("/api/create", {
                user: body
              });

            case 3:
              _context.next = 5;
              return setUsers([].concat((0,C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(users), [body]));

            case 5:
              setFirstName("");
              setLastName("");
              setAvatar("");
              setRole(null);
              setEmail("");

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("meta", {
        name: "description",
        content: "Testing stack prisma"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
      mt: "20px",
      p: "2%",
      w: "100%",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {
        as: "h3",
        children: "This app is powered by NextJS, Chakra UI"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {
        as: "form",
        gridGap: 3,
        mt: "30px",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
          id: "first-name",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "First name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
            placeholder: "First name",
            value: firstName,
            onChange: function onChange(e) {
              return setFirstName(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
          id: "last-name",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "Last name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
            placeholder: "Last name",
            value: lastName,
            onChange: function onChange(e) {
              return setLastName(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
          id: "email",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
            placeholder: "Email",
            value: email,
            onChange: function onChange(e) {
              return setEmail(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
          id: "avatar",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "Avatar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
            placeholder: "Avatar",
            value: avatar,
            onChange: function onChange(e) {
              return setAvatar(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
          id: "eole",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "Role"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Select, {
            value: role,
            onChange: function onChange(e) {
              return setRole(e.target.value);
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "USER",
              children: "USER"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "ADMIN",
              children: "ADMIN"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "DEVELOPER",
              children: "DEVELOPER"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
        onClick: handleSubmit,
        mt: "20px",
        children: "Test!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}

_s(Home, "CXnZBeajgH6Jv56dHAWhicgs/U0=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWUyMDNjMGM0OTMwYzY4MTQ2YzEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFVQTtBQUNBO0FBRUE7Ozs7QUFVZSxTQUFTVyxJQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjs7QUFDOUMsa0JBQ0NILCtDQUFRLENBQW9DRyxZQUFwQyxDQURUO0FBQUEsTUFBT0MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUEsbUJBQWtDTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPTSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUFnQ1AsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT1EsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBMEJULCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9VLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUE0QlgsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT1ksTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQXdCYiwrQ0FBUSxDQUFhLElBQWIsQ0FBaEM7QUFBQSxNQUFPYyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFFQSxNQUFNQyxZQUFZO0FBQUEsOFVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RDLGNBQUFBLElBRGMsR0FDaUI7QUFDcENYLGdCQUFBQSxTQUFTLEVBQVRBLFNBRG9DO0FBRXBDRSxnQkFBQUEsUUFBUSxFQUFSQSxRQUZvQztBQUdwQ00sZ0JBQUFBLElBQUksRUFBSkEsSUFIb0M7QUFJcENKLGdCQUFBQSxLQUFLLEVBQUxBLEtBSm9DO0FBS3BDRSxnQkFBQUEsTUFBTSxFQUFOQTtBQUxvQyxlQURqQjtBQUFBO0FBQUEscUJBU2RYLHVEQUFPLENBQUMsYUFBRCxFQUFn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b0RBQUQ7QUFBUSxlQUFPLEVBQUVMLFlBQWpCO0FBQStCLFVBQUUsRUFBQyxNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRDtBQUFBLGtCQUREO0FBK0RBOztHQTFGdUJkOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQge1xuXHRCb3gsXG5cdEhlYWRpbmcsXG5cdEZsZXgsXG5cdEZvcm1Db250cm9sLFxuXHRGb3JtTGFiZWwsXG5cdElucHV0LFxuXHRTZWxlY3QsXG5cdEJ1dHRvbixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCIuLi9saWIvcHJpc21hXCI7XG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSBcIi4uL3V0aWxzL2ZldGNoZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcblx0Y29uc3QgdXNlcnM6IFByaXNtYS5Vc2VyVW5jaGVja2VkQ3JlYXRlSW5wdXRbXSA9XG5cdFx0YXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoKTtcblx0cmV0dXJuIHtcblx0XHRwcm9wczogeyBpbml0aWFsVXNlcnM6IHVzZXJzIH0sXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBpbml0aWFsVXNlcnMgfSkge1xuXHRjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9XG5cdFx0dXNlU3RhdGU8UHJpc21hLlVzZXJVbmNoZWNrZWRDcmVhdGVJbnB1dFtdPihpbml0aWFsVXNlcnMpO1xuXHRjb25zdCBbZmlyc3ROYW1lLCBzZXRGaXJzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG5cdGNvbnN0IFtsYXN0TmFtZSwgc2V0TGFzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG5cdGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG5cdGNvbnN0IFthdmF0YXIsIHNldEF2YXRhcl0gPSB1c2VTdGF0ZShcIlwiKTtcblx0Y29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGU8YW55IHwgbnVsbD4obnVsbCk7XG5cblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IGJvZHk6IFByaXNtYS5Vc2VyQ3JlYXRlSW5wdXQgPSB7XG5cdFx0XHRmaXJzdE5hbWUsXG5cdFx0XHRsYXN0TmFtZSxcblx0XHRcdHJvbGUsXG5cdFx0XHRlbWFpbCxcblx0XHRcdGF2YXRhcixcblx0XHR9O1xuXG5cdFx0YXdhaXQgZmV0Y2hlcihcIi9hcGkvY3JlYXRlXCIsIHsgdXNlcjogYm9keSB9KTtcblx0XHRhd2FpdCBzZXRVc2VycyhbLi4udXNlcnMsIGJvZHldKTtcblx0XHRzZXRGaXJzdE5hbWUoXCJcIik7XG5cdFx0c2V0TGFzdE5hbWUoXCJcIik7XG5cdFx0c2V0QXZhdGFyKFwiXCIpO1xuXHRcdHNldFJvbGUobnVsbCk7XG5cdFx0c2V0RW1haWwoXCJcIik7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGVzdGluZyBzdGFjayBwcmlzbWFcIiAvPlxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG5cdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdDxCb3ggbXQ9XCIyMHB4XCIgcD1cIjIlXCIgdz1cIjEwMCVcIj5cblx0XHRcdFx0PEhlYWRpbmcgYXM9XCJoM1wiPlxuXHRcdFx0XHRcdFRoaXMgYXBwIGlzIHBvd2VyZWQgYnkgTmV4dEpTLCBDaGFrcmEgVUlcblx0XHRcdFx0PC9IZWFkaW5nPlxuXHRcdFx0XHQ8RmxleCBhcz1cImZvcm1cIiBncmlkR2FwPXszfSBtdD1cIjMwcHhcIj5cblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgaWQ9XCJmaXJzdC1uYW1lXCIgaXNSZXF1aXJlZD5cblx0XHRcdFx0XHRcdDxGb3JtTGFiZWw+Rmlyc3QgbmFtZTwvRm9ybUxhYmVsPlxuXHRcdFx0XHRcdFx0PElucHV0XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRmlyc3QgbmFtZVwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtmaXJzdE5hbWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rmlyc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgaWQ9XCJsYXN0LW5hbWVcIiBpc1JlcXVpcmVkPlxuXHRcdFx0XHRcdFx0PEZvcm1MYWJlbD5MYXN0IG5hbWU8L0Zvcm1MYWJlbD5cblx0XHRcdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkxhc3QgbmFtZVwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtsYXN0TmFtZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRMYXN0TmFtZShlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGlkPVwiZW1haWxcIiBpc1JlcXVpcmVkPlxuXHRcdFx0XHRcdFx0PEZvcm1MYWJlbD5FbWFpbDwvRm9ybUxhYmVsPlxuXHRcdFx0XHRcdFx0PElucHV0XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZW1haWx9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBpZD1cImF2YXRhclwiIGlzUmVxdWlyZWQ+XG5cdFx0XHRcdFx0XHQ8Rm9ybUxhYmVsPkF2YXRhcjwvRm9ybUxhYmVsPlxuXHRcdFx0XHRcdFx0PElucHV0XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiQXZhdGFyXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2F2YXRhcn1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRBdmF0YXIoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBpZD1cImVvbGVcIiBpc1JlcXVpcmVkPlxuXHRcdFx0XHRcdFx0PEZvcm1MYWJlbD5Sb2xlPC9Gb3JtTGFiZWw+XG5cdFx0XHRcdFx0XHQ8U2VsZWN0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtyb2xlfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFJvbGUoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVVNFUlwiPlVTRVI8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkFETUlOXCI+QURNSU48L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkRFVkVMT1BFUlwiPkRFVkVMT1BFUjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PC9TZWxlY3Q+XG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cblx0XHRcdFx0PC9GbGV4PlxuXHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gbXQ9XCIyMHB4XCI+XG5cdFx0XHRcdFx0VGVzdCFcblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L0JveD5cblx0XHQ8Lz5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJCb3giLCJIZWFkaW5nIiwiRmxleCIsIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiSW5wdXQiLCJTZWxlY3QiLCJCdXR0b24iLCJIZWFkIiwidXNlU3RhdGUiLCJmZXRjaGVyIiwiSG9tZSIsImluaXRpYWxVc2VycyIsInVzZXJzIiwic2V0VXNlcnMiLCJmaXJzdE5hbWUiLCJzZXRGaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNldExhc3ROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsImF2YXRhciIsInNldEF2YXRhciIsInJvbGUiLCJzZXRSb2xlIiwiaGFuZGxlU3VibWl0IiwiYm9keSIsInVzZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9