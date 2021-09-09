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

  var _this = this;

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

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("USER"),
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

  var handleDelete = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(u) {
      return C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0,_utils_fetcher__WEBPACK_IMPORTED_MODULE_5__.fetcher)("/api/delete", {
                id: u.id
              });

            case 2:
              _context2.next = 4;
              return setUsers(users.filter(function (usr) {
                return usr !== u;
              }));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleDelete(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("meta", {
        name: "description",
        content: "Testing stack prisma"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
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
        lineNumber: 77,
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
            lineNumber: 82,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
            placeholder: "First name",
            value: firstName,
            onChange: function onChange(e) {
              return setFirstName(e.target.value);
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
          id: "last-name",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "Last name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
            placeholder: "Last name",
            value: lastName,
            onChange: function onChange(e) {
              return setLastName(e.target.value);
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
          id: "email",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
            placeholder: "Email",
            value: email,
            onChange: function onChange(e) {
              return setEmail(e.target.value);
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
          id: "avatar",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "Avatar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
            placeholder: "Avatar",
            value: avatar,
            onChange: function onChange(e) {
              return setAvatar(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
          id: "eole",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "Role"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
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
              lineNumber: 119,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "ADMIN",
              children: "ADMIN"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "DEVELOPER",
              children: "DEVELOPER"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
        onClick: handleSubmit,
        mt: "20px",
        children: "Test!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Center, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Divider, {
        orientation: "horizontal",
        w: "95%"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
      p: "10",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Center, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
          as: "h1",
          fontSize: "2xl",
          fontWeight: "bold",
          children: "User List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Table, {
        variant: "simple",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Thead, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Tr, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Th, {
              children: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Th, {
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Th, {
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Tbody, {
          children: users.map(function (u, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Tr, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Td, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {
                  align: "center",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Image, {
                    src: u.avatar,
                    alt: u.avatar,
                    rounded: "full",
                    bg: "gray.600",
                    w: "8",
                    h: "8",
                    mr: "5"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
                      as: "h2",
                      fontWeight: "bold",
                      children: "".concat(u.firstName, " ").concat(u.lastName)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 163,
                      columnNumber: 12
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
                      as: "p",
                      children: u.role
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 167,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 9
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Td, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
                  as: "p",
                  children: u.email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 9
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Td, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
                  onClick: function onClick() {
                    return handleDelete(u);
                  },
                  children: "Delete This user"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 9
              }, _this)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 8
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}

_s(Home, "ZkOxofh+j0PwcLxtuvDrlkTFXvc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGUyMTBkMThmZWExYjU4NzE4MGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFtQkE7QUFDQTtBQUVBOzs7O0FBVWUsU0FBU29CLElBQVQsT0FBZ0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCOztBQUM5QyxrQkFDQ0gsK0NBQVEsQ0FBb0NHLFlBQXBDLENBRFQ7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQSxtQkFBa0NMLCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUFBLE1BQU9NLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQWdDUCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPUSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUEwQlQsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT1UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQTRCWCwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPWSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBd0JiLCtDQUFRLENBQUMsTUFBRCxDQUFoQztBQUFBLE1BQU9jLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUVBLE1BQU1DLFlBQVk7QUFBQSw4VUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEMsY0FBQUEsSUFEYyxHQUNpQjtBQUNwQ1gsZ0JBQUFBLFNBQVMsRUFBVEEsU0FEb0M7QUFFcENFLGdCQUFBQSxRQUFRLEVBQVJBLFFBRm9DO0FBR3BDTSxnQkFBQUEsSUFBSSxFQUFKQSxJQUhvQztBQUlwQ0osZ0JBQUFBLEtBQUssRUFBTEEsS0FKb0M7QUFLcENFLGdCQUFBQSxNQUFNLEVBQU5BO0FBTG9DLGVBRGpCO0FBU3BCTSxjQUFBQSxPQUFPLENBQUNDLEdBQVIs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O0FBQUE7QUFBQSw2QkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxlQXFCQyw4REFBQyxnREFBRDtBQUFBLHVDQUNDLDhEQUFDLGlEQUFEO0FBQUssb0JBQUUsRUFBQyxHQUFSO0FBQUEsNEJBQWFRLENBQUMsQ0FBQ1o7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFyQkQsZUF3QkMsOERBQUMsZ0RBQUQ7QUFBQSx1Q0FDQyw4REFBQyxvREFBRDtBQUFRLHlCQUFPLEVBQUU7QUFBQSwyQkFBTVcsWUFBWSxDQUFDQyxDQUFELENBQWxCO0FBQUEsbUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkF4QkQ7QUFBQSxlQUFTUSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFU7QUFBQSxXQUFWO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqRUQ7QUFBQSxrQkFERDtBQXNIQTs7R0F4SnVCNUI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWEgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7XG5cdEJveCxcblx0SGVhZGluZyxcblx0RmxleCxcblx0Rm9ybUNvbnRyb2wsXG5cdEZvcm1MYWJlbCxcblx0SW5wdXQsXG5cdFNlbGVjdCxcblx0QnV0dG9uLFxuXHREaXZpZGVyLFxuXHRDZW50ZXIsXG5cdFRhYmxlLFxuXHRUaGVhZCxcblx0VHIsXG5cdFRoLFxuXHRUYm9keSxcblx0VGQsXG5cdEltYWdlLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tIFwiLi4vdXRpbHMvZmV0Y2hlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuXHRjb25zdCB1c2VyczogUHJpc21hLlVzZXJVbmNoZWNrZWRDcmVhdGVJbnB1dFtdID1cblx0XHRhd2FpdCBwcmlzbWEudXNlci5maW5kTWFueSgpO1xuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7IGluaXRpYWxVc2VyczogdXNlcnMgfSxcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGluaXRpYWxVc2VycyB9KSB7XG5cdGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID1cblx0XHR1c2VTdGF0ZTxQcmlzbWEuVXNlclVuY2hlY2tlZENyZWF0ZUlucHV0W10+KGluaXRpYWxVc2Vycyk7XG5cdGNvbnN0IFtmaXJzdE5hbWUsIHNldEZpcnN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblx0Y29uc3QgW2xhc3ROYW1lLCBzZXRMYXN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblx0Y29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcblx0Y29uc3QgW2F2YXRhciwgc2V0QXZhdGFyXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZShcIlVTRVJcIik7XG5cblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IGJvZHk6IFByaXNtYS5Vc2VyQ3JlYXRlSW5wdXQgPSB7XG5cdFx0XHRmaXJzdE5hbWUsXG5cdFx0XHRsYXN0TmFtZSxcblx0XHRcdHJvbGUsXG5cdFx0XHRlbWFpbCxcblx0XHRcdGF2YXRhcixcblx0XHR9O1xuXG5cdFx0Y29uc29sZS5sb2coYm9keSk7XG5cblx0XHRhd2FpdCBmZXRjaGVyKFwiL2FwaS9jcmVhdGVcIiwgeyB1c2VyOiBib2R5IH0pO1xuXHRcdGF3YWl0IHNldFVzZXJzKFsuLi51c2VycywgYm9keV0pO1xuXHRcdHNldEZpcnN0TmFtZShcIlwiKTtcblx0XHRzZXRMYXN0TmFtZShcIlwiKTtcblx0XHRzZXRBdmF0YXIoXCJcIik7XG5cdFx0c2V0Um9sZShcIlVTRVJcIik7XG5cdFx0c2V0RW1haWwoXCJcIik7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKHUpID0+IHtcblx0XHRhd2FpdCBmZXRjaGVyKFwiL2FwaS9kZWxldGVcIiwgeyBpZDogdS5pZCB9KTtcblx0XHRhd2FpdCBzZXRVc2Vycyh1c2Vycy5maWx0ZXIoKHVzcikgPT4gdXNyICE9PSB1KSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGVzdGluZyBzdGFjayBwcmlzbWFcIiAvPlxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG5cdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdDxCb3ggbXQ9XCIyMHB4XCIgcD1cIjIlXCIgdz1cIjEwMCVcIj5cblx0XHRcdFx0PEhlYWRpbmcgYXM9XCJoM1wiPlxuXHRcdFx0XHRcdFRoaXMgYXBwIGlzIHBvd2VyZWQgYnkgTmV4dEpTLCBDaGFrcmEgVUlcblx0XHRcdFx0PC9IZWFkaW5nPlxuXHRcdFx0XHQ8RmxleCBhcz1cImZvcm1cIiBncmlkR2FwPXszfSBtdD1cIjMwcHhcIj5cblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgaWQ9XCJmaXJzdC1uYW1lXCIgaXNSZXF1aXJlZD5cblx0XHRcdFx0XHRcdDxGb3JtTGFiZWw+Rmlyc3QgbmFtZTwvRm9ybUxhYmVsPlxuXHRcdFx0XHRcdFx0PElucHV0XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRmlyc3QgbmFtZVwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtmaXJzdE5hbWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rmlyc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgaWQ9XCJsYXN0LW5hbWVcIiBpc1JlcXVpcmVkPlxuXHRcdFx0XHRcdFx0PEZvcm1MYWJlbD5MYXN0IG5hbWU8L0Zvcm1MYWJlbD5cblx0XHRcdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkxhc3QgbmFtZVwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtsYXN0TmFtZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRMYXN0TmFtZShlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGlkPVwiZW1haWxcIiBpc1JlcXVpcmVkPlxuXHRcdFx0XHRcdFx0PEZvcm1MYWJlbD5FbWFpbDwvRm9ybUxhYmVsPlxuXHRcdFx0XHRcdFx0PElucHV0XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZW1haWx9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBpZD1cImF2YXRhclwiIGlzUmVxdWlyZWQ+XG5cdFx0XHRcdFx0XHQ8Rm9ybUxhYmVsPkF2YXRhcjwvRm9ybUxhYmVsPlxuXHRcdFx0XHRcdFx0PElucHV0XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiQXZhdGFyXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2F2YXRhcn1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRBdmF0YXIoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBpZD1cImVvbGVcIiBpc1JlcXVpcmVkPlxuXHRcdFx0XHRcdFx0PEZvcm1MYWJlbD5Sb2xlPC9Gb3JtTGFiZWw+XG5cdFx0XHRcdFx0XHQ8U2VsZWN0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtyb2xlfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFJvbGUoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVVNFUlwiPlVTRVI8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkFETUlOXCI+QURNSU48L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkRFVkVMT1BFUlwiPkRFVkVMT1BFUjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PC9TZWxlY3Q+XG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cblx0XHRcdFx0PC9GbGV4PlxuXHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gbXQ9XCIyMHB4XCI+XG5cdFx0XHRcdFx0VGVzdCFcblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L0JveD5cblxuXHRcdFx0PENlbnRlcj5cblx0XHRcdFx0PERpdmlkZXIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgdz1cIjk1JVwiIC8+XG5cdFx0XHQ8L0NlbnRlcj5cblxuXHRcdFx0PEJveCBwPVwiMTBcIj5cblx0XHRcdFx0PENlbnRlcj5cblx0XHRcdFx0XHQ8Qm94IGFzPVwiaDFcIiBmb250U2l6ZT1cIjJ4bFwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XG5cdFx0XHRcdFx0XHRVc2VyIExpc3Rcblx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0PC9DZW50ZXI+XG5cdFx0XHRcdDxUYWJsZSB2YXJpYW50PVwic2ltcGxlXCI+XG5cdFx0XHRcdFx0PFRoZWFkPlxuXHRcdFx0XHRcdFx0PFRyPlxuXHRcdFx0XHRcdFx0XHQ8VGg+TmFtZTwvVGg+XG5cdFx0XHRcdFx0XHRcdDxUaD5FbWFpbDwvVGg+XG5cdFx0XHRcdFx0XHRcdDxUaD5BY3Rpb248L1RoPlxuXHRcdFx0XHRcdFx0PC9Ucj5cblx0XHRcdFx0XHQ8L1RoZWFkPlxuXHRcdFx0XHRcdDxUYm9keT5cblx0XHRcdFx0XHRcdHt1c2Vycy5tYXAoKHUsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxUciBrZXk9e2luZGV4fT5cblx0XHRcdFx0XHRcdFx0XHQ8VGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8RmxleCBhbGlnbj1cImNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e3UuYXZhdGFyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD17dS5hdmF0YXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm91bmRlZD1cImZ1bGxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJnPVwiZ3JheS42MDBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHc9XCI4XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoPVwiOFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXI9XCI1XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcz1cImgyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ9XCJib2xkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+e2Ake3UuZmlyc3ROYW1lfSAke3UubGFzdE5hbWV9YH08L0JveD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IGFzPVwicFwiPnt1LnJvbGV9PC9Cb3g+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9GbGV4PlxuXHRcdFx0XHRcdFx0XHRcdDwvVGQ+XG5cdFx0XHRcdFx0XHRcdFx0PFRkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEJveCBhcz1cInBcIj57dS5lbWFpbH08L0JveD5cblx0XHRcdFx0XHRcdFx0XHQ8L1RkPlxuXHRcdFx0XHRcdFx0XHRcdDxUZD5cblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKHUpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0RGVsZXRlIFRoaXMgdXNlclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9UZD5cblx0XHRcdFx0XHRcdFx0PC9Ucj5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvVGJvZHk+XG5cdFx0XHRcdDwvVGFibGU+XG5cdFx0XHQ8L0JveD5cblx0XHQ8Lz5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJCb3giLCJIZWFkaW5nIiwiRmxleCIsIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiSW5wdXQiLCJTZWxlY3QiLCJCdXR0b24iLCJEaXZpZGVyIiwiQ2VudGVyIiwiVGFibGUiLCJUaGVhZCIsIlRyIiwiVGgiLCJUYm9keSIsIlRkIiwiSW1hZ2UiLCJIZWFkIiwidXNlU3RhdGUiLCJmZXRjaGVyIiwiSG9tZSIsImluaXRpYWxVc2VycyIsInVzZXJzIiwic2V0VXNlcnMiLCJmaXJzdE5hbWUiLCJzZXRGaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNldExhc3ROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsImF2YXRhciIsInNldEF2YXRhciIsInJvbGUiLCJzZXRSb2xlIiwiaGFuZGxlU3VibWl0IiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiaGFuZGxlRGVsZXRlIiwidSIsImlkIiwiZmlsdGVyIiwidXNyIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9