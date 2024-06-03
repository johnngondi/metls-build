import { _ as _export_sfc, u as useUserSession } from "./index.4ea6d167.js";
import { o as openBlock, b as createElementBlock, B as renderSlot, m as resolveComponent, x as createBlock, t as withCtx, s as createVNode } from "./vendor.11f8b2c5.js";
const _sfc_main$1 = {};
const _hoisted_1 = { class: "auth-wrapper" };
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var auth_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "Auth",
  beforeRouteEnter() {
    var _a;
    const userSession = useUserSession();
    const group = (_a = userSession.user) == null ? void 0 : _a.user_group_id;
    if (userSession.isLoggedIn) {
      if (group != "citizen") {
        return { name: "app" };
      }
      return { name: "index" };
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RouterView = resolveComponent("RouterView");
  const _component_AuthLayout = __unplugin_components_0;
  return openBlock(), createBlock(_component_AuthLayout, null, {
    default: withCtx(() => [
      createVNode(_component_RouterView)
    ]),
    _: 1
  });
}
var auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { auth as default };
