import { d as defineComponent, o as openBlock, b as createElementBlock, A as toDisplayString, n as normalizeClass } from "./vendor.11f8b2c5.js";
const _sfc_main = defineComponent({
  __name: "VTag",
  props: {
    label: { default: void 0 },
    color: { default: void 0 },
    rounded: { type: Boolean },
    curved: { type: Boolean },
    outlined: { type: Boolean },
    elevated: { type: Boolean },
    remove: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("small", {
        class: normalizeClass(["tag", [
          props.color && "is-" + props.color,
          props.rounded && "is-rounded",
          props.curved && "is-curved",
          props.outlined && "is-outlined",
          props.elevated && "is-elevated",
          props.remove && "is-delete"
        ]])
      }, toDisplayString(props.label), 3);
    };
  }
});
export { _sfc_main as _ };
