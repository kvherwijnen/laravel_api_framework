(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-initials-component"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/layout/components/Avatar/UserInitials.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/layout/components/Avatar/UserInitials.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var Core_models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Core/models/User */ \"./resources/assets/scripts/core/models/User.js\");\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    if (enumerableOnly) symbols = symbols.filter(function (sym) {\n      return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n    });\n    keys.push.apply(keys, symbols);\n  }\n\n  return keys;\n}\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n\n    if (i % 2) {\n      ownKeys(Object(source), true).forEach(function (key) {\n        _defineProperty(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(Object(source)).forEach(function (key) {\n        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n      });\n    }\n  }\n\n  return target;\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'UserInitials',\n  props: {\n    onlyFirst: {\n      type: Boolean,\n      \"default\": false\n    },\n    user: {\n      \"default\": null,\n      required: false\n    }\n  },\n  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"mapGetters\"])({\n    authenticated: 'auth/authenticated',\n    fallBackUser: 'auth/user'\n  })),\n  methods: {\n    getInitials: function getInitials() {\n      var user = this.fallBackUser;\n      if (this.user) user = new Core_models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.user);\n      var hasName = this.onlyFirst ? user.firstName.length > 1 : user.firstName.length > 1 && user.lastName.length > 1;\n      if (hasName) return user.firstName.substring(0, 1).toUpperCase() + (this.onlyFirst ? '' : user.lastName.substring(0, 1).toUpperCase());else return user.name;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2xheW91dC9jb21wb25lbnRzL0F2YXRhci9Vc2VySW5pdGlhbHMudnVlP2QwMWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQUVBO0FBQ0EsUUFEQTtBQUVBO0FBQ0E7QUFDQSxZQURBO0FBRUE7QUFGQSxLQURBO0FBS0E7QUFDQSxpQkFEQTtBQUVBO0FBRkE7QUFMQSxHQUZBO0FBWUEsOEJBQ0E7QUFDQSxtQkFEQTtBQUVBO0FBRkEsSUFEQSxDQVpBO0FBa0JBO0FBQ0EsZUFEQSx5QkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLG1CQUNBLDJHQURBLFdBQ0EsSUFEQSxLQUdBO0FBQ0E7QUFWQTtBQWxCQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9sYXlvdXQvY29tcG9uZW50cy9BdmF0YXIvVXNlckluaXRpYWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tXG4gIC0gOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6XG4gIC1cbiAgLSBDb3B5cmlnaHQgKGMpIDIwMjBcbiAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4gIC0gTGljZW5zZWQgdXNlIG9ubHlcbiAgLVxuICAtIFRoaXMgcHJvZHVjdCBpcyBwYXJ0IG9mIHRoZSBTaGVlcENvbXBhbnkgSW5jb3Jwb3JhdGVkXG4gIC1cbiAgLVxuICAtIExJQ0VOU0UgQlk6XG4gIC0gQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UgOjogU2hlZXAtQUkuY29tXG4gIC0gTW9yZSBpbmZvcm1hdGlvbjogTElDRU5TRS50eHRcbiAgLVxuICAtIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuICAtLT5cblxuPHRlbXBsYXRlPlxuICAgIDxzdmcgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMzQgMThcIiB3aWR0aD1cIjEwMCVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDx0ZXh0IGZpbGw9XCJ3aGl0ZVwiIGxlbmd0aEFkanVzdD1cInNwYWNpbmdcIiB0ZXh0TGVuZ3RoPVwiMjBcIiB4PVwiOFwiIHk9XCIxNFwiPlxuICAgICAgICAgICAge3sgZ2V0SW5pdGlhbHMoKSB9fVxuICAgICAgICA8L3RleHQ+XG4gICAgPC9zdmc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tIFwidnVleFwiO1xuICAgIGltcG9ydCBVc2VyIGZyb20gXCJDb3JlL21vZGVscy9Vc2VyXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdVc2VySW5pdGlhbHMnLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgb25seUZpcnN0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgLi4ubWFwR2V0dGVycyh7XG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRlZDogJ2F1dGgvYXV0aGVudGljYXRlZCcsXG4gICAgICAgICAgICAgICAgZmFsbEJhY2tVc2VyOiAnYXV0aC91c2VyJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldEluaXRpYWxzKCkge1xuICAgICAgICAgICAgICAgIGxldCB1c2VyID0gdGhpcy5mYWxsQmFja1VzZXI7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlcikgdXNlciA9IG5ldyBVc2VyKHRoaXMudXNlcik7XG4gICAgICAgICAgICAgICAgbGV0IGhhc05hbWUgPSB0aGlzLm9ubHlGaXJzdCA/ICh1c2VyLmZpcnN0TmFtZS5sZW5ndGggPiAxKSA6ICh1c2VyLmZpcnN0TmFtZS5sZW5ndGggPiAxICYmIHVzZXIubGFzdE5hbWUubGVuZ3RoID4gMSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXIuZmlyc3ROYW1lLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgKHRoaXMub25seUZpcnN0ID8gJycgOiAodXNlci5sYXN0TmFtZS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSkpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXIubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/layout/components/Avatar/UserInitials.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/layout/components/Avatar/UserInitials.vue?vue&type=template&id=7752ee81&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/layout/components/Avatar/UserInitials.vue?vue&type=template&id=7752ee81& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"svg\",\n    {\n      attrs: {\n        height: \"100%\",\n        viewBox: \"0 0 34 18\",\n        width: \"100%\",\n        xmlns: \"http://www.w3.org/2000/svg\"\n      }\n    },\n    [\n      _c(\n        \"text\",\n        {\n          attrs: {\n            fill: \"white\",\n            lengthAdjust: \"spacing\",\n            textLength: \"20\",\n            x: \"8\",\n            y: \"14\"\n          }\n        },\n        [_vm._v(\"\\n        \" + _vm._s(_vm.getInitials()) + \"\\n    \")]\n      )\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvbGF5b3V0L2NvbXBvbmVudHMvQXZhdGFyL1VzZXJJbml0aWFscy52dWU/NDYxYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9sYXlvdXQvY29tcG9uZW50cy9BdmF0YXIvVXNlckluaXRpYWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NzUyZWU4MSYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic3ZnXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgdmlld0JveDogXCIwIDAgMzQgMThcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgZmlsbDogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgbGVuZ3RoQWRqdXN0OiBcInNwYWNpbmdcIixcbiAgICAgICAgICAgIHRleHRMZW5ndGg6IFwiMjBcIixcbiAgICAgICAgICAgIHg6IFwiOFwiLFxuICAgICAgICAgICAgeTogXCIxNFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0uZ2V0SW5pdGlhbHMoKSkgKyBcIlxcbiAgICBcIildXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/layout/components/Avatar/UserInitials.vue?vue&type=template&id=7752ee81&\n");

/***/ }),

/***/ "./resources/assets/scripts/layout/components/Avatar/UserInitials.vue":
/*!****************************************************************************!*\
  !*** ./resources/assets/scripts/layout/components/Avatar/UserInitials.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UserInitials_vue_vue_type_template_id_7752ee81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserInitials.vue?vue&type=template&id=7752ee81& */ \"./resources/assets/scripts/layout/components/Avatar/UserInitials.vue?vue&type=template&id=7752ee81&\");\n/* harmony import */ var _UserInitials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserInitials.vue?vue&type=script&lang=js& */ \"./resources/assets/scripts/layout/components/Avatar/UserInitials.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _UserInitials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _UserInitials_vue_vue_type_template_id_7752ee81___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _UserInitials_vue_vue_type_template_id_7752ee81___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/assets/scripts/layout/components/Avatar/UserInitials.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvbGF5b3V0L2NvbXBvbmVudHMvQXZhdGFyL1VzZXJJbml0aWFscy52dWU/ZjUzNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRjtBQUMzQjtBQUNMOzs7QUFHM0Q7QUFDc0c7QUFDdEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsa0ZBQU07QUFDUixFQUFFLHVGQUFNO0FBQ1IsRUFBRSxnR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRiIsImZpbGUiOiIuL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9sYXlvdXQvY29tcG9uZW50cy9BdmF0YXIvVXNlckluaXRpYWxzLnZ1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVXNlckluaXRpYWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NzUyZWU4MSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Vc2VySW5pdGlhbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Vc2VySW5pdGlhbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2V2aW52YW5oZXJ3aWpuZW4vUHJvamVjdHMvbGFyYXZlbF9hcGlfZnJhbWV3b3JrL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc3NTJlZTgxJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc3NTJlZTgxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc3NTJlZTgxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Vc2VySW5pdGlhbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3NTJlZTgxJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc3NTJlZTgxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvbGF5b3V0L2NvbXBvbmVudHMvQXZhdGFyL1VzZXJJbml0aWFscy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/scripts/layout/components/Avatar/UserInitials.vue\n");

/***/ }),

/***/ "./resources/assets/scripts/layout/components/Avatar/UserInitials.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/scripts/layout/components/Avatar/UserInitials.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInitials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserInitials.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/layout/components/Avatar/UserInitials.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInitials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvbGF5b3V0L2NvbXBvbmVudHMvQXZhdGFyL1VzZXJJbml0aWFscy52dWU/MDU3MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsd0NBQXVRLENBQWdCLCtSQUFHLEVBQUMiLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvbGF5b3V0L2NvbXBvbmVudHMvQXZhdGFyL1VzZXJJbml0aWFscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VySW5pdGlhbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJJbml0aWFscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/scripts/layout/components/Avatar/UserInitials.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/assets/scripts/layout/components/Avatar/UserInitials.vue?vue&type=template&id=7752ee81&":
/*!***********************************************************************************************************!*\
  !*** ./resources/assets/scripts/layout/components/Avatar/UserInitials.vue?vue&type=template&id=7752ee81& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInitials_vue_vue_type_template_id_7752ee81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserInitials.vue?vue&type=template&id=7752ee81& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/layout/components/Avatar/UserInitials.vue?vue&type=template&id=7752ee81&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInitials_vue_vue_type_template_id_7752ee81___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInitials_vue_vue_type_template_id_7752ee81___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvbGF5b3V0L2NvbXBvbmVudHMvQXZhdGFyL1VzZXJJbml0aWFscy52dWU/ZDM3MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvbGF5b3V0L2NvbXBvbmVudHMvQXZhdGFyL1VzZXJJbml0aWFscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzc1MmVlODEmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJJbml0aWFscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzc1MmVlODEmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/scripts/layout/components/Avatar/UserInitials.vue?vue&type=template&id=7752ee81&\n");

/***/ })

}]);