exports.ids = [1];
exports.modules = {

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/Accordion.vue?vue&type=template&id=116c825c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('li', {
    staticClass: "relative border-b-2 border-gray-200"
  }, [_vm._ssrNode("<button type=\"button\" class=\"w-full py-4 text-left\">", "</button>", [_vm._ssrNode("<div class=\"flex items-center justify-between\">", "</div>", [_vm._ssrNode("<span class=\"font-medium\">" + _vm._ssrEscape(_vm._s(_vm.accordion.title)) + "</span> "), _vm.selected ? _c('ChevronUpIcon', {
    attrs: {
      "size": 20
    }
  }) : _c('ChevronDownIcon', {
    attrs: {
      "size": 20
    }
  })], 2)]), _vm._ssrNode(" "), _c('transition', {
    attrs: {
      "name": "slide"
    }
  }, [_vm.selected ? _c('div', {
    staticClass: "relative overflow-hidden transition-all duration-700"
  }, [_c('div', {
    staticClass: "py-2"
  }, [_c('p', {
    staticClass: "text-sm text-gray-700 tracking-wide leading-relaxed"
  }, [_vm._v("\n          " + _vm._s(_vm.accordion.description) + "\n        ")])])]) : _vm._e()])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/base/Accordion.vue?vue&type=template&id=116c825c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/Accordion.vue?vue&type=script&lang=js&
/* harmony default export */ var Accordionvue_type_script_lang_js_ = ({
  name: 'BaseAccordion',
  props: {
    accordion: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selected: false
    };
  }
});
// CONCATENATED MODULE: ./components/base/Accordion.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_Accordionvue_type_script_lang_js_ = (Accordionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/base/Accordion.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_Accordionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2e5bd95b"
  
)

/* harmony default export */ var Accordion = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=base-accordion.js.map