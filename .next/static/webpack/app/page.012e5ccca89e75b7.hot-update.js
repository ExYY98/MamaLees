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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"(app-pages-browser)/./src/app/home.jsx\");\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navBar */ \"(app-pages-browser)/./src/app/navBar.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _flavors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flavors */ \"(app-pages-browser)/./src/app/flavors.jsx\");\n/* harmony import */ var _contactUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contactUs */ \"(app-pages-browser)/./src/app/contactUs.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_data_MiniLogo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../public/data/MiniLogo.png */ \"(app-pages-browser)/./public/data/MiniLogo.png\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"home\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    let [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"api/getData\").then((results)=>{\n            setData(results.data.data);\n        }).catch((error)=>{\n            console.log(\"ERROR!!!\", error);\n        });\n    }, [\n        active\n    ]);\n    const handleSearch = (event)=>{\n        event.prevent;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_9___default().homePage),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_9___default().navBar),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>{\n                            setActive(\"home\");\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            src: _public_data_MiniLogo_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                            alt: \"mini logo\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_9___default().logo)\n                        }, void 0, false, {\n                            fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        setActive: setActive\n                    }, void 0, false, {\n                        fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    active === \"home\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    active === \"flavors\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_9___default().searchBar),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: ()=>{\n                                        return false;\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"search\",\n                                        value: searchTerm,\n                                        onChange: (event)=>{\n                                            setSearchTerm(event.target.value);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_flavors__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    data: data,\n                                    searchTerm: searchTerm\n                                }, void 0, false, {\n                                    fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    active === \"contactUs\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contactUs__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/esmy/Dev/projects/MamaLees/src/app/page.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"FWSb7oWg0paZwbsGMetT8AdrCsw=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN1QztBQUNkO0FBQ0k7QUFDWTtBQUNWO0FBQ0k7QUFDTDtBQUNrQjtBQUN2QjtBQUNZO0FBRXRCLFNBQVNXOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDVyxNQUFNQyxRQUFRLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsSUFBSSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDO0lBQzNDQyxnREFBU0EsQ0FBQztRQUNSSyw2Q0FBS0EsQ0FBQ1MsR0FBRyxDQUFDLGVBQ1RDLElBQUksQ0FBQyxDQUFDQztZQUNMTCxRQUFRSyxRQUFRTixJQUFJLENBQUNBLElBQUk7UUFDM0IsR0FDQ08sS0FBSyxDQUFDLENBQUNDO1lBQ05DLFFBQVFDLEdBQUcsQ0FBQyxZQUFZRjtRQUMxQjtJQUNGLEdBQUc7UUFBQ1Y7S0FBTztJQUVYLE1BQU1hLGVBQWUsQ0FBQ0M7UUFDcEJBLE1BQU1DLE9BQU87SUFDZjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXbkIsa0VBQWM7OzBCQUM1Qiw4REFBQ2tCO2dCQUFJQyxXQUFXbkIsZ0VBQVk7O2tDQUMxQiw4REFBQ2tCO3dCQUFJSSxTQUFTOzRCQUFPbkIsVUFBVTt3QkFBTztrQ0FDdEMsNEVBQUNOLG1EQUFLQTs0QkFBQzBCLEtBQUt6QixpRUFBUUE7NEJBQUUwQixLQUFJOzRCQUFZTCxXQUFXN0IsOERBQVc7Ozs7Ozs7Ozs7O2tDQUU1RCw4REFBQ0UsK0NBQU1BO3dCQUFDVyxXQUFXQTs7Ozs7Ozs7Ozs7OzBCQUVyQiw4REFBQ2U7O29CQUNFaEIsV0FBVyx3QkFDViw4REFBQ1gsNkNBQUlBOzs7OztvQkFFTlcsV0FBVywyQkFDViw4REFBQ2dCOzswQ0FDQyw4REFBQ0E7Z0NBQUlDLFdBQVc3QixtRUFBZ0I7MENBQzlCLDRFQUFDcUM7b0NBQUtDLFVBQVU7d0NBQU0sT0FBTztvQ0FBSzs4Q0FDaEMsNEVBQUNDO3dDQUFNQyxNQUFLO3dDQUFPQyxhQUFZO3dDQUFTQyxPQUFPMUI7d0NBQVkyQixVQUFVLENBQUNqQjs0Q0FDcEVULGNBQWNTLE1BQU1rQixNQUFNLENBQUNGLEtBQUs7d0NBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR3ZDLDhEQUFDZDswQ0FDQyw0RUFBQ3ZCLGdEQUFPQTtvQ0FBQ1MsTUFBTUE7b0NBQU1FLFlBQVlBOzs7Ozs7Ozs7Ozs7Ozs7OztvQkFJdENKLFdBQVcsNkJBQ1YsOERBQUNOLGtEQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0FqRHdCSztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanN4P2Q0NjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZS5tb2R1bGUuY3NzJztcbmltcG9ydCBIb21lIGZyb20gJy4vaG9tZSdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9uYXZCYXInXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEZsYXZvcnMgZnJvbSAnLi9mbGF2b3JzJ1xuaW1wb3J0IENvbnRhY3RVcyBmcm9tICcuL2NvbnRhY3RVcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IE1pbmlMb2dvIGZyb20gJy9wdWJsaWMvZGF0YS9NaW5pTG9nby5wbmcnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9wYWdlLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgnaG9tZScpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGxldCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KCdhcGkvZ2V0RGF0YScpXG4gICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgIHNldERhdGEocmVzdWx0cy5kYXRhLmRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJFUlJPUiEhIVwiLCBlcnJvcilcbiAgICB9KVxuICB9LCBbYWN0aXZlXSk7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhvbWVQYWdlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYXZCYXJ9PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHtzZXRBY3RpdmUoJ2hvbWUnKX19PlxuICAgICAgICA8SW1hZ2Ugc3JjPXtNaW5pTG9nb30gYWx0PVwibWluaSBsb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE5hdkJhciBzZXRBY3RpdmU9e3NldEFjdGl2ZX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7YWN0aXZlID09PSAnaG9tZScgJiYgKFxuICAgICAgICAgIDxIb21lIC8+XG4gICAgICAgICl9XG4gICAgICAgIHthY3RpdmUgPT09ICdmbGF2b3JzJyAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQmFyfT5cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eygpPT4ge3JldHVybiBmYWxzZX19PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nc2VhcmNoJyB2YWx1ZT17c2VhcmNoVGVybX0gb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpfX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8Rmxhdm9ycyBkYXRhPXtkYXRhfSBzZWFyY2hUZXJtPXtzZWFyY2hUZXJtfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2FjdGl2ZSA9PT0gJ2NvbnRhY3RVcycgJiYgKFxuICAgICAgICAgIDxDb250YWN0VXMgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkhvbWUiLCJOYXZCYXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZsYXZvcnMiLCJDb250YWN0VXMiLCJJbWFnZSIsIk1pbmlMb2dvIiwiYXhpb3MiLCJzdHlsZSIsIlBhZ2UiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJkYXRhIiwic2V0RGF0YSIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiZ2V0IiwidGhlbiIsInJlc3VsdHMiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVNlYXJjaCIsImV2ZW50IiwicHJldmVudCIsImRpdiIsImNsYXNzTmFtZSIsImhvbWVQYWdlIiwibmF2QmFyIiwib25DbGljayIsInNyYyIsImFsdCIsImxvZ28iLCJzZWFyY2hCYXIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});