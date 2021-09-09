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

  var handleChange = function handleChange(e, _ref2) {
    var value = _ref2.value;
    return setRole(value);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
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
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("meta", {
        name: "description",
        content: "Testing stack prisma"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
        lineNumber: 68,
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
            lineNumber: 73,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
            placeholder: "First name",
            value: firstName,
            onChange: function onChange(e) {
              return setFirstName(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
          id: "last-name",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "Last name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
            placeholder: "Last name",
            value: lastName,
            onChange: function onChange(e) {
              return setLastName(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
          id: "email",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
            placeholder: "Email",
            value: email,
            onChange: function onChange(e) {
              return setEmail(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
          id: "avatar",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "Avatar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
            placeholder: "Avatar",
            value: avatar,
            onChange: function onChange(e) {
              return setAvatar(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
          id: "eole",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "Role"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Select, {
            placeholder: "Role",
            value: role,
            onChange: handleChange,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              children: "USER"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              children: "ADMIN"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              children: "DEVELOPER"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
        type: "submit",
        mt: "20px",
        children: "Test!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzAyMjcyODUxYTUyZDc1NzhjNGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFVQTtBQUNBO0FBRUE7OztBQVVBLElBQU1XLE9BQU8sR0FBRyxDQUNmO0FBQUVDLEVBQUFBLEdBQUcsRUFBRSxHQUFQO0FBQVlDLEVBQUFBLElBQUksRUFBRSxXQUFsQjtBQUErQkMsRUFBQUEsS0FBSyxFQUFFO0FBQXRDLENBRGUsRUFFZjtBQUFFRixFQUFBQSxHQUFHLEVBQUUsR0FBUDtBQUFZQyxFQUFBQSxJQUFJLEVBQUUsTUFBbEI7QUFBMEJDLEVBQUFBLEtBQUssRUFBRTtBQUFqQyxDQUZlLEVBR2Y7QUFBRUYsRUFBQUEsR0FBRyxFQUFFLEdBQVA7QUFBWUMsRUFBQUEsSUFBSSxFQUFFLE9BQWxCO0FBQTJCQyxFQUFBQSxLQUFLLEVBQUU7QUFBbEMsQ0FIZSxDQUFoQjs7QUFNZSxTQUFTQyxJQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjs7QUFDOUMsa0JBQ0NQLCtDQUFRLENBQW9DTyxZQUFwQyxDQURUO0FBQUEsTUFBT0MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUEsbUJBQWtDVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPVSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUFnQ1gsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT1ksUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBMEJiLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9jLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUE0QmYsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT2dCLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUF3QmpCLCtDQUFRLEVBQWhDO0FBQUEs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QUE7QUFBQTtBQUFBLGtCQURELGVBRUMsOERBQUMsb0RBQUQ7QUFDQyx1QkFBVyxFQUFDLE1BRGI7QUFFQyxpQkFBSyxFQUFFYSxJQUZSO0FBR0Msb0JBQVEsRUFBRUUsWUFIWDtBQUFBLG9DQUtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxELGVBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkQsZUFPQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRCxlQWtEQyw4REFBQyxvREFBRDtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLFVBQUUsRUFBQyxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRDtBQUFBLGtCQUREO0FBZ0VBOztHQTVGdUJkOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQge1xuXHRCb3gsXG5cdEhlYWRpbmcsXG5cdEZsZXgsXG5cdEZvcm1Db250cm9sLFxuXHRGb3JtTGFiZWwsXG5cdElucHV0LFxuXHRTZWxlY3QsXG5cdEJ1dHRvbixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCIuLi9saWIvcHJpc21hXCI7XG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSBcIi4uL3V0aWxzL2ZldGNoZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcblx0Y29uc3QgdXNlcnM6IFByaXNtYS5Vc2VyVW5jaGVja2VkQ3JlYXRlSW5wdXRbXSA9XG5cdFx0YXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoKTtcblx0cmV0dXJuIHtcblx0XHRwcm9wczogeyBpbml0aWFsVXNlcnM6IHVzZXJzIH0sXG5cdH07XG59XG5cbmNvbnN0IG9wdGlvbnMgPSBbXG5cdHsga2V5OiBcImRcIiwgdGV4dDogXCJERVZFTE9QRVJcIiwgdmFsdWU6IFwiREVWRUxPUEVSXCIgfSxcblx0eyBrZXk6IFwidVwiLCB0ZXh0OiBcIlVTRVJcIiwgdmFsdWU6IFwiVVNFUlwiIH0sXG5cdHsga2V5OiBcImFcIiwgdGV4dDogXCJBRE1JTlwiLCB2YWx1ZTogXCJBRE1JTlwiIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgaW5pdGlhbFVzZXJzIH0pIHtcblx0Y29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPVxuXHRcdHVzZVN0YXRlPFByaXNtYS5Vc2VyVW5jaGVja2VkQ3JlYXRlSW5wdXRbXT4oaW5pdGlhbFVzZXJzKTtcblx0Y29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCBbbGFzdE5hbWUsIHNldExhc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCBbYXZhdGFyLCBzZXRBdmF0YXJdID0gdXNlU3RhdGUoXCJcIik7XG5cdGNvbnN0IFtyb2xlLCBzZXRSb2xlXSA9IHVzZVN0YXRlKCk7XG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCB7IHZhbHVlIH0pID0+IHNldFJvbGUodmFsdWUpO1xuXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBib2R5OiBQcmlzbWEuVXNlckNyZWF0ZUlucHV0ID0ge1xuXHRcdFx0Zmlyc3ROYW1lLFxuXHRcdFx0bGFzdE5hbWUsXG5cdFx0XHRyb2xlLFxuXHRcdFx0ZW1haWwsXG5cdFx0XHRhdmF0YXIsXG5cdFx0fTtcblxuXHRcdGF3YWl0IGZldGNoZXIoXCIvYXBpL2NyZWF0ZVwiLCB7IHVzZXI6IGJvZHkgfSk7XG5cdFx0YXdhaXQgc2V0VXNlcnMoWy4uLnVzZXJzLCBib2R5XSk7XG5cdFx0c2V0Rmlyc3ROYW1lKFwiXCIpO1xuXHRcdHNldExhc3ROYW1lKFwiXCIpO1xuXHRcdHNldEF2YXRhcihcIlwiKTtcblx0XHRzZXRSb2xlKG51bGwpO1xuXHRcdHNldEVtYWlsKFwiXCIpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cblx0XHRcdFx0PG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRlc3Rpbmcgc3RhY2sgcHJpc21hXCIgLz5cblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHQ8Qm94IG10PVwiMjBweFwiIHA9XCIyJVwiIHc9XCIxMDAlXCI+XG5cdFx0XHRcdDxIZWFkaW5nIGFzPVwiaDNcIj5cblx0XHRcdFx0XHRUaGlzIGFwcCBpcyBwb3dlcmVkIGJ5IE5leHRKUywgQ2hha3JhIFVJXG5cdFx0XHRcdDwvSGVhZGluZz5cblx0XHRcdFx0PEZsZXggYXM9XCJmb3JtXCIgZ3JpZEdhcD17M30gbXQ9XCIzMHB4XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGlkPVwiZmlyc3QtbmFtZVwiIGlzUmVxdWlyZWQ+XG5cdFx0XHRcdFx0XHQ8Rm9ybUxhYmVsPkZpcnN0IG5hbWU8L0Zvcm1MYWJlbD5cblx0XHRcdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkZpcnN0IG5hbWVcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17Zmlyc3ROYW1lfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEZpcnN0TmFtZShlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGlkPVwibGFzdC1uYW1lXCIgaXNSZXF1aXJlZD5cblx0XHRcdFx0XHRcdDxGb3JtTGFiZWw+TGFzdCBuYW1lPC9Gb3JtTGFiZWw+XG5cdFx0XHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJMYXN0IG5hbWVcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17bGFzdE5hbWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGFzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBpZD1cImVtYWlsXCIgaXNSZXF1aXJlZD5cblx0XHRcdFx0XHRcdDxGb3JtTGFiZWw+RW1haWw8L0Zvcm1MYWJlbD5cblx0XHRcdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVtYWlsXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2VtYWlsfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgaWQ9XCJhdmF0YXJcIiBpc1JlcXVpcmVkPlxuXHRcdFx0XHRcdFx0PEZvcm1MYWJlbD5BdmF0YXI8L0Zvcm1MYWJlbD5cblx0XHRcdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkF2YXRhclwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXthdmF0YXJ9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXZhdGFyKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgaWQ9XCJlb2xlXCIgaXNSZXF1aXJlZD5cblx0XHRcdFx0XHRcdDxGb3JtTGFiZWw+Um9sZTwvRm9ybUxhYmVsPlxuXHRcdFx0XHRcdFx0PFNlbGVjdFxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlJvbGVcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cm9sZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbj5VU0VSPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24+QURNSU48L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbj5ERVZFTE9QRVI8L29wdGlvbj5cblx0XHRcdFx0XHRcdDwvU2VsZWN0PlxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XG5cdFx0XHRcdDwvRmxleD5cblx0XHRcdFx0PEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbXQ9XCIyMHB4XCI+XG5cdFx0XHRcdFx0VGVzdCFcblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L0JveD5cblx0XHQ8Lz5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJCb3giLCJIZWFkaW5nIiwiRmxleCIsIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiSW5wdXQiLCJTZWxlY3QiLCJCdXR0b24iLCJIZWFkIiwidXNlU3RhdGUiLCJmZXRjaGVyIiwib3B0aW9ucyIsImtleSIsInRleHQiLCJ2YWx1ZSIsIkhvbWUiLCJpbml0aWFsVXNlcnMiLCJ1c2VycyIsInNldFVzZXJzIiwiZmlyc3ROYW1lIiwic2V0Rmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzZXRMYXN0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJhdmF0YXIiLCJzZXRBdmF0YXIiLCJyb2xlIiwic2V0Um9sZSIsImhhbmRsZUNoYW5nZSIsImUiLCJoYW5kbGVTdWJtaXQiLCJib2R5IiwidXNlciIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=