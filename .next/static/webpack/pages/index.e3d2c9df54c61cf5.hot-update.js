"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animate.css/animate.min.css */ \"./node_modules/animate.css/animate.min.css\");\n/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction App() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        // Hide the image containers initially\n        document.querySelectorAll(\".image-container\").forEach(function(element) {\n            element.style.visibility = \"hidden\";\n        });\n        // Add a delay to give time for the page to load before triggering the animation\n        var delay = 500; // milliseconds\n        setTimeout(function() {\n            // Add the 'animate__animated', 'animate__fadeIn', and 'animate__slower' classes\n            // to trigger the fadeIn animation with slower duration\n            document.querySelectorAll(\".image-container\").forEach(function(element) {\n                element.style.visibility = \"visible\";\n                element.classList.add(\"animate__animated\", \"animate__fadeIn\", \"animate__slower\");\n            });\n        }, delay);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-fluid black-bg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center text-light mt-4\",\n                    children: \"Welcome to this website \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\App.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: \"text-center text-light\",\n                    children: \"Select the game that you want\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\App.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-center text-light\",\n                    children: [\n                        \"My website is there to help you have fun while playing! \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\App.js\",\n                            lineNumber: 29,\n                            columnNumber: 67\n                        }, this),\n                        \" You will also be able to discover multiple important information, so do not wait and go ahead!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\App.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-md-6\",\n                    style: {\n                        height: \"899px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                        href: \"/counter-strike\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ml-3 image-container grayscale\",\n                            style: {\n                                backgroundImage: \"url(/csImages/cs2.jpg)\",\n                                backgroundSize: \"cover\",\n                                height: \"100%\",\n                                padding: \"20px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\App.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\App.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\App.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-md-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                        href: \"/league-of-legends\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"image-container grayscale\",\n                            style: {\n                                backgroundImage: \"url(/lolImages/league.jpg)\",\n                                backgroundSize: \"cover\",\n                                backgroundPosition: \"center center\",\n                                height: \"100%\",\n                                padding: \"20px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\App.js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\App.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\App.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\App.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\App.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFxQztBQUNIO0FBRW5CLFNBQVNDOztJQUN0QkQsZ0RBQVNBLENBQUM7UUFDUixzQ0FBc0M7UUFDdENFLFNBQVNDLGdCQUFnQixDQUFDLG9CQUFvQkMsT0FBTyxDQUFDLFNBQUNDO1lBQ3JEQSxRQUFRQyxLQUFLLENBQUNDLFVBQVUsR0FBRztRQUM3QjtRQUVBLGdGQUFnRjtRQUNoRixJQUFNQyxRQUFRLEtBQUssZUFBZTtRQUNsQ0MsV0FBVztZQUNULGdGQUFnRjtZQUNoRix1REFBdUQ7WUFDdkRQLFNBQVNDLGdCQUFnQixDQUFDLG9CQUFvQkMsT0FBTyxDQUFDLFNBQUNDO2dCQUNyREEsUUFBUUMsS0FBSyxDQUFDQyxVQUFVLEdBQUc7Z0JBQzNCRixRQUFRSyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsbUJBQW1CO1lBQ2hFO1FBQ0YsR0FBR0g7SUFDTCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUE4Qjs7Ozs7OzhCQUM1Qyw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQXlCOzs7Ozs7OEJBQ3ZDLDhEQUFDRztvQkFBRUgsV0FBVTs7d0JBQXlCO3NDQUNvQiw4REFBQ0k7Ozs7O3dCQUFLOzs7Ozs7OzhCQUdoRSw4REFBQ0w7b0JBQUlDLFdBQVU7b0JBQVdQLE9BQU87d0JBQUVZLFFBQVE7b0JBQVE7OEJBQ2pELDRFQUFDQzt3QkFBS0MsTUFBSztrQ0FDVCw0RUFBQ1I7NEJBQ0NDLFdBQVU7NEJBQ1ZQLE9BQU87Z0NBQ0xlLGlCQUFpQjtnQ0FDakJDLGdCQUFnQjtnQ0FDaEJKLFFBQVE7Z0NBQ1JLLFNBQVM7NEJBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS04sOERBQUNYO29CQUFJQyxXQUFVOzhCQUViLDRFQUFDTTt3QkFBS0MsTUFBSztrQ0FDVCw0RUFBQ1I7NEJBQ0NDLFdBQVU7NEJBQ1ZQLE9BQU87Z0NBQ0xlLGlCQUFpQjtnQ0FDakJDLGdCQUFnQjtnQ0FDaEJFLG9CQUFvQjtnQ0FDcEJOLFFBQVE7Z0NBQ1JLLFNBQVM7NEJBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9kO0dBNUR3QnRCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9BcHAuanM/ZTNlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2FuaW1hdGUuY3NzL2FuaW1hdGUubWluLmNzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBIaWRlIHRoZSBpbWFnZSBjb250YWluZXJzIGluaXRpYWxseVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWFnZS1jb250YWluZXInKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9KTtcblxuICAgIC8vIEFkZCBhIGRlbGF5IHRvIGdpdmUgdGltZSBmb3IgdGhlIHBhZ2UgdG8gbG9hZCBiZWZvcmUgdHJpZ2dlcmluZyB0aGUgYW5pbWF0aW9uXG4gICAgY29uc3QgZGVsYXkgPSA1MDA7IC8vIG1pbGxpc2Vjb25kc1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gQWRkIHRoZSAnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fZmFkZUluJywgYW5kICdhbmltYXRlX19zbG93ZXInIGNsYXNzZXNcbiAgICAgIC8vIHRvIHRyaWdnZXIgdGhlIGZhZGVJbiBhbmltYXRpb24gd2l0aCBzbG93ZXIgZHVyYXRpb25cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWFnZS1jb250YWluZXInKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19hbmltYXRlZCcsICdhbmltYXRlX19mYWRlSW4nLCAnYW5pbWF0ZV9fc2xvd2VyJyk7XG4gICAgICB9KTtcbiAgICB9LCBkZWxheSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGJsYWNrLWJnXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1saWdodCBtdC00XCI+V2VsY29tZSB0byB0aGlzIHdlYnNpdGUgPC9oMT5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtbGlnaHRcIj5TZWxlY3QgdGhlIGdhbWUgdGhhdCB5b3Ugd2FudDwvaDQ+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtbGlnaHRcIj5cbiAgICAgICAgICBNeSB3ZWJzaXRlIGlzIHRoZXJlIHRvIGhlbHAgeW91IGhhdmUgZnVuIHdoaWxlIHBsYXlpbmchIDxiciAvPiBZb3Ugd2lsbCBhbHNvIGJlIGFibGUgdG8gZGlzY292ZXIgbXVsdGlwbGUgaW1wb3J0YW50IGluZm9ybWF0aW9uLCBzbyBkbyBub3Qgd2FpdCBhbmQgZ28gYWhlYWQhXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCIgc3R5bGU9e3sgaGVpZ2h0OiAnODk5cHgnIH19PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY291bnRlci1zdHJpa2VcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMyBpbWFnZS1jb250YWluZXIgZ3JheXNjYWxlXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoL2NzSW1hZ2VzL2NzMi5qcGcpJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMjBweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgey8qIENvbnRlbnQgb24gdGhlIHJpZ2h0IHNpZGUgKi99XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9sZWFndWUtb2YtbGVnZW5kc1wiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXIgZ3JheXNjYWxlXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoL2xvbEltYWdlcy9sZWFndWUuanBnKScsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzIwcHgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJBcHAiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsInN0eWxlIiwidmlzaWJpbGl0eSIsImRlbGF5Iiwic2V0VGltZW91dCIsImNsYXNzTGlzdCIsImFkZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDQiLCJwIiwiYnIiLCJoZWlnaHQiLCJMaW5rIiwiaHJlZiIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwicGFkZGluZyIsImJhY2tncm91bmRQb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App.js\n"));

/***/ })

});