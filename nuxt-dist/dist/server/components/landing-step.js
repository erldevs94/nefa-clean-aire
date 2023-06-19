exports.ids = [8];
exports.modules = {

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ac-2.9b3a04d.jpg";

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ac-3.35862a2.jpg";

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ac-4.f846160.jpg";

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/arrow.60f4e50.png";

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/buy-crypto.46d8692.png";

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fund.93372b0.png";

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sign-up.4afd242.png";

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ac-2.jpg": 37,
	"./ac-3.jpg": 38,
	"./ac-4.jpg": 39,
	"./arrow.png": 40,
	"./buy-crypto.png": 41,
	"./fund.png": 42,
	"./sign-up.png": 43
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 59;

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Step.vue?vue&type=template&id=5763d62a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "space-y-6 sm:space-y-3 text-center"
  }, [_vm._ssrNode("<img" + _vm._ssrAttr("src", __webpack_require__(59)(`./${_vm.step.img}`)) + " alt class=\"mx-auto\"> <h3 class=\"text-xl text-neutral-800 font-semibold\">" + _vm._ssrEscape(_vm._s(_vm.step.title)) + "</h3> " + _vm._ssrList(_vm.step.description, function (item, index) {
    return "<p class=\"text-sm text-gray-700 leading-relaxed\">" + _vm._ssrEscape("\n    " + _vm._s(item) + "\n  ") + "</p>";
  }))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/landing/Step.vue?vue&type=template&id=5763d62a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Step.vue?vue&type=script&lang=js&
/* harmony default export */ var Stepvue_type_script_lang_js_ = ({
  name: 'LandingStep',
  props: {
    step: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/landing/Step.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_Stepvue_type_script_lang_js_ = (Stepvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing/Step.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_Stepvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b3542ee2"
  
)

/* harmony default export */ var Step = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=landing-step.js.map