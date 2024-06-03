import { _ as _export_sfc, m as _sfc_main$1, n as _sfc_main$2, o as _sfc_main$3 } from "./index.4ea6d167.js";
import { m as resolveComponent, o as openBlock, x as createBlock, t as withCtx, f as createBaseVNode, s as createVNode, W as Transition, a0 as resolveDynamicComponent } from "./vendor.11f8b2c5.js";
var certicate_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
const _hoisted_1 = { class: "landing-page-wrapper" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h1", null, "Hello", -1);
function _sfc_render(_ctx, _cache) {
  const _component_LandingEmptyNavigation = _sfc_main$1;
  const _component_RouterView = resolveComponent("RouterView");
  const _component_LandingFooter = _sfc_main$2;
  const _component_LandingLayout = _sfc_main$3;
  return openBlock(), createBlock(_component_LandingLayout, { theme: "light" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        _hoisted_2,
        createVNode(_component_LandingEmptyNavigation),
        createVNode(_component_RouterView, null, {
          default: withCtx(({ Component }) => [
            createVNode(Transition, {
              name: "fade-fast",
              mode: "out-in"
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(Component), {
                  key: _ctx.route.fullPath
                }))
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }),
        createVNode(_component_LandingFooter)
      ])
    ]),
    _: 1
  });
}
var certicate = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { certicate as default };
