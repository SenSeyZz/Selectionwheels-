"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/counter-strike/utility/vertigo",{

/***/ "./src/counter-strike/utility/maps/vertigo_flash.js":
/*!**********************************************************!*\
  !*** ./src/counter-strike/utility/maps/vertigo_flash.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _vertigo_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vertigo.module.css */ \"./src/counter-strike/utility/maps/vertigo.module.css\");\n/* harmony import */ var _vertigo_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vertigo_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar FlashElementVertigo = function(param) {\n    var seeOtherFlash = param.seeOtherFlash, handleMouseEnterFlash = param.handleMouseEnterFlash, showVideo = param.showVideo, name = param.name, yellowFlash = param.yellowFlash;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            seeOtherFlash && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/csImages/flash.webp\",\n                className: \"\".concat((_vertigo_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"vertigo-yellow-flash\"]), \" img-fluid smaller-image hover-effect\"),\n                alt: \"Responsive image\",\n                onClick: handleMouseEnterFlash\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\counter-strike\\\\utility\\\\maps\\\\vertigo_flash.js\",\n                lineNumber: 8,\n                columnNumber: 11\n            }, _this),\n            yellowFlash && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/csImages/red_cross.png\",\n                className: \"\".concat((_vertigo_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"Ct-ramp-flash\"]), \" img-fluid smaller-image hover-effect red_cross\"),\n                alt: \"Responsive image\",\n                onClick: handlecross\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\counter-strike\\\\utility\\\\maps\\\\vertigo_flash.js\",\n                lineNumber: 17,\n                columnNumber: 11\n            }, _this),\n            showVideo && name === \"vertigo-yellow-flash\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                className: (_vertigo_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"youtube-vid\"]),\n                width: \"315\",\n                height: \"560\",\n                src: \"https://www.youtube.com/embed/2D3cE9q7Mr4\",\n                allow: \"accelerometer; autoplay; clipboard-write; encrypted-media;   gyroscope; picture-in-picture;   web-share\",\n                frameborder: \"0\",\n                allowfullscreen: \"1\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\counter-strike\\\\utility\\\\maps\\\\vertigo_flash.js\",\n                lineNumber: 26,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = FlashElementVertigo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlashElementVertigo);\nvar _c;\n$RefreshReg$(_c, \"FlashElementVertigo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY291bnRlci1zdHJpa2UvdXRpbGl0eS9tYXBzL3ZlcnRpZ29fZmxhc2guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBRTFDLElBQU1FLHNCQUFzQjtRQUFFQyxzQkFBQUEsZUFBZUMsOEJBQUFBLHVCQUF1QkMsa0JBQUFBLFdBQVdDLGFBQUFBLE1BQU1DLG9CQUFBQTtJQUNqRixxQkFDSTs7WUFDRUosK0JBQ0EsOERBQUNLO2dCQUNDQyxLQUFJO2dCQUNKQyxXQUFXLEdBQWtDLE9BQS9CVCxvRkFBOEIsRUFBQztnQkFDN0NVLEtBQUk7Z0JBQ0pDLFNBQVNSOzs7Ozs7WUFJVkcsNkJBQ0QsOERBQUNDO2dCQUNDQyxLQUFJO2dCQUNKQyxXQUFXLEdBQTJCLE9BQXhCVCw2RUFBdUIsRUFBQztnQkFDdENVLEtBQUk7Z0JBQ0pDLFNBQVNDOzs7Ozs7WUFJVlIsYUFBY0MsU0FBUyx3Q0FDeEIsOERBQUNRO2dCQUFPSixXQUFXVCwyRUFBcUI7Z0JBQ3RDYyxPQUFNO2dCQUNOQyxRQUFPO2dCQUNQUCxLQUFJO2dCQUNKUSxPQUFNO2dCQUdOQyxhQUFZO2dCQUVaQyxpQkFBZ0I7Ozs7Ozs7O0FBTTVCO0tBckNNakI7QUF1Q04sK0RBQWVBLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY291bnRlci1zdHJpa2UvdXRpbGl0eS9tYXBzL3ZlcnRpZ29fZmxhc2guanM/MTgxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdmVydGlnby5tb2R1bGUuY3NzJzsgXHJcblxyXG5jb25zdCBGbGFzaEVsZW1lbnRWZXJ0aWdvID0gKHtzZWVPdGhlckZsYXNoLCBoYW5kbGVNb3VzZUVudGVyRmxhc2gsIHNob3dWaWRlbywgbmFtZSwgeWVsbG93Rmxhc2h9KSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7IHNlZU90aGVyRmxhc2ggJiYoXHJcbiAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICBzcmM9Jy9jc0ltYWdlcy9mbGFzaC53ZWJwJyBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJ2ZXJ0aWdvLXllbGxvdy1mbGFzaFwiXX0gaW1nLWZsdWlkIHNtYWxsZXItaW1hZ2UgaG92ZXItZWZmZWN0YH0gXHJcbiAgICAgICAgICAgIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIiBcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTW91c2VFbnRlckZsYXNofT5cclxuICAgICAgICAgIDwvaW1nPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7eWVsbG93Rmxhc2ggJiYoXHJcbiAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICBzcmM9Jy9jc0ltYWdlcy9yZWRfY3Jvc3MucG5nJyBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJDdC1yYW1wLWZsYXNoXCJdfSBpbWctZmx1aWQgc21hbGxlci1pbWFnZSBob3Zlci1lZmZlY3QgcmVkX2Nyb3NzYH0gXHJcbiAgICAgICAgICAgIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIiBcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlY3Jvc3N9PlxyXG4gICAgICAgICAgPC9pbWc+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHtzaG93VmlkZW8gJiYgIG5hbWUgPT09IFwidmVydGlnby15ZWxsb3ctZmxhc2hcIiAmJiAoXHJcbiAgICAgICAgICA8aWZyYW1lIGNsYXNzTmFtZT17c3R5bGVzW1wieW91dHViZS12aWRcIl19XHJcbiAgICAgICAgICAgIHdpZHRoPVwiMzE1XCIgXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjU2MFwiXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzJEM2NFOXE3TXI0XCJcclxuICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7XHJcbiAgICAgICAgICAgICAgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7XHJcbiAgICAgICAgICAgICAgd2ViLXNoYXJlXCJcclxuICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGFsbG93ZnVsbHNjcmVlbj1cIjFcIlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgID48L2lmcmFtZT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsYXNoRWxlbWVudFZlcnRpZ287ICJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkZsYXNoRWxlbWVudFZlcnRpZ28iLCJzZWVPdGhlckZsYXNoIiwiaGFuZGxlTW91c2VFbnRlckZsYXNoIiwic2hvd1ZpZGVvIiwibmFtZSIsInllbGxvd0ZsYXNoIiwiaW1nIiwic3JjIiwiY2xhc3NOYW1lIiwiYWx0Iiwib25DbGljayIsImhhbmRsZWNyb3NzIiwiaWZyYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJhbGxvdyIsImZyYW1lYm9yZGVyIiwiYWxsb3dmdWxsc2NyZWVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/counter-strike/utility/maps/vertigo_flash.js\n"));

/***/ })

});