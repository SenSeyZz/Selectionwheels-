"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/counter-strike/utility/nuke",{

/***/ "./src/counter-strike/utility/maps/nuke_flash.js":
/*!*******************************************************!*\
  !*** ./src/counter-strike/utility/maps/nuke_flash.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nuke_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nuke.module.css */ \"./src/counter-strike/utility/maps/nuke.module.css\");\n/* harmony import */ var _nuke_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nuke_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar FlashElementNuke = function(param) {\n    var seeOtherFlash = param.seeOtherFlash, handleMouseEnterFlash = param.handleMouseEnterFlash, showVideo = param.showVideo, name = param.name;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            seeOtherFlash && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/csImages/flash.webp\",\n                className: \"\".concat((_nuke_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"nuke-ramp-flash\"]), \" img-fluid smaller-image hover-effect\"),\n                alt: \"Responsive image\",\n                onClick: handleMouseEnterFlash\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\counter-strike\\\\utility\\\\maps\\\\nuke_flash.js\",\n                lineNumber: 8,\n                columnNumber: 11\n            }, _this),\n            showVideo && name === \"ramp flash\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                className: (_nuke_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"youtube-vid\"]),\n                width: \"315\",\n                height: \"560\",\n                src: \"https://www.youtube.com/embed/o99fySj53VQ\",\n                allow: \"accelerometer; autoplay; clipboard-write; encrypted-media;   gyroscope; picture-in-picture;   web-share\",\n                frameborder: \"0\",\n                allowfullscreen: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\counter-strike\\\\utility\\\\maps\\\\nuke_flash.js\",\n                lineNumber: 17,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = FlashElementNuke;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlashElementNuke);\nvar _c;\n$RefreshReg$(_c, \"FlashElementNuke\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY291bnRlci1zdHJpa2UvdXRpbGl0eS9tYXBzL251a2VfZmxhc2guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFFdkMsSUFBTUUsbUJBQW1CO1FBQUVDLHNCQUFBQSxlQUFlQyw4QkFBQUEsdUJBQXVCQyxrQkFBQUEsV0FBV0MsYUFBQUE7SUFDeEUscUJBQ0k7O1lBQ01ILCtCQUNKLDhEQUFDSTtnQkFDQ0MsS0FBSTtnQkFDSkMsV0FBVyxHQUE2QixPQUExQlIsNEVBQXlCLEVBQUM7Z0JBQ3hDUyxLQUFJO2dCQUNKQyxTQUFTUDs7Ozs7O1lBSVZDLGFBQWNDLFNBQVMsOEJBQ3hCLDhEQUFDTTtnQkFBT0gsV0FBV1Isd0VBQXFCO2dCQUN0Q1ksT0FBTTtnQkFDTkMsUUFBTztnQkFDUE4sS0FBSTtnQkFDSk8sT0FBTTtnQkFHTkMsYUFBWTtnQkFFWkMsZUFBZTs7Ozs7Ozs7QUFNM0I7S0E1Qk1mO0FBOEJOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvdW50ZXItc3RyaWtlL3V0aWxpdHkvbWFwcy9udWtlX2ZsYXNoLmpzPzE2NGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL251a2UubW9kdWxlLmNzcyc7IFxyXG5cclxuY29uc3QgRmxhc2hFbGVtZW50TnVrZSA9ICh7c2VlT3RoZXJGbGFzaCwgaGFuZGxlTW91c2VFbnRlckZsYXNoLCBzaG93VmlkZW8sIG5hbWV9KSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgeyBzZWVPdGhlckZsYXNoICYmKFxyXG4gICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgc3JjPScvY3NJbWFnZXMvZmxhc2gud2VicCcgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wibnVrZS1yYW1wLWZsYXNoXCJdfSBpbWctZmx1aWQgc21hbGxlci1pbWFnZSBob3Zlci1lZmZlY3RgfSBcclxuICAgICAgICAgICAgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiIFxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb3VzZUVudGVyRmxhc2h9PlxyXG4gICAgICAgICAgPC9pbWc+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHtzaG93VmlkZW8gJiYgIG5hbWUgPT09IFwicmFtcCBmbGFzaFwiICYmIChcclxuICAgICAgICAgIDxpZnJhbWUgY2xhc3NOYW1lPXtzdHlsZXNbXCJ5b3V0dWJlLXZpZFwiXX1cclxuICAgICAgICAgICAgd2lkdGg9XCIzMTVcIiBcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNTYwXCJcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvbzk5ZnlTajUzVlFcIlxyXG4gICAgICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTtcclxuICAgICAgICAgICAgICBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTtcclxuICAgICAgICAgICAgICB3ZWItc2hhcmVcIlxyXG4gICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICA+PC9pZnJhbWU+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGbGFzaEVsZW1lbnROdWtlOyAiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJGbGFzaEVsZW1lbnROdWtlIiwic2VlT3RoZXJGbGFzaCIsImhhbmRsZU1vdXNlRW50ZXJGbGFzaCIsInNob3dWaWRlbyIsIm5hbWUiLCJpbWciLCJzcmMiLCJjbGFzc05hbWUiLCJhbHQiLCJvbkNsaWNrIiwiaWZyYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJhbGxvdyIsImZyYW1lYm9yZGVyIiwiYWxsb3dmdWxsc2NyZWVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/counter-strike/utility/maps/nuke_flash.js\n"));

/***/ })

});