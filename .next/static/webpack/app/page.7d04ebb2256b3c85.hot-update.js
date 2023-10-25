"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.jsx":
/*!**************************!*\
  !*** ./src/app/page.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"(app-pages-browser)/./src/app/home.jsx\");\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navBar */ \"(app-pages-browser)/./src/app/navBar.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _flavors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flavors */ \"(app-pages-browser)/./src/app/flavors.jsx\");\n/* harmony import */ var _contactUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contactUs */ \"(app-pages-browser)/./src/app/contactUs.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_data_MiniLogo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../public/data/MiniLogo.png */ \"(app-pages-browser)/./public/data/MiniLogo.png\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"home\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    let [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"api/getData\").then((results)=>{\n            setData(results.data.data);\n        }).catch((error)=>{\n            console.log(\"ERROR!!!\", error);\n        });\n    }, [\n        active\n    ]);\n    const handleSearch = (event)=>{\n        event.preventDefault();\n        setSearchTerm(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_9___default().homePage),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_9___default().navBar),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>{\n                            setActive(\"home\");\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            src: _public_data_MiniLogo_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                            alt: \"mini logo\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_9___default().logo)\n                        }, void 0, false, {\n                            fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        setActive: setActive\n                    }, void 0, false, {\n                        fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    active === \"home\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this),\n                    active === \"flavors\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_9___default().searchBar),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: handleSearch,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"search\",\n                                        value: searchTerm,\n                                        onChange: (event)=>{\n                                            setSearchTerm(event.target.value);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_flavors__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    data: data,\n                                    searchTerm: searchTerm\n                                }, void 0, false, {\n                                    fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    active === \"contactUs\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contactUs__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"FWSb7oWg0paZwbsGMetT8AdrCsw=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN1QztBQUNkO0FBQ0k7QUFDWTtBQUNWO0FBQ0k7QUFDTDtBQUNrQjtBQUN2QjtBQUNZO0FBRXRCLFNBQVNXOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDVyxNQUFNQyxRQUFRLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsSUFBSSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDO0lBQzNDQyxnREFBU0EsQ0FBQztRQUNSSyw2Q0FBS0EsQ0FBQ1MsR0FBRyxDQUFDLGVBQ1RDLElBQUksQ0FBQyxDQUFDQztZQUNMTCxRQUFRSyxRQUFRTixJQUFJLENBQUNBLElBQUk7UUFDM0IsR0FDQ08sS0FBSyxDQUFDLENBQUNDO1lBQ05DLFFBQVFDLEdBQUcsQ0FBQyxZQUFZRjtRQUMxQjtJQUNGLEdBQUc7UUFBQ1Y7S0FBTztJQUVYLE1BQU1hLGVBQWUsQ0FBQ0M7UUFDcEJBLE1BQU1DLGNBQWM7UUFDcEJWLGNBQWNTLE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSztJQUNsQztJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXckIsa0VBQWM7OzBCQUM1Qiw4REFBQ29CO2dCQUFJQyxXQUFXckIsZ0VBQVk7O2tDQUMxQiw4REFBQ29CO3dCQUFJSSxTQUFTOzRCQUFPckIsVUFBVTt3QkFBTztrQ0FDdEMsNEVBQUNOLG1EQUFLQTs0QkFBQzRCLEtBQUszQixpRUFBUUE7NEJBQUU0QixLQUFJOzRCQUFZTCxXQUFXL0IsOERBQVc7Ozs7Ozs7Ozs7O2tDQUU1RCw4REFBQ0UsK0NBQU1BO3dCQUFDVyxXQUFXQTs7Ozs7Ozs7Ozs7OzBCQUVyQiw4REFBQ2lCOztvQkFDRWxCLFdBQVcsd0JBQ1YsOERBQUNYLDZDQUFJQTs7Ozs7b0JBRU5XLFdBQVcsMkJBQ1YsOERBQUNrQjs7MENBQ0MsOERBQUNBO2dDQUFJQyxXQUFXL0IsbUVBQWdCOzBDQUM5Qiw0RUFBQ3VDO29DQUFLQyxVQUFVZjs4Q0FDZCw0RUFBQ2dCO3dDQUFNQyxNQUFLO3dDQUFPQyxhQUFZO3dDQUFTZCxPQUFPYjt3Q0FBWTRCLFVBQVUsQ0FBQ2xCOzRDQUNwRVQsY0FBY1MsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO3dDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUd2Qyw4REFBQ0M7MENBQ0MsNEVBQUN6QixnREFBT0E7b0NBQUNTLE1BQU1BO29DQUFNRSxZQUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBSXRDSixXQUFXLDZCQUNWLDhEQUFDTixrREFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBbER3Qks7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzeD9kNDY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UubW9kdWxlLmNzcyc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vbmF2QmFyJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBGbGF2b3JzIGZyb20gJy4vZmxhdm9ycydcbmltcG9ydCBDb250YWN0VXMgZnJvbSAnLi9jb250YWN0VXMnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBNaW5pTG9nbyBmcm9tICcvcHVibGljL2RhdGEvTWluaUxvZ28ucG5nJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vcGFnZS5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoJ2hvbWUnKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBsZXQgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldCgnYXBpL2dldERhdGEnKVxuICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICBzZXREYXRhKHJlc3VsdHMuZGF0YS5kYXRhKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IhISFcIiwgZXJyb3IpXG4gICAgfSlcbiAgfSwgW2FjdGl2ZV0pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0U2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhvbWVQYWdlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYXZCYXJ9PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHtzZXRBY3RpdmUoJ2hvbWUnKX19PlxuICAgICAgICA8SW1hZ2Ugc3JjPXtNaW5pTG9nb30gYWx0PVwibWluaSBsb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE5hdkJhciBzZXRBY3RpdmU9e3NldEFjdGl2ZX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7YWN0aXZlID09PSAnaG9tZScgJiYgKFxuICAgICAgICAgIDxIb21lIC8+XG4gICAgICAgICl9XG4gICAgICAgIHthY3RpdmUgPT09ICdmbGF2b3JzJyAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQmFyfT5cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVNlYXJjaH0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdzZWFyY2gnIHZhbHVlPXtzZWFyY2hUZXJtfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSl9fT48L2lucHV0PlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGbGF2b3JzIGRhdGE9e2RhdGF9IHNlYXJjaFRlcm09e3NlYXJjaFRlcm19Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7YWN0aXZlID09PSAnY29udGFjdFVzJyAmJiAoXG4gICAgICAgICAgPENvbnRhY3RVcyAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiSG9tZSIsIk5hdkJhciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRmxhdm9ycyIsIkNvbnRhY3RVcyIsIkltYWdlIiwiTWluaUxvZ28iLCJheGlvcyIsInN0eWxlIiwiUGFnZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImRhdGEiLCJzZXREYXRhIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJnZXQiLCJ0aGVuIiwicmVzdWx0cyIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaG9tZVBhZ2UiLCJuYXZCYXIiLCJvbkNsaWNrIiwic3JjIiwiYWx0IiwibG9nbyIsInNlYXJjaEJhciIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});