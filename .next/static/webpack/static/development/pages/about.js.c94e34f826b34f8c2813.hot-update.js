webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "R:\\Code\\trynext\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 // import {useEffect} from 'react'

var Layout = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Layout, _Component);

  var _super = _createSuper(Layout);

  function Layout(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    return _super.call(this, props); // this.titleRef = React.createRef();
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var title = document.getElementById('titled');
      setTimeout(function () {
        console.log(title);
        title.style.color = "red";
        title.style.transition = "2s";
        title.style.color = "red";
      }, 2000);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }
      }, "BitzPrice"), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
        integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
        crossorigin: "anonymous",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }
      })), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }
      }), __jsx("h2", {
        id: "titled",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }
      }, "Halo"), this.props.children, __jsx("script", {
        src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
        integrity: "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
        crossorigin: "anonymous",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }
      }), __jsx("script", {
        src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
        integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
        crossorigin: "anonymous",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }
      }), __jsx("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js",
        integrity: "sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI",
        crossorigin: "anonymous",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJwcm9wcyIsInRpdGxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJjb2xvciIsInRyYW5zaXRpb24iLCJjaGlsZHJlbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztJQUVNQSxNOzs7OztBQUNGLGtCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsNkJBQ1JBLEtBRFEsR0FFZDtBQUNIOzs7O3dDQUNrQjtBQUNmLFVBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWQ7QUFFQUMsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2JDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFaO0FBQ0FBLGFBQUssQ0FBQ00sS0FBTixDQUFZQyxLQUFaLEdBQXFCLEtBQXJCO0FBQ0FQLGFBQUssQ0FBQ00sS0FBTixDQUFZRSxVQUFaLEdBQTBCLElBQTFCO0FBQ0FSLGFBQUssQ0FBQ00sS0FBTixDQUFZQyxLQUFaLEdBQXFCLEtBQXJCO0FBQ0gsT0FMUyxFQUtQLElBTE8sQ0FBVjtBQU1IOzs7NkJBQ1E7QUFDTCxhQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLEVBRUk7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUMsMEVBQTVCO0FBQXVHLGlCQUFTLEVBQUMseUVBQWpIO0FBQTJMLG1CQUFXLEVBQUMsV0FBdk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBREosRUFLSSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFMSixFQU1JO0FBQUksVUFBRSxFQUFDLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSixFQU9LLEtBQUtSLEtBQUwsQ0FBV1UsUUFQaEIsRUFRSTtBQUFRLFdBQUcsRUFBQyxrREFBWjtBQUErRCxpQkFBUyxFQUFDLHlFQUF6RTtBQUFtSixtQkFBVyxFQUFDLFdBQS9KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFSSixFQVNJO0FBQVEsV0FBRyxFQUFDLHNFQUFaO0FBQW1GLGlCQUFTLEVBQUMseUVBQTdGO0FBQXVLLG1CQUFXLEVBQUMsV0FBbkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVRKLEVBVUk7QUFBUSxXQUFHLEVBQUMsd0VBQVo7QUFBcUYsaUJBQVMsRUFBQyx5RUFBL0Y7QUFBeUssbUJBQVcsRUFBQyxXQUFyTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVkosQ0FESjtBQWdCSDs7OztFQWhDZ0JDLCtDOztBQW1DTloscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFib3V0LmpzLmM5NGUzNGY4MjZiMzRmOGMyODEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JyAgXHJcbi8vIGltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIC8vIHRoaXMudGl0bGVSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVkJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcclxuICAgICAgICAgICAgdGl0bGUuc3R5bGUuY29sb3IgPSAgXCJyZWRcIjtcclxuICAgICAgICAgICAgdGl0bGUuc3R5bGUudHJhbnNpdGlvbiA9ICBcIjJzXCI7XHJcbiAgICAgICAgICAgIHRpdGxlLnN0eWxlLmNvbG9yID0gIFwicmVkXCI7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5CaXR6UHJpY2U8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgICAgIDxoMiBpZD1cInRpdGxlZFwiPkhhbG88L2gyPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjUuMS5zbGltLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1EZlhkejJodFBIMGxzU1NzNW5DVHB1ai96eTRDK09HcGFtb0ZWeTM4TVZCbkUrSWJiVllVZXcrT3JDWGFSa2ZqXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9wb3BwZXIuanNAMS4xNi4wL2Rpc3QvdW1kL3BvcHBlci5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtUTZFOVJIdmJJeVpGSm9mdCsybUpiSGFFV2xkbHZJOUlPWXk1bjN6Vjl6elR0bUkzVWtzZFFSVnZveE1mb29Bb1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2pzL2Jvb3RzdHJhcC5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtT2dWUnZ1QVRQMXo3SmpITGt1T1U3WHc3MDQraDgzNUxyKzZRTDlVdllqWkUzSXB1NlRwNzVqN0JoL2tSMEpLSVwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==