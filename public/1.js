(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/calendar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/calendar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      weeks: [],
      name: '',
      from: '',
      to: '',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    'events': 'lists'
  }), {
    getToday: function getToday() {
      return new Date();
    },
    tableTitle: function tableTitle() {
      return "".concat(this.months[this.getToday.getMonth()], " ").concat(this.getToday.getFullYear());
    },
    monthDays: function monthDays() {
      return new Date(this.getToday.getFullYear(), this.getToday.getMonth() + 1, 0).getDate();
    }
  }),
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.$store.dispatch('fetchLists');

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    getDay: function getDay(day) {
      return this.days[this.checkDay(day)];
    },
    checkDay: function checkDay(day) {
      var d = new Date(this.getToday.getFullYear(), this.getToday.getMonth(), day);
      return d.getDay();
    },
    checkEvent: function checkEvent(day) {
      if (day <= 9) {
        day = "0".concat(day);
      }

      var eventDate = "".concat(this.getToday.getFullYear(), "-").concat(this.getToday.getMonth() + 1, "-").concat(day); // let index = this.events.findIndex(event => event.date === eventDate)

      var val = this.events.find(function (event) {
        return event.date === eventDate;
      });
      return typeof val !== 'undefined' ? val.name : ''; // return index === 0 ? this.events[index].name : ''
    },
    addEvent: function () {
      var _addEvent = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var self, dateArr, postArr, currD, endD;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = this;
                dateArr = [], postArr = [], currD = new Date(this.from.toLocaleDateString()), endD = new Date(this.to.toLocaleDateString()); // Get all dates between from - to

                while (currD <= endD) {
                  dateArr.push(new Date(currD).toLocaleDateString());
                  currD.setDate(currD.getDate() + 1);
                }

                _.forEach(dateArr, function (val) {
                  var dd = val.split('/'),
                      d = new Date(dd[2], dd[0] + 1, dd[1]); // index = this.weeks.findIndex(week => week === self.days[d.getDay()])

                  _.forEach(self.weeks, function (i) {
                    var index = self.weeks.findIndex(function (week) {
                      return week === self.days[d.getDay()];
                    });

                    if (index === 0) {
                      postArr.push(val);
                    }
                  });
                });

                this.$store.dispatch('addEvents', {
                  dates: postArr,
                  name: this.name,
                  from: this.from.toLocaleDateString(),
                  to: this.to.toLocaleDateString()
                });
                this.$notify({
                  group: 'notify',
                  title: 'Success!',
                  text: 'Event successfully added'
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function addEvent() {
        return _addEvent.apply(this, arguments);
      }

      return addEvent;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/calendar.vue?vue&type=template&id=2c47dc3d&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/calendar.vue?vue&type=template&id=2c47dc3d& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ds-template-three-fourth",
    [
      _c(
        "template",
        { slot: "sidebar" },
        [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "col-form-label" }, [_vm._v("From")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.name,
                  expression: "name"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text" },
              domProps: { value: _vm.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.name = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { staticClass: "col-form-label" }, [_vm._v("From")]),
              _vm._v(" "),
              _c("datepicker", {
                attrs: { format: "yyyy-MM-dd", "bootstrap-styling": true },
                model: {
                  value: _vm.from,
                  callback: function($$v) {
                    _vm.from = $$v
                  },
                  expression: "from"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { staticClass: "col-form-label" }, [_vm._v("To")]),
              _vm._v(" "),
              _c("datepicker", {
                attrs: { format: "yyyy-MM-dd", "bootstrap-styling": true },
                model: {
                  value: _vm.to,
                  callback: function($$v) {
                    _vm.to = $$v
                  },
                  expression: "to"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.days, function(item) {
            return _c("div", { key: item, staticClass: "form-check" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.weeks,
                    expression: "weeks"
                  }
                ],
                staticClass: "form-check-input",
                attrs: { type: "checkbox" },
                domProps: {
                  value: item,
                  checked: Array.isArray(_vm.weeks)
                    ? _vm._i(_vm.weeks, item) > -1
                    : _vm.weeks
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.weeks,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = item,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.weeks = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.weeks = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.weeks = $$c
                    }
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { staticClass: "form-check-label" }, [
                _vm._v(_vm._s(item))
              ])
            ])
          }),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-primary", on: { click: _vm.addEvent } },
            [_vm._v("Save")]
          )
        ],
        2
      ),
      _vm._v(" "),
      _c("h3", {}, [_vm._v(_vm._s(_vm.tableTitle))]),
      _vm._v(" "),
      _c(
        "table",
        { staticClass: "table table-striped" },
        _vm._l(_vm.monthDays, function(index) {
          return _c("tr", { key: index }, [
            _c("td", [_vm._v(_vm._s(index + " " + _vm.getDay(index)))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.checkEvent(index)))])
          ])
        }),
        0
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/calendar.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/calendar.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calendar_vue_vue_type_template_id_2c47dc3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.vue?vue&type=template&id=2c47dc3d& */ "./resources/js/views/calendar.vue?vue&type=template&id=2c47dc3d&");
/* harmony import */ var _calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.vue?vue&type=script&lang=js& */ "./resources/js/views/calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _calendar_vue_vue_type_template_id_2c47dc3d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _calendar_vue_vue_type_template_id_2c47dc3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/calendar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/calendar.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/calendar.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./calendar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/calendar.vue?vue&type=template&id=2c47dc3d&":
/*!************************************************************************!*\
  !*** ./resources/js/views/calendar.vue?vue&type=template&id=2c47dc3d& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_template_id_2c47dc3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./calendar.vue?vue&type=template&id=2c47dc3d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/calendar.vue?vue&type=template&id=2c47dc3d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_template_id_2c47dc3d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_template_id_2c47dc3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);