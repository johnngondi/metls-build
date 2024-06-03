import { d as defineComponent, o as openBlock, b as createElementBlock, f as createBaseVNode, B as renderSlot, A as toDisplayString, n as normalizeClass, y as createCommentVNode } from "./vendor.11f8b2c5.js";
const _hoisted_1 = { class: "page-placeholder" };
const _hoisted_2 = { class: "placeholder-content" };
const _hoisted_3 = { class: "dark-inverted" };
const _sfc_main = defineComponent({
  __name: "VPlaceholderPage",
  props: {
    title: {},
    subtitle: { default: void 0 },
    larger: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "image"),
          createBaseVNode("h3", _hoisted_3, toDisplayString(props.title), 1),
          props.subtitle ? (openBlock(), createElementBlock("p", {
            key: 0,
            class: normalizeClass([props.larger && "is-larger"])
          }, toDisplayString(props.subtitle), 3)) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "action")
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
