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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleSwitchToFlash: function() { return /* binding */ handleSwitchToFlash; },\n/* harmony export */   handleSwitchToMolo: function() { return /* binding */ handleSwitchToMolo; },\n/* harmony export */   handleSwitchToSmoke: function() { return /* binding */ handleSwitchToSmoke; }\n/* harmony export */ });\n// utilityFunctions.js\nvar handleSwitchToMolo = function(setSeeOtherMolo, setSeeOtherSmoke, setSeeOtherFlash, setUtility) {\n    setSeeOtherMolo(true);\n    setSeeOtherSmoke(false);\n    setSeeOtherFlash(false);\n    setUtility(\"smoke\");\n};\nvar handleSwitchToSmoke = function(setSeeOtherMolo, setSeeOtherSmoke, setSeeOtherFlash, setUtility) {\n    setSeeOtherMolo(false);\n    setSeeOtherSmoke(true);\n    setSeeOtherFlash(false);\n};\nvar handleSwitchToFlash = function(setSeeOtherMolo, setSeeOtherSmoke, setSeeOtherFlash, setUtility) {\n    setSeeOtherMolo(false);\n    setSeeOtherSmoke(false);\n    setSeeOtherFlash(true);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY291bnRlci1zdHJpa2UvdXRpbGl0eS9tYXBzL3N3aXRjaEZ1bmN0aW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxzQkFBc0I7QUFDZixJQUFNQSxxQkFBcUIsU0FBQ0MsaUJBQWlCQyxrQkFBa0JDLGtCQUFrQkM7SUFDcEZILGdCQUFnQjtJQUNoQkMsaUJBQWlCO0lBQ2pCQyxpQkFBaUI7SUFDakJDLFdBQVc7QUFDYixFQUFFO0FBRUssSUFBTUMsc0JBQXNCLFNBQUNKLGlCQUFpQkMsa0JBQWtCQyxrQkFBa0JDO0lBQ3ZGSCxnQkFBZ0I7SUFDaEJDLGlCQUFpQjtJQUNqQkMsaUJBQWlCO0FBRW5CLEVBQUU7QUFFSyxJQUFNRyxzQkFBc0IsU0FBQ0wsaUJBQWlCQyxrQkFBa0JDLGtCQUFrQkM7SUFDdkZILGdCQUFnQjtJQUNoQkMsaUJBQWlCO0lBQ2pCQyxpQkFBaUI7QUFFbkIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY291bnRlci1zdHJpa2UvdXRpbGl0eS9tYXBzL3N3aXRjaEZ1bmN0aW9ucy5qcz84MGU1Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyB1dGlsaXR5RnVuY3Rpb25zLmpzXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVTd2l0Y2hUb01vbG8gPSAoc2V0U2VlT3RoZXJNb2xvLCBzZXRTZWVPdGhlclNtb2tlLCBzZXRTZWVPdGhlckZsYXNoLCBzZXRVdGlsaXR5KSA9PiB7XHJcbiAgICBzZXRTZWVPdGhlck1vbG8odHJ1ZSk7XHJcbiAgICBzZXRTZWVPdGhlclNtb2tlKGZhbHNlKTtcclxuICAgIHNldFNlZU90aGVyRmxhc2goZmFsc2UpO1xyXG4gICAgc2V0VXRpbGl0eShcInNtb2tlXCIpXHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgY29uc3QgaGFuZGxlU3dpdGNoVG9TbW9rZSA9IChzZXRTZWVPdGhlck1vbG8sIHNldFNlZU90aGVyU21va2UsIHNldFNlZU90aGVyRmxhc2gsIHNldFV0aWxpdHkpID0+IHtcclxuICAgIHNldFNlZU90aGVyTW9sbyhmYWxzZSk7XHJcbiAgICBzZXRTZWVPdGhlclNtb2tlKHRydWUpO1xyXG4gICAgc2V0U2VlT3RoZXJGbGFzaChmYWxzZSk7XHJcbiAgIFxyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IGhhbmRsZVN3aXRjaFRvRmxhc2ggPSAoc2V0U2VlT3RoZXJNb2xvLCBzZXRTZWVPdGhlclNtb2tlLCBzZXRTZWVPdGhlckZsYXNoLCBzZXRVdGlsaXR5KSA9PiB7XHJcbiAgICBzZXRTZWVPdGhlck1vbG8oZmFsc2UpO1xyXG4gICAgc2V0U2VlT3RoZXJTbW9rZShmYWxzZSk7XHJcbiAgICBzZXRTZWVPdGhlckZsYXNoKHRydWUpO1xyXG4gXHJcbiAgfTtcclxuXHJcbiAgIl0sIm5hbWVzIjpbImhhbmRsZVN3aXRjaFRvTW9sbyIsInNldFNlZU90aGVyTW9sbyIsInNldFNlZU90aGVyU21va2UiLCJzZXRTZWVPdGhlckZsYXNoIiwic2V0VXRpbGl0eSIsImhhbmRsZVN3aXRjaFRvU21va2UiLCJoYW5kbGVTd2l0Y2hUb0ZsYXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/counter-strike/utility/maps/switchFunctions.js\n"));

/***/ })

});