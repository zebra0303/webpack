(window["webpackJsonpwebpack_test"] = window["webpackJsonpwebpack_test"] || []).push([["print"],{

/***/ "./src/js/print.js":
/*!*************************!*\
  !*** ./src/js/print.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.e, __webpack_require__.t, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ printMe
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getAxios() {
  return __webpack_require__.e(/*! import() | axios */ "axios").then(__webpack_require__.t.bind(__webpack_require__, /*! axios */ "./node_modules/axios/index.js", 7)).then(function (props) {
    console.debug(props);
    var axios2 = props["default"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvanMvcHJpbnQuanMiXSwibmFtZXMiOlsiZ2V0QXhpb3MiLCJ0aGVuIiwicHJvcHMiLCJjb25zb2xlIiwiZGVidWciLCJheGlvczIiLCJwcmludE1lIiwibG9nIiwiYXhpb3MiLCJnZXQiLCJyZXNwIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsUUFBVCxHQUFvQjtBQUNsQixTQUFPLDhKQUNOQyxJQURNLENBQ0QsVUFBQUMsS0FBSyxFQUFJO0FBQ2JDLFdBQU8sQ0FBQ0MsS0FBUixDQUFjRixLQUFkO0FBRGEsUUFFSUcsTUFGSixHQUVlSCxLQUZmO0FBR2JDLFdBQU8sQ0FBQ0MsS0FBUixDQUFjQyxNQUFkO0FBQ0EsV0FBT0EsTUFBUDtBQUNELEdBTk0sQ0FBUDtBQU9EOztBQUVjLFNBQWVDLE9BQTlCO0FBQUE7QUFBQTs7O3FFQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiSCxtQkFBTyxDQUFDSSxHQUFSLENBQVksNkJBQVo7QUFEYTtBQUFBLG1CQUVPUCxRQUFRLEVBRmY7O0FBQUE7QUFFUFEsaUJBRk87QUFJYkEsaUJBQUssQ0FBQ0MsR0FBTixDQUFVLG1CQUFWLEVBQStCUixJQUEvQixDQUFvQyxVQUFBUyxJQUFJLEVBQUk7QUFDMUNQLHFCQUFPLENBQUNDLEtBQVIsQ0FBY00sSUFBSSxDQUFDQyxJQUFuQjtBQUNELGFBRkQ7O0FBSmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQU9kLEMiLCJmaWxlIjoiLi9qcy9wcmludC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRBeGlvcygpIHtcbiAgcmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnYXhpb3MnICovICdheGlvcycpXG4gIC50aGVuKHByb3BzID0+IHtcbiAgICBjb25zb2xlLmRlYnVnKHByb3BzKTtcbiAgICBjb25zdCB7IGRlZmF1bHQ6IGF4aW9zMiB9ID0gcHJvcHM7XG4gICAgY29uc29sZS5kZWJ1ZyhheGlvczIpO1xuICAgIHJldHVybiBheGlvczI7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBwcmludE1lKCkge1xuICBjb25zb2xlLmxvZygnSSBnZXQgY2FsbGVkIGZyb20gcHJpbnQuanMhJyk7XG4gIGNvbnN0IGF4aW9zID0gYXdhaXQgZ2V0QXhpb3MoKTtcblxuICBheGlvcy5nZXQoJ2h0dHA6Ly93ZWJjb2RlLm1lJykudGhlbihyZXNwID0+IHtcbiAgICBjb25zb2xlLmRlYnVnKHJlc3AuZGF0YSk7XG4gIH0pO1xufTsiXSwic291cmNlUm9vdCI6IiJ9