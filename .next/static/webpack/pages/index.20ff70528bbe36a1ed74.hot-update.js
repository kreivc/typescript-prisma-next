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

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      role = _useState6[0],
      setRole = _useState6[1];

  var Role;

  (function (Role) {
    Role["USER"] = "USER";
    Role["ADMIN"] = "ADMIN";
    Role["DEVELOPER"] = "DEVELOPER";
  })(Role || (Role = {}));

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
              setAvatar("");
              setRole("USER");
              setEmail("");

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
            value: role,
            onChange: function onChange(e) {
              return setRole(e.target.value);
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "USER",
              children: "USER"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "ADMIN",
              children: "ADMIN"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "DEVELOPER",
              children: "DEVELOPER"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
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
        onClick: handleSubmit,
        mt: "20px",
        children: "Test!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjBmZjcwNTI4YmJlMzZhMWVkNzQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFVQTtBQUNBO0FBRUE7Ozs7QUFVZSxTQUFTVyxJQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjs7QUFDOUMsa0JBQ0NILCtDQUFRLENBQW9DRyxZQUFwQyxDQURUO0FBQUEsTUFBT0MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUEsbUJBQWtDTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPTSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUFnQ1AsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT1EsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBMEJULCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9VLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUE0QlgsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT1ksTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQXdCYiwrQ0FBUSxFQUFoQztBQUFBLE1BQU9jLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQVA4QyxNQVN6Q0MsSUFUeUM7O0FBQUEsYUFTekNBLElBVHlDO0FBU3pDQSxJQUFBQSxJQVR5QztBQVN6Q0EsSUFBQUEsSUFUeUM7QUFTekNBLElBQUFBLElBVHlDO0FBQUEsS0FTekNBLElBVHlDLEtBU3pDQSxJQVR5Qzs7QUFlOUMsTUFBTUMsWUFBWTtBQUFBLDhVQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkQyxjQUFBQSxJQURjLEdBQ2lCO0FBQ3BDWixnQkFBQUEsU0FBUyxFQUFUQSxTQURvQztBQUVwQ0UsZ0JBQUFBLFFBQVEsRUFBUkEsUUFGb0M7QUFHcENNLGdCQUFBQSxJQUFJ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O0FBQVEsbUJBQUssRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpELGVBaURDLDhEQUFDLG9EQUFEO0FBQVEsZUFBTyxFQUFFUCxZQUFqQjtBQUErQixVQUFFLEVBQUMsTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEQ7QUFBQSxrQkFERDtBQStEQTs7R0FsR3VCZjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHtcblx0Qm94LFxuXHRIZWFkaW5nLFxuXHRGbGV4LFxuXHRGb3JtQ29udHJvbCxcblx0Rm9ybUxhYmVsLFxuXHRJbnB1dCxcblx0U2VsZWN0LFxuXHRCdXR0b24sXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gXCIuLi91dGlscy9mZXRjaGVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG5cdGNvbnN0IHVzZXJzOiBQcmlzbWEuVXNlclVuY2hlY2tlZENyZWF0ZUlucHV0W10gPVxuXHRcdGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KCk7XG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHsgaW5pdGlhbFVzZXJzOiB1c2VycyB9LFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgaW5pdGlhbFVzZXJzIH0pIHtcblx0Y29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPVxuXHRcdHVzZVN0YXRlPFByaXNtYS5Vc2VyVW5jaGVja2VkQ3JlYXRlSW5wdXRbXT4oaW5pdGlhbFVzZXJzKTtcblx0Y29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCBbbGFzdE5hbWUsIHNldExhc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCBbYXZhdGFyLCBzZXRBdmF0YXJdID0gdXNlU3RhdGUoXCJcIik7XG5cdGNvbnN0IFtyb2xlLCBzZXRSb2xlXSA9IHVzZVN0YXRlKCk7XG5cblx0ZW51bSBSb2xlIHtcblx0XHRVU0VSID0gXCJVU0VSXCIsXG5cdFx0QURNSU4gPSBcIkFETUlOXCIsXG5cdFx0REVWRUxPUEVSID0gXCJERVZFTE9QRVJcIixcblx0fVxuXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBib2R5OiBQcmlzbWEuVXNlckNyZWF0ZUlucHV0ID0ge1xuXHRcdFx0Zmlyc3ROYW1lLFxuXHRcdFx0bGFzdE5hbWUsXG5cdFx0XHRyb2xlLFxuXHRcdFx0ZW1haWwsXG5cdFx0XHRhdmF0YXIsXG5cdFx0fTtcblxuXHRcdGNvbnNvbGUubG9nKGJvZHkpO1xuXG5cdFx0YXdhaXQgZmV0Y2hlcihcIi9hcGkvY3JlYXRlXCIsIHsgdXNlcjogYm9keSB9KTtcblx0XHRhd2FpdCBzZXRVc2VycyhbLi4udXNlcnMsIGJvZHldKTtcblx0XHRzZXRGaXJzdE5hbWUoXCJcIik7XG5cdFx0c2V0TGFzdE5hbWUoXCJcIik7XG5cdFx0c2V0QXZhdGFyKFwiXCIpO1xuXHRcdHNldFJvbGUoXCJVU0VSXCIpO1xuXHRcdHNldEVtYWlsKFwiXCIpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cblx0XHRcdFx0PG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRlc3Rpbmcgc3RhY2sgcHJpc21hXCIgLz5cblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHQ8Qm94IG10PVwiMjBweFwiIHA9XCIyJVwiIHc9XCIxMDAlXCI+XG5cdFx0XHRcdDxIZWFkaW5nIGFzPVwiaDNcIj5cblx0XHRcdFx0XHRUaGlzIGFwcCBpcyBwb3dlcmVkIGJ5IE5leHRKUywgQ2hha3JhIFVJXG5cdFx0XHRcdDwvSGVhZGluZz5cblx0XHRcdFx0PEZsZXggYXM9XCJmb3JtXCIgZ3JpZEdhcD17M30gbXQ9XCIzMHB4XCI+XG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGlkPVwiZmlyc3QtbmFtZVwiIGlzUmVxdWlyZWQ+XG5cdFx0XHRcdFx0XHQ8Rm9ybUxhYmVsPkZpcnN0IG5hbWU8L0Zvcm1MYWJlbD5cblx0XHRcdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkZpcnN0IG5hbWVcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17Zmlyc3ROYW1lfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEZpcnN0TmFtZShlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGlkPVwibGFzdC1uYW1lXCIgaXNSZXF1aXJlZD5cblx0XHRcdFx0XHRcdDxGb3JtTGFiZWw+TGFzdCBuYW1lPC9Gb3JtTGFiZWw+XG5cdFx0XHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJMYXN0IG5hbWVcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17bGFzdE5hbWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGFzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBpZD1cImVtYWlsXCIgaXNSZXF1aXJlZD5cblx0XHRcdFx0XHRcdDxGb3JtTGFiZWw+RW1haWw8L0Zvcm1MYWJlbD5cblx0XHRcdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVtYWlsXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2VtYWlsfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgaWQ9XCJhdmF0YXJcIiBpc1JlcXVpcmVkPlxuXHRcdFx0XHRcdFx0PEZvcm1MYWJlbD5BdmF0YXI8L0Zvcm1MYWJlbD5cblx0XHRcdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkF2YXRhclwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXthdmF0YXJ9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXZhdGFyKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgaWQ9XCJlb2xlXCIgaXNSZXF1aXJlZD5cblx0XHRcdFx0XHRcdDxGb3JtTGFiZWw+Um9sZTwvRm9ybUxhYmVsPlxuXHRcdFx0XHRcdFx0PFNlbGVjdFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cm9sZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRSb2xlKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlVTRVJcIj5VU0VSPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJBRE1JTlwiPkFETUlOPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJERVZFTE9QRVJcIj5ERVZFTE9QRVI8L29wdGlvbj5cblx0XHRcdFx0XHRcdDwvU2VsZWN0PlxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XG5cdFx0XHRcdDwvRmxleD5cblx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IG10PVwiMjBweFwiPlxuXHRcdFx0XHRcdFRlc3QhXG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9Cb3g+XG5cdFx0PC8+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiQm94IiwiSGVhZGluZyIsIkZsZXgiLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIklucHV0IiwiU2VsZWN0IiwiQnV0dG9uIiwiSGVhZCIsInVzZVN0YXRlIiwiZmV0Y2hlciIsIkhvbWUiLCJpbml0aWFsVXNlcnMiLCJ1c2VycyIsInNldFVzZXJzIiwiZmlyc3ROYW1lIiwic2V0Rmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzZXRMYXN0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJhdmF0YXIiLCJzZXRBdmF0YXIiLCJyb2xlIiwic2V0Um9sZSIsIlJvbGUiLCJoYW5kbGVTdWJtaXQiLCJib2R5IiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9