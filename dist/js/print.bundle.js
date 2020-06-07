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
function getAxios() {
  return __webpack_require__.e(/*! import() | axios */ "axios").then(__webpack_require__.t.bind(__webpack_require__, /*! axios */ "./node_modules/axios/index.js", 7)).then(props => {
    console.debug(props);
    const {
      default: axios2
    } = props;
    console.debug(axios2);
    return axios2;
  });
}

async function printMe() {
  console.log('I get called from print.js!');
  const axios = await getAxios();
  axios.get('http://webcode.me').then(resp => {
    console.debug(resp.data);
  });
}
;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvanMvcHJpbnQuanMiXSwibmFtZXMiOlsiZ2V0QXhpb3MiLCJ0aGVuIiwicHJvcHMiLCJjb25zb2xlIiwiZGVidWciLCJkZWZhdWx0IiwiYXhpb3MyIiwicHJpbnRNZSIsImxvZyIsImF4aW9zIiwiZ2V0IiwicmVzcCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsUUFBVCxHQUFvQjtBQUNsQixTQUFPLDhKQUNOQyxJQURNLENBQ0RDLEtBQUssSUFBSTtBQUNiQyxXQUFPLENBQUNDLEtBQVIsQ0FBY0YsS0FBZDtBQUNBLFVBQU07QUFBRUcsYUFBTyxFQUFFQztBQUFYLFFBQXNCSixLQUE1QjtBQUNBQyxXQUFPLENBQUNDLEtBQVIsQ0FBY0UsTUFBZDtBQUNBLFdBQU9BLE1BQVA7QUFDRCxHQU5NLENBQVA7QUFPRDs7QUFFYyxlQUFlQyxPQUFmLEdBQXlCO0FBQ3RDSixTQUFPLENBQUNLLEdBQVIsQ0FBWSw2QkFBWjtBQUNBLFFBQU1DLEtBQUssR0FBRyxNQUFNVCxRQUFRLEVBQTVCO0FBRUFTLE9BQUssQ0FBQ0MsR0FBTixDQUFVLG1CQUFWLEVBQStCVCxJQUEvQixDQUFvQ1UsSUFBSSxJQUFJO0FBQzFDUixXQUFPLENBQUNDLEtBQVIsQ0FBY08sSUFBSSxDQUFDQyxJQUFuQjtBQUNELEdBRkQ7QUFHRDtBQUFBLEMiLCJmaWxlIjoiLi9qcy9wcmludC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRBeGlvcygpIHtcbiAgcmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnYXhpb3MnICovICdheGlvcycpXG4gIC50aGVuKHByb3BzID0+IHtcbiAgICBjb25zb2xlLmRlYnVnKHByb3BzKTtcbiAgICBjb25zdCB7IGRlZmF1bHQ6IGF4aW9zMiB9ID0gcHJvcHM7XG4gICAgY29uc29sZS5kZWJ1ZyhheGlvczIpO1xuICAgIHJldHVybiBheGlvczI7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBwcmludE1lKCkge1xuICBjb25zb2xlLmxvZygnSSBnZXQgY2FsbGVkIGZyb20gcHJpbnQuanMhJyk7XG4gIGNvbnN0IGF4aW9zID0gYXdhaXQgZ2V0QXhpb3MoKTtcblxuICBheGlvcy5nZXQoJ2h0dHA6Ly93ZWJjb2RlLm1lJykudGhlbihyZXNwID0+IHtcbiAgICBjb25zb2xlLmRlYnVnKHJlc3AuZGF0YSk7XG4gIH0pO1xufTsiXSwic291cmNlUm9vdCI6IiJ9