"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/counter-strike/utility",{

/***/ "./src/fadeIn.js":
/*!***********************!*\
  !*** ./src/fadeIn.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ fadeIn; }\n/* harmony export */ });\n/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animate.css/animate.min.css */ \"./node_modules/animate.css/animate.min.css\");\n/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// Add these imports at the beginning of your file\nvar _s = $RefreshSig$();\n\n\nfunction fadeIn() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // Hide the image containers initially\n        document.querySelectorAll(\".image-container, .weapon-container, left-container\").forEach(function(element) {\n            element.style.visibility = \"hidden\";\n        });\n        // Add a delay to give time for the page to load before triggering the animation\n        var delay = 200; // milliseconds\n        setTimeout(function() {\n            // Add the 'animate__animated', 'animate__fadeIn', and 'animate__slower' classes\n            // to trigger the fadeIn animation with slower duration\n            document.querySelectorAll(\".image-container, .weapon-container, left\").forEach(function(element) {\n                element.style.visibility = \"visible\";\n                element.classList.add(\"animate__animated\", \"animate__fadeIn\", \"animate__slower\");\n            });\n        }, delay);\n    }, []);\n    return null; // You can return null or an empty element as this component doesn't render anything\n}\n_s(fadeIn, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmFkZUluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsa0RBQWtEOztBQUNiO0FBQ0g7QUFFbkIsU0FBU0M7O0lBQ3RCRCxnREFBU0EsQ0FBQztRQUNSLHNDQUFzQztRQUN0Q0UsU0FBU0MsZ0JBQWdCLENBQUMsdURBQXdEQyxPQUFPLENBQUMsU0FBQ0M7WUFDekZBLFFBQVFDLEtBQUssQ0FBQ0MsVUFBVSxHQUFHO1FBQzdCO1FBRUEsZ0ZBQWdGO1FBQ2hGLElBQU1DLFFBQVEsS0FBSyxlQUFlO1FBQ2xDQyxXQUFXO1lBQ1QsZ0ZBQWdGO1lBQ2hGLHVEQUF1RDtZQUN2RFAsU0FBU0MsZ0JBQWdCLENBQUMsNkNBQThDQyxPQUFPLENBQUMsU0FBQ0M7Z0JBQy9FQSxRQUFRQyxLQUFLLENBQUNDLFVBQVUsR0FBRztnQkFDM0JGLFFBQVFLLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixtQkFBbUI7WUFDaEU7UUFDRixHQUFHSDtJQUNMLEdBQUcsRUFBRTtJQUVMLE9BQU8sTUFBTSxvRkFBb0Y7QUFDbkc7R0FwQndCUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmFkZUluLmpzPzRmYmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQWRkIHRoZXNlIGltcG9ydHMgYXQgdGhlIGJlZ2lubmluZyBvZiB5b3VyIGZpbGVcclxuaW1wb3J0ICdhbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3MnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmYWRlSW4oKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEhpZGUgdGhlIGltYWdlIGNvbnRhaW5lcnMgaW5pdGlhbGx5XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1hZ2UtY29udGFpbmVyLCAud2VhcG9uLWNvbnRhaW5lciwgbGVmdC1jb250YWluZXInICkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFkZCBhIGRlbGF5IHRvIGdpdmUgdGltZSBmb3IgdGhlIHBhZ2UgdG8gbG9hZCBiZWZvcmUgdHJpZ2dlcmluZyB0aGUgYW5pbWF0aW9uXHJcbiAgICBjb25zdCBkZWxheSA9IDIwMDsgLy8gbWlsbGlzZWNvbmRzXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgLy8gQWRkIHRoZSAnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fZmFkZUluJywgYW5kICdhbmltYXRlX19zbG93ZXInIGNsYXNzZXNcclxuICAgICAgLy8gdG8gdHJpZ2dlciB0aGUgZmFkZUluIGFuaW1hdGlvbiB3aXRoIHNsb3dlciBkdXJhdGlvblxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1hZ2UtY29udGFpbmVyLCAud2VhcG9uLWNvbnRhaW5lciwgbGVmdCcgKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fZmFkZUluJywgJ2FuaW1hdGVfX3Nsb3dlcicpO1xyXG4gICAgICB9KTtcclxuICAgIH0sIGRlbGF5KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiBudWxsOyAvLyBZb3UgY2FuIHJldHVybiBudWxsIG9yIGFuIGVtcHR5IGVsZW1lbnQgYXMgdGhpcyBjb21wb25lbnQgZG9lc24ndCByZW5kZXIgYW55dGhpbmdcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiZmFkZUluIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJkZWxheSIsInNldFRpbWVvdXQiLCJjbGFzc0xpc3QiLCJhZGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/fadeIn.js\n"));

/***/ })

});