exports.ids = [11];
exports.modules = {

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/nuxt-protected-mailto/components/Mailto.vue?vue&type=template&id=5491f825&lang=html&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.mailtoHandler
    }
  }, [_vm._t("default", function () {
    return [_c('span', {
      domProps: {
        "innerHTML": _vm._s(_vm.encoded)
      }
    })];
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/nuxt-protected-mailto/components/Mailto.vue?vue&type=template&id=5491f825&lang=html&

// EXTERNAL MODULE: external "is-email"
var external_is_email_ = __webpack_require__(32);
var external_is_email_default = /*#__PURE__*/__webpack_require__.n(external_is_email_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/nuxt-protected-mailto/components/Mailto.vue?vue&type=script&lang=js&

function formatMail(mail, asArray = false, pretty = true) {
  if (typeof mail === 'string') {
    if (mail.endsWith(',')) {
      mail = mail.substring(0, mail.length - 1);
    }
    if (mail.startsWith(',')) {
      mail = mail.substring(1);
    }
    mail = mail.split(',');
  }
  mail = mail.map(email => {
    return email.trim();
  });
  if (asArray) {
    return mail;
  }
  return pretty ? mail.join(', ') : mail.join(',');
}
function validateMail(value) {
  let isValid = true;
  value = formatMail(value, true, false);
  value.forEach(email => {
    if (!external_is_email_default()(email)) {
      isValid = false;
    }
  });
  return isValid;
}
function queryParameters(subject, body, cc, bcc) {
  const params = [];
  cc = cc !== undefined ? `CC=${formatMail(cc)}` : null;
  bcc = bcc !== undefined ? `BCC=${formatMail(bcc)}` : null;
  subject = subject !== undefined ? `subject=${encodeURIComponent(subject)}` : null;
  body = body !== undefined ? `body=${encodeURIComponent(body)}` : null;
  if (cc) {
    params.push(cc);
  }
  if (bcc) {
    params.push(bcc);
  }
  if (subject) {
    params.push(subject);
  }
  if (body) {
    params.push(body);
  }
  if (params.length > 0) {
    return `?${params.join('&')}`;
  } else {
    return '';
  }
}
/* harmony default export */ var Mailtovue_type_script_lang_js_ = ({
  props: {
    mail: {
      type: [String, Array],
      required: true,
      validator: value => validateMail(value)
    },
    cc: {
      type: [String, Array],
      default: undefined,
      validator: value => validateMail(value)
    },
    bcc: {
      type: [String, Array],
      default: undefined,
      validator: value => validateMail(value)
    },
    subject: {
      type: String,
      default: undefined
    },
    body: {
      type: String,
      default: undefined
    },
    target: {
      type: [String],
      default: undefined
    }
  },
  computed: {
    encoded() {
      const mail = formatMail(this.mail);
      const buf = [];
      for (let i = mail.length - 1; i >= 0; i--) {
        buf.unshift(['&#', mail.charCodeAt(i), ';'].join(''));
      }
      return buf.join('');
    }
  },
  methods: {
    mailtoHandler(e) {
      e.preventDefault();
      const href = ['mailto:', formatMail(this.mail), queryParameters(this.subject, this.body, this.cc, this.bcc)];
      if (this.target === '_blank') {
        window.open(href.join(''), '_blank');
      } else {
        window.location.href = href.join('');
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/nuxt-protected-mailto/components/Mailto.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Mailtovue_type_script_lang_js_ = (Mailtovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/nuxt-protected-mailto/components/Mailto.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Mailtovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7b98f1c6"
  
)

/* harmony default export */ var Mailto = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=mailto.js.map