(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{531:function(t,e,n){"use strict";n.r(e);n(39),n(60);var r={name:"BaseAccordion",props:{accordion:{type:Object,required:!0}},data:function(){return{selected:!1}}},c=n(2),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("li",{staticClass:"relative border-b-2 border-gray-200"},[e("button",{staticClass:"w-full py-4 text-left",attrs:{type:"button"},on:{click:function(e){t.selected=!t.selected}}},[e("div",{staticClass:"flex items-center justify-between"},[e("span",{staticClass:"font-medium"},[t._v(t._s(t.accordion.title))]),t._v(" "),t.selected?e("ChevronUpIcon",{attrs:{size:20}}):e("ChevronDownIcon",{attrs:{size:20}})],1)]),t._v(" "),e("transition",{attrs:{name:"slide"}},[t.selected?e("div",{staticClass:"relative overflow-hidden transition-all duration-700"},[e("div",{staticClass:"py-2"},[e("p",{staticClass:"text-sm text-gray-700 tracking-wide leading-relaxed"},[t._v("\n          "+t._s(t.accordion.description)+"\n        ")])])]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports}}]);