(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/Index.js":
/*!*******************************!*\
  !*** ./resources/js/Index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var _components_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PrivateRoute */ "./resources/js/components/PrivateRoute.js");
/* harmony import */ var _components_AdminRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AdminRoute */ "./resources/js/components/AdminRoute.js");
/* harmony import */ var _views_Unauthorized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/Unauthorized */ "./resources/js/views/Unauthorized.js");
/* harmony import */ var _functions_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/cookies */ "./resources/js/functions/cookies.js");
/* harmony import */ var _views_Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/Login */ "./resources/js/views/Login.js");
/* harmony import */ var _views_Register__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/Register */ "./resources/js/views/Register.js");
/* harmony import */ var _Views_Home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Views/Home */ "./resources/js/Views/Home.js");
/* harmony import */ var _views_admin_AdminLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/admin/AdminLayout */ "./resources/js/views/admin/AdminLayout.js");
/* harmony import */ var _views_NotFound__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/NotFound */ "./resources/js/views/NotFound.js");
/* harmony import */ var _views_Borrow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/Borrow */ "./resources/js/views/Borrow.js");
/* harmony import */ var _components_ABCNav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/ABCNav */ "./resources/js/components/ABCNav.js");
/* harmony import */ var _views_user_UserLayout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/user/UserLayout */ "./resources/js/views/user/UserLayout.js");
/* harmony import */ var _views_Categories__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/Categories */ "./resources/js/views/Categories.js");
/* harmony import */ var _views_AllBooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/AllBooks */ "./resources/js/views/AllBooks.js");
/* harmony import */ var _views_LatestBooks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/LatestBooks */ "./resources/js/views/LatestBooks.js");
/* harmony import */ var _views_PopularBooks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/PopularBooks */ "./resources/js/views/PopularBooks.js");
/* harmony import */ var _views_VerifyEmail__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/VerifyEmail */ "./resources/js/views/VerifyEmail.js");
/* harmony import */ var _views_imports_sb_admin_2_min_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/imports/sb-admin-2.min.css */ "./resources/js/views/imports/sb-admin-2.min.css");
/* harmony import */ var _views_imports_sb_admin_2_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/imports/sb-admin-2.js */ "./resources/js/views/imports/sb-admin-2.js");
/* harmony import */ var _views_imports_sb_admin_2_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_views_imports_sb_admin_2_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _views_imports_sb_admin_2_min_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/imports/sb-admin-2.min.js */ "./resources/js/views/imports/sb-admin-2.min.js");
/* harmony import */ var _views_imports_sb_admin_2_min_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_views_imports_sb_admin_2_min_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_ScrollArrow__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/ScrollArrow */ "./resources/js/components/ScrollArrow.js");
/* harmony import */ var _views_VerifyEmailSuccessful__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/VerifyEmailSuccessful */ "./resources/js/views/VerifyEmailSuccessful.js");
/* harmony import */ var _views_DeleteAccountSuccessful__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/DeleteAccountSuccessful */ "./resources/js/views/DeleteAccountSuccessful.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }































var Index = function Index() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('loading'),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    username: '',
    status: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      needsToVerifyAcc = _useState4[0],
      setNeedsToVerifyAcc = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if ((0,_functions_cookies__WEBPACK_IMPORTED_MODULE_7__.getCookie)('token')) {
      _functions_axios__WEBPACK_IMPORTED_MODULE_3__.default.get('/api/auth/user').then(function (res) {
        setUser(res.data);
      })["catch"]( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(err) {
          var res, username;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(err.response.status == 403 || err.response.data.message === 'Your email address is not verified.')) {
                    _context.next = 9;
                    break;
                  }

                  _context.next = 3;
                  return _functions_axios__WEBPACK_IMPORTED_MODULE_3__.default.get('/api/auth/username');

                case 3:
                  res = _context.sent;
                  username = res.data;
                  setNeedsToVerifyAcc({
                    username: username,
                    status: true
                  });
                  setUser(null);
                  _context.next = 11;
                  break;

                case 9:
                  (0,_functions_cookies__WEBPACK_IMPORTED_MODULE_7__.deleteCookie)('token');
                  setUser(null);

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    } else {
      setUser(null);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.BrowserRouter, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("div", {
        style: {
          position: 'sticky',
          top: 0,
          zIndex: 3
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_components_ABCNav__WEBPACK_IMPORTED_MODULE_14__.default, {
          user: user,
          setUser: setUser,
          needsToVerifyAcc: needsToVerifyAcc,
          setNeedsToVerifyAcc: setNeedsToVerifyAcc
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.Switch, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.Route, {
            path: "/login",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_views_Login__WEBPACK_IMPORTED_MODULE_8__.default, {
              user: user,
              setUser: setUser,
              needsToVerifyAcc: needsToVerifyAcc,
              setNeedsToVerifyAcc: setNeedsToVerifyAcc
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.Route, {
            path: "/register",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_views_Register__WEBPACK_IMPORTED_MODULE_9__.default, {
              user: user,
              setUser: setUser,
              needsToVerifyAcc: needsToVerifyAcc,
              setNeedsToVerifyAcc: setNeedsToVerifyAcc
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.Route, {
            path: "/user",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__.default, {
              component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_views_user_UserLayout__WEBPACK_IMPORTED_MODULE_15__.default, {
                user: user,
                setUser: setUser
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.Route, {
            path: "/admin",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_components_AdminRoute__WEBPACK_IMPORTED_MODULE_5__.default, {
              component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_views_admin_AdminLayout__WEBPACK_IMPORTED_MODULE_11__.default, {})
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.Route, {
            path: "/unauthorized",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_views_Unauthorized__WEBPACK_IMPORTED_MODULE_6__.default, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.Route, {
            path: "/verify-email",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_views_VerifyEmail__WEBPACK_IMPORTED_MODULE_20__.default, {
              user: user,
              setUser: setUser
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.Route, {
            path: "/verify-email-success",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_views_VerifyEmailSuccessful__WEBPACK_IMPORTED_MODULE_25__.default, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.Route, {
            path: "/delete-account-success",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_views_DeleteAccountSuccessful__WEBPACK_IMPORTED_MODULE_26__.default, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.Route, {
            path: "/categories/:categoryId",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_views_Categories__WEBPACK_IMPORTED_MODULE_16__.default, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.Route, {
            path: "/borrow/:bookId",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__.default, {
              component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_views_Borrow__WEBPACK_IMPORTED_MODULE_13__.default, {})
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.Route, {
            path: "/borrow",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_views_Borrow__WEBPACK_IMPORTED_MODULE_13__.default, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.Route, {
            path: "/all-books",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_views_AllBooks__WEBPACK_IMPORTED_MODULE_17__.default, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.Route, {
            path: "/latest-books",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_views_LatestBooks__WEBPACK_IMPORTED_MODULE_18__.default, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.Route, {
            path: "/popular-books",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_views_PopularBooks__WEBPACK_IMPORTED_MODULE_19__.default, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.Route, {
            exact: true,
            path: "/",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Views_Home__WEBPACK_IMPORTED_MODULE_10__.default, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.Route, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_views_NotFound__WEBPACK_IMPORTED_MODULE_12__.default, {})
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_components_ScrollArrow__WEBPACK_IMPORTED_MODULE_24__.default, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

if (document.getElementById('index')) {
  react_dom__WEBPACK_IMPORTED_MODULE_2__.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(Index, {}), document.getElementById('index'));
}

/***/ }),

/***/ "./resources/js/Views/Home.js":
/*!************************************!*\
  !*** ./resources/js/Views/Home.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _functions_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/cookies */ "./resources/js/functions/cookies.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Home = function Home(props) {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('all'),
      _useState2 = _slicedToArray(_useState, 2),
      by = _useState2[0],
      setBy = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      search = _useState6[0],
      setSearch = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      latestBooks = _useState8[0],
      setLatestBook = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      popularBooks = _useState10[0],
      setPopularBook = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isProcessing = _useState12[0],
      setProcessing = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isLoading = _useState14[0],
      setLoading = _useState14[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setLoading(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.all([_functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/books/latest?number=12'), _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/books/popular?number=12')]).then(_functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.spread(function (res1, res2) {
      setLatestBook(res1.data);
      setPopularBook(res2.data);
    }))["finally"](function () {
      setLoading(false);
    });
  }, []);
  var options = [{
    name: 'All',
    value: 'all'
  }, {
    name: 'Title',
    value: 'title'
  }, {
    name: 'Author',
    value: 'author'
  }, {
    name: 'Description',
    value: 'description'
  }, {
    name: 'Year',
    value: 'year'
  }];

  function handleChange(event) {
    var value = event.target.value;
    setValue(value);
  }

  function selectedValueHandler(event) {
    var by = event.target.value;
    setBy(by);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setProcessing(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/books/search?by=' + by + '&value=' + value).then(function (res) {
      setSearch(res.data);
    })["catch"](function (err) {
      console.log(err);
    })["finally"](function () {
      setProcessing(false);
    });
  }

  var Modal = function Modal(value, i) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "modal fade",
      id: 'modal-book' + value.id,
      tabIndex: "-1",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "modal-dialog modal-dialog-centered modal-xl",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h5", {
              className: "modal-title",
              id: "exampleModalLabel",
              children: "ABC Library"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              type: "button",
              className: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "modal-body",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "container",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "col-lg-3",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                    src: value.image || 'img/book-null-img.png',
                    className: "img-fluid rounded",
                    alt: "..."
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
                    className: "table small",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
                            children: value.title
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {})]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tbody", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                          className: "fw-bold",
                          children: "Author"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                          children: value.author
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                          className: "fw-bold",
                          children: "Publisher"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                          children: value.publisher.name
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                          className: "fw-bold",
                          children: "Year"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                          children: value.year
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                          className: "fw-bold",
                          children: "Category"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                          children: value.category.name
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                          className: "fw-bold",
                          children: "Stock"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                          children: value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                            className: "text-danger",
                            children: "Out of Stock"
                          }) : value.stock
                        })]
                      })]
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "col-lg-5",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
                    children: "Description"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("small", {
                    children: value.description
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {})]
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "modal-footer",
            children: value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("small", {
                className: "text-danger me-2",
                children: "* You can't borrow this book"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                disabled: true,
                className: "btn btn-outline-primary btn-sm",
                onClick: function onClick(e) {
                  return history.push('/borrow/' + value.id);
                },
                "data-bs-dismiss": "modal",
                "aria-label": "Close",
                children: "Borrow"
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              className: "btn btn-outline-primary btn-sm",
              onClick: function onClick(e) {
                return history.push('/borrow/' + value.id);
              },
              "data-bs-dismiss": "modal",
              "aria-label": "Close",
              children: "Borrow"
            })
          })]
        })
      })
    }, i);
  };

  var renderSearchResult = function renderSearchResult() {
    if (search && search.length == 0) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "text-center p-5",
        style: {
          marginBottom: '20vh'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
          src: '/img/not-found.jpg',
          style: {
            width: '25rem',
            maxWidth: '100%'
          },
          alt: "not-found"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "display-6",
          children: "No Result Found"
        })]
      });
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "container p-5",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "row",
        children: search.map(function (value, i) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "col-6 col-sm-6 col-md-4 col-lg-3 p-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "card p-2 h-100",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                src: value.image || 'img/book-null-img.png',
                className: "img-fluid rounded",
                alt: "...",
                "data-bs-toggle": "modal",
                "data-bs-target": '#modal-book' + value.id
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "card-body",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
                  className: "small list-unstyled",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                    children: value.title
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                    className: "fst-italic text-primary",
                    children: value.author
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                    className: "fw-lighter",
                    children: value.year
                  }), value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                    className: "text-danger",
                    children: "Out of Stock"
                  }) : '']
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "card-footer",
                children: value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                  disabled: true,
                  className: "btn btn-outline-primary btn-sm",
                  onClick: function onClick(e) {
                    return history.push('/borrow/' + value.id);
                  },
                  "data-bs-dismiss": "modal",
                  "aria-label": "Close",
                  children: "Borrow"
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                  className: "btn btn-outline-primary btn-sm",
                  onClick: function onClick(e) {
                    return history.push('/borrow/' + value.id);
                  },
                  "data-bs-dismiss": "modal",
                  "aria-label": "Close",
                  children: "Borrow"
                })
              })]
            }), Modal(value, i)]
          }, i);
        })
      })
    });
  };

  var renderBooks = function renderBooks() {
    if (isLoading) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      style: {
        height: '25%'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_3__.Loading, {
        height: "25vh"
      })
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "container-fluid mt-5 pb-5",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h6", {
            className: "display-6 fw-bold text-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "text-primary",
              children: "Latest Books"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "row justify-content-center mb-3 text-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-wrap col-lg-6 text-secondary",
              children: "Explore the newest and most recently added books at ABC Library!"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "row",
            children: latestBooks.map(function (value, i) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "col-6 col-sm-6 col-md-4 col-lg-3 p-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                  src: value.image || 'img/book-null-img.png',
                  className: "img-fluid rounded",
                  alt: "...",
                  "data-bs-toggle": "modal",
                  "data-bs-target": '#modal-book' + value.id,
                  style: {
                    cursor: 'pointer'
                  }
                }), Modal(value, i)]
              }, i);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "d-flex justify-content-center mt-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
              to: "latest-books",
              children: "See more"
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "container-fluid mt-5 pb-5",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h6", {
            className: "display-6 fw-bold text-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "text-primary",
              children: "Popular Books"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "row justify-content-center mb-3 text-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-wrap col-lg-6 text-secondary",
              children: "All time favorites of all readers at ABC Library!"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "row",
            children: popularBooks.map(function (value, i) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "col-6 col-sm-6 col-md-4 col-lg-3 p-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                  src: value.image || 'img/book-null-img.png',
                  className: "img-fluid rounded",
                  alt: "...",
                  "data-bs-toggle": "modal",
                  "data-bs-target": '#modal-book' + value.id,
                  style: {
                    cursor: 'pointer'
                  }
                }), Modal(value, i)]
              }, i);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "d-flex justify-content-center mt-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
              to: "popular-books",
              children: "See more"
            })
          })]
        })
      })]
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("header", {
      className: "masthead m-0",
      style: {
        backgroundImage: "url(\"/img/bg-books.jpg\")"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "container position-relative",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "row justify-content-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "col-lg-8",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "text-center text-white",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
                className: "display-1 fw-bold",
                style: {
                  cursor: 'pointer'
                },
                onClick: function onClick(e) {
                  setValue('');
                  setSearch(null); // reset search
                },
                children: "ABC Library"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "mb-5",
                id: "search-area",
                children: "Part of ABC Library project. More than 1,000 books to borrow."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
                className: "d-flex",
                onSubmit: handleSubmit,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "input-group-lg",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("select", {
                    className: "form-select",
                    onChange: selectedValueHandler,
                    children: options.map(function (item) {
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                        value: item.value,
                        children: item.name
                      }, item.value);
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  style: {
                    width: '10px'
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "input-group input-group-lg",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    onChange: handleChange,
                    className: 'form-control AutoFocus' + (by && by === 'year' && isNaN(value) ? ' is-invalid' : ''),
                    type: "text",
                    placeholder: "Search...",
                    value: value
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                    type: "submit",
                    className: "btn btn-primary search-btn h-100",
                    disabled: by && by === 'year' && isNaN(value),
                    onClick: function onClick() {
                      document.getElementById('search-area').scrollIntoView(true);
                      document.getElementById('search-area').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'center'
                      });
                    },
                    children: "Search"
                  })]
                })]
              })]
            })
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: isProcessing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        style: {
          height: '25%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_3__.Loading, {
          height: "25vh"
        })
      }) : search ? renderSearchResult() : renderBooks()
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("footer", {
      className: "sticky-footer bg-none",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "container mb-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "copyright text-center my-auto",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: "Copyright \xA9 ABC Library 2021"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("small", {
        className: "text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          children: "No. 5Eo, St. 2009, 12406, Phnom Penh, Cambodia"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          children: "Contact us: 011 222 333"
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


__webpack_require__(/*! ./Index */ "./resources/js/Index.js");

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"); // import 'bootstrap';

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js").default;
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // require('bootstrap');
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/components/ABCNav.js":
/*!*******************************************!*\
  !*** ./resources/js/components/ABCNav.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/NavDropdown */ "./node_modules/react-bootstrap/esm/NavDropdown.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _functions_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/cookies */ "./resources/js/functions/cookies.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function ABCNav(props) {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      categories = _useState2[0],
      setCategory = _useState2[1];

  var _ref = [props.user, props.setUser],
      user = _ref[0],
      setUser = _ref[1];
  var _ref2 = [props.needsToVerifyAcc, props.setNeedsToVerifyAcc],
      needsToVerifyAcc = _ref2[0],
      setNeedsToVerifyAcc = _ref2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    axios.get('/api/categories').then(function (res) {
      setCategory(res.data);
    });
  }, []);

  var logoutHandler = function logoutHandler() {
    axios.get('/api/auth/logout').then(function (res) {
      (0,_functions_cookies__WEBPACK_IMPORTED_MODULE_1__.deleteCookie)('token');
      location.href = '/';
    })["catch"](function (err) {
      console.log(err);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, {
    collapseOnSelect: true,
    expand: "md",
    bg: "light",
    variant: "light",
    className: "p-2 shadow",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__.default.Brand, {
      href: "/",
      className: "ps-3 pe-5",
      children: "ABC Library"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__.default.Toggle, {
      "aria-controls": "responsive-navbar-nav"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__.default.Collapse, {
      id: "responsive-navbar-nav",
      className: "justify-content-end",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__.default, {
        className: "mr-auto ms-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6__.default, {
          title: "Categories",
          id: "collasible-nav-dropdown",
          children: categories.map(function (cate, i) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6__.default.Item, {
                onClick: function onClick(e) {
                  return history.push('/categories/' + cate.id);
                },
                children: cate.name
              })
            }, i);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__.default.Link, {
          onClick: function onClick() {
            return history.push('/all-books');
          },
          children: "All books"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__.default.Link, {
          onClick: function onClick() {
            return history.push('/latest-books');
          },
          children: "Latest"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__.default.Link, {
          onClick: function onClick() {
            return history.push('/popular-books');
          },
          children: "Popular"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__.default, {
        className: "ms-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.BrowserRouter, {
          children: user == 'loading' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "spinner-border spinner-border-sm p-2 mr-4",
            role: "status",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "visually-hidden",
              children: "Loading..."
            })
          }) : needsToVerifyAcc && needsToVerifyAcc.status ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__.default.Link, {
              onClick: function onClick() {
                return history.push('/verify-email');
              },
              children: needsToVerifyAcc.username + ' - Verifiy Account Now'
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__.default.Link, {
              onClick: logoutHandler,
              children: "Logout"
            })]
          }) : user ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6__.default, {
            title: user.name,
            id: "collasible-nav-dropdown",
            className: "pr-2",
            alignRight: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6__.default.Item, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                className: "btn",
                onClick: function onClick() {
                  return history.push('/user');
                },
                children: "User Dashboard"
              })
            }), user.is_admin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6__.default.Item, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                className: "btn",
                onClick: function onClick() {
                  return history.push('/admin');
                },
                children: "Admin Dashboard"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6__.default.Item, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                className: "btn",
                onClick: logoutHandler,
                children: "Log out"
              })
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__.default.Link, {
              onClick: function onClick() {
                return history.push('/login');
              },
              children: "Login"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__.default.Link, {
              onClick: function onClick() {
                return history.push('/register');
              },
              children: "Register"
            })]
          })
        })
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ABCNav);

/***/ }),

/***/ "./resources/js/components/AdminRoute.js":
/*!***********************************************!*\
  !*** ./resources/js/components/AdminRoute.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _functions_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/cookies */ "./resources/js/functions/cookies.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var AdminRoute = function AdminRoute(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      loginStatus = _useState2[0],
      setLoginStatus = _useState2[1]; // -2=unauthorized; -1=not logged in; 0=loading; 1=logged in


  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/auth/user').then(function (res) {
      if (res.data.is_admin) {
        setLoginStatus(1);
      } else {
        setLoginStatus(-2);
      }
    })["catch"](function (err) {
      if (err.response.status == 403 || err.response.data.message === 'Your email address is not verified.') {
        setLoginStatus(-3);
      } else {
        (0,_functions_cookies__WEBPACK_IMPORTED_MODULE_4__.deleteCookie)('token');
        setLoginStatus(-1);
      }
    });
  }, []);

  if (!(0,_functions_cookies__WEBPACK_IMPORTED_MODULE_4__.getCookie)('token')) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_7__.Redirect, {
      push: true,
      to: "/login"
    });
  }

  switch (loginStatus) {
    case 0:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Loading__WEBPACK_IMPORTED_MODULE_5__.Loading, {});

    case 1:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [" ", props.component, " "]
      });

    case -1:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_7__.Redirect, {
        push: true,
        to: "/login"
      });

    case -2:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_7__.Redirect, {
        push: true,
        to: "/unauthorized"
      });

    case -3:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_7__.Redirect, {
        push: true,
        to: "/verify-email"
      });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminRoute);

/***/ }),

/***/ "./resources/js/components/Loading.js":
/*!********************************************!*\
  !*** ./resources/js/components/Loading.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loading": () => (/* binding */ Loading),
/* harmony export */   "LoadingButton": () => (/* binding */ LoadingButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var Loading = function Loading(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: 'd-flex ' + (props.text ? 'flex-column' : '') + ' justify-content-center align-items-center m-5',
    style: {
      height: props.height || '70vh'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "spinner-border",
      role: "status",
      style: {
        width: props.size || '4rem',
        height: props.size || '4rem'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "sr-only"
      })
    }), props.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h6", {
      className: "mt-4",
      children: props.text
    })]
  });
};
var LoadingButton = function LoadingButton(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    className: 'form-control btn btn-' + (props.color || 'primary') + ' rounded submit px-3',
    type: "button",
    disabled: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "spinner-border spinner-border-sm",
      role: "status",
      "aria-hidden": "true"
    })
  });
};

/***/ }),

/***/ "./resources/js/components/MessageAlert.js":
/*!*************************************************!*\
  !*** ./resources/js/components/MessageAlert.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var MessageAlert = function MessageAlert(_ref) {
  var msg = _ref.msg,
      success = _ref.success;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: 'alert alert-' + (success === 1 ? 'success' : 'danger'),
    role: "alert",
    children: msg
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageAlert);

/***/ }),

/***/ "./resources/js/components/PrivateRoute.js":
/*!*************************************************!*\
  !*** ./resources/js/components/PrivateRoute.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _functions_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../functions/cookies */ "./resources/js/functions/cookies.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var PrivateRoute = function PrivateRoute(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      loginStatus = _useState2[0],
      setLoginStatus = _useState2[1]; // -2=verify email; -1=not logged in; 0=loading; 1=logged in


  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/auth/user').then(function (res) {
      setLoginStatus(1);
    })["catch"](function (err) {
      if (err.response.status == 403 || err.response.data.message === 'Your email address is not verified.') {
        setLoginStatus(-2);
      } else {
        (0,_functions_cookies__WEBPACK_IMPORTED_MODULE_4__.deleteCookie)('token');
        setLoginStatus(-1);
      }
    });
  }, []);

  if (!(0,_functions_cookies__WEBPACK_IMPORTED_MODULE_4__.getCookie)('token')) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_7__.Redirect, {
      push: true,
      to: "/login"
    });
  }

  switch (loginStatus) {
    case 0:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Loading__WEBPACK_IMPORTED_MODULE_5__.Loading, {});

    case 1:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [" ", props.component, " "]
      });

    case -1:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_7__.Redirect, {
        push: true,
        to: "/login"
      });

    case -2:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_7__.Redirect, {
        push: true,
        to: "/verify-email"
      });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivateRoute);

/***/ }),

/***/ "./resources/js/components/ScrollArrow.js":
/*!************************************************!*\
  !*** ./resources/js/components/ScrollArrow.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ScrollArrow = function ScrollArrow() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showScroll = _useState2[0],
      setShowScroll = _useState2[1];

  var checkScrollTop = function checkScrollTop() {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  var scrollTop = function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', checkScrollTop);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "scrollTopContainer",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaArrowCircleUp, {
      className: "scrollTop",
      onClick: scrollTop,
      style: {
        height: 40,
        display: showScroll ? 'flex' : 'none'
      }
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollArrow);

/***/ }),

/***/ "./resources/js/functions/axios.js":
/*!*****************************************!*\
  !*** ./resources/js/functions/axios.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookies */ "./resources/js/functions/cookies.js");


var defaultOptions = {
  headers: {
    'Content-Type': 'application/json'
  }
}; // Set the AUTH token for any request

axios__WEBPACK_IMPORTED_MODULE_0___default().interceptors.request.use(function (config) {
  var token = (0,_cookies__WEBPACK_IMPORTED_MODULE_1__.getCookie)('token');
  if (config.headers.Authorization == 'NONE') config.headers = {};else {
    config.headers.Authorization = token ? "Bearer ".concat(token) : '';
    config.headers.Accept = 'application/json';
  }
  return config;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((axios__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ "./resources/js/functions/cookies.js":
/*!*******************************************!*\
  !*** ./resources/js/functions/cookies.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCookie": () => (/* binding */ getCookie),
/* harmony export */   "setCookie": () => (/* binding */ setCookie),
/* harmony export */   "deleteCookie": () => (/* binding */ deleteCookie)
/* harmony export */ });
function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
}
function setCookie(cname, cvalue) {
  var exdays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 7;
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
function deleteCookie(cname) {
  setCookie(cname, '', 0);
}

/***/ }),

/***/ "./resources/js/functions/loginFunction.js":
/*!*************************************************!*\
  !*** ./resources/js/functions/loginFunction.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginUser": () => (/* binding */ loginUser)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookies */ "./resources/js/functions/cookies.js");


function loginUser(email, password) {
  var rememberMe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var loginInfo = {
    email: email,
    password: password,
    remember_me: rememberMe
  };
  _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.post('/api/auth/login', loginInfo).then(function (res) {
    (0,_cookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)('token', res.data.access_token);
    location.href = '/';
  })["catch"](function (err) {
    (0,_cookies__WEBPACK_IMPORTED_MODULE_1__.deleteCookie)('token');
  });
}

/***/ }),

/***/ "./resources/js/views/AllBooks.js":
/*!****************************************!*\
  !*** ./resources/js/views/AllBooks.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _functions_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/cookies */ "./resources/js/functions/cookies.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var AllBooks = function AllBooks(props) {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useHistory)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      books = _useState2[0],
      setBooks = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(24),
      _useState6 = _slicedToArray(_useState5, 2),
      postsPerPage = _useState6[0],
      setPostsPerPage = _useState6[1];

  var postsPerPageOptions = [8, 16, 24, 32, 40, 48];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
      _useState8 = _slicedToArray(_useState7, 2),
      offset = _useState8[0],
      setOffset = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      allBooks = _useState10[0],
      setAllBooks = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState12 = _slicedToArray(_useState11, 2),
      pageCount = _useState12[0],
      setPageCount = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('title'),
      _useState14 = _slicedToArray(_useState13, 2),
      sortType = _useState14[0],
      setSortType = _useState14[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    sortArray(sortType);
    setOffset(1);
  }, [sortType, isLoading]);

  var sortArray = function sortArray(type) {
    var types = {
      title: 'title',
      author: 'author',
      year: 'year'
    };
    var sortProperty = types[type];

    var sorted = _toConsumableArray(allBooks).sort(function (a, b) {
      if (a[sortProperty] < b[sortProperty]) {
        return -1;
      }

      if (a[sortProperty] > b[sortProperty]) {
        return 1;
      }

      return 0;
    });

    setAllBooks(sorted);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getAllBooks();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    pageChangeHandler();
  }, [offset, allBooks]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    pageChangeHandler();
    setOffset(1);
  }, [postsPerPage]);

  var getAllBooks = function getAllBooks() {
    setLoading(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/books').then(function (res) {
      setAllBooks(res.data);
    })["catch"](function (err) {
      console.log(err.response);
    })["finally"](function () {
      setLoading(false);
    });
  };

  var handlePageClick = function handlePageClick(event) {
    var selectedPage = event.selected;
    setOffset(selectedPage + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  var pageChangeHandler = function pageChangeHandler() {
    var upperLimit = offset * postsPerPage;
    var slice = allBooks.slice(upperLimit - postsPerPage, upperLimit);
    var bookData = getPostData(slice);
    setBooks(bookData);
    setPageCount(Math.ceil(allBooks.length / postsPerPage));
  };

  var getPostData = function getPostData(books) {
    if (books && books.length <= 0) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "container mt-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
          children: "All Books"
        })
      });
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "container mt-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "d-flex justify-content-between mt-2 mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
          className: "pr-4",
          children: "All Books"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "row w-50",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "col-sm-12 col-md-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
              className: "mb-0",
              children: "Sort by"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
              onChange: function onChange(e) {
                return setSortType(e.target.value);
              },
              className: "form-select",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "title",
                children: "Title"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "author",
                children: "Author"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "year",
                children: "Year"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "col-sm-12 col-md-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
              className: "mb-0",
              children: "Show per page"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("select", {
              onChange: function onChange(e) {
                return setPostsPerPage(e.target.value);
              },
              className: "form-select",
              value: postsPerPage,
              children: postsPerPageOptions.map(function (value) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                  value: value,
                  children: value
                }, value);
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "row",
        children: books.map(function (value, i) {
          // if (i + 1 > numShow) return null;
          // else {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "col-6 col-sm-4 col-md-3 p-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "card p-2 h-100",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                src: value.image || '/img/book-null-img.png',
                className: "img-fluid rounded",
                alt: "...",
                style: {
                  cursor: 'pointer'
                },
                "data-bs-toggle": "modal",
                "data-bs-target": '#modal-book' + value.id
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "card-body",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
                  className: "small list-unstyled",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    children: value.title
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    className: "fst-italic text-primary",
                    children: value.author
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    className: "fw-lighter",
                    children: value.year
                  }), value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    className: "text-danger",
                    children: "Out of Stock"
                  }) : '']
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "card-footer",
                children: value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  disabled: true,
                  className: "btn btn-outline-primary btn-sm",
                  onClick: function onClick(e) {
                    return history.push('/borrow/' + value.id);
                  },
                  "data-bs-dismiss": "modal",
                  "aria-label": "Close",
                  children: "Borrow"
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                    className: "btn btn-outline-primary btn-sm",
                    onClick: function onClick(e) {
                      return history.push('/borrow/' + value.id);
                    },
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close",
                    children: "Borrow"
                  })
                })
              })]
            }), Modal(value, i)]
          }, i);
        })
      })]
    });
  };

  var Modal = function Modal(value, i) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "modal fade",
      id: 'modal-book' + value.id,
      tabIndex: "-1",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "modal-dialog modal-dialog-centered modal-xl",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
              className: "modal-title",
              id: "exampleModalLabel",
              children: "ABC Library"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              type: "button",
              className: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "modal-body",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "container",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "col-lg-3",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                    src: value.image || 'img/book-null-img.png',
                    className: "img-fluid rounded",
                    alt: "..."
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("table", {
                    className: "table small",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("thead", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                            children: value.title
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {})]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tbody", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          className: "fw-bold",
                          children: "Author"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          children: value.author
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          className: "fw-bold",
                          children: "Publisher"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          children: value.publisher.name
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          className: "fw-bold",
                          children: "Year"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          children: value.year
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          className: "fw-bold",
                          children: "Category"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          children: value.category.name
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          className: "fw-bold",
                          children: "Stock"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          children: value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                            className: "text-danger",
                            children: "Out of Stock"
                          }) : value.stock
                        })]
                      })]
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "col-lg-5",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                    children: "Description"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
                    children: value.description
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {})]
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "modal-footer",
            children: value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
                className: "text-danger me-2",
                children: "* You can't borrow this book"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                disabled: true,
                className: "btn btn-outline-primary btn-sm",
                onClick: function onClick(e) {
                  return history.push('/borrow/' + value.id);
                },
                "data-bs-dismiss": "modal",
                "aria-label": "Close",
                children: "Borrow"
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              className: "btn btn-outline-primary btn-sm",
              onClick: function onClick(e) {
                return history.push('/borrow/' + value.id);
              },
              "data-bs-dismiss": "modal",
              "aria-label": "Close",
              children: "Borrow"
            })
          })]
        })
      })
    }, i);
  };

  if (isLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_4__.Loading, {
        text: "This might take a while..."
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [books, allBooks && allBooks.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "container d-flex justify-content-center p-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((react_paginate__WEBPACK_IMPORTED_MODULE_3___default()), {
        previousLabel: 'Previous',
        nextLabel: 'Next',
        breakLabel: '...',
        breakClassName: 'break-me',
        pageCount: pageCount,
        onPageChange: handlePageClick,
        containerClassName: 'pagination',
        subContainerClassName: 'pages pagination',
        activeClassName: 'active'
      })
    }, sortType + postsPerPage)]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllBooks);

/***/ }),

/***/ "./resources/js/views/Borrow.js":
/*!**************************************!*\
  !*** ./resources/js/views/Borrow.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var _components_MessageAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MessageAlert */ "./resources/js/components/MessageAlert.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Borrow = function Borrow(props) {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory)();

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
      bookId = _useParams.bookId;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      book = _useState2[0],
      setBook = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isProcessing = _useState4[0],
      setProcessing = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      rules = _useState6[0],
      setRules = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    text: '',
    success: 0
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      msg = _useState8[0],
      setMsg = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      disable = _useState10[0],
      setDisable = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getBookFromServer();
  }, [bookId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    _functions_axios__WEBPACK_IMPORTED_MODULE_1__.default.get('/api/library-default-rule').then(function (res) {
      setRules(res.data);
    })["catch"](function (err) {
      console.log(err.response);
    });
  }, []);

  var getBookFromServer = function getBookFromServer() {
    _functions_axios__WEBPACK_IMPORTED_MODULE_1__.default.get('/api/books/' + bookId).then(function (res) {
      setBook(res.data);
    });
  };

  function handleSubmit(event) {
    setProcessing(true);
    event.preventDefault();
    var success = false;
    _functions_axios__WEBPACK_IMPORTED_MODULE_1__.default.post('/api/borrow', {
      book_id: bookId
    }).then(function (res) {
      // getBookFromServer();
      document.getElementById('closeModalBtn').click();
      success = true;
    })["catch"](function (err) {
      console.log(err.response.data.error);
      setMsg({
        text: err.response.data.error,
        success: 0
      });
      setDisable(true);
    })["finally"](function () {
      setProcessing(false);
      if (success) history.push('/user/borrowed-books');
    });
  }

  var Modal = function Modal(book) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "modal fade",
      id: 'myModal' + book.id,
      tabIndex: "-1",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "modal-dialog modal-dialog-centered",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h5", {
              className: "modal-title",
              id: "staticBackdropLabel",
              children: "Confirmation"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              type: "button",
              className: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "modal-body",
            children: [msg && msg.text == '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
              children: ["Are you sure you want to borrow", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                className: "text-primary",
                children: [' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                  children: book.title
                })]
              }), "?"]
            }), msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_2__.default, {
              msg: msg.text,
              success: msg.success
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-bs-dismiss": "modal",
              id: "closeModalBtn",
              children: "Cancel"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              children: isProcessing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "btn p-0",
                style: {
                  width: '90px'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_3__.LoadingButton, {})
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                onClick: handleSubmit,
                className: "btn btn-primary",
                disabled: disable,
                children: "Borrow"
              })
            })]
          })]
        })
      })
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: book && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "container pt-5 mt-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "col-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "row d-flex justify-content-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "col-10 col-md-8 col-lg-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                src: book.image || '/img/book-null-img.png',
                className: "card-img-top",
                alt: "..."
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "col-12 col-lg-8  mt-2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
                className: "table small",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tr", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
                      colSpan: "2",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                        children: book.title
                      })
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tbody", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "fw-bold",
                      children: "Author"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      children: book.author
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "fw-bold",
                      children: "Year"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      children: book.year
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "fw-bold",
                      children: "Publisher"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      children: book.publisher.name
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "fw-bold",
                      children: "Category"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      children: book.category.name
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "fw-bold",
                      children: "Stock"
                    }), book.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "text-danger",
                      children: "Out of Stock"
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      children: book.stock
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "fw-bold",
                      children: "Description"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      children: book.description
                    })]
                  })]
                })]
              })
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "mt-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "card-group shadow p-3 mb-5 border border-2 bg-body rounded",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "card-header",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h5", {
                children: "Rules and Policies"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "card-body",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                  children: 'Each user can borrow ' + (rules ? rules.num_of_books_per_user : 'a limited number of ') + ' books at once.'
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                  children: "Give the book back in a timely manner."
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                  children: "Do not fold down the corners"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                  children: "Don't write in, underline, or highlight ANYTHING."
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                  children: "If you lose or maim it, appropriate fines/actions will be taken."
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                  children: "All rules and policies are subject to change without prior notice to borrowers."
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "card-header",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h5", {
                children: "Overdue Materials"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "card-body",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                  children: 'Borrowers have ' + (rules ? rules.duration_per_borrow + ' day(s) ' : 'limited duration') + 'to borrow each book.'
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                  children: "When any borrowed item becomes overdue, appropriate fees must be paid, and user cannot borrow additional books."
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                  children: ["For items returned past the due date, a bill for its replacement will be issued.", rules && rules.cost_per_day_late_return && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                      className: "text-danger",
                      children: ["$", rules.cost_per_day_late_return, " for 1 day overdue"]
                    })
                  })]
                })]
              })
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "mt-5 mb-5 row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "col-8",
          children: "By clicking Borrow, you agree to all the rules and policies of ABC Library."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "col-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
            className: "text-danger",
            children: "You will PICK UP the book at the library in a timely manner. OVERDUE FEES will still apply after the return date even if you never pick up the book."
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          type: "submit",
          className: "btn btn-outline-primary mt-3",
          "data-bs-toggle": "modal",
          "data-bs-target": '#myModal' + book.id,
          children: "Borrow"
        }), Modal(book)]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Borrow);

/***/ }),

/***/ "./resources/js/views/Categories.js":
/*!******************************************!*\
  !*** ./resources/js/views/Categories.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Categories = function Categories() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
      categoryId = _useParams.categoryId;

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      category = _useState2[0],
      setCategory = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(24),
      _useState4 = _slicedToArray(_useState3, 2),
      postsPerPage = _useState4[0],
      setPostsPerPage = _useState4[1];

  var postsPerPageOptions = [8, 16, 24, 32, 40, 48];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      offset = _useState6[0],
      setOffset = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      allPosts = _useState8[0],
      setAllPosts = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      posts = _useState10[0],
      setPosts = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState12 = _slicedToArray(_useState11, 2),
      pageCount = _useState12[0],
      setPageCount = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isLoading = _useState14[0],
      setLoading = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('title'),
      _useState16 = _slicedToArray(_useState15, 2),
      sortType = _useState16[0],
      setSortType = _useState16[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sortArray(sortType);
    setOffset(1);
  }, [sortType, isLoading]);

  var sortArray = function sortArray(type) {
    var types = {
      title: 'title',
      author: 'author',
      year: 'year'
    };
    var sortProperty = types[type];

    var sorted = _toConsumableArray(allPosts).sort(function (a, b) {
      if (a[sortProperty] < b[sortProperty]) {
        return -1;
      }

      if (a[sortProperty] > b[sortProperty]) {
        return 1;
      }

      return 0;
    });

    setAllPosts(sorted);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLoading(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_1__.default.all([_functions_axios__WEBPACK_IMPORTED_MODULE_1__.default.get('/api/categories/' + categoryId), _functions_axios__WEBPACK_IMPORTED_MODULE_1__.default.get('/api/books/search?by=category_id&value=' + categoryId)]).then(_functions_axios__WEBPACK_IMPORTED_MODULE_1__.default.spread(function (res1, res2) {
      setCategory(res1.data);
      setAllPosts(res2.data);
      setOffset(1);
    }))["finally"](function () {
      setLoading(false);
    });
  }, [categoryId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    pageChangeHandler();
  }, [categoryId, offset, allPosts, category]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    pageChangeHandler();
    setOffset(1);
  }, [postsPerPage]);

  var handlePageClick = function handlePageClick(event) {
    var selectedPage = event.selected;
    setOffset(selectedPage + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  var pageChangeHandler = function pageChangeHandler() {
    var upperLimit = offset * postsPerPage;
    var slice = allPosts.slice(upperLimit - postsPerPage, upperLimit);
    var postData = getPostData(slice);
    setPosts(postData);
    setPageCount(Math.ceil(allPosts.length / postsPerPage));
  };

  var getPostData = function getPostData(data) {
    if (data && data.length <= 0) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "container mt-4",
        children: category && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
            children: category.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            children: "No books in this category at the moment!"
          })]
        })
      });
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "container mt-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "d-flex justify-content-between mt-2 mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
          className: "pr-4",
          children: category && category.name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "row w-50",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "col-sm-12 col-md-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("small", {
              className: "mb-0",
              children: "Sort by"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", {
              onChange: function onChange(e) {
                return setSortType(e.target.value);
              },
              className: "form-select",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                value: "title",
                children: "Title"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                value: "author",
                children: "Author"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                value: "year",
                children: "Year"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "col-sm-12 col-md-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("small", {
              className: "mb-0",
              children: "Show per page"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("select", {
              onChange: function onChange(e) {
                return setPostsPerPage(e.target.value);
              },
              className: "form-select",
              value: postsPerPage,
              children: postsPerPageOptions.map(function (value) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                  value: value,
                  children: value
                }, value);
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "row",
        children: data.map(function (value, i) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "col-6 col-sm-6 col-md-4 col-lg-3 p-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "card p-2 h-100",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                src: value.image || '/img/book-null-img.png',
                className: "img-fluid rounded",
                alt: "...",
                style: {
                  cursor: 'pointer'
                },
                "data-bs-toggle": "modal",
                "data-bs-target": '#modal-book' + value.id
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "card-body",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
                  className: "small list-unstyled",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                    children: value.title
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                    className: "fst-italic text-primary",
                    children: value.author
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                    className: "fw-lighter",
                    children: value.year
                  }), value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                    className: "text-danger",
                    children: "Out of Stock"
                  }) : '']
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "card-footer",
                children: value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                  disabled: true,
                  className: "btn btn-outline-primary btn-sm",
                  onClick: function onClick(e) {
                    return history.push('/borrow/' + value.id);
                  },
                  "data-bs-dismiss": "modal",
                  "aria-label": "Close",
                  children: "Borrow"
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                  className: "btn btn-outline-primary btn-sm",
                  onClick: function onClick(e) {
                    return history.push('/borrow/' + value.id);
                  },
                  "data-bs-dismiss": "modal",
                  "aria-label": "Close",
                  children: "Borrow"
                })
              })]
            }), Modal(value, i)]
          }, i);
        })
      })]
    });
  };

  var Modal = function Modal(value, i) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "modal fade",
      id: 'modal-book' + value.id,
      tabIndex: "-1",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "modal-dialog modal-dialog-centered modal-xl",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h5", {
              className: "modal-title",
              id: "exampleModalLabel",
              children: "ABC Library"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              type: "button",
              className: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "modal-body",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "container",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "col-lg-3",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                    src: value.image || '/img/book-null-img.png',
                    className: "img-fluid rounded",
                    alt: "..."
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
                    className: "table small",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
                            children: value.title
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {})]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tbody", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                          className: "fw-bold",
                          children: "Author"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                          children: value.author
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                          className: "fw-bold",
                          children: "Publisher"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                          children: value.publisher.name
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                          className: "fw-bold",
                          children: "Year"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                          children: value.year
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                          className: "fw-bold",
                          children: "Category"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                          children: value.category.name
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                          className: "fw-bold",
                          children: "Stock"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                          children: value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                            className: "text-danger",
                            children: "Out of Stock"
                          }) : value.stock
                        })]
                      })]
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "col-lg-5",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
                    children: "Description"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("small", {
                    children: value.description
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {})]
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "modal-footer",
            children: value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("small", {
                className: "text-danger me-2",
                children: "* You can't borrow this books"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                disabled: true,
                className: "btn btn-outline-primary btn-sm",
                onClick: function onClick(e) {
                  return history.push('/borrow/' + value.id);
                },
                "data-bs-dismiss": "modal",
                "aria-label": "Close",
                children: "Borrow"
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              className: "btn btn-outline-primary btn-sm",
              onClick: function onClick(e) {
                return history.push('/borrow/' + value.id);
              },
              "data-bs-dismiss": "modal",
              "aria-label": "Close",
              children: "Borrow"
            })
          })]
        })
      })
    }, i);
  };

  if (isLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_3__.Loading, {
        text: "This might take a while..."
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [posts, allPosts && allPosts.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "container d-flex justify-content-center p-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((react_paginate__WEBPACK_IMPORTED_MODULE_2___default()), {
        previousLabel: 'Previous',
        nextLabel: 'Next',
        breakLabel: '...',
        breakClassName: 'break-me',
        pageCount: pageCount,
        onPageChange: handlePageClick,
        containerClassName: 'pagination',
        subContainerClassName: 'pages pagination',
        activeClassName: 'active'
      })
    }, categoryId + sortType)]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Categories);

/***/ }),

/***/ "./resources/js/views/DeleteAccountSuccessful.js":
/*!*******************************************************!*\
  !*** ./resources/js/views/DeleteAccountSuccessful.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MessageAlert */ "./resources/js/components/MessageAlert.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var _components_PrivateRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PrivateRoute */ "./resources/js/components/PrivateRoute.js");
/* harmony import */ var _functions_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../functions/cookies */ "./resources/js/functions/cookies.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












var DeleteAccountSuccessful = function DeleteAccountSuccessful() {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useHistory)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (!(0,_functions_cookies__WEBPACK_IMPORTED_MODULE_7__.getCookie)('delete-account-success')) {
      history.push('/');
    }

    return function () {
      (0,_functions_cookies__WEBPACK_IMPORTED_MODULE_7__.deleteCookie)('delete-account-success');
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "d-flex flex-column justify-content-center align-items-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "d-flex flex-column justify-content-center align-items-center text-center p-3 mt-5 mb-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
        className: "mb-5",
        src: '/img/delete-user.svg',
        style: {
          width: '15rem',
          maxWidth: '100%',
          opacity: '50%'
        },
        alt: "deleted-user"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "display-6",
        children: "Your account has been deleted!"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
        className: "mt-3",
        children: "It's sad to see you go. Keep reading!"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
      className: "btn btn-primary mb-5",
      onClick: function onClick() {
        (0,_functions_cookies__WEBPACK_IMPORTED_MODULE_7__.deleteCookie)('delete-account-success');
        location.href = '/';
      },
      children: "Go back home"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteAccountSuccessful);

/***/ }),

/***/ "./resources/js/views/LatestBooks.js":
/*!*******************************************!*\
  !*** ./resources/js/views/LatestBooks.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _functions_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/cookies */ "./resources/js/functions/cookies.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var LatestBooks = function LatestBooks(props) {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useHistory)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      books = _useState2[0],
      setBooks = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(24),
      _useState6 = _slicedToArray(_useState5, 2),
      postsPerPage = _useState6[0],
      setPostsPerPage = _useState6[1];

  var postsPerPageOptions = [8, 16, 24, 32, 40, 48];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
      _useState8 = _slicedToArray(_useState7, 2),
      offset = _useState8[0],
      setOffset = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      allBooks = _useState10[0],
      setAllBooks = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState12 = _slicedToArray(_useState11, 2),
      pageCount = _useState12[0],
      setPageCount = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      allBooksInDefaultOrder = _useState14[0],
      setAllBooksInDefaultOrder = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('latest'),
      _useState16 = _slicedToArray(_useState15, 2),
      sortType = _useState16[0],
      setSortType = _useState16[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    sortArray(sortType);
    setOffset(1);
  }, [sortType, isLoading]);

  var sortArray = function sortArray(type) {
    if (type === 'latest') {
      setAllBooks(allBooksInDefaultOrder);
      return;
    }

    var types = {
      title: 'title',
      author: 'author',
      year: 'year'
    };
    var sortProperty = types[type];

    var sorted = _toConsumableArray(allBooks).sort(function (a, b) {
      if (a[sortProperty] < b[sortProperty]) {
        return -1;
      }

      if (a[sortProperty] > b[sortProperty]) {
        return 1;
      }

      return 0;
    });

    setAllBooks(sorted);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getAllBooks();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    pageChangeHandler();
  }, [offset, allBooks]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    pageChangeHandler();
    setOffset(1);
  }, [postsPerPage]);

  var getAllBooks = function getAllBooks() {
    setLoading(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/books/latest?number=50').then(function (res) {
      setAllBooks(res.data);
      setAllBooksInDefaultOrder(res.data);
    })["catch"](function (err) {
      console.log(err.response);
    })["finally"](function () {
      setLoading(false);
    });
  };

  var handlePageClick = function handlePageClick(event) {
    var selectedPage = event.selected;
    setOffset(selectedPage + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  var pageChangeHandler = function pageChangeHandler() {
    var upperLimit = offset * postsPerPage;
    var slice = allBooks.slice(upperLimit - postsPerPage, upperLimit);
    var bookData = getPostData(slice);
    setBooks(bookData);
    setPageCount(Math.ceil(allBooks.length / postsPerPage));
  };

  var getPostData = function getPostData(books) {
    if (books && books.length <= 0) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "container mt-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
          children: "Latest Books"
        })
      });
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "container mt-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "d-flex justify-content-between mt-2 mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "pr-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
            children: "Latest Books"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            children: "The top 50 latest books at ABC!"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "row w-50",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "col-sm-12 col-md-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
              className: "mb-0",
              children: "Sort by"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
              onChange: function onChange(e) {
                return setSortType(e.target.value);
              },
              className: "form-select",
              value: sortType,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "latest",
                children: "Latest"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "title",
                children: "Title"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "author",
                children: "Author"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "year",
                children: "Year"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "col-sm-12 col-md-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
              className: "mb-0",
              children: "Show per page"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("select", {
              onChange: function onChange(e) {
                return setPostsPerPage(e.target.value);
              },
              className: "form-select",
              value: postsPerPage,
              children: postsPerPageOptions.map(function (value) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                  value: value,
                  children: value
                }, value);
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "row",
        children: books.map(function (value, i) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "col-6 col-sm-6 col-md-4 col-lg-3 p-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "card p-2 h-100",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                src: value.image || '/img/book-null-img.png',
                className: "img-fluid rounded",
                alt: "...",
                style: {
                  cursor: 'pointer'
                },
                "data-bs-toggle": "modal",
                "data-bs-target": '#modal-book' + value.id
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "card-body",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
                  className: "small list-unstyled",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    children: value.title
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    className: "fst-italic text-primary",
                    children: value.author
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    className: "fw-lighter",
                    children: value.year
                  }), value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    className: "text-danger",
                    children: "Out of Stock"
                  }) : '']
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "card-footer",
                children: value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  disabled: true,
                  className: "btn btn-outline-primary btn-sm",
                  onClick: function onClick(e) {
                    return history.push('/borrow/' + value.id);
                  },
                  "data-bs-dismiss": "modal",
                  "aria-label": "Close",
                  children: "Borrow"
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                    className: "btn btn-outline-primary btn-sm",
                    onClick: function onClick(e) {
                      return history.push('/borrow/' + value.id);
                    },
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close",
                    children: "Borrow"
                  })
                })
              })]
            }), Modal(value, i)]
          }, i);
        })
      })]
    });
  };

  var Modal = function Modal(value, i) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "modal fade",
      id: 'modal-book' + value.id,
      tabIndex: "-1",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "modal-dialog modal-dialog-centered modal-xl",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
              className: "modal-title",
              id: "exampleModalLabel",
              children: "ABC Library"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              type: "button",
              className: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "modal-body",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "container",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "col-lg-3",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                    src: value.image || 'img/book-null-img.png',
                    className: "img-fluid rounded",
                    alt: "..."
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("table", {
                    className: "table small",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("thead", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                            children: value.title
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {})]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tbody", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          className: "fw-bold",
                          children: "Author"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          children: value.author
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          className: "fw-bold",
                          children: "Publisher"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          children: value.publisher.name
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          className: "fw-bold",
                          children: "Year"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          children: value.year
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          className: "fw-bold",
                          children: "Category"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          children: value.category.name
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          className: "fw-bold",
                          children: "Stock"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          children: value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                            className: "text-danger",
                            children: "Out of Stock"
                          }) : value.stock
                        })]
                      })]
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "col-lg-5",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                    children: "Description"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
                    children: value.description
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {})]
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "modal-footer",
            children: value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
                className: "text-danger me-2",
                children: "* You can't borrow this book"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                disabled: true,
                className: "btn btn-outline-primary btn-sm",
                onClick: function onClick(e) {
                  return history.push('/borrow/' + value.id);
                },
                "data-bs-dismiss": "modal",
                "aria-label": "Close",
                children: "Borrow"
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              className: "btn btn-outline-primary btn-sm",
              onClick: function onClick(e) {
                return history.push('/borrow/' + value.id);
              },
              "data-bs-dismiss": "modal",
              "aria-label": "Close",
              children: "Borrow"
            })
          })]
        })
      })
    }, i);
  };

  if (isLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_4__.Loading, {
        text: "This might take a while..."
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [books, allBooks && allBooks.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "container d-flex justify-content-center p-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((react_paginate__WEBPACK_IMPORTED_MODULE_3___default()), {
        previousLabel: 'Previous',
        nextLabel: 'Next',
        breakLabel: '...',
        breakClassName: 'break-me',
        pageCount: pageCount,
        onPageChange: handlePageClick,
        containerClassName: 'pagination',
        subContainerClassName: 'pages pagination',
        activeClassName: 'active'
      })
    }, sortType + postsPerPage)]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LatestBooks);

/***/ }),

/***/ "./resources/js/views/Login.js":
/*!*************************************!*\
  !*** ./resources/js/views/Login.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _functions_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/cookies */ "./resources/js/functions/cookies.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var _functions_loginFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/loginFunction */ "./resources/js/functions/loginFunction.js");
/* harmony import */ var _components_MessageAlert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MessageAlert */ "./resources/js/components/MessageAlert.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var Login = function Login(props) {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useHistory)();
  var _ref = [props.user, props.setUser],
      user = _ref[0],
      setUser = _ref[1];
  var _ref2 = [props.needsToVerifyAcc, props.setNeedsToVerifyAcc],
      needsToVerifyAcc = _ref2[0],
      setNeedsToVerifyAcc = _ref2[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      rememberMe = _useState6[0],
      setRememberMe = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isProcessing = _useState8[0],
      setProcessing = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    text: '',
    success: 0
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      msg = _useState10[0],
      setMsg = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    email: false,
    password: false
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      errors = _useState12[0],
      setErrors = _useState12[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    // if token exist -> login immediately
    if ((0,_functions_cookies__WEBPACK_IMPORTED_MODULE_4__.getCookie)('token')) {
      _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/auth/user').then(function (res) {
        if (history.length) history.goBack();else history.push('/');
      })["catch"](function (err) {
        (0,_functions_cookies__WEBPACK_IMPORTED_MODULE_4__.deleteCookie)('token');
      });
    }
  }, []);

  var hasInputErrors = function hasInputErrors() {
    if (!validator__WEBPACK_IMPORTED_MODULE_10___default().isEmail(email)) {
      setErrors(_objectSpread(_objectSpread({}, errors), {}, {
        email: true
      }));
      return true;
    } else if (password === '') {
      setErrors(_objectSpread(_objectSpread({}, errors), {}, {
        password: true
      }));
      return true;
    }
  };

  var LogInHandler = function LogInHandler(e) {
    e.preventDefault();
    setProcessing(true);
    setMsg({
      text: '',
      success: 0
    });

    if (hasInputErrors()) {
      setProcessing(false);
      return;
    }

    var success = false;
    var isAdmin = false;
    var needVerification = false;
    var loginInfo = {
      email: email,
      password: password,
      remember_me: rememberMe
    };
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.post('/api/auth/login', loginInfo).then(function (res) {
      (0,_functions_cookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)('token', res.data.access_token);
      success = true;
      isAdmin = res.data.is_admin || false;
      setUser(res.data.user);

      if (!res.data.verified) {
        setNeedsToVerifyAcc({
          username: res.data.user.name,
          status: true
        });
        needVerification = true;
      }
    })["catch"](function (err) {
      console.log(err);
      if (err.response.status == 500) var message = 'Internal server error. Try again later.';else var message = err.response.data.message;
      setMsg({
        text: message,
        success: 0
      });
      (0,_functions_cookies__WEBPACK_IMPORTED_MODULE_4__.deleteCookie)('token');
    })["finally"](function () {
      setProcessing(false);

      if (success) {
        if (isAdmin) {
          history.push('/admin');
          return;
        } else {
          if (needVerification) history.push('/verify-email');else if (history.length) history.goBack();else history.push('/');
        }
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    style: {
      padding: '5% 5%'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "row justify-content-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "col-md-12 col-lg-10",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "wrap d-md-flex",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "img",
            style: {
              backgroundImage: "url(\"/img/bg-books.jpg\")",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              minWidth: '30vw'
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "p-4 p-md-5 w-100",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "d-flex",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "w-100",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
                  className: "mb-4",
                  children: "Log In"
                })
              })
            }), msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_7__.default, {
              msg: msg.text,
              success: msg.success
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("form", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "form-group mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                  id: "email",
                  type: "email",
                  className: 'form-control' + (errors.email ? ' is-invalid' : ''),
                  placeholder: "Email",
                  onChange: function onChange(e) {
                    setEmail(e.target.value);
                    setMsg({
                      text: '',
                      success: 0
                    });
                    setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                      email: false
                    }));
                  },
                  required: true
                }), errors.email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("small", {
                  className: "form-text text-danger",
                  children: "Enter a valid email."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "form-group mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                  id: "password",
                  type: "password",
                  className: 'form-control' + (errors.password ? ' is-invalid' : ''),
                  placeholder: "Password",
                  onChange: function onChange(e) {
                    setPassword(e.target.value);
                    setMsg({
                      text: '',
                      success: 0
                    });
                    if (e.target.value === '') setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                      password: true
                    }));else setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                      password: false
                    }));
                  },
                  required: true
                }), errors.password && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("small", {
                  className: "form-text text-danger",
                  children: "This field is required."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "form-group",
                children: isProcessing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.LoadingButton, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                  type: "submit",
                  className: 'form-control btn btn-primary rounded submit px-3' + (errors.email || errors.password ? ' disabled' : ''),
                  onClick: LogInHandler,
                  children: "Log In"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "form-group d-md-flex mt-3 align-items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                  type: "checkbox",
                  id: "checkbox",
                  onChange: function onChange(e) {
                    return setRememberMe(e.target.checked);
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                  htmlFor: "checkbox",
                  className: "text-left",
                  children: "\u2002 Remember Me"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
              className: "mt-5 text-center",
              children: ["Don't have an account? \u2002", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
                to: "/register",
                children: "Register"
              })]
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./resources/js/views/NotFound.js":
/*!****************************************!*\
  !*** ./resources/js/views/NotFound.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _functions_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/cookies */ "./resources/js/functions/cookies.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var NotFound = function NotFound() {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useHistory)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "d-flex flex-column justify-content-center align-items-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "text-center p-5 mt-5",
      style: {
        marginBottom: '10vh'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
        src: '/img/not-found.jpg',
        style: {
          width: '25rem',
          maxWidth: '100%'
        },
        alt: "not-found"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "display-6",
        children: "Not Found"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
      className: "btn btn-primary w-25",
      onClick: function onClick() {
        return history.push('/');
      },
      children: "Go back home"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ }),

/***/ "./resources/js/views/PopularBooks.js":
/*!********************************************!*\
  !*** ./resources/js/views/PopularBooks.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _functions_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/cookies */ "./resources/js/functions/cookies.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var PopularBooks = function PopularBooks(props) {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useHistory)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      books = _useState2[0],
      setBooks = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(24),
      _useState6 = _slicedToArray(_useState5, 2),
      postsPerPage = _useState6[0],
      setPostsPerPage = _useState6[1];

  var postsPerPageOptions = [8, 16, 24, 32, 40, 48];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
      _useState8 = _slicedToArray(_useState7, 2),
      offset = _useState8[0],
      setOffset = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      allBooks = _useState10[0],
      setAllBooks = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState12 = _slicedToArray(_useState11, 2),
      pageCount = _useState12[0],
      setPageCount = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      allBooksInDefaultOrder = _useState14[0],
      setAllBooksInDefaultOrder = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('popular'),
      _useState16 = _slicedToArray(_useState15, 2),
      sortType = _useState16[0],
      setSortType = _useState16[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    sortArray(sortType);
    setOffset(1);
  }, [sortType, isLoading]);

  var sortArray = function sortArray(type) {
    if (type === 'popular') {
      setAllBooks(allBooksInDefaultOrder);
      return;
    }

    var types = {
      title: 'title',
      author: 'author',
      year: 'year'
    };
    var sortProperty = types[type];

    var sorted = _toConsumableArray(allBooks).sort(function (a, b) {
      if (a[sortProperty] < b[sortProperty]) {
        return -1;
      }

      if (a[sortProperty] > b[sortProperty]) {
        return 1;
      }

      return 0;
    });

    setAllBooks(sorted);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getAllBooks();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    pageChangeHandler();
  }, [offset, allBooks]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    pageChangeHandler();
    setOffset(1);
  }, [postsPerPage]);

  var getAllBooks = function getAllBooks() {
    setLoading(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/books/popular?number=50').then(function (res) {
      setAllBooks(res.data);
      setAllBooksInDefaultOrder(res.data);
    })["catch"](function (err) {
      console.log(err.response);
    })["finally"](function () {
      setLoading(false);
    });
  };

  var handlePageClick = function handlePageClick(event) {
    var selectedPage = event.selected;
    setOffset(selectedPage + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  var pageChangeHandler = function pageChangeHandler() {
    var upperLimit = offset * postsPerPage;
    var slice = allBooks.slice(upperLimit - postsPerPage, upperLimit);
    var bookData = getPostData(slice);
    setBooks(bookData);
    setPageCount(Math.ceil(allBooks.length / postsPerPage));
  };

  var getPostData = function getPostData(books) {
    if (books && books.length <= 0) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "container mt-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
          children: "Popular Books"
        })
      });
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "container mt-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "d-flex justify-content-between mt-2 mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "pr-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
            children: "Popular Books"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            children: "The top 50 most popular books at ABC!"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "row w-50",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "col-sm-12 col-md-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
              className: "mb-0",
              children: "Sort by"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
              onChange: function onChange(e) {
                return setSortType(e.target.value);
              },
              className: "form-select",
              value: sortType,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "popular",
                children: "Most Popular"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "title",
                children: "Title"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "author",
                children: "Author"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "year",
                children: "Year"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "col-sm-12 col-md-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
              className: "mb-0",
              children: "Show per page"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("select", {
              onChange: function onChange(e) {
                return setPostsPerPage(e.target.value);
              },
              className: "form-select",
              value: postsPerPage,
              children: postsPerPageOptions.map(function (value) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                  value: value,
                  children: value
                }, value);
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "row",
        children: books.map(function (value, i) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "col-6 col-sm-6 col-md-4 col-lg-3 p-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "card p-2 h-100",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                src: value.image || '/img/book-null-img.png',
                className: "img-fluid rounded",
                alt: "...",
                style: {
                  cursor: 'pointer'
                },
                "data-bs-toggle": "modal",
                "data-bs-target": '#modal-book' + value.id
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "card-body",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
                  className: "small list-unstyled",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    children: value.title
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    className: "fst-italic text-primary",
                    children: value.author
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    className: "fw-lighter",
                    children: value.year
                  }), value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    className: "text-danger",
                    children: "Out of Stock"
                  }) : '']
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "card-footer",
                children: value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  disabled: true,
                  className: "btn btn-outline-primary btn-sm",
                  onClick: function onClick(e) {
                    return history.push('/borrow/' + value.id);
                  },
                  "data-bs-dismiss": "modal",
                  "aria-label": "Close",
                  children: "Borrow"
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                    className: "btn btn-outline-primary btn-sm",
                    onClick: function onClick(e) {
                      return history.push('/borrow/' + value.id);
                    },
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close",
                    children: "Borrow"
                  })
                })
              })]
            }), Modal(value, i)]
          }, i);
        })
      })]
    });
  };

  var Modal = function Modal(value, i) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "modal fade",
      id: 'modal-book' + value.id,
      tabIndex: "-1",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "modal-dialog modal-dialog-centered modal-xl",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
              className: "modal-title",
              id: "exampleModalLabel",
              children: "ABC Library"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              type: "button",
              className: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "modal-body",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "container",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "col-lg-3",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                    src: value.image || 'img/book-null-img.png',
                    className: "img-fluid rounded",
                    alt: "..."
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("table", {
                    className: "table small",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("thead", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                            children: value.title
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {})]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tbody", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          className: "fw-bold",
                          children: "Author"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          children: value.author
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          className: "fw-bold",
                          children: "Publisher"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          children: value.publisher.name
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          className: "fw-bold",
                          children: "Year"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          children: value.year
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          className: "fw-bold",
                          children: "Category"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          children: value.category.name
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          className: "fw-bold",
                          children: "Stock"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          children: value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                            className: "text-danger",
                            children: "Out of Stock"
                          }) : value.stock
                        })]
                      })]
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "col-lg-5",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                    children: "Description"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
                    children: value.description
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {})]
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "modal-footer",
            children: value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
                className: "text-danger me-2",
                children: "* You can't borrow this book"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                disabled: true,
                className: "btn btn-outline-primary btn-sm",
                onClick: function onClick(e) {
                  return history.push('/borrow/' + value.id);
                },
                "data-bs-dismiss": "modal",
                "aria-label": "Close",
                children: "Borrow"
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              className: "btn btn-outline-primary btn-sm",
              onClick: function onClick(e) {
                return history.push('/borrow/' + value.id);
              },
              "data-bs-dismiss": "modal",
              "aria-label": "Close",
              children: "Borrow"
            })
          })]
        })
      })
    }, i);
  };

  if (isLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_4__.Loading, {
        text: "This might take a while..."
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [books, allBooks && allBooks.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "container d-flex justify-content-center p-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((react_paginate__WEBPACK_IMPORTED_MODULE_3___default()), {
        previousLabel: 'Previous',
        nextLabel: 'Next',
        breakLabel: '...',
        breakClassName: 'break-me',
        pageCount: pageCount,
        onPageChange: handlePageClick,
        containerClassName: 'pagination',
        subContainerClassName: 'pages pagination',
        activeClassName: 'active'
      })
    }, sortType + postsPerPage)]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopularBooks);

/***/ }),

/***/ "./resources/js/views/Register.js":
/*!****************************************!*\
  !*** ./resources/js/views/Register.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _functions_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/cookies */ "./resources/js/functions/cookies.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var _components_MessageAlert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MessageAlert */ "./resources/js/components/MessageAlert.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








 // import { loginUser } from '../functions/loginFunction';





var Register = function Register(props) {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useHistory)();
  var _ref = [props.user, props.setUser],
      user = _ref[0],
      setUser = _ref[1];
  var _ref2 = [props.needsToVerifyAcc, props.setNeedsToVerifyAcc],
      needsToVerifyAcc = _ref2[0],
      setNeedsToVerifyAcc = _ref2[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      email = _useState4[0],
      setEmail = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      phone = _useState6[0],
      setPhone = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      password = _useState8[0],
      setPassword = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      confirmPassword = _useState10[0],
      setConfirmPassword = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isProcessing = _useState12[0],
      setProcessing = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    text: '',
    success: 0
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      msg = _useState14[0],
      setMsg = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    name: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword: false
  }),
      _useState16 = _slicedToArray(_useState15, 2),
      errors = _useState16[0],
      setErrors = _useState16[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    // if token exist -> login immediately
    if ((0,_functions_cookies__WEBPACK_IMPORTED_MODULE_4__.getCookie)('token')) {
      _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/auth/user').then(function (res) {
        history.push('/');
      })["catch"](function (err) {
        (0,_functions_cookies__WEBPACK_IMPORTED_MODULE_4__.deleteCookie)('token');
      });
    }
  }, []);

  var hasInputErrors = function hasInputErrors() {
    return errors.name || errors.email || errors.phone || errors.password || errors.confirmPassword || name == '' || email == '' || phone == '' || password == '' || confirmPassword == '';
  };

  var RegisterHandler = function RegisterHandler() {
    setProcessing(true);
    setMsg({
      text: '',
      success: 0
    });

    if (hasInputErrors()) {
      setProcessing(false);
      return;
    }

    var registerInfo = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      password_confirmation: confirmPassword
    };
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.post('/api/auth/register', registerInfo).then(function (res) {
      logInUser(email, password);
    })["catch"](function (err) {
      console.log(err);
      console.log(err.response.data);
      if (err.response.status == 500) var message = 'There was an error creating your account. Try again later!';else var message = err.response.data.error;
      setMsg({
        text: message,
        success: 0
      });
    })["finally"](function () {
      setProcessing(false);
    });
  };

  var logInUser = function logInUser(email, password) {
    var loginInfo = {
      email: email,
      password: password,
      remember_me: true
    };
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.post('/api/auth/login', loginInfo).then(function (res) {
      (0,_functions_cookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)('token', res.data.access_token);
      setUser(res.data.user);
      setNeedsToVerifyAcc({
        username: res.data.user.name,
        status: true
      });
      history.push('/verify-email');
    })["catch"](function (err) {
      setMsg({
        text: 'Your account was created, but there was a problem logging you in. Try again later.',
        success: 0
      });
      (0,_functions_cookies__WEBPACK_IMPORTED_MODULE_4__.deleteCookie)('token');
      history.push('/login');
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    style: {
      padding: '5% 5%'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "row justify-content-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "col-md-12 col-lg-10",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "wrap d-md-flex",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "img",
            style: {
              backgroundImage: "url(\"/img/bg-books.jpg\")",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              minWidth: '30vw'
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "p-4 p-md-5 w-100",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "d-flex",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "w-100",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h2", {
                  className: "mb-4",
                  children: "Register"
                })
              })
            }), msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_6__.default, {
              msg: msg.text,
              success: msg.success
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "form-group mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
                  id: "name",
                  type: "text",
                  className: 'form-control' + (errors.name ? ' is-invalid' : ''),
                  placeholder: "Name",
                  onChange: function onChange(e) {
                    setName(e.target.value);
                    setMsg({
                      text: '',
                      success: 0
                    });
                    if (e.target.value === '') setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                      name: true
                    }));else setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                      name: false
                    }));
                  },
                  required: true
                }), errors.name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("small", {
                  className: "form-text text-danger",
                  children: "This field is required."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "form-group mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
                  id: "email",
                  type: "email",
                  className: 'form-control' + (errors.email ? ' is-invalid' : ''),
                  placeholder: "Email",
                  onChange: function onChange(e) {
                    setEmail(e.target.value);
                    setMsg({
                      text: '',
                      success: 0
                    });
                    if (!validator__WEBPACK_IMPORTED_MODULE_9___default().isEmail(e.target.value) && e.target.value != '') setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                      email: true
                    }));else setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                      email: false
                    }));
                  },
                  required: true
                }), errors.email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("small", {
                  className: "form-text text-danger",
                  children: "Enter a valid email."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "form-group mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
                  id: "phone",
                  type: "text",
                  className: 'form-control' + (errors.phone ? ' is-invalid' : ''),
                  placeholder: "Phone",
                  onChange: function onChange(e) {
                    setPhone(e.target.value);
                    setMsg({
                      text: '',
                      success: 0
                    });
                    if (e.target.value === '') setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                      phone: true
                    }));else setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                      phone: false
                    }));
                  },
                  required: true
                }), errors.phone && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("small", {
                  className: "form-text text-danger",
                  children: "This field is required."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "form-group mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
                  id: "password",
                  type: "password",
                  className: 'form-control' + (errors.password ? ' is-invalid' : ''),
                  placeholder: "Password",
                  onChange: function onChange(e) {
                    setPassword(e.target.value);
                    setMsg({
                      text: '',
                      success: 0
                    });
                    if (e.target.value === '') setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                      password: true
                    }));else setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                      password: false
                    }));
                  },
                  required: true
                }), errors.password && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("small", {
                  className: "form-text text-danger",
                  children: "This field is required."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "form-group mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
                  id: "confirm-password",
                  type: "password",
                  className: 'form-control' + (errors.confirmPassword ? ' is-invalid' : ''),
                  placeholder: "Confirm password",
                  onChange: function onChange(e) {
                    setConfirmPassword(e.target.value);
                    setMsg({
                      text: '',
                      success: 0
                    });
                    if (e.target.value != password) setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                      confirmPassword: true
                    }));else setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                      confirmPassword: false
                    }));
                  },
                  required: true
                }), errors.confirmPassword && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("small", {
                  className: "form-text text-danger",
                  children: "Password does not match."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "form-group",
                children: isProcessing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.LoadingButton, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                  type: "button",
                  className: 'form-control btn btn-primary rounded submit px-3' + (hasInputErrors() ? ' disabled' : ''),
                  onClick: RegisterHandler,
                  children: "Create account"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
              className: "mt-5 text-center",
              children: ["Already have an account? \u2002", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
                to: "/login",
                children: "Log in"
              })]
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

/***/ }),

/***/ "./resources/js/views/Unauthorized.js":
/*!********************************************!*\
  !*** ./resources/js/views/Unauthorized.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _functions_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/cookies */ "./resources/js/functions/cookies.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var Unauthorized = function Unauthorized() {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useHistory)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "d-flex flex-column justify-content-center align-items-center",
      style: {
        marginBottom: '10vh'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "text-center p-5 mt-5",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "display-6",
          children: "Unauthorized!"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        className: "btn btn-primary w-25",
        onClick: function onClick() {
          return history.push('/');
        },
        children: "Go back home"
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Unauthorized);

/***/ }),

/***/ "./resources/js/views/VerifyEmail.js":
/*!*******************************************!*\
  !*** ./resources/js/views/VerifyEmail.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MessageAlert */ "./resources/js/components/MessageAlert.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var _functions_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/cookies */ "./resources/js/functions/cookies.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var VerifiyEmail = function VerifiyEmail(props) {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useHistory)();
  var _ref = [props.user, props.setUser],
      user = _ref[0],
      setUser = _ref[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    text: '',
    success: 1
  }),
      _useState2 = _slicedToArray(_useState, 2),
      msg = _useState2[0],
      setMsg = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isSending = _useState4[0],
      setSending = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoading = _useState6[0],
      setLoading = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if ((0,_functions_cookies__WEBPACK_IMPORTED_MODULE_6__.getCookie)('token')) {
      setLoading(true);
      _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/auth/user').then(function (res) {
        // already verified
        setUser(res.data);
        history.push('/verify-email-success');
      })["catch"](function (err) {
        if (!(err.response.status == 403 || err.response.data.message === 'Your email address is not verified.')) {
          (0,_functions_cookies__WEBPACK_IMPORTED_MODULE_6__.deleteCookie)('token');
          setUser(null);
          history.push('/');
        } else {
          setLoading(false);
        }
      });
    } else {
      setUser(null);
      history.push('/');
    }
  }, []);

  var resendEmailHandler = function resendEmailHandler() {
    setSending(true);
    setMsg({
      text: '',
      success: 0
    });
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/email/resend').then(function (res) {
      setMsg({
        text: res.data.message,
        success: 1
      });
    })["catch"](function (err) {
      console.log(err.response);
      setMsg({
        text: 'There was a problem: ' + err.response,
        success: 0
      });
    })["finally"](function () {
      setSending(false);
    });
  };

  if (isLoading) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.Loading, {});
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "d-flex flex-column justify-content-center align-items-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "d-flex flex-column justify-content-center align-items-center text-center p-3 mt-5 mb-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
        className: "mb-5",
        src: '/img/email.svg',
        style: {
          width: '13rem',
          maxWidth: '100%',
          opacity: '50%'
        },
        alt: "email"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "display-6",
        children: "Verifiy your email address to continue."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: "mt-3",
        children: "We need to prove that the email you used is real. It won't take more than 5 seconds. Just click on the link sent to the email you registered with."
      })]
    }), msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
      msg: msg.text,
      success: msg.success
    }), isSending ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
      className: "btn p-0 w-25 mb-5",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.LoadingButton, {})
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
      className: "btn btn-primary mb-5",
      onClick: resendEmailHandler,
      children: "Resend email verification"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerifiyEmail);

/***/ }),

/***/ "./resources/js/views/VerifyEmailSuccessful.js":
/*!*****************************************************!*\
  !*** ./resources/js/views/VerifyEmailSuccessful.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MessageAlert */ "./resources/js/components/MessageAlert.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var _components_PrivateRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PrivateRoute */ "./resources/js/components/PrivateRoute.js");
/* harmony import */ var _functions_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../functions/cookies */ "./resources/js/functions/cookies.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












var VerifyEmailSuccessful = function VerifyEmailSuccessful() {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useHistory)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_6__.default, {
    component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "d-flex flex-column justify-content-center align-items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "d-flex flex-column justify-content-center align-items-center text-center p-3 mt-5 mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
          className: "mb-5",
          src: '/img/verify-user.svg',
          style: {
            width: '15rem',
            maxWidth: '100%',
            opacity: '50%'
          },
          alt: "verify-user"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "display-6",
          children: "Your account is verified!"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
          className: "mt-3",
          children: "Start browsing our library and find your next favorite book!"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
        className: "btn btn-primary mb-5",
        onClick: function onClick() {
          return history.push('/');
        },
        children: "Start browsing"
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerifyEmailSuccessful);

/***/ }),

/***/ "./resources/js/views/admin/AdminLayout.js":
/*!*************************************************!*\
  !*** ./resources/js/views/admin/AdminLayout.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _functions_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../functions/cookies */ "./resources/js/functions/cookies.js");
/* harmony import */ var _imports_sb_admin_2_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../imports/sb-admin-2.min.css */ "./resources/js/views/imports/sb-admin-2.min.css");
/* harmony import */ var _imports_sb_admin_2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../imports/sb-admin-2.js */ "./resources/js/views/imports/sb-admin-2.js");
/* harmony import */ var _imports_sb_admin_2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_imports_sb_admin_2_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _imports_sb_admin_2_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../imports/sb-admin-2.min.js */ "./resources/js/views/imports/sb-admin-2.min.js");
/* harmony import */ var _imports_sb_admin_2_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_imports_sb_admin_2_min_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _admin_content_AdminDashboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin_content/AdminDashboard */ "./resources/js/views/admin/admin_content/AdminDashboard.js");
/* harmony import */ var _admin_content_Categories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin_content/Categories */ "./resources/js/views/admin/admin_content/Categories.js");
/* harmony import */ var _admin_content_Books__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin_content/Books */ "./resources/js/views/admin/admin_content/Books.js");
/* harmony import */ var _admin_content_Users__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin_content/Users */ "./resources/js/views/admin/admin_content/Users.js");
/* harmony import */ var _admin_content_Rules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin_content/Rules */ "./resources/js/views/admin/admin_content/Rules.js");
/* harmony import */ var _admin_content_Publishers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin_content/Publishers */ "./resources/js/views/admin/admin_content/Publishers.js");
/* harmony import */ var _admin_content_Borrowers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin_content/Borrowers */ "./resources/js/views/admin/admin_content/Borrowers.js");
/* harmony import */ var _admin_content_Logs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin_content/Logs */ "./resources/js/views/admin/admin_content/Logs.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






















var AdminLayout = function AdminLayout() {
  var _useRouteMatch = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useRouteMatch)(),
      path = _useRouteMatch.path,
      url = _useRouteMatch.url;

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useHistory)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showsSideBar = _useState2[0],
      setShowsSideBar = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      adminInfo = _useState4[0],
      setAdminInfo = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/auth/user').then(function (res) {
      setAdminInfo(res.data);
    })["catch"](function (err) {});
  }, []);

  var logoutHandler = function logoutHandler() {
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/auth/logout').then(function (res) {
      (0,_functions_cookies__WEBPACK_IMPORTED_MODULE_4__.deleteCookie)('token');
      history.push('/login');
    })["catch"](function (err) {
      console.log(err);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
    id: "page-top",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      id: "wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("ul", {
        className: 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ' + (showsSideBar ? '' : ' toggled'),
        id: "accordionSidebar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("hr", {
          className: "sidebar-divider"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, {
            to: "".concat(url),
            className: "nav-link",
            children: "Admin Dashboard"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("hr", {
          className: "sidebar-divider"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("button", {
          className: "btn btn-primary m-2",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#adminResource",
          "aria-expanded": "false",
          "aria-controls": "adminResource",
          children: ["Resource ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_19__.FaChevronDown, {})]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          className: "collapse bg-primary text-center",
          id: "adminResource",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, {
              to: "".concat(url, "/categories"),
              className: "nav-link",
              children: "Categories"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, {
              to: "".concat(url, "/publishers"),
              className: "nav-link",
              children: "Publishers"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, {
              to: "".concat(url, "/books"),
              className: "nav-link",
              children: "Books"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("button", {
          className: "btn btn-primary m-2",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#adminManagement",
          "aria-expanded": "false",
          "aria-controls": "adminManagement",
          children: ["Manage", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_19__.FaChevronDown, {})]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          className: "collapse bg-primary text-center",
          id: "adminManagement",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, {
              to: "".concat(url, "/users"),
              className: "nav-link",
              children: "Users"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, {
              to: "".concat(url, "/borrowers"),
              className: "nav-link",
              children: "Borrowers"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, {
              to: "".concat(url, "/logs"),
              className: "nav-link",
              children: "Logs"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, {
              to: "".concat(url, "/rules"),
              className: "nav-link",
              children: "Rules"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        id: "content-wrapper",
        className: "d-flex flex-column pt-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          id: "content",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
            className: "container-fluid",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("button", {
              id: "sidebarToggleTop",
              className: "btn btn-link d-md-none rounded mr-3",
              onClick: function onClick() {
                return setShowsSideBar(!showsSideBar);
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("img", {
                style: {
                  maxHeight: '5vw',
                  opacity: '50%'
                },
                src: "/img/icons8-menu.svg"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Switch, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
                path: "".concat(path, "/categories"),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_admin_content_Categories__WEBPACK_IMPORTED_MODULE_9__.default, {})
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
                path: "".concat(path, "/publishers"),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_admin_content_Publishers__WEBPACK_IMPORTED_MODULE_13__.default, {})
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
                path: "".concat(path, "/books"),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_admin_content_Books__WEBPACK_IMPORTED_MODULE_10__.default, {})
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
                path: "".concat(path, "/users"),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_admin_content_Users__WEBPACK_IMPORTED_MODULE_11__.default, {})
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
                path: "".concat(path, "/borrowers"),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_admin_content_Borrowers__WEBPACK_IMPORTED_MODULE_14__.default, {})
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
                path: "".concat(path, "/rules"),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_admin_content_Rules__WEBPACK_IMPORTED_MODULE_12__.default, {})
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
                path: "".concat(path, "/logs"),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_admin_content_Logs__WEBPACK_IMPORTED_MODULE_15__.default, {})
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
                exact: true,
                path: path,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_admin_content_AdminDashboard__WEBPACK_IMPORTED_MODULE_8__.default, {})
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("footer", {
          className: "sticky-footer bg-none mt-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: "container my-auto",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
              className: "copyright text-center my-auto",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
                children: "Copyright \xA9 ABC Library 2021"
              })
            })
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminLayout);

/***/ }),

/***/ "./resources/js/views/admin/admin_content/AdminDashboard.js":
/*!******************************************************************!*\
  !*** ./resources/js/views/admin/admin_content/AdminDashboard.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../components/MessageAlert */ "./resources/js/components/MessageAlert.js");
/* harmony import */ var _functions_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../functions/cookies */ "./resources/js/functions/cookies.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var AdminDashboard = function AdminDashboard() {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useHistory)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      books = _useState2[0],
      setBooks = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      lowStockBooks = _useState6[0],
      setLowStockBooks = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      lateUsers = _useState8[0],
      setLateUsers = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      totalInfo = _useState10[0],
      setTotalInfo = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState12 = _slicedToArray(_useState11, 2),
      booksDueToday = _useState12[0],
      setBooksDueToday = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    text: '',
    success: 0
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      msg = _useState14[0],
      setMsg = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState16 = _slicedToArray(_useState15, 2),
      acceptingBookUser = _useState16[0],
      setAcceptingBookUser = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState18 = _slicedToArray(_useState17, 2),
      restockingBook = _useState18[0],
      setRestockingBook = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      _useState20 = _slicedToArray(_useState19, 2),
      addStockAmount = _useState20[0],
      setAddStockAmount = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState22 = _slicedToArray(_useState21, 2),
      addStockAmountErr = _useState22[0],
      setAddStockAmountErr = _useState22[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    getInfoFromServer();
  }, []);

  var refresh = function refresh() {
    getInfoFromServer();
  };

  var getInfoFromServer = function getInfoFromServer() {
    var reload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (reload) setLoading(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.all([_functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/borrowed-books'), _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/low-stock-books'), _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/late-users'), _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/total-info'), _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/books-due-today')]).then(_functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.spread(function (res1, res2, res3, res4, res5) {
      setBooks(res1.data);
      var stock = res2.data;
      stock.sort(function (a, b) {
        if (a.stock > b.stock) return 1;else if (a.stock < b.stock) return -1;
        return 0;
      });
      setLowStockBooks(res2.data);
      setLateUsers(res3.data);
      setTotalInfo(res4.data);
      setBooksDueToday(res5.data);
    }))["finally"](function () {
      if (reload) setLoading(false);
    });
  };

  var returnBookHandler = function returnBookHandler() {
    if (!acceptingBookUser || !acceptingBookUser.user || !acceptingBookUser.book) return;
    var late = acceptingBookUser.mode == 'late';
    var lost_late = acceptingBookUser.mode == 'lost-late';
    var lost_due = acceptingBookUser.mode == 'lost-due';
    var url = lost_late || lost_due ? '/api/books/lost' : '/api/books/return';
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.post(url, {
      user_id: acceptingBookUser.user.id,
      book_id: acceptingBookUser.book.id
    }).then(function (res) {
      setAcceptingBookUser({
        user: null,
        book: null
      });
      setMsg({
        text: 'The return was successful!',
        success: 1
      });
      getInfoFromServer(false);
    })["catch"](function (err) {
      console.log(err);
      setMsg({
        text: 'There was a problem: ' + err.response,
        success: 0
      });
    });
  };

  var addStockHandler = function addStockHandler() {
    if (addStockAmountErr) return;
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.post('/api/add-stock-book', {
      book_id: restockingBook.id,
      stock: addStockAmount
    }).then(function (res) {
      setAddStockAmount('');
      setRestockingBook(null);
      setMsg({
        text: 'Stock added successfully!',
        success: 1
      });
      _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/low-stock-books').then(function (res1) {
        setLowStockBooks(res1.data);
      })["catch"](function (err1) {
        console.log(err);
      });
    })["catch"](function (err) {
      console.log(err);
      setMsg({
        text: 'There was a problem: ' + err.response,
        success: 0
      });
    });
  };

  if (isLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      id: "page-top",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
        className: "col-lg-4 mb-4",
        children: "Admin Dashboard"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_6__.Loading, {
        height: "1vh",
        size: "2rem"
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    id: "page-top",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
      className: "col-lg-4 mb-4",
      style: {
        cursor: 'pointer'
      },
      onClick: refresh,
      children: "Admin Dashboard"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "row mt-5 mb-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "col-xl-2 col-md-4 col-sm-6 p-1",
        style: {
          cursor: 'pointer'
        },
        onClick: function onClick() {
          return history.push('/admin/books');
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "card bg-primary text-white mb-4 h-100",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "card-body",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                children: "Total Books"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1", {
                className: "",
                children: totalInfo && totalInfo.total_books || '--'
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "col-xl-2 col-md-4 col-sm-6 p-1",
        style: {
          cursor: 'pointer'
        },
        onClick: function onClick() {
          return history.push('/admin/categories');
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "card bg-primary text-white mb-4 h-100",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "card-body",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                children: "Total Categories"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1", {
                className: "",
                children: totalInfo && totalInfo.total_categories || '--'
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "col-xl-2 col-md-4 col-sm-6 p-1",
        style: {
          cursor: 'pointer'
        },
        onClick: function onClick() {
          return history.push('/admin/publishers');
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "card bg-primary text-white mb-4 h-100",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "card-body",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                children: "Total Publishers"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1", {
                className: "",
                children: totalInfo && totalInfo.total_publishers || '--'
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "col-xl-2 col-md-4 col-sm-6 p-1",
        style: {
          cursor: 'pointer'
        },
        onClick: function onClick() {
          return history.push('/admin/users');
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "card bg-primary text-white mb-4 h-100",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "card-body",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                children: "Total Users"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1", {
                className: "",
                children: totalInfo && totalInfo.total_users || '--'
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "col-xl-2 col-md-4 col-sm-6 p-1",
        style: {
          cursor: 'pointer'
        },
        onClick: function onClick() {
          return history.push('/admin/borrowers');
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "card bg-primary text-white mb-4 h-100",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "card-body",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                children: "Total Borrowers"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1", {
                className: "",
                children: totalInfo && totalInfo.total_borrowers || '--'
              })]
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "col-md-6 mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h6", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("b", {
            className: "text-primary",
            children: ["Books due today: ", booksDueToday && booksDueToday.length || 0]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
            className: "table",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("thead", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  scope: "col",
                  children: "ID"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  scope: "col",
                  children: "Title"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  scope: "col",
                  children: "Users"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tbody", {
              children: booksDueToday && booksDueToday.length > 0 ? booksDueToday.map(function (book, i) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                    scope: "row",
                    children: book.id
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                    children: book.title
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("td", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
                      className: "text-primary",
                      role: "button",
                      "data-bs-toggle": "modal",
                      "data-bs-target": '#modalDue' + book.id,
                      id: 'modalDueOpenBtn-' + book.id,
                      children: book.users.length
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                      className: "modal fade",
                      id: 'modalDue' + book.id,
                      tabIndex: "-1",
                      "aria-labelledby": '#modalLabelDue' + book.id,
                      "aria-hidden": "true",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                        className: "modal-dialog modal-lg modal-dialog-scrollable",
                        role: "document",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                          className: "modal-content",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                            className: "modal-header",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h5", {
                              className: "modal-title",
                              id: '#modalLabelDue' + book.id,
                              children: book.title
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                              type: "button",
                              className: "btn-close",
                              "data-bs-dismiss": "modal",
                              "aria-label": "Close",
                              id: 'dueBooksModalCloseBtn-' + book.id
                            })]
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                            className: "modal-body",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h6", {
                              children: "Users to return this book today: "
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
                              className: "table",
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("thead", {
                                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                                    scope: "col",
                                    children: "ID"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                                    scope: "col",
                                    children: "Name"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                                    scope: "col",
                                    children: "Borrow Date"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                                    scope: "col",
                                    children: "Action"
                                  })]
                                })
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tbody", {
                                children: book.users.map(function (user, i) {
                                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                                      scope: "row",
                                      children: user.id
                                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                                      children: user.name
                                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                                      children: user.borrow_date
                                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("td", {
                                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                                        type: "button",
                                        className: "btn btn-outline-danger mr-2 mb-2",
                                        "data-bs-toggle": "modal",
                                        "data-bs-target": "#confirmReturnModal",
                                        onClick: function onClick() {
                                          document.getElementById('dueBooksModalCloseBtn-' + book.id).click();
                                          setAcceptingBookUser({
                                            book: book,
                                            user: user,
                                            mode: 'lost-due'
                                          });
                                          setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                                            text: ''
                                          }));
                                        },
                                        children: "Lost"
                                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                                        type: "button",
                                        className: "btn btn-outline-success mb-2",
                                        "data-bs-toggle": "modal",
                                        "data-bs-target": "#confirmReturnModal",
                                        onClick: function onClick() {
                                          document.getElementById('dueBooksModalCloseBtn-' + book.id).click();
                                          setAcceptingBookUser({
                                            book: book,
                                            user: user,
                                            mode: 'due'
                                          });
                                          setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                                            text: ''
                                          }));
                                        },
                                        children: "Accept return"
                                      })]
                                    })]
                                  }, i);
                                })
                              })]
                            })]
                          })]
                        })
                      })
                    })]
                  })]
                }, i);
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tr", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  children: "No data"
                })
              })
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "col-md-6 mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h6", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("b", {
            className: "text-primary",
            children: ["Late users: ", lateUsers ? lateUsers.length : 0]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
            className: "table",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("thead", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  scope: "col",
                  children: "ID"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  scope: "col",
                  children: "Name"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  scope: "col",
                  children: "Books"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tbody", {
              children: lateUsers && lateUsers.length > 0 ? lateUsers.map(function (user, i) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                    scope: "row",
                    children: user.id
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                    children: user.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("td", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
                      className: "text-primary",
                      role: "button",
                      "data-bs-toggle": "modal",
                      "data-bs-target": '#modalLate' + user.id,
                      id: 'modalLateOpenBtn-' + user.id,
                      children: user.late_books.length
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                      className: "modal fade",
                      id: 'modalLate' + user.id,
                      tabIndex: "-1",
                      "aria-labelledby": '#modalLabelLate' + user.id,
                      "aria-hidden": "true",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                        className: "modal-dialog modal-lg modal-dialog-scrollable",
                        role: "document",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                          className: "modal-content",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                            className: "modal-header",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h5", {
                              className: "modal-title",
                              id: '#modalLabelLate' + user.id,
                              children: user.name
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                              type: "button",
                              className: "btn-close",
                              "data-bs-dismiss": "modal",
                              "aria-label": "Close",
                              id: 'lateBooksModalCloseBtn-' + user.id
                            })]
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                            className: "modal-body",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h6", {
                              children: ["Books that this user is late to return:", ' ']
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
                              className: "table",
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("thead", {
                                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                                    scope: "col",
                                    children: "ID"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                                    scope: "col",
                                    children: "Title"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                                    scope: "col",
                                    children: "Borrow date"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                                    scope: "col",
                                    children: "Return date"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                                    scope: "col",
                                    children: "Days late"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                                    scope: "col",
                                    children: "Cost"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                                    scope: "col",
                                    children: "Action"
                                  })]
                                })
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tbody", {
                                children: user.late_books.map(function (book, i) {
                                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                                      scope: "row",
                                      children: book.id
                                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                                      children: book.title
                                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                                      children: book.borrow_date
                                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                                      className: "text-danger",
                                      children: book.return_date
                                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                                      className: "text-danger",
                                      children: book.days_late
                                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("td", {
                                      className: "text-danger",
                                      children: ["$", book.cost]
                                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("td", {
                                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                                        type: "button",
                                        className: "btn btn-outline-danger mr-2 mb-2",
                                        "data-bs-toggle": "modal",
                                        "data-bs-target": "#confirmReturnModal",
                                        onClick: function onClick() {
                                          document.getElementById('lateBooksModalCloseBtn-' + user.id).click();
                                          setAcceptingBookUser({
                                            book: book,
                                            user: user,
                                            mode: 'lost-late'
                                          });
                                          setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                                            text: ''
                                          }));
                                        },
                                        children: "Lost"
                                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                                        type: "button",
                                        className: "btn btn-outline-success mb-2",
                                        "data-bs-toggle": "modal",
                                        "data-bs-target": "#confirmReturnModal",
                                        onClick: function onClick() {
                                          document.getElementById('lateBooksModalCloseBtn-' + user.id).click();
                                          setAcceptingBookUser({
                                            book: book,
                                            user: user,
                                            mode: 'late'
                                          });
                                          setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                                            text: ''
                                          }));
                                        },
                                        children: "Accept return"
                                      })]
                                    })]
                                  }, i);
                                })
                              })]
                            })]
                          })]
                        })
                      })
                    })]
                  })]
                }, i);
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tr", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  children: "No data"
                })
              })
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "col-md-6 mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h6", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("b", {
            className: "text-primary",
            children: ["Currently borrowed books: ", books && books.length || 0]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
            className: "table",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("thead", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  scope: "col",
                  children: "ID"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  scope: "col",
                  children: "Title"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  scope: "col",
                  children: "Stock"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  scope: "col",
                  children: "Users"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tbody", {
              children: books && books.length > 0 ? books.map(function (book, i) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                    scope: "row",
                    children: book.id
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                    children: book.title
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                    children: book.stock
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("td", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
                      className: "text-primary",
                      role: "button",
                      "data-bs-toggle": "modal",
                      "data-bs-target": '#modal' + book.id,
                      children: book.users.length
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                      className: "modal fade",
                      id: 'modal' + book.id,
                      tabIndex: "-1",
                      "aria-labelledby": '#modalLabel' + book.id,
                      "aria-hidden": "true",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                        className: "modal-dialog",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                          className: "modal-content",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                            className: "modal-header",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h5", {
                              className: "modal-title",
                              id: '#modalLabel' + book.id,
                              children: book.title
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                              type: "button",
                              className: "btn-close",
                              "data-bs-dismiss": "modal",
                              "aria-label": "Close"
                            })]
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                            className: "modal-body",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h6", {
                              children: "Users that borrowed this book: "
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
                              className: "table",
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("thead", {
                                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                                    scope: "col",
                                    children: "ID"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                                    scope: "col",
                                    children: "Name"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                                    scope: "col",
                                    children: "Borrow Date"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                                    scope: "col",
                                    children: "Return Date"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                                    scope: "col",
                                    children: "Days late"
                                  })]
                                })
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tbody", {
                                children: book.users.map(function (user, i) {
                                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                                      scope: "row",
                                      children: user.id
                                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                                      children: user.name
                                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                                      children: user.borrow_date
                                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                                      className: user.expired ? 'text-danger' : '',
                                      children: user.return_date
                                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                                      className: user.days_past_expired > 0 ? 'text-danger' : '',
                                      children: user.days_past_expired || 'n/a'
                                    })]
                                  }, i);
                                })
                              })]
                            })]
                          })]
                        })
                      })
                    })]
                  })]
                }, i);
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tr", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  children: "No data"
                })
              })
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "col-md-6 mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h6", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("b", {
            className: "text-primary",
            children: ["Low stock: ", lowStockBooks ? lowStockBooks.length : 0]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
            className: "table",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("thead", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  scope: "col",
                  children: "ID"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  scope: "col",
                  children: "Title"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  scope: "col",
                  children: "Stock"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  scope: "col",
                  children: "Action"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tbody", {
              children: lowStockBooks && lowStockBooks.length > 0 ? lowStockBooks.map(function (book, i) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                    scope: "row",
                    children: book.id
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                    children: book.title
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                    className: book.stock <= 0 ? 'text-danger' : '',
                    children: book.stock
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                      type: "button",
                      className: "btn btn-primary",
                      "data-bs-toggle": "modal",
                      "data-bs-target": "#addStockModal",
                      onClick: function onClick() {
                        setRestockingBook(book);
                        setMsg({
                          text: '',
                          success: 1
                        });
                        setAddStockAmount('');
                        setAddStockAmountErr(false);
                      },
                      children: "Add"
                    })
                  })]
                }, i);
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tr", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                  children: "No data"
                })
              })
            })]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "modal fade",
      id: "confirmReturnModal",
      tabIndex: "-1",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "modal-dialog",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h5", {
              className: "modal-title",
              id: "exampleModalLabel",
              children: "Confirmation"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
              type: "button",
              className: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "modal-body",
            children: [msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
              msg: msg.text,
              success: msg.success
            }), acceptingBookUser && acceptingBookUser.book && acceptingBookUser.user && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                children: acceptingBookUser.mode == 'lost-due' || acceptingBookUser.mode == 'lost-late' ? 'Are you sure you want to accept the loss of this book from this user?' : 'Are you sure you want to accept the return of this book from this user?'
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
                className: "table",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("thead", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                      scope: "col",
                      children: "User"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                      scope: "col",
                      children: "Book"
                    }), acceptingBookUser.mode == 'late' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                      children: "Cost"
                    }), (acceptingBookUser.mode == 'lost-due' || acceptingBookUser.mode == 'lost-late') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                      children: "Note"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tbody", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      children: acceptingBookUser.user.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      children: acceptingBookUser.book.title
                    }), acceptingBookUser.mode == 'late' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("th", {
                      className: "text-danger",
                      children: ["$", acceptingBookUser.book.cost]
                    }), (acceptingBookUser.mode == 'lost-due' || acceptingBookUser.mode == 'lost-late') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                      className: "text-danger",
                      children: "Fee dued to be calculated."
                    })]
                  })
                })]
              }), (acceptingBookUser.mode == 'late' && acceptingBookUser.book.cost > 0 || acceptingBookUser.mode == 'lost-due' || acceptingBookUser.mode == 'lost-late') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                className: "text-danger",
                children: "*Make sure all fees are paid before acepting."
              })]
            })]
          }), acceptingBookUser && acceptingBookUser.book && acceptingBookUser.user && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-bs-dismiss": "modal",
              onClick: function onClick() {
                if (acceptingBookUser.mode == 'late' || acceptingBookUser.mode == 'lost-late') {
                  document.getElementById('modalLateOpenBtn-' + acceptingBookUser.user.id).click();
                } else if (acceptingBookUser.mode == 'due' || acceptingBookUser.mode == 'lost-due') {
                  document.getElementById('modalDueOpenBtn-' + acceptingBookUser.book.id).click();
                }

                setAcceptingBookUser({
                  user: null,
                  book: null
                });
              },
              children: "Cancel"
            }), acceptingBookUser.mode == 'lost-due' || acceptingBookUser.mode == 'lost-late' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
              type: "button",
              className: "btn btn-danger",
              onClick: returnBookHandler,
              children: "Accept Loss"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
              type: "button",
              className: "btn btn-success",
              onClick: returnBookHandler,
              children: "Accept Now"
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "modal fade",
      id: "addStockModal",
      tabIndex: "-1",
      "aria-labelledby": "addStockModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "modal-dialog",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h5", {
              className: "modal-title",
              id: "addStockModalLabel",
              children: "Add Stock"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
              type: "button",
              className: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "modal-body",
            children: [msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
              msg: msg.text,
              success: msg.success
            }), restockingBook && restockingBook.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                children: ["Add stock for: ", restockingBook.title]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "d-flex",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
                  type: "text",
                  className: 'form-control mr-2' + (addStockAmountErr ? ' is-invalid' : ''),
                  value: addStockAmount,
                  onChange: function onChange(e) {
                    if (e.target.value == '' || e.target.value < 0 || isNaN(e.target.value)) {
                      setAddStockAmountErr(true);
                    } else {
                      setAddStockAmountErr(false);
                    }

                    setAddStockAmount(e.target.value);
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "btn-group me-2",
                  role: "group",
                  "aria-label": "First group",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                    type: "button",
                    className: 'btn btn-outline-secondary' + (addStockAmountErr ? ' disabled' : ''),
                    onClick: function onClick() {
                      if (!addStockAmountErr && addStockAmount != 0) setAddStockAmount(+addStockAmount - 1);
                    },
                    children: "-"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                    type: "button",
                    className: 'btn btn-outline-secondary' + (addStockAmountErr ? ' disabled' : ''),
                    onClick: function onClick() {
                      if (!addStockAmountErr) setAddStockAmount(+addStockAmount + 1);
                    },
                    children: "+"
                  })]
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-bs-dismiss": "modal",
              children: "Close"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
              type: "button",
              className: 'btn btn-primary' + (addStockAmountErr || addStockAmount == '' ? ' disabled' : ''),
              onClick: addStockHandler,
              children: "Add"
            })]
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminDashboard);

/***/ }),

/***/ "./resources/js/views/admin/admin_content/Books.js":
/*!*********************************************************!*\
  !*** ./resources/js/views/admin/admin_content/Books.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../components/MessageAlert */ "./resources/js/components/MessageAlert.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Books = function Books() {
  var UPLOAD_API = 'https://api.cloudinary.com/v1_1/bormin/image/upload';
  var UPLOAD_PRESET = 'abc_admin_uploads';

  var _useRouteMatch = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useRouteMatch)(),
      path = _useRouteMatch.path,
      url = _useRouteMatch.url;

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useHistory)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    text: '',
    success: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      msg = _useState2[0],
      setMsg = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      categories = _useState6[0],
      setCategories = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      publishers = _useState8[0],
      setPublishers = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      books = _useState10[0],
      setBooks = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState12 = _slicedToArray(_useState11, 2),
      selectedBook = _useState12[0],
      setSelectedBook = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState14 = _slicedToArray(_useState13, 2),
      fileName = _useState14[0],
      setFileName = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      isProcessing = _useState16[0],
      setProcessing = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState18 = _slicedToArray(_useState17, 2),
      searchValue = _useState18[0],
      setSearchValue = _useState18[1];

  var NUM_INCREMENTS = 10;

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(NUM_INCREMENTS),
      _useState20 = _slicedToArray(_useState19, 2),
      numShow = _useState20[0],
      setNumShow = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    title: '',
    author: '',
    description: '',
    publisher_id: '',
    year: '',
    image: '',
    category_id: '',
    stock: ''
  }),
      _useState22 = _slicedToArray(_useState21, 2),
      newBook = _useState22[0],
      setNewBook = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    title: false,
    author: false,
    description: false,
    publisher_id: false,
    year: false,
    image: false,
    category_id: false,
    stock: false
  }),
      _useState24 = _slicedToArray(_useState23, 2),
      addErrors = _useState24[0],
      setAddErrors = _useState24[1];

  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    title: false,
    author: false,
    description: false,
    publisher_id: false,
    year: false,
    image: false,
    category_id: false,
    stock: false
  }),
      _useState26 = _slicedToArray(_useState25, 2),
      editErrors = _useState26[0],
      setEditErrors = _useState26[1];

  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState28 = _slicedToArray(_useState27, 2),
      sortType = _useState28[0],
      setSortType = _useState28[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (books && sortType) sortArray(sortType);
  }, [sortType]);

  var sortArray = function sortArray(type) {
    var types = {
      id: 'id',
      title: 'title',
      author: 'author',
      year: 'year',
      stock: 'stock'
    };
    var sortProperty = types[type];

    var sorted = _toConsumableArray(books).sort(function (a, b) {
      var _a = isNaN(a[sortProperty]) ? a[sortProperty].toLowerCase() : a[sortProperty];

      var _b = isNaN(b[sortProperty]) ? b[sortProperty].toLowerCase() : b[sortProperty];

      if (_a < _b) return -1;
      if (_a > _b) return 1;
      return 0;
    });

    setBooks(sorted);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    getCategoriesFromServer();
    getPublishersFromServer();
    getBooksFromServer();
  }, []);

  var refresh = function refresh() {
    getCategoriesFromServer();
    getPublishersFromServer();
    getBooksFromServer();
    setSortType('');
  };

  var clearNewBook = function clearNewBook() {
    setNewBook({
      title: '',
      author: '',
      description: '',
      publisher_id: '',
      year: '',
      image: '',
      category_id: '',
      stock: ''
    });
    setFileName('');
  };

  var getCategoriesFromServer = function getCategoriesFromServer() {
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/categories').then(function (res) {
      var data = res.data;

      var sorted = _toConsumableArray(data).sort(function (a, b) {
        var _a = a.name.toLowerCase();

        var _b = b.name.toLowerCase();

        if (_a > _b) return 1;else if (_a < _b) return -1;
        return 0;
      });

      setCategories(sorted);
    });
  };

  var getPublishersFromServer = function getPublishersFromServer() {
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/publishers').then(function (res) {
      var data = res.data;

      var sorted = _toConsumableArray(data).sort(function (a, b) {
        var _a = a.name.toLowerCase();

        var _b = b.name.toLowerCase();

        if (_a > _b) return 1;else if (_a < _b) return -1;
        return 0;
      });

      setPublishers(sorted);
    });
  };

  var getBooksFromServer = function getBooksFromServer() {
    setLoading(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/books').then(function (res) {
      setBooks(res.data);
    })["finally"](function () {
      setLoading(false);
    });
  };

  var imageUploadAddBookHandler = function imageUploadAddBookHandler(e) {
    setFileName(e.target.files[0].name);
    setProcessing(true);
    var formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', UPLOAD_PRESET);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.post(UPLOAD_API, formData, {
      headers: {
        Authorization: 'NONE'
      }
    }).then(function (res) {
      setNewBook(_objectSpread(_objectSpread({}, newBook), {}, {
        image: res.data.secure_url
      }));
    })["catch"](function (err) {
      console.log(err);
    })["finally"](function () {
      setProcessing(false);
    });
  };

  var imageUploadEditBookHandler = function imageUploadEditBookHandler(e) {
    setFileName(e.target.files[0].name);
    setProcessing(true);
    var formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', UPLOAD_PRESET);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.post(UPLOAD_API, formData, {
      headers: {
        Authorization: 'NONE'
      }
    }).then(function (res) {
      setSelectedBook(_objectSpread(_objectSpread({}, selectedBook), {}, {
        image: res.data.secure_url
      }));
    })["catch"](function (err) {
      console.log(err);
    })["finally"](function () {
      setProcessing(false);
    });
  };

  var hasInputErrors = function hasInputErrors() {
    if (newBook.title === '' || newBook.author === '' || newBook.description === '' || newBook.publisher_id === '' || newBook.year === '' || newBook.category_id === '' || newBook.stock === '') return true;
    return false;
  };

  var editHasInputErrors = function editHasInputErrors() {
    if (selectedBook.title == '' || selectedBook.author === '' || selectedBook.description === '' || selectedBook.publisher_id === '' || selectedBook.year === '' || selectedBook.category_id === '' || selectedBook.stock === '' || selectedBook.stock < 0) return true;
    return false;
  };

  var selectBookHandler = function selectBookHandler(index) {
    setSelectedBook(books[index]);
  };

  var saveAddBookHandler = function saveAddBookHandler() {
    setMsg({
      text: '',
      success: 1
    });

    if (hasInputErrors()) {
      setMsg({
        text: 'Fill in all fields.',
        success: 0
      });
      return;
    }

    setProcessing(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.post('/api/books', newBook).then(function (res) {
      getBooksFromServer();
      setMsg({
        text: newBook.title + ' was added successfully.',
        success: 1
      });
      clearNewBook();
    })["catch"](function (err) {
      console.log(err.response);
      setMsg({
        text: 'There was a problem adding the new book. Make sure inputs are correct.',
        success: 0
      });
    })["finally"](function () {
      setProcessing(false);
    });
  };

  var saveEditBookHandler = function saveEditBookHandler() {
    setMsg({
      text: '',
      success: 1
    });

    if (editHasInputErrors()) {
      setMsg({
        text: 'Fill in all fields.',
        success: 0
      });
      return;
    }

    setProcessing(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.patch('/api/books/' + selectedBook.id, selectedBook).then(function (res) {
      getBooksFromServer();
      setMsg({
        text: selectedBook.title + ' was edited successfully.',
        success: 1
      });
    })["catch"](function (err) {
      console.log(err.response);
      setMsg({
        text: 'There was a problem saving the changes.',
        success: 0
      });
    })["finally"](function () {
      setProcessing(false);
    });
  };

  var saveDeleteBookHandler = function saveDeleteBookHandler() {
    if (!selectedBook || msg && msg.text != '') {
      // an action was done -> do not send again
      return;
    }

    setProcessing(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.delete('/api/books/' + selectedBook.id).then(function (res) {
      getBooksFromServer();
      setMsg({
        text: selectedBook.title + ' was deleted.',
        success: 1
      });
      setSelectedBook(null);
    })["catch"](function (err) {
      console.log(err);
      setMsg({
        text: 'The deletion encounted a problem.',
        success: 0
      });
    })["finally"](function () {
      setProcessing(false);
    });
  };

  var searchMatches = function searchMatches(item, value) {
    return item.id == value || item.title.toLowerCase().includes(value.toLowerCase()) || item.author.toLowerCase().includes(value.toLowerCase()) || item.publisher.name.toLowerCase().includes(value.toLowerCase()) || item.year == value || item.category.name.toLowerCase().includes(value.toLowerCase());
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "row mt-2 mb-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h4", {
        className: "col-lg-4",
        style: {
          cursor: 'pointer'
        },
        onClick: refresh,
        children: ["All books", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          className: "btn btn-link",
          "data-bs-toggle": "modal",
          "data-bs-target": "#addBookModal",
          onClick: function onClick(e) {
            setMsg({
              text: '',
              success: 1
            });
          },
          children: "+"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
        type: "text",
        className: "col-lg-8 form-control border-0 small",
        placeholder: "Search for id, title, author, publisher, year, category...",
        "aria-label": "Search",
        "aria-describedby": "basic-addon2",
        onChange: function onChange(e) {
          setSearchValue(e.target.value);
          if (e.target.value === '') setNumShow(NUM_INCREMENTS);else if (books && books.length > 0) setNumShow(books.length);
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "overflow-auto",
      children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.Loading, {
        height: "1vh",
        size: "2rem"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
        className: "table",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              style: {
                cursor: 'pointer'
              },
              className: 'dropdown-toggle ' + (sortType === 'id' ? 'text-primary' : ''),
              onClick: function onClick() {
                return setSortType('id');
              },
              children: "ID"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              style: {
                cursor: 'pointer'
              },
              className: 'dropdown-toggle ' + (sortType === 'title' ? 'text-primary' : ''),
              onClick: function onClick() {
                return setSortType('title');
              },
              children: "Title"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              style: {
                cursor: 'pointer'
              },
              className: 'dropdown-toggle ' + (sortType === 'author' ? 'text-primary' : ''),
              onClick: function onClick() {
                return setSortType('author');
              },
              children: "Author"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Publisher"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              style: {
                cursor: 'pointer'
              },
              className: 'dropdown-toggle ' + (sortType === 'year' ? 'text-primary' : ''),
              onClick: function onClick() {
                return setSortType('year');
              },
              children: "Year"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Category"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              style: {
                cursor: 'pointer'
              },
              className: 'dropdown-toggle ' + (sortType === 'stock' ? 'text-primary' : ''),
              onClick: function onClick() {
                return setSortType('stock');
              },
              children: "Stock"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Actions"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
          children: books && books.map(function (item, i) {
            if (searchValue && (searchValue == '' || !searchMatches(item, searchValue)) || i + 1 > numShow) return null;else {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                  scope: "row",
                  children: item.id
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: item.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: item.author
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: item.publisher.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: item.year
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: item.category.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: item.stock
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("td", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                    className: "btn btn-outline-primary mr-2 mb-1",
                    "data-bs-toggle": "modal",
                    "data-bs-target": "#editBookModal",
                    onClick: function onClick(e) {
                      selectBookHandler(i);
                      setEditErrors({
                        title: false,
                        author: false,
                        description: false,
                        publisher_id: false,
                        year: false,
                        image: false,
                        category_id: false,
                        stock: false
                      });
                      setFileName('');
                      setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                        text: ''
                      }));
                    },
                    children: "Edit"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                    className: "btn btn-outline-danger mb-1",
                    "data-bs-toggle": "modal",
                    "data-bs-target": "#deleteBookModal",
                    onClick: function onClick(e) {
                      selectBookHandler(i);
                    },
                    children: "Delete"
                  })]
                })]
              }, i);
            }
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "modal fade",
      id: "addBookModal",
      role: "dialog",
      tabIndex: "-1",
      "data-bs-backdrop": "static",
      "data-bs-keyboard": "false",
      "aria-labelledby": "addModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "modal-dialog modal-lg modal-dialog-scrollable",
        role: "document",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-header align-items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              className: "modal-title",
              id: "addModalLabel",
              children: "Add Book"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              children: [isProcessing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "btn p-0",
                style: {
                  width: '90px'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.LoadingButton, {})
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                type: "button",
                className: 'btn btn-primary' + (addErrors.title || addErrors.author || addErrors.description || addErrors.publisher_id || addErrors.year || addErrors.image || addErrors.category_id || addErrors.stock ? ' disabled' : ''),
                style: {
                  width: '90px'
                },
                onClick: saveAddBookHandler,
                children: "Add"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                type: "button",
                className: "ml-2 btn btn-secondary",
                "data-bs-dismiss": "modal",
                onClick: function onClick(e) {
                  setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                    text: ''
                  }));
                  clearNewBook();
                },
                children: "Close"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
              children: "Title"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
              className: 'form-control mb-2' + (addErrors.title ? ' is-invalid' : ''),
              placeholder: "Title",
              value: newBook.title,
              onChange: function onChange(e) {
                if (e.target.value == '') {
                  setAddErrors(_objectSpread(_objectSpread({}, addErrors), {}, {
                    title: true
                  }));
                } else {
                  setAddErrors(_objectSpread(_objectSpread({}, addErrors), {}, {
                    title: false
                  }));
                }

                setNewBook(_objectSpread(_objectSpread({}, newBook), {}, {
                  title: e.target.value
                }));
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
              children: "Author"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
              className: 'form-control mb-2' + (addErrors.author ? ' is-invalid' : ''),
              placeholder: "Author",
              value: newBook.author,
              onChange: function onChange(e) {
                if (e.target.value == '') {
                  setAddErrors(_objectSpread(_objectSpread({}, addErrors), {}, {
                    author: true
                  }));
                } else {
                  setAddErrors(_objectSpread(_objectSpread({}, addErrors), {}, {
                    author: false
                  }));
                }

                setNewBook(_objectSpread(_objectSpread({}, newBook), {}, {
                  author: e.target.value
                }));
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
              children: "Description"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("textarea", {
              className: 'form-control mb-2' + (addErrors.description ? ' is-invalid' : ''),
              placeholder: "Description...",
              value: newBook.description,
              onChange: function onChange(e) {
                if (e.target.value == '') {
                  setAddErrors(_objectSpread(_objectSpread({}, addErrors), {}, {
                    description: true
                  }));
                } else {
                  setAddErrors(_objectSpread(_objectSpread({}, addErrors), {}, {
                    description: false
                  }));
                }

                setNewBook(_objectSpread(_objectSpread({}, newBook), {}, {
                  description: e.target.value
                }));
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
              children: "Publisher"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("select", {
              className: 'form-control mb-2' + (addErrors.publisher_id ? ' is-invalid' : ''),
              id: "publisherSelector",
              onChange: function onChange(e) {
                if (e.target.value == '') {
                  setAddErrors(_objectSpread(_objectSpread({}, addErrors), {}, {
                    publisher_id: true
                  }));
                } else {
                  setAddErrors(_objectSpread(_objectSpread({}, addErrors), {}, {
                    publisher_id: false
                  }));
                }

                setNewBook(_objectSpread(_objectSpread({}, newBook), {}, {
                  publisher_id: e.target.value
                }));
              },
              value: newBook.publisher_id,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                defaultValue: true,
                value: "",
                children: "Publisher..."
              }), publishers && publishers.map(function (item, index) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                  value: item.id,
                  children: item.name
                }, index);
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
              children: "Year"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
              className: 'form-control mb-2' + (addErrors.year ? ' is-invalid' : ''),
              placeholder: "Year",
              value: newBook.year,
              onChange: function onChange(e) {
                if (e.target.value == '' || isNaN(e.target.value)) {
                  setAddErrors(_objectSpread(_objectSpread({}, addErrors), {}, {
                    year: true
                  }));
                } else {
                  setAddErrors(_objectSpread(_objectSpread({}, addErrors), {}, {
                    year: false
                  }));
                }

                setNewBook(_objectSpread(_objectSpread({}, newBook), {}, {
                  year: e.target.value
                }));
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
              children: "Category"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("select", {
              className: 'form-control mb-2' + (addErrors.category_id ? ' is-invalid' : ''),
              id: "categorySelector",
              onChange: function onChange(e) {
                if (e.target.value == '') {
                  setAddErrors(_objectSpread(_objectSpread({}, addErrors), {}, {
                    category_id: true
                  }));
                } else {
                  setAddErrors(_objectSpread(_objectSpread({}, addErrors), {}, {
                    category_id: false
                  }));
                }

                setNewBook(_objectSpread(_objectSpread({}, newBook), {}, {
                  category_id: e.target.value
                }));
              },
              value: newBook.category_id,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                defaultValue: true,
                value: "",
                children: "Category..."
              }), categories && categories.map(function (item, index) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                  value: item.id,
                  children: item.name
                }, index);
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
              children: "Number available in stock"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
              className: 'form-control mb-2' + (addErrors.stock ? ' is-invalid' : ''),
              placeholder: "Stock",
              value: newBook.stock,
              onChange: function onChange(e) {
                if (e.target.value == '' || isNaN(e.target.value) || e.target.value < 0) {
                  setAddErrors(_objectSpread(_objectSpread({}, addErrors), {}, {
                    stock: true
                  }));
                } else {
                  setAddErrors(_objectSpread(_objectSpread({}, addErrors), {}, {
                    stock: false
                  }));
                }

                setNewBook(_objectSpread(_objectSpread({}, newBook), {}, {
                  stock: e.target.value
                }));
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
              children: "Image"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "input-group mb-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "custom-file",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "file",
                  className: "custom-file-input",
                  id: "inputGroupFile01",
                  "aria-describedby": "inputGroupFileAddon01",
                  style: {
                    cursor: 'pointer'
                  },
                  onChange: imageUploadAddBookHandler
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
                  className: "custom-file-label",
                  htmlFor: "inputGroupFile01",
                  children: fileName || 'Choose (optional)'
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "d-flex justify-content-center",
              children: newBook && newBook.image ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: newBook.image,
                style: {
                  maxWidth: '75%'
                }
              }) : null
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "modal-footer",
            children: msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
              msg: msg.text,
              success: msg.success
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "modal fade",
      id: "editBookModal",
      role: "dialog",
      tabIndex: "-1",
      "data-bs-backdrop": "static",
      "data-bs-keyboard": "false",
      "aria-labelledby": "editModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "modal-dialog modal-lg modal-dialog-scrollable",
        role: "document",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              className: "modal-title",
              id: "editModalLabel",
              children: "Edit Book"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              children: [isProcessing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "btn p-0",
                style: {
                  width: '90px'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.LoadingButton, {})
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                type: "button",
                className: 'btn btn-primary' + (editErrors.title || editErrors.author || editErrors.description || editErrors.publisher_id || editErrors.year || editErrors.image || editErrors.category_id || editErrors.stock ? ' disabled' : ''),
                style: {
                  width: '90px'
                },
                onClick: saveEditBookHandler,
                children: "Save"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                type: "button",
                className: "ml-2 btn btn-secondary",
                "data-bs-dismiss": "modal",
                onClick: function onClick(e) {
                  setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                    text: ''
                  }));
                  setSelectedBook(null);
                },
                children: "Close"
              })]
            })]
          }), selectedBook && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
              children: "Title"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
              className: 'form-control mb-2' + (editErrors.title ? ' is-invalid' : ''),
              placeholder: "Title",
              value: selectedBook.title,
              onChange: function onChange(e) {
                if (e.target.value == '') {
                  setEditErrors(_objectSpread(_objectSpread({}, editErrors), {}, {
                    title: true
                  }));
                } else {
                  setEditErrors(_objectSpread(_objectSpread({}, editErrors), {}, {
                    title: false
                  }));
                }

                setSelectedBook(_objectSpread(_objectSpread({}, selectedBook), {}, {
                  title: e.target.value
                }));
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
              children: "Author"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
              className: 'form-control mb-2' + (editErrors.author ? ' is-invalid' : ''),
              placeholder: "Author",
              value: selectedBook.author,
              onChange: function onChange(e) {
                if (e.target.value == '') {
                  setEditErrors(_objectSpread(_objectSpread({}, editErrors), {}, {
                    author: true
                  }));
                } else {
                  setEditErrors(_objectSpread(_objectSpread({}, editErrors), {}, {
                    author: false
                  }));
                }

                setSelectedBook(_objectSpread(_objectSpread({}, selectedBook), {}, {
                  author: e.target.value
                }));
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
              children: "Description"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("textarea", {
              className: 'form-control mb-2' + (editErrors.description ? ' is-invalid' : ''),
              placeholder: "Description...",
              value: selectedBook.description,
              onChange: function onChange(e) {
                if (e.target.value == '') {
                  setEditErrors(_objectSpread(_objectSpread({}, editErrors), {}, {
                    description: true
                  }));
                } else {
                  setEditErrors(_objectSpread(_objectSpread({}, editErrors), {}, {
                    description: false
                  }));
                }

                setSelectedBook(_objectSpread(_objectSpread({}, selectedBook), {}, {
                  description: e.target.value
                }));
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
              children: "Publisher"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("select", {
              className: 'form-control mb-2' + (editErrors.publisher_id ? ' is-invalid' : ''),
              id: "publisherSelector",
              onChange: function onChange(e) {
                if (e.target.value == '') {
                  setEditErrors(_objectSpread(_objectSpread({}, editErrors), {}, {
                    publisher_id: true
                  }));
                } else {
                  setEditErrors(_objectSpread(_objectSpread({}, editErrors), {}, {
                    publisher_id: false
                  }));
                }

                setSelectedBook(_objectSpread(_objectSpread({}, selectedBook), {}, {
                  publisher_id: e.target.value
                }));
              },
              value: selectedBook.publisher_id,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                defaultValue: true,
                value: "",
                children: "Publisher..."
              }), publishers && publishers.map(function (item, index) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                  value: item.id,
                  children: item.name
                }, index);
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
              children: "Year"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
              className: 'form-control mb-2' + (editErrors.year ? ' is-invalid' : ''),
              placeholder: "Year",
              value: selectedBook.year,
              onChange: function onChange(e) {
                if (e.target.value == '' || isNaN(e.target.value)) {
                  setEditErrors(_objectSpread(_objectSpread({}, editErrors), {}, {
                    year: true
                  }));
                } else {
                  setEditErrors(_objectSpread(_objectSpread({}, editErrors), {}, {
                    year: false
                  }));
                }

                setSelectedBook(_objectSpread(_objectSpread({}, selectedBook), {}, {
                  year: e.target.value
                }));
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
              children: "Category"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("select", {
              className: 'form-control mb-2' + (editErrors.category_id ? ' is-invalid' : ''),
              id: "categorySelector",
              onChange: function onChange(e) {
                if (e.target.value == '') {
                  setEditErrors(_objectSpread(_objectSpread({}, editErrors), {}, {
                    category_id: true
                  }));
                } else {
                  setEditErrors(_objectSpread(_objectSpread({}, editErrors), {}, {
                    category_id: false
                  }));
                }

                setSelectedBook(_objectSpread(_objectSpread({}, selectedBook), {}, {
                  category_id: e.target.value
                }));
              },
              value: selectedBook.category_id,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                defaultValue: true,
                value: "",
                children: "Category..."
              }), categories && categories.map(function (item, index) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                  value: item.id,
                  children: item.name
                }, index);
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
              children: "Number available in stock"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "d-flex",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                className: 'form-control mb-2 mr-2' + (editErrors.stock ? ' is-invalid' : ''),
                placeholder: "Stock",
                value: selectedBook.stock,
                onChange: function onChange(e) {
                  if (e.target.value == '' || isNaN(e.target.value) || e.target.value < 0) {
                    setEditErrors(_objectSpread(_objectSpread({}, editErrors), {}, {
                      stock: true
                    }));
                  } else {
                    setEditErrors(_objectSpread(_objectSpread({}, editErrors), {}, {
                      stock: false
                    }));
                  }

                  setSelectedBook(_objectSpread(_objectSpread({}, selectedBook), {}, {
                    stock: e.target.value
                  }));
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "btn-group me-2 mb-2",
                role: "group",
                "aria-label": "First group",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                  type: "button",
                  className: 'btn btn-outline-secondary' + (editErrors.stock ? ' disabled' : ''),
                  onClick: function onClick() {
                    if (!editErrors.stock && selectedBook.stock != 0) setSelectedBook(_objectSpread(_objectSpread({}, selectedBook), {}, {
                      stock: +selectedBook.stock - 1
                    }));
                  },
                  children: "-"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                  type: "button",
                  className: 'btn btn-outline-secondary' + (editErrors.stock ? ' disabled' : ''),
                  onClick: function onClick() {
                    if (!editErrors.stock) setSelectedBook(_objectSpread(_objectSpread({}, selectedBook), {}, {
                      stock: +selectedBook.stock + 1
                    }));
                  },
                  children: "+"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
              children: "Image (changes will overide the current image)"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "input-group mb-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "custom-file",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "file",
                  className: "custom-file-input",
                  id: "inputGroupFile01",
                  "aria-describedby": "inputGroupFileAddon01",
                  style: {
                    cursor: 'pointer'
                  },
                  onChange: imageUploadEditBookHandler
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
                  className: "custom-file-label",
                  htmlFor: "inputGroupFile01",
                  children: selectedBook.image || fileName || 'Choose (optional)'
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "d-flex justify-content-center",
              children: selectedBook && selectedBook.image ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: selectedBook.image,
                style: {
                  maxWidth: '75%'
                }
              }) : null
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "modal-footer",
            children: msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
              msg: msg.text,
              success: msg.success
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "modal fade",
      id: "deleteBookModal",
      tabIndex: "-1",
      "data-bs-backdrop": "static",
      "data-bs-keyboard": "false",
      "aria-labelledby": "deleteModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "modal-dialog",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "modal-header",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              className: "modal-title",
              id: "deleteModalLabel",
              children: "Delete Book"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-body",
            children: [msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
              msg: msg.text,
              success: msg.success
            }), !selectedBook || msg && msg.text != '' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                children: ["Are you sure you want to delete", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("b", {
                  children: [" ", selectedBook.title, " "]
                }), " ?"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "d-flex justify-content-center",
                children: selectedBook && selectedBook.image ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                  src: selectedBook.image,
                  style: {
                    maxWidth: '75%'
                  }
                }) : null
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-bs-dismiss": "modal",
              onClick: function onClick(e) {
                setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                  text: ''
                }));
                setSelectedBook(null);
              },
              children: "Close"
            }), isProcessing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "btn p-0",
              style: {
                width: '90px'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.LoadingButton, {
                color: "danger"
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: 'btn btn-danger' + (msg && msg.text == '' ? '' : ' disabled'),
              onClick: saveDeleteBookHandler,
              children: "Delete now"
            })]
          })]
        })
      })
    }), books && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
      className: "d-flex justify-content-center text-muted mt-3 mb-3",
      children: 'Showing ' + (numShow < books.length ? numShow : books.length) + ' of ' + books.length
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "d-inline d-flex justify-content-center",
      children: [books && books.length >= numShow && numShow > NUM_INCREMENTS && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        className: "btn btn-link",
        onClick: function onClick() {
          if (numShow < NUM_INCREMENTS * 2) setNumShow(NUM_INCREMENTS);else setNumShow(numShow - NUM_INCREMENTS);
        },
        children: "Show less"
      }), books && books.length > numShow && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        className: "btn btn-link",
        onClick: function onClick() {
          if (numShow + NUM_INCREMENTS > books.length) setNumShow(books.length);else setNumShow(numShow + NUM_INCREMENTS);
        },
        children: "Show more"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Books);

/***/ }),

/***/ "./resources/js/views/admin/admin_content/Borrowers.js":
/*!*************************************************************!*\
  !*** ./resources/js/views/admin/admin_content/Borrowers.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../components/MessageAlert */ "./resources/js/components/MessageAlert.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Users = function Users() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      users = _useState4[0],
      setUsers = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedUser = _useState6[0],
      setSelectedUser = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    user: null,
    book: null,
    mode: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      returnInfo = _useState8[0],
      setReturnInfo = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isReturning = _useState10[0],
      setReturning = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    text: '',
    success: 0
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      msg = _useState12[0],
      setMsg = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState14 = _slicedToArray(_useState13, 2),
      searchValue = _useState14[0],
      setSearchValue = _useState14[1];

  var NUM_INCREMENTS = 10;

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(NUM_INCREMENTS),
      _useState16 = _slicedToArray(_useState15, 2),
      numShow = _useState16[0],
      setNumShow = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState18 = _slicedToArray(_useState17, 2),
      sortType = _useState18[0],
      setSortType = _useState18[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (users && sortType) sortArray(sortType);
  }, [sortType]);

  var sortArray = function sortArray(type) {
    var types = {
      id: 'id',
      name: 'name',
      email: 'email'
    };
    var sortProperty = types[type];

    var sorted = _toConsumableArray(users).sort(function (a, b) {
      var _a = isNaN(a[sortProperty]) ? a[sortProperty].toLowerCase() : a[sortProperty];

      var _b = isNaN(b[sortProperty]) ? b[sortProperty].toLowerCase() : b[sortProperty];

      if (_a < _b) return -1;
      if (_a > _b) return 1;
      return 0;
    });

    setUsers(sorted);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    getUsersFromServer();
  }, []);

  var refresh = function refresh() {
    getUsersFromServer();
    setSortType('');
  };

  var getUsersFromServer = function getUsersFromServer() {
    setLoading(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/all-borrowers').then(function (res) {
      setUsers(res.data);
    })["catch"](function (err) {
      console.log(err);
    })["finally"](function () {
      setLoading(false);
    });
  };

  var returnBookHandler = function returnBookHandler() {
    if (!returnInfo || !returnInfo.user || !returnInfo.book || !returnInfo.mode) return;
    var url = returnInfo.mode == 'return' ? '/api/books/return' : '/api/books/lost';
    setReturning(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.post(url, {
      user_id: returnInfo.user.id,
      book_id: returnInfo.book.id
    }).then(function (res) {
      setMsg({
        text: 'The return was successful!',
        success: 1
      });
      setReturnInfo({
        user: null,
        book: null,
        mode: null
      });
    })["catch"](function (err) {
      console.log(err.response);
      setMsg({
        text: 'There was a problem: ' + err.response,
        success: 0
      });
    })["finally"](function () {
      setReturning(false);
      getUsersFromServer();
    });
  };

  var searchMatches = function searchMatches(user, value) {
    return user.id == value || user.name.toLowerCase().includes(value.toLowerCase()) || user.email.toLowerCase().includes(value.toLowerCase()) || user.phone.toLowerCase().includes(value.toLowerCase());
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "row mt-2 mb-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
        className: "col-lg-4",
        style: {
          cursor: 'pointer'
        },
        onClick: refresh,
        children: "All borrowers"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
        type: "text",
        className: "col-lg-8 form-control border-0 small",
        placeholder: "Search for id, name, email, phone...",
        "aria-label": "Search",
        "aria-describedby": "basic-addon2",
        onChange: function onChange(e) {
          setSearchValue(e.target.value);
          if (e.target.value === '') setNumShow(NUM_INCREMENTS);else if (users && users.length > 0) setNumShow(users.length);
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "overflow-auto",
      children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.Loading, {
        height: "1vh",
        size: "2rem"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
        className: "table",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              style: {
                cursor: 'pointer'
              },
              className: 'dropdown-toggle ' + (sortType === 'id' ? 'text-primary' : ''),
              onClick: function onClick() {
                return setSortType('id');
              },
              children: "ID"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              style: {
                cursor: 'pointer'
              },
              className: 'dropdown-toggle ' + (sortType === 'name' ? 'text-primary' : ''),
              onClick: function onClick() {
                return setSortType('name');
              },
              children: "Name"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              style: {
                cursor: 'pointer'
              },
              className: 'dropdown-toggle ' + (sortType === 'email' ? 'text-primary' : ''),
              onClick: function onClick() {
                return setSortType('email');
              },
              children: "Email"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Phone"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Books borrowed"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Action"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
          children: users && users.map(function (user, i) {
            if (searchValue && (searchValue == '' || !searchMatches(user, searchValue)) || i + 1 > numShow) return null;else {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: user.id
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: user.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: user.email
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: user.phone
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: user.books.length
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                    type: "button",
                    className: "btn btn-outline-primary",
                    id: "open-user-info-modal-button",
                    "data-bs-toggle": "modal",
                    "data-bs-target": "#user-info-modal",
                    onClick: function onClick(e) {
                      setSelectedUser(user);
                    },
                    children: "More info"
                  })
                })]
              }, i);
            }
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "modal fade",
      id: "user-info-modal",
      tabIndex: "-1",
      "aria-labelledby": "staticBackdropLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "modal-dialog modal-xl modal-dialog-scrollable",
        role: "document",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              className: "modal-title",
              id: "staticBackdropLabel",
              children: "User information"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "modal-body",
            children: selectedUser && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("table", {
                className: "table",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tbody", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "row",
                      children: "ID"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      children: selectedUser.id
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "row",
                      children: "Name"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      children: selectedUser.name
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "row",
                      children: "Email"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      children: selectedUser.email
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "row",
                      children: "Phone"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      children: selectedUser.phone
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                style: {
                  height: '10px'
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h5", {
                children: ["Currently borrowed books: ", selectedUser.books.length]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
                className: "table",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "ID"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "Title"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "Borrow date"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "Return date"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "Days late"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "Amount due"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "Actions"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
                  children: selectedUser.books.map(function (book, i) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                        scope: "row",
                        children: book.id
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                        children: book.title
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                        children: book.borrow_date
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                        className: book.expired ? 'text-danger' : '',
                        children: book.return_date
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                        className: book.expired ? 'text-danger' : '',
                        children: book.days_past_expired || 'n/a'
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("td", {
                        className: book.expired ? 'text-danger' : '',
                        children: ["$", book.cost]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("td", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                          className: "btn btn-outline-danger mr-2 mb-2",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#confirm-modal",
                          onClick: function onClick(e) {
                            setReturnInfo({
                              user: selectedUser,
                              book: book,
                              mode: 'lost'
                            });
                            setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                              text: ''
                            }));
                            document.getElementById('close-user-info-modal').click();
                          },
                          children: "Lost"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                          className: "btn btn-outline-success mr-2 mb-2",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#confirm-modal",
                          onClick: function onClick(e) {
                            setReturnInfo({
                              user: selectedUser,
                              book: book,
                              mode: 'return'
                            });
                            setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                              text: ''
                            }));
                            document.getElementById('close-user-info-modal').click();
                          },
                          children: "Accept return"
                        })]
                      })]
                    }, i);
                  })
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "modal-footer",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn btn-secondary",
              id: "close-user-info-modal",
              "data-bs-dismiss": "modal",
              children: "Close"
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "modal fade",
      id: "confirm-modal",
      "data-bs-backdrop": "static",
      "data-bs-keyboard": "false",
      tabIndex: "-1",
      "aria-labelledby": "staticBackdropLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "modal-dialog modal-lg",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              className: "modal-title",
              id: "staticBackdropLabel",
              children: "Confirmation"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-body",
            children: [msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
              msg: msg.text,
              success: msg.success
            }), returnInfo && returnInfo.user && returnInfo.book && returnInfo.mode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                children: returnInfo.mode == 'return' ? 'Are you sure you want to accept the return of this book from this user?' : 'Are you sure you want to accept the loss of this book from this user?'
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
                className: "table",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "User"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "Book"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "Cost"
                    }), returnInfo.mode == 'lost' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "Note"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      children: returnInfo.user.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      children: returnInfo.book.title
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("td", {
                      className: returnInfo.book.cost == 0 ? '' : 'text-danger',
                      children: ["$", returnInfo.book.cost == 0 ? 0 : returnInfo.book.cost + '*']
                    }), returnInfo.mode == 'lost' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "text-danger",
                      children: "Fee dued to be calculated"
                    })]
                  })
                })]
              }), (returnInfo.book.cost != 0 || returnInfo.mode == 'lost') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "text-danger",
                children: "*Make sure all fees are paid before accepting."
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-bs-dismiss": "modal",
              onClick: function onClick() {
                if (returnInfo && returnInfo.user) document.getElementById('open-user-info-modal-button').click();
                setSelectedUser(returnInfo.user);
                setReturnInfo({
                  user: null,
                  book: null,
                  mode: null
                });
              },
              children: returnInfo && returnInfo.user ? 'Cancel' : 'Close'
            }), isReturning ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "btn p-0",
              style: {
                width: '90px'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.LoadingButton, {})
            }) : returnInfo.mode == 'return' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: 'btn btn-success' + (returnInfo && returnInfo.user ? '' : ' disabled'),
              onClick: returnBookHandler,
              children: "Accept now"
            }) : returnInfo.mode == 'lost' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: 'btn btn-danger' + (returnInfo && returnInfo.user ? '' : ' disabled'),
              onClick: returnBookHandler,
              children: "Accept Loss"
            }) : null]
          })]
        })
      })
    }), users && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
      className: "d-flex justify-content-center text-muted mt-3 mb-3",
      children: 'Showing ' + (numShow < users.length ? numShow : users.length) + ' of ' + users.length
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "d-inline d-flex justify-content-center",
      children: [users && users.length >= numShow && numShow > NUM_INCREMENTS && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        className: "btn btn-link",
        onClick: function onClick() {
          if (numShow < NUM_INCREMENTS * 2) setNumShow(NUM_INCREMENTS);else setNumShow(numShow - NUM_INCREMENTS);
        },
        children: "Show less"
      }), users && users.length > numShow && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        className: "btn btn-link",
        onClick: function onClick() {
          if (numShow + NUM_INCREMENTS > users.length) setNumShow(users.length);else setNumShow(numShow + NUM_INCREMENTS);
        },
        children: "Show more"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);

/***/ }),

/***/ "./resources/js/views/admin/admin_content/Categories.js":
/*!**************************************************************!*\
  !*** ./resources/js/views/admin/admin_content/Categories.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../components/MessageAlert */ "./resources/js/components/MessageAlert.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Categories = function Categories() {
  var _useRouteMatch = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useRouteMatch)(),
      path = _useRouteMatch.path,
      url = _useRouteMatch.url;

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useHistory)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    text: '',
    success: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      msg = _useState2[0],
      setMsg = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedCat = _useState6[0],
      setSelectedCat = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      newCat = _useState8[0],
      setNewCat = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      categories = _useState10[0],
      setCategories = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isProcessing = _useState12[0],
      setProcessing = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState14 = _slicedToArray(_useState13, 2),
      searchValue = _useState14[0],
      setSearchValue = _useState14[1];

  var NUM_INCREMENTS = 10;

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(NUM_INCREMENTS),
      _useState16 = _slicedToArray(_useState15, 2),
      numShow = _useState16[0],
      setNumShow = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState18 = _slicedToArray(_useState17, 2),
      sortType = _useState18[0],
      setSortType = _useState18[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (categories && sortType) sortArray(sortType);
  }, [sortType]);

  var sortArray = function sortArray(type) {
    var types = {
      id: 'id',
      name: 'name'
    };
    var sortProperty = types[type];

    var sorted = _toConsumableArray(categories).sort(function (a, b) {
      var _a = isNaN(a[sortProperty]) ? a[sortProperty].toLowerCase() : a[sortProperty];

      var _b = isNaN(b[sortProperty]) ? b[sortProperty].toLowerCase() : b[sortProperty];

      if (_a < _b) return -1;
      if (_a > _b) return 1;
      return 0;
    });

    setCategories(sorted);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    getCategoriesFromServer();
  }, []);

  var refresh = function refresh() {
    getCategoriesFromServer();
    setSortType('');
  };

  var getCategoriesFromServer = function getCategoriesFromServer() {
    setLoading(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/categories').then(function (res) {
      setCategories(res.data);
    })["finally"](function () {
      setLoading(false);
    });
  };

  var selectCategoryHandler = function selectCategoryHandler(index) {
    setSelectedCat(categories[index]);
  };

  var saveEditCategoryHandler = function saveEditCategoryHandler() {
    setProcessing(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.patch('/api/categories/' + selectedCat.id, {
      name: selectedCat.name
    }).then(function (res) {
      getCategoriesFromServer();
      setMsg({
        text: 'The edit was saved.',
        success: 1
      });
    })["catch"](function (err) {
      console.log(err);
      setMsg({
        text: 'The edit encounted a problem.',
        success: 0
      });
    })["finally"](function () {
      setProcessing(false);
    });
  };

  var saveDeleteCategoryHandler = function saveDeleteCategoryHandler() {
    if (!selectedCat || msg && msg.text != '') {
      // an action was done -> do not send again
      return;
    }

    setProcessing(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.delete('/api/categories/' + selectedCat.id).then(function (res) {
      getCategoriesFromServer();
      setMsg({
        text: selectedCat.name + ' was deleted.',
        success: 1
      });
      setSelectedCat(null);
    })["catch"](function (err) {
      console.log(err);
      setMsg({
        text: 'The deletion encounted a problem.',
        success: 0
      });
    })["finally"](function () {
      setProcessing(false);
    });
  };

  var saveAddCategoryHandler = function saveAddCategoryHandler() {
    if (newCat == '') return;
    setProcessing(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.post('/api/categories', {
      name: newCat
    }).then(function (res) {
      getCategoriesFromServer();
      setMsg({
        text: newCat + ' was successfully added.',
        success: 1
      });
      setNewCat('');
    })["catch"](function (err) {
      console.log(err);
      setMsg({
        text: 'Adding the new category encounted a problem.',
        success: 0
      });
    })["finally"](function () {
      setProcessing(false);
    });
  };

  var searchMatches = function searchMatches(item, value) {
    return item.id == value || item.name.toLowerCase().includes(value.toLowerCase());
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "row mt-2 mb-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h4", {
        className: "col-lg-4",
        style: {
          cursor: 'pointer'
        },
        onClick: refresh,
        children: ["All categories", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          className: "btn btn-link",
          "data-bs-toggle": "modal",
          "data-bs-target": "#addCategoryModal",
          children: "+"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
        type: "text",
        className: "col-lg-8 form-control border-0 small",
        placeholder: "Search for id, category name...",
        "aria-label": "Search",
        "aria-describedby": "basic-addon2",
        onChange: function onChange(e) {
          setSearchValue(e.target.value);
          if (e.target.value === '') setNumShow(NUM_INCREMENTS);else if (categories && categories.length > 0) setNumShow(categories.length);
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "overflow-auto",
      children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.Loading, {
        height: "1vh",
        size: "2rem"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
        className: "table",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              style: {
                cursor: 'pointer'
              },
              className: 'dropdown-toggle ' + (sortType === 'id' ? 'text-primary' : ''),
              onClick: function onClick() {
                return setSortType('id');
              },
              children: "ID"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              style: {
                cursor: 'pointer'
              },
              className: 'dropdown-toggle ' + (sortType === 'name' ? 'text-primary' : ''),
              onClick: function onClick() {
                return setSortType('name');
              },
              children: "Categories"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Actions"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
          children: categories && categories.map(function (item, i) {
            if (searchValue && (searchValue == '' || !searchMatches(item, searchValue)) || i + 1 > numShow) return null;else {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                  scope: "row",
                  children: item.id
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: item.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("td", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                    className: "btn btn-outline-primary mr-2 mb-1",
                    "data-bs-toggle": "modal",
                    "data-bs-target": "#editCategoryModal",
                    onClick: function onClick(e) {
                      selectCategoryHandler(i);
                    },
                    children: "Edit"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                    className: "btn btn-outline-danger mb-1",
                    "data-bs-toggle": "modal",
                    "data-bs-target": "#deleteCategoryModal",
                    onClick: function onClick(e) {
                      selectCategoryHandler(i);
                    },
                    children: "Delete"
                  })]
                })]
              }, i);
            }
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "modal fade",
      id: "editCategoryModal",
      tabIndex: "-1",
      "data-bs-backdrop": "static",
      "data-bs-keyboard": "false",
      "aria-labelledby": "editModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "modal-dialog",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "modal-header",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              className: "modal-title",
              id: "editModalLabel",
              children: "Edit Category"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-body",
            children: [msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
              msg: msg.text,
              success: msg.success
            }), !selectedCat ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
              className: "form-control",
              placeholder: "Category...",
              value: selectedCat.name,
              onChange: function onChange(e) {
                setSelectedCat(_objectSpread(_objectSpread({}, selectedCat), {}, {
                  name: e.target.value
                }));
              }
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-bs-dismiss": "modal",
              onClick: function onClick(e) {
                setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                  text: ''
                }));
                setSelectedCat(null);
              },
              children: "Close"
            }), isProcessing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "btn p-0",
              style: {
                width: '90px'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.LoadingButton, {})
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: saveEditCategoryHandler,
              children: "Save changes"
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "modal fade",
      id: "deleteCategoryModal",
      tabIndex: "-1",
      "data-bs-backdrop": "static",
      "data-bs-keyboard": "false",
      "aria-labelledby": "deleteModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "modal-dialog",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "modal-header",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              className: "modal-title",
              id: "deleteModalLabel",
              children: "Delete Category"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-body",
            children: [msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
              msg: msg.text,
              success: msg.success
            }), !selectedCat || msg && msg.text != '' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
              children: ["Are you sure you want to delete ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("b", {
                children: [" ", selectedCat.name, " "]
              }), " ?"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-bs-dismiss": "modal",
              onClick: function onClick(e) {
                setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                  text: ''
                }));
                setSelectedCat(null);
              },
              children: "Close"
            }), isProcessing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "btn p-0",
              style: {
                width: '90px'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.LoadingButton, {
                color: "danger"
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: 'btn btn-danger' + (msg && msg.text == '' ? '' : ' disabled'),
              onClick: saveDeleteCategoryHandler,
              children: "Delete now"
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "modal fade",
      id: "addCategoryModal",
      tabIndex: "-1",
      "data-bs-backdrop": "static",
      "data-bs-keyboard": "false",
      "aria-labelledby": "addModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "modal-dialog",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "modal-header",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              className: "modal-title",
              id: "addModalLabel",
              children: "Add Category"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-body",
            children: [msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
              msg: msg.text,
              success: msg.success
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
              className: "form-control",
              placeholder: "Category...",
              value: newCat,
              onChange: function onChange(e) {
                setNewCat(e.target.value);
              }
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-bs-dismiss": "modal",
              onClick: function onClick(e) {
                setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                  text: ''
                }));
              },
              children: "Close"
            }), isProcessing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "btn p-0",
              style: {
                width: '90px'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.LoadingButton, {})
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: 'btn btn-primary' + (newCat == '' ? ' disabled' : ''),
              onClick: saveAddCategoryHandler,
              children: "Add category"
            })]
          })]
        })
      })
    }), categories && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
      className: "d-flex justify-content-center text-muted mt-3 mb-3",
      children: 'Showing ' + (numShow < categories.length ? numShow : categories.length) + ' of ' + categories.length
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "d-inline d-flex justify-content-center",
      children: [categories && categories.length >= numShow && numShow > NUM_INCREMENTS && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        className: "btn btn-link",
        onClick: function onClick() {
          if (numShow < NUM_INCREMENTS * 2) setNumShow(NUM_INCREMENTS);else setNumShow(numShow - NUM_INCREMENTS);
        },
        children: "Show less"
      }), categories && categories.length > numShow && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        className: "btn btn-link",
        onClick: function onClick() {
          if (numShow + NUM_INCREMENTS > categories.length) setNumShow(categories.length);else setNumShow(numShow + NUM_INCREMENTS);
        },
        children: "Show more"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Categories);

/***/ }),

/***/ "./resources/js/views/admin/admin_content/Logs.js":
/*!********************************************************!*\
  !*** ./resources/js/views/admin/admin_content/Logs.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../components/MessageAlert */ "./resources/js/components/MessageAlert.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var Logs = function Logs() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    text: '',
    success: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      msg = _useState4[0],
      setMsg = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      logs = _useState6[0],
      setLogs = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      searchValue = _useState8[0],
      setSearchValue = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    title: false,
    user_id: false,
    book_id: false,
    description: false
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      addErrors = _useState10[0],
      setAddErrors = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    title: '',
    user_id: '',
    book_id: '',
    description: ''
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      newLog = _useState12[0],
      setNewLog = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState14 = _slicedToArray(_useState13, 2),
      users = _useState14[0],
      setUsers = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState16 = _slicedToArray(_useState15, 2),
      books = _useState16[0],
      setBooks = _useState16[1];

  var NUM_INCREMENTS = 10;

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(NUM_INCREMENTS),
      _useState18 = _slicedToArray(_useState17, 2),
      numShow = _useState18[0],
      setNumShow = _useState18[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    getLogsFromServer();
    getUsersFromServer();
    getBooksFromServer();
  }, []);

  var refresh = function refresh() {
    getLogsFromServer();
    getUsersFromServer();
    getBooksFromServer();
  };

  var getUsersFromServer = function getUsersFromServer() {
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/users-names').then(function (res) {
      setUsers(res.data);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var getBooksFromServer = function getBooksFromServer() {
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/books-titles').then(function (res) {
      setBooks(res.data);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var getLogsFromServer = function getLogsFromServer() {
    setLoading(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/logs').then(function (res) {
      setLogs(res.data);
    })["catch"](function (err) {
      console.log(err);
    })["finally"](function () {
      setLoading(false);
    });
  };

  var hasInputErrors = function hasInputErrors() {
    if (newLog.title === '' || newLog.user_id === '' || newLog.description === '') return true;
    return false;
  };

  var addLogHandler = function addLogHandler() {
    if (hasInputErrors()) return;
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.post('/api/logs', newLog).then(function (res) {
      setMsg({
        text: 'Successfully added new log!',
        success: 1
      });
      setNewLog({
        title: '',
        user_id: '',
        book_id: '',
        description: ''
      });
      getLogsFromServer();
    })["catch"](function (err) {
      console.log(err);
      setMsg({
        text: 'There was a problem: ' + err.response,
        success: 0
      });
    });
  };

  var searchMatches = function searchMatches(item, value) {
    return item.id == value || item.title.toLowerCase().includes(value.toLowerCase()) || item.user.name.toLowerCase().includes(value.toLowerCase()) || item.book && item.book.title.toLowerCase().includes(value.toLowerCase()) || item.description.toLowerCase().includes(value.toLowerCase()) || item.date_time.includes(value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "row mt-2 mb-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h4", {
        className: "col-lg-4",
        style: {
          cursor: 'pointer'
        },
        onClick: refresh,
        children: ["All logs", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          className: "btn btn-link",
          "data-bs-toggle": "modal",
          "data-bs-target": "#addLogModal",
          onClick: function onClick(e) {
            setMsg({
              text: '',
              success: 1
            });
            setAddErrors({
              title: false,
              user_id: false,
              book_id: false,
              description: false
            });
            setNewLog({
              title: '',
              user_id: '',
              book_id: '',
              description: ''
            });
          },
          children: "+"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
        type: "text",
        className: "col-lg-8 form-control border-0 small",
        placeholder: "Search id, title, user, book, description, date...",
        "aria-label": "Search",
        "aria-describedby": "basic-addon2",
        onChange: function onChange(e) {
          setSearchValue(e.target.value);
          if (e.target.value === '') setNumShow(NUM_INCREMENTS);else if (logs && logs.length > 0) setNumShow(logs.length);
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "overflow-auto",
      children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.Loading, {
        height: "1vh",
        size: "2rem"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
        className: "table",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "ID"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Title"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "User"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Book"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Date/time"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Action"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
          children: logs && logs.map(function (log, i) {
            if (searchValue && (searchValue == '' || !searchMatches(log, searchValue)) || i + 1 > numShow) return null;else {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                  scope: "row",
                  children: log.id
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: log.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: log.user.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: log.book ? log.book.title : 'n/a'
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: log.date_time
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("td", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                    type: "button",
                    className: "btn btn-outline-primary",
                    "data-bs-toggle": "modal",
                    "data-bs-target": '#logInfoModal-' + log.id,
                    children: "More info"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                    className: "modal fade",
                    id: 'logInfoModal-' + log.id,
                    tabIndex: "-1",
                    "aria-labelledby": 'logInfoModalLabel-' + log.id,
                    "aria-hidden": "true",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "modal-dialog",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: "modal-content",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                          className: "modal-header",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
                            className: "modal-title",
                            id: 'logInfoModalLabel-' + log.id,
                            children: log.id
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                            type: "button",
                            className: "btn-close",
                            "data-bs-dismiss": "modal",
                            "aria-label": "Close"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                          className: "modal-body",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("table", {
                            className: "table",
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tbody", {
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                  children: "Title"
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                  children: log.title
                                })]
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                  children: "User"
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                  children: log.user.name
                                })]
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                  children: "Book"
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                  children: log.book ? log.book.title : 'n/a'
                                })]
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                  children: "Description"
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                  children: log.description
                                })]
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                  children: "Date/time"
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                  children: log.date_time
                                })]
                              })]
                            })
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                          className: "modal-footer",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                            type: "button",
                            className: "btn btn-secondary",
                            "data-bs-dismiss": "modal",
                            children: "Close"
                          })
                        })]
                      })
                    })
                  })]
                })]
              }, i);
            }
          })
        })]
      })]
    }), logs && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
      className: "d-flex justify-content-center text-muted mt-3 mb-3",
      children: 'Showing ' + (numShow < logs.length ? numShow : logs.length) + ' of ' + logs.length
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "d-inline d-flex justify-content-center",
      children: [logs && logs.length >= numShow && numShow > NUM_INCREMENTS && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        className: "btn btn-link",
        onClick: function onClick() {
          if (numShow < NUM_INCREMENTS * 2) setNumShow(NUM_INCREMENTS);else setNumShow(numShow - NUM_INCREMENTS);
        },
        children: "Show less"
      }), logs && logs.length > numShow && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        className: "btn btn-link",
        onClick: function onClick() {
          if (numShow + NUM_INCREMENTS > logs.length) setNumShow(logs.length);else setNumShow(numShow + NUM_INCREMENTS);
        },
        children: "Show more"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "modal fade",
      id: "addLogModal",
      tabIndex: "-1",
      "aria-labelledby": "addLogModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "modal-dialog",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              className: "modal-title",
              id: "addLogModalLabel",
              children: "Add log"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-body",
            children: [msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
              msg: msg.text,
              success: msg.success
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
              children: "Title"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
              className: 'form-control mb-2' + (addErrors.title ? ' is-invalid' : ''),
              placeholder: "Title",
              value: newLog.title,
              onChange: function onChange(e) {
                if (e.target.value == '') {
                  setAddErrors(_objectSpread(_objectSpread({}, addErrors), {}, {
                    title: true
                  }));
                } else {
                  setAddErrors(_objectSpread(_objectSpread({}, addErrors), {}, {
                    title: false
                  }));
                }

                setNewLog(_objectSpread(_objectSpread({}, newLog), {}, {
                  title: e.target.value
                }));
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
              children: "User"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("select", {
              className: 'form-control mb-2' + (addErrors.user_id ? ' is-invalid' : ''),
              onChange: function onChange(e) {
                if (e.target.value == '') {
                  setAddErrors(_objectSpread(_objectSpread({}, addErrors), {}, {
                    user_id: true
                  }));
                } else {
                  setAddErrors(_objectSpread(_objectSpread({}, addErrors), {}, {
                    user_id: false
                  }));
                }

                setNewLog(_objectSpread(_objectSpread({}, newLog), {}, {
                  user_id: e.target.value
                }));
              },
              value: newLog.user_id,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "",
                defaultValue: true,
                children: "Select user"
              }), users && users.map(function (user, i) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("option", {
                  value: user.id,
                  children: [user.id, " - ", user.name]
                }, i);
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
              children: "Book"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("select", {
              className: 'form-control mb-2' + (addErrors.book_id ? ' is-invalid' : ''),
              onChange: function onChange(e) {
                setNewLog(_objectSpread(_objectSpread({}, newLog), {}, {
                  book_id: e.target.value
                }));
              },
              value: newLog.book_id,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: "",
                defaultValue: true,
                children: "Select book (optional)"
              }), books && books.map(function (book, i) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("option", {
                  value: book.id,
                  children: [book.id, " - ", book.title]
                }, i);
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
              children: "Description"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("textarea", {
              className: 'form-control mb-2' + (addErrors.description ? ' is-invalid' : ''),
              placeholder: "Description",
              value: newLog.description,
              onChange: function onChange(e) {
                if (e.target.value == '') {
                  setAddErrors(_objectSpread(_objectSpread({}, addErrors), {}, {
                    description: true
                  }));
                } else {
                  setAddErrors(_objectSpread(_objectSpread({}, addErrors), {}, {
                    description: false
                  }));
                }

                setNewLog(_objectSpread(_objectSpread({}, newLog), {}, {
                  description: e.target.value
                }));
              }
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-bs-dismiss": "modal",
              children: "Close"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: 'btn btn-primary' + (hasInputErrors() ? ' disabled' : ''),
              onClick: addLogHandler,
              children: "Add"
            })]
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logs);

/***/ }),

/***/ "./resources/js/views/admin/admin_content/Publishers.js":
/*!**************************************************************!*\
  !*** ./resources/js/views/admin/admin_content/Publishers.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../components/MessageAlert */ "./resources/js/components/MessageAlert.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Publishers = function Publishers() {
  var _useRouteMatch = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useRouteMatch)(),
      path = _useRouteMatch.path,
      url = _useRouteMatch.url;

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useHistory)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    text: '',
    success: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      msg = _useState2[0],
      setMsg = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedPub = _useState6[0],
      setSelectedPub = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      newPub = _useState8[0],
      setNewPub = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      publishers = _useState10[0],
      setPublishers = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isProcessing = _useState12[0],
      setProcessing = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState14 = _slicedToArray(_useState13, 2),
      searchValue = _useState14[0],
      setSearchValue = _useState14[1];

  var NUM_INCREMENTS = 10;

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(NUM_INCREMENTS),
      _useState16 = _slicedToArray(_useState15, 2),
      numShow = _useState16[0],
      setNumShow = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState18 = _slicedToArray(_useState17, 2),
      sortType = _useState18[0],
      setSortType = _useState18[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (publishers && sortType) sortArray(sortType);
  }, [sortType]);

  var sortArray = function sortArray(type) {
    var types = {
      id: 'id',
      name: 'name'
    };
    var sortProperty = types[type];

    var sorted = _toConsumableArray(publishers).sort(function (a, b) {
      var _a = isNaN(a[sortProperty]) ? a[sortProperty].toLowerCase() : a[sortProperty];

      var _b = isNaN(b[sortProperty]) ? b[sortProperty].toLowerCase() : b[sortProperty];

      if (_a < _b) return -1;
      if (_a > _b) return 1;
      return 0;
    });

    setPublishers(sorted);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    getPublishersFromServer();
  }, []);

  var refresh = function refresh() {
    getPublishersFromServer();
    setSortType('');
  };

  var getPublishersFromServer = function getPublishersFromServer() {
    setLoading(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/publishers').then(function (res) {
      setPublishers(res.data);
    })["finally"](function () {
      setLoading(false);
    });
  };

  var selectPublisherHandler = function selectPublisherHandler(index) {
    setSelectedPub(publishers[index]);
  };

  var saveEditPublisherHandler = function saveEditPublisherHandler() {
    setProcessing(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.patch('/api/publishers/' + selectedPub.id, {
      name: selectedPub.name
    }).then(function (res) {
      getPublishersFromServer();
      setMsg({
        text: 'The edit was saved.',
        success: 1
      });
    })["catch"](function (err) {
      console.log(err);
      setMsg({
        text: 'The edit encounted a problem.',
        success: 0
      });
    })["finally"](function () {
      setProcessing(false);
    });
  };

  var saveDeletePublisherHandler = function saveDeletePublisherHandler() {
    if (!selectedPub || msg && msg.text != '') {
      // an action was done -> do not send again
      return;
    }

    setProcessing(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.delete('/api/publishers/' + selectedPub.id).then(function (res) {
      getPublishersFromServer();
      setMsg({
        text: selectedPub.name + ' was deleted.',
        success: 1
      });
      setSelectedPub(null);
    })["catch"](function (err) {
      console.log(err);
      setMsg({
        text: 'The deletion encounted a problem.',
        success: 0
      });
    })["finally"](function () {
      setProcessing(false);
    });
  };

  var saveAddPublisherHandler = function saveAddPublisherHandler() {
    if (newPub == '') return;
    setProcessing(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.post('/api/publishers', {
      name: newPub
    }).then(function (res) {
      getPublishersFromServer();
      setMsg({
        text: newPub + ' was successfully added.',
        success: 1
      });
      setNewPub('');
    })["catch"](function (err) {
      console.log(err);
      setMsg({
        text: 'Adding the new publisher encounted a problem.',
        success: 0
      });
    })["finally"](function () {
      setProcessing(false);
    });
  };

  var searchMatches = function searchMatches(item, value) {
    return item.id == value || item.name.toLowerCase().includes(value.toLowerCase());
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "row mt-2 mb-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h4", {
        className: "col-lg-4",
        style: {
          cursor: 'pointer'
        },
        onClick: refresh,
        children: ["All publishers", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          className: "btn btn-link",
          "data-bs-toggle": "modal",
          "data-bs-target": "#addPublisherModal",
          children: "+"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
        type: "text",
        className: "col-lg-8 form-control border-0 small",
        placeholder: "Search for id, publisher name...",
        "aria-label": "Search",
        "aria-describedby": "basic-addon2",
        onChange: function onChange(e) {
          setSearchValue(e.target.value);
          if (e.target.value === '') setNumShow(NUM_INCREMENTS);else if (publishers && publishers.length > 0) setNumShow(publishers.length);
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "overflow-auto",
      children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.Loading, {
        height: "1vh",
        size: "2rem"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
        className: "table",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              style: {
                cursor: 'pointer'
              },
              className: 'dropdown-toggle ' + (sortType === 'id' ? 'text-primary' : ''),
              onClick: function onClick() {
                return setSortType('id');
              },
              children: "ID"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              style: {
                cursor: 'pointer'
              },
              className: 'dropdown-toggle ' + (sortType === 'name' ? 'text-primary' : ''),
              onClick: function onClick() {
                return setSortType('name');
              },
              children: "Publishers"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Actions"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
          children: publishers && publishers.map(function (item, i) {
            if (searchValue && (searchValue == '' || !searchMatches(item, searchValue)) || i + 1 > numShow) return null;else {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                  scope: "row",
                  children: item.id
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: item.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("td", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                    className: "btn btn-outline-primary mr-2 mb-1",
                    "data-bs-toggle": "modal",
                    "data-bs-target": "#editPublisherModal",
                    onClick: function onClick(e) {
                      selectPublisherHandler(i);
                    },
                    children: "Edit"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                    className: "btn btn-outline-danger mb-1",
                    "data-bs-toggle": "modal",
                    "data-bs-target": "#deletePublisherModal",
                    onClick: function onClick(e) {
                      selectPublisherHandler(i);
                    },
                    children: "Delete"
                  })]
                })]
              }, i);
            }
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "modal fade",
      id: "editPublisherModal",
      tabIndex: "-1",
      "data-bs-backdrop": "static",
      "data-bs-keyboard": "false",
      "aria-labelledby": "editModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "modal-dialog",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "modal-header",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              className: "modal-title",
              id: "editModalLabel",
              children: "Edit Publisher"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-body",
            children: [msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
              msg: msg.text,
              success: msg.success
            }), !selectedPub ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
              className: "form-control",
              placeholder: "Publisher...",
              value: selectedPub.name,
              onChange: function onChange(e) {
                setSelectedPub(_objectSpread(_objectSpread({}, selectedPub), {}, {
                  name: e.target.value
                }));
              }
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-bs-dismiss": "modal",
              onClick: function onClick(e) {
                setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                  text: ''
                }));
                setSelectedPub(null);
              },
              children: "Close"
            }), isProcessing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "btn p-0",
              style: {
                width: '90px'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.LoadingButton, {})
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: saveEditPublisherHandler,
              children: "Save changes"
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "modal fade",
      id: "deletePublisherModal",
      tabIndex: "-1",
      "data-bs-backdrop": "static",
      "data-bs-keyboard": "false",
      "aria-labelledby": "deleteModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "modal-dialog",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "modal-header",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              className: "modal-title",
              id: "deleteModalLabel",
              children: "Delete Publisher"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-body",
            children: [msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
              msg: msg.text,
              success: msg.success
            }), !selectedPub || msg && msg.text != '' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
              children: ["Are you sure you want to delete ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("b", {
                children: [" ", selectedPub.name, " "]
              }), " ?"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-bs-dismiss": "modal",
              onClick: function onClick(e) {
                setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                  text: ''
                }));
                setSelectedPub(null);
              },
              children: "Close"
            }), isProcessing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "btn p-0",
              style: {
                width: '90px'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.LoadingButton, {
                color: "danger"
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: 'btn btn-danger' + (msg && msg.text == '' ? '' : ' disabled'),
              onClick: saveDeletePublisherHandler,
              children: "Delete now"
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "modal fade",
      id: "addPublisherModal",
      tabIndex: "-1",
      "data-bs-backdrop": "static",
      "data-bs-keyboard": "false",
      "aria-labelledby": "addModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "modal-dialog",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "modal-header",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              className: "modal-title",
              id: "addModalLabel",
              children: "Add Publisher"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-body",
            children: [msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
              msg: msg.text,
              success: msg.success
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
              className: "form-control",
              placeholder: "Publisher...",
              value: newPub,
              onChange: function onChange(e) {
                setNewPub(e.target.value);
              }
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-bs-dismiss": "modal",
              onClick: function onClick(e) {
                setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                  text: ''
                }));
              },
              children: "Close"
            }), isProcessing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "btn p-0",
              style: {
                width: '90px'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.LoadingButton, {})
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: 'btn btn-primary' + (newPub == '' ? ' disabled' : ''),
              onClick: saveAddPublisherHandler,
              children: "Add Publisher"
            })]
          })]
        })
      })
    }), publishers && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
      className: "d-flex justify-content-center text-muted mt-3 mb-3",
      children: 'Showing ' + (numShow < publishers.length ? numShow : publishers.length) + ' of ' + publishers.length
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "d-inline d-flex justify-content-center",
      children: [publishers && publishers.length >= numShow && numShow > NUM_INCREMENTS && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        className: "btn btn-link",
        onClick: function onClick() {
          if (numShow < NUM_INCREMENTS * 2) setNumShow(NUM_INCREMENTS);else setNumShow(numShow - NUM_INCREMENTS);
        },
        children: "Show less"
      }), publishers && publishers.length > numShow && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        className: "btn btn-link",
        onClick: function onClick() {
          if (numShow + NUM_INCREMENTS > publishers.length) setNumShow(publishers.length);else setNumShow(numShow + NUM_INCREMENTS);
        },
        children: "Show more"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Publishers);

/***/ }),

/***/ "./resources/js/views/admin/admin_content/Rules.js":
/*!*********************************************************!*\
  !*** ./resources/js/views/admin/admin_content/Rules.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../components/MessageAlert */ "./resources/js/components/MessageAlert.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var Rules = function Rules() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isSaving = _useState4[0],
      setSaving = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    text: '',
    success: 0
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      msg = _useState6[0],
      setMsg = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      rules = _useState8[0],
      setRules = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      hasChanged = _useState10[0],
      setChanged = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState12 = _slicedToArray(_useState11, 2),
      defaultRule = _useState12[0],
      setDefaultRule = _useState12[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    getRulesFromServer();
  }, []);

  var refresh = function refresh() {
    getRulesFromServer();
  };

  var getRulesFromServer = function getRulesFromServer() {
    setLoading(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/library-rules').then(function (res) {
      setRules(res.data);
      var rules = res.data;

      for (var i in rules) {
        if (rules[i].name == 'default') {
          setDefaultRule(rules[i]);
          break;
        }
      }
    })["catch"](function (err) {
      setMsg({
        text: 'There was a problem: ' + err,
        success: 0
      });
      console.log(err.response);
    })["finally"](function () {
      setLoading(false);
    });
  };

  var hasInputErrors = function hasInputErrors() {
    for (var i in rules) {
      var rule = rules[i];

      if (rule != defaultRule && rule.name == 'default' || rule.name == '' || isNaN(rule.num_of_books_per_user) || isNaN(rule.cost_per_day_late_return) || isNaN(rule.duration_per_borrow)) {
        return true;
      }
    }

    return false;
  };

  var saveRulesToServer = function saveRulesToServer() {
    if (!rules || !hasChanged) return;

    if (hasInputErrors()) {
      setMsg({
        text: 'Make sure the inputs are correct!',
        success: 0
      });
      return;
    }

    setSaving(true);
    setMsg({
      text: '',
      success: 0
    });
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.put('/api/library-rules', rules).then(function (res) {
      setChanged(false);
      getRulesFromServer();
    })["catch"](function (err) {
      setMsg({
        text: 'There was a problem: ' + err,
        success: 0
      });
      console.log(err.response);
    })["finally"](function () {
      setSaving(false);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "d-flex justify-content-between mt-2 mb-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
        className: "col-lg-4 pl-0",
        style: {
          cursor: 'pointer'
        },
        onClick: refresh,
        children: "Library Rules"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        children: isSaving ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "btn p-0",
          style: {
            width: '90px'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.LoadingButton, {})
        }) : hasChanged && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
          className: "d-flex",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            type: "button",
            className: 'btn btn-secondary mr-2' + (hasChanged ? '' : ' disabled'),
            "data-bs-dismiss": "modal",
            onClick: function onClick() {
              getRulesFromServer();
              setChanged(false);
            },
            children: "Cancel"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            type: "button",
            className: 'btn btn-primary' + (hasChanged ? '' : ' disabled'),
            "data-bs-dismiss": "modal",
            onClick: saveRulesToServer,
            children: "Save"
          })]
        })
      })]
    }), msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
      msg: msg.text,
      success: msg.success
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "overflow-auto",
      children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.Loading, {
        height: "1vh",
        size: "2rem"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
        className: "table",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "ID"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Rule"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Book limit per user (books)"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Duration per borrow (days)"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Cost per late for late return ($/day)"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
          children: rules && rules.map(function (rule, i) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                scope: "row",
                children: rule.id
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                children: rule == defaultRule ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "text",
                  className: "form-control",
                  value: rule.name,
                  disabled: true
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "text",
                  className: 'form-control' + (rule.name == '' || rule.name == 'default' && rule != defaultRule ? ' is-invalid' : ''),
                  required: true,
                  onChange: function onChange(e) {
                    setChanged(true);

                    var rules_copy = _toConsumableArray(rules);

                    rules_copy[i].name = e.target.value;
                    setRules(rules_copy);
                  },
                  value: rule.name
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "text",
                  className: 'form-control' + (rule.num_of_books_per_user == '' || isNaN(rule.num_of_books_per_user) ? ' is-invalid' : ''),
                  required: true,
                  onChange: function onChange(e) {
                    setChanged(true);

                    var rules_copy = _toConsumableArray(rules);

                    rules_copy[i].num_of_books_per_user = e.target.value;
                    setRules(rules_copy);
                  },
                  value: rule.num_of_books_per_user
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "text",
                  className: 'form-control' + (rule.duration_per_borrow == '' || isNaN(rule.duration_per_borrow) ? ' is-invalid' : ''),
                  required: true,
                  onChange: function onChange(e) {
                    setChanged(true);

                    var rules_copy = _toConsumableArray(rules);

                    rules_copy[i].duration_per_borrow = e.target.value;
                    setRules(rules_copy);
                  },
                  value: rule.duration_per_borrow
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "text",
                  className: 'form-control' + (rule.cost_per_day_late_return == '' || isNaN(rule.cost_per_day_late_return) ? ' is-invalid' : ''),
                  required: true,
                  onChange: function onChange(e) {
                    setChanged(true);

                    var rules_copy = _toConsumableArray(rules);

                    rules_copy[i].cost_per_day_late_return = e.target.value;
                    setRules(rules_copy);
                  },
                  value: rule.cost_per_day_late_return
                })
              })]
            }, i);
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rules);

/***/ }),

/***/ "./resources/js/views/admin/admin_content/Users.js":
/*!*********************************************************!*\
  !*** ./resources/js/views/admin/admin_content/Users.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../components/MessageAlert */ "./resources/js/components/MessageAlert.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Users = function Users() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      users = _useState4[0],
      setUsers = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedUser = _useState6[0],
      setSelectedUser = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    user: null,
    book: null,
    mode: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      returnInfo = _useState8[0],
      setReturnInfo = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isReturning = _useState10[0],
      setReturning = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isDeletingUser = _useState12[0],
      setDeleteingUser = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    text: '',
    success: 0
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      msg = _useState14[0],
      setMsg = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState16 = _slicedToArray(_useState15, 2),
      searchValue = _useState16[0],
      setSearchValue = _useState16[1];

  var NUM_INCREMENTS = 10;

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(NUM_INCREMENTS),
      _useState18 = _slicedToArray(_useState17, 2),
      numShow = _useState18[0],
      setNumShow = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState20 = _slicedToArray(_useState19, 2),
      sortType = _useState20[0],
      setSortType = _useState20[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (users && sortType) sortArray(sortType);
  }, [sortType]);

  var sortArray = function sortArray(type) {
    var types = {
      id: 'id',
      name: 'name',
      email: 'email'
    };
    var sortProperty = types[type];

    var sorted = _toConsumableArray(users).sort(function (a, b) {
      var _a = isNaN(a[sortProperty]) ? a[sortProperty].toLowerCase() : a[sortProperty];

      var _b = isNaN(b[sortProperty]) ? b[sortProperty].toLowerCase() : b[sortProperty];

      if (_a < _b) return -1;
      if (_a > _b) return 1;
      return 0;
    });

    setUsers(sorted);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    getUsersFromServer();
  }, []);

  var refresh = function refresh() {
    getUsersFromServer();
    setSortType('');
  };

  var getUsersFromServer = function getUsersFromServer() {
    setLoading(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/all-users-books').then(function (res) {
      setUsers(res.data);
    })["catch"](function (err) {
      console.log(err);
    })["finally"](function () {
      setLoading(false);
    });
  };

  var returnBookHandler = function returnBookHandler() {
    if (!returnInfo || !returnInfo.user || !returnInfo.book || !returnInfo.mode) return;
    var url = returnInfo.mode == 'return' ? '/api/books/return' : '/api/books/lost';
    setReturning(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.post(url, {
      user_id: returnInfo.user.id,
      book_id: returnInfo.book.id
    }).then(function (res) {
      setMsg({
        text: 'The return was successful!',
        success: 1
      });
      setReturnInfo({
        user: null,
        book: null,
        mode: null
      });
    })["catch"](function (err) {
      console.log(err.response);
      setMsg({
        text: 'There was a problem: ' + err.response,
        success: 0
      });
    })["finally"](function () {
      setReturning(false);
      refresh();
    });
  };

  var deleteUserHandler = function deleteUserHandler(user) {
    if (user.is_admin || user.books.length > 0) {
      setMsg({
        text: 'Cannot delete user!',
        success: 0
      });
      return;
    }

    var user_id = user.id;
    setDeleteingUser(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.post('/api/delete-user', {
      user_id: user_id
    }).then(function (res) {
      setMsg({
        text: 'User was deleted successfully!',
        success: 1
      });
      document.getElementById('delete-user-modal-close-btn' + user_id).click();
    })["catch"](function (err) {
      setMsg({
        text: 'There was a problem: ' + err.response.data.error,
        success: 0
      });
    })["finally"](function () {
      setDeleteingUser(false);
      refresh();
    });
  };

  var searchMatches = function searchMatches(user, value) {
    return user.id == value || user.name.toLowerCase().includes(value.toLowerCase()) || user.email.toLowerCase().includes(value.toLowerCase()) || user.phone.toLowerCase().includes(value.toLowerCase());
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "row mt-2 mb-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
        className: "col-lg-4",
        style: {
          cursor: 'pointer'
        },
        onClick: refresh,
        children: "All users"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
        type: "text",
        className: "col-lg-8 form-control border-0 small",
        placeholder: "Search for id, name, email, phone...",
        "aria-label": "Search",
        "aria-describedby": "basic-addon2",
        onChange: function onChange(e) {
          setSearchValue(e.target.value);
          if (e.target.value === '') setNumShow(NUM_INCREMENTS);else if (users && users.length > 0) setNumShow(users.length);
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "overflow-auto",
      children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.Loading, {
        height: "1vh",
        size: "2rem"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
        className: "table",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              style: {
                cursor: 'pointer'
              },
              className: 'dropdown-toggle ' + (sortType === 'id' ? 'text-primary' : ''),
              onClick: function onClick() {
                return setSortType('id');
              },
              children: "ID"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              style: {
                cursor: 'pointer'
              },
              className: 'dropdown-toggle ' + (sortType === 'name' ? 'text-primary' : ''),
              onClick: function onClick() {
                return setSortType('name');
              },
              children: "Name"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              style: {
                cursor: 'pointer'
              },
              className: 'dropdown-toggle ' + (sortType === 'email' ? 'text-primary' : ''),
              onClick: function onClick() {
                return setSortType('email');
              },
              children: "Email"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Phone"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Books borrowed"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Action"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
          children: users && users.map(function (user, i) {
            if (searchValue && (searchValue == '' || !searchMatches(user, searchValue)) || i + 1 > numShow) return null;else {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: user.id
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                    className: "d-flex align-items-center",
                    children: [user.name, user.is_verified && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                      className: "ml-2",
                      src: "/img/tick.svg",
                      style: {
                        height: '12px',
                        opacity: '50%'
                      }
                    }), user.is_admin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                      className: "ml-2",
                      src: "/img/user.svg",
                      style: {
                        height: '12.5px',
                        opacity: '50%'
                      }
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: user.email
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: user.phone
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: user.books.length
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("td", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                    type: "button",
                    className: "btn btn-outline-primary mr-2 mb-2",
                    id: "open-user-info-modal-button",
                    "data-bs-toggle": "modal",
                    "data-bs-target": "#user-info-modal",
                    onClick: function onClick(e) {
                      setSelectedUser(user);
                    },
                    children: "More info"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                    type: "button",
                    className: "btn btn-outline-danger mr-2 mb-2",
                    "data-bs-toggle": "modal",
                    "data-bs-target": '#delete-user-modal' + user.id,
                    onClick: function onClick() {
                      if (user.is_admin) {
                        setMsg({
                          text: 'Cannot delete an admin.',
                          success: 0
                        });
                      } else if (user.books.length > 0) {
                        setMsg({
                          text: 'User must return all books before deleting account.',
                          success: 0
                        });
                      } else {
                        setMsg({
                          text: '',
                          success: 1
                        });
                      }
                    },
                    children: "Delete"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                    className: "modal fade",
                    id: 'delete-user-modal' + user.id,
                    tabIndex: "-1",
                    "aria-labelledby": "delete-user-modal-label",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "modal-dialog",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: "modal-content",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                          className: "modal-header",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
                            className: "modal-title",
                            id: "delete-user-modal-label",
                            children: "Confirmation"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                            type: "button",
                            className: "btn-close",
                            "data-bs-dismiss": "modal",
                            "aria-label": "Close"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                          className: "modal-body",
                          children: msg && msg.text ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
                            msg: msg.text,
                            success: msg.success
                          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                              children: "Are you sure you want to delete this user's account?"
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("table", {
                              className: "table",
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tbody", {
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                                    scope: "row",
                                    children: "ID"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                    children: user.id
                                  })]
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                                    scope: "row",
                                    children: "Name"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                    children: user.name
                                  })]
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                                    scope: "row",
                                    children: "Email"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                    children: user.email
                                  })]
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                                    scope: "row",
                                    children: "Phone"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                    children: user.phone
                                  })]
                                })]
                              })
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                              className: "text-danger",
                              children: "This action cannot be undone."
                            })]
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                          className: "modal-footer",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                            type: "button",
                            className: "btn btn-secondary",
                            "data-bs-dismiss": "modal",
                            id: 'delete-user-modal-close-btn' + user.id,
                            children: "Close"
                          }), isDeletingUser ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                            className: "btn p-0",
                            style: {
                              width: '90px'
                            },
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.LoadingButton, {
                              color: "danger"
                            })
                          }) : msg && msg.text === '' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                            type: "button",
                            className: "btn btn-danger",
                            onClick: function onClick() {
                              return deleteUserHandler(user);
                            },
                            children: "Delete"
                          }) : null]
                        })]
                      })
                    })
                  })]
                })]
              }, i);
            }
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "modal fade",
      id: "user-info-modal",
      tabIndex: "-1",
      "aria-labelledby": "staticBackdropLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "modal-dialog modal-xl modal-dialog-scrollable",
        role: "document",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              className: "modal-title",
              id: "staticBackdropLabel",
              children: "User information"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "modal-body",
            children: selectedUser && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("table", {
                className: "table",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tbody", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "row",
                      children: "ID"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      children: selectedUser.id
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "row",
                      children: "Name"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      children: selectedUser.name
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "row",
                      children: "Email"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      children: selectedUser.email
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "row",
                      children: "Phone"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      children: selectedUser.phone
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                style: {
                  height: '10px'
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h5", {
                children: ["Currently borrowed books: ", selectedUser.books.length]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
                className: "table",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "ID"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "Title"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "Borrow date"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "Return date"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "Days late"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "Amount due"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "Actions"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
                  children: selectedUser.books.map(function (book, i) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                        scope: "row",
                        children: book.id
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                        children: book.title
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                        children: book.borrow_date
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                        className: book.expired ? 'text-danger' : '',
                        children: book.return_date
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                        className: book.expired ? 'text-danger' : '',
                        children: book.days_past_expired || 'n/a'
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("td", {
                        className: book.expired ? 'text-danger' : '',
                        children: ["$", book.cost]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("td", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                          className: "btn btn-outline-danger mr-2 mb-2",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#confirm-modal",
                          onClick: function onClick(e) {
                            setReturnInfo({
                              user: selectedUser,
                              book: book,
                              mode: 'lost'
                            });
                            setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                              text: ''
                            }));
                            document.getElementById('close-user-info-modal').click();
                          },
                          children: "Lost"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                          className: "btn btn-outline-success mr-2 mb-2",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#confirm-modal",
                          onClick: function onClick(e) {
                            setReturnInfo({
                              user: selectedUser,
                              book: book,
                              mode: 'return'
                            });
                            setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                              text: ''
                            }));
                            document.getElementById('close-user-info-modal').click();
                          },
                          children: "Accept return"
                        })]
                      })]
                    }, i);
                  })
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "modal-footer",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn btn-secondary",
              id: "close-user-info-modal",
              "data-bs-dismiss": "modal",
              children: "Close"
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "modal fade",
      id: "confirm-modal",
      "data-bs-backdrop": "static",
      "data-bs-keyboard": "false",
      tabIndex: "-1",
      "aria-labelledby": "staticBackdropLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "modal-dialog modal-lg",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              className: "modal-title",
              id: "staticBackdropLabel",
              children: "Confirmation"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-body",
            children: [msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
              msg: msg.text,
              success: msg.success
            }), returnInfo && returnInfo.user && returnInfo.book && returnInfo.mode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                children: returnInfo.mode == 'return' ? 'Are you sure you want to accept the return of this book from this user?' : 'Are you sure you want to accept the loss of this book from this user?'
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
                className: "table",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "User"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "Book"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "Cost"
                    }), returnInfo.mode == 'lost' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      scope: "col",
                      children: "Note"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      children: returnInfo.user.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      children: returnInfo.book.title
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("td", {
                      className: returnInfo.book.cost == 0 ? '' : 'text-danger',
                      children: ["$", returnInfo.book.cost == 0 ? 0 : returnInfo.book.cost + '*']
                    }), returnInfo.mode == 'lost' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                      className: "text-danger",
                      children: "Fee dued to be calculated"
                    })]
                  })
                })]
              }), (returnInfo.book.cost != 0 || returnInfo.mode == 'lost') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "text-danger",
                children: "*Make sure all fees are paid before accepting."
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-bs-dismiss": "modal",
              onClick: function onClick() {
                if (returnInfo && returnInfo.user) document.getElementById('open-user-info-modal-button').click();
                setSelectedUser(returnInfo.user);
                setReturnInfo({
                  user: null,
                  book: null,
                  mode: null
                });
              },
              children: returnInfo && returnInfo.user ? 'Cancel' : 'Close'
            }), isReturning ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "btn p-0",
              style: {
                width: '90px'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.LoadingButton, {})
            }) : returnInfo.mode == 'return' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: 'btn btn-success' + (returnInfo && returnInfo.user ? '' : ' disabled'),
              onClick: returnBookHandler,
              children: "Accept now"
            }) : returnInfo.mode == 'lost' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: 'btn btn-danger' + (returnInfo && returnInfo.user ? '' : ' disabled'),
              onClick: returnBookHandler,
              children: "Accept Loss"
            }) : null]
          })]
        })
      })
    }), users && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
      className: "d-flex justify-content-center text-muted mt-3 mb-3",
      children: 'Showing ' + (numShow < users.length ? numShow : users.length) + ' of ' + users.length
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "d-inline d-flex justify-content-center",
      children: [users && users.length >= numShow && numShow > NUM_INCREMENTS && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        className: "btn btn-link",
        onClick: function onClick() {
          if (numShow < NUM_INCREMENTS * 2) setNumShow(NUM_INCREMENTS);else setNumShow(numShow - NUM_INCREMENTS);
        },
        children: "Show less"
      }), users && users.length > numShow && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        className: "btn btn-link",
        onClick: function onClick() {
          if (numShow + NUM_INCREMENTS > users.length) setNumShow(users.length);else setNumShow(numShow + NUM_INCREMENTS);
        },
        children: "Show more"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);

/***/ }),

/***/ "./resources/js/views/imports/sb-admin-2.js":
/*!**************************************************!*\
  !*** ./resources/js/views/imports/sb-admin-2.js ***!
  \**************************************************/
/***/ (() => {

(function ($) {
  'use strict'; // Start of use strict
  // Toggle the side navigation

  $('#sidebarToggle, #sidebarToggleTop').on('click', function (e) {
    $('body').toggleClass('sidebar-toggled');
    $('.sidebar').toggleClass('toggled');

    if ($('.sidebar').hasClass('toggled')) {
      $('.sidebar .collapse').collapse('hide');
    }
  }); // Close any open menu accordions when window is resized below 768px

  $(window).resize(function () {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    } // Toggle the side navigation when window is resized below 480px


    if ($(window).width() < 480 && !$('.sidebar').hasClass('toggled')) {
      $('body').addClass('sidebar-toggled');
      $('.sidebar').addClass('toggled');
      $('.sidebar .collapse').collapse('hide');
    }
  }); // Prevent the content wrapper from scrolling when the fixed side navigation hovered over

  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
          delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  }); // Scroll to top button appear

  $(document).on('scroll', function () {
    var scrollDistance = $(this).scrollTop();

    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  }); // Smooth scrolling using jQuery easing

  $(document).on('click', 'a.scroll-to-top', function (e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });
})(jQuery); // End of use strict

/***/ }),

/***/ "./resources/js/views/imports/sb-admin-2.min.js":
/*!******************************************************!*\
  !*** ./resources/js/views/imports/sb-admin-2.min.js ***!
  \******************************************************/
/***/ (() => {

/*!
 * Start Bootstrap - SB Admin 2 v4.1.3 (https://startbootstrap.com/theme/sb-admin-2)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin-2/blob/master/LICENSE)
 */
!function (l) {
  "use strict";

  l("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
    l("body").toggleClass("sidebar-toggled"), l(".sidebar").toggleClass("toggled"), l(".sidebar").hasClass("toggled") && l(".sidebar .collapse").collapse("hide");
  }), l(window).resize(function () {
    l(window).width() < 768 && l(".sidebar .collapse").collapse("hide"), l(window).width() < 480 && !l(".sidebar").hasClass("toggled") && (l("body").addClass("sidebar-toggled"), l(".sidebar").addClass("toggled"), l(".sidebar .collapse").collapse("hide"));
  }), l("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function (e) {
    var o;
    768 < l(window).width() && (o = (o = e.originalEvent).wheelDelta || -o.detail, this.scrollTop += 30 * (o < 0 ? 1 : -1), e.preventDefault());
  }), l(document).on("scroll", function () {
    100 < l(this).scrollTop() ? l(".scroll-to-top").fadeIn() : l(".scroll-to-top").fadeOut();
  }), l(document).on("click", "a.scroll-to-top", function (e) {
    var o = l(this);
    l("html, body").stop().animate({
      scrollTop: l(o.attr("href")).offset().top
    }, 1e3, "easeInOutExpo"), e.preventDefault();
  });
}(jQuery);

/***/ }),

/***/ "./resources/js/views/user/UserLayout.js":
/*!***********************************************!*\
  !*** ./resources/js/views/user/UserLayout.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _user_content_UserLog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user_content/UserLog */ "./resources/js/views/user/user_content/UserLog.js");
/* harmony import */ var _user_content_UserProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user_content/UserProfile */ "./resources/js/views/user/user_content/UserProfile.js");
/* harmony import */ var _imports_sb_admin_2_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../imports/sb-admin-2.min.css */ "./resources/js/views/imports/sb-admin-2.min.css");
/* harmony import */ var _imports_sb_admin_2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../imports/sb-admin-2.js */ "./resources/js/views/imports/sb-admin-2.js");
/* harmony import */ var _imports_sb_admin_2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_imports_sb_admin_2_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _imports_sb_admin_2_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../imports/sb-admin-2.min.js */ "./resources/js/views/imports/sb-admin-2.min.js");
/* harmony import */ var _imports_sb_admin_2_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_imports_sb_admin_2_min_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _user_content_CurrentlyBorrowedBooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user_content/CurrentlyBorrowedBooks */ "./resources/js/views/user/user_content/CurrentlyBorrowedBooks.js");
/* harmony import */ var _user_content_DeleteAccount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user_content/DeleteAccount */ "./resources/js/views/user/user_content/DeleteAccount.js");
/* harmony import */ var _user_content_ChangePassword__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user_content/ChangePassword */ "./resources/js/views/user/user_content/ChangePassword.js");
/* harmony import */ var _user_content_ChangeName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user_content/ChangeName */ "./resources/js/views/user/user_content/ChangeName.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var UserLayout = function UserLayout(props) {
  var _useRouteMatch = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useRouteMatch)(),
      path = _useRouteMatch.path,
      url = _useRouteMatch.url;

  var _ref = [props.user, props.setUser],
      user = _ref[0],
      setUser = _ref[1];
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useHistory)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showsSideBar = _useState2[0],
      setShowsSideBar = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      UserInfo = _useState4[0],
      setUserInfo = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/auth/user').then(function (res) {
      setUserInfo(res.data);
    })["catch"](function (err) {});
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
    id: "page-top",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      id: "wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("ul", {
        className: 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ' + (showsSideBar ? '' : ' toggled'),
        id: "accordionSidebar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("hr", {
          className: "sidebar-divider"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
            to: "".concat(url),
            className: "nav-link",
            children: "My Profile"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("hr", {
          className: "sidebar-divider"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          className: "sidebar-heading",
          children: "Activity"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
            to: "".concat(url, "/borrowed-books"),
            className: "nav-link",
            children: "Currently Borrowed books"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
            to: "".concat(url, "/logs"),
            className: "nav-link",
            children: "Logs"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("hr", {
          className: "sidebar-divider"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("button", {
          className: "btn btn-primary m-2",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#userAccount",
          "aria-expanded": "false",
          "aria-controls": "userAccount",
          children: ["Account ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_15__.FaChevronDown, {})]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: "collapse bg-primary text-center",
          id: "userAccount",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
              to: "".concat(url, "/delete-account"),
              className: "nav-link",
              children: "Delete Account"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("hr", {
            className: "sidebar-divider"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
              to: "".concat(url, "/change-password"),
              className: "nav-link",
              children: "Change Password"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
              to: "".concat(url, "/change-name"),
              className: "nav-link",
              children: "Change Name"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        id: "content-wrapper",
        className: "d-flex flex-column pt-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          id: "content",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: "container-fluid",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("button", {
              id: "sidebarToggleTop",
              className: "btn btn-link d-md-none rounded mr-3",
              onClick: function onClick() {
                return setShowsSideBar(!showsSideBar);
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
                style: {
                  maxHeight: '5vw',
                  opacity: '50%'
                },
                src: "/img/icons8-menu.svg"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Switch, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
                path: "".concat(path, "/logs"),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_user_content_UserLog__WEBPACK_IMPORTED_MODULE_3__.default, {})
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
                path: "".concat(path, "/borrowed-books"),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_user_content_CurrentlyBorrowedBooks__WEBPACK_IMPORTED_MODULE_8__.default, {})
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
                path: "".concat(path, "/delete-account"),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_user_content_DeleteAccount__WEBPACK_IMPORTED_MODULE_9__.default, {
                  user: user,
                  setUser: setUser
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
                path: "".concat(path, "/change-password"),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_user_content_ChangePassword__WEBPACK_IMPORTED_MODULE_10__.default, {
                  user: user,
                  setUser: setUser
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
                path: "".concat(path, "/change-name"),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_user_content_ChangeName__WEBPACK_IMPORTED_MODULE_11__.default, {
                  user: user,
                  setUser: setUser
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
                exact: true,
                path: path,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_user_content_UserProfile__WEBPACK_IMPORTED_MODULE_4__.default, {
                  user: props.user,
                  setUser: props.setUser
                })
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("footer", {
          className: "sticky-footer bg-none",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
            className: "container my-auto",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
              className: "copyright text-center my-auto",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                children: "Copyright \xA9 ABC Library 2021"
              })
            })
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserLayout);

/***/ }),

/***/ "./resources/js/views/user/user_content/ChangeName.js":
/*!************************************************************!*\
  !*** ./resources/js/views/user/user_content/ChangeName.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _functions_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../functions/cookies */ "./resources/js/functions/cookies.js");
/* harmony import */ var _components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../components/MessageAlert */ "./resources/js/components/MessageAlert.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var ChangePassword = function ChangePassword(props) {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useHistory)();
  var _ref = [props.user, props.setUser],
      user = _ref[0],
      setUser = _ref[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      old_name = _useState2[0],
      setOldName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      new_name = _useState4[0],
      setNewName = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isProcessing = _useState6[0],
      setProcessing = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    text: '',
    success: 0
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      msg = _useState8[0],
      setMsg = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    new_name: false,
    old_name: false
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      errors = _useState10[0],
      setErrors = _useState10[1];

  var hasInputErrors = function hasInputErrors() {
    return errors.old_name || errors.new_name || new_name == '' || old_name == '';
  };

  var changeNameHandler = function changeNameHandler() {
    setProcessing(true);
    setMsg({
      text: '',
      success: 0
    });

    if (hasInputErrors()) {
      setProcessing(false);
      return;
    }

    var changeNameInfo = {
      old_name: old_name,
      new_name: new_name
    };
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.post('/api/user/change-name', changeNameInfo).then(function (res) {
      (0,_functions_cookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)('token', res.data.access_token);
      setUser(res.data.user);
      setMsg({
        text: res.data.message,
        success: 1
      });
    })["catch"](function (err) {
      setMsg({
        text: err.response.data.error,
        success: 0
      });
    })["finally"](function () {
      setProcessing(false);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    style: {
      padding: '5% 5%'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "row justify-content-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "col-md-12 col-lg-10",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "wrap d-md-flex",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "p-4 p-md-5 w-100",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "d-flex",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "w-100",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
                  className: "mb-4",
                  children: "Change Name"
                })
              })
            }), msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
              msg: msg.text,
              success: msg.success
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "form-group mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  id: "old-name",
                  type: "text",
                  className: 'form-control' + (errors.old_name ? ' is-invalid' : ''),
                  placeholder: "Old Name",
                  onChange: function onChange(e) {
                    setOldName(e.target.value);
                    setMsg({
                      text: '',
                      success: 0
                    });
                    if (e.target.value === '') setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                      old_name: true
                    }));else setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                      old_name: false
                    }));
                  },
                  required: true
                }), errors.old_name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
                  className: "form-text text-danger",
                  children: "Name cannot be empty."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "form-group mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  id: "new-name",
                  type: "text",
                  className: 'form-control' + (errors.new_name ? ' is-invalid' : ''),
                  placeholder: "New Name",
                  onChange: function onChange(e) {
                    setNewName(e.target.value);
                    setMsg({
                      text: '',
                      success: 0
                    });

                    if (e.target.value === '') {
                      setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                        new_name: true
                      }));
                    } else setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                      new_name: false
                    }));
                  },
                  required: true
                }), errors.new_name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
                  className: "form-text text-danger",
                  children: "This field is required"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "form-group",
                children: isProcessing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.LoadingButton, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                  type: "button",
                  className: 'form-control btn btn-primary rounded submit px-3' + (hasInputErrors() ? ' disabled' : ''),
                  onClick: changeNameHandler,
                  children: "Change Name"
                })
              })]
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangePassword);

/***/ }),

/***/ "./resources/js/views/user/user_content/ChangePassword.js":
/*!****************************************************************!*\
  !*** ./resources/js/views/user/user_content/ChangePassword.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _functions_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../functions/cookies */ "./resources/js/functions/cookies.js");
/* harmony import */ var _components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../components/MessageAlert */ "./resources/js/components/MessageAlert.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var ChangePassword = function ChangePassword(props) {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useHistory)();
  var _ref = [props.user, props.setUser],
      user = _ref[0],
      setUser = _ref[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      old_password = _useState2[0],
      setOldPassword = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      confirmNewPassword = _useState4[0],
      setConfirmNewPassword = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      new_password = _useState6[0],
      setNewPassword = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isProcessing = _useState8[0],
      setProcessing = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    text: '',
    success: 0
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      msg = _useState10[0],
      setMsg = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    new_password: false,
    confirmNewPassword: false,
    old_password: false
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      errors = _useState12[0],
      setErrors = _useState12[1];

  var hasInputErrors = function hasInputErrors() {
    return errors.old_password || errors.confirmNewPassword || errors.new_password || confirmNewPassword == '' || new_password == '' || old_password == '';
  };

  var changePasswordHandler = function changePasswordHandler() {
    setProcessing(true);
    setMsg({
      text: '',
      success: 0
    });

    if (hasInputErrors()) {
      setProcessing(false);
      return;
    }

    var changePasswordInfo = {
      old_password: old_password,
      confirmNewPassword: confirmNewPassword,
      new_password: new_password
    };
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.post('/api/user/change-password', changePasswordInfo).then(function (res) {
      (0,_functions_cookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)('token', res.data.access_token);
      setUser(res.data.user);
      setMsg({
        text: res.data.message,
        success: 1
      });
    })["catch"](function (err) {
      setMsg({
        text: err.response.data.error,
        success: 0
      });
    })["finally"](function () {
      setProcessing(false);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    style: {
      padding: '5% 5%'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "row justify-content-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "col-md-12 col-lg-10",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "wrap d-md-flex",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "p-4 p-md-5 w-100",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "d-flex",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "w-100",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
                  className: "mb-4",
                  children: "Change Password"
                })
              })
            }), msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
              msg: msg.text,
              success: msg.success
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "form-group mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  id: "old-password",
                  type: "password",
                  className: 'form-control' + (errors.old_password ? ' is-invalid' : ''),
                  placeholder: "Old Password",
                  onChange: function onChange(e) {
                    setOldPassword(e.target.value);
                    console.log(e.target.value);
                    setMsg({
                      text: '',
                      success: 0
                    });
                    if (e.target.value === '') setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                      old_password: true
                    }));else setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                      old_password: false
                    }));
                  },
                  required: true
                }), errors.old_password && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
                  className: "form-text text-danger",
                  children: "Password cannot be empty."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "form-group mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  id: "new-password",
                  type: "password",
                  className: 'form-control' + (errors.new_password ? ' is-invalid' : ''),
                  placeholder: "New password",
                  onChange: function onChange(e) {
                    setNewPassword(e.target.value);
                    setMsg({
                      text: '',
                      success: 0
                    });

                    if (e.target.value === '') {
                      setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                        new_password: true
                      }));
                    } else setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                      new_password: false
                    }));
                  },
                  required: true
                }), errors.new_password && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
                  className: "form-text text-danger",
                  children: "This field is required"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "form-group mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  id: "confirm-new-password",
                  type: "password",
                  className: 'form-control' + (errors.confirmNewPassword ? ' is-invalid' : ''),
                  placeholder: "Confirm New password",
                  onChange: function onChange(e) {
                    setConfirmNewPassword(e.target.value);
                    setMsg({
                      text: '',
                      success: 0
                    });

                    if (e.target.value != new_password) {
                      setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                        confirmNewPassword: true
                      }));
                      console.log(confirmNewPassword);
                    } else setErrors(_objectSpread(_objectSpread({}, errors), {}, {
                      confirmNewPassword: false
                    }));
                  },
                  required: true
                }), errors.confirmNewPassword && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
                  className: "form-text text-danger",
                  children: "Password does not match."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "form-group",
                children: isProcessing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.LoadingButton, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                  type: "button",
                  className: 'form-control btn btn-primary rounded submit px-3' + (hasInputErrors() ? ' disabled' : ''),
                  onClick: changePasswordHandler,
                  children: "Change Password"
                })
              })]
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangePassword);

/***/ }),

/***/ "./resources/js/views/user/user_content/CurrentlyBorrowedBooks.js":
/*!************************************************************************!*\
  !*** ./resources/js/views/user/user_content/CurrentlyBorrowedBooks.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var _components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/MessageAlert */ "./resources/js/components/MessageAlert.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var CurrentlyBorrowedBooks = function CurrentlyBorrowedBooks() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      bookUser = _useState4[0],
      setBookUser = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    text: '',
    success: 0
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      msg = _useState6[0],
      setMsg = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setLoading(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get("/api/user/books").then(function (res) {
      var books = res.data;
      setBookUser(books);
      var count = 0;

      for (var i in books) {
        if (books[i] && books[i].expired) {
          count += 1;
        }
      }

      if (count > 0) {
        setMsg({
          text: 'You have ' + count + ' overdue book(s). Return them now to avoid further charges.',
          success: 0
        });
      }
    })["catch"](function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
      }

      console.log(error);
      console.log(error.message);
    })["finally"](function () {
      setLoading(false);
    });
  }, []);

  var Modal = function Modal(value, i) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "modal fade",
      id: 'modal-book' + value.id,
      tabIndex: "-1",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "modal-dialog modal-dialog-centered modal-xl",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
              className: "modal-title",
              id: "exampleModalLabel",
              children: "ABC Library"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              type: "button",
              className: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "modal-body",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "container",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "col-lg-3",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                    src: value.image || '/img/book-null-img.png',
                    className: "img-fluid rounded",
                    alt: "..."
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("table", {
                    className: "table small",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("thead", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                            children: value.title
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {})]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tbody", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          className: "fw-bold",
                          children: "Author"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          children: value.author
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          className: "fw-bold",
                          children: "Publisher"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          children: value.publisher.name
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          className: "fw-bold",
                          children: "Year"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          children: value.year
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          className: "fw-bold",
                          children: "Category"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          children: value.category.name
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          className: "fw-bold",
                          children: "Stock"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                          children: value.stock == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                            className: "text-danger",
                            children: "Out of Stock"
                          }) : value.stock
                        })]
                      })]
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "col-lg-5",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                    children: "Description"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
                    children: value.description
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {})]
                })]
              })
            })
          })]
        })
      })
    }, i);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "row mt-4 mb-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h4", {
        children: ["Currently Borrowed Books: ", bookUser ? bookUser.length : 0]
      })
    }), msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
      msg: msg.text,
      success: msg.success
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "overflow-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("table", {
        className: "table",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
              className: "text-center",
              scope: "col",
              children: "Book"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
              scope: "col",
              children: "ID"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
              scope: "col",
              children: "Title"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
              scope: "col",
              children: "Borrow Date"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
              scope: "col",
              children: "Return Date"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
              scope: "col",
              children: "Note"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tbody", {
          children: bookUser && bookUser.map(function (bookUser, i) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                className: "d-flex justify-content-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                  className: "align-middle",
                  style: {
                    maxHeight: '20vh',
                    cursor: 'pointer'
                  },
                  src: bookUser.image || '/img/book-null-img.png',
                  alt: "...",
                  "data-bs-toggle": "modal",
                  "data-bs-target": '#modal-book' + bookUser.id
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                scope: "row",
                children: bookUser.id
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                children: bookUser.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                children: bookUser.borrow_date
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                className: bookUser.expired ? 'text-danger' : '',
                children: bookUser.return_date
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
                children: [bookUser.expired && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                    className: "text-danger",
                    children: ["Return late: ", bookUser.days_past_expired || '0', " days"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                    className: " text-danger ",
                    children: ["Fine: $", bookUser.cost || '0']
                  })]
                }), Modal(bookUser, i)]
              })]
            }, i);
          })
        })]
      })
    }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_3__.Loading, {
      height: "1vh",
      size: "2rem"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentlyBorrowedBooks);

/***/ }),

/***/ "./resources/js/views/user/user_content/DeleteAccount.js":
/*!***************************************************************!*\
  !*** ./resources/js/views/user/user_content/DeleteAccount.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../components/MessageAlert */ "./resources/js/components/MessageAlert.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var _functions_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../functions/cookies */ "./resources/js/functions/cookies.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var DeleteAccount = function DeleteAccount(props) {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useHistory)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isProcessing = _useState2[0],
      setProcessing = _useState2[1];

  var _ref = [props.user, props.setUser],
      user = _ref[0],
      setUser = _ref[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    text: '',
    success: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      msg = _useState4[0],
      setMsg = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      password = _useState6[0],
      setPassword = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      passwordErr = _useState8[0],
      setPasswordErr = _useState8[1];

  var deleteAccountHandler = function deleteAccountHandler() {
    if (password === '') {
      setMsg({
        text: 'Password cannot be empty.',
        success: 0
      });
      return;
    }

    setProcessing(true);
    var success = false;
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.post('/api/user/delete-account', {
      password: password
    }).then(function (res) {
      (0,_functions_cookies__WEBPACK_IMPORTED_MODULE_6__.deleteCookie)('token');
      (0,_functions_cookies__WEBPACK_IMPORTED_MODULE_6__.setCookie)('delete-account-success', true, 0.01);
      success = true;
    })["catch"](function (err) {
      setMsg({
        text: err.response.data.error ? err.response.data.error : 'There was a problem. Try again later.',
        success: 0
      });
    })["finally"](function () {
      setProcessing(false);

      if (success) {
        setUser(null);
        history.push('/delete-account-success');
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "row mt-2 mb-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
        className: "col-lg-4",
        children: "Delete Account"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
      children: "Deleting your ABC Library account is an IRREVERSIBLE action. After you click delete, there will be no going back."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "col-12 col-lg-6 pl-0",
      children: [msg && msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__.default, {
        msg: msg.text,
        success: msg.success
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
        type: "password",
        className: 'form-control mb-3' + (passwordErr ? ' is-invalid' : ''),
        id: "password",
        value: password,
        placeholder: "Password...",
        onChange: function onChange(e) {
          if (e.target.value === '') setPasswordErr(true);else setPasswordErr(false);
          setPassword(e.target.value);
        }
      }), isProcessing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        className: "btn p-0",
        style: {
          width: '90px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.LoadingButton, {
          color: "danger"
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
        className: "btn btn-danger",
        onClick: deleteAccountHandler,
        disabled: passwordErr || password === '',
        children: "Delete Account Now"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteAccount);

/***/ }),

/***/ "./resources/js/views/user/user_content/UserLog.js":
/*!*********************************************************!*\
  !*** ./resources/js/views/user/user_content/UserLog.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_MessageAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../components/MessageAlert */ "./resources/js/components/MessageAlert.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var Logs = function Logs() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    text: '',
    success: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      msg = _useState4[0],
      setMsg = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      logs = _useState6[0],
      setLogs = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      searchValue = _useState8[0],
      setSearchValue = _useState8[1];

  var NUM_INCREMENTS = 10;

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(NUM_INCREMENTS),
      _useState10 = _slicedToArray(_useState9, 2),
      numShow = _useState10[0],
      setNumShow = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    getLogsFromServer();
  }, []);

  var getLogsFromServer = function getLogsFromServer() {
    setLoading(true);
    _functions_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/api/user/logs').then(function (res) {
      setLogs(res.data);
    })["catch"](function (err) {
      console.log(err);
    })["finally"](function () {
      setLoading(false);
    });
  };

  var searchMatches = function searchMatches(item, value) {
    return item.id == value || item.title.toLowerCase().includes(value.toLowerCase()) || item.book && item.book.title.toLowerCase().includes(value.toLowerCase()) || item.description.toLowerCase().includes(value.toLowerCase()) || item.date_time.includes(value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "row mt-2 mb-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
        className: "col-lg-4",
        children: "All logs"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
        type: "text",
        className: "col-lg-8 form-control border-0 small",
        placeholder: "Search id, title, user, book, description, date...",
        "aria-label": "Search",
        "aria-describedby": "basic-addon2",
        onChange: function onChange(e) {
          setSearchValue(e.target.value);
          if (e.target.value === '') setNumShow(NUM_INCREMENTS);else if (logs && logs.length > 0) setNumShow(logs.length);
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "overflow-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
        className: "table",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "ID"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Title"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Book"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Date/time"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              scope: "col",
              children: "Action"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
          children: logs && logs.map(function (log, i) {
            if (searchValue && (searchValue == '' || !searchMatches(log, searchValue)) || i + 1 > numShow) return null;else {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                  scope: "row",
                  children: log.id
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: log.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: log.book ? log.book.title : 'n/a'
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                  children: log.date_time
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("td", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                    type: "button",
                    className: "btn btn-outline-primary",
                    "data-bs-toggle": "modal",
                    "data-bs-target": '#logInfoModal-' + log.id,
                    children: "More info"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                    className: "modal fade",
                    id: 'logInfoModal-' + log.id,
                    tabIndex: "-1",
                    "aria-labelledby": 'logInfoModalLabel-' + log.id,
                    "aria-hidden": "true",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "modal-dialog",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: "modal-content",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                          className: "modal-header",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
                            className: "modal-title",
                            id: 'logInfoModalLabel-' + log.id,
                            children: log.id
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                            type: "button",
                            className: "btn-close",
                            "data-bs-dismiss": "modal",
                            "aria-label": "Close"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                          className: "modal-body",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("table", {
                            className: "table",
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tbody", {
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                  children: "Title"
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                  children: log.title
                                })]
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                  children: "Book"
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                  children: log.book ? log.book.title : 'n/a'
                                })]
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                  children: "Description"
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                  children: log.description
                                })]
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                  children: "Date/time"
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                                  children: log.date_time
                                })]
                              })]
                            })
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                          className: "modal-footer",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                            type: "button",
                            className: "btn btn-secondary",
                            "data-bs-dismiss": "modal",
                            children: "Close"
                          })
                        })]
                      })
                    })
                  })]
                })]
              }, i);
            }
          })
        })]
      })
    }), logs && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
      className: "d-flex justify-content-center text-muted mt-3 mb-3",
      children: 'Showing ' + (numShow < logs.length ? numShow : logs.length) + ' of ' + logs.length
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "d-inline d-flex justify-content-center",
      children: [logs && logs.length >= numShow && numShow > NUM_INCREMENTS && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        className: "btn btn-link",
        onClick: function onClick() {
          if (numShow < NUM_INCREMENTS * 2) setNumShow(NUM_INCREMENTS);else setNumShow(numShow - NUM_INCREMENTS);
        },
        children: "Show less"
      }), logs && logs.length > numShow && searchValue === '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        className: "btn btn-link",
        onClick: function onClick() {
          if (numShow + NUM_INCREMENTS > logs.length) setNumShow(logs.length);else setNumShow(numShow + NUM_INCREMENTS);
        },
        children: "Show more"
      })]
    }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__.Loading, {
      height: "1vh",
      size: "2rem"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logs);

/***/ }),

/***/ "./resources/js/views/user/user_content/UserProfile.js":
/*!*************************************************************!*\
  !*** ./resources/js/views/user/user_content/UserProfile.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../functions/axios */ "./resources/js/functions/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Loading */ "./resources/js/components/Loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var UserProfile = function UserProfile(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var _ref = [props.user, props.setUser],
      user = _ref[0],
      setUser = _ref[1];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "row mt-4 mb-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
        className: "col-lg-4",
        children: "User Profile"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("table", {
      className: "table",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
            scope: "row",
            children: "Name"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
            children: user.name
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
            scope: "row",
            children: "Email"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
            children: user.email
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
            scope: "row",
            children: "Phone"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
            children: user.phone
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
            scope: "row",
            children: "ID"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
            children: user.id
          })]
        })]
      })
    }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_3__.Loading, {
      height: "1vh",
      size: "2rem"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserProfile);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/views/imports/sb-admin-2.min.css":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/views/imports/sb-admin-2.min.css ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Start Bootstrap - SB Admin 2 v4.1.3 (https://startbootstrap.com/theme/sb-admin-2)\n * Copyright 2013-2021 Start Bootstrap\n * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin-2/blob/master/LICENSE)\n *//*!\n * Bootstrap v4.6.0 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--blue:#4e73df;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#e74a3b;--orange:#fd7e14;--yellow:#f6c23e;--green:#1cc88a;--teal:#20c9a6;--cyan:#36b9cc;--white:#fff;--gray:#858796;--gray-dark:#5a5c69;--primary:#4e73df;--secondary:#858796;--success:#1cc88a;--info:#36b9cc;--warning:#f6c23e;--danger:#e74a3b;--light:#f8f9fc;--dark:#5a5c69;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:\"Nunito\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*,::after,::before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:Nunito,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1rem;font-weight:400;line-height:1.5;color:#858796;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#4e73df;text-decoration:none;background-color:transparent}a:hover{color:#224abe;text-decoration:underline}a:not([href]):not([class]){color:inherit;text-decoration:none}a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#858796;text-align:left;caption-side:bottom}th{text-align:inherit;text-align:-webkit-match-parent}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-weight:400;line-height:1.2}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#858796}.blockquote-footer::before{content:\"\\2014\\00A0\"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dddfeb;border-radius:.35rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#858796}code{font-size:87.5%;color:#e83e8c;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#3a3b45;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#3a3b45}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl{width:100%;padding-right:.75rem;padding-left:.75rem;margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}.row{display:flex;flex-wrap:wrap;margin-right:-.75rem;margin-left:-.75rem}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{position:relative;width:100%;padding-right:.75rem;padding-left:.75rem}.col{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-1>*{flex:0 0 100%;max-width:100%}.row-cols-2>*{flex:0 0 50%;max-width:50%}.row-cols-3>*{flex:0 0 33.33333%;max-width:33.33333%}.row-cols-4>*{flex:0 0 25%;max-width:25%}.row-cols-5>*{flex:0 0 20%;max-width:20%}.row-cols-6>*{flex:0 0 16.66667%;max-width:16.66667%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.33333%;max-width:8.33333%}.col-2{flex:0 0 16.66667%;max-width:16.66667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.33333%;max-width:33.33333%}.col-5{flex:0 0 41.66667%;max-width:41.66667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.33333%;max-width:58.33333%}.col-8{flex:0 0 66.66667%;max-width:66.66667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.33333%;max-width:83.33333%}.col-11{flex:0 0 91.66667%;max-width:91.66667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.33333%}.offset-2{margin-left:16.66667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333%}.offset-5{margin-left:41.66667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333%}.offset-8{margin-left:66.66667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333%}.offset-11{margin-left:91.66667%}@media (min-width:576px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-sm-1>*{flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{flex:0 0 33.33333%;max-width:33.33333%}.row-cols-sm-4>*{flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{flex:0 0 16.66667%;max-width:16.66667%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.33333%;max-width:8.33333%}.col-sm-2{flex:0 0 16.66667%;max-width:16.66667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.33333%;max-width:33.33333%}.col-sm-5{flex:0 0 41.66667%;max-width:41.66667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.33333%;max-width:58.33333%}.col-sm-8{flex:0 0 66.66667%;max-width:66.66667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.33333%;max-width:83.33333%}.col-sm-11{flex:0 0 91.66667%;max-width:91.66667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333%}.offset-sm-2{margin-left:16.66667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333%}.offset-sm-5{margin-left:41.66667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333%}.offset-sm-8{margin-left:66.66667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333%}.offset-sm-11{margin-left:91.66667%}}@media (min-width:768px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-md-1>*{flex:0 0 100%;max-width:100%}.row-cols-md-2>*{flex:0 0 50%;max-width:50%}.row-cols-md-3>*{flex:0 0 33.33333%;max-width:33.33333%}.row-cols-md-4>*{flex:0 0 25%;max-width:25%}.row-cols-md-5>*{flex:0 0 20%;max-width:20%}.row-cols-md-6>*{flex:0 0 16.66667%;max-width:16.66667%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.33333%;max-width:8.33333%}.col-md-2{flex:0 0 16.66667%;max-width:16.66667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.33333%;max-width:33.33333%}.col-md-5{flex:0 0 41.66667%;max-width:41.66667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.33333%;max-width:58.33333%}.col-md-8{flex:0 0 66.66667%;max-width:66.66667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.33333%;max-width:83.33333%}.col-md-11{flex:0 0 91.66667%;max-width:91.66667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333%}.offset-md-2{margin-left:16.66667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333%}.offset-md-5{margin-left:41.66667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333%}.offset-md-8{margin-left:66.66667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333%}.offset-md-11{margin-left:91.66667%}}@media (min-width:992px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-lg-1>*{flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{flex:0 0 33.33333%;max-width:33.33333%}.row-cols-lg-4>*{flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{flex:0 0 16.66667%;max-width:16.66667%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.33333%;max-width:8.33333%}.col-lg-2{flex:0 0 16.66667%;max-width:16.66667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.33333%;max-width:33.33333%}.col-lg-5{flex:0 0 41.66667%;max-width:41.66667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.33333%;max-width:58.33333%}.col-lg-8{flex:0 0 66.66667%;max-width:66.66667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.33333%;max-width:83.33333%}.col-lg-11{flex:0 0 91.66667%;max-width:91.66667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333%}.offset-lg-2{margin-left:16.66667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333%}.offset-lg-5{margin-left:41.66667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333%}.offset-lg-8{margin-left:66.66667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333%}.offset-lg-11{margin-left:91.66667%}}@media (min-width:1200px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-xl-1>*{flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{flex:0 0 33.33333%;max-width:33.33333%}.row-cols-xl-4>*{flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{flex:0 0 16.66667%;max-width:16.66667%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.33333%;max-width:8.33333%}.col-xl-2{flex:0 0 16.66667%;max-width:16.66667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.33333%;max-width:33.33333%}.col-xl-5{flex:0 0 41.66667%;max-width:41.66667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.33333%;max-width:58.33333%}.col-xl-8{flex:0 0 66.66667%;max-width:66.66667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.33333%;max-width:83.33333%}.col-xl-11{flex:0 0 91.66667%;max-width:91.66667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333%}.offset-xl-2{margin-left:16.66667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333%}.offset-xl-5{margin-left:41.66667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333%}.offset-xl-8{margin-left:66.66667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333%}.offset-xl-11{margin-left:91.66667%}}.table{width:100%;margin-bottom:1rem;color:#858796}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #e3e6f0}.table thead th{vertical-align:bottom;border-bottom:2px solid #e3e6f0}.table tbody+tbody{border-top:2px solid #e3e6f0}.table-sm td,.table-sm th{padding:.3rem}.table-bordered{border:1px solid #e3e6f0}.table-bordered td,.table-bordered th{border:1px solid #e3e6f0}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{color:#858796;background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#cdd8f6}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#a3b6ee}.table-hover .table-primary:hover{background-color:#b7c7f2}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#b7c7f2}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#dddde2}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#c0c1c8}.table-hover .table-secondary:hover{background-color:#cfcfd6}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#cfcfd6}.table-success,.table-success>td,.table-success>th{background-color:#bff0de}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#89e2c2}.table-hover .table-success:hover{background-color:#aaebd3}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#aaebd3}.table-info,.table-info>td,.table-info>th{background-color:#c7ebf1}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#96dbe4}.table-hover .table-info:hover{background-color:#b3e4ec}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#b3e4ec}.table-warning,.table-warning>td,.table-warning>th{background-color:#fceec9}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#fadf9b}.table-hover .table-warning:hover{background-color:#fbe6b1}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#fbe6b1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f8ccc8}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#f3a199}.table-hover .table-danger:hover{background-color:#f5b7b1}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f5b7b1}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#fbfcfd}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#d1d1d5}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#a9aab1}.table-hover .table-dark:hover{background-color:#c4c4c9}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#c4c4c9}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#5a5c69;border-color:#6c6e7e}.table .thead-light th{color:#6e707e;background-color:#eaecf4;border-color:#e3e6f0}.table-dark{color:#fff;background-color:#5a5c69}.table-dark td,.table-dark th,.table-dark thead th{border-color:#6c6e7e}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:rgba(255,255,255,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#6e707e;background-color:#fff;background-clip:padding-box;border:1px solid #d1d3e2;border-radius:.35rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #6e707e}.form-control:focus{color:#6e707e;background-color:#fff;border-color:#bac8f3;outline:0;box-shadow:0 0 0 .2rem rgba(78,115,223,.25)}.form-control::-moz-placeholder{color:#858796;opacity:1}.form-control:-ms-input-placeholder{color:#858796;opacity:1}.form-control::placeholder{color:#858796;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#eaecf4;opacity:1}input[type=date].form-control,input[type=datetime-local].form-control,input[type=month].form-control,input[type=time].form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none}select.form-control:focus::-ms-value{color:#6e707e;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;font-size:1rem;line-height:1.5;color:#858796;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.form-control[multiple],select.form-control[size]{height:auto}textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{color:#858796}.form-check-label{margin-bottom:0}.form-check-inline{display:inline-flex;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#1cc88a}.valid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(28,200,138,.9);border-radius:.35rem}.form-row>.col>.valid-tooltip,.form-row>[class*=col-]>.valid-tooltip{left:5px}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:#1cc88a;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%231cc88a' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#1cc88a;box-shadow:0 0 0 .2rem rgba(28,200,138,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-valid,.was-validated .custom-select:valid{border-color:#1cc88a;padding-right:calc(.75em + 2.3125rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%235a5c69' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right .75rem center/8px 10px no-repeat,#fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%231cc88a' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) no-repeat}.custom-select.is-valid:focus,.was-validated .custom-select:valid:focus{border-color:#1cc88a;box-shadow:0 0 0 .2rem rgba(28,200,138,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#1cc88a}.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#1cc88a}.custom-control-input.is-valid~.custom-control-label::before,.was-validated .custom-control-input:valid~.custom-control-label::before{border-color:#1cc88a}.custom-control-input.is-valid:checked~.custom-control-label::before,.was-validated .custom-control-input:valid:checked~.custom-control-label::before{border-color:#34e3a4;background-color:#34e3a4}.custom-control-input.is-valid:focus~.custom-control-label::before,.was-validated .custom-control-input:valid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(28,200,138,.25)}.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label::before,.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label::before{border-color:#1cc88a}.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#1cc88a}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{border-color:#1cc88a;box-shadow:0 0 0 .2rem rgba(28,200,138,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#e74a3b}.invalid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(231,74,59,.9);border-radius:.35rem}.form-row>.col>.invalid-tooltip,.form-row>[class*=col-]>.invalid-tooltip{left:5px}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#e74a3b;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23e74a3b' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23e74a3b' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#e74a3b;box-shadow:0 0 0 .2rem rgba(231,74,59,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-invalid,.was-validated .custom-select:invalid{border-color:#e74a3b;padding-right:calc(.75em + 2.3125rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%235a5c69' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right .75rem center/8px 10px no-repeat,#fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23e74a3b' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23e74a3b' stroke='none'/%3e%3c/svg%3e\") center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) no-repeat}.custom-select.is-invalid:focus,.was-validated .custom-select:invalid:focus{border-color:#e74a3b;box-shadow:0 0 0 .2rem rgba(231,74,59,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#e74a3b}.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#e74a3b}.custom-control-input.is-invalid~.custom-control-label::before,.was-validated .custom-control-input:invalid~.custom-control-label::before{border-color:#e74a3b}.custom-control-input.is-invalid:checked~.custom-control-label::before,.was-validated .custom-control-input:invalid:checked~.custom-control-label::before{border-color:#ed7468;background-color:#ed7468}.custom-control-input.is-invalid:focus~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(231,74,59,.25)}.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label::before{border-color:#e74a3b}.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#e74a3b}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{border-color:#e74a3b;box-shadow:0 0 0 .2rem rgba(231,74,59,.25)}.form-inline{display:flex;flex-flow:row wrap;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{display:flex;align-items:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:flex;flex:0 0 auto;flex-flow:row wrap;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .custom-select,.form-inline .input-group{width:auto}.form-inline .form-check{display:flex;align-items:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{align-items:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;color:#858796;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.35rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#858796;text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(78,115,223,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#4e73df;border-color:#4e73df}.btn-primary:hover{color:#fff;background-color:#2e59d9;border-color:#2653d4}.btn-primary.focus,.btn-primary:focus{color:#fff;background-color:#2e59d9;border-color:#2653d4;box-shadow:0 0 0 .2rem rgba(105,136,228,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#4e73df;border-color:#4e73df}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#2653d4;border-color:#244ec9}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(105,136,228,.5)}.btn-secondary{color:#fff;background-color:#858796;border-color:#858796}.btn-secondary:hover{color:#fff;background-color:#717384;border-color:#6b6d7d}.btn-secondary.focus,.btn-secondary:focus{color:#fff;background-color:#717384;border-color:#6b6d7d;box-shadow:0 0 0 .2rem rgba(151,153,166,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#858796;border-color:#858796}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#6b6d7d;border-color:#656776}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(151,153,166,.5)}.btn-success{color:#fff;background-color:#1cc88a;border-color:#1cc88a}.btn-success:hover{color:#fff;background-color:#17a673;border-color:#169b6b}.btn-success.focus,.btn-success:focus{color:#fff;background-color:#17a673;border-color:#169b6b;box-shadow:0 0 0 .2rem rgba(62,208,156,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#1cc88a;border-color:#1cc88a}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#169b6b;border-color:#149063}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(62,208,156,.5)}.btn-info{color:#fff;background-color:#36b9cc;border-color:#36b9cc}.btn-info:hover{color:#fff;background-color:#2c9faf;border-color:#2a96a5}.btn-info.focus,.btn-info:focus{color:#fff;background-color:#2c9faf;border-color:#2a96a5;box-shadow:0 0 0 .2rem rgba(84,196,212,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#36b9cc;border-color:#36b9cc}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#2a96a5;border-color:#278c9b}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(84,196,212,.5)}.btn-warning{color:#fff;background-color:#f6c23e;border-color:#f6c23e}.btn-warning:hover{color:#fff;background-color:#f4b619;border-color:#f4b30d}.btn-warning.focus,.btn-warning:focus{color:#fff;background-color:#f4b619;border-color:#f4b30d;box-shadow:0 0 0 .2rem rgba(247,203,91,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#fff;background-color:#f6c23e;border-color:#f6c23e}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#fff;background-color:#f4b30d;border-color:#e9aa0b}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(247,203,91,.5)}.btn-danger{color:#fff;background-color:#e74a3b;border-color:#e74a3b}.btn-danger:hover{color:#fff;background-color:#e02d1b;border-color:#d52a1a}.btn-danger.focus,.btn-danger:focus{color:#fff;background-color:#e02d1b;border-color:#d52a1a;box-shadow:0 0 0 .2rem rgba(235,101,88,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#e74a3b;border-color:#e74a3b}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#d52a1a;border-color:#ca2819}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(235,101,88,.5)}.btn-light{color:#3a3b45;background-color:#f8f9fc;border-color:#f8f9fc}.btn-light:hover{color:#3a3b45;background-color:#dde2f1;border-color:#d4daed}.btn-light.focus,.btn-light:focus{color:#3a3b45;background-color:#dde2f1;border-color:#d4daed;box-shadow:0 0 0 .2rem rgba(220,221,225,.5)}.btn-light.disabled,.btn-light:disabled{color:#3a3b45;background-color:#f8f9fc;border-color:#f8f9fc}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#3a3b45;background-color:#d4daed;border-color:#cbd3e9}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,221,225,.5)}.btn-dark{color:#fff;background-color:#5a5c69;border-color:#5a5c69}.btn-dark:hover{color:#fff;background-color:#484a54;border-color:#42444e}.btn-dark.focus,.btn-dark:focus{color:#fff;background-color:#484a54;border-color:#42444e;box-shadow:0 0 0 .2rem rgba(115,116,128,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#5a5c69;border-color:#5a5c69}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#42444e;border-color:#3d3e47}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(115,116,128,.5)}.btn-outline-primary{color:#4e73df;border-color:#4e73df}.btn-outline-primary:hover{color:#fff;background-color:#4e73df;border-color:#4e73df}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 .2rem rgba(78,115,223,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#4e73df;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#4e73df;border-color:#4e73df}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(78,115,223,.5)}.btn-outline-secondary{color:#858796;border-color:#858796}.btn-outline-secondary:hover{color:#fff;background-color:#858796;border-color:#858796}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 .2rem rgba(133,135,150,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#858796;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#858796;border-color:#858796}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(133,135,150,.5)}.btn-outline-success{color:#1cc88a;border-color:#1cc88a}.btn-outline-success:hover{color:#fff;background-color:#1cc88a;border-color:#1cc88a}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 .2rem rgba(28,200,138,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#1cc88a;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#1cc88a;border-color:#1cc88a}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(28,200,138,.5)}.btn-outline-info{color:#36b9cc;border-color:#36b9cc}.btn-outline-info:hover{color:#fff;background-color:#36b9cc;border-color:#36b9cc}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 .2rem rgba(54,185,204,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#36b9cc;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#36b9cc;border-color:#36b9cc}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(54,185,204,.5)}.btn-outline-warning{color:#f6c23e;border-color:#f6c23e}.btn-outline-warning:hover{color:#fff;background-color:#f6c23e;border-color:#f6c23e}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 .2rem rgba(246,194,62,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#f6c23e;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#fff;background-color:#f6c23e;border-color:#f6c23e}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(246,194,62,.5)}.btn-outline-danger{color:#e74a3b;border-color:#e74a3b}.btn-outline-danger:hover{color:#fff;background-color:#e74a3b;border-color:#e74a3b}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 .2rem rgba(231,74,59,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#e74a3b;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#e74a3b;border-color:#e74a3b}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(231,74,59,.5)}.btn-outline-light{color:#f8f9fc;border-color:#f8f9fc}.btn-outline-light:hover{color:#3a3b45;background-color:#f8f9fc;border-color:#f8f9fc}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,252,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fc;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#3a3b45;background-color:#f8f9fc;border-color:#f8f9fc}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,252,.5)}.btn-outline-dark{color:#5a5c69;border-color:#5a5c69}.btn-outline-dark:hover{color:#fff;background-color:#5a5c69;border-color:#5a5c69}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 .2rem rgba(90,92,105,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#5a5c69;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#5a5c69;border-color:#5a5c69}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(90,92,105,.5)}.btn-link{font-weight:400;color:#4e73df;text-decoration:none}.btn-link:hover{color:#224abe;text-decoration:underline}.btn-link.focus,.btn-link:focus{text-decoration:underline}.btn-link.disabled,.btn-link:disabled{color:#858796;pointer-events:none}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height .15s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.dropdown,.dropleft,.dropright,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:.85rem;color:#858796;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid #e3e6f0;border-radius:.35rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-toggle::after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle::after{display:none}.dropleft .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty::after{margin-left:0}.dropleft .dropdown-toggle::before{vertical-align:0}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #eaecf4}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#3a3b45;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#2e2f37;text-decoration:none;background-color:#eaecf4}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#4e73df}.dropdown-item.disabled,.dropdown-item:disabled{color:#b7b9cc;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#858796;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#3a3b45}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn:hover,.btn-group>.btn:hover{z-index:1}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control{margin-left:-1px}.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:flex;align-items:center}.input-group>.custom-file:not(:first-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group:not(.has-validation)>.custom-file:not(:last-child) .custom-file-label::after,.input-group:not(.has-validation)>.custom-select:not(:last-child),.input-group:not(.has-validation)>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>.custom-file:nth-last-child(n+3) .custom-file-label::after,.input-group.has-validation>.custom-select:nth-last-child(n+3),.input-group.has-validation>.form-control:nth-last-child(n+3){border-top-right-radius:0;border-bottom-right-radius:0}.input-group-append,.input-group-prepend{display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn:focus,.input-group-prepend .btn:focus{z-index:3}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#6e707e;text-align:center;white-space:nowrap;background-color:#eaecf4;border:1px solid #d1d3e2;border-radius:.35rem}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea){height:calc(1.5em + 1rem + 2px)}.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea){height:calc(1.5em + .5rem + 2px)}.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1.75rem}.input-group.has-validation>.input-group-append:nth-last-child(n+3)>.btn,.input-group.has-validation>.input-group-append:nth-last-child(n+3)>.input-group-text,.input-group:not(.has-validation)>.input-group-append:not(:last-child)>.btn,.input-group:not(.has-validation)>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;z-index:1;display:block;min-height:1.5rem;padding-left:1.5rem;-webkit-print-color-adjust:exact;color-adjust:exact}.custom-control-inline{display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;left:0;z-index:-1;width:1rem;height:1.25rem;opacity:0}.custom-control-input:checked~.custom-control-label::before{color:#fff;border-color:#4e73df;background-color:#4e73df}.custom-control-input:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(78,115,223,.25)}.custom-control-input:focus:not(:checked)~.custom-control-label::before{border-color:#bac8f3}.custom-control-input:not(:disabled):active~.custom-control-label::before{color:#fff;background-color:#e5ebfa;border-color:#e5ebfa}.custom-control-input:disabled~.custom-control-label,.custom-control-input[disabled]~.custom-control-label{color:#858796}.custom-control-input:disabled~.custom-control-label::before,.custom-control-input[disabled]~.custom-control-label::before{background-color:#eaecf4}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label::before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;pointer-events:none;content:\"\";background-color:#fff;border:#b7b9cc solid 1px}.custom-control-label::after{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\";background:50%/50% 50% no-repeat}.custom-checkbox .custom-control-label::before{border-radius:.35rem}.custom-checkbox .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before{border-color:#4e73df;background-color:#4e73df}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(78,115,223,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before{background-color:rgba(78,115,223,.5)}.custom-radio .custom-control-label::before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(78,115,223,.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label::before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-switch .custom-control-label::after{top:calc(.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#b7b9cc;border-radius:.5rem;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-switch .custom-control-label::after{transition:none}}.custom-switch .custom-control-input:checked~.custom-control-label::after{background-color:#fff;transform:translateX(.75rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(78,115,223,.5)}.custom-select{display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#6e707e;vertical-align:middle;background:#fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%235a5c69' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right .75rem center/8px 10px no-repeat;border:1px solid #d1d3e2;border-radius:.35rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#bac8f3;outline:0;box-shadow:0 0 0 .2rem rgba(78,115,223,.25)}.custom-select:focus::-ms-value{color:#6e707e;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#858796;background-color:#eaecf4}.custom-select::-ms-expand{display:none}.custom-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #6e707e}.custom-select-sm{height:calc(1.5em + .5rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.custom-select-lg{height:calc(1.5em + 1rem + 2px);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.custom-file{position:relative;display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);margin-bottom:0}.custom-file-input{position:relative;z-index:2;width:100%;height:calc(1.5em + .75rem + 2px);margin:0;overflow:hidden;opacity:0}.custom-file-input:focus~.custom-file-label{border-color:#bac8f3;box-shadow:0 0 0 .2rem rgba(78,115,223,.25)}.custom-file-input:disabled~.custom-file-label,.custom-file-input[disabled]~.custom-file-label{background-color:#eaecf4}.custom-file-input:lang(en)~.custom-file-label::after{content:\"Browse\"}.custom-file-input~.custom-file-label[data-browse]::after{content:attr(data-browse)}.custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;overflow:hidden;font-weight:400;line-height:1.5;color:#6e707e;background-color:#fff;border:1px solid #d1d3e2;border-radius:.35rem}.custom-file-label::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:calc(1.5em + .75rem);padding:.375rem .75rem;line-height:1.5;color:#6e707e;content:\"Browse\";background-color:#eaecf4;border-left:inherit;border-radius:0 .35rem .35rem 0}.custom-range{width:100%;height:1.4rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range:focus{outline:0}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(78,115,223,.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(78,115,223,.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(78,115,223,.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#4e73df;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#e5ebfa}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dddfeb;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#4e73df;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-moz-range-thumb{-moz-transition:none;transition:none}}.custom-range::-moz-range-thumb:active{background-color:#e5ebfa}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dddfeb;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background-color:#4e73df;border:0;border-radius:1rem;-ms-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-ms-thumb{-ms-transition:none;transition:none}}.custom-range::-ms-thumb:active{background-color:#e5ebfa}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.custom-range::-ms-fill-lower{background-color:#dddfeb;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px;background-color:#dddfeb;border-radius:1rem}.custom-range:disabled::-webkit-slider-thumb{background-color:#b7b9cc}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#b7b9cc}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#b7b9cc}.custom-control-label::before,.custom-file-label,.custom-select{transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-control-label::before,.custom-file-label,.custom-select{transition:none}}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#858796;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dddfeb}.nav-tabs .nav-link{margin-bottom:-1px;border:1px solid transparent;border-top-left-radius:.35rem;border-top-right-radius:.35rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#eaecf4 #eaecf4 #dddfeb}.nav-tabs .nav-link.disabled{color:#858796;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#6e707e;background-color:#fff;border-color:#dddfeb #dddfeb #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.35rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#4e73df}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:.5rem 1rem}.navbar .container,.navbar .container-fluid,.navbar .container-lg,.navbar .container-md,.navbar .container-sm,.navbar .container-xl{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.35rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:50%/100% 100% no-repeat}.navbar-nav-scroll{max-height:75vh;overflow-y:auto}@media (max-width:575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{flex-wrap:nowrap}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width:767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{flex-wrap:nowrap}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width:991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{flex-wrap:nowrap}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width:1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{flex-wrap:nowrap}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{flex-wrap:nowrap}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a{color:rgba(0,0,0,.9)}.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.5);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-dark .navbar-text{color:rgba(255,255,255,.5)}.navbar-dark .navbar-text a{color:#fff}.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid #e3e6f0;border-radius:.35rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:calc(.35rem - 1px);border-top-right-radius:calc(.35rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:calc(.35rem - 1px);border-bottom-left-radius:calc(.35rem - 1px)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;min-height:1px;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:#f8f9fc;border-bottom:1px solid #e3e6f0}.card-header:first-child{border-radius:calc(.35rem - 1px) calc(.35rem - 1px) 0 0}.card-footer{padding:.75rem 1.25rem;background-color:#f8f9fc;border-top:1px solid #e3e6f0}.card-footer:last-child{border-radius:0 0 calc(.35rem - 1px) calc(.35rem - 1px)}.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem;border-radius:calc(.35rem - 1px)}.card-img,.card-img-bottom,.card-img-top{flex-shrink:0;width:100%}.card-img,.card-img-top{border-top-left-radius:calc(.35rem - 1px);border-top-right-radius:calc(.35rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(.35rem - 1px);border-bottom-left-radius:calc(.35rem - 1px)}.card-deck .card{margin-bottom:.75rem}@media (min-width:576px){.card-deck{display:flex;flex-flow:row wrap;margin-right:-.75rem;margin-left:-.75rem}.card-deck .card{flex:1 0 0%;margin-right:.75rem;margin-bottom:0;margin-left:.75rem}}.card-group>.card{margin-bottom:.75rem}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width:576px){.card-columns{-moz-column-count:3;column-count:3;-moz-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion{overflow-anchor:none}.accordion>.card{overflow:hidden}.accordion>.card:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.accordion>.card>.card-header{border-radius:0;margin-bottom:-1px}.breadcrumb{display:flex;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#eaecf4;border-radius:.35rem}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{float:left;padding-right:.5rem;color:#858796;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#858796}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.35rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#4e73df;background-color:#fff;border:1px solid #dddfeb}.page-link:hover{z-index:2;color:#224abe;text-decoration:none;background-color:#eaecf4;border-color:#dddfeb}.page-link:focus{z-index:3;outline:0;box-shadow:0 0 0 .2rem rgba(78,115,223,.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.35rem;border-bottom-left-radius:.35rem}.page-item:last-child .page-link{border-top-right-radius:.35rem;border-bottom-right-radius:.35rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#4e73df;border-color:#4e73df}.page-item.disabled .page-link{color:#858796;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dddfeb}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.35rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.badge{transition:none}}a.badge:focus,a.badge:hover{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#4e73df}a.badge-primary:focus,a.badge-primary:hover{color:#fff;background-color:#2653d4}a.badge-primary.focus,a.badge-primary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(78,115,223,.5)}.badge-secondary{color:#fff;background-color:#858796}a.badge-secondary:focus,a.badge-secondary:hover{color:#fff;background-color:#6b6d7d}a.badge-secondary.focus,a.badge-secondary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(133,135,150,.5)}.badge-success{color:#fff;background-color:#1cc88a}a.badge-success:focus,a.badge-success:hover{color:#fff;background-color:#169b6b}a.badge-success.focus,a.badge-success:focus{outline:0;box-shadow:0 0 0 .2rem rgba(28,200,138,.5)}.badge-info{color:#fff;background-color:#36b9cc}a.badge-info:focus,a.badge-info:hover{color:#fff;background-color:#2a96a5}a.badge-info.focus,a.badge-info:focus{outline:0;box-shadow:0 0 0 .2rem rgba(54,185,204,.5)}.badge-warning{color:#fff;background-color:#f6c23e}a.badge-warning:focus,a.badge-warning:hover{color:#fff;background-color:#f4b30d}a.badge-warning.focus,a.badge-warning:focus{outline:0;box-shadow:0 0 0 .2rem rgba(246,194,62,.5)}.badge-danger{color:#fff;background-color:#e74a3b}a.badge-danger:focus,a.badge-danger:hover{color:#fff;background-color:#d52a1a}a.badge-danger.focus,a.badge-danger:focus{outline:0;box-shadow:0 0 0 .2rem rgba(231,74,59,.5)}.badge-light{color:#3a3b45;background-color:#f8f9fc}a.badge-light:focus,a.badge-light:hover{color:#3a3b45;background-color:#d4daed}a.badge-light.focus,a.badge-light:focus{outline:0;box-shadow:0 0 0 .2rem rgba(248,249,252,.5)}.badge-dark{color:#fff;background-color:#5a5c69}a.badge-dark:focus,a.badge-dark:hover{color:#fff;background-color:#42444e}a.badge-dark.focus,a.badge-dark:focus{outline:0;box-shadow:0 0 0 .2rem rgba(90,92,105,.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#eaecf4;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.35rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;z-index:2;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#293c74;background-color:#dce3f9;border-color:#cdd8f6}.alert-primary hr{border-top-color:#b7c7f2}.alert-primary .alert-link{color:#1c294e}.alert-secondary{color:#45464e;background-color:#e7e7ea;border-color:#dddde2}.alert-secondary hr{border-top-color:#cfcfd6}.alert-secondary .alert-link{color:#2d2e33}.alert-success{color:#0f6848;background-color:#d2f4e8;border-color:#bff0de}.alert-success hr{border-top-color:#aaebd3}.alert-success .alert-link{color:#093b29}.alert-info{color:#1c606a;background-color:#d7f1f5;border-color:#c7ebf1}.alert-info hr{border-top-color:#b3e4ec}.alert-info .alert-link{color:#113b42}.alert-warning{color:#806520;background-color:#fdf3d8;border-color:#fceec9}.alert-warning hr{border-top-color:#fbe6b1}.alert-warning .alert-link{color:#574516}.alert-danger{color:#78261f;background-color:#fadbd8;border-color:#f8ccc8}.alert-danger hr{border-top-color:#f5b7b1}.alert-danger .alert-link{color:#4f1915}.alert-light{color:#818183;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686869}.alert-dark{color:#2f3037;background-color:#dedee1;border-color:#d1d1d5}.alert-dark hr{border-top-color:#c4c4c9}.alert-dark .alert-link{color:#18181c}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:flex;height:1rem;overflow:hidden;line-height:0;font-size:.75rem;background-color:#eaecf4;border-radius:.35rem}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#4e73df;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:1s linear infinite progress-bar-stripes;animation:1s linear infinite progress-bar-stripes}@media (prefers-reduced-motion:reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.media{display:flex;align-items:flex-start}.media-body{flex:1}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:.35rem}.list-group-item-action{width:100%;color:#6e707e;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:#6e707e;text-decoration:none;background-color:#f8f9fc}.list-group-item-action:active{color:#858796;background-color:#eaecf4}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#858796;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#4e73df;border-color:#4e73df}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.35rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:.35rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.35rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:.35rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.35rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:.35rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.35rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:.35rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.35rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:.35rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#293c74;background-color:#cdd8f6}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#293c74;background-color:#b7c7f2}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#293c74;border-color:#293c74}.list-group-item-secondary{color:#45464e;background-color:#dddde2}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#45464e;background-color:#cfcfd6}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#45464e;border-color:#45464e}.list-group-item-success{color:#0f6848;background-color:#bff0de}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#0f6848;background-color:#aaebd3}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#0f6848;border-color:#0f6848}.list-group-item-info{color:#1c606a;background-color:#c7ebf1}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#1c606a;background-color:#b3e4ec}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#1c606a;border-color:#1c606a}.list-group-item-warning{color:#806520;background-color:#fceec9}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#806520;background-color:#fbe6b1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#806520;border-color:#806520}.list-group-item-danger{color:#78261f;background-color:#f8ccc8}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#78261f;background-color:#f5b7b1}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#78261f;border-color:#78261f}.list-group-item-light{color:#818183;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#818183;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818183;border-color:#818183}.list-group-item-dark{color:#2f3037;background-color:#d1d1d5}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#2f3037;background-color:#c4c4c9}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#2f3037;border-color:#2f3037}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{opacity:.75}button.close{padding:0;background-color:transparent;border:0}a.close.disabled{pointer-events:none}.toast{flex-basis:350px;max-width:350px;font-size:.875rem;background-color:rgba(255,255,255,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);opacity:0;border-radius:.25rem}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:flex;align-items:center;padding:.25rem .75rem;color:#858796;background-color:rgba(255,255,255,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05);border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translate(0,-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header{flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered::before{display:block;height:calc(100vh - 1rem);height:-webkit-min-content;height:-moz-min-content;height:min-content;content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{flex-direction:column;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable::before{content:none}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #e3e6f0;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .close{padding:1rem 1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #e3e6f0;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered::before{height:calc(100vh - 3.5rem);height:-webkit-min-content;height:-moz-min-content;height:min-content}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:Nunito,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow::before,.bs-tooltip-top .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow::before,.bs-tooltip-right .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.bs-tooltip-bottom .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow::before,.bs-tooltip-left .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.35rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:Nunito,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow::after,.popover .arrow::before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top]>.arrow,.bs-popover-top>.arrow{bottom:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=top]>.arrow::before,.bs-popover-top>.arrow::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top]>.arrow::after,.bs-popover-top>.arrow::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right]>.arrow,.bs-popover-right>.arrow{left:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right]>.arrow::before,.bs-popover-right>.arrow::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right]>.arrow::after,.bs-popover-right>.arrow::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom]>.arrow,.bs-popover-bottom>.arrow{top:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=bottom]>.arrow::before,.bs-popover-bottom>.arrow::before{top:0;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom]>.arrow::after,.bs-popover-bottom>.arrow::after{top:1px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left]>.arrow,.bs-popover-left>.arrow{right:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left]>.arrow::before,.bs-popover-left>.arrow::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left]>.arrow::after,.bs-popover-left>.arrow::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#858796}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left){transform:translateX(100%)}.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right){transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:50%/100% 100% no-repeat}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@-webkit-keyframes spinner-border{to{transform:rotate(360deg)}}@keyframes spinner-border{to{transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;-webkit-animation:.75s linear infinite spinner-border;animation:.75s linear infinite spinner-border}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:.75s linear infinite spinner-grow;animation:.75s linear infinite spinner-grow}.spinner-grow-sm{width:1rem;height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{-webkit-animation-duration:1.5s;animation-duration:1.5s}}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#4e73df!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#2653d4!important}.bg-secondary{background-color:#858796!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#6b6d7d!important}.bg-success{background-color:#1cc88a!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#169b6b!important}.bg-info{background-color:#36b9cc!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#2a96a5!important}.bg-warning{background-color:#f6c23e!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#f4b30d!important}.bg-danger{background-color:#e74a3b!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#d52a1a!important}.bg-light{background-color:#f8f9fc!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#d4daed!important}.bg-dark{background-color:#5a5c69!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#42444e!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #e3e6f0!important}.border-top{border-top:1px solid #e3e6f0!important}.border-right{border-right:1px solid #e3e6f0!important}.border-bottom{border-bottom:1px solid #e3e6f0!important}.border-left{border-left:1px solid #e3e6f0!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#4e73df!important}.border-secondary{border-color:#858796!important}.border-success{border-color:#1cc88a!important}.border-info{border-color:#36b9cc!important}.border-warning{border-color:#f6c23e!important}.border-danger{border-color:#e74a3b!important}.border-light{border-color:#f8f9fc!important}.border-dark{border-color:#5a5c69!important}.border-white{border-color:#fff!important}.rounded-sm{border-radius:.2rem!important}.rounded{border-radius:.35rem!important}.rounded-top{border-top-left-radius:.35rem!important;border-top-right-radius:.35rem!important}.rounded-right{border-top-right-radius:.35rem!important;border-bottom-right-radius:.35rem!important}.rounded-bottom{border-bottom-right-radius:.35rem!important;border-bottom-left-radius:.35rem!important}.rounded-left{border-top-left-radius:.35rem!important;border-bottom-left-radius:.35rem!important}.rounded-lg{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-0{border-radius:0!important}.clearfix::after{display:block;clear:both;content:\"\"}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.85714%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-fill{flex:1 1 auto!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}@media (min-width:576px){.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}}@media (min-width:768px){.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;-ms-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;-ms-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:sticky!important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports (position:sticky){.sticky-top{position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 .125rem .25rem 0 rgba(58,59,69,.2)!important}.shadow{box-shadow:0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.min-vw-100{min-width:100vw!important}.min-vh-100{min-height:100vh!important}.vw-100{width:100vw!important}.vh-100{height:100vh!important}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:rgba(0,0,0,0)}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important}.text-justify{text-align:justify!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.dropdown .dropdown-menu .dropdown-header,.sidebar .sidebar-heading,.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-lighter{font-weight:lighter!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-weight-bolder{font-weight:bolder!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#4e73df!important}a.text-primary:focus,a.text-primary:hover{color:#224abe!important}.text-secondary{color:#858796!important}a.text-secondary:focus,a.text-secondary:hover{color:#60616f!important}.text-success{color:#1cc88a!important}a.text-success:focus,a.text-success:hover{color:#13855c!important}.text-info{color:#36b9cc!important}a.text-info:focus,a.text-info:hover{color:#258391!important}.text-warning{color:#f6c23e!important}a.text-warning:focus,a.text-warning:hover{color:#dda20a!important}.text-danger{color:#e74a3b!important}a.text-danger:focus,a.text-danger:hover{color:#be2617!important}.text-light{color:#f8f9fc!important}a.text-light:focus,a.text-light:hover{color:#c2cbe5!important}.text-dark{color:#5a5c69!important}a.text-dark:focus,a.text-dark:hover{color:#373840!important}.text-body{color:#858796!important}.text-muted{color:#858796!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:rgba(255,255,255,.5)!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none!important}.text-break{word-break:break-word!important;word-wrap:break-word!important}.text-reset{color:inherit!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,::after,::before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #b7b9cc;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px!important}.container{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dddfeb!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#e3e6f0}.table .thead-dark th{color:inherit;border-color:#e3e6f0}}html{position:relative;min-height:100%}body{height:100%}a:focus{outline:0}#wrapper{display:flex}#wrapper #content-wrapper{background-color:#f8f9fc;width:100%;overflow-x:hidden}#wrapper #content-wrapper #content{flex:1 0 auto}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl{padding-left:1.5rem;padding-right:1.5rem}.scroll-to-top{position:fixed;right:1rem;bottom:1rem;display:none;width:2.75rem;height:2.75rem;text-align:center;color:#fff;background:rgba(90,92,105,.5);line-height:46px}.scroll-to-top:focus,.scroll-to-top:hover{color:#fff}.scroll-to-top:hover{background:#5a5c69}.scroll-to-top i{font-weight:800}@-webkit-keyframes growIn{0%{transform:scale(.9);opacity:0}100%{transform:scale(1);opacity:1}}@keyframes growIn{0%{transform:scale(.9);opacity:0}100%{transform:scale(1);opacity:1}}.animated--grow-in,.sidebar .nav-item .collapse{-webkit-animation-name:growIn;animation-name:growIn;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:transform cubic-bezier(.18,1.25,.4,1),opacity cubic-bezier(0,1,.4,1);animation-timing-function:transform cubic-bezier(.18,1.25,.4,1),opacity cubic-bezier(0,1,.4,1)}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}.animated--fade-in{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:opacity cubic-bezier(0,1,.4,1);animation-timing-function:opacity cubic-bezier(0,1,.4,1)}.bg-gradient-primary{background-color:#4e73df;background-image:linear-gradient(180deg,#4e73df 10%,#224abe 100%);background-size:cover}.bg-gradient-secondary{background-color:#858796;background-image:linear-gradient(180deg,#858796 10%,#60616f 100%);background-size:cover}.bg-gradient-success{background-color:#1cc88a;background-image:linear-gradient(180deg,#1cc88a 10%,#13855c 100%);background-size:cover}.bg-gradient-info{background-color:#36b9cc;background-image:linear-gradient(180deg,#36b9cc 10%,#258391 100%);background-size:cover}.bg-gradient-warning{background-color:#f6c23e;background-image:linear-gradient(180deg,#f6c23e 10%,#dda20a 100%);background-size:cover}.bg-gradient-danger{background-color:#e74a3b;background-image:linear-gradient(180deg,#e74a3b 10%,#be2617 100%);background-size:cover}.bg-gradient-light{background-color:#f8f9fc;background-image:linear-gradient(180deg,#f8f9fc 10%,#c2cbe5 100%);background-size:cover}.bg-gradient-dark{background-color:#5a5c69;background-image:linear-gradient(180deg,#5a5c69 10%,#373840 100%);background-size:cover}.bg-gray-100{background-color:#f8f9fc!important}.bg-gray-200{background-color:#eaecf4!important}.bg-gray-300{background-color:#dddfeb!important}.bg-gray-400{background-color:#d1d3e2!important}.bg-gray-500{background-color:#b7b9cc!important}.bg-gray-600{background-color:#858796!important}.bg-gray-700{background-color:#6e707e!important}.bg-gray-800{background-color:#5a5c69!important}.bg-gray-900{background-color:#3a3b45!important}.o-hidden{overflow:hidden!important}.text-xs{font-size:.7rem}.text-lg{font-size:1.2rem}.text-gray-100{color:#f8f9fc!important}.text-gray-200{color:#eaecf4!important}.text-gray-300{color:#dddfeb!important}.text-gray-400{color:#d1d3e2!important}.text-gray-500{color:#b7b9cc!important}.text-gray-600{color:#858796!important}.text-gray-700{color:#6e707e!important}.text-gray-800{color:#5a5c69!important}.text-gray-900{color:#3a3b45!important}.icon-circle{height:2.5rem;width:2.5rem;border-radius:100%;display:flex;align-items:center;justify-content:center}.border-left-primary{border-left:.25rem solid #4e73df!important}.border-bottom-primary{border-bottom:.25rem solid #4e73df!important}.border-left-secondary{border-left:.25rem solid #858796!important}.border-bottom-secondary{border-bottom:.25rem solid #858796!important}.border-left-success{border-left:.25rem solid #1cc88a!important}.border-bottom-success{border-bottom:.25rem solid #1cc88a!important}.border-left-info{border-left:.25rem solid #36b9cc!important}.border-bottom-info{border-bottom:.25rem solid #36b9cc!important}.border-left-warning{border-left:.25rem solid #f6c23e!important}.border-bottom-warning{border-bottom:.25rem solid #f6c23e!important}.border-left-danger{border-left:.25rem solid #e74a3b!important}.border-bottom-danger{border-bottom:.25rem solid #e74a3b!important}.border-left-light{border-left:.25rem solid #f8f9fc!important}.border-bottom-light{border-bottom:.25rem solid #f8f9fc!important}.border-left-dark{border-left:.25rem solid #5a5c69!important}.border-bottom-dark{border-bottom:.25rem solid #5a5c69!important}.progress-sm{height:.5rem}.rotate-15{transform:rotate(15deg)}.rotate-n-15{transform:rotate(-15deg)}.dropdown .dropdown-menu{font-size:.85rem}.dropdown .dropdown-menu .dropdown-header{font-weight:800;font-size:.65rem;color:#b7b9cc}.dropdown.no-arrow .dropdown-toggle::after{display:none}.sidebar .nav-item.dropdown .dropdown-toggle::after,.topbar .nav-item.dropdown .dropdown-toggle::after{width:1rem;text-align:center;float:right;vertical-align:0;border:0;font-weight:900;content:'\\f105';font-family:'Font Awesome 5 Free'}.sidebar .nav-item.dropdown.show .dropdown-toggle::after,.topbar .nav-item.dropdown.show .dropdown-toggle::after{content:'\\f107'}.sidebar .nav-item .nav-link,.topbar .nav-item .nav-link{position:relative}.sidebar .nav-item .nav-link .badge-counter,.topbar .nav-item .nav-link .badge-counter{position:absolute;transform:scale(.7);transform-origin:top right;right:.25rem;margin-top:-.25rem}.sidebar .nav-item .nav-link .img-profile,.topbar .nav-item .nav-link .img-profile{height:2rem;width:2rem}.topbar{height:4.375rem}.topbar #sidebarToggleTop{height:2.5rem;width:2.5rem}.topbar #sidebarToggleTop:hover{background-color:#eaecf4}.topbar #sidebarToggleTop:active{background-color:#dddfeb}.topbar .navbar-search{width:25rem}.topbar .navbar-search input{font-size:.85rem;height:auto}.topbar .topbar-divider{width:0;border-right:1px solid #e3e6f0;height:calc(4.375rem - 2rem);margin:auto 1rem}.topbar .nav-item .nav-link{height:4.375rem;display:flex;align-items:center;padding:0 .75rem}.topbar .nav-item .nav-link:focus{outline:0}.topbar .nav-item:focus{outline:0}.topbar .dropdown{position:static}.topbar .dropdown .dropdown-menu{width:calc(100% - 1.5rem);right:.75rem}.topbar .dropdown-list{padding:0;border:none;overflow:hidden}.topbar .dropdown-list .dropdown-header{background-color:#4e73df;border:1px solid #4e73df;padding-top:.75rem;padding-bottom:.75rem;color:#fff}.topbar .dropdown-list .dropdown-item{white-space:normal;padding-top:.5rem;padding-bottom:.5rem;border-left:1px solid #e3e6f0;border-right:1px solid #e3e6f0;border-bottom:1px solid #e3e6f0;line-height:1.3rem}.topbar .dropdown-list .dropdown-item .dropdown-list-image{position:relative;height:2.5rem;width:2.5rem}.topbar .dropdown-list .dropdown-item .dropdown-list-image img{height:2.5rem;width:2.5rem}.topbar .dropdown-list .dropdown-item .dropdown-list-image .status-indicator{background-color:#eaecf4;height:.75rem;width:.75rem;border-radius:100%;position:absolute;bottom:0;right:0;border:.125rem solid #fff}.topbar .dropdown-list .dropdown-item .text-truncate{max-width:10rem}.topbar .dropdown-list .dropdown-item:active{background-color:#eaecf4;color:#3a3b45}@media (min-width:576px){.topbar .dropdown{position:relative}.topbar .dropdown .dropdown-menu{width:auto;right:0}.topbar .dropdown-list{width:20rem!important}.topbar .dropdown-list .dropdown-item .text-truncate{max-width:13.375rem}}.topbar.navbar-dark .navbar-nav .nav-item .nav-link{color:rgba(255,255,255,.8)}.topbar.navbar-dark .navbar-nav .nav-item .nav-link:hover{color:#fff}.topbar.navbar-dark .navbar-nav .nav-item .nav-link:active{color:#fff}.topbar.navbar-light .navbar-nav .nav-item .nav-link{color:#d1d3e2}.topbar.navbar-light .navbar-nav .nav-item .nav-link:hover{color:#b7b9cc}.topbar.navbar-light .navbar-nav .nav-item .nav-link:active{color:#858796}.sidebar{width:6.5rem;min-height:100vh}.sidebar .nav-item{position:relative}.sidebar .nav-item:last-child{margin-bottom:1rem}.sidebar .nav-item .nav-link{text-align:center;padding:.75rem 1rem;width:6.5rem}.sidebar .nav-item .nav-link span{font-size:.65rem;display:block}.sidebar .nav-item.active .nav-link{font-weight:700}.sidebar .nav-item .collapse{position:absolute;left:calc(6.5rem + 1.5rem / 2);z-index:1;top:2px}.sidebar .nav-item .collapse .collapse-inner{border-radius:.35rem;box-shadow:0 .15rem 1.75rem 0 rgba(58,59,69,.15)}.sidebar .nav-item .collapsing{display:none;transition:none}.sidebar .nav-item .collapse .collapse-inner,.sidebar .nav-item .collapsing .collapse-inner{padding:.5rem 0;min-width:10rem;font-size:.85rem;margin:0 0 1rem 0}.sidebar .nav-item .collapse .collapse-inner .collapse-header,.sidebar .nav-item .collapsing .collapse-inner .collapse-header{margin:0;white-space:nowrap;padding:.5rem 1.5rem;text-transform:uppercase;font-weight:800;font-size:.65rem;color:#b7b9cc}.sidebar .nav-item .collapse .collapse-inner .collapse-item,.sidebar .nav-item .collapsing .collapse-inner .collapse-item{padding:.5rem 1rem;margin:0 .5rem;display:block;color:#3a3b45;text-decoration:none;border-radius:.35rem;white-space:nowrap}.sidebar .nav-item .collapse .collapse-inner .collapse-item:hover,.sidebar .nav-item .collapsing .collapse-inner .collapse-item:hover{background-color:#eaecf4}.sidebar .nav-item .collapse .collapse-inner .collapse-item:active,.sidebar .nav-item .collapsing .collapse-inner .collapse-item:active{background-color:#dddfeb}.sidebar .nav-item .collapse .collapse-inner .collapse-item.active,.sidebar .nav-item .collapsing .collapse-inner .collapse-item.active{color:#4e73df;font-weight:700}.sidebar #sidebarToggle{width:2.5rem;height:2.5rem;text-align:center;margin-bottom:1rem;cursor:pointer}.sidebar #sidebarToggle::after{font-weight:900;content:'\\f104';font-family:'Font Awesome 5 Free';margin-right:.1rem}.sidebar #sidebarToggle:hover{text-decoration:none}.sidebar #sidebarToggle:focus{outline:0}.sidebar.toggled{width:0!important;overflow:hidden}.sidebar.toggled #sidebarToggle::after{content:'\\f105';font-family:'Font Awesome 5 Free';margin-left:.25rem}.sidebar.toggled .sidebar-card{display:none}.sidebar .sidebar-brand{height:4.375rem;text-decoration:none;font-size:1rem;font-weight:800;padding:1.5rem 1rem;text-align:center;text-transform:uppercase;letter-spacing:.05rem;z-index:1}.sidebar .sidebar-brand .sidebar-brand-icon i{font-size:2rem}.sidebar .sidebar-brand .sidebar-brand-text{display:none}.sidebar hr.sidebar-divider{margin:0 1rem 1rem}.sidebar .sidebar-heading{text-align:center;padding:0 1rem;font-weight:800;font-size:.65rem}.sidebar .sidebar-card{display:flex;flex-direction:column;align-items:center;font-size:.875rem;border-radius:.35rem;color:rgba(255,255,255,.8);margin-left:1rem;margin-right:1rem;margin-bottom:1rem;padding:1rem;background-color:rgba(0,0,0,.1)}.sidebar .sidebar-card .sidebar-card-illustration{height:3rem;display:block}.sidebar .sidebar-card .sidebar-card-title{font-weight:700}.sidebar .sidebar-card p{font-size:.75rem;color:rgba(255,255,255,.5)}@media (min-width:768px){.sidebar{width:14rem!important}.sidebar .nav-item .collapse{position:relative;left:0;z-index:1;top:0;-webkit-animation:none;animation:none}.sidebar .nav-item .collapse .collapse-inner{border-radius:0;box-shadow:none}.sidebar .nav-item .collapsing{display:block;transition:height .15s ease}.sidebar .nav-item .collapse,.sidebar .nav-item .collapsing{margin:0 1rem}.sidebar .nav-item .nav-link{display:block;width:100%;text-align:left;padding:1rem;width:14rem}.sidebar .nav-item .nav-link i{font-size:.85rem;margin-right:.25rem}.sidebar .nav-item .nav-link span{font-size:.85rem;display:inline}.sidebar .nav-item .nav-link[data-toggle=collapse]::after{width:1rem;text-align:center;float:right;vertical-align:0;border:0;font-weight:900;content:'\\f107';font-family:'Font Awesome 5 Free'}.sidebar .nav-item .nav-link[data-toggle=collapse].collapsed::after{content:'\\f105'}.sidebar .sidebar-brand .sidebar-brand-icon i{font-size:2rem}.sidebar .sidebar-brand .sidebar-brand-text{display:inline}.sidebar .sidebar-heading{text-align:left}.sidebar.toggled{overflow:visible;width:6.5rem!important}.sidebar.toggled .nav-item .collapse{position:absolute;left:calc(6.5rem + 1.5rem / 2);z-index:1;top:2px;-webkit-animation-name:growIn;animation-name:growIn;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:transform cubic-bezier(.18,1.25,.4,1),opacity cubic-bezier(0,1,.4,1);animation-timing-function:transform cubic-bezier(.18,1.25,.4,1),opacity cubic-bezier(0,1,.4,1)}.sidebar.toggled .nav-item .collapse .collapse-inner{box-shadow:0 .15rem 1.75rem 0 rgba(58,59,69,.15);border-radius:.35rem}.sidebar.toggled .nav-item .collapsing{display:none;transition:none}.sidebar.toggled .nav-item .collapse,.sidebar.toggled .nav-item .collapsing{margin:0}.sidebar.toggled .nav-item:last-child{margin-bottom:1rem}.sidebar.toggled .nav-item .nav-link{text-align:center;padding:.75rem 1rem;width:6.5rem}.sidebar.toggled .nav-item .nav-link span{font-size:.65rem;display:block}.sidebar.toggled .nav-item .nav-link i{margin-right:0}.sidebar.toggled .nav-item .nav-link[data-toggle=collapse]::after{display:none}.sidebar.toggled .sidebar-brand .sidebar-brand-icon i{font-size:2rem}.sidebar.toggled .sidebar-brand .sidebar-brand-text{display:none}.sidebar.toggled .sidebar-heading{text-align:center}}.sidebar-light .sidebar-brand{color:#6e707e}.sidebar-light hr.sidebar-divider{border-top:1px solid #eaecf4}.sidebar-light .sidebar-heading{color:#b7b9cc}.sidebar-light .nav-item .nav-link{color:#858796}.sidebar-light .nav-item .nav-link i{color:#d1d3e2}.sidebar-light .nav-item .nav-link:active,.sidebar-light .nav-item .nav-link:focus,.sidebar-light .nav-item .nav-link:hover{color:#6e707e}.sidebar-light .nav-item .nav-link:active i,.sidebar-light .nav-item .nav-link:focus i,.sidebar-light .nav-item .nav-link:hover i{color:#6e707e}.sidebar-light .nav-item .nav-link[data-toggle=collapse]::after{color:#b7b9cc}.sidebar-light .nav-item.active .nav-link{color:#6e707e}.sidebar-light .nav-item.active .nav-link i{color:#6e707e}.sidebar-light #sidebarToggle{background-color:#eaecf4}.sidebar-light #sidebarToggle::after{color:#b7b9cc}.sidebar-light #sidebarToggle:hover{background-color:#dddfeb}.sidebar-dark .sidebar-brand{color:#fff}.sidebar-dark hr.sidebar-divider{border-top:1px solid rgba(255,255,255,.15)}.sidebar-dark .sidebar-heading{color:rgba(255,255,255,.4)}.sidebar-dark .nav-item .nav-link{color:rgba(255,255,255,.8)}.sidebar-dark .nav-item .nav-link i{color:rgba(255,255,255,.3)}.sidebar-dark .nav-item .nav-link:active,.sidebar-dark .nav-item .nav-link:focus,.sidebar-dark .nav-item .nav-link:hover{color:#fff}.sidebar-dark .nav-item .nav-link:active i,.sidebar-dark .nav-item .nav-link:focus i,.sidebar-dark .nav-item .nav-link:hover i{color:#fff}.sidebar-dark .nav-item .nav-link[data-toggle=collapse]::after{color:rgba(255,255,255,.5)}.sidebar-dark .nav-item.active .nav-link{color:#fff}.sidebar-dark .nav-item.active .nav-link i{color:#fff}.sidebar-dark #sidebarToggle{background-color:rgba(255,255,255,.2)}.sidebar-dark #sidebarToggle::after{color:rgba(255,255,255,.5)}.sidebar-dark #sidebarToggle:hover{background-color:rgba(255,255,255,.25)}.sidebar-dark.toggled #sidebarToggle::after{color:rgba(255,255,255,.5)}.btn-circle{border-radius:100%;height:2.5rem;width:2.5rem;font-size:1rem;display:inline-flex;align-items:center;justify-content:center}.btn-circle.btn-sm,.btn-group-sm>.btn-circle.btn{height:1.8rem;width:1.8rem;font-size:.75rem}.btn-circle.btn-lg,.btn-group-lg>.btn-circle.btn{height:3.5rem;width:3.5rem;font-size:1.35rem}.btn-icon-split{padding:0;overflow:hidden;display:inline-flex;align-items:stretch;justify-content:center}.btn-icon-split .icon{background:rgba(0,0,0,.15);display:inline-block;padding:.375rem .75rem}.btn-icon-split .text{display:inline-block;padding:.375rem .75rem}.btn-group-sm>.btn-icon-split.btn .icon,.btn-icon-split.btn-sm .icon{padding:.25rem .5rem}.btn-group-sm>.btn-icon-split.btn .text,.btn-icon-split.btn-sm .text{padding:.25rem .5rem}.btn-group-lg>.btn-icon-split.btn .icon,.btn-icon-split.btn-lg .icon{padding:.5rem 1rem}.btn-group-lg>.btn-icon-split.btn .text,.btn-icon-split.btn-lg .text{padding:.5rem 1rem}.card .card-header .dropdown{line-height:1}.card .card-header .dropdown .dropdown-menu{line-height:1.5}.card .card-header[data-toggle=collapse]{text-decoration:none;position:relative;padding:.75rem 3.25rem .75rem 1.25rem}.card .card-header[data-toggle=collapse]::after{position:absolute;right:0;top:0;padding-right:1.725rem;line-height:51px;font-weight:900;content:'\\f107';font-family:'Font Awesome 5 Free';color:#d1d3e2}.card .card-header[data-toggle=collapse].collapsed{border-radius:.35rem}.card .card-header[data-toggle=collapse].collapsed::after{content:'\\f105'}.chart-area{position:relative;height:10rem;width:100%}@media (min-width:768px){.chart-area{height:20rem}}.chart-bar{position:relative;height:10rem;width:100%}@media (min-width:768px){.chart-bar{height:20rem}}.chart-pie{position:relative;height:15rem;width:100%}@media (min-width:768px){.chart-pie{height:calc(20rem - 43px)!important}}.bg-login-image{background:url(https://source.unsplash.com/K4mSJ7kc0As/600x800);background-position:center;background-size:cover}.bg-register-image{background:url(https://source.unsplash.com/Mv9hjnEUHR4/600x800);background-position:center;background-size:cover}.bg-password-image{background:url(https://source.unsplash.com/oWTW-jNGl9I/600x800);background-position:center;background-size:cover}form.user .custom-checkbox.small label{line-height:1.5rem}form.user .form-control-user{font-size:.8rem;border-radius:10rem;padding:1.5rem 1rem}form.user .btn-user{font-size:.8rem;border-radius:10rem;padding:.75rem 1rem}.btn-google{color:#fff;background-color:#ea4335;border-color:#fff}.btn-google:hover{color:#fff;background-color:#e12717;border-color:#e6e6e6}.btn-google.focus,.btn-google:focus{color:#fff;background-color:#e12717;border-color:#e6e6e6;box-shadow:0 0 0 .2rem rgba(255,255,255,.5)}.btn-google.disabled,.btn-google:disabled{color:#fff;background-color:#ea4335;border-color:#fff}.btn-google:not(:disabled):not(.disabled).active,.btn-google:not(:disabled):not(.disabled):active,.show>.btn-google.dropdown-toggle{color:#fff;background-color:#d62516;border-color:#dfdfdf}.btn-google:not(:disabled):not(.disabled).active:focus,.btn-google:not(:disabled):not(.disabled):active:focus,.show>.btn-google.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,255,255,.5)}.btn-facebook{color:#fff;background-color:#3b5998;border-color:#fff}.btn-facebook:hover{color:#fff;background-color:#30497c;border-color:#e6e6e6}.btn-facebook.focus,.btn-facebook:focus{color:#fff;background-color:#30497c;border-color:#e6e6e6;box-shadow:0 0 0 .2rem rgba(255,255,255,.5)}.btn-facebook.disabled,.btn-facebook:disabled{color:#fff;background-color:#3b5998;border-color:#fff}.btn-facebook:not(:disabled):not(.disabled).active,.btn-facebook:not(:disabled):not(.disabled):active,.show>.btn-facebook.dropdown-toggle{color:#fff;background-color:#2d4373;border-color:#dfdfdf}.btn-facebook:not(:disabled):not(.disabled).active:focus,.btn-facebook:not(:disabled):not(.disabled):active:focus,.show>.btn-facebook.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,255,255,.5)}.error{color:#5a5c69;font-size:7rem;position:relative;line-height:1;width:12.5rem}@-webkit-keyframes noise-anim{0%{clip:rect(49px,9999px,40px,0)}5%{clip:rect(75px,9999px,72px,0)}10%{clip:rect(97px,9999px,93px,0)}15%{clip:rect(15px,9999px,9px,0)}20%{clip:rect(14px,9999px,92px,0)}25%{clip:rect(18px,9999px,94px,0)}30%{clip:rect(17px,9999px,20px,0)}35%{clip:rect(71px,9999px,59px,0)}40%{clip:rect(42px,9999px,84px,0)}45%{clip:rect(56px,9999px,25px,0)}50%{clip:rect(46px,9999px,14px,0)}55%{clip:rect(47px,9999px,1px,0)}60%{clip:rect(64px,9999px,58px,0)}65%{clip:rect(89px,9999px,92px,0)}70%{clip:rect(56px,9999px,39px,0)}75%{clip:rect(80px,9999px,71px,0)}80%{clip:rect(8px,9999px,13px,0)}85%{clip:rect(66px,9999px,68px,0)}90%{clip:rect(68px,9999px,4px,0)}95%{clip:rect(56px,9999px,14px,0)}100%{clip:rect(28px,9999px,53px,0)}}@keyframes noise-anim{0%{clip:rect(49px,9999px,40px,0)}5%{clip:rect(75px,9999px,72px,0)}10%{clip:rect(97px,9999px,93px,0)}15%{clip:rect(15px,9999px,9px,0)}20%{clip:rect(14px,9999px,92px,0)}25%{clip:rect(18px,9999px,94px,0)}30%{clip:rect(17px,9999px,20px,0)}35%{clip:rect(71px,9999px,59px,0)}40%{clip:rect(42px,9999px,84px,0)}45%{clip:rect(56px,9999px,25px,0)}50%{clip:rect(46px,9999px,14px,0)}55%{clip:rect(47px,9999px,1px,0)}60%{clip:rect(64px,9999px,58px,0)}65%{clip:rect(89px,9999px,92px,0)}70%{clip:rect(56px,9999px,39px,0)}75%{clip:rect(80px,9999px,71px,0)}80%{clip:rect(8px,9999px,13px,0)}85%{clip:rect(66px,9999px,68px,0)}90%{clip:rect(68px,9999px,4px,0)}95%{clip:rect(56px,9999px,14px,0)}100%{clip:rect(28px,9999px,53px,0)}}.error:after{content:attr(data-text);position:absolute;left:2px;text-shadow:-1px 0 #e74a3b;top:0;color:#5a5c69;background:#f8f9fc;overflow:hidden;clip:rect(0,900px,0,0);animation:noise-anim 2s infinite linear alternate-reverse}@-webkit-keyframes noise-anim-2{0%{clip:rect(16px,9999px,10px,0)}5%{clip:rect(22px,9999px,29px,0)}10%{clip:rect(6px,9999px,68px,0)}15%{clip:rect(85px,9999px,95px,0)}20%{clip:rect(65px,9999px,91px,0)}25%{clip:rect(93px,9999px,68px,0)}30%{clip:rect(10px,9999px,27px,0)}35%{clip:rect(37px,9999px,25px,0)}40%{clip:rect(12px,9999px,23px,0)}45%{clip:rect(40px,9999px,18px,0)}50%{clip:rect(19px,9999px,71px,0)}55%{clip:rect(2px,9999px,35px,0)}60%{clip:rect(16px,9999px,69px,0)}65%{clip:rect(8px,9999px,65px,0)}70%{clip:rect(30px,9999px,57px,0)}75%{clip:rect(14px,9999px,4px,0)}80%{clip:rect(39px,9999px,30px,0)}85%{clip:rect(22px,9999px,35px,0)}90%{clip:rect(58px,9999px,71px,0)}95%{clip:rect(34px,9999px,90px,0)}100%{clip:rect(67px,9999px,68px,0)}}@keyframes noise-anim-2{0%{clip:rect(16px,9999px,10px,0)}5%{clip:rect(22px,9999px,29px,0)}10%{clip:rect(6px,9999px,68px,0)}15%{clip:rect(85px,9999px,95px,0)}20%{clip:rect(65px,9999px,91px,0)}25%{clip:rect(93px,9999px,68px,0)}30%{clip:rect(10px,9999px,27px,0)}35%{clip:rect(37px,9999px,25px,0)}40%{clip:rect(12px,9999px,23px,0)}45%{clip:rect(40px,9999px,18px,0)}50%{clip:rect(19px,9999px,71px,0)}55%{clip:rect(2px,9999px,35px,0)}60%{clip:rect(16px,9999px,69px,0)}65%{clip:rect(8px,9999px,65px,0)}70%{clip:rect(30px,9999px,57px,0)}75%{clip:rect(14px,9999px,4px,0)}80%{clip:rect(39px,9999px,30px,0)}85%{clip:rect(22px,9999px,35px,0)}90%{clip:rect(58px,9999px,71px,0)}95%{clip:rect(34px,9999px,90px,0)}100%{clip:rect(67px,9999px,68px,0)}}.error:before{content:attr(data-text);position:absolute;left:-2px;text-shadow:1px 0 #4e73df;top:0;color:#5a5c69;background:#f8f9fc;overflow:hidden;clip:rect(0,900px,0,0);animation:noise-anim-2 3s infinite linear alternate-reverse}footer.sticky-footer{padding:2rem 0;flex-shrink:0}footer.sticky-footer .copyright{line-height:1;font-size:.8rem}body.sidebar-toggled footer.sticky-footer{width:100%}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/views/imports/sb-admin-2.min.css":
/*!*******************************************************!*\
  !*** ./resources/js/views/imports/sb-admin-2.min.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_sb_admin_2_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./sb-admin-2.min.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/views/imports/sb-admin-2.min.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_sb_admin_2_min_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_sb_admin_2_min_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/sass/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);