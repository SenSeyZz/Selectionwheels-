"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/counter-strike/utility/inferno",{

/***/ "./src/counter-strike/utility/maps/switchFunctions.js":
/*!************************************************************!*\
  !*** ./src/counter-strike/utility/maps/switchFunctions.js ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleMouseLeave: function() { return /* binding */ handleMouseLeave; },\n/* harmony export */   handleSwitchToFlash: function() { return /* binding */ handleSwitchToFlash; },\n/* harmony export */   handleSwitchToMolo: function() { return /* binding */ handleSwitchToMolo; },\n/* harmony export */   handleSwitchToSmoke: function() { return /* binding */ handleSwitchToSmoke; }\n/* harmony export */ });\n// utilityFunctions.js\nvar handleSwitchToMolo = function(setSeeOtherMolo1, setSeeOtherSmoke1, setSeeOtherFlash1) {\n    setSeeOtherMolo1(true);\n    setSeeOtherSmoke1(false);\n    setSeeOtherFlash1(false);\n};\nvar handleSwitchToSmoke = function(setSeeOtherMolo1, setSeeOtherSmoke1, setSeeOtherFlash1) {\n    setSeeOtherMolo1(false);\n    setSeeOtherSmoke1(true);\n    setSeeOtherFlash1(false);\n};\nvar handleSwitchToFlash = function(setSeeOtherMolo1, setSeeOtherSmoke1, setSeeOtherFlash1) {\n    setSeeOtherMolo1(false);\n    setSeeOtherSmoke1(false);\n    setSeeOtherFlash1(true);\n};\nvar handleMouseLeave = function(set) {\n    setShowVideo(false);\n    setName(\"\");\n    if (utility == \"smoke\") {\n        setSeeOtherSmoke(true);\n    } else if (utility == \"molo\") {\n        setSeeOtherMolo(true);\n    } else if (utility == \"flash\") {\n        setSeeOtherFlash(true);\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY291bnRlci1zdHJpa2UvdXRpbGl0eS9tYXBzL3N3aXRjaEZ1bmN0aW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0Esc0JBQXNCO0FBQ2YsSUFBTUEscUJBQXFCLFNBQUNDLGtCQUFpQkMsbUJBQWtCQztJQUNsRUYsaUJBQWdCO0lBQ2hCQyxrQkFBaUI7SUFDakJDLGtCQUFpQjtBQUNuQixFQUFFO0FBRUssSUFBTUMsc0JBQXNCLFNBQUNILGtCQUFpQkMsbUJBQWtCQztJQUNyRUYsaUJBQWdCO0lBQ2hCQyxrQkFBaUI7SUFDakJDLGtCQUFpQjtBQUNuQixFQUFFO0FBRUssSUFBTUUsc0JBQXNCLFNBQUNKLGtCQUFpQkMsbUJBQWtCQztJQUNyRUYsaUJBQWdCO0lBQ2hCQyxrQkFBaUI7SUFDakJDLGtCQUFpQjtBQUNuQixFQUFFO0FBRUcsSUFBTUcsbUJBQW1CLFNBQUNDO0lBQy9CQyxhQUFhO0lBQ2JDLFFBQVE7SUFDUixJQUFHQyxXQUFXLFNBQVE7UUFDcEJSLGlCQUFpQjtJQUNuQixPQUFNLElBQUlRLFdBQVcsUUFBUTtRQUMzQlQsZ0JBQWdCO0lBQ2xCLE9BQU0sSUFBSVMsV0FBVyxTQUFTO1FBQzVCUCxpQkFBaUI7SUFDbkI7QUFFRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb3VudGVyLXN0cmlrZS91dGlsaXR5L21hcHMvc3dpdGNoRnVuY3Rpb25zLmpzPzgwZTUiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIHV0aWxpdHlGdW5jdGlvbnMuanNcclxuZXhwb3J0IGNvbnN0IGhhbmRsZVN3aXRjaFRvTW9sbyA9IChzZXRTZWVPdGhlck1vbG8sIHNldFNlZU90aGVyU21va2UsIHNldFNlZU90aGVyRmxhc2gpID0+IHtcclxuICAgIHNldFNlZU90aGVyTW9sbyh0cnVlKTtcclxuICAgIHNldFNlZU90aGVyU21va2UoZmFsc2UpO1xyXG4gICAgc2V0U2VlT3RoZXJGbGFzaChmYWxzZSk7XHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgY29uc3QgaGFuZGxlU3dpdGNoVG9TbW9rZSA9IChzZXRTZWVPdGhlck1vbG8sIHNldFNlZU90aGVyU21va2UsIHNldFNlZU90aGVyRmxhc2gpID0+IHtcclxuICAgIHNldFNlZU90aGVyTW9sbyhmYWxzZSk7XHJcbiAgICBzZXRTZWVPdGhlclNtb2tlKHRydWUpO1xyXG4gICAgc2V0U2VlT3RoZXJGbGFzaChmYWxzZSk7XHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgY29uc3QgaGFuZGxlU3dpdGNoVG9GbGFzaCA9IChzZXRTZWVPdGhlck1vbG8sIHNldFNlZU90aGVyU21va2UsIHNldFNlZU90aGVyRmxhc2gpID0+IHtcclxuICAgIHNldFNlZU90aGVyTW9sbyhmYWxzZSk7XHJcbiAgICBzZXRTZWVPdGhlclNtb2tlKGZhbHNlKTtcclxuICAgIHNldFNlZU90aGVyRmxhc2godHJ1ZSk7XHJcbiAgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKHNldCkgPT4ge1xyXG4gIHNldFNob3dWaWRlbyhmYWxzZSk7XHJcbiAgc2V0TmFtZShcIlwiKVxyXG4gIGlmKHV0aWxpdHkgPT0gXCJzbW9rZVwiKXtcclxuICAgIHNldFNlZU90aGVyU21va2UodHJ1ZSlcclxuICB9ZWxzZSBpZiAodXRpbGl0eSA9PSBcIm1vbG9cIikge1xyXG4gICAgc2V0U2VlT3RoZXJNb2xvKHRydWUpXHJcbiAgfWVsc2UgaWYgKHV0aWxpdHkgPT0gXCJmbGFzaFwiKSB7XHJcbiAgICBzZXRTZWVPdGhlckZsYXNoKHRydWUpXHJcbiAgfVxyXG4gIFxyXG59O1xyXG4gICJdLCJuYW1lcyI6WyJoYW5kbGVTd2l0Y2hUb01vbG8iLCJzZXRTZWVPdGhlck1vbG8iLCJzZXRTZWVPdGhlclNtb2tlIiwic2V0U2VlT3RoZXJGbGFzaCIsImhhbmRsZVN3aXRjaFRvU21va2UiLCJoYW5kbGVTd2l0Y2hUb0ZsYXNoIiwiaGFuZGxlTW91c2VMZWF2ZSIsInNldCIsInNldFNob3dWaWRlbyIsInNldE5hbWUiLCJ1dGlsaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/counter-strike/utility/maps/switchFunctions.js\n"));

/***/ })

});