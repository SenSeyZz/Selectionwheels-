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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! randomcolor */ \"./node_modules/randomcolor/randomColor.js\");\n/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\n\n\nvar useWheelFunctions = function() {\n    var initialSegments = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialSegments), 2), segments = _useState[0], setSegments = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"), 2), textValue = _useState1[0], setTextValue = _useState1[1];\n    var segColors = segments.map(function() {\n        return randomcolor__WEBPACK_IMPORTED_MODULE_1___default()();\n    });\n    var handleTextAreaChange = function(event) {\n        setTextValue(event.target.value);\n    };\n    var onFinished = function(winner) {\n        console.log(winner);\n    };\n    var submit = function() {\n        setSegments((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_3__._)(segments).concat([\n            textValue.trim()\n        ]));\n        setTextValue(\"\");\n    };\n    var deleteAStrat = function() {\n        var stratToDelete = textValue.trim();\n        var indexToDelete = segments.indexOf(stratToDelete);\n        if (indexToDelete !== -1) {\n            var updatedSegments = (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_3__._)(segments);\n            updatedSegments.splice(indexToDelete, 1);\n            setSegments(updatedSegments);\n            setTextValue(\"\");\n        } else {\n            console.log(\"Strat not found\");\n        }\n    };\n    var deleteWinner = function(winner) {\n        var stratToDelete = winner;\n        var indexToDelete = segments.indexOf(stratToDelete);\n    };\n    return {\n        segments: segments,\n        segColors: segColors,\n        textValue: textValue,\n        handleTextAreaChange: handleTextAreaChange,\n        onFinished: onFinished,\n        submit: submit,\n        deleteAStrat: deleteAStrat,\n        deleteWinner: deleteWinner\n    };\n};\n_s(useWheelFunctions, \"a52hKiy5ZOzZX3695us8w2ZZ4IQ=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useWheelFunctions);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2hlZWxGdW5jdGlvbnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQUNOO0FBRXRDLElBQU1HLG9CQUFvQjtRQUFDQyxtRkFBa0IsRUFBRTs7SUFDN0MsSUFBZ0NKLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQ0ksc0JBQWxDQyxXQUF5QkwsY0FBZk0sY0FBZU47SUFDaEMsSUFBa0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUFwQ08sWUFBMkJQLGVBQWhCUSxlQUFnQlI7SUFFbEMsSUFBTVMsWUFBWUosU0FBU0ssR0FBRyxDQUFDO2VBQU1SLGtEQUFXQTs7SUFFaEQsSUFBTVMsdUJBQXVCLFNBQUNDO1FBQzVCSixhQUFhSSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDakM7SUFFQSxJQUFNQyxhQUFhLFNBQUNDO1FBQ2xCQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2Q7SUFFQSxJQUFNRyxTQUFTO1FBQ2JiLFlBQVksb0VBQUlELGlCQUFKO1lBQWNFLFVBQVVhLElBQUk7U0FBRztRQUMzQ1osYUFBYTtJQUNmO0lBRUEsSUFBTWEsZUFBZTtRQUNuQixJQUFNQyxnQkFBZ0JmLFVBQVVhLElBQUk7UUFDcEMsSUFBTUcsZ0JBQWdCbEIsU0FBU21CLE9BQU8sQ0FBQ0Y7UUFFdkMsSUFBSUMsa0JBQWtCLENBQUMsR0FBRztZQUN4QixJQUFNRSxrQkFBbUIsb0VBQUdwQjtZQUM1Qm9CLGdCQUFnQkMsTUFBTSxDQUFDSCxlQUFlO1lBQ3RDakIsWUFBWW1CO1lBQ1pqQixhQUFhO1FBQ2YsT0FBTztZQUNMUyxRQUFRQyxHQUFHLENBQUM7UUFDZDtJQUNGO0lBRUEsSUFBTVMsZUFBZSxTQUFDWDtRQUVwQixJQUFNTSxnQkFBZ0JOO1FBQ3RCLElBQU1PLGdCQUFnQmxCLFNBQVNtQixPQUFPLENBQUNGO0lBSXpDO0lBRUEsT0FBTztRQUNMakIsVUFBQUE7UUFDQUksV0FBQUE7UUFDQUYsV0FBQUE7UUFDQUksc0JBQUFBO1FBQ0FJLFlBQUFBO1FBQ0FJLFFBQUFBO1FBQ0FFLGNBQUFBO1FBQ0FNLGNBQUFBO0lBQ0Y7QUFDRjtHQXBETXhCO0FBc0ROLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3doZWVsRnVuY3Rpb25zLmpzP2Q2ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHJhbmRvbUNvbG9yIGZyb20gJ3JhbmRvbWNvbG9yJztcclxuXHJcbmNvbnN0IHVzZVdoZWVsRnVuY3Rpb25zID0gKGluaXRpYWxTZWdtZW50cyA9IFtdKSA9PiB7XHJcbiAgY29uc3QgW3NlZ21lbnRzLCBzZXRTZWdtZW50c10gPSB1c2VTdGF0ZShpbml0aWFsU2VnbWVudHMpO1xyXG4gIGNvbnN0IFt0ZXh0VmFsdWUsIHNldFRleHRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHNlZ0NvbG9ycyA9IHNlZ21lbnRzLm1hcCgoKSA9PiByYW5kb21Db2xvcigpKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGV4dEFyZWFDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFRleHRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoZWQgPSAod2lubmVyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh3aW5uZXIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcclxuICAgIHNldFNlZ21lbnRzKFsuLi5zZWdtZW50cywgdGV4dFZhbHVlLnRyaW0oKV0pO1xyXG4gICAgc2V0VGV4dFZhbHVlKCcnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVBU3RyYXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdHJhdFRvRGVsZXRlID0gdGV4dFZhbHVlLnRyaW0oKTtcclxuICAgIGNvbnN0IGluZGV4VG9EZWxldGUgPSBzZWdtZW50cy5pbmRleE9mKHN0cmF0VG9EZWxldGUpO1xyXG5cclxuICAgIGlmIChpbmRleFRvRGVsZXRlICE9PSAtMSkge1xyXG4gICAgICBjb25zdCB1cGRhdGVkU2VnbWVudHMgPSBbLi4uc2VnbWVudHNdO1xyXG4gICAgICB1cGRhdGVkU2VnbWVudHMuc3BsaWNlKGluZGV4VG9EZWxldGUsIDEpO1xyXG4gICAgICBzZXRTZWdtZW50cyh1cGRhdGVkU2VnbWVudHMpO1xyXG4gICAgICBzZXRUZXh0VmFsdWUoJycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJTdHJhdCBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlV2lubmVyID0gKHdpbm5lcikgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBzdHJhdFRvRGVsZXRlID0gd2lubmVyXHJcbiAgICBjb25zdCBpbmRleFRvRGVsZXRlID0gc2VnbWVudHMuaW5kZXhPZihzdHJhdFRvRGVsZXRlKTtcclxuXHJcbiAgICBcclxuICAgIFxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZWdtZW50cyxcclxuICAgIHNlZ0NvbG9ycyxcclxuICAgIHRleHRWYWx1ZSxcclxuICAgIGhhbmRsZVRleHRBcmVhQ2hhbmdlLFxyXG4gICAgb25GaW5pc2hlZCxcclxuICAgIHN1Ym1pdCxcclxuICAgIGRlbGV0ZUFTdHJhdCxcclxuICAgIGRlbGV0ZVdpbm5lclxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VXaGVlbEZ1bmN0aW9ucztcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicmFuZG9tQ29sb3IiLCJ1c2VXaGVlbEZ1bmN0aW9ucyIsImluaXRpYWxTZWdtZW50cyIsInNlZ21lbnRzIiwic2V0U2VnbWVudHMiLCJ0ZXh0VmFsdWUiLCJzZXRUZXh0VmFsdWUiLCJzZWdDb2xvcnMiLCJtYXAiLCJoYW5kbGVUZXh0QXJlYUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJvbkZpbmlzaGVkIiwid2lubmVyIiwiY29uc29sZSIsImxvZyIsInN1Ym1pdCIsInRyaW0iLCJkZWxldGVBU3RyYXQiLCJzdHJhdFRvRGVsZXRlIiwiaW5kZXhUb0RlbGV0ZSIsImluZGV4T2YiLCJ1cGRhdGVkU2VnbWVudHMiLCJzcGxpY2UiLCJkZWxldGVXaW5uZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/wheelFunctions.js\n"));

/***/ })

});