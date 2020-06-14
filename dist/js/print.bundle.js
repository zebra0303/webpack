(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["print"],{

/***/ "./src/js/print.js":
/*!*************************!*\
  !*** ./src/js/print.js ***!
  \*************************/
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




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getAxios() {
  return __webpack_require__.e(/*! import() | axios */ "vendors~axios").then(__webpack_require__.t.bind(null, /*! axios */ "./node_modules/axios/index.js", 7)).then(function (props) {
    console.debug(props);
    var axios2 = props.default;
    console.debug(axios2);
    return axios2;
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
            console.log('I get called from print.js!');
            _context.next = 3;
            return getAxios();

          case 3:
            axios = _context.sent;
            axios.get('http://webcode.me').then(function (resp) {
              console.debug(resp.data);
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _printMe.apply(this, arguments);
}

;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcHJpbnQuanMiXSwibmFtZXMiOlsiZ2V0QXhpb3MiLCJ0aGVuIiwicHJvcHMiLCJjb25zb2xlIiwiZGVidWciLCJheGlvczIiLCJkZWZhdWx0IiwicHJpbnRNZSIsImxvZyIsImF4aW9zIiwiZ2V0IiwicmVzcCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsUUFBVCxHQUFvQjtBQUNsQixTQUFPLHVKQUNOQyxJQURNLENBQ0QsVUFBQUMsS0FBSyxFQUFJO0FBQ2JDLFdBQU8sQ0FBQ0MsS0FBUixDQUFjRixLQUFkO0FBRGEsUUFFSUcsTUFGSixHQUVlSCxLQUZmLENBRUxJLE9BRks7QUFHYkgsV0FBTyxDQUFDQyxLQUFSLENBQWNDLE1BQWQ7QUFDQSxXQUFPQSxNQUFQO0FBQ0QsR0FOTSxDQUFQO0FBT0Q7O0FBRWMsU0FBZUUsT0FBOUI7QUFBQTtBQUFBOzs7cUVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2JKLG1CQUFPLENBQUNLLEdBQVIsQ0FBWSw2QkFBWjtBQURhO0FBQUEsbUJBRU9SLFFBQVEsRUFGZjs7QUFBQTtBQUVQUyxpQkFGTztBQUliQSxpQkFBSyxDQUFDQyxHQUFOLENBQVUsbUJBQVYsRUFBK0JULElBQS9CLENBQW9DLFVBQUFVLElBQUksRUFBSTtBQUMxQ1IscUJBQU8sQ0FBQ0MsS0FBUixDQUFjTyxJQUFJLENBQUNDLElBQW5CO0FBQ0QsYUFGRDs7QUFKYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBT2QsQyIsImZpbGUiOiIuL2pzL3ByaW50LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldEF4aW9zKCkge1xuICByZXR1cm4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdheGlvcycgKi8gJ2F4aW9zJylcbiAgLnRoZW4ocHJvcHMgPT4ge1xuICAgIGNvbnNvbGUuZGVidWcocHJvcHMpO1xuICAgIGNvbnN0IHsgZGVmYXVsdDogYXhpb3MyIH0gPSBwcm9wcztcbiAgICBjb25zb2xlLmRlYnVnKGF4aW9zMik7XG4gICAgcmV0dXJuIGF4aW9zMjtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHByaW50TWUoKSB7XG4gIGNvbnNvbGUubG9nKCdJIGdldCBjYWxsZWQgZnJvbSBwcmludC5qcyEnKTtcbiAgY29uc3QgYXhpb3MgPSBhd2FpdCBnZXRBeGlvcygpO1xuXG4gIGF4aW9zLmdldCgnaHR0cDovL3dlYmNvZGUubWUnKS50aGVuKHJlc3AgPT4ge1xuICAgIGNvbnNvbGUuZGVidWcocmVzcC5kYXRhKTtcbiAgfSk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=