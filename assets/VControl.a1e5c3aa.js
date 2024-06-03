import { _ as _export_sfc } from "./index.4ea6d167.js";
import { d as defineComponent, h as computed, o as openBlock, b as createElementBlock, B as renderSlot, n as normalizeClass, y as createCommentVNode, p as pushScopeId, e as popScopeId, f as createBaseVNode } from "./vendor.11f8b2c5.js";
var VControl_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-fc9d2584"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "form-icon"
};
const _hoisted_2 = ["data-icon"];
const _hoisted_3 = {
  key: 1,
  class: "validation-icon is-success"
};
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:check"
}, null, -1));
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = {
  key: 2,
  class: "validation-icon is-error"
};
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1));
const _hoisted_8 = [
  _hoisted_7
];
const _sfc_main = defineComponent({
  __name: "VControl",
  props: {
    icon: { default: void 0 },
    isValid: { type: Boolean },
    hasError: { type: Boolean },
    loading: { type: Boolean },
    expanded: { type: Boolean },
    textaddon: { type: Boolean },
    nogrow: { type: Boolean },
    subcontrol: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const isIconify = computed(() => {
      return props.icon && props.icon.indexOf(":") !== -1;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["control", [
          _ctx.icon && "has-icon",
          _ctx.loading && "is-loading",
          _ctx.expanded && "is-expanded",
          _ctx.nogrow && "is-nogrow",
          _ctx.textaddon && "is-textarea-addon",
          _ctx.isValid && "has-validation has-success",
          _ctx.hasError && "has-validation has-error",
          _ctx.subcontrol && "subcontrol"
        ]])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        _ctx.icon ? (openBlock(), createElementBlock("div", _hoisted_1, [
          isIconify.value ? (openBlock(), createElementBlock("i", {
            key: 0,
            "aria-hidden": "true",
            class: "iconify",
            "data-icon": _ctx.icon
          }, null, 8, _hoisted_2)) : (openBlock(), createElementBlock("i", {
            key: 1,
            "aria-hidden": "true",
            class: normalizeClass(_ctx.icon)
          }, null, 2))
        ])) : createCommentVNode("", true),
        _ctx.isValid ? (openBlock(), createElementBlock("div", _hoisted_3, _hoisted_5)) : _ctx.hasError ? (openBlock(), createElementBlock("div", _hoisted_6, _hoisted_8)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "extra", {}, void 0, true)
      ], 2);
    };
  }
});
var __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fc9d2584"]]);
export { __unplugin_components_2 as _ };
