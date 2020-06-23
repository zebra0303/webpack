(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["callAjax"],{

/***/ "./src/js/lib/callAjax.js":
/*!********************************!*\
  !*** ./src/js/lib/callAjax.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return printMe; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.js */ "./src/js/lib/list.js");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function getAxios() {
  return __webpack_require__.e(/*! import() | axios */ "vendors~axios").then(__webpack_require__.t.bind(null, /*! axios */ "./node_modules/axios/index.js", 7)).then(function (props) {
    //console.debug(props);
    var axios = props.default; //console.debug(axios);

    return axios;
  });
}

function printMe() {
  return _printMe.apply(this, arguments);
}

function _printMe() {
  _printMe = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var axios;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getAxios();

          case 2:
            axios = _context.sent;
            axios.get('https://jsonplaceholder.typicode.com/users').then(function (resp) {
              var divList = document.getElementById('list');

              while (divList.firstChild) {
                divList.removeChild(divList.firstChild);
              }

              var users = resp.data;
              users.sort(function () {
                return Math.random() - Math.random();
              });
              Object(_list_js__WEBPACK_IMPORTED_MODULE_3__["default"])(divList, users);
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _printMe.apply(this, arguments);
}

;

/***/ }),

/***/ "./src/js/lib/list.js":
/*!****************************!*\
  !*** ./src/js/lib/list.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__);













function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var showList = function showList(divList, arrList) {
  var ul = document.createElement('ul');
  var li;
  divList.appendChild(ul);

  var _iterator = _createForOfIteratorHelper(arrList),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      li = document.createElement('li'); //console.debug(item);

      li.innerText = "".concat(item.name, " (").concat(item.email, ")");
      ul.appendChild(li);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (showList);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbGliL2NhbGxBamF4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvbGlzdC5qcyJdLCJuYW1lcyI6WyJnZXRBeGlvcyIsInRoZW4iLCJwcm9wcyIsImF4aW9zIiwiZGVmYXVsdCIsInByaW50TWUiLCJnZXQiLCJyZXNwIiwiZGl2TGlzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJ1c2VycyIsImRhdGEiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInNob3dMaXN0IiwiYXJyTGlzdCIsInVsIiwiY3JlYXRlRWxlbWVudCIsImxpIiwiYXBwZW5kQ2hpbGQiLCJpdGVtIiwiaW5uZXJUZXh0IiwibmFtZSIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2xCLFNBQU8sdUpBQ05DLElBRE0sQ0FDRCxVQUFBQyxLQUFLLEVBQUk7QUFDYjtBQURhLFFBRUlDLEtBRkosR0FFY0QsS0FGZCxDQUVMRSxPQUZLLEVBR2I7O0FBQ0EsV0FBT0QsS0FBUDtBQUNELEdBTk0sQ0FBUDtBQU9EOztBQUVjLFNBQWVFLE9BQTlCO0FBQUE7QUFBQTs7O3FFQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ09MLFFBQVEsRUFEZjs7QUFBQTtBQUNQRyxpQkFETztBQUdiQSxpQkFBSyxDQUFDRyxHQUFOLENBQVUsNENBQVYsRUFBd0RMLElBQXhELENBQTZELFVBQUFNLElBQUksRUFBSTtBQUNuRSxrQkFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBaEI7O0FBQ0EscUJBQU9GLE9BQU8sQ0FBQ0csVUFBZixFQUEyQjtBQUN6QkgsdUJBQU8sQ0FBQ0ksV0FBUixDQUFvQkosT0FBTyxDQUFDRyxVQUE1QjtBQUNEOztBQUNELGtCQUFNRSxLQUFLLEdBQUdOLElBQUksQ0FBQ08sSUFBbkI7QUFDQUQsbUJBQUssQ0FBQ0UsSUFBTixDQUFXO0FBQUEsdUJBQUtDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQkQsSUFBSSxDQUFDQyxNQUFMLEVBQXJCO0FBQUEsZUFBWDtBQUNBQyxzRUFBUSxDQUFDVixPQUFELEVBQVVLLEtBQVYsQ0FBUjtBQUNELGFBUkQ7O0FBSGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVlkLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJELElBQU1LLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNWLE9BQUQsRUFBVVcsT0FBVixFQUFzQjtBQUNyQyxNQUFNQyxFQUFFLEdBQUdYLFFBQVEsQ0FBQ1ksYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0EsTUFBSUMsRUFBSjtBQUNBZCxTQUFPLENBQUNlLFdBQVIsQ0FBb0JILEVBQXBCOztBQUhxQyw2Q0FJbEJELE9BSmtCO0FBQUE7O0FBQUE7QUFJckMsd0RBQTRCO0FBQUEsVUFBakJLLElBQWlCO0FBQzFCRixRQUFFLEdBQUdiLFFBQVEsQ0FBQ1ksYUFBVCxDQUF1QixJQUF2QixDQUFMLENBRDBCLENBRTFCOztBQUNBQyxRQUFFLENBQUNHLFNBQUgsYUFBa0JELElBQUksQ0FBQ0UsSUFBdkIsZUFBZ0NGLElBQUksQ0FBQ0csS0FBckM7QUFDQVAsUUFBRSxDQUFDRyxXQUFILENBQWVELEVBQWY7QUFDRDtBQVRvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVXRDLENBVkQ7O0FBWWVKLHVFQUFmLEUiLCJmaWxlIjoiLi9qcy9jYWxsQWpheC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvd0xpc3QgZnJvbSAnLi9saXN0LmpzJztcblxuZnVuY3Rpb24gZ2V0QXhpb3MoKSB7XG4gIHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2F4aW9zJyAqLyAnYXhpb3MnKVxuICAudGhlbihwcm9wcyA9PiB7XG4gICAgLy9jb25zb2xlLmRlYnVnKHByb3BzKTtcbiAgICBjb25zdCB7IGRlZmF1bHQ6IGF4aW9zIH0gPSBwcm9wcztcbiAgICAvL2NvbnNvbGUuZGVidWcoYXhpb3MpO1xuICAgIHJldHVybiBheGlvcztcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHByaW50TWUoKSB7XG4gIGNvbnN0IGF4aW9zID0gYXdhaXQgZ2V0QXhpb3MoKTtcblxuICBheGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpLnRoZW4ocmVzcCA9PiB7XG4gICAgY29uc3QgZGl2TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Jyk7XG4gICAgd2hpbGUgKGRpdkxpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgZGl2TGlzdC5yZW1vdmVDaGlsZChkaXZMaXN0LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCB1c2VycyA9IHJlc3AuZGF0YTtcbiAgICB1c2Vycy5zb3J0KCgpPT4oTWF0aC5yYW5kb20oKSAtIE1hdGgucmFuZG9tKCkpKTtcbiAgICBzaG93TGlzdChkaXZMaXN0LCB1c2Vycyk7XG4gIH0pO1xufTsiLCJjb25zdCBzaG93TGlzdCA9IChkaXZMaXN0LCBhcnJMaXN0KSA9PiB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbGV0IGxpO1xuICBkaXZMaXN0LmFwcGVuZENoaWxkKHVsKTtcbiAgZm9yIChjb25zdCBpdGVtIG9mIGFyckxpc3QpIHtcbiAgICBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgLy9jb25zb2xlLmRlYnVnKGl0ZW0pO1xuICAgIGxpLmlubmVyVGV4dCA9IGAke2l0ZW0ubmFtZX0gKCR7aXRlbS5lbWFpbH0pYDtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSlcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd0xpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9