webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "R:\\Code\\trynext\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Layout = function Layout(props) {
  function movered() {
    var title = document.getElementById('titled');
    title.style.color = "red";
    title.style.transition = "2s";
    title.style.transform = "translateX(200px)";
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "BitzPrice"), __jsx("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
    integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
    crossorigin: "anonymous",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  })), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx("h2", {
    id: "titled",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Halo"), __jsx("button", {
    onClick: function onClick() {
      return movered();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "movered"), props.children, __jsx("script", {
    src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
    integrity: "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
    crossorigin: "anonymous",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), __jsx("script", {
    src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
    integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
    crossorigin: "anonymous",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx("script", {
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js",
    integrity: "sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI",
    crossorigin: "anonymous",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }));
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJwcm9wcyIsIm1vdmVyZWQiLCJ0aXRsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImNvbG9yIiwidHJhbnNpdGlvbiIsInRyYW5zZm9ybSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFDdEIsV0FBU0MsT0FBVCxHQUFtQjtBQUNmLFFBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWQ7QUFDQUYsU0FBSyxDQUFDRyxLQUFOLENBQVlDLEtBQVosR0FBcUIsS0FBckI7QUFDQUosU0FBSyxDQUFDRyxLQUFOLENBQVlFLFVBQVosR0FBMEIsSUFBMUI7QUFDQUwsU0FBSyxDQUFDRyxLQUFOLENBQVlHLFNBQVosR0FBeUIsbUJBQXpCO0FBQ0g7O0FBRUQsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUVJO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLDBFQUE1QjtBQUF1RyxhQUFTLEVBQUMseUVBQWpIO0FBQTJMLGVBQVcsRUFBQyxXQUF2TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESixFQUtJLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBTUk7QUFBSSxNQUFFLEVBQUMsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkosRUFPSTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1QLE9BQU8sRUFBYjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSixFQVFLRCxLQUFLLENBQUNTLFFBUlgsRUFTSTtBQUFRLE9BQUcsRUFBQyxrREFBWjtBQUErRCxhQUFTLEVBQUMseUVBQXpFO0FBQW1KLGVBQVcsRUFBQyxXQUEvSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosRUFVSTtBQUFRLE9BQUcsRUFBQyxzRUFBWjtBQUFtRixhQUFTLEVBQUMseUVBQTdGO0FBQXVLLGVBQVcsRUFBQyxXQUFuTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkosRUFXSTtBQUFRLE9BQUcsRUFBQyx3RUFBWjtBQUFxRixhQUFTLEVBQUMseUVBQS9GO0FBQXlLLGVBQVcsRUFBQyxXQUFyTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEosQ0FESjtBQWVILENBdkJEOztLQUFNVixNO0FBeUJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWJvdXQuanMuMDBlN2Y3MGM2MjI4ZTcxNGRkYTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBtb3ZlcmVkKCkgeyAgIFxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlZCcpO1xyXG4gICAgICAgIHRpdGxlLnN0eWxlLmNvbG9yID0gIFwicmVkXCI7XHJcbiAgICAgICAgdGl0bGUuc3R5bGUudHJhbnNpdGlvbiA9ICBcIjJzXCI7XHJcbiAgICAgICAgdGl0bGUuc3R5bGUudHJhbnNmb3JtID0gIFwidHJhbnNsYXRlWCgyMDBweClcIjtcclxuICAgIH0gICAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5CaXR6UHJpY2U8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPGgyIGlkPVwidGl0bGVkXCI+SGFsbzwvaDI+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbW92ZXJlZCgpfT5tb3ZlcmVkPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy41LjEuc2xpbS5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtRGZYZHoyaHRQSDBsc1NTczVuQ1RwdWovenk0QytPR3BhbW9GVnkzOE1WQm5FK0liYlZZVWV3K09yQ1hhUmtmalwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9wb3BwZXIuanNAMS4xNi4wL2Rpc3QvdW1kL3BvcHBlci5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtUTZFOVJIdmJJeVpGSm9mdCsybUpiSGFFV2xkbHZJOUlPWXk1bjN6Vjl6elR0bUkzVWtzZFFSVnZveE1mb29Bb1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvanMvYm9vdHN0cmFwLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1PZ1ZSdnVBVFAxejdKakhMa3VPVTdYdzcwNCtoODM1THIrNlFMOVV2WWpaRTNJcHU2VHA3NWo3Qmgva1IwSktJXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=