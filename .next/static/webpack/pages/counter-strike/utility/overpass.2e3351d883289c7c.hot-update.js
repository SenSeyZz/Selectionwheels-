"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/counter-strike/utility/overpass",{

/***/ "./src/counter-strike/utility/maps/topElementContainer.js":
/*!****************************************************************!*\
  !*** ./src/counter-strike/utility/maps/topElementContainer.js ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _switchFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switchFunctions */ \"./src/counter-strike/utility/maps/switchFunctions.js\");\n// TopElementsContainer.js\nvar _this = undefined;\n\n\n\nvar TopElementsContainer = function(param) {\n    var setSeeOtherMolo = param.setSeeOtherMolo, setSeeOtherSmoke = param.setSeeOtherSmoke, setSeeOtherFlash = param.setSeeOtherFlash, styles = param.styles;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"top-elements-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/csImages/smoke.png\",\n                className: \"top-smoke hover-effect-top-smoke\",\n                alt: \"Top Image\",\n                onClick: function() {\n                    return (0,_switchFunctions__WEBPACK_IMPORTED_MODULE_2__.handleSwitchToSmoke)(setSeeOtherMolo, setSeeOtherSmoke, setSeeOtherFlash);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\counter-strike\\\\utility\\\\maps\\\\topElementContainer.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/csImages/incendiary.webp\",\n                className: \"top-inciendiary hover-effect-top-molo\",\n                alt: \"Top Image\",\n                onClick: function() {\n                    return (0,_switchFunctions__WEBPACK_IMPORTED_MODULE_2__.handleSwitchToMolo)(setSeeOtherMolo, setSeeOtherSmoke, setSeeOtherFlash);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\counter-strike\\\\utility\\\\maps\\\\topElementContainer.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/csImages/flash.webp\",\n                className: \"top-flash hover-effect-top-molo\",\n                alt: \"Top Image\",\n                onClick: function() {\n                    return (0,_switchFunctions__WEBPACK_IMPORTED_MODULE_2__.handleSwitchToFlash)(setSeeOtherMolo, setSeeOtherSmoke, setSeeOtherFlash);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\counter-strike\\\\utility\\\\maps\\\\topElementContainer.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\counter-strike\\\\utility\\\\maps\\\\topElementContainer.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_c = TopElementsContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopElementsContainer);\nvar _c;\n$RefreshReg$(_c, \"TopElementsContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY291bnRlci1zdHJpa2UvdXRpbGl0eS9tYXBzL3RvcEVsZW1lbnRDb250YWluZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMEJBQTBCOzs7QUFDQTtBQUN1RTtBQUVqRyxJQUFNSSx1QkFBdUI7UUFBR0Msd0JBQUFBLGlCQUFpQkMseUJBQUFBLGtCQUFrQkMseUJBQUFBLGtCQUFrQkMsZUFBQUE7SUFDbkYscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFDQ0MsS0FBSTtnQkFDSkYsV0FBVTtnQkFDVkcsS0FBSTtnQkFDSkMsU0FBUzsyQkFBTWIscUVBQW1CQSxDQUFDSSxpQkFBaUJDLGtCQUFrQkM7Ozs7Ozs7MEJBRXhFLDhEQUFDSTtnQkFDQ0MsS0FBSTtnQkFDSkYsV0FBVTtnQkFDVkcsS0FBSTtnQkFDSkMsU0FBUzsyQkFBTVosb0VBQWtCQSxDQUFDRyxpQkFBaUJDLGtCQUFrQkM7Ozs7Ozs7MEJBRXZFLDhEQUFDSTtnQkFDQ0MsS0FBSTtnQkFDSkYsV0FBVTtnQkFDVkcsS0FBSTtnQkFDSkMsU0FBUzsyQkFBTVgscUVBQW1CQSxDQUFDRSxpQkFBaUJDLGtCQUFrQkM7Ozs7Ozs7Ozs7Ozs7QUFJOUU7S0F2Qk1IO0FBeUJOLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvdW50ZXItc3RyaWtlL3V0aWxpdHkvbWFwcy90b3BFbGVtZW50Q29udGFpbmVyLmpzP2Q0OWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVG9wRWxlbWVudHNDb250YWluZXIuanNcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgaGFuZGxlU3dpdGNoVG9TbW9rZSwgaGFuZGxlU3dpdGNoVG9Nb2xvLCBoYW5kbGVTd2l0Y2hUb0ZsYXNoIH0gZnJvbSAnLi9zd2l0Y2hGdW5jdGlvbnMnOyBcclxuXHJcbmNvbnN0IFRvcEVsZW1lbnRzQ29udGFpbmVyID0gKHsgc2V0U2VlT3RoZXJNb2xvLCBzZXRTZWVPdGhlclNtb2tlLCBzZXRTZWVPdGhlckZsYXNoLCBzdHlsZXMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1lbGVtZW50cy1jb250YWluZXJcIj5cclxuICAgICAgPGltZyBcclxuICAgICAgICBzcmM9Jy9jc0ltYWdlcy9zbW9rZS5wbmcnIFxyXG4gICAgICAgIGNsYXNzTmFtZT1cInRvcC1zbW9rZSBob3Zlci1lZmZlY3QtdG9wLXNtb2tlXCJcclxuICAgICAgICBhbHQ9XCJUb3AgSW1hZ2VcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN3aXRjaFRvU21va2Uoc2V0U2VlT3RoZXJNb2xvLCBzZXRTZWVPdGhlclNtb2tlLCBzZXRTZWVPdGhlckZsYXNoKX1cclxuICAgICAgLz5cclxuICAgICAgPGltZyBcclxuICAgICAgICBzcmM9Jy9jc0ltYWdlcy9pbmNlbmRpYXJ5LndlYnAnIFxyXG4gICAgICAgIGNsYXNzTmFtZT1cInRvcC1pbmNpZW5kaWFyeSBob3Zlci1lZmZlY3QtdG9wLW1vbG9cIlxyXG4gICAgICAgIGFsdD1cIlRvcCBJbWFnZVwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3dpdGNoVG9Nb2xvKHNldFNlZU90aGVyTW9sbywgc2V0U2VlT3RoZXJTbW9rZSwgc2V0U2VlT3RoZXJGbGFzaCl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbWcgXHJcbiAgICAgICAgc3JjPScvY3NJbWFnZXMvZmxhc2gud2VicCcgXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidG9wLWZsYXNoIGhvdmVyLWVmZmVjdC10b3AtbW9sb1wiXHJcbiAgICAgICAgYWx0PVwiVG9wIEltYWdlXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTd2l0Y2hUb0ZsYXNoKHNldFNlZU90aGVyTW9sbywgc2V0U2VlT3RoZXJTbW9rZSwgc2V0U2VlT3RoZXJGbGFzaCl9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wRWxlbWVudHNDb250YWluZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImhhbmRsZVN3aXRjaFRvU21va2UiLCJoYW5kbGVTd2l0Y2hUb01vbG8iLCJoYW5kbGVTd2l0Y2hUb0ZsYXNoIiwiVG9wRWxlbWVudHNDb250YWluZXIiLCJzZXRTZWVPdGhlck1vbG8iLCJzZXRTZWVPdGhlclNtb2tlIiwic2V0U2VlT3RoZXJGbGFzaCIsInN0eWxlcyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/counter-strike/utility/maps/topElementContainer.js\n"));

/***/ })

});