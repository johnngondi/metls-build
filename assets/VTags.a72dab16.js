import { d as defineComponent, o as openBlock, b as createElementBlock, B as renderSlot, n as normalizeClass } from "./vendor.11f8b2c5.js";
const _sfc_main = defineComponent({
  __name: "VTags",
  props: {
    addons: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["tags", [props.addons && "has-addons"]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export { _sfc_main as _ };
