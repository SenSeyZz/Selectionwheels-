"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/trivia",{

/***/ "./src/trivia/mainPage.js":
/*!********************************!*\
  !*** ./src/trivia/mainPage.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ \"./src/trivia/card.js\");\n/* harmony import */ var _card_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card.module.css */ \"./src/trivia/card.module.css\");\n/* harmony import */ var _card_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_card_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n // Import the Card component\n // Correct import statement\nvar Trivia = function() {\n    var _loop = function(row) {\n        var _loop = function(col) {\n            // Calculate a unique number for each button\n            buttons.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return showCard(col + (row - 1) * 5);\n                },\n                children: row\n            }, row, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\trivia\\\\mainPage.js\",\n                lineNumber: 111,\n                columnNumber: 9\n            }, _this));\n        };\n        for(var col = 1; col <= 5; col++)_loop(col);\n    };\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), selectedCard = _useState[0], setSelectedCard = _useState[1];\n    var showCard = function(number) {\n        setSelectedCard(number);\n    };\n    var getCardTexts = function(number) {\n        switch(number){\n            //1ère colomne \n            case 1:\n                return {\n                    question: \"Plus de 75% de la surface de la terre est recouverte d':\",\n                    answer: \"D'air\"\n                };\n            case 6:\n                return {\n                    question: \"Ce pays se trouve au nord de la Cor\\xe9e du Sud\",\n                    answer: \"La Cor\\xe9e du Nord\"\n                };\n            case 11:\n                return {\n                    question: \"C'est un tas de poubelle qui fait 1/2 de la france et se trouve dans l'Oc\\xe9an atlantique\",\n                    answer: \"Le Royaume unis\"\n                };\n            case 16:\n                return {\n                    question: \"Le pr\\xe9sident de ce pays est connu pour avoir un tout petit penis\",\n                    answer: \"Russie\"\n                };\n            case 21:\n                return {\n                    question: \"Quel animal peut retenir sa respiration le plus longtemps sous l'eau ? \",\n                    answer: \"Le poisson\"\n                };\n            case 26:\n                return {\n                    question: \"Malgr\\xe9 ce que beaucoup de personne pensent, C'est la plus haute montagne\",\n                    answer: \"Mt. Everest\"\n                };\n            case 31:\n                return {\n                    question: \"Qu'est ce qu'il est ill\\xe9gal de faire dans un vignoble\",\n                    answer: \"Pos\\xe9 une soucoupe volante\"\n                };\n            //2ème columne \n            case 2:\n                return {\n                    question: \"Quand A est vrai B est toujours vrai. Si A est faux que savons nous de B \",\n                    answer: \"Rien\"\n                };\n            case 7:\n                return {\n                    question: \"Paul a 10 bougies et chaque bougies tiens 10min Paul allume toutes ses bougies, Combien de temps vont-elles bruler ? \",\n                    answer: \"100 minutes\"\n                };\n            case 12:\n                return {\n                    question: \"Paul donne 7€ \\xe0 sa fille et 4€ \\xe0 son fils, quelle heure est-il ?\",\n                    answer: \"L'heure actuelle\"\n                };\n            case 17:\n                return {\n                    question: \"Combien valait 1$ en 1973\",\n                    answer: \"1$\"\n                };\n            //Add picture of the bird \n            case 22:\n                return {\n                    question: \"Qu'est ce que c'est ? \",\n                    answer: \"Un oiseau \"\n                };\n            case 27:\n                return {\n                    question: \"Quelle est la r\\xe9ponse la moins commune \\xe0 la question: choisi un nombre entre 1 et 10\",\n                    answer: \"10\"\n                };\n            case 32:\n                return {\n                    question: \"Pendant quelle d\\xe9c\\xe9nie le premier ordinateur a \\xe9t\\xe9 design\\xe9 ? \",\n                    answer: \"1822\"\n                };\n            //3ème columne \n            case 3:\n                return {\n                    question: \"Vrai ou Faux, tu as un trou dans les poumons sans lequel tu ne pourrais pas vivre ?\",\n                    answer: \"Vrai\"\n                };\n            case 8:\n                return {\n                    question: \"Quel est l'organe le plus flemmard\",\n                    answer: \"Le cerveau\"\n                };\n            case 13:\n                return {\n                    question: \"Pourquoi est ce que les squelettes ne se battent pas ?\",\n                    answer: \"Ils ont pas les couilles\"\n                };\n            case 18:\n                return {\n                    question: \"Vrai ou faux (explique ta r\\xe9ponse). Un humain peut 100% survivre sans estomac\",\n                    answer: \"Vrai\"\n                };\n            case 23:\n                return {\n                    question: \"Alors que certaines personnes naissent sans, ceux qui naissent avec ont tendance a le couper pour des raisons d'hygi\\xe8ne\",\n                    answer: \"Les cheuveux......\"\n                };\n            case 28:\n                return {\n                    question: \"De quelle art\\xe8re proviennent les art\\xe8res fessi\\xe8res sup\\xe9rieure et inf\\xe9rieure ?\",\n                    answer: \"Aucune id\\xe9e\"\n                };\n            case 33:\n                return {\n                    question: \"Quel \\xe9tat de la mati\\xe8re manque \\xe0 la liste ? Solide, Liquide, Gazeux, Plasma et ? \",\n                    answer: \"Condens\\xe2t de bose Einstein \"\n                };\n            //4ème columne \n            case 4:\n                return {\n                    question: \"Quel est le meilleur type de pokemon ? \",\n                    answer: \"Dragon\"\n                };\n            case 9:\n                return {\n                    question: \"C'est une cr\\xe9ature mythique avec des \\xe9cailles et une peau de l\\xe9zard et parfois plusieurs t\\xeates ? \",\n                    answer: \"Hydre\"\n                };\n            case 14:\n                return {\n                    question: \"Quel est le meilleur jeux-vid\\xe9o ?\",\n                    answer: \"Le conseil va d\\xe9cid\\xe9.\"\n                };\n            case 19:\n                return {\n                    question: \"Un soigneur, un tank et un sorcier rentrent dans un bar. Quel est le probl\\xe8me avec cette phrase ?  \",\n                    answer: \"Le tank devrait entrer en premier\"\n                };\n            case 24:\n                return {\n                    question: \"Donne moi un nombre entre 1 et 20 ? \",\n                    answer: \"-=10 rat\\xe9 +10 gagn\\xe9\"\n                };\n            case 29:\n                return {\n                    question: \"Qu'est ce qu'un hentai ?\",\n                    answer: \"Aucune id\\xe9e on va croire l'expert du coup\"\n                };\n            case 34:\n                return {\n                    question: \"Quel est ton pok\\xe9mon pr\\xe9f\\xe9r\\xe9 ?\",\n                    answer: \"Le conseil va d\\xe9cid\\xe9 si tu as raison.\"\n                };\n            //5ème columne \n            case 5:\n                return {\n                    question: \"Quel fruit a cr\\xe9\\xe9 la gravit\\xe9 ?\",\n                    answer: \"Une pomme\"\n                };\n            case 10:\n                return {\n                    question: \"Donne moi un grand nombre ?\",\n                    answer: \"> 1 trillion\"\n                };\n            case 15:\n                return {\n                    question: \"A 10 d\\xe9cimales pr\\xe8s, combien de luminosit\\xe9s solaires le soleil a-t-il ?\",\n                    answer: \"1\"\n                };\n            case 20:\n                return {\n                    question: \"Quel est ma glace pr\\xe9f\\xe9r\\xe9 ?\",\n                    answer: \"Stracciatella \"\n                };\n            case 25:\n                return {\n                    question: \"Pourquoi les protons ne se repoussent-ils pas les uns les autres dans un atome ?\",\n                    answer: \"La force nucl\\xe9aire est plus forte que la force \\xe9lectromagn\\xe9tique \\xe0 des distances plus petites.\"\n                };\n            case 30:\n                return {\n                    question: \"Qu'est ce que ca veut dire si le chat miaule ?\",\n                    answer: \"Que Schrodinger l'a dans le cul\"\n                };\n            case 35:\n                return {\n                    question: \"Quelle est l'appromixation normalement utilis\\xe9 pour la vitesse de la lumi\\xe8re ?\",\n                    answer: \"3x10^8 m/s ou C\"\n                };\n            // Add more cases as needed\n            default:\n                return {\n                    question: \"Default Question\",\n                    answer: \"Default Answer\"\n                };\n        }\n    };\n    // Create a 7x5 grid of buttons\n    var buttons = [];\n    for(var row = 1; row <= 7; row++)_loop(row);\n    var _ref = selectedCard ? getCardTexts(selectedCard) : {\n        question: \"\",\n        answer: \"\"\n    }, question = _ref.question, answer = _ref.answer;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to trivia \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\trivia\\\\mainPage.js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: (_card_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"centered-table\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: (_card_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"space-columns\"]),\n                                    children: \"Geographie\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\trivia\\\\mainPage.js\",\n                                    lineNumber: 126,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: (_card_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"space-columns\"]),\n                                    children: \"Logique\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\trivia\\\\mainPage.js\",\n                                    lineNumber: 127,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: (_card_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"space-columns\"]),\n                                    children: \"Anatomie \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\trivia\\\\mainPage.js\",\n                                    lineNumber: 128,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: (_card_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"space-columns\"]),\n                                    children: \"Fantaisie\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\trivia\\\\mainPage.js\",\n                                    lineNumber: 129,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: (_card_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"space-columns\"]),\n                                    children: \"Physique quantique\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\trivia\\\\mainPage.js\",\n                                    lineNumber: 130,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\trivia\\\\mainPage.js\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\trivia\\\\mainPage.js\",\n                        lineNumber: 124,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: Array.from({\n                            length: 7\n                        }, function(_, rowIndex) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: Array.from({\n                                    length: 5\n                                }, function(_, colIndex) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: (_card_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"centered-cell\"]),\n                                        children: buttons[rowIndex * 5 + colIndex]\n                                    }, colIndex, false, {\n                                        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\trivia\\\\mainPage.js\",\n                                        lineNumber: 137,\n                                        columnNumber: 17\n                                    }, _this);\n                                })\n                            }, rowIndex, false, {\n                                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\trivia\\\\mainPage.js\",\n                                lineNumber: 135,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\trivia\\\\mainPage.js\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\trivia\\\\mainPage.js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, _this),\n            selectedCard && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: (_card_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"centered-table\"]),\n                question: question,\n                answer: answer\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\trivia\\\\mainPage.js\",\n                lineNumber: 144,\n                columnNumber: 24\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\strat wheel CSGO\\\\wheel\\\\src\\\\trivia\\\\mainPage.js\",\n        lineNumber: 121,\n        columnNumber: 5\n    }, _this);\n};\n_s(Trivia, \"axKFp42fepc+pMvgIT6NP3Hz6vE=\");\n_c = Trivia;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trivia);\nvar _c;\n$RefreshReg$(_c, \"Trivia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXdCOztrQ0FDMUMsOERBQUNtQjtrQ0FDRyw0RUFBQ0M7OzhDQUNDLDhEQUFDQztvQ0FBR0gsV0FBV2xCLDBFQUF1Qjs4Q0FBRTs7Ozs7OzhDQUN4Qyw4REFBQ3FCO29DQUFHSCxXQUFXbEIsMEVBQXVCOzhDQUFFOzs7Ozs7OENBQ3hDLDhEQUFDcUI7b0NBQUdILFdBQVdsQiwwRUFBdUI7OENBQUU7Ozs7Ozs4Q0FDeEMsOERBQUNxQjtvQ0FBR0gsV0FBV2xCLDBFQUF1Qjs4Q0FBRTs7Ozs7OzhDQUN4Qyw4REFBQ3FCO29DQUFHSCxXQUFXbEIsMEVBQXVCOzhDQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHNUMsOERBQUNzQjtrQ0FDRUMsTUFBTUMsSUFBSSxDQUFDOzRCQUFFQyxRQUFRO3dCQUFFLEdBQUcsU0FBQ0MsR0FBR0M7aURBQzdCLDhEQUFDUDswQ0FDRUcsTUFBTUMsSUFBSSxDQUFDO29DQUFFQyxRQUFRO2dDQUFFLEdBQUcsU0FBQ0MsR0FBR0U7eURBQzdCLDhEQUFDQzt3Q0FBa0JYLFdBQVdsQiwwRUFBdUI7a0RBQUdFLE9BQU8sQ0FBQ3lCLFdBQVcsSUFBSUMsU0FBUzt1Q0FBL0VBOzs7Ozs7K0JBRkpEOzs7Ozs7Ozs7Ozs7Ozs7OztZQVNkbEIsOEJBQWdCLDhEQUFDViw2Q0FBSUE7Z0JBQUNtQixXQUFXbEIsMkVBQXdCO2dCQUFFYSxVQUFVQTtnQkFBVUMsUUFBUUE7Ozs7Ozs7Ozs7OztBQUc5RjtHQTlJTWI7S0FBQUE7QUFnSk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RyaXZpYS9tYWluUGFnZS5qcz83NDY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJzsgLy8gSW1wb3J0IHRoZSBDYXJkIGNvbXBvbmVudFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY2FyZC5tb2R1bGUuY3NzJzsgLy8gQ29ycmVjdCBpbXBvcnQgc3RhdGVtZW50XHJcblxyXG5jb25zdCBUcml2aWEgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2FyZCwgc2V0U2VsZWN0ZWRDYXJkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBzaG93Q2FyZCA9IChudW1iZXIpID0+IHtcclxuICAgIHNldFNlbGVjdGVkQ2FyZChudW1iZXIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldENhcmRUZXh0cyA9IChudW1iZXIpID0+IHtcclxuICAgIFxyXG4gICAgc3dpdGNoIChudW1iZXIpIHtcclxuICAgICAgICBcclxuICAgICAgICAvLzHDqHJlIGNvbG9tbmUgXHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgcmV0dXJuIHsgcXVlc3Rpb246IGBQbHVzIGRlIDc1JSBkZSBsYSBzdXJmYWNlIGRlIGxhIHRlcnJlIGVzdCByZWNvdXZlcnRlIGQnOmAsIGFuc3dlcjogXCJEJ2FpclwiIH07XHJcbiAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgcmV0dXJuIHsgcXVlc3Rpb246ICdDZSBwYXlzIHNlIHRyb3V2ZSBhdSBub3JkIGRlIGxhIENvcsOpZSBkdSBTdWQnLCBhbnN3ZXI6ICdMYSBDb3LDqWUgZHUgTm9yZCcgfTtcclxuICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgICAgcmV0dXJuIHsgcXVlc3Rpb246IGBDJ2VzdCB1biB0YXMgZGUgcG91YmVsbGUgcXVpIGZhaXQgMS8yIGRlIGxhIGZyYW5jZSBldCBzZSB0cm91dmUgZGFucyBsJ09jw6lhbiBhdGxhbnRpcXVlYCwgYW5zd2VyOiAnTGUgUm95YXVtZSB1bmlzJyB9O1xyXG4gICAgICAgIGNhc2UgMTY6XHJcbiAgICAgICAgICByZXR1cm4geyBxdWVzdGlvbjogJ0xlIHByw6lzaWRlbnQgZGUgY2UgcGF5cyBlc3QgY29ubnUgcG91ciBhdm9pciB1biB0b3V0IHBldGl0IHBlbmlzJywgYW5zd2VyOiAnUnVzc2llJyB9O1xyXG4gICAgICAgIGNhc2UgMjE6XHJcbiAgICAgICAgICByZXR1cm4geyBxdWVzdGlvbjogYFF1ZWwgYW5pbWFsIHBldXQgcmV0ZW5pciBzYSByZXNwaXJhdGlvbiBsZSBwbHVzIGxvbmd0ZW1wcyBzb3VzIGwnZWF1ID8gYCwgYW5zd2VyOiAnTGUgcG9pc3NvbicgfTtcclxuICAgICAgICBjYXNlIDI2OlxyXG4gICAgICAgICAgcmV0dXJuIHsgcXVlc3Rpb246IFwiTWFsZ3LDqSBjZSBxdWUgYmVhdWNvdXAgZGUgcGVyc29ubmUgcGVuc2VudCwgQydlc3QgbGEgcGx1cyBoYXV0ZSBtb250YWduZVwiLCBhbnN3ZXI6ICdNdC4gRXZlcmVzdCcgfTtcclxuICAgICAgICBjYXNlIDMxOlxyXG4gICAgICAgICAgcmV0dXJuIHsgcXVlc3Rpb246IGBRdSdlc3QgY2UgcXUnaWwgZXN0IGlsbMOpZ2FsIGRlIGZhaXJlIGRhbnMgdW4gdmlnbm9ibGVgLCBhbnN3ZXI6ICdQb3PDqSB1bmUgc291Y291cGUgdm9sYW50ZScgfTtcclxuICAgICAgICBcclxuICAgICAgICAvLzLDqG1lIGNvbHVtbmUgXHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgcmV0dXJuIHsgcXVlc3Rpb246ICdRdWFuZCBBIGVzdCB2cmFpIEIgZXN0IHRvdWpvdXJzIHZyYWkuIFNpIEEgZXN0IGZhdXggcXVlIHNhdm9ucyBub3VzIGRlIEIgJywgYW5zd2VyOiAnUmllbicgfTtcclxuICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICByZXR1cm4geyBxdWVzdGlvbjogYFBhdWwgYSAxMCBib3VnaWVzIGV0IGNoYXF1ZSBib3VnaWVzIHRpZW5zIDEwbWluIFBhdWwgYWxsdW1lIHRvdXRlcyBzZXMgYm91Z2llcywgQ29tYmllbiBkZSB0ZW1wcyB2b250LWVsbGVzIGJydWxlciA/IGAsIGFuc3dlcjogJzEwMCBtaW51dGVzJyB9O1xyXG4gICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICByZXR1cm4geyBxdWVzdGlvbjogJ1BhdWwgZG9ubmUgN+KCrCDDoCBzYSBmaWxsZSBldCA04oKsIMOgIHNvbiBmaWxzLCBxdWVsbGUgaGV1cmUgZXN0LWlsID8nLCBhbnN3ZXI6IFwiTCdoZXVyZSBhY3R1ZWxsZVwiIH07XHJcbiAgICAgICAgY2FzZSAxNzpcclxuICAgICAgICAgIHJldHVybiB7IHF1ZXN0aW9uOiBgQ29tYmllbiB2YWxhaXQgMSQgZW4gMTk3M2AsIGFuc3dlcjogJzEkJyB9O1xyXG4gICAgICAgICAgLy9BZGQgcGljdHVyZSBvZiB0aGUgYmlyZCBcclxuICAgICAgICBjYXNlIDIyOlxyXG4gICAgICAgICAgcmV0dXJuIHsgcXVlc3Rpb246IFwiUXUnZXN0IGNlIHF1ZSBjJ2VzdCA/IFwiLCBhbnN3ZXI6ICdVbiBvaXNlYXUgJyB9OyAgXHJcbiAgICAgICAgY2FzZSAyNzpcclxuICAgICAgICAgIHJldHVybiB7IHF1ZXN0aW9uOiBgUXVlbGxlIGVzdCBsYSByw6lwb25zZSBsYSBtb2lucyBjb21tdW5lIMOgIGxhIHF1ZXN0aW9uOiBjaG9pc2kgdW4gbm9tYnJlIGVudHJlIDEgZXQgMTBgLCBhbnN3ZXI6ICcxMCcgfTtcclxuICAgICAgICBjYXNlIDMyOlxyXG4gICAgICAgICAgcmV0dXJuIHsgcXVlc3Rpb246ICdQZW5kYW50IHF1ZWxsZSBkw6ljw6luaWUgbGUgcHJlbWllciBvcmRpbmF0ZXVyIGEgw6l0w6kgZGVzaWduw6kgPyAnLCBhbnN3ZXI6ICcxODIyJyB9OyAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8zw6htZSBjb2x1bW5lIFxyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIHJldHVybiB7IHF1ZXN0aW9uOiBgVnJhaSBvdSBGYXV4LCB0dSBhcyB1biB0cm91IGRhbnMgbGVzIHBvdW1vbnMgc2FucyBsZXF1ZWwgdHUgbmUgcG91cnJhaXMgcGFzIHZpdnJlID9gLCBhbnN3ZXI6ICdWcmFpJyB9O1xyXG4gICAgICAgIGNhc2UgODpcclxuICAgICAgICAgIHJldHVybiB7IHF1ZXN0aW9uOiBcIlF1ZWwgZXN0IGwnb3JnYW5lIGxlIHBsdXMgZmxlbW1hcmRcIiwgYW5zd2VyOiAnTGUgY2VydmVhdScgfTsgIFxyXG4gICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICByZXR1cm4geyBxdWVzdGlvbjogYFBvdXJxdW9pIGVzdCBjZSBxdWUgbGVzIHNxdWVsZXR0ZXMgbmUgc2UgYmF0dGVudCBwYXMgP2AsIGFuc3dlcjogJ0lscyBvbnQgcGFzIGxlcyBjb3VpbGxlcycgfTtcclxuICAgICAgICBjYXNlIDE4OlxyXG4gICAgICAgICAgcmV0dXJuIHsgcXVlc3Rpb246ICdWcmFpIG91IGZhdXggKGV4cGxpcXVlIHRhIHLDqXBvbnNlKS4gVW4gaHVtYWluIHBldXQgMTAwJSBzdXJ2aXZyZSBzYW5zIGVzdG9tYWMnLCBhbnN3ZXI6ICdWcmFpJyB9OyAgXHJcbiAgICAgICAgY2FzZSAyMzpcclxuICAgICAgICAgIHJldHVybiB7IHF1ZXN0aW9uOiBgQWxvcnMgcXVlIGNlcnRhaW5lcyBwZXJzb25uZXMgbmFpc3NlbnQgc2FucywgY2V1eCBxdWkgbmFpc3NlbnQgYXZlYyBvbnQgdGVuZGFuY2UgYSBsZSBjb3VwZXIgcG91ciBkZXMgcmFpc29ucyBkJ2h5Z2nDqG5lYCwgYW5zd2VyOiAnTGVzIGNoZXV2ZXV4Li4uLi4uJyB9O1xyXG4gICAgICAgIGNhc2UgMjg6XHJcbiAgICAgICAgICByZXR1cm4geyBxdWVzdGlvbjogJ0RlIHF1ZWxsZSBhcnTDqHJlIHByb3ZpZW5uZW50IGxlcyBhcnTDqHJlcyBmZXNzacOocmVzIHN1cMOpcmlldXJlIGV0IGluZsOpcmlldXJlID8nLCBhbnN3ZXI6ICdBdWN1bmUgaWTDqWUnIH07IFxyXG4gICAgICAgIGNhc2UgMzM6XHJcbiAgICAgICAgICByZXR1cm4geyBxdWVzdGlvbjogYFF1ZWwgw6l0YXQgZGUgbGEgbWF0acOocmUgbWFucXVlIMOgIGxhIGxpc3RlID8gU29saWRlLCBMaXF1aWRlLCBHYXpldXgsIFBsYXNtYSBldCA/IGAsIGFuc3dlcjogJ0NvbmRlbnPDonQgZGUgYm9zZSBFaW5zdGVpbiAnIH07XHJcblxyXG4gICAgICAgIC8vNMOobWUgY29sdW1uZSBcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICByZXR1cm4geyBxdWVzdGlvbjogJ1F1ZWwgZXN0IGxlIG1laWxsZXVyIHR5cGUgZGUgcG9rZW1vbiA/ICcsIGFuc3dlcjogJ0RyYWdvbicgfTsgICBcclxuICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICByZXR1cm4geyBxdWVzdGlvbjogYEMnZXN0IHVuZSBjcsOpYXR1cmUgbXl0aGlxdWUgYXZlYyBkZXMgw6ljYWlsbGVzIGV0IHVuZSBwZWF1IGRlIGzDqXphcmQgZXQgcGFyZm9pcyBwbHVzaWV1cnMgdMOqdGVzID8gYCwgYW5zd2VyOiAnSHlkcmUnIH07XHJcbiAgICAgICAgY2FzZSAxNDpcclxuICAgICAgICAgIHJldHVybiB7IHF1ZXN0aW9uOiAnUXVlbCBlc3QgbGUgbWVpbGxldXIgamV1eC12aWTDqW8gPycsIGFuc3dlcjogJ0xlIGNvbnNlaWwgdmEgZMOpY2lkw6kuJyB9OyAgXHJcbiAgICAgICAgY2FzZSAxOTpcclxuICAgICAgICAgIHJldHVybiB7IHF1ZXN0aW9uOiBgVW4gc29pZ25ldXIsIHVuIHRhbmsgZXQgdW4gc29yY2llciByZW50cmVudCBkYW5zIHVuIGJhci4gUXVlbCBlc3QgbGUgcHJvYmzDqG1lIGF2ZWMgY2V0dGUgcGhyYXNlID8gIGAsIGFuc3dlcjogJ0xlIHRhbmsgZGV2cmFpdCBlbnRyZXIgZW4gcHJlbWllcicgfTtcclxuICAgICAgICBjYXNlIDI0OlxyXG4gICAgICAgICAgcmV0dXJuIHsgcXVlc3Rpb246ICdEb25uZSBtb2kgdW4gbm9tYnJlIGVudHJlIDEgZXQgMjAgPyAnLCBhbnN3ZXI6ICctPTEwIHJhdMOpICsxMCBnYWduw6knIH07ICBcclxuICAgICAgICBjYXNlIDI5OlxyXG4gICAgICAgICAgcmV0dXJuIHsgcXVlc3Rpb246IGBRdSdlc3QgY2UgcXUndW4gaGVudGFpID9gLCBhbnN3ZXI6IFwiQXVjdW5lIGlkw6llIG9uIHZhIGNyb2lyZSBsJ2V4cGVydCBkdSBjb3VwXCIgfTtcclxuICAgICAgICBjYXNlIDM0OlxyXG4gICAgICAgICAgcmV0dXJuIHsgcXVlc3Rpb246ICdRdWVsIGVzdCB0b24gcG9rw6ltb24gcHLDqWbDqXLDqSA/JywgYW5zd2VyOiAnTGUgY29uc2VpbCB2YSBkw6ljaWTDqSBzaSB0dSBhcyByYWlzb24uJyB9OyBcclxuXHJcbiAgICAgICAgLy81w6htZSBjb2x1bW5lIFxyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgIHJldHVybiB7IHF1ZXN0aW9uOiBgUXVlbCBmcnVpdCBhIGNyw6nDqSBsYSBncmF2aXTDqSA/YCwgYW5zd2VyOiAnVW5lIHBvbW1lJyB9O1xyXG4gICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICByZXR1cm4geyBxdWVzdGlvbjogYERvbm5lIG1vaSB1biBncmFuZCBub21icmUgP2AsIGFuc3dlcjogJz4gMSB0cmlsbGlvbicgfTtcclxuICAgICAgICBjYXNlIDE1OlxyXG4gICAgICAgICAgcmV0dXJuIHsgcXVlc3Rpb246ICdBIDEwIGTDqWNpbWFsZXMgcHLDqHMsIGNvbWJpZW4gZGUgbHVtaW5vc2l0w6lzIHNvbGFpcmVzIGxlIHNvbGVpbCBhLXQtaWwgPycsIGFuc3dlcjogJzEnIH07ICBcclxuICAgICAgICBjYXNlIDIwOlxyXG4gICAgICAgICAgcmV0dXJuIHsgcXVlc3Rpb246IGBRdWVsIGVzdCBtYSBnbGFjZSBwcsOpZsOpcsOpID9gLCBhbnN3ZXI6ICdTdHJhY2NpYXRlbGxhICcgfTtcclxuICAgICAgICBjYXNlIDI1OlxyXG4gICAgICAgICAgcmV0dXJuIHsgcXVlc3Rpb246ICdQb3VycXVvaSBsZXMgcHJvdG9ucyBuZSBzZSByZXBvdXNzZW50LWlscyBwYXMgbGVzIHVucyBsZXMgYXV0cmVzIGRhbnMgdW4gYXRvbWUgPycsIGFuc3dlcjogJ0xhIGZvcmNlIG51Y2zDqWFpcmUgZXN0IHBsdXMgZm9ydGUgcXVlIGxhIGZvcmNlIMOpbGVjdHJvbWFnbsOpdGlxdWUgw6AgZGVzIGRpc3RhbmNlcyBwbHVzIHBldGl0ZXMuJyB9OyAgXHJcbiAgICAgICAgY2FzZSAzMDpcclxuICAgICAgICAgIHJldHVybiB7IHF1ZXN0aW9uOiBcIlF1J2VzdCBjZSBxdWUgY2EgdmV1dCBkaXJlIHNpIGxlIGNoYXQgbWlhdWxlID9cIiwgYW5zd2VyOiBcIlF1ZSBTY2hyb2RpbmdlciBsJ2EgZGFucyBsZSBjdWxcIiB9O1xyXG4gICAgICAgIGNhc2UgMzU6XHJcbiAgICAgICAgICByZXR1cm4geyBxdWVzdGlvbjogXCJRdWVsbGUgZXN0IGwnYXBwcm9taXhhdGlvbiBub3JtYWxlbWVudCB1dGlsaXPDqSBwb3VyIGxhIHZpdGVzc2UgZGUgbGEgbHVtacOocmUgP1wiLCBhbnN3ZXI6ICczeDEwXjggbS9zIG91IEMnIH07XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIEFkZCBtb3JlIGNhc2VzIGFzIG5lZWRlZFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4geyBxdWVzdGlvbjogJ0RlZmF1bHQgUXVlc3Rpb24nLCBhbnN3ZXI6ICdEZWZhdWx0IEFuc3dlcicgfTtcclxuICAgICAgfVxyXG4gIH07XHJcblxyXG5cclxuICAvLyBDcmVhdGUgYSA3eDUgZ3JpZCBvZiBidXR0b25zXHJcbiAgY29uc3QgYnV0dG9ucyA9IFtdO1xyXG4gIGZvciAobGV0IHJvdyA9IDE7IHJvdyA8PSA3OyByb3crKykge1xyXG4gICAgZm9yIChsZXQgY29sID0gMTsgY29sIDw9IDU7IGNvbCsrKSB7XHJcbiAgICAgICAvLyBDYWxjdWxhdGUgYSB1bmlxdWUgbnVtYmVyIGZvciBlYWNoIGJ1dHRvblxyXG4gICAgICBidXR0b25zLnB1c2goXHJcbiAgICAgICAgPGJ1dHRvbiBrZXk9e3Jvd30gb25DbGljaz17KCkgPT4gc2hvd0NhcmQoY29sICsgKHJvdyAtIDEpICogNSl9PlxyXG4gICAgICAgICAge3Jvd31cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHsgcXVlc3Rpb24sIGFuc3dlciB9ID0gc2VsZWN0ZWRDYXJkID8gZ2V0Q2FyZFRleHRzKHNlbGVjdGVkQ2FyZCkgOiB7IHF1ZXN0aW9uOiAnJywgYW5zd2VyOiAnJyB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPldlbGNvbWUgdG8gdHJpdmlhIDwvaDE+XHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlc1snY2VudGVyZWQtdGFibGUnXX0+XHJcbiAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c3R5bGVzW1wic3BhY2UtY29sdW1uc1wiXX0+R2VvZ3JhcGhpZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3N0eWxlc1tcInNwYWNlLWNvbHVtbnNcIl19PkxvZ2lxdWU8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzdHlsZXNbXCJzcGFjZS1jb2x1bW5zXCJdfT5BbmF0b21pZSA8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzdHlsZXNbXCJzcGFjZS1jb2x1bW5zXCJdfT5GYW50YWlzaWU8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzdHlsZXNbXCJzcGFjZS1jb2x1bW5zXCJdfT5QaHlzaXF1ZSBxdWFudGlxdWU8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiA3IH0sIChfLCByb3dJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtyb3dJbmRleH0gPlxyXG4gICAgICAgICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sIChfLCBjb2xJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRkIGtleT17Y29sSW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzWydjZW50ZXJlZC1jZWxsJ119PntidXR0b25zW3Jvd0luZGV4ICogNSArIGNvbEluZGV4XX08L3RkPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuXHJcbiAgICAgIHtzZWxlY3RlZENhcmQgJiYgPENhcmQgY2xhc3NOYW1lPXtzdHlsZXNbJ2NlbnRlcmVkLXRhYmxlJ119IHF1ZXN0aW9uPXtxdWVzdGlvbn0gYW5zd2VyPXthbnN3ZXJ9IC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyaXZpYTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDYXJkIiwic3R5bGVzIiwiVHJpdmlhIiwiYnV0dG9ucyIsInB1c2giLCJidXR0b24iLCJvbkNsaWNrIiwic2hvd0NhcmQiLCJjb2wiLCJyb3ciLCJzZWxlY3RlZENhcmQiLCJzZXRTZWxlY3RlZENhcmQiLCJudW1iZXIiLCJnZXRDYXJkVGV4dHMiLCJxdWVzdGlvbiIsImFuc3dlciIsImRpdiIsImgxIiwidGFibGUiLCJjbGFzc05hbWUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJyb3dJbmRleCIsImNvbEluZGV4IiwidGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/trivia/mainPage.js\n"));

/***/ })

});