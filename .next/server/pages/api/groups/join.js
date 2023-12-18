"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/groups/join";
exports.ids = ["pages/api/groups/join"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fgroups%2Fjoin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cgroups%5Cjoin.js&middlewareConfigBase64=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fgroups%2Fjoin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cgroups%5Cjoin.js&middlewareConfigBase64=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_groups_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\groups\\join.js */ \"(api)/./pages/api/groups/join.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_groups_join_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_groups_join_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/groups/join\",\n        pathname: \"/api/groups/join\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_groups_join_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmdyb3VwcyUyRmpvaW4mcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyU1Q2FwaSU1Q2dyb3VwcyU1Q2pvaW4uanMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ0w7QUFDMUQ7QUFDMEQ7QUFDMUQ7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLHNEQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLGVBQWUsd0VBQUssQ0FBQyxzREFBUTtBQUNwQztBQUNPLHdCQUF3QixnSEFBbUI7QUFDbEQ7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGVlbC8/OWQ1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXGdyb3Vwc1xcXFxqb2luLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsIFwiZGVmYXVsdFwiKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsIFwiY29uZmlnXCIpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNBUElSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVNfQVBJLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZ3JvdXBzL2pvaW5cIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9ncm91cHMvam9pblwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fgroups%2Fjoin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cgroups%5Cjoin.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/groups/join.js":
/*!**********************************!*\
  !*** ./pages/api/groups/join.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _pages_mySQL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pages/mySQL */ \"(api)/./pages/mySQL.js\");\n// pages/api/groups/create.js\n // Adjust the path accordingly\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { groupName } = req.body;\n        try {\n            // Perform the INSERT query\n            const results = await _pages_mySQL__WEBPACK_IMPORTED_MODULE_0__[\"default\"].promise().query(\"SELECT * FROM groups WHERE group_id = ?\", [\n                groupName\n            ]);\n            console.log(results.length);\n            if (results[0].length === 0) {\n                res.status(404).json({\n                    error: \"Group not found\"\n                });\n                return;\n            }\n            await _pages_mySQL__WEBPACK_IMPORTED_MODULE_0__[\"default\"].promise().query(\"INSERT INTO participants (group_id) VALUES (?)\", [\n                groupName\n            ]);\n            // Send the inserted group ID as a response\n            res.status(200).json({\n                groupId: results[0].insertId\n            });\n        } catch (error) {\n            console.error(\"Error creating group:\", error);\n            res.status(500).json({\n                error: \"Internal Server Error\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"Method Not Allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ3JvdXBzL2pvaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2QkFBNkI7QUFDVyxDQUFFLDhCQUE4QjtBQUV6RCxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDMUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0gsSUFBSUksSUFBSTtRQUU5QixJQUFJO1lBQ0YsMkJBQTJCO1lBQzNCLE1BQU1DLFVBQVUsTUFBTVAsNERBQVksR0FBR1MsS0FBSyxDQUFDLDJDQUEyQztnQkFBQ0o7YUFBVTtZQUNqR0ssUUFBUUMsR0FBRyxDQUFDSixRQUFRSyxNQUFNO1lBQzFCLElBQUlMLE9BQU8sQ0FBQyxFQUFFLENBQUNLLE1BQU0sS0FBSyxHQUFHO2dCQUMzQlQsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsT0FBTztnQkFBa0I7Z0JBQ2hEO1lBQ0Y7WUFFQSxNQUFNZiw0REFBWSxHQUFHUyxLQUFLLENBQUMsa0RBQWtEO2dCQUFDSjthQUFVO1lBRXhGLDJDQUEyQztZQUMzQ0YsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUUsU0FBU1QsT0FBTyxDQUFDLEVBQUUsQ0FBQ1UsUUFBUTtZQUFDO1FBQ3RELEVBQUUsT0FBT0YsT0FBTztZQUNkTCxRQUFRSyxLQUFLLENBQUMseUJBQXlCQTtZQUN2Q1osSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUF3QjtRQUN4RDtJQUNGLE9BQU87UUFDTFosSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXFCO0lBQ3JEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGVlbC8uL3BhZ2VzL2FwaS9ncm91cHMvam9pbi5qcz9mOTQ4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9ncm91cHMvY3JlYXRlLmpzXHJcbmltcG9ydCBwb29sIGZyb20gJy4uLy4uLy4uL3BhZ2VzL215U1FMJzsgIC8vIEFkanVzdCB0aGUgcGF0aCBhY2NvcmRpbmdseVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICBjb25zdCB7IGdyb3VwTmFtZSB9ID0gcmVxLmJvZHk7XHJcbiAgXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gUGVyZm9ybSB0aGUgSU5TRVJUIHF1ZXJ5XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHBvb2wucHJvbWlzZSgpLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIGdyb3VwcyBXSEVSRSBncm91cF9pZCA9ID8nLCBbZ3JvdXBOYW1lXSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cy5sZW5ndGgpO1xyXG4gICAgICAgIGlmIChyZXN1bHRzWzBdLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogJ0dyb3VwIG5vdCBmb3VuZCcgfSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBwb29sLnByb21pc2UoKS5xdWVyeSgnSU5TRVJUIElOVE8gcGFydGljaXBhbnRzIChncm91cF9pZCkgVkFMVUVTICg/KScsIFtncm91cE5hbWVdKTtcclxuXHJcbiAgICAgICAgLy8gU2VuZCB0aGUgaW5zZXJ0ZWQgZ3JvdXAgSUQgYXMgYSByZXNwb25zZVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZ3JvdXBJZDogcmVzdWx0c1swXS5pbnNlcnRJZCB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBncm91cDonLCBlcnJvcik7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIFNlcnZlciBFcnJvcicgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICdNZXRob2QgTm90IEFsbG93ZWQnIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuIl0sIm5hbWVzIjpbInBvb2wiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZ3JvdXBOYW1lIiwiYm9keSIsInJlc3VsdHMiLCJwcm9taXNlIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiZ3JvdXBJZCIsImluc2VydElkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/groups/join.js\n");

/***/ }),

/***/ "(api)/./pages/mySQL.js":
/*!************************!*\
  !*** ./pages/mySQL.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2__WEBPACK_IMPORTED_MODULE_0__);\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nconst pool = (0,mysql2__WEBPACK_IMPORTED_MODULE_0__.createPool)({\n    connectionLimit: 10,\n    host: process.env.DB_HOST,\n    user: process.env.DB_USER,\n    password: process.env.DB_PASSWORD,\n    database: process.env.DB_DATABASE,\n    port: process.env.DB_PORT\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pool);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9teVNRTC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7QUFDcENDLG9EQUF3QjtBQUV4QixNQUFNRSxPQUFPSCxrREFBVUEsQ0FBQztJQUN0QkksaUJBQWlCO0lBQ2pCQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLE9BQU87SUFDekJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csT0FBTztJQUN6QkMsVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxXQUFXO0lBQ2pDQyxVQUFVUCxRQUFRQyxHQUFHLENBQUNPLFdBQVc7SUFDakNDLE1BQU1ULFFBQVFDLEdBQUcsQ0FBQ1MsT0FBTztBQUMzQjtBQUdBLGlFQUFlYixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2hlZWwvLi9wYWdlcy9teVNRTC5qcz9iNTQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVBvb2wgfSBmcm9tICdteXNxbDInO1xyXG5yZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKTtcclxuXHJcbmNvbnN0IHBvb2wgPSBjcmVhdGVQb29sKHtcclxuICBjb25uZWN0aW9uTGltaXQ6IDEwLFxyXG4gIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXHJcbiAgdXNlcjogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQsXHJcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX0RBVEFCQVNFLFxyXG4gIHBvcnQ6IHByb2Nlc3MuZW52LkRCX1BPUlQsXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvb2w7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVQb29sIiwicmVxdWlyZSIsImNvbmZpZyIsInBvb2wiLCJjb25uZWN0aW9uTGltaXQiLCJob3N0IiwicHJvY2VzcyIsImVudiIsIkRCX0hPU1QiLCJ1c2VyIiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTU1dPUkQiLCJkYXRhYmFzZSIsIkRCX0RBVEFCQVNFIiwicG9ydCIsIkRCX1BPUlQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/mySQL.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fgroups%2Fjoin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cgroups%5Cjoin.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();