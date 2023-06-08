exports.ids = [10];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=line-chart.js.map