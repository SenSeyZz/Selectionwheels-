"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/counter-strike/Wheels/weaponWheels",{

/***/ "./src/fadeIn.js":
/*!***********************!*\
  !*** ./src/fadeIn.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ fadeIn; }\n/* harmony export */ });\n/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animate.css/animate.min.css */ \"./node_modules/animate.css/animate.min.css\");\n/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// Add these imports at the beginning of your file\nvar _s = $RefreshSig$();\n\n\nfunction fadeIn() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // Hide the image containers initially\n        document.querySelectorAll(\".image-container, .weapon-container\").forEach(function(element) {\n            element.style.visibility = \"hidden\";\n        });\n        // Add a delay to give time for the page to load before triggering the animation\n        var delay = 200; // milliseconds\n        setTimeout(function() {\n            // Add the 'animate__animated', 'animate__fadeIn', and 'animate__slower' classes\n            // to trigger the fadeIn animation with slower duration\n            document.querySelectorAll(\".image-container\").forEach(function(element) {\n                element.style.visibility = \"visible\";\n                element.classList.add(\"animate__animated\", \"animate__fadeIn\", \"animate__slower\");\n            });\n        }, delay);\n    }, []);\n    return null; // You can return null or an empty element as this component doesn't render anything\n}\n_s(fadeIn, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmFkZUluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsa0RBQWtEOztBQUNiO0FBQ0g7QUFFbkIsU0FBU0M7O0lBQ3RCRCxnREFBU0EsQ0FBQztRQUNSLHNDQUFzQztRQUN0Q0UsU0FBU0MsZ0JBQWdCLENBQUMsdUNBQXdDQyxPQUFPLENBQUMsU0FBQ0M7WUFDekVBLFFBQVFDLEtBQUssQ0FBQ0MsVUFBVSxHQUFHO1FBQzdCO1FBRUEsZ0ZBQWdGO1FBQ2hGLElBQU1DLFFBQVEsS0FBSyxlQUFlO1FBQ2xDQyxXQUFXO1lBQ1QsZ0ZBQWdGO1lBQ2hGLHVEQUF1RDtZQUN2RFAsU0FBU0MsZ0JBQWdCLENBQUMsb0JBQXFCQyxPQUFPLENBQUMsU0FBQ0M7Z0JBQ3REQSxRQUFRQyxLQUFLLENBQUNDLFVBQVUsR0FBRztnQkFDM0JGLFFBQVFLLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixtQkFBbUI7WUFDaEU7UUFDRixHQUFHSDtJQUNMLEdBQUcsRUFBRTtJQUVMLE9BQU8sTUFBTSxvRkFBb0Y7QUFDbkc7R0FwQndCUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmFkZUluLmpzPzRmYmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQWRkIHRoZXNlIGltcG9ydHMgYXQgdGhlIGJlZ2lubmluZyBvZiB5b3VyIGZpbGVcclxuaW1wb3J0ICdhbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3MnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmYWRlSW4oKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEhpZGUgdGhlIGltYWdlIGNvbnRhaW5lcnMgaW5pdGlhbGx5XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1hZ2UtY29udGFpbmVyLCAud2VhcG9uLWNvbnRhaW5lcicgKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQWRkIGEgZGVsYXkgdG8gZ2l2ZSB0aW1lIGZvciB0aGUgcGFnZSB0byBsb2FkIGJlZm9yZSB0cmlnZ2VyaW5nIHRoZSBhbmltYXRpb25cclxuICAgIGNvbnN0IGRlbGF5ID0gMjAwOyAvLyBtaWxsaXNlY29uZHNcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAvLyBBZGQgdGhlICdhbmltYXRlX19hbmltYXRlZCcsICdhbmltYXRlX19mYWRlSW4nLCBhbmQgJ2FuaW1hdGVfX3Nsb3dlcicgY2xhc3Nlc1xyXG4gICAgICAvLyB0byB0cmlnZ2VyIHRoZSBmYWRlSW4gYW5pbWF0aW9uIHdpdGggc2xvd2VyIGR1cmF0aW9uXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWFnZS1jb250YWluZXInICkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJywgJ2FuaW1hdGVfX2ZhZGVJbicsICdhbmltYXRlX19zbG93ZXInKTtcclxuICAgICAgfSk7XHJcbiAgICB9LCBkZWxheSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gbnVsbDsgLy8gWW91IGNhbiByZXR1cm4gbnVsbCBvciBhbiBlbXB0eSBlbGVtZW50IGFzIHRoaXMgY29tcG9uZW50IGRvZXNuJ3QgcmVuZGVyIGFueXRoaW5nXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsImZhZGVJbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50Iiwic3R5bGUiLCJ2aXNpYmlsaXR5IiwiZGVsYXkiLCJzZXRUaW1lb3V0IiwiY2xhc3NMaXN0IiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/fadeIn.js\n"));

/***/ })

});