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








var options = [{
  key: "d",
  text: "DEVELOPER",
  value: "DEVELOPER"
}, {
  key: "u",
  text: "USER",
  value: "USER"
}, {
  key: "a",
  text: "ADMIN",
  value: "ADMIN"
}];
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

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
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
              console.log(body);
              _context.next = 4;
              return (0,_utils_fetcher__WEBPACK_IMPORTED_MODULE_5__.fetcher)("/api/create", {
                user: body
              });

            case 4:
              _context.next = 6;
              return setUsers([].concat((0,C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(users), [body]));

            case 6:
              setFirstName("");
              setLastName("");
              setEmail("");
              setAvatar("");
              setRole(null);

            case 11:
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
        lineNumber: 63,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("meta", {
        name: "description",
        content: "Testing stack prisma"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
        lineNumber: 69,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {
        as: "form",
        gridGap: 3,
        mt: "30px",
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
          id: "first-name",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "First name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
            placeholder: "First name",
            value: firstName,
            onChange: function onChange(e) {
              return setFirstName(e.target.value);
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
          id: "last-name",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "Last name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
            placeholder: "Last name",
            value: lastName,
            onChange: function onChange(e) {
              return setLastName(e.target.value);
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
          id: "email",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
            placeholder: "Email",
            value: email,
            onChange: function onChange(e) {
              return setEmail(e.target.value);
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
          id: "avatar",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "Avatar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
            placeholder: "Avatar",
            value: avatar,
            onChange: function onChange(e) {
              return setAvatar(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
          id: "eole",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "Role"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Select, {
            placeholder: "Role",
            value: role,
            onChange: function onChange(e) {
              return setRole(e.target.value);
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              children: "USER"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              children: "ADMIN"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              children: "DEVELOPER"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
        type: "submit",
        mt: "20px",
        children: "Test!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}

_s(Home, "8PT6ZIvJPnzL9j/HucS8iV4M+F8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjhmOTM1MzE0YTQ0MmI1OTZhNjguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFVQTtBQUNBO0FBRUE7OztBQVVBLElBQU1XLE9BQU8sR0FBRyxDQUNmO0FBQUVDLEVBQUFBLEdBQUcsRUFBRSxHQUFQO0FBQVlDLEVBQUFBLElBQUksRUFBRSxXQUFsQjtBQUErQkMsRUFBQUEsS0FBSyxFQUFFO0FBQXRDLENBRGUsRUFFZjtBQUFFRixFQUFBQSxHQUFHLEVBQUUsR0FBUDtBQUFZQyxFQUFBQSxJQUFJLEVBQUUsTUFBbEI7QUFBMEJDLEVBQUFBLEtBQUssRUFBRTtBQUFqQyxDQUZlLEVBR2Y7QUFBRUYsRUFBQUEsR0FBRyxFQUFFLEdBQVA7QUFBWUMsRUFBQUEsSUFBSSxFQUFFLE9BQWxCO0FBQTJCQyxFQUFBQSxLQUFLLEVBQUU7QUFBbEMsQ0FIZSxDQUFoQjs7QUFNZSxTQUFTQyxJQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjs7QUFDOUMsa0JBQ0NQLCtDQUFRLENBQW9DTyxZQUFwQyxDQURUO0FBQUEsTUFBT0MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUEsbUJBQWtDVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPVSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUFnQ1gsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT1ksUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBMEJiLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9jLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUE0QmYsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT2dCLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUF3QmpCLCtDQUFRLEVBQWhDO0FBQUEs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QUZSO0FBR0Msb0JBQVEsRUFBRSxrQkFBQ08sQ0FBRDtBQUFBLHFCQUFPTixPQUFPLENBQUNNLENBQUMsQ0FBQ0MsTUFBRixDQUFTckIsS0FBVixDQUFkO0FBQUEsYUFIWDtBQUFBLG9DQUtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxELGVBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkQsZUFPQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRCxlQWtEQyw4REFBQyxvREFBRDtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLFVBQUUsRUFBQyxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRDtBQUFBLGtCQUREO0FBZ0VBOztHQTdGdUJDOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQge1xuXHRCb3gsXG5cdEhlYWRpbmcsXG5cdEZsZXgsXG5cdEZvcm1Db250cm9sLFxuXHRGb3JtTGFiZWwsXG5cdElucHV0LFxuXHRTZWxlY3QsXG5cdEJ1dHRvbixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCIuLi9saWIvcHJpc21hXCI7XG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSBcIi4uL3V0aWxzL2ZldGNoZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcblx0Y29uc3QgdXNlcnM6IFByaXNtYS5Vc2VyVW5jaGVja2VkQ3JlYXRlSW5wdXRbXSA9XG5cdFx0YXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoKTtcblx0cmV0dXJuIHtcblx0XHRwcm9wczogeyBpbml0aWFsVXNlcnM6IHVzZXJzIH0sXG5cdH07XG59XG5cbmNvbnN0IG9wdGlvbnMgPSBbXG5cdHsga2V5OiBcImRcIiwgdGV4dDogXCJERVZFTE9QRVJcIiwgdmFsdWU6IFwiREVWRUxPUEVSXCIgfSxcblx0eyBrZXk6IFwidVwiLCB0ZXh0OiBcIlVTRVJcIiwgdmFsdWU6IFwiVVNFUlwiIH0sXG5cdHsga2V5OiBcImFcIiwgdGV4dDogXCJBRE1JTlwiLCB2YWx1ZTogXCJBRE1JTlwiIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgaW5pdGlhbFVzZXJzIH0pIHtcblx0Y29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPVxuXHRcdHVzZVN0YXRlPFByaXNtYS5Vc2VyVW5jaGVja2VkQ3JlYXRlSW5wdXRbXT4oaW5pdGlhbFVzZXJzKTtcblx0Y29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCBbbGFzdE5hbWUsIHNldExhc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCBbYXZhdGFyLCBzZXRBdmF0YXJdID0gdXNlU3RhdGUoXCJcIik7XG5cdGNvbnN0IFtyb2xlLCBzZXRSb2xlXSA9IHVzZVN0YXRlKCk7XG5cblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IGJvZHk6IFByaXNtYS5Vc2VyQ3JlYXRlSW5wdXQgPSB7XG5cdFx0XHRmaXJzdE5hbWUsXG5cdFx0XHRsYXN0TmFtZSxcblx0XHRcdHJvbGUsXG5cdFx0XHRlbWFpbCxcblx0XHRcdGF2YXRhcixcblx0XHR9O1xuXG5cdFx0Y29uc29sZS5sb2coYm9keSk7XG5cblx0XHRhd2FpdCBmZXRjaGVyKFwiL2FwaS9jcmVhdGVcIiwgeyB1c2VyOiBib2R5IH0pO1xuXHRcdGF3YWl0IHNldFVzZXJzKFsuLi51c2VycywgYm9keV0pO1xuXHRcdHNldEZpcnN0TmFtZShcIlwiKTtcblx0XHRzZXRMYXN0TmFtZShcIlwiKTtcblx0XHRzZXRFbWFpbChcIlwiKTtcblx0XHRzZXRBdmF0YXIoXCJcIik7XG5cdFx0c2V0Um9sZShudWxsKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUZXN0aW5nIHN0YWNrIHByaXNtYVwiIC8+XG5cdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cblx0XHRcdDwvSGVhZD5cblxuXHRcdFx0PEJveCBtdD1cIjIwcHhcIiBwPVwiMiVcIiB3PVwiMTAwJVwiPlxuXHRcdFx0XHQ8SGVhZGluZyBhcz1cImgzXCI+XG5cdFx0XHRcdFx0VGhpcyBhcHAgaXMgcG93ZXJlZCBieSBOZXh0SlMsIENoYWtyYSBVSVxuXHRcdFx0XHQ8L0hlYWRpbmc+XG5cdFx0XHRcdDxGbGV4IGFzPVwiZm9ybVwiIGdyaWRHYXA9ezN9IG10PVwiMzBweFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBpZD1cImZpcnN0LW5hbWVcIiBpc1JlcXVpcmVkPlxuXHRcdFx0XHRcdFx0PEZvcm1MYWJlbD5GaXJzdCBuYW1lPC9Gb3JtTGFiZWw+XG5cdFx0XHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJGaXJzdCBuYW1lXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2ZpcnN0TmFtZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRGaXJzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBpZD1cImxhc3QtbmFtZVwiIGlzUmVxdWlyZWQ+XG5cdFx0XHRcdFx0XHQ8Rm9ybUxhYmVsPkxhc3QgbmFtZTwvRm9ybUxhYmVsPlxuXHRcdFx0XHRcdFx0PElucHV0XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiTGFzdCBuYW1lXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2xhc3ROYW1lfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldExhc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgaWQ9XCJlbWFpbFwiIGlzUmVxdWlyZWQ+XG5cdFx0XHRcdFx0XHQ8Rm9ybUxhYmVsPkVtYWlsPC9Gb3JtTGFiZWw+XG5cdFx0XHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbWFpbFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtlbWFpbH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGlkPVwiYXZhdGFyXCIgaXNSZXF1aXJlZD5cblx0XHRcdFx0XHRcdDxGb3JtTGFiZWw+QXZhdGFyPC9Gb3JtTGFiZWw+XG5cdFx0XHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJBdmF0YXJcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17YXZhdGFyfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEF2YXRhcihlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGlkPVwiZW9sZVwiIGlzUmVxdWlyZWQ+XG5cdFx0XHRcdFx0XHQ8Rm9ybUxhYmVsPlJvbGU8L0Zvcm1MYWJlbD5cblx0XHRcdFx0XHRcdDxTZWxlY3Rcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJSb2xlXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3JvbGV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Um9sZShlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24+VVNFUjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uPkFETUlOPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24+REVWRUxPUEVSPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8L1NlbGVjdD5cblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxuXHRcdFx0XHQ8L0ZsZXg+XG5cdFx0XHRcdDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG10PVwiMjBweFwiPlxuXHRcdFx0XHRcdFRlc3QhXG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9Cb3g+XG5cdFx0PC8+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiQm94IiwiSGVhZGluZyIsIkZsZXgiLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIklucHV0IiwiU2VsZWN0IiwiQnV0dG9uIiwiSGVhZCIsInVzZVN0YXRlIiwiZmV0Y2hlciIsIm9wdGlvbnMiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJIb21lIiwiaW5pdGlhbFVzZXJzIiwidXNlcnMiLCJzZXRVc2VycyIsImZpcnN0TmFtZSIsInNldEZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwiYXZhdGFyIiwic2V0QXZhdGFyIiwicm9sZSIsInNldFJvbGUiLCJoYW5kbGVTdWJtaXQiLCJib2R5IiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==