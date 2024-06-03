import { d as defineComponent, o as openBlock, b as createElementBlock, n as normalizeClass, f as createBaseVNode, y as createCommentVNode, B as renderSlot } from "./vendor.11f8b2c5.js";
const _sfc_main = defineComponent({
  __name: "VLoader",
  props: {
    size: { default: void 0 },
    card: { default: void 0 },
    active: { type: Boolean },
    grey: { type: Boolean },
    translucent: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["has-loader", [props.active && "has-loader-active"]])
      }, [
        props.active ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["v-loader-wrapper is-active", [
            _ctx.grey && "is-grey",
            _ctx.translucent && "is-translucent",
            _ctx.card === "regular" && "s-card",
            _ctx.card === "smooth" && "r-card",
            _ctx.card === "rounded" && "l-card"
          ]])
        }, [
          createBaseVNode("div", {
            class: normalizeClass(["loader is-loading", [props.size && `is-${props.size}`]])
          }, null, 2)
        ], 2)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export { _sfc_main as _ };
