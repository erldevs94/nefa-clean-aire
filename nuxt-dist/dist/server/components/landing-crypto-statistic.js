exports.ids = [4,10];
exports.modules = {

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/CryptoStatistic.vue?vue&type=template&id=92239d94&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', _vm._b({
    staticClass: "w-full lg:w-1/3 mt-6 lg:mt-0 overflow-hidden space-y-6"
  }, 'div', _vm.$attrs, false), [_vm._ssrNode("<div class=\"w-full flex items-center justify-between\">", "</div>", [_vm._ssrNode("<span class=\"font-medium\">" + _vm._ssrEscape(_vm._s(_vm.title)) + "</span> "), _vm._ssrNode("<button href=\"#\" class=\"px-3 py-1 text-sm font-medium text-blue-500 flex items-center space-x-1 rounded-md hover:bg-blue-50 transition duration-300\">", "</button>", [_vm._ssrNode("<span>More</span> "), _c('ChevronRightIcon', {
    attrs: {
      "size": 16
    }
  })], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex flex-col\">", "</div>", [_vm._ssrNode("<div class=\"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8\">", "</div>", [_vm._ssrNode("<div class=\"px-2 sm:px-6 py-2 align-middle inline-block min-w-full overflow-hidden\">", "</div>", [_vm._ssrNode("<table class=\"min-w-full\">", "</table>", [_vm._ssrNode("<thead><tr><th class=\"text-left text-sm font-medium text-gray-500\">Name</th> <th class=\"text-left text-sm font-medium text-gray-500\">Price</th> <th class=\"hidden sm:block text-left text-sm font-medium text-gray-500\">Chart</th></tr></thead> "), _vm._ssrNode("<tbody>", "</tbody>", _vm._l(_vm.datasets, function (data) {
    return _vm._ssrNode("<tr class=\"border-b border-gray-200\">", "</tr>", [_vm._ssrNode("<td class=\"py-4 whitespace-nowrap\"><div class=\"flex items-center space-x-2\"><img" + _vm._ssrAttr("src", __webpack_require__(87)(`./${data.logo}`)) + " alt> <span>" + _vm._ssrEscape(_vm._s(data.name)) + "</span></div></td> "), _vm._ssrNode("<td class=\"py-4 whitespace-nowrap\">", "</td>", [_vm._ssrNode("<div class=\"flex items-center\">", "</div>", [data.increase ? _c('PlusThickIcon', {
      staticClass: "text-emerald-500",
      attrs: {
        "size": 14
      }
    }) : _c('MinusThickIcon', {
      staticClass: "text-red-500",
      attrs: {
        "size": 14
      }
    }), _vm._ssrNode(" <span>" + _vm._ssrEscape("$" + _vm._s(data.price)) + "</span>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<td class=\"hidden sm:block whitespace-nowrap\">", "</td>", [_vm._ssrNode("<div>", "</div>", [_c('LineChart', {
      staticClass: "w-28 h-12 -mx-2",
      attrs: {
        "datasets": data.data,
        "increase": data.increase
      }
    })], 1)])], 2);
  }), 0)], 2)])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/landing/CryptoStatistic.vue?vue&type=template&id=92239d94&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/CryptoStatistic.vue?vue&type=script&lang=js&
/* harmony default export */ var CryptoStatisticvue_type_script_lang_js_ = ({
  name: 'LandingCryptoStatistic',
  props: {
    title: {
      type: String,
      default: ''
    },
    datasets: {
      type: Array,
      default: () => []
    }
  }
});
// CONCATENATED MODULE: ./components/landing/CryptoStatistic.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_CryptoStatisticvue_type_script_lang_js_ = (CryptoStatisticvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing/CryptoStatistic.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_CryptoStatisticvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2841769c"
  
)

/* harmony default export */ var CryptoStatistic = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LineChart: __webpack_require__(83).default})


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2share.785d7a0.png";

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM2SURBVHgBlZXNaxNBFMDfm9mt/QhSi1gVbFPbCI3mJNqrSD0oSks9+Q+IHryoWCh4EEvBm3hrsScRPAl+IEItIp5aPanNJTXUKrX1YGOwapPdeb6ZTTa7S9Im77KzuzPv974HoAH5mTzblU8Nz670jHQ3ck7Uu1ED7F32DA7Qydg+NdMIqC5IGQDd6hDNCcA4JRoBYfDlR/zM3uZW63hoAwob2nHCAD5WbMKUAlrCDORpFBS5wTP/wJnfk36xWn63gj8NoE88wRaqfIzxulMBZBEwqSrfeSlOqAStwWP4jUECNGesIV49rQoxFrawhWnprTUgTkDPpOczespNkPlJCyWPlvlHCYSHVVRl7ZwYQA8DPpW27CaQDzYBOgDko03/pA4h8j7jcQ0RWwJKOcBBF+TtImAXg8YLgPsJxHlOw476QCGIKywJMQgBDKSbAI9yGJp5fUwZ5eJGEeS1or/HB7XpSFpNVSG6TOVOuoOdEAIERU1b4F63Qd3lVLJ+PF3xxgd1spftaiJY3qIMMI0W52rJQk2hDwLojQT10AJa5ETr+pCRPZ+5CiN9ZIUaTVuSdGtCsE+ZEgW2VoeG3rGNGxDuNix5lFKJGDAIRk5ZQlhT0O918nYirjiVF1auJq1IOwc80qABN9GWh0nRpJyLKi0yut63E1rgcL2VQO/ZoFaO1HgxlJOQ16xP63VZv2hNP1+2c8VBtVQCYW2ImuLEX7XBvdwE6iUn4wCH7YiqDuCR4+acwQ7Wb2JUBhGDoJegHsHyrGiJ/DjozbQyQH/yE6FBmMMx+I5QK3TikgPyXgHkdME0KOga+YYhD2BNgLtOo2WAltDsInAKyAmlL8KbSZF+wf4A3PH6hq32AZQ15QsSw1O5eklpUFb4HtGsBPeWDbDOxt/kZ56fFzgv960QADaqJ9SCWhIAGY9WGcRzUVeXNlN7Ww+gOuQvhsc13y14zjX3Cazwv17+99W7W/SaVs1NqbH+eX9dDSIEzBUXaSj4TeqhqWeaHjmRm1G9lhmVE2M6l5UTxGPNmQ/q2KIrKvKHR0+x3X4lSqBoH2x3vi5ICJRUCZWuH9CwaNCv1PCMHqqNnPsPVlWQgTRlc+gAAAAASUVORK5CYII="

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bitcoin.2efeba4.png";

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dogecoin.ef19fa0.png";

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHBSURBVHgBzZXPK0RRFMcPxu/fhbBAUQrRRDELFqKUrcUooWTlHyALFv4AbJiF8jdYSUkWShasrGxEJCmRpPz8nu6Zul3z3juvQU59mrn3nXO+795z7n1E/9DywBwoChOUSeGsHTSDeJigMCIlICb/x0GNNjCMSD+IyP8CMK8N1Io0gEZnrgd0ksI0Ijlg0OPZAiikHxDpJlOPVFYLJihNEU7eFeDDnVZNaYj0Oj7ZZM6IPcdNMOuXJMvnWSuZ4iaT8/ngreMGqBChV/AJ6sAVOEuVKOIhwElj8tb1oEnm7LgyUAyewSOYBHsyVq1kGIyAKKh0/PIFktXkkqkd+72AIzeZV02OwSnIIL3tkFnJN/NaCb/ViYi1kNmWpNkrYbsEU+LLfudakXvQB8rBKrgDHWRqkRR5AktgBUyDKrCZKplfC+/Km42BCzKF3ZZn/DtEprsSZA5lwitR0J5zcFz8uIMOwQ2Z8zMDSsVvlDzaVyPCxrdv1BpzvQas8QZY80ugubv2wa01tq8QLnoiKIFG5B1sgTdnnse8ZR9BCbTfkwdw4Mytg2tFrO/d5Ron5KukjcypXqZfMr4+FinE9/3P7AsBIj10rSdnZQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/frog.ae03a20.png";

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAAAAADhgtq/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmARcCMDgIp06qAAABDUlEQVQoz5XSMUvDQBjG8X90cMnQFPfW0UmdHMVPYhA/gINdmyLE1ToLXp0dFBwclEY3QbDg4nYnuDdfoORxSEKuLYI+y8H94Die90W/hT9Ino1OzfOyuOMIgOjAzct5mzrh0JckwMugkQvmM6zFrXu3a2FIlFcSw4n7PAJg20qQVLIBqVT0gcNcErQLCWkCpJLUKw8BVkK6B1JNv9xOJrlEAm4lJAOksp0tJz22Ygm4lpDuStnNpbOAUsYSki2lJ30bY14kwHl/s/2mSzarXw8glY2zMk8PcFVJ3qF1Y70eukXd2zggiBsI3puuR36fq8afz0e3eeptYdpmbwUI9i9nyxuSv2aT6f92ZzE//GqUhj4mcFUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDEtMjNUMDI6NDg6NDcrMDA6MDCKZb1WAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAxLTIzVDAyOjQ4OjQ3KzAwOjAw+zgF6gAAAABJRU5ErkJggg=="

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/moonrock.71ab538.png";

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/musk-doge.f53083a.png";

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ninjafloki.768bc7a.png";

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pappay.4e13578.png";

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMHSURBVHgB3VW/axRBFH5vZvZOVM6ACJJWjVgIKRIsrEKqRGuxEhsbGxsNYpM77QzYGO38A2KjlY0JqQIRToigjZBOxUYNAZG7nR9+b3Z2bzfcX3AbNm/n/Zhv5ntz3xBNysNHHcuvd2ZV5qessWQN0cjixR8dE1v3j+JkbIo1/aYOcHPjw2rOrmsDsIMh9p7YZaTY4w2kdUY296gKiEk8kHJcxCgAAHUasYA6jzrUa+/7ugS4/erjKrvQZQAoz0ikZBmJ8MECq2FV8tfzFSz75CPuBz65GEHuvvgUAYqCcgJFXBtzbcKjE/PRHPkm6v890V78fXr5UN9f+7Kq7AiguZNacSMmu0uxctK0i2IH1Hdn9OJ3AMgmjB6E46z0cybwF1fgE6eaWMuk4B0zSgOF48JqWC56hnwVkEuuADB82B6Gp58TwGQ9/Oze/len6YLF0XPGk4O1pU2+sTEcYxdpLKwzki/W/8zZL72/trBXgqiWpeutof7RHmhqxVclq6k9VNSONsVq4zbyClvGU2xgzh7Lzfbym53Zaifyb/3O/gwZs+1UmC5XOtpBfcXVasfHYm01PsBZWHh74+peJSsCpCnbRnC6mmQMPa42tomm0aJGgGmOA5WHhYZ2rd/6NtPKaMNpN+XSSm3Zmzixq3wuA4CCNumazxQgHj6bfF6HPzQxT4Oud0u/OkPDK+C+UzVRJRqysqlEudCgpB9EPvlzoQf0CY0eYpa3vFAFn/tn6gA611uZD3MiJywCKdb4QpMgOVarKCUq9ke0CgAiRfAT5IcBJtLiDMaokcWRUr2owrtXQscMwhbEbq4p46XKNqW+Uusklk2pr6myo97ao8tdvXs+dFoq30TSPDcKqVLY5l0yAldj7p5SubGV3uMnl7qyCXNKhU074HmGtmhsU/jVzkc6tEM/5Bu0xRi+tfQKt2H8PWCsYp6K1EidQ+7Aud7DtYvdshWGhrxiTHkGnFCJ61SRGlrycj8H4dfGZIh+vIo9Y9VDR7EuXtWpjqQ39uDBy3N7NJHPfweDNd8YAc+HAAAAAElFTkSuQmCC"

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue-chartjs"
var external_vue_chartjs_ = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LineChart.vue?vue&type=script&lang=js&

/* harmony default export */ var LineChartvue_type_script_lang_js_ = ({
  extends: external_vue_chartjs_["Line"],
  props: {
    increase: {
      type: Boolean,
      required: true
    },
    datasets: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      gradient: null,
      gradient2: null
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);
    this.gradient.addColorStop(0.1119, 'rgba(95, 223, 146, 0.5)');
    this.gradient.addColorStop(0.1118, 'rgba(95, 223, 146, 0.3)');
    this.gradient.addColorStop(0.93, 'rgba(196, 196, 196, 0)');
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);
    this.gradient2.addColorStop(0, 'rgba(255, 189, 189, 0.5)');
    this.gradient2.addColorStop(0.94, 'rgba(196, 196, 196, 0)');
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Data One',
        borderColor: this.increase ? '#28C165' : '#F4574D',
        borderWidth: 1,
        backgroundColor: this.increase ? this.gradient : this.gradient2,
        data: this.datasets
      }]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        }
      },
      tooltips: {
        callbacks: {
          label: tooltipItem => {
            return tooltipItem.yLabel;
          }
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            display: false,
            drawBorder: false,
            color: 'rgba(0, 0, 0, 0)'
          }
        }],
        xAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            display: false,
            drawBorder: false,
            color: 'rgba(0, 0, 0, 0)'
          }
        }]
      }
    });
  }
});
// CONCATENATED MODULE: ./components/LineChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LineChartvue_type_script_lang_js_ = (LineChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/LineChart.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LineChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "79114ac8"
  
)

/* harmony default export */ var LineChart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./2share.png": 60,
	"./bitcoin-asia.png": 61,
	"./bitcoin.png": 62,
	"./dogecoin.png": 63,
	"./ethereum.png": 64,
	"./frog.png": 65,
	"./metacraft.png": 66,
	"./moonrock.png": 67,
	"./musk-doge.png": 68,
	"./ninjafloki.png": 69,
	"./pappay.png": 70,
	"./solana.png": 71
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
webpackContext.id = 87;

/***/ })

};;
//# sourceMappingURL=landing-crypto-statistic.js.map