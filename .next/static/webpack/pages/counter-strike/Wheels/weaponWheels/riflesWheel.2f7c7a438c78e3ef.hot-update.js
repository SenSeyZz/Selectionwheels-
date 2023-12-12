"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/counter-strike/Wheels/weaponWheels/riflesWheel",{

/***/ "./src/wheelFunctions.js":
/*!*******************************!*\
  !*** ./src/wheelFunctions.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! randomcolor */ \"./node_modules/randomcolor/randomColor.js\");\n/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\n\n\nvar useWheelFunctions = function() {\n    var initialSegments = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialSegments), 2), segments = _useState[0], setSegments = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"), 2), textValue = _useState1[0], setTextValue = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"), 2), wheelWinner = _useState2[0], setWheelWinner = _useState2[1];\n    var segColors = segments.map(function() {\n        return randomcolor__WEBPACK_IMPORTED_MODULE_1___default()();\n    });\n    var handleTextAreaChange = function(event) {\n        setTextValue(event.target.value);\n    };\n    var onFinished = function(winner) {\n        console.log(winner);\n        console.log(wheelWinner);\n        setWheelWinner(winner);\n        console.log();\n    };\n    var submit = function() {\n        setSegments((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_3__._)(segments).concat([\n            textValue.trim()\n        ]));\n        setTextValue(\"\");\n    };\n    var deleteAStrat = function() {\n        var stratToDelete = textValue.trim();\n        var indexToDelete = segments.indexOf(stratToDelete);\n        if (indexToDelete !== -1) {\n            var updatedSegments = (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_3__._)(segments);\n            updatedSegments.splice(indexToDelete, 1);\n            setSegments(updatedSegments);\n            setTextValue(\"\");\n        } else {\n            console.log(\"Strat not found\");\n        }\n    };\n    var deleteWinner = function(winner) {\n        var stratToDelete = winner;\n        console.log(winner);\n        var indexToDelete = segments.indexOf(stratToDelete);\n    };\n    return {\n        segments: segments,\n        segColors: segColors,\n        textValue: textValue,\n        handleTextAreaChange: handleTextAreaChange,\n        onFinished: onFinished,\n        submit: submit,\n        deleteAStrat: deleteAStrat,\n        deleteWinner: deleteWinner\n    };\n};\n_s(useWheelFunctions, \"tAl5YAGcRFvDUSTNoMKuO0jAEXw=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useWheelFunctions);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2hlZWxGdW5jdGlvbnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQUNOO0FBRXRDLElBQU1HLG9CQUFvQjtRQUFDQyxtRkFBa0IsRUFBRTs7SUFDN0MsSUFBZ0NKLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQ0ksc0JBQWxDQyxXQUF5QkwsY0FBZk0sY0FBZU47SUFDaEMsSUFBa0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUFwQ08sWUFBMkJQLGVBQWhCUSxlQUFnQlI7SUFDbEMsSUFBc0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUF4Q1MsY0FBK0JULGVBQWxCVSxpQkFBa0JWO0lBRXRDLElBQU1XLFlBQVlOLFNBQVNPLEdBQUcsQ0FBQztlQUFNVixrREFBV0E7O0lBRWhELElBQU1XLHVCQUF1QixTQUFDQztRQUM1Qk4sYUFBYU0sTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ2pDO0lBRUEsSUFBTUMsYUFBYSxTQUFDQztRQUNsQkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaQyxRQUFRQyxHQUFHLENBQUNYO1FBQ1pDLGVBQWVRO1FBQ2ZDLFFBQVFDLEdBQUc7SUFDYjtJQUVBLElBQU1DLFNBQVM7UUFDYmYsWUFBWSxvRUFBSUQsaUJBQUo7WUFBY0UsVUFBVWUsSUFBSTtTQUFHO1FBQzNDZCxhQUFhO0lBQ2Y7SUFFQSxJQUFNZSxlQUFlO1FBQ25CLElBQU1DLGdCQUFnQmpCLFVBQVVlLElBQUk7UUFDcEMsSUFBTUcsZ0JBQWdCcEIsU0FBU3FCLE9BQU8sQ0FBQ0Y7UUFFdkMsSUFBSUMsa0JBQWtCLENBQUMsR0FBRztZQUN4QixJQUFNRSxrQkFBbUIsb0VBQUd0QjtZQUM1QnNCLGdCQUFnQkMsTUFBTSxDQUFDSCxlQUFlO1lBQ3RDbkIsWUFBWXFCO1lBQ1puQixhQUFhO1FBQ2YsT0FBTztZQUNMVyxRQUFRQyxHQUFHLENBQUM7UUFDZDtJQUNGO0lBRUEsSUFBTVMsZUFBZSxTQUFDWDtRQUVwQixJQUFNTSxnQkFBZ0JOO1FBQ3RCQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1osSUFBTU8sZ0JBQWdCcEIsU0FBU3FCLE9BQU8sQ0FBQ0Y7SUFFekM7SUFFQSxPQUFPO1FBQ0xuQixVQUFBQTtRQUNBTSxXQUFBQTtRQUNBSixXQUFBQTtRQUNBTSxzQkFBQUE7UUFDQUksWUFBQUE7UUFDQUksUUFBQUE7UUFDQUUsY0FBQUE7UUFDQU0sY0FBQUE7SUFDRjtBQUNGO0dBdkRNMUI7QUF5RE4sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvd2hlZWxGdW5jdGlvbnMuanM/ZDZlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcmFuZG9tQ29sb3IgZnJvbSAncmFuZG9tY29sb3InO1xyXG5cclxuY29uc3QgdXNlV2hlZWxGdW5jdGlvbnMgPSAoaW5pdGlhbFNlZ21lbnRzID0gW10pID0+IHtcclxuICBjb25zdCBbc2VnbWVudHMsIHNldFNlZ21lbnRzXSA9IHVzZVN0YXRlKGluaXRpYWxTZWdtZW50cyk7XHJcbiAgY29uc3QgW3RleHRWYWx1ZSwgc2V0VGV4dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbd2hlZWxXaW5uZXIsIHNldFdoZWVsV2lubmVyXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3Qgc2VnQ29sb3JzID0gc2VnbWVudHMubWFwKCgpID0+IHJhbmRvbUNvbG9yKCkpO1xyXG5cclxuICBjb25zdCBoYW5kbGVUZXh0QXJlYUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0VGV4dFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2hlZCA9ICh3aW5uZXIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHdpbm5lcik7XHJcbiAgICBjb25zb2xlLmxvZyh3aGVlbFdpbm5lcik7XHJcbiAgICBzZXRXaGVlbFdpbm5lcih3aW5uZXIpXHJcbiAgICBjb25zb2xlLmxvZygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcclxuICAgIHNldFNlZ21lbnRzKFsuLi5zZWdtZW50cywgdGV4dFZhbHVlLnRyaW0oKV0pO1xyXG4gICAgc2V0VGV4dFZhbHVlKCcnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVBU3RyYXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdHJhdFRvRGVsZXRlID0gdGV4dFZhbHVlLnRyaW0oKTtcclxuICAgIGNvbnN0IGluZGV4VG9EZWxldGUgPSBzZWdtZW50cy5pbmRleE9mKHN0cmF0VG9EZWxldGUpO1xyXG5cclxuICAgIGlmIChpbmRleFRvRGVsZXRlICE9PSAtMSkge1xyXG4gICAgICBjb25zdCB1cGRhdGVkU2VnbWVudHMgPSBbLi4uc2VnbWVudHNdO1xyXG4gICAgICB1cGRhdGVkU2VnbWVudHMuc3BsaWNlKGluZGV4VG9EZWxldGUsIDEpO1xyXG4gICAgICBzZXRTZWdtZW50cyh1cGRhdGVkU2VnbWVudHMpO1xyXG4gICAgICBzZXRUZXh0VmFsdWUoJycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJTdHJhdCBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlV2lubmVyID0gKHdpbm5lcikgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBzdHJhdFRvRGVsZXRlID0gd2lubmVyXHJcbiAgICBjb25zb2xlLmxvZyh3aW5uZXIpO1xyXG4gICAgY29uc3QgaW5kZXhUb0RlbGV0ZSA9IHNlZ21lbnRzLmluZGV4T2Yoc3RyYXRUb0RlbGV0ZSk7XHJcblxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZWdtZW50cyxcclxuICAgIHNlZ0NvbG9ycyxcclxuICAgIHRleHRWYWx1ZSxcclxuICAgIGhhbmRsZVRleHRBcmVhQ2hhbmdlLFxyXG4gICAgb25GaW5pc2hlZCxcclxuICAgIHN1Ym1pdCxcclxuICAgIGRlbGV0ZUFTdHJhdCxcclxuICAgIGRlbGV0ZVdpbm5lclxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VXaGVlbEZ1bmN0aW9ucztcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicmFuZG9tQ29sb3IiLCJ1c2VXaGVlbEZ1bmN0aW9ucyIsImluaXRpYWxTZWdtZW50cyIsInNlZ21lbnRzIiwic2V0U2VnbWVudHMiLCJ0ZXh0VmFsdWUiLCJzZXRUZXh0VmFsdWUiLCJ3aGVlbFdpbm5lciIsInNldFdoZWVsV2lubmVyIiwic2VnQ29sb3JzIiwibWFwIiwiaGFuZGxlVGV4dEFyZWFDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwib25GaW5pc2hlZCIsIndpbm5lciIsImNvbnNvbGUiLCJsb2ciLCJzdWJtaXQiLCJ0cmltIiwiZGVsZXRlQVN0cmF0Iiwic3RyYXRUb0RlbGV0ZSIsImluZGV4VG9EZWxldGUiLCJpbmRleE9mIiwidXBkYXRlZFNlZ21lbnRzIiwic3BsaWNlIiwiZGVsZXRlV2lubmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/wheelFunctions.js\n"));

/***/ })

});